import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-on-surface text-white/50 py-24 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        <div className="lg:col-span-2">
          <Link to="/" className="text-3xl font-headline font-black text-white mb-8 tracking-tighter inline-block">Wassup Radiant.</Link>
          <p className="max-w-sm mb-10 text-lg font-light leading-relaxed">
            Curating digital excellence since 2013. We believe in the power of light, typography, and human connection.
          </p>
          <div className="flex gap-6">
            {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-on-surface transition-all duration-500">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-headline font-bold mb-8 uppercase tracking-widest text-xs">Explore</h4>
          <ul className="space-y-5">
            {['Services', 'Case Studies', 'About', 'Blog', 'Contact'].map(item => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary-fixed transition-colors text-lg font-light">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-headline font-bold mb-8 uppercase tracking-widest text-xs">Connect</h4>
          <ul className="space-y-5">
            {['Instagram', 'LinkedIn', 'X (Twitter)', 'TikTok'].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-primary-fixed transition-colors text-lg font-light">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase font-bold">
        <span>© 2025 Wassup Radiant. All rights reserved.</span>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);
