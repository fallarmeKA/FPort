import { motion } from 'framer-motion';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';

const skills = [
  // Web Development
  { name: 'HTML', level: 95, category: 'Web Development' },
  { name: 'CSS', level: 95, category: 'Web Development' },
  { name: 'JavaScript', level: 90, category: 'Web Development' },
  { name: 'React Native', level: 85, category: 'Web Development' },
  { name: 'React.js', level: 92, category: 'Web Development' },
  { name: 'Node.js', level: 85, category: 'Web Development' },
  { name: 'Express.js', level: 85, category: 'Web Development' },
  
  // Databases
  { name: 'SQL Server', level: 80, category: 'Databases' },
  { name: 'Firebase', level: 88, category: 'Databases' },
  { name: 'MongoDB', level: 85, category: 'Databases' },
  
  // Programming Languages
  { name: 'Java', level: 75, category: 'Programming' },
  
  // Development Tools
  { name: 'Postman', level: 85, category: 'Tools' },
  
  // Design & Web Platforms
  { name: 'Canva', level: 90, category: 'Design' },
  { name: 'Figma', level: 88, category: 'Design' },
  { name: 'WordPress', level: 82, category: 'Design' },
  { name: 'Wix', level: 80, category: 'Design' },
];

const skillCategories = ['Web Development', 'Databases', 'Programming', 'Tools', 'Design'];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Web Development');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                    {skill.category}
                  </span>
                </div>
                <motion.span
                  animate={{ 
                    scale: hoveredSkill === skill.name ? 1.1 : 1,
                    color: hoveredSkill === skill.name ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))'
                  }}
                  className="font-medium"
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="relative">
                <Progress 
                  value={hoveredSkill === skill.name ? skill.level : 0} 
                  className="h-2 bg-muted"
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: false }}
                  className="absolute top-0 left-0 h-2 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Skill Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 mx-auto relative"
            >
              {skills.slice(0, 8).map((skill, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 100;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium border border-primary/20"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                    whileHover={{ scale: 1.2, backgroundColor: 'hsl(var(--primary))' }}
                  >
                    {skill.name.slice(0, 3)}
                  </motion.div>
                );
              })}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                Skills
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}