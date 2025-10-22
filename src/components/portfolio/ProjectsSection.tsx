import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: "This portfolio website showcases skills and projects in a clean, modern design. Built with HTML, CSS and Javascript, it features responsive layouts and interactive elements.",
    image: '/images/Port.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/fallarmeKA/Free-Template-Portfolio',
    liveUrl: 'https://free-template-portfolio-xi.vercel.app/',
    accomplishments: [
      'Developed a Fully Responsive and Interactive Portfolio Website',
      'Integrated Dynamic Contact Form with Email Functionality',
      'Showcased Projects and Skills with an Intuitive UI/UX Design'
    ]
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce store owners to manage products, view sales analytics, and handle customer orders. Features a clean UI with data visualization components.',
    image: '/images/proj.jpg',
    technologies: ["React", "Redux", "Chart.js", "Material UI"],
    githubUrl: 'https://github.com/bridge360-ph/Intern_projmgt1',
    liveUrl: 'https://intern-projmgt-main.vercel.app/dashboard',
    accomplishments: [
      'Built a responsive and Dynamic Admin Interface',
      'Integrated real-time data visualization',
      'Implemented secure authentication and Role-based Access Control'
    ]
  },
  {
    id: 3,
    title: 'BaryoWork Application',
    description: 'A BaryoWork Application is to streamline local job search for residents in the Philippines. It connects job seekers with local employers, providing a platform for posting and applying to jobs within their community.',
    image: '/images/Baryo.png',
    technologies: ["React Native", "MongoDB", "Redux"],
    githubUrl: 'https://github.com/fallarmeKA/BaryoWorkFront',
    liveUrl: 'https://www.figma.com/proto/Ehh1s269c2iBtOB9taFlps/BaryoWork-App-(temp-name)?node-id=7-13&p=f&t=nEGGNZBpJf2F866W-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=460%3A64&show-proto-sidebar=1',
    accomplishments: [
      'Developed a user-friendly Job Portal',
      'Integrated job posting and Application Features',
      'Implemented location-based Job Filtering'
    ]
  },
  {
    id: 4,
    title: 'MemoRecall Web App',
    description: 'The development of a Senior Friendly Web Application for holistic intervention of early memory lapses in geriatric individuals.',
    image: '/images/memo.jpg',
    technologies: ["Vite", "React", "Tailwind CSS", "TypeScript", "MongoDB"],
    liveUrl: 'https://memorecall-v3.vercel.app/?fbclid=IwZXh0bgNhZW0CMTEAAR095nOnBidRaKpm2ytk1yxG1QCnQQi86y5RnSSEdJ38GTwpSwUA04J0kbE_aem__TQC0ZJizodmRscQIGBTjA"',
    accomplishments: [
      'Developed a Senior-Friendly Web Application',
      'Implemented cognitive exercise modules and reminders',
      'Designed a holistic intervention platform'
    ]
  },
  {
    id: 5,
    title: 'Nike-Ecommerce Website',
    description: 'Nike E-commerce Website is a modern e-commerce platform for Nike products, featuring a sleek design, user-friendly interface, and secure payment options.',
    image: '/images/Nike.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/fallarmeKA/Nike-ECOM',
    liveUrl: 'https://nike-ecom-sigma.vercel.app/',
    accomplishments: [
      'Developed a fully functional e-commerce platform',
      'Designed a sleek and responsive user interface',
      'Integrated dynamic product data and payment processing'
    ]
  },
  {
    id: 6,
    title: 'MyPanel',
    description: 'is your all-in-one life companion—perfect for jotting down notes, keeping track of expenses, and staying on top of your tasks. Simple, clean, and distraction-free, it helps you focus on what truly matters every day.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/chatbot-builder',
    liveUrl: 'https://chatbot-builder.io',
    accomplishments: [
      'Created a personal workspace app for managing notes, expenses, and to-dos',
      'A clean, intuitive UI for easy daily organization',
      'Enhanced productivity by integrating task tracking and expense monitoring features'
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