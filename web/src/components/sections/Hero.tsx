import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden bg-[#102434] sm:bg-transparent"
    >
      {/* Background com gradientes radiais e imagem das asas */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente radial principal */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-navy-darker via-navy to-navy-light opacity-90"
        ></div>
        
        {/* Imagem de fundo principal - ajustada para ser responsiva */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat sm:bg-cover bg-contain opacity-30 mix-blend-soft-light"
          style={{ 
            backgroundImage: "url('/images/tech-wings-bg.png')"
          }}
        ></div>
        
        {/* Elementos decorativos com gradientes radiais */}
        <div className="absolute top-16 right-[10%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-radial from-turquoise/40 to-transparent opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-16 left-[5%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-radial from-golden/30 to-transparent opacity-40 animate-pulse-slow"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto text-center relative z-10">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-golden via-turquoise to-golden bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Precision. Power. Presence.
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Empowering businesses with secure, innovative tech solutions that transform possibilities into reality.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0"
        >
          <Button variant="primary" size="lg">
            Request a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Gradiente de transição para a próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-navy"></div>
    </section>
  );
};