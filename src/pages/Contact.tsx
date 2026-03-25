import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left: Premium Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center space-y-12 py-12"
        >
          <header className="space-y-4">
            <div className="glass-pill inline-flex items-center px-4 py-1 rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest">
              Reach Out
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight">
              Let’s talk growth.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              Ready to elevate your digital presence? Send us a message and our team will get back to you within 24 hours.
            </p>
          </header>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input 
                  className="peer w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all px-4 pt-6 pb-2 text-on-surface outline-none" 
                  id="name" 
                  placeholder=" " 
                  type="text"
                />
                <label className="absolute left-4 top-4 text-on-surface-variant transition-all pointer-events-none peer-focus:translate-y-[-1.5rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:translate-y-[-1.5rem] peer-[:not(:placeholder-shown)]:scale-[0.85]" htmlFor="name">Full Name</label>
              </div>
              <div className="relative">
                <input 
                  className="peer w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all px-4 pt-6 pb-2 text-on-surface outline-none" 
                  id="email" 
                  placeholder=" " 
                  type="email"
                />
                <label className="absolute left-4 top-4 text-on-surface-variant transition-all pointer-events-none peer-focus:translate-y-[-1.5rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:translate-y-[-1.5rem] peer-[:not(:placeholder-shown)]:scale-[0.85]" htmlFor="email">Email Address</label>
              </div>
            </div>
            <div className="relative">
              <select className="peer w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all px-4 pt-6 pb-2 text-on-surface outline-none appearance-none" id="service">
                <option disabled selected value=""></option>
                <option value="branding">Branding & Identity</option>
                <option value="uiux">UI/UX Design</option>
                <option value="growth">Growth Marketing</option>
              </select>
              <label className="absolute left-4 top-4 text-on-surface-variant transition-all pointer-events-none peer-focus:translate-y-[-1.5rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:translate-y-[-1.5rem] peer-[:not(:placeholder-shown)]:scale-[0.85]" htmlFor="service">Interested Service</label>
            </div>
            <div className="relative">
              <textarea 
                className="peer w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all px-4 pt-6 pb-2 text-on-surface outline-none resize-none" 
                id="message" 
                placeholder=" " 
                rows={4}
              />
              <label className="absolute left-4 top-4 text-on-surface-variant transition-all pointer-events-none peer-focus:translate-y-[-1.5rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:translate-y-[-1.5rem] peer-[:not(:placeholder-shown)]:scale-[0.85]" htmlFor="message">Tell us about your project</label>
            </div>
            <button className="w-full md:w-auto bg-primary text-on-primary font-headline font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,110,47,0.25)] flex items-center justify-center space-x-3 group" type="submit">
              <span>Send Message</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-outline-variant/20">
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Call us</span>
              <p className="font-headline font-bold text-xl text-on-surface">+1 (555) 000-RADIANT</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Email us</span>
              <p className="font-headline font-bold text-xl text-on-surface">hello@wassupradiant.com</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Visit us</span>
              <p className="font-headline font-bold text-xl text-on-surface">88 Creative Way, SF</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Visual/Map Representation */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative min-h-[500px] lg:min-h-full rounded-lg overflow-hidden flex items-end p-8 lg:p-12"
        >
          <div className="absolute inset-0 bg-inverse-surface">
            <img 
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9pdY6QXqi43SCUE0sqoWxeWtp2o-0EobdTwGGs5S3nuRUb4fRtbp5-sdVNa0yVuoFPpQSAsCdmitzPXkzAS1bfHoy3BUGnKmYFsxgyPGYRGULk0x-w7L6aumTB0i4EhFEEgUYlZz8ix26pPHPflOZpBo5JahYdOCzeJGj8QgXX4SdbtDQfAEjiw51omi75s9E7-pj21UexaEutDNWhpu9H4_szKvro2kfOcP8e9CHtbDc3zkdSE-SCqmuhs049GJl1EQTHv2aT21R" 
              alt="Office" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed/50 to-transparent" />
          </div>

          {/* Map Component (Abstract Dark) */}
          <div className="absolute top-12 right-12 w-64 h-64 rounded-full overflow-hidden border-4 border-white/5 backdrop-blur-sm hidden lg:block">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCkrgWMaB5yFs2Fh3pakCAmETTWp5mExxENbm033Tjx0xRiD7mhK6GrWzzakpSntSY2sScHPwReSX9oL4dFmIXHnnnxIhLR5M9f0il-hT_OlJnPCLExGJqehndNX3V6Tu5K3RuoiRw_wVYlBkOn6UuxOg0NB0uAV-FR3OT3vioezcnvkgf1hvMOD4D1Bdr9cAraEz_PSPQg6HHCnryxnNfqhjwrFHjApJdMlOJKuhfZoEEbx449mL4W9lT8vId-X2mRcUlwXEYCvq6" 
              alt="San Francisco Map" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
              <div className="absolute w-3 h-3 bg-primary rounded-full" />
            </div>
          </div>

          <div className="relative z-10 space-y-6 max-w-md">
            <div className="w-16 h-1 bg-primary rounded-full" />
            <blockquote className="text-white text-3xl font-headline font-medium italic leading-tight">
              "Radiance is not just an aesthetic; it's the clarity of purpose we bring to every partner."
            </blockquote>
            <div className="flex items-center space-x-4">
              <img 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj7RUTmkN10NF9XCSsRYI4i3FVdiIYlzxuKPdUOblRrPijITfAEYMo3gz8PZTGRxrsNAddnJqMvpZt0iNt_GjQIfZ8ePXB-z-9_f_6sKzRqI3zv7ENnEQ4UXx6RelkDkeyx2nnXOI8G6QoyTV5H7R2COzJdJyfcYVhbVRx8389Dr1IwFO-New7EZN_94SUeROK1TyGXJrvnjiLj3Q29UsYvqJWLJwIb_ZWQ8wmPVjzsb18epaS_tE3luOMLdCngL1jNX5T2QHC24oS" 
                alt="Founder" 
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-white font-bold">Julian Vane</p>
                <p className="text-primary-fixed-dim text-sm">Founder & Creative Lead</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
