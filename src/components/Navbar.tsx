import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className={`text-xl font-headline font-extrabold tracking-tighter ${isScrolled || !isHome ? 'text-primary' : 'text-white'}`}>
          Wassup Radiant
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-sm font-headline font-medium tracking-tight transition-colors hover:text-primary-container ${isScrolled || !isHome ? 'text-on-surface' : 'text-white/90'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline font-semibold text-sm hover:scale-105 transition-all duration-300 ambient-shadow">
            Book a Consultation
          </button>
          <button 
            className={`md:hidden ${isScrolled || !isHome ? 'text-on-surface' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-8 flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-lg font-headline font-bold text-on-surface"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary text-on-primary px-6 py-4 rounded-full font-headline font-bold text-center">
              Book a Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
