import { motion } from 'motion/react';
import { ArrowUpRight, Users, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-Centric",
      desc: "We believe technology should serve humanity, not the other way around. Our designs prioritize empathy and connection."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Intentionality",
      desc: "Every pixel, every word, and every interaction is chosen with purpose. We don't do 'filler'."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Radiance",
      desc: "We strive to bring light and clarity to complex digital landscapes, making the web a more beautiful place."
    }
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
              Our Philosophy
            </span>
          </div>
          <h1 className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter leading-[0.85] mb-12">
            Curating the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim italic font-light">FUTURE</span>
          </h1>
          <p className="text-2xl text-on-surface-variant leading-relaxed font-light max-w-2xl">
            Wassup Radiant was born from a simple observation: the digital world is becoming increasingly cluttered and soul-less. We decided to change that through intentional curation.
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden ambient-shadow">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Our Team" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-12">
            <h2 className="text-5xl font-headline font-black tracking-tighter leading-none">The Editorial Approach.</h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed">
              We don't look at web design as a technical task. We look at it as editorial curation. Every project is a narrative that needs to be told through the perfect balance of typography, light, and motion.
            </p>
            <div className="grid grid-cols-1 gap-10">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">{value.title}</h4>
                    <p className="text-on-surface-variant font-light">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter mb-12">Meet the Curators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Julian Vane", role: "Founder & Creative Lead", img: "https://i.pravatar.cc/300?u=julian" },
            { name: "Elena Valerious", role: "Head of Growth", img: "https://i.pravatar.cc/300?u=elena" },
            { name: "Marcus Thorne", role: "Technical Director", img: "https://i.pravatar.cc/300?u=marcus" }
          ].map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-6 ambient-shadow">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h4 className="text-2xl font-headline font-bold mb-1">{member.name}</h4>
              <p className="text-on-surface-variant font-light uppercase tracking-widest text-xs">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
