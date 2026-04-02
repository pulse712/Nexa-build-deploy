import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import imgEnterprise from "@/assets/products/enterprise-dashboard.jpg";
import imgFintech from "@/assets/products/fintech-platform.jpg";
import imgHealthcare from "@/assets/products/healthcare-platform.jpg";
import imgEcommerce from "@/assets/products/ecommerce-platform.jpg";
import imgSaas from "@/assets/products/saas-platform.jpg";
import imgLegacy from "@/assets/products/legacy-modern.jpg";
import imgAI from "@/assets/products/ai-ml-platform.jpg";
import imgCloud from "@/assets/products/cloud-platform.jpg";
import imgSecurity from "@/assets/products/cybersecurity-platform.jpg";
import imgData from "@/assets/products/data-analytics-platform.jpg";
import imgIoT from "@/assets/products/iot-platform.jpg";
import imgDevOps from "@/assets/products/devops-platform.jpg";

const products = [
  { name: "NexaEnterprise Suite", tag: "Enterprise", desc: "All-in-one enterprise platform for operations, workflows, and scaling.", image: imgEnterprise, href: "/solutions/enterprise" },
  { name: "NexaPay Platform", tag: "FinTech", desc: "Complete financial technology infrastructure for banking and payments.", image: imgFintech, href: "/solutions/fintech" },
  { name: "NexaHealth Platform", tag: "Healthcare", desc: "HIPAA-compliant digital health platform for patient care and research.", image: imgHealthcare, href: "/solutions/healthcare" },
  { name: "NexaCommerce Engine", tag: "E-Commerce", desc: "End-to-end commerce platform driving conversions and scaling stores.", image: imgEcommerce, href: "/solutions/ecommerce" },
  { name: "NexaSaaS Builder", tag: "SaaS", desc: "Multi-tenant SaaS development from MVP to scale.", image: imgSaas, href: "/solutions/saas" },
  { name: "NexaMigrate Platform", tag: "Modernization", desc: "Transform legacy systems into modern cloud-native platforms.", image: imgLegacy, href: "/solutions/legacy-modernization" },
  { name: "NexaAI Studio", tag: "AI/ML", desc: "Enterprise AI platform for building and deploying ML models.", image: imgAI, href: "/solutions/ai-ml" },
  { name: "NexaCloud Platform", tag: "Cloud", desc: "Cloud infrastructure for performance, reliability, and cost efficiency.", image: imgCloud, href: "/solutions/cloud-native" },
  { name: "NexaShield Security", tag: "Cybersecurity", desc: "Enterprise cybersecurity covering threats, compliance, and response.", image: imgSecurity, href: "/solutions/cybersecurity" },
  { name: "NexaInsight Analytics", tag: "Data", desc: "Modern analytics, data warehouses, and predictive intelligence.", image: imgData, href: "/solutions/data-analytics" },
  { name: "NexaConnect IoT", tag: "IoT", desc: "Intelligent IoT platform for connected devices and edge computing.", image: imgIoT, href: "/solutions/iot" },
  { name: "NexaOps Platform", tag: "DevOps", desc: "CI/CD, IaC, observability, and platform engineering.", image: imgDevOps, href: "/solutions/devops" },
];

const SolutionsIndex = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Our Products</p>
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              IT Products That <span className="gradient-text">Scale</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
              12 enterprise-grade platforms powering businesses across industries. From AI to IoT, we've built products that solve real problems.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.06}>
              <Link to={p.href} className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(220 13% 91%)", boxShadow: "var(--shadow-card)" }}>
                <div className="relative overflow-hidden">
                  <img src={p.image} alt={p.name} width={1280} height={720} loading="lazy" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium" style={{ background: "hsl(222 47% 11% / 0.8)", color: "hsl(192 91% 52%)", backdropFilter: "blur(8px)" }}>
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    View Product <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Need a Custom Solution?</h2>
          <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>We build custom products for unique challenges. Let's discuss your project.</p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
            Contact Us <ArrowRight size={16} className="ml-2" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default SolutionsIndex;
