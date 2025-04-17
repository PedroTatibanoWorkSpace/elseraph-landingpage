import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-turquoise" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized solutions"
    },
    {
      icon: <Shield className="w-8 h-8 text-turquoise" />,
      title: "Secure by Design",
      description: "Built with security best practices at its core"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-turquoise" />,
      title: "Mobile First",
      description: "Fully responsive design that works seamlessly across all devices"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
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
    <section id="features"className="py-24 relative bg-navy">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions designed with your business in mind
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="glass-effect p-8 rounded-xl"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(64, 224, 208, 0.1)"
              }}
            >
              <motion.div 
                className="mb-6 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-navy-darker flex items-center justify-center border border-turquoise/30">
                  {feature.icon}
                </div>
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}