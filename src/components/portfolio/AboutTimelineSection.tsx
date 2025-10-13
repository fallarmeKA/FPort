import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, Code, GraduationCap } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    year: '2020',
    title: 'Started Programming Journey',
    icon: Code,
    description: 'Began learning web development with HTML, CSS, and JavaScript.',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    year: '2021-2024',
    title: 'Computer Science Education',
    icon: GraduationCap,
    description: 'Pursuing Computer Science degree with focus on full-stack development.',
    color: 'bg-green-500'
  },
  {
    id: 3,
    year: 'Nov 2023 - Apr 2024',
    title: 'Freelance Social Media Content Creator',
    icon: Briefcase,
    description: 'LiveGood Inc. - Created engaging video content and built online community.',
    location: 'Jupiter, FL',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    year: 'Mar - Jul 2024',
    title: 'Product Development Intern',
    icon: Briefcase,
    description: 'Bridge360 IT Solutions - Developed BaryoWork and Project Management apps.',
    location: 'Makati City',
    color: 'bg-orange-500'
  },
  {
    id: 5,
    year: '2024',
    title: 'Full-Stack Developer',
    icon: Award,
    description: 'Specialized in React.js, MERN stack, and Firebase.',
    color: 'bg-primary'
  }
];

export default function AboutTimelineSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From curious beginner to experienced developer — here's how I've grown.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Profile & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="lg:col-span-1 flex flex-col items-center"
          >
            {/* Profile Picture */}
            <div className="mb-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="/images/ProfPic.jpg"
                    alt="Kyle Fallarme"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap">
                  Kyle Fallarme
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 w-full">
              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Based in</h4>
                </div>
                <p className="text-muted-foreground ml-13">Philippines</p>
                <p className="text-sm text-muted-foreground ml-13">Available worldwide</p>
              </div>

              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Experience</h4>
                </div>
                <p className="text-muted-foreground ml-13">2+ Years</p>
                <p className="text-sm text-muted-foreground ml-13">Full-stack development</p>
              </div>

              <div className="bg-card rounded-xl p-5 border border-border">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">Focus</h4>
                </div>
                <p className="text-muted-foreground ml-13">MERN Stack</p>
                <p className="text-sm text-muted-foreground ml-13">React.js & Firebase</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

              {/* Timeline events */}
              <div className="space-y-6">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="relative pl-14"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-3 w-4 h-4 ${event.color} rounded-full border-4 border-background`} />

                    {/* Content */}
                    <div className="bg-card rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <event.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{event.title}</h3>
                            <div className="text-sm text-primary font-medium">{event.year}</div>
                          </div>
                        </div>
                      </div>
                      {event.location && (
                        <div className="text-sm text-muted-foreground flex items-center mb-2 ml-11">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed ml-11">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}