import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Award } from 'lucide-react';
import { Logo } from '../ui/Logo';

const aboutItems = [
  {
    icon: <Users className="w-12 h-12 text-turquoise" />,
    title: "Our Team",
    description: "A passionate team of experts dedicated to delivering innovative solutions."
  },
  {
    icon: <Globe className="w-12 h-12 text-turquoise" />,
    title: "Our Mission",
    description: "Empowering businesses worldwide with secure and cutting-edge technology."
  },
  {
    icon: <Award className="w-12 h-12 text-turquoise" />,
    title: "Our Vision",
    description: "To be a reference in tech innovation and digital transformation."
  }
];

export const AboutUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-24 relative bg-navy">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Logo widthImg="h-16 w-16" showText={false}/>
          </div>
          <h2 className="section-title">About Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2024, ElSeraph is a Brazilian technology company with a mission to bring businesses from around the world into Brazil. By connecting global innovation with local expertise, we empower companies to thrive in the Brazilian market with secure, cutting-edge solutions.
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-xl text-center"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-turquoise mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
