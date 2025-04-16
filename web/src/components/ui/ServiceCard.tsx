import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ServiceCardProps extends HTMLMotionProps<"div"> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className,
  ...props
}) => {
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: 0.4
      }
    }
  };

  return (
    <motion.div
      className={`p-6 rounded-xl hover:transform transition-all ${className}`}
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(0, 191, 255, 0.1)",
        borderColor: "rgba(64, 224, 208, 0.3)"
      }}
      {...props}
    >
      <motion.div 
        className="mb-6 flex justify-center"
        variants={iconVariants}
      >
        <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center border border-turquoise/30">
          {icon}
        </div>
      </motion.div>
      
      <motion.div variants={textVariants}>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-gray-400 text-center">{description}</p>
      </motion.div>
    </motion.div>
  );
};