import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings with our proven SEO strategies and technical optimization.',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy']
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Engage your audience across all platforms with compelling content and strategic campaigns.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising']
    },
    {
      icon: '💰',
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns across Google and social platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization']
    },
    {
      icon: '🎨',
      title: 'Brand Design',
      description: 'Create a memorable brand identity that resonates with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Build fast, responsive websites that convert visitors into customers.',
      features: ['Responsive Design', 'E-commerce', 'Performance Optimization']
    },
    {
      icon: '📝',
      title: 'Content Marketing',
      description: 'Drive engagement with high-quality content that tells your brand story.',
      features: ['Blog Writing', 'Video Content', 'Email Marketing']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to accelerate your business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-card p-8 h-full transition-all duration-300 group-hover:shadow-glow">
                {/* Icon */}
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-poppins font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-glass"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-poppins font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our services can help you achieve your marketing goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero-primary"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ServicesSection;