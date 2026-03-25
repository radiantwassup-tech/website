import { motion } from 'motion/react';
import { ArrowUpRight, Search, Brush, Zap, Target } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: "Lumina Wealth Rebrand",
      category: "FinTech Excellence",
      desc: "Revolutionizing the digital footprint of a legacy asset management firm through human-centric design and AI-driven insights.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl2JYw9hnEo0AnVj0VL045AexcDd-HhNZxyG3DiN7qhFxb-ZyoawQD5cLAiLeGxnSeP0o44Ov03oZQILU8W0XTCKO_SUND4v3KyBwf01rASSSWkJz45b7-Hqc0ZtN4donXhqPDFouOi-tEQsf1HmjfL0rwWU2BT4WekN1vMdp-_Ozfr2Wuua1T_MHMeFYTmyzXglUdlq3KnRxDF51Ts6Ls04zP9SIny7qhGocyLMp2r9Oq2kEyEaDAqmE0PEIv3jijhAPVGXn6RMT6",
      stats: "250%",
      statLabel: "Growth in Engagement",
      span: "md:col-span-12",
      height: "h-[600px]"
    },
    {
      title: "SyncPath Platform",
      category: "SaaS Innovation",
      desc: "Streamlining cross-continental logistics with a custom real-time dashboard and predictive analytics engine.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQaKbCD3WGLjTPOT0f8zninCqjrYYok4pIiyKnQsyomz4LgBZ3J7a-LRHM5mYOd-9mtLHijWc30mk9gFwmooC-TLJ3Q5ZIXhX2phoXjcOOX0qxw9ZdvIMAar_KofYhmntNLTmcq_HPLL_XhKA15kSdx_qNJ7-4W-UrWN4GNgm_aueXvI0hI28zt3qVMJGMgFaZvTqcBoXf3VwuV1zsEs625gwa5tlcWuTXLqN1S03oR1--FBEQKCMfAxFn0KhVOrgbzFBfqebNO33M",
      stats: "-40%",
      statLabel: "Operational Latency",
      span: "md:col-span-7",
      height: "h-[500px]"
    },
    {
      title: "Vera Bloom Shop",
      category: "E-Commerce",
      desc: "Transitioning a boutique flower shop to a global sustainable marketplace with zero-waste packaging logic.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcFKnHdgnIRlDSMSg6HyeN47pHjb6JDvVGtjA0wkJ_jDWmSI7RRGPWxu6jkvszVeZGFus6IIVduLqiUS5z4O90VZ2rI56dDPDrQZo37HJ-80CRc6tVIOcG7WANEZ7rLPguizhLB1DxrESlL_sTUlIK_JjYiDG-H94r63U8-L2N77Cf2sLUzzExnMfbka3Mxy21q5RHPf_UDX4jjTtcNdl5U4oa7rTBPHJyvxLkUG9ABRZNaEugguaoyTZrGstDD3IhCZVaro-lZBVU",
      stats: "1.2M",
      statLabel: "Monthly Active Users",
      span: "md:col-span-5",
      height: "h-[500px]"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-20 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-3 py-1 glass-pill rounded-full mb-6"
        >
          <span className="text-on-secondary-container text-xs font-bold tracking-widest uppercase">Our Impact</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-primary-fixed mb-8"
        >
          Turning Vision into <span className="text-primary">Radiant</span> Reality.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-lg md:text-xl leading-relaxed"
        >
          Explore our selected works where strategy meets execution to drive measurable growth and digital excellence.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {cases.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`${item.span} group relative overflow-hidden rounded-lg bg-surface-container-low ${item.height} cursor-pointer`}
          >
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-primary-fixed font-bold tracking-widest text-xs uppercase mb-4 block">{item.category}</span>
                <h2 className="text-white font-headline text-3xl md:text-4xl font-bold mb-4">{item.title}</h2>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="text-primary-container font-headline text-5xl md:text-6xl font-black mb-2 tracking-tighter">{item.stats}</div>
                <div className="text-white text-sm font-bold uppercase tracking-widest">{item.statLabel}</div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container p-12 rounded-lg flex flex-col justify-center"
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">The Methodology</span>
            <h3 className="font-headline text-3xl font-extrabold text-on-primary-fixed mb-6 tracking-tight">How we drive these numbers.</h3>
            <div className="space-y-6">
              {[
                { icon: "troubleshoot", title: "Deep Diagnosis", desc: "We don't guess. We audit every pixel and process to find the friction." },
                { icon: "brush", title: "Aesthetic Authority", desc: "High-end design builds trust, and trust builds conversion." },
                { icon: "speed", title: "Agile Execution", desc: "Rapid prototyping and constant iteration ensure the result is flawless." }
              ].map((m, i) => (
                <div key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">{m.icon}</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">{m.title}</h4>
                    <p className="text-on-surface-variant text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg bg-surface-container-low h-full cursor-pointer min-h-[400px]"
          >
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh8ELJ815V7R3MlPdx-uWVy0KaLaXRcj2V44Z28C1dyUB_AQv6GO-KkCx5FOvJLaa23SQ3Cgto7umWOEwCZEwEk1JgvfiVquKixRa7JaCOqCpYWC7peLi8Y_KmBgGUUc-1siTLXhaCDLAQdKdJNzPS6MVfjmkHgSJO5KsAadD5GwLv5gIyAhovafuDyqCe9MfpID3sJ17ZiOvFlJU6WZfudk5FEvLVPMJ7htnL45c6gjs1k-hvOSPOXuwh-lJTBy-_WvFuj9Jc5UKq" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-8 left-8">
              <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-xl">
                <div className="text-primary text-4xl font-black font-headline mb-1">98%</div>
                <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">Client Retention</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="mt-32 text-center bg-on-primary-fixed text-white rounded-[3rem] p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32" />
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to be our next success story?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Let's build something radiant together. Our team is ready to scale your vision with precision and style.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-container transition-all hover:translate-y-[-2px] ambient-shadow">Start Your Project</button>
            <button className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">View All Services</button>
          </div>
        </div>
      </section>
    </div>
  );
}
