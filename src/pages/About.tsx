import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Lightbulb, Heart, Code, Shield } from "lucide-react";
import businessMeeting from "@/assets/business-meeting.jpg";
import dataCenter from "@/assets/data-center.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import techAbstract from "@/assets/tech-abstract.jpg";
import { useTranslation } from "react-i18next";

const leadership = [
  { name: "Alexander Voronov", role: "Chief Executive Officer", bio: "20+ years in enterprise technology leadership" },
  { name: "Priya Sharma", role: "Chief Technology Officer", bio: "Former VP Engineering at a Fortune 100 company" },
  { name: "James Mitchell", role: "Chief Operating Officer", bio: "Scaled operations across 30+ countries" },
  { name: "Dr. Lin Wei", role: "VP of AI & Data", bio: "PhD in Machine Learning, 50+ published papers" },
  { name: "Maria Santos", role: "VP of Client Services", bio: "15 years in enterprise client management" },
  { name: "David Park", role: "VP of Engineering", bio: "Led teams of 500+ engineers globally" },
];

const values = [
  { icon: Target, title: "Excellence", desc: "We set the highest standards in every deliverable." },
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries with emerging technologies." },
  { icon: Users, title: "Collaboration", desc: "We succeed together with our clients and partners." },
  { icon: Heart, title: "Integrity", desc: "We operate with transparency and trust." },
  { icon: Eye, title: "Vision", desc: "We think long-term and build for the future." },
  { icon: Award, title: "Impact", desc: "We measure success by the value we create." },
];

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={businessMeeting} alt="NexaTech leadership team" className="w-full h-full object-cover" width={1200} height={800} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(222 47% 8% / 0.85), hsl(222 47% 8% / 0.95))" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>About NexaTech</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                {t('about.titlePart1')}
                <span className="gradient-text">{t('about.titleHighlight')}</span>
                {t('about.titlePart2')}
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                {t('about.subtitle')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">{t('about.ourStory')}</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">
                {t('about.storyTitle')}
              </h2>
            </div>
          </ScrollReveal>

          {/* The Beginning */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{t('about.theBeginning')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.beginningText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.beginningText2')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={heroOffice} alt="Our early days" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>

          {/* Growth & Evolution */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <img src={dataCenter} alt="Our growth" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="order-1 md:order-2">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{t('about.growthEvolution')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.growthText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.growthText2')}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Our Team Today */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{t('about.teamToday')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.teamText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.teamText2')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={businessMeeting} alt="Our team collaboration" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>

          {/* Our Approach */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-20">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">{t('about.ourApproach')}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(234 89% 54% / 0.1)" }}>
                    <Code size={28} className="text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{t('about.agileDev')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('about.agileDevDesc')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(192 91% 52% / 0.1)" }}>
                    <Users size={28} className="text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{t('about.clientCollab')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('about.clientCollabDesc')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(234 89% 54% / 0.1)" }}>
                    <Shield size={28} className="text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{t('about.qualitySecurity')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('about.qualitySecurityDesc')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Our Expertise */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <img src={techAbstract} alt="Our expertise" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="order-1 md:order-2">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{t('about.ourExpertise')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.expertiseText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.expertiseText2')}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Our Philosophy */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">{t('about.ourPhilosophy')}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('about.philosophyText1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.philosophyText2')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>{t('about.joinTeam')}</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>{t('about.joinTeamDesc')}</p>
            <Link to="/careers/positions" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              {t('about.viewPositions')} <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
