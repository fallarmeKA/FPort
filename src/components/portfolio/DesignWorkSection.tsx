import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const designProjects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'Modern admin interface with advanced analytics and user management',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    figmaUrl: '#',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    category: 'Web App'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Intuitive financial management with biometric security',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    figmaUrl: '#',
    technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    category: 'Mobile App'
  },
  {
    id: 3,
    title: 'SaaS Landing Page',
    description: 'Conversion-optimized design with interactive elements',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    figmaUrl: '#',
    technologies: ['Next.js', 'Framer Motion', 'Stripe', 'Vercel'],
    category: 'Landing Page'
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Comprehensive component library and style guide',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
    figmaUrl: '#',
    technologies: ['Storybook', 'Figma', 'CSS Variables', 'Documentation'],
    category: 'Design System'
  }
];

export default function DesignWorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="design" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Design Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest design projects featuring interactive prototypes and user-centered solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  className="absolute inset-0 flex items-center justify-center space-x-4"
                >
                  <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <ExternalLink className="w-5 h-5 text-gray-800" />
                  </button>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}