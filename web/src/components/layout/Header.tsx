import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../ui/NavLink';
import { Logo } from '../ui/Logo';
import { Menu, X, Home, Briefcase, Star, MessageSquare, Phone } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: <Home className="w-4 h-4 mr-2" /> },
  { href: '#services', label: 'Services', icon: <Briefcase className="w-4 h-4 mr-2" /> },
  { href: '#features', label: 'Features', icon: <Star className="w-4 h-4 mr-2" /> },
  { href: '#testimonials', label: 'Testimonials', icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  { href: '#contact', label: 'Contact', icon: <Phone className="w-4 h-4 mr-2" /> },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let isThrottled = false;
    const throttleTime = 100;
    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        setTimeout(() => {
          isThrottled = false;
        }, throttleTime);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Logo widthImg="w-10 h-10"/>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <NavLink 
                key={item.href} 
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center"
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden glass-effect"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <NavLink 
                    key={item.href} 
                    href={item.href}
                    className="flex items-center py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};