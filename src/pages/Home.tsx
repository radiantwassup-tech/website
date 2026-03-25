import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Sparkles, 
  DraftingCompass, 
  Search, 
  FileText, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle, 
  ChevronDown,
  ArrowUpRight,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Hero = () => (
  <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
        alt="Modern Minimalist Office"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-surface" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="w-12 h-[1px] bg-primary-fixed" />
          <span className="text-primary-fixed font-headline font-bold text-xs tracking-[0.3em] uppercase">
            EST. 2013 • TOKYO • LONDON • NYC
          </span>
        </div>
        
        <h1 className="text-7xl md:text-[10rem] font-headline font-black text-white tracking-tighter leading-[0.85] mb-12">
          RADIANT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed to-primary-fixed-dim italic font-light">DIGITAL</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
          <p className="text-xl text-white/70 max-w-md leading-relaxed font-light">
            We are a curator-led digital agency blending high-end editorial aesthetics with cutting-edge technology to stage brand excellence.
          </p>
          <Link to="/contact" className="group flex items-center gap-4 bg-white text-on-surface px-10 py-6 rounded-full font-headline font-bold text-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-500 ambient-shadow">
            Start a Project
            <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-500" />
          </Link>
        </div>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40"
    >
      <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Explore</span>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
      />
    </motion.div>
  </section>
);

const IdentitySection = () => {
  const items = [
    {
      icon: "auto_awesome",
      title: "Curation",
      description: "We don't just design; we curate. Every element is selected with editorial precision to ensure your brand narrative is cohesive and compelling."
    },
    {
      icon: "architecture",
      title: "Architecture",
      description: "Building robust, scalable digital ecosystems using modern headless stacks that prioritize performance, security, and organic fluidity."
    },
    {
      icon: "visibility",
      title: "Radiance",
      description: "Our signature aesthetic: high typographic contrast, intentional whitespace, and subtle motion that creates a luminous user experience."
    }
  ];

  return (
    <section className="py-40 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative"
          >
            <div className="mb-10 inline-block">
              <span className="material-symbols-outlined text-5xl text-primary-fixed-dim">
                {item.icon}
              </span>
            </div>
            <h3 className="text-3xl font-headline font-bold mb-6 tracking-tight">{item.title}</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg font-light">
              {item.description}
            </p>
            <div className="mt-8 h-[1px] w-12 bg-surface-container-high group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FeaturedWork = () => (
  <section className="py-40 bg-surface-container-lowest">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
        <div className="max-w-2xl">
          <span className="text-primary font-headline font-bold text-xs tracking-[0.3em] uppercase mb-6 block">Portfolio Highlights</span>
          <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter leading-[0.9]">Staging Digital <br /> Excellence.</h2>
        </div>
        <Link to="/case-studies" className="group flex items-center gap-3 text-lg font-headline font-bold border-b-2 border-primary pb-2 hover:text-primary transition-colors">
          View All Case Studies
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "Lumina Collective",
            category: "E-Commerce / Editorial",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
            size: "large"
          },
          {
            title: "Aether Architecture",
            category: "Brand Identity / Web",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
            size: "small"
          }
        ].map((work, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 ambient-shadow">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </div>
            <h4 className="text-2xl font-headline font-bold mb-2">{work.title}</h4>
            <p className="text-on-surface-variant font-light">{work.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-40 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
        <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter">What Our Partners Say</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            quote: "Wassup Radiant didn't just build us a website; they curated a digital flagship that perfectly captures our brand's editorial soul.",
            author: "Elena Vance",
            role: "Creative Director, Lumina",
            avatar: "https://i.pravatar.cc/150?u=elena"
          },
          {
            quote: "Their attention to typographic detail and motion is unparalleled. They've set a new standard for our industry's digital presence.",
            author: "Marcus Thorne",
            role: "Founder, Aether Group",
            avatar: "https://i.pravatar.cc/150?u=marcus"
          }
        ].map((t, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-surface-container-low ambient-shadow"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
            </div>
            <p className="text-2xl font-light leading-relaxed mb-10 italic">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h5 className="font-headline font-bold">{t.author}</h5>
                <p className="text-sm text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-40 px-8">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto rounded-[4rem] bg-on-surface p-12 md:p-32 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-full h-full bg-primary/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="text-primary-fixed font-headline font-bold text-xs tracking-[0.4em] uppercase mb-10 block">Let's Collaborate</span>
        <h2 className="text-5xl md:text-8xl font-headline font-black text-white tracking-tighter mb-12 leading-[0.9]">Ready to illuminate your brand?</h2>
        <div className="flex flex-col sm:flex-row gap-8">
          <Link to="/contact" className="bg-primary text-on-primary px-16 py-6 rounded-full font-headline font-bold text-xl hover:scale-105 transition-all duration-500 ambient-shadow">
            Start a Project
          </Link>
          <Link to="/services" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-16 py-6 rounded-full font-headline font-bold text-xl hover:bg-white/10 transition-all duration-500">
            Our Services
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);

export default function Home() {
  return (
    <div className="bg-surface">
      <Hero />
      <IdentitySection />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </div>
  );
}
