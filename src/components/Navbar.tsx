import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Search, ArrowRight, Building2, Briefcase, Cpu, Lightbulb, Factory, Users, Phone, LogOut } from "lucide-react";
import Logo from "@/assets/Logo/Logo1.png";
import TechMegaMenu from "./TechMegaMenu";
import { useAuth } from "@/contexts/AuthContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
const navItems = [
  {
    label: "Company",
    icon: Building2,
    columns: [
      {
        title: "About",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/company/team" },
          { label: "Mission & Vision", href: "/company/mission-vision" },
          { label: "Partners & Clients", href: "/company/partners" },
          { label: "Company History", href: "/company/history" },
          { label: "Global Offices", href: "/company/offices" },
        ],
      },
    ],
  },
  {
    label: "Services",
    icon: Briefcase,
    columns: [
      {
        title: "Development",
        links: [
          { label: "Custom Software Development", href: "/services#custom-software" },
          { label: "Web & Mobile App Development", href: "/services#web-mobile" },
          { label: "QA & Testing", href: "/services#qa-testing" },
        ],
      },
      {
        title: "Cloud & Infrastructure",
        links: [
          { label: "Cloud & DevOps", href: "/services#cloud-devops" },
          { label: "Cybersecurity Services", href: "/services#cybersecurity" },
          { label: "IT Consulting", href: "/services#consulting" },
        ],
      },
      {
        title: "Intelligence",
        links: [
          { label: "AI & Machine Learning", href: "/services#ai-ml" },
          { label: "Data Engineering", href: "/services#data" },
          { label: "Digital Transformation", href: "/services#digital" },
        ],
      },
    ],
  },
  {
    label: "Technologies",
    icon: Cpu,
    columns: [
      {
        title: "Frontend",
        links: [
          { label: "React", href: "/services" },
          { label: "Angular", href: "/services" },
          { label: "Vue.js", href: "/services" },
        ],
      },
      {
        title: "Backend",
        links: [
          { label: "Node.js", href: "/services" },
          { label: "Java / .NET", href: "/services" },
          { label: "Python", href: "/services" },
        ],
      },
      {
        title: "Mobile & Cloud",
        links: [
          { label: "iOS / Android", href: "/services" },
          { label: "Flutter / React Native", href: "/services" },
          { label: "AWS / Azure / GCP", href: "/services" },
        ],
      },
      {
        title: "Data & AI",
        links: [
          { label: "TensorFlow / PyTorch", href: "/services" },
          { label: "Databricks", href: "/services" },
          { label: "Spark / Kafka", href: "/services" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    icon: Lightbulb,
    columns: [
      {
        title: "By Domain",
        links: [
          { label: "Enterprise Solutions", href: "/solutions/enterprise" },
          { label: "FinTech Solutions", href: "/solutions/fintech" },
          { label: "Healthcare Solutions", href: "/solutions/healthcare" },
          { label: "E-Commerce Solutions", href: "/solutions/ecommerce" },
          { label: "SaaS Development", href: "/solutions/saas" },
          { label: "Legacy Modernization", href: "/solutions/legacy-modernization" },
        ],
      },
      {
        title: "By Technology",
        links: [
          { label: "AI & Machine Learning", href: "/solutions/ai-ml" },
          { label: "Cloud-Native Solutions", href: "/solutions/cloud-native" },
          { label: "Cybersecurity", href: "/solutions/cybersecurity" },
          { label: "Data & Analytics", href: "/solutions/data-analytics" },
          { label: "IoT Solutions", href: "/solutions/iot" },
          { label: "DevOps & Automation", href: "/solutions/devops" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    icon: Factory,
    columns: [
      {
        title: "Sectors",
        links: [
          { label: "Banking & Finance", href: "/industries/banking-finance" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
          { label: "Logistics & Transportation", href: "/industries/logistics" },
          { label: "Education", href: "/industries/education" },
          { label: "Manufacturing", href: "/industries/manufacturing" },
          { label: "Blockchain & Trading", href: "/industries/blockchain-trading" },
          { label: "Web & App Development", href: "/industries/web-app-development" },
        ],
      },
    ],
  },
  {
    label: "Careers",
    icon: Users,
    columns: [
      {
        title: "Join Us",
        links: [
          { label: "Life at NexaTech", href: "/careers/life" },
          { label: "Open Positions", href: "/careers/positions" },
          { label: "Internship Program", href: "/careers/internships" },
          { label: "Hiring Process", href: "/careers/hiring" },
        ],
      },
    ],
  },
  {
    label: "Blog",
    icon: Phone,
    columns: [
      {
        title: "Articles",
        links: [
          { label: "Tech Insights", href: "/blog#tech" },
          { label: "Company News", href: "/blog/news" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setProfileMenuOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setProfileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 py-0">
              <img src={Logo} alt="NexaTech Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0 flex-1 ml-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: activeMenu === item.label ? "hsl(192 91% 52%)" : "hsl(0 0% 80%)" }}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.label && item.label !== "Technologies" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                        style={{ minWidth: item.columns.length > 2 ? "640px" : item.columns.length > 1 ? "480px" : "280px" }}
                      >
                        <div className="mega-menu-overlay rounded-2xl p-6">
                          <div className={`grid gap-8 ${item.columns.length > 2 ? "grid-cols-4" : item.columns.length > 1 ? "grid-cols-3" : "grid-cols-1"}`}>
                            {item.columns.map((col) => (
                              <div key={col.title}>
                                <h4 className="text-xs font-heading font-semibold uppercase tracking-wider mb-4" style={{ color: "hsl(192 91% 52%)" }}>
                                  {col.title}
                                </h4>
                                <div className="space-y-2">
                                  {col.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      to={link.href}
                                      className="group flex items-center gap-2 py-1.5 text-sm transition-colors duration-200"
                                      style={{ color: "hsl(0 0% 70%)" }}
                                      onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100%)")}
                                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 70%)")}
                                    >
                                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <LanguageSwitcher />
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border whitespace-nowrap"
                style={{
                  color: "hsl(192 91% 52%)",
                  borderColor: "hsl(192 91% 52% / 0.3)",
                  background: "hsl(192 91% 52% / 0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(192 91% 52% / 0.15)";
                  e.currentTarget.style.borderColor = "hsl(192 91% 52% / 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(192 91% 52% / 0.05)";
                  e.currentTarget.style.borderColor = "hsl(192 91% 52% / 0.3)";
                }}
              >
                {t('nav.contactUs')}
              </Link>
              {user ? (
                <div className="relative" ref={profileMenuRef}>
                  <button
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200"
                    style={{ background: "var(--gradient-primary)", color: "hsl(0 0% 100%)" }}
                  >
                    {user.email?.charAt(0).toUpperCase()}
                  </button>
                  <AnimatePresence>
                    {profileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute right-0 top-full mt-2 w-48 rounded-xl p-2"
                        style={{ background: "hsl(222 47% 14%)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
                      >
                        <p className="px-3 py-2 text-xs truncate" style={{ color: "hsl(0 0% 60%)" }}>{user.email}</p>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors"
                          style={{ color: "hsl(0 0% 80%)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(0 0% 100% / 0.06)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          <LogOut size={14} />
                          {t('nav.signOut')}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border whitespace-nowrap"
                  style={{
                    color: "hsl(192 91% 52%)",
                    borderColor: "hsl(192 91% 52% / 0.3)",
                    background: "hsl(192 91% 52% / 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "hsl(192 91% 52% / 0.15)";
                    e.currentTarget.style.borderColor = "hsl(192 91% 52% / 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "hsl(192 91% 52% / 0.05)";
                    e.currentTarget.style.borderColor = "hsl(192 91% 52% / 0.3)";
                  }}
                >
                  {t('nav.login')}
                </Link>
              )}
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2"
              style={{ color: "hsl(0 0% 100%)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Technologies Mega Menu */}
      <AnimatePresence>
        {activeMenu === "Technologies" && (
          <div
            onMouseEnter={() => setActiveMenu("Technologies")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <TechMegaMenu />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden overflow-y-auto pt-20"
            style={{ background: "hsl(222 47% 8% / 0.98)" }}
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full py-3 text-lg font-heading font-semibold"
                    style={{ color: "hsl(0 0% 90%)" }}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon size={20} style={{ color: "hsl(192 91% 52%)" }} />
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-9 pb-4 space-y-2">
                          {item.columns.flatMap((col) =>
                            col.links.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="block py-1.5 text-sm"
                                style={{ color: "hsl(0 0% 60%)" }}
                              >
                                {link.label}
                              </Link>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-6">
                <Link to="/contact" className="btn-primary w-full text-center">
                  {t('nav.getStarted')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
