import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, MapPin, Phone, Facebook, Instagram, Youtube, MessageCircle, Send } from "lucide-react";
import Logo from "@/assets/Logo/Logo1.png";
import { useTranslation } from "react-i18next";

// Custom SVG icons for platforms not in lucide-react
const DiscordIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const SlackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2zm1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5zM9 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9zm0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5zm9 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2V9zm-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5zm-2 9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2zm0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  
  const footerLinks = [
    {
      title: t('nav.services'),
      links: [
        { label: t('customDev'), href: "/services" },
        { label: t('cloudDevops'), href: "/services" },
        { label: t('aiMl'), href: "/services" },
        { label: t('cybersecurity'), href: "/services" },
      ],
    },
    {
      title: t('company'),
      links: [
        { label: t('aboutUs'), href: "/about" },
        { label: t('leadership'), href: "/about" },
        { label: t('careers'), href: "/about" },
        { label: t('contact'), href: "/contact" },
      ],
    },
    {
      title: t('industries'),
      links: [
        { label: t('banking'), href: "/services" },
        { label: t('healthcare'), href: "/services" },
        { label: t('retail'), href: "/services" },
        { label: t('logistics'), href: "/services" },
      ],
    },
  ];

  return (
    <footer className="section-dark">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={Logo} alt="NexaTech Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(0 0% 55%)" }}>
              Enterprise-grade technology solutions for global businesses. We transform ideas into scalable digital products.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                <MapPin size={16} style={{ color: "hsl(192 91% 52%)" }} />
                {t('locations')}
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                <Mail size={16} style={{ color: "hsl(192 91% 52%)" }} />
                {t('email')}
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                <Phone size={16} style={{ color: "hsl(192 91% 52%)" }} />
                {t('phone')}
              </div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6" style={{ color: "hsl(0 0% 80%)" }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "hsl(0 0% 50%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(192 91% 52%)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 50%)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t pt-8" style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <p className="text-sm" style={{ color: "hsl(0 0% 40%)" }}>
              {t('allRightsReserved')}
            </p>
            <div className="flex items-center gap-2 text-xs" style={{ color: "hsl(0 0% 40%)" }}>
              <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">{t('privacyPolicy')}</Link>
              <span>·</span>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">{t('termsOfService')}</Link>
              <span>·</span>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">{t('cookiePolicy')}</Link>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "hsl(0 0% 50%)" }}>
              {t('connectWithUs')}
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(201 100% 35% / 0.2)";
                  e.currentTarget.style.color = "hsl(201 100% 55%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              {/* Twitter/X */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(203 89% 53% / 0.2)";
                  e.currentTarget.style.color = "hsl(203 89% 73%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="Twitter"
              >
                <Twitter size={18} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(221 44% 41% / 0.2)";
                  e.currentTarget.style.color = "hsl(221 44% 61%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="Facebook"
              >
                <Facebook size={18} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(340 75% 53% / 0.2)";
                  e.currentTarget.style.color = "hsl(340 75% 73%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="Instagram"
              >
                <Instagram size={18} />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(0 100% 50% / 0.2)";
                  e.currentTarget.style.color = "hsl(0 100% 70%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="YouTube"
              >
                <Youtube size={18} />
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 20% / 0.4)";
                  e.currentTarget.style.color = "hsl(0 0% 90%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="GitHub"
              >
                <Github size={18} />
              </a>

              {/* Discord */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(235 86% 65% / 0.2)";
                  e.currentTarget.style.color = "hsl(235 86% 75%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="Discord"
              >
                <DiscordIcon />
              </a>

              {/* Slack */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(185 66% 53% / 0.2)";
                  e.currentTarget.style.color = "hsl(185 66% 73%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="Slack"
              >
                <SlackIcon />
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(142 70% 49% / 0.2)";
                  e.currentTarget.style.color = "hsl(142 70% 69%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              {/* Telegram */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(200 100% 50% / 0.2)";
                  e.currentTarget.style.color = "hsl(200 100% 70%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
                title="Telegram"
              >
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
