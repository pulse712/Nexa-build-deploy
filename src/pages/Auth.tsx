import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import Layout from "@/components/Layout";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) navigate("/");
    
    // Handle OAuth callback
    const handleOAuthCallback = async () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const searchParams = new URLSearchParams(window.location.search);
      
      // Check if this is an OAuth callback (has access_token or code)
      if (hashParams.get('access_token') || searchParams.get('code')) {
        setLoading(true);
        try {
          // The session should be automatically set by Supabase
          const { data: { session }, error } = await supabase.auth.getSession();
          
          if (error) throw error;
          
          if (session) {
            toast({ title: "Success!", description: "You've been signed in successfully." });
            // Clean up URL
            window.history.replaceState({}, document.title, "/auth");
            navigate("/");
          }
        } catch (error: any) {
          toast({ title: "Error", description: error.message || "Failed to complete sign in", variant: "destructive" });
        } finally {
          setLoading(false);
        }
      }
    };
    
    handleOAuthCallback();
  }, [user, navigate, toast]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast({ title: "Welcome back!", description: "You've been signed in successfully." });
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast({ title: "Account created!", description: "Please check your email to verify your account." });
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: "google" | "apple") => {
    setLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth(provider, {
        redirect_uri: `${window.location.origin}/auth`,
      });
      if (result.error) throw result.error;
      
      // If redirected is true, the user will be redirected to the OAuth provider
      if (result.redirected) {
        return;
      }
      
      // If successful and not redirected, navigate to home
      toast({ title: "Success!", description: "You've been signed in successfully." });
      navigate("/");
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4" style={{ background: "hsl(var(--surface-dark))" }}>
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2" style={{ color: "hsl(0 0% 100%)" }}>
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-sm" style={{ color: "hsl(0 0% 60%)" }}>
              {isLogin ? "Sign in to your account" : "Get started with NexaTech"}
            </p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: "hsl(var(--navy-light))", border: "1px solid hsl(var(--glass-border))" }}>
            {/* OAuth Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleOAuth("google")}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: "hsl(0 0% 100% / 0.06)",
                  border: "1px solid hsl(0 0% 100% / 0.12)",
                  color: "hsl(0 0% 90%)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
              </button>
              <button
                onClick={() => handleOAuth("apple")}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: "hsl(0 0% 100% / 0.06)",
                  border: "1px solid hsl(0 0% 100% / 0.12)",
                  color: "hsl(0 0% 90%)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                Continue with Apple
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px" style={{ background: "hsl(0 0% 100% / 0.1)" }} />
              <span className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>or</span>
              <div className="flex-1 h-px" style={{ background: "hsl(0 0% 100% / 0.1)" }} />
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailAuth} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm" style={{ color: "hsl(0 0% 70%)" }}>Full Name</Label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "hsl(0 0% 40%)" }} />
                    <Input
                      id="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="pl-10 bg-transparent border-white/10 text-white placeholder:text-white/30 focus:border-accent"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm" style={{ color: "hsl(0 0% 70%)" }}>Email</Label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "hsl(0 0% 40%)" }} />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="pl-10 bg-transparent border-white/10 text-white placeholder:text-white/30 focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm" style={{ color: "hsl(0 0% 70%)" }}>Password</Label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "hsl(0 0% 40%)" }} />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="pl-10 pr-10 bg-transparent border-white/10 text-white placeholder:text-white/30 focus:border-accent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ color: "hsl(0 0% 40%)" }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-medium"
                style={{ background: "var(--gradient-primary)" }}
              >
                {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>

            <p className="text-center text-sm mt-6" style={{ color: "hsl(0 0% 60%)" }}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium hover:underline"
                style={{ color: "hsl(var(--cyan))" }}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
