import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Users, Shield } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const services = [
  {
    icon: <Cloud className="w-12 h-12 text-turquoise" />,
    title: "Nearshore Migration",
    description: "Seamless cloud migration services with expert guidance and support."
  },
  {
    icon: <Users className="w-12 h-12 text-turquoise" />,
    title: "Quality Outsourcing",
    description: "Access to top-tier tech talent and dedicated development teams."
  },
  {
    icon: <Shield className="w-12 h-12 text-turquoise" />,
    title: "Compliance Consulting",
    description: "Ensure your tech stack meets industry standards and regulations."
  }
];

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section id="services" className="py-24 relative bg-navy">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your business in the digital landscape
          </p>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};