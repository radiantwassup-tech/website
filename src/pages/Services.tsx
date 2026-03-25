import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { 
      icon: "palette", 
      title: "Brand Identity", 
      desc: "Crafting visual languages that resonate. From logos to complete brand systems that define your editorial authority.",
      features: ["Visual Strategy", "Logo Design", "Brand Guidelines", "Typography Systems"]
    },
    { 
      icon: "terminal", 
      title: "Web Development", 
      desc: "High-performance, custom-coded websites built with modern headless tech stacks for ultimate speed and scalability.",
      features: ["React/Next.js", "Headless CMS", "E-Commerce", "Custom APIs"]
    },
    { 
      icon: "search", 
      title: "SEO & Strategy", 
      desc: "Ensuring your radiant brand is found by the right people at the right time through intentional search optimization.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Performance Audit"]
    },
    { 
      icon: "edit_note", 
      title: "Content Curation", 
      desc: "Editorial-grade copywriting and visual storytelling that breathes life into your digital channels.",
      features: ["Copywriting", "Art Direction", "Social Content", "Email Marketing"]
    },
    { 
      icon: "auto_awesome", 
      title: "UI/UX Design", 
      desc: "Intuitive, beautiful interfaces designed with user psychology and organic fluidity at the core.",
      features: ["User Research", "Wireframing", "Prototyping", "Interaction Design"]
    },
    { 
      icon: "rocket_launch", 
      title: "Digital Launch", 
      desc: "Strategic deployment and growth management to ensure your digital product makes a radiant impact.",
      features: ["Launch Strategy", "Campaign Mgmt", "Analytics", "Iterative Growth"]
    }
  ];

  const steps = [
    { number: "01", title: "Discovery", desc: "We immerse ourselves in your brand's world to find the unique editorial angle." },
    { number: "02", title: "Curation", desc: "Selecting the perfect blend of typography, color, and motion to stage your brand." },
    { number: "03", title: "Execution", desc: "Our engineers and designers bring the vision to life with pixel-perfect precision." },
    { number: "04", title: "Refinement", desc: "Continuous iteration and optimization to ensure long-term radiant growth." }
  ];

  return (
    <div className="bg-surface">
      <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-headline font-bold text-xs tracking-[0.3em] uppercase">
              Our Expertise
            </span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter leading-[0.85] mb-12">
            Elevating your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim italic font-light">PRESENCE</span>
          </h1>
          <p className="text-2xl text-on-surface-variant leading-relaxed font-light max-w-2xl">
            We offer a comprehensive suite of creative services designed to transform your brand into a digital leader through intentional curation.
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 rounded-[3rem] bg-surface-container-low hover:scale-[1.02] transition-all duration-500 ambient-shadow group"
            >
              <div className="mb-10 inline-block">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </span>
              </div>
              <h4 className="text-3xl font-headline font-bold mb-6 tracking-tight">{service.title}</h4>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-10">{service.desc}</p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-headline font-bold group/link">
                Inquire Now
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-primary font-headline font-bold text-xs tracking-[0.3em] uppercase mb-8 block">The Radiant Process</span>
            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter leading-[0.9] mb-12">How we stage <br /> your success.</h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-md">
              Our methodology is rooted in editorial precision. We don't just build; we curate every touchpoint to ensure maximum brand resonance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/10"
              >
                <span className="text-4xl font-headline font-black text-primary/20 mb-6 block">{step.number}</span>
                <h4 className="text-xl font-headline font-bold mb-4">{step.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="rounded-[4rem] bg-on-surface p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-primary/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tighter mb-8 leading-[0.9]">Ready to start your radiant journey?</h2>
              <p className="text-white/60 text-xl font-light">Let's discuss how our curator-led approach can transform your digital footprint.</p>
            </div>
            <Link to="/contact" className="bg-primary text-on-primary px-12 py-6 rounded-full font-headline font-bold text-xl hover:scale-105 transition-all duration-500 ambient-shadow">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
