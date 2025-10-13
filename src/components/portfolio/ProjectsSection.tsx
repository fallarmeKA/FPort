import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TaskFlow Pro',
    description: 'A comprehensive project management platform with real-time collaboration, advanced analytics, and team productivity insights.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redis'],
    githubUrl: 'https://github.com/yourusername/taskflow-pro',
    liveUrl: 'https://taskflow-pro.vercel.app',
    stars: 234,
    forks: 45,
    accomplishments: [
      'Increased team productivity by 40%',
      'Real-time collaboration for 1000+ users',
      'Advanced analytics dashboard'
    ]
  },
  {
    id: 2,
    title: 'EcoTracker',
    description: 'Mobile app for tracking personal carbon footprint with gamification elements and community challenges.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
    technologies: ['React Native', 'Firebase', 'TensorFlow', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/ecotracker',
    liveUrl: 'https://ecotracker-app.netlify.app',
    stars: 189,
    forks: 32,
    accomplishments: [
      '50K+ active users',
      'AI-powered recommendations',
      'Community of eco-warriors'
    ]
  },
  {
    id: 3,
    title: 'CodeMentor AI',
    description: 'AI-powered code review and mentoring platform that helps developers improve their coding skills.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Stripe', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/codementor-ai',
    liveUrl: 'https://codementor-ai.com',
    stars: 456,
    forks: 78,
    accomplishments: [
      'AI code analysis engine',
      'Personalized learning paths',
      'Integration with 10+ IDEs'
    ]
  },
  {
    id: 4,
    title: 'FinanceFlow',
    description: 'Personal finance management with automated categorization, budget tracking, and investment insights.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    technologies: ['Vue.js', 'Python', 'Django', 'Plaid API', 'D3.js'],
    githubUrl: 'https://github.com/yourusername/financeflow',
    liveUrl: 'https://financeflow.app',
    stars: 312,
    forks: 56,
    accomplishments: [
      'Bank-level security',
      'Smart categorization AI',
      'Investment portfolio tracking'
    ]
  },
  {
    id: 5,
    title: 'DevPortfolio',
    description: 'Modern portfolio website template with dark/light mode, animations, and responsive design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/dev-portfolio',
    liveUrl: 'https://dev-portfolio-template.vercel.app',
    stars: 128,
    forks: 24,
    accomplishments: [
      'Fully responsive design',
      'Smooth animations',
      'SEO optimized'
    ]
  },
  {
    id: 6,
    title: 'ChatBot Builder',
    description: 'No-code platform for building intelligent chatbots with natural language processing capabilities.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/chatbot-builder',
    liveUrl: 'https://chatbot-builder.io',
    stars: 267,
    forks: 41,
    accomplishments: [
      'Drag-and-drop interface',
      'Multi-language support',
      '10K+ chatbots created'
    ]
  }
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from concept to deployment. Each project includes live demos and source code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project stats overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  className="absolute top-4 right-4 flex space-x-2"
                >
                  <div className="flex items-center space-x-1 bg-black/70 rounded-full px-3 py-1 text-white text-sm">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-black/70 rounded-full px-3 py-1 text-white text-sm">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Accomplishments - shown on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    height: hoveredProject === project.id ? 'auto' : 0
                  }}
                  className="overflow-hidden mb-4"
                >
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-sm mb-2 text-primary">Key Accomplishments:</h4>
                    <ul className="space-y-1">
                      {project.accomplishments.map((accomplishment, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {accomplishment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLinkClick(project.liveUrl)}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLinkClick(project.githubUrl)}
                    className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}