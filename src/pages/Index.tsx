import Layout from "@/components/Layout";
import ScrollReveal, { useCounter } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2, Cloud, Brain, Shield, Monitor, Smartphone,
  ArrowRight, CheckCircle2, Building2, Heart, ShoppingCart,
  Truck, GraduationCap, Factory, Globe, Users, Award, Zap,
  Quote
} from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";
import techAbstract from "@/assets/tech-abstract.jpg";
import globalMap from "@/assets/global-map.jpg";
import dataCenter from "@/assets/data-center.jpg";
import { useTranslation } from "react-i18next";

const services = [
  { icon: Code2, title: "Custom Software Development", desc: "Scalable, enterprise-grade software tailored to your business needs." },
  { icon: Monitor, title: "Web & Mobile Applications", desc: "Responsive web and native mobile apps with exceptional UX." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Cloud migration, infrastructure automation, and CI/CD pipelines." },
  { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent solutions powered by cutting-edge AI and data science." },
  { icon: Shield, title: "Cybersecurity", desc: "Comprehensive security solutions to protect your digital assets." },
  { icon: Smartphone, title: "Digital Transformation", desc: "End-to-end modernization of legacy systems and processes." },
];

const industries = [
  { icon: Building2, name: "Banking & Finance", href: "/industries/banking-finance" },
  { icon: Heart, name: "Healthcare", href: "/industries/healthcare" },
  { icon: ShoppingCart, name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
  { icon: Truck, name: "Logistics", href: "/industries/logistics" },
  { icon: GraduationCap, name: "Education", href: "/industries/education" },
  { icon: Factory, name: "Manufacturing", href: "/industries/manufacturing" },
];

const stats = [
  { value: 500, suffix: "+", label: "home.projectsDelivered" },
  { value: 200, suffix: "+", label: "home.enterpriseClients" },
  { value: 30, suffix: "+", label: "home.countriesServed" },
  { value: 98, suffix: "%", label: "home.clientSatisfaction" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, FinanceFlow", quote: "NexaTech transformed our legacy infrastructure into a modern, cloud-native platform. Their team's expertise in fintech is unmatched." },
  { name: "Marcus Wright", role: "VP Engineering, MedCore", quote: "The AI-powered diagnostics solution they built has improved our processing speed by 300%. Exceptional delivery." },
  { name: "Elena Rodriguez", role: "CEO, ShipTrack Global", quote: "Their dedicated team scaled our logistics platform to handle 10x traffic. Truly enterprise-grade engineering." },
];

const trustedLogos = [
  "Microsoft", "AWS", "Google Cloud", "SAP", "Salesforce", "Oracle", "IBM", "Cisco"
];

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCounter(value);
  const { t } = useTranslation();
  return (
    <div ref={ref} className="text-center">
      <div className="font-heading font-bold text-5xl md:text-6xl counter-value mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: "hsl(0 0% 55%)" }}>{t(label)}</div>
    </div>
  );
};

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Enterprise technology team"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0" />
        
        {/* Floating accent shapes */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full opacity-20 animate-float" style={{ background: "radial-gradient(circle, hsl(234 89% 54% / 0.4), transparent)" }} />
        <div className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full opacity-15 animate-float" style={{ background: "radial-gradient(circle, hsl(192 91% 52% / 0.4), transparent)", animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-xs font-medium tracking-wide" style={{ background: "hsl(234 89% 54% / 0.2)", color: "hsl(192 91% 52%)", border: "1px solid hsl(234 89% 54% / 0.3)" }}>
              <Zap size={14} />
              {t('home.heroTag')}
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.05] mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              {t('home.heroTitle').split('Future')[0]}
              <span className="gradient-text">Future</span>
              {t('home.heroTitle').split('Future')[1]}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl" style={{ color: "hsl(0 0% 70%)" }}>
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                {t('home.startProject')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/services" className="btn-outline-light">
                {t('home.exploreServices')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section-dark py-16 border-t" style={{ borderColor: "hsl(0 0% 100% / 0.05)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-10" style={{ color: "hsl(0 0% 40%)" }}>
            {t('home.trustedBy')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
            {trustedLogos.map((name) => (
              <span key={name} className="font-heading font-bold text-lg md:text-xl" style={{ color: "hsl(0 0% 25%)" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">{t('home.ourServices')}</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                {t('home.servicesTitle')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('home.servicesSubtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="service-card group h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300" style={{ background: "hsl(234 89% 54% / 0.08)" }}>
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    {t('home.learnMore')} <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={techAbstract} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "hsl(222 47% 8% / 0.85)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>
                {t('home.provenTrack')}
              </h2>
              <p className="text-lg" style={{ color: "hsl(0 0% 55%)" }}>{t('home.provenSubtitle')}</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>{t('home.industriesTitle')}</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                {t('home.industriesHeading')}
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "hsl(0 0% 55%)" }}>
                {t('home.industriesSubtitle')}
              </p>
              <div className="space-y-3">
                {[t('home.regulatoryCompliance'), t('home.industryAI'), t('home.scalableArch')].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} style={{ color: "hsl(192 91% 52%)" }} />
                    <span className="text-sm" style={{ color: "hsl(0 0% 70%)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.name} delay={i * 0.08}>
                  <Link to={ind.href} className="industry-card text-center block">
                    <ind.icon size={32} className="mx-auto mb-4" style={{ color: "hsl(192 91% 52%)" }} />
                    <span className="font-heading font-medium text-sm" style={{ color: "hsl(0 0% 80%)" }}>{ind.name}</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={dataCenter} alt="Data center infrastructure" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(222 47% 8% / 0.9), hsl(234 89% 20% / 0.85))" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>{t('home.techStack')}</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                {t('home.techTitle')}
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "hsl(0 0% 65%)" }}>
                {t('home.techSubtitle')}
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "Python", "AWS", "Azure", "Kubernetes", "TensorFlow", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "hsl(0 0% 100% / 0.08)", color: "hsl(0 0% 80%)", border: "1px solid hsl(0 0% 100% / 0.1)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">{t('home.testimonials')}</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                {t('home.testimonialsTitle')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="service-card h-full flex flex-col">
                  <Quote size={24} className="text-primary mb-6 opacity-40" />
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>{t('home.globalPresence')}</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>
                {t('home.globalTitle')}
              </h2>
              <p className="text-lg" style={{ color: "hsl(0 0% 55%)" }}>
                {t('home.globalSubtitle')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid hsl(0 0% 100% / 0.06)" }}>
              <img src={globalMap} alt="NexaTech global offices" className="w-full" loading="lazy" width={1920} height={900} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { city: "San Francisco", label: t('home.americasHQ') },
              { city: "London", label: t('home.emeaHQ') },
              { city: "Singapore", label: t('home.apacHQ') },
              { city: "Dubai", label: t('home.meaOffice') },
            ].map((office) => (
              <ScrollReveal key={office.city}>
                <div className="text-center">
                  <Globe size={24} className="mx-auto mb-3" style={{ color: "hsl(192 91% 52%)" }} />
                  <p className="font-heading font-semibold" style={{ color: "hsl(0 0% 90%)" }}>{office.city}</p>
                  <p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>{office.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 50%, hsl(192 91% 52% / 0.5), transparent 60%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              {t('home.ctaTitle')}
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
              {t('home.ctaSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm tracking-wide transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
                {t('home.scheduleConsult')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/services" className="btn-outline-light">
                {t('home.viewCaseStudies')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
