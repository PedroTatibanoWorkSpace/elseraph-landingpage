import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVision Inc",
    content: "ElSeraph's nearshore migration services transformed our infrastructure. Their expertise and attention to detail made the transition seamless.",
    rating: 5,
    image: "/images/testimonial-1.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Engineering, DataFlow",
    content: "The quality of talent we've accessed through ElSeraph's outsourcing service is exceptional. They've become an integral part of our development process.",
    rating: 5,
    image: "/images/testimonial-2.jpg"
  },
  {
    name: "Emily Thompson",
    role: "Compliance Director, SecureNet",
    content: "Their compliance consulting helped us navigate complex regulations with confidence. ElSeraph's thorough approach ensures we stay ahead of industry standards.",
    rating: 5,
    image: "/images/testimonial-3.jpg"
  }
];

export const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-navy-darker/80 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about our services
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-xl relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-navy-darker rounded-full flex items-center justify-center border border-golden/50">
                <Quote className="w-5 h-5 text-golden" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-golden fill-golden" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-turquoise">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};