import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    rating: 5,
    text: 'Kyle delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding. Our conversion rate increased by 40% after launch.',
    project: 'E-commerce Platform'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLab',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    rating: 5,
    text: 'Working with Kyle was a game-changer for our startup. He built our entire web application from scratch with clean, maintainable code. The project was delivered on time and within budget.',
    project: 'SaaS Web Application'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency Co.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    rating: 5,
    text: 'Kyle transformed our outdated website into a modern, responsive masterpiece. The UI/UX improvements led to a 60% increase in user engagement. Highly recommend his services!',
    project: 'Website Redesign'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Founder',
    company: 'FinTech Solutions',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    rating: 5,
    text: 'Kyle\'s expertise in API integration saved us months of development time. He seamlessly connected our platform with multiple payment providers and third-party services.',
    project: 'API Integration'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Operations Manager',
    company: 'RetailPro',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    rating: 5,
    text: 'The mobile app Kyle developed for us has been a huge success. It\'s intuitive, fast, and our customers love it. The app store ratings speak for themselves - 4.8 stars!',
    project: 'Mobile App Development'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Quote className="w-8 h-8 text-primary/30" />
            </div>

            <blockquote className="text-base md:text-lg leading-relaxed text-center mb-4 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-3">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full border-2 border-primary/20"
              />
              <div className="text-center">
                <h4 className="font-semibold text-base">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                <p className="text-xs text-primary font-medium">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">24h</div>
            <div className="text-sm text-muted-foreground">Average Response Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}