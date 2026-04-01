import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(rejected));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const saved = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(saved));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // Necessary cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 z-50 p-4 md:p-6"
          style={{ maxWidth: '560px' }}
        >
          <div
            className="rounded-xl shadow-2xl border backdrop-blur-xl"
            style={{
              background: "hsl(var(--navy-light) / 0.95)",
              borderColor: "hsl(0 0% 100% / 0.1)",
            }}
          >
            {!showSettings ? (
              // Main Banner
              <div className="p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--cyan) / 0.1)" }}
                  >
                    <Cookie size={20} style={{ color: "hsl(var(--cyan))" }} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-heading text-base font-bold mb-1.5"
                      style={{ color: "hsl(0 0% 95%)" }}
                    >
                      We Value Your Privacy
                    </h3>
                    <p
                      className="text-xs mb-4 leading-relaxed"
                      style={{ color: "hsl(0 0% 65%)" }}
                    >
                      We use cookies to enhance your browsing experience, serve
                      personalized content, and analyze our traffic. By clicking
                      "Accept All", you consent to our use of cookies.
                    </p>
                    <div className="flex flex-row gap-2">
                      <button
                        onClick={() => setShowSettings(true)}
                        className="flex-1 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 justify-center"
                        style={{
                          background: "var(--gradient-primary)",
                          color: "hsl(0 0% 100%)",
                        }}
                      >
                        <Settings size={14} /> Customize
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="flex-1 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border"
                        style={{
                          background: "hsl(0 0% 100% / 0.05)",
                          color: "hsl(0 0% 90%)",
                          borderColor: "hsl(0 0% 100% / 0.1)",
                        }}
                      >
                        Reject All
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:shadow-lg"
                        style={{
                          background: "transparent",
                          color: "hsl(var(--cyan))",
                          border: "1px solid hsl(var(--cyan))",
                        }}
                      >
                        Accept All
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="p-1.5 rounded-lg transition-colors flex-shrink-0"
                    style={{
                      color: "hsl(0 0% 60%)",
                      background: "hsl(0 0% 100% / 0.05)",
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="font-heading text-xl font-bold"
                    style={{ color: "hsl(0 0% 95%)" }}
                  >
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 rounded-lg transition-colors"
                    style={{
                      color: "hsl(0 0% 60%)",
                      background: "hsl(0 0% 100% / 0.05)",
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div
                    className="p-4 rounded-xl border"
                    style={{
                      background: "hsl(0 0% 100% / 0.03)",
                      borderColor: "hsl(0 0% 100% / 0.06)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "hsl(0 0% 90%)" }}
                        >
                          Necessary Cookies
                        </h4>
                        <p
                          className="text-xs"
                          style={{ color: "hsl(0 0% 60%)" }}
                        >
                          Essential for the website to function properly. These
                          cannot be disabled.
                        </p>
                      </div>
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "hsl(var(--cyan) / 0.1)",
                          color: "hsl(var(--cyan))",
                        }}
                      >
                        Always Active
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div
                    className="p-4 rounded-xl border"
                    style={{
                      background: "hsl(0 0% 100% / 0.03)",
                      borderColor: "hsl(0 0% 100% / 0.06)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "hsl(0 0% 90%)" }}
                        >
                          Analytics Cookies
                        </h4>
                        <p
                          className="text-xs"
                          style={{ color: "hsl(0 0% 60%)" }}
                        >
                          Help us understand how visitors interact with our
                          website to improve user experience.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference("analytics")}
                        className="relative w-12 h-6 rounded-full transition-colors duration-200"
                        style={{
                          background: preferences.analytics
                            ? "hsl(var(--cyan))"
                            : "hsl(0 0% 100% / 0.1)",
                        }}
                      >
                        <span
                          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200"
                          style={{
                            transform: preferences.analytics
                              ? "translateX(24px)"
                              : "translateX(0)",
                          }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div
                    className="p-4 rounded-xl border"
                    style={{
                      background: "hsl(0 0% 100% / 0.03)",
                      borderColor: "hsl(0 0% 100% / 0.06)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "hsl(0 0% 90%)" }}
                        >
                          Marketing Cookies
                        </h4>
                        <p
                          className="text-xs"
                          style={{ color: "hsl(0 0% 60%)" }}
                        >
                          Used to deliver personalized advertisements and track
                          campaign performance.
                        </p>
                      </div>
                      <button
                        onClick={() => togglePreference("marketing")}
                        className="relative w-12 h-6 rounded-full transition-colors duration-200"
                        style={{
                          background: preferences.marketing
                            ? "hsl(var(--cyan))"
                            : "hsl(0 0% 100% / 0.1)",
                        }}
                      >
                        <span
                          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200"
                          style={{
                            transform: preferences.marketing
                              ? "translateX(24px)"
                              : "translateX(0)",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    style={{
                      background: "var(--gradient-primary)",
                      color: "hsl(0 0% 100%)",
                    }}
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border"
                    style={{
                      background: "hsl(0 0% 100% / 0.05)",
                      color: "hsl(0 0% 90%)",
                      borderColor: "hsl(0 0% 100% / 0.1)",
                    }}
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
