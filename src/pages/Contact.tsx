import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AlertDialog from "@/components/AlertDialog";
import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, ArrowRight } from "lucide-react";
import globalMap from "@/assets/global-map.jpg";

const offices = [
  { city: "San Francisco", address: "100 Market St, Suite 4200, CA 94105", phone: "+1 (555) 000-1234", tz: "PST (UTC-8)" },
  { city: "London", address: "30 St Mary Axe, EC3A 8BF", phone: "+44 20 7946 0958", tz: "GMT (UTC+0)" },
  { city: "Singapore", address: "1 Raffles Place, #20-61, 048616", phone: "+65 6534 0000", tz: "SGT (UTC+8)" },
  { city: "Dubai", address: "DIFC Gate Village, Building 4", phone: "+971 4 375 0000", tz: "GST (UTC+4)" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: ""
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    setShowAlert(true);
  };

  return (
    <>
      <AlertDialog
        isOpen={showAlert}
        onClose={() => setShowAlert(false)}
        title="Thank you!"
        message="We'll be in touch within 24 hours."
      />
      <Layout>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Contact Us</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Let's Build Something <span className="gradient-text">Extraordinary</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                Whether you have a project in mind or need strategic technology advice, our team is ready to help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="service-card">
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-8">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Company Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Service Interest</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="">Select a service</option>
                          <option>Custom Software Development</option>
                          <option>Cloud & DevOps</option>
                          <option>AI & Machine Learning</option>
                          <option>Cybersecurity</option>
                          <option>IT Consulting</option>
                          <option>Digital Transformation</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="service-card">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Quick Connect</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-primary" />
                      <span className="text-sm text-muted-foreground">hello@nexatech.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-primary" />
                      <span className="text-sm text-muted-foreground">+1 (555) 000-1234</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Response within 24 hours</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="service-card">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Schedule a Call</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a free 30-minute consultation with our solutions team to discuss your project needs.
                  </p>
                  <button 
                    onClick={() => window.open('https://calendly.com/miroclejohn/30min', '_blank')}
                    className="btn-primary w-full !text-sm"
                  >
                    Book a Meeting <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Visit Our Offices</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>We have offices in San Francisco, London, Singapore, and Dubai.</p>
            <a 
              href="/company/offices" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" 
              style={{ background: "hsl(0 0% 100%)", color: "hsl(var(--indigo))" }}
            >
              View All Offices <ArrowRight size={16} className="ml-2" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default Contact;
