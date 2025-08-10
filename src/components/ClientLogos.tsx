import { motion } from 'framer-motion';

const ClientLogos = () => {
  // Mock client logos - in a real app, these would be actual client logos
  const clients = [
    { name: 'TechCorp', logo: '🏢' },
    { name: 'InnovateLab', logo: '🔬' },
    { name: 'GrowthCo', logo: '📈' },
    { name: 'DesignStudio', logo: '🎨' },
    { name: 'DataFlow', logo: '💾' },
    { name: 'CloudTech', logo: '☁️' },
    { name: 'StartupX', logo: '🚀' },
    { name: 'FinanceCore', logo: '💰' }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground font-medium mb-8">
            Trusted by 500+ companies worldwide
          </p>
        </motion.div>

        {/* Logos Container */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-16 items-center"
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 group"
              >
                <div className="glass-card p-6 min-w-[120px] h-16 flex items-center justify-center transition-all duration-300 group-hover:shadow-glow grayscale group-hover:grayscale-0">
                  <div className="text-2xl">{client.logo}</div>
                  <span className="ml-2 font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <motion.div
                key={`duplicate-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 group"
              >
                <div className="glass-card p-6 min-w-[120px] h-16 flex items-center justify-center transition-all duration-300 group-hover:shadow-glow grayscale group-hover:grayscale-0">
                  <div className="text-2xl">{client.logo}</div>
                  <span className="ml-2 font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;