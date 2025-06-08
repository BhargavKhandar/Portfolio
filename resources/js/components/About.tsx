import React from 'react';
import { Code, Database, Globe, Server, Cloud, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      technologies: ['PHP', 'Laravel', 'MySQL', 'Node.js', 'RESTful APIs', 'Postman']
    },
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Responsive Design']
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      technologies: ['MySQL', 'MongoDB', 'Database Design', 'Query Optimization', 'Data Modeling']
    },
    {
      category: 'Tools & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      technologies: ['Git & GitHub', 'Linux', 'Postman', 'VS Code', 'Version Control']
    },
    {
      category: 'Development',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Clean Code', 'MVC Architecture', 'API Development', 'Testing', 'Debugging']
    },
    {
      category: 'Performance',
      icon: <Zap className="w-6 h-6" />,
      technologies: ['Code Optimization', 'Database Tuning', 'Scalable Systems', 'Best Practices']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl leading-relaxed">
                I'm a passionate Backend Developer with more than 1 year of practical experience 
                in PHP and Laravel-based web applications. I love creating scalable backend 
                systems, designing RESTful APIs, and working with frontend teams for smooth integration.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech started with curiosity about how web applications work behind 
                the scenes. I've gained significant experience and exposure to many processes in 
                the field through hands-on projects and continuous learning. I believe in writing 
                clean, reusable code and applying efficient server-side logic.
              </p>
              <p className="text-lg leading-relaxed">
                I'm enthusiastic about debugging, performance tuning, and learning new PHP and 
                Laravel features on a regular basis to improve application performance. When I'm 
                not coding, you can find me exploring new technologies or contributing to 
                open-source projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.category}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-3">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-blue-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;