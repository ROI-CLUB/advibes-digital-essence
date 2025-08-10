import { motion } from 'framer-motion';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      company: 'Technology',
      avatar: '👩‍💼',
      quote: 'AD Vibes transformed our digital presence completely. Our lead generation increased by 300% in just 6 months. Their team is incredibly professional and results-driven.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'E-Commerce',
      avatar: '👨‍💼',
      quote: 'Working with AD Vibes was a game-changer. They helped us scale our social media campaigns and significantly improved our ROI. Highly recommend their services!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Fashion Brand',
      avatar: '👩‍🎨',
      quote: 'The creative team at AD Vibes understood our vision perfectly. They created stunning campaigns that resonated with our target audience and drove incredible engagement.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped grow.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="glass-card p-4 text-4xl">
                "
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-yellow-400 text-2xl"
                >
                  ⭐
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
              {testimonials[activeTestimonial].quote}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="text-4xl">
                {testimonials[activeTestimonial].avatar}
              </div>
              <div className="text-left">
                <div className="font-poppins font-semibold text-xl text-foreground">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[activeTestimonial].role}
                </div>
                <div className="text-primary font-medium">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-primary shadow-glow scale-125'
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-button p-3 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-button p-3 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;