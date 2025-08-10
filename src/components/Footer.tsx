import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: ['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Web Development', 'Brand Design', 'Content Marketing']
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Blog', 'Case Studies', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Free Tools', 'Marketing Guide', 'Industry Reports', 'Webinars', 'Templates', 'Support Center']
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-card border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">AV</span>
              </div>
              <span className="text-3xl font-poppins font-bold gradient-text">
                AD Vibes
              </span>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We drive results with data and creativity. Transform your brand's digital presence with our expert marketing strategies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📧</span>
                <span>hello@advibes.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass-button p-3 text-2xl transition-all duration-300 hover:shadow-glow"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-6 text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2024 AD Vibes. All rights reserved. Built with ❤️ in San Francisco.
          </p>

          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;