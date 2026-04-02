import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const leadership = [
  { name: "Alexander Voronov", role: "Chief Executive Officer", bio: "20+ years in enterprise technology leadership. Previously led digital transformation at two Fortune 100 companies.", initials: "AV", image: "/src/assets/Photo/1774532499156_1774532499155-blob.jpg", bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" },
  { name: "Priya Sharma", role: "Chief Technology Officer", bio: "Former VP Engineering at a Fortune 100 company. Expert in distributed systems and cloud architecture.", initials: "PS", image: "/src/assets/Photo/1774545787592_1774545787592-blob.jpg", bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" },
  { name: "James Mitchell", role: "Chief Operating Officer", bio: "Scaled operations across 30+ countries. MBA from Wharton with deep expertise in global delivery.", initials: "JM", image: "/src/assets/Photo/1774672476924_1774672476923-blob.jpg", bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
  { name: "Dr. Lin Wei", role: "VP of AI & Data", bio: "PhD in Machine Learning from MIT. 50+ published papers and 12 patents in artificial intelligence.", initials: "LW", image: "/src/assets/Photo/1774678366817_1774678366816-blob.jpg", bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop" },
  { name: "Maria Santos", role: "VP of Client Services", bio: "15 years in enterprise client management. Trusted advisor to C-suite leaders across industries.", initials: "MS", image: "/src/assets/Photo/1774698280519_1774698280518-blob.jpg", bgImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop" },
  { name: "David Park", role: "VP of Engineering", bio: "Led teams of 500+ engineers globally. Architect behind platforms processing 10M+ daily transactions.", initials: "DP", image: "/src/assets/Photo/1774716054525_1774716054525-blob.jpg", bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop" },
];

const departments = [
  { name: "Engineering", count: "1,200+", desc: "Full-stack developers, architects, and DevOps engineers" },
  { name: "AI & Data Science", count: "300+", desc: "Machine learning engineers, data scientists, and analysts" },
  { name: "Design & UX", count: "150+", desc: "Product designers, researchers, and UX strategists" },
  { name: "Client Services", count: "200+", desc: "Project managers, business analysts, and consultants" },
  { name: "Cybersecurity", count: "100+", desc: "Security engineers, auditors, and compliance specialists" },
  { name: "Operations", count: "150+", desc: "HR, finance, legal, and administrative professionals" },
];

const OurTeam = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden section-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Our Team</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                The <span className="gradient-text">People</span> Behind the Innovation
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                2,000+ talented engineers, designers, and strategists united by a passion for building world-class technology solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Leadership</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Executive Leadership Team</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Seasoned leaders with decades of combined experience in enterprise technology.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.1}>
                <div className="relative rounded-3xl p-8 text-center group overflow-hidden" style={{ background: "hsl(220 20% 92%)", border: "1px solid hsl(220 20% 85%)" }}>
                  <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden transition-all duration-300 group-hover:scale-105 ring-4 ring-indigo-200">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: "hsl(220 30% 15%)" }}>{person.name}</h3>
                  <p className="text-base" style={{ color: "hsl(220 15% 40%)" }}>{person.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Departments</p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Our Global Teams</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <ScrollReveal key={dept.name} delay={i * 0.08}>
                <div className="service-card-dark">
                  <div className="font-heading font-bold text-3xl mb-2 gradient-text">{dept.count}</div>
                  <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 90%)" }}>{dept.name}</h3>
                  <p className="text-sm" style={{ color: "hsl(0 0% 55%)" }}>{dept.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Want to Join Our Team?</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>We're always looking for talented people to help us build the future of enterprise technology.</p>
            <Link to="/careers/positions" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(var(--indigo))" }}>
              View Open Positions <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default OurTeam;