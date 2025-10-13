import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack web applications using React, Node.js, and modern frameworks.',
    features: ['React/Next.js Apps', 'API Development', 'Database Design', 'Responsive Design']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that converts visitors into customers.',
    features: ['Wireframing & Prototyping', 'User Research', 'Design Systems', 'Responsive Design']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with React Native.',
    features: ['iOS & Android Apps', 'Push Notifications', 'Offline Functionality', 'App Store Deployment']
  },
  {
    icon: Globe,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment processing and inventory management.',
    features: ['Shopify/WooCommerce', 'Payment Gateways', 'Inventory Management', 'Analytics Dashboard']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development services to bring your ideas to life with modern technology and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Let's Discuss Your Project</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in working together? Let's schedule a call or meeting to discuss your requirements and pricing details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-accent transition-colors"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}