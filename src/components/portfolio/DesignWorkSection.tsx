import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Eye, X } from 'lucide-react';

const designProjects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'Modern admin interface with advanced analytics and user management',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    figmaUrl: 'https://www.figma.com/design/1FQtU0wOtrdzp6BJMM15az/Untitled?node-id=0-1&t=n4o1CXpM2kf2quKv-1',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'Web App'
  },
  {
    id: 2,
    title: 'Gotcha App',
    description: 'Intuitive financial management with biometric security',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    figmaUrl: 'https://www.figma.com/proto/Gv7WCtZ4rFqRemj29g9UTk/PROTOTYPE-APPDEV?node-id=14-788&t=0SSTX5Y6VeDIfvpl-1',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'Mobile App'
  },
  {
    id: 3,
    title: 'BaryoWork Mobile App',
    description: 'Conversion-optimized design with interactive elements',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    figmaUrl: 'https://www.figma.com/proto/Ehh1s269c2iBtOB9taFlps/BaryoWork-App--temp-name-?page-id=0%3A1&node-id=7-13&starting-point-node-id=7%3A13&t=x0L4Hnx94AmGYMf9-1',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'Mobile App'
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Comprehensive component library and style guide',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
    figmaUrl: '#',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'Design System'
  }
];

export default function DesignWorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof designProjects[number] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject]);

  const openModal = (project: typeof designProjects[number]) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

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
                  <button
                    type="button"
                    onClick={() => openModal(project)}
                    aria-label={`View screenshots for ${project.title}`}
                    className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Eye className="w-5 h-5 text-gray-800" />
                  </button>

                  {project.figmaUrl && project.figmaUrl !== '#' ? (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors inline-flex items-center justify-center"
                      aria-label={`Open Figma for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </a>
                  ) : (
                    <button
                      className="p-3 bg-white/60 rounded-full text-gray-400 cursor-not-allowed"
                      title="Figma link not available"
                      aria-disabled
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
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

      {/* Modal / Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60" onClick={closeModal} />
          <div className="relative z-10 max-w-4xl w-full bg-card rounded-lg overflow-hidden shadow-xl">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>

            <div className="bg-black flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                {selectedProject.figmaUrl && selectedProject.figmaUrl !== '#' && (
                  <a
                    href={selectedProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                  >
                    Open in Figma
                  </a>
                )}
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-muted rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}