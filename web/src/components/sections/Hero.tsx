import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-navy-darker via-navy to-navy-light"
          style={{ opacity: 1 }}
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-center bg-no-repeat sm:bg-cover bg-contain"
          style={{ 
            backgroundColor: "#0c2434",
            backgroundImage: "url('/images/tech-wings-bg.png')",
            opacity: 0.4
          }}
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        <div 
          className="absolute top-16 right-[10%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-radial from-turquoise/40 to-transparent opacity-50 animate-pulse-slow"
        ></div>
        <div 
          className="absolute bottom-16 left-[5%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-radial from-turquoise/30 to-transparent opacity-40 animate-pulse-slow"
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-turquoise via-blue-400 to-turquoise bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Precision. Power. Presence.
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering businesses with secure, innovative tech solutions that transform possibilities into reality.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0"
        >
          <Button variant="primary" size="lg" className="bg-turquoise hover:bg-turquoise/90 text-navy">
            Request a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-turquoise text-turquoise hover:bg-turquoise/10">
            Learn More
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-navy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>
    </section>
  );
};