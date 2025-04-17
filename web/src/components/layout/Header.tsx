import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../ui/NavLink';
import { Logo } from '../ui/Logo';
import { Menu, X, Home, Briefcase, Star, MessageSquare } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: <Home className="w-4 h-4 mr-2" /> },
  { href: '#services', label: 'Services', icon: <Briefcase className="w-4 h-4 mr-2" /> },
  { href: '#features', label: 'Features', icon: <Star className="w-4 h-4 mr-2" /> },
  { href: '#testimonials', label: 'Testimonials', icon: <MessageSquare className="w-4 h-4 mr-2" /> },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-navy/95 backdrop-blur-lg py-4 shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Logo widthImg="w-10 h-10" />
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <NavLink 
              key={item.href} 
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex items-center text-gray-300 hover:text-golden transition-colors ${
                window.location.hash === item.href ? 'text-golden' : ''
              }`}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 bg-turquoise text-navy font-semibold rounded-full hover:bg-turquoise/90 transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="md:hidden">
          <button 
            className="text-gray-300 focus:outline-none hover:text-golden transition-colors"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-navy/95 backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <NavLink 
                    key={item.href} 
                    href={item.href}
                    className="text-gray-300 hover:text-golden transition-colors font-medium flex items-center"
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