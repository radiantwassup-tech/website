import { motion } from 'motion/react';

export default function Blog() {
  const posts = [
    {
      title: "Scaling Creative Assets without Losing the Brand Soul",
      category: "Performance",
      date: "March 12, 2025",
      readTime: "5 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHhY0IizvuWzjl0iRDdBwv1SoEi7dqF7a7MVo16A0qYpRMMQnSvxQh9n6vr2ulLAriNRRs_aBzC_-1K0EBDE0-w380uCr_rCVkQ246_cg3gAW3apP1ARNKVKqP51Gs9ZnAyv9GcUfqI4KgnaUtGEMKyjgEqcBMVuhHcneySU_wbYozejh2F1k6ydzwsd1eMHDKBNcvkWktVpzJ_T4d2RI384emO1o7-Llcue6tSoXmi5LNThrhBDMXviyAb9ScwepKHuz-4zgH1Xx1",
      desc: "Strategies for maintaining high-end visual standards while expanding your reach across multiple digital touchpoints."
    },
    {
      title: "The Psychology of Luxury in the Age of TikTok",
      category: "Content",
      date: "March 10, 2025",
      readTime: "12 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoxZo0CJNdJZpTkOY4nz2Z-ayfgDzoINQftgrtMHZ-ekY1wgIiiROrVKDPA0B58rvwZHTeCqgKNqDAliCvs3DnL1OVN82_wbFQeBgpAVLpurPZpglh5ssOcUCNjpURuvQFjcid6FlCNN3Fmj86dY4vLD0OlP6vmqn-5sWzmEbb7XN4NQJGHZYLkuyxL76hR0GReLcOErF8Xl09By7pJ23c9trsLnbDODPn6Vlzna8SRc8gG5eEVCuJBliNmDt2vFwqHSP_OTNh1iCV",
      desc: "How to translate high-end brand markers into short-form video content without compromising on exclusivity or depth."
    },
    {
      title: "Vetting for Values: Finding the Right Brand Partners",
      category: "Influencer",
      date: "March 08, 2025",
      readTime: "6 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTm5GOpqB57H4bj0dCfz4L8qLpdeYHb4mVf5IJbA4tpT7JyzMeHgIenqMQqtfnaLgCrR5BYv8jJJZapYcgU-2LBEcuM9UMG5OEK4cX90iT9bkPbs-JpOLIVDTWG17fiI9Jdst5aUkhfGFC9X6kNU1CJwIh1i02HdaxEXiDlqsTzbwb34vVLYVZPTHnLfVnHbgs4wTWJNVciQh6oeL9_o0ApY_WebEziLdQMvLZ4VRZfMDdsef-eoFAGDO3-_HNp46XiCzc9BnwlxQW",
      desc: "A framework for identifying influencer partnerships that align with long-term brand equity rather than short-term buzz."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <section className="mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group cursor-pointer overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm"
        >
          <div className="grid md:grid-cols-2 items-stretch min-h-[500px]">
            <div className="relative overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmb-j-7CzEXJBZ4RJu0BROPq_HbJQ6WmERB4eAnOoE1IAtibDyQXZkDl2I7ot27OxGKYNk1ZpC22tocqHrfkKpr2bR8bMPumUlXBnWpUyQgW3Gk1VBpBdY7jTOD1w_lmTYc0L5p8LhxVKs1c8_eWIhc4Uc04ruq5eL_XIhaKfjjh4gnkctVNQ4_zaCB1bo2FaIicl1xkptgvWRxPT1IYzEFZWkkeNOJ0sbKCyvjKn2r7tP0bh-Qpt5o0lROdYana3b0bj14I6d7zZ" 
                alt="Featured Post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6">
                <span className="glass-pill text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Featured</span>
              </div>
            </div>
            <div className="p-12 flex flex-col justify-center bg-surface-container-lowest">
              <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4 font-medium">
                <span>March 14, 2025</span>
                <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                <span>8 min read</span>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
                The Future of Organic Growth in a Post-Social World
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
                How high-end brands are pivoting away from algorithmic dependence to build authentic, community-driven digital ecosystems that last.
              </p>
              <div className="flex items-center gap-4">
                <img 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-container" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDErKC9LMzDcXXS_siKXGRwz6tvTDLlkavj5_9efWz1Hgx8tn_PsnJ72Uteyh7a2P3qN6mNIrZnHoTCy9-X3SzCR98rLE-TaOKhQ_Fw6dgiF6oAFeXoZCwydGzIyTGgHwOeucL-oeDZ8MSsokX08S6-EE-kPfPkU-kOz5bhdDK62tC4fRHTEhiGl0MzdP6bGyxfVItL2Mdhk3zFBoH5_a5OnsxxqiPH_N2crt1LaC9eclD5FXhy6zI_ULDMRBKI1h5IgjKwzLQ7tDXP" 
                  alt="Author" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-on-surface leading-tight">Elena Valerious</p>
                  <p className="text-sm text-on-surface-variant">Head of Growth</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="flex flex-wrap items-center gap-4 border-b border-outline-variant/10 pb-8 mb-12">
        <span className="text-on-surface-variant font-headline text-sm font-bold uppercase tracking-widest mr-4">Filter By</span>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-md">All Stories</button>
        {['Content', 'Influencer', 'Performance'].map(cat => (
          <button key={cat} className="bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container px-6 py-2 rounded-full text-sm font-semibold transition-all">
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {posts.map((post, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4">
                <span className="glass-pill px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-on-secondary-container rounded-full">{post.category}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-3 uppercase tracking-widest font-bold">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-primary-container"></span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
              {post.desc}
            </p>
          </motion.article>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-on-primary-fixed rounded-lg p-12 relative overflow-hidden flex flex-col justify-center"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="font-headline text-3xl font-extrabold text-white mb-4 tracking-tight leading-none">
                Curated insights for the radiant few.
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Join 5,000+ brand leaders receiving our weekly brief on the evolution of digital culture.
              </p>
            </div>
            <div className="flex-shrink-0">
              <form className="flex flex-col gap-4">
                <input 
                  className="w-full md:w-80 bg-white/5 border-none text-white py-4 px-6 rounded-full focus:ring-2 focus:ring-primary-container transition-all" 
                  placeholder="Email address" 
                  type="email" 
                />
                <button className="bg-primary-container text-on-primary-container font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300">
                  Join The Circle
                </button>
              </form>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
        </motion.div>
      </div>

      <section className="max-w-3xl mx-auto px-8 py-20 text-center border-t border-outline-variant/10">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Stay Informed</span>
        <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6 tracking-tight">The Radiant Digest</h2>
        <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
          Zero spam. Only deeply researched perspectives on growth, design, and digital psychology.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex items-center p-1 bg-surface-container rounded-full shadow-inner focus-within:ring-2 focus-within:ring-primary transition-all">
            <input className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-3 text-on-surface" placeholder="Your best email" type="email" />
            <button className="bg-on-surface text-surface px-8 py-3 rounded-full font-bold hover:bg-primary transition-colors">Subscribe</button>
          </div>
          <p className="text-xs text-on-surface-variant mt-4 opacity-60">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </section>
    </div>
  );
}
