import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showText?: boolean;
  widthImg?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, widthImg }) => {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/logo.png" 
        alt="ElSeraph Logo" 
        className={widthImg ? widthImg : "w-10 h-10"}
      />
      {showText && (
        <span className="text-2xl font-bold bg-gradient-to-r from-turquoise to-turquoise/100 bg-clip-text text-transparent">
          ElSeraph
        </span>
      )}
    </motion.div>
  );
};