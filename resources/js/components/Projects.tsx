import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ALTS USA LLC - Import/Export System',
      description: 'Developed a dynamic web application for an import-export business using the AdminLTE package for backend UI and integrated Spatie Roles & Permissions for access control. Built and maintained scalable backend systems with clean code and efficient server-side logic.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PHP', 'Laravel', 'MySQL', 'AdminLTE', 'Spatie', 'RESTful APIs'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: '2024'
    },
    {
      title: 'Virtual Budz - API Development',
      description: 'Led API development using the Filament package for backend UI and integrated third-party APIs to enhance application functionality and ensure seamless data exchange. Implemented cron jobs to automate routine tasks and improve system efficiency.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PHP', 'Laravel', 'Filament', 'Third-party APIs', 'Cron Jobs', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: '2024'
    },
    {
      title: 'Web Development Training',
      description: 'Successfully completed a five-month classes in web development at Shree Academy. Honed skills in Python and gained significant experience and exposure to many processes in the field.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Web Development', 'Database Design', 'Problem Solving'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2022-2023'
    },
    {
      title: 'Backend Internship',
      description: 'Completed a back end software internship at Virtual Carry, where I gained real experience and helped with a range of projects. Throughout the internship, I worked with the development team and learned significant backend development best practices.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Team Collaboration', 'Version Control'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2023-2024'
    },
    {
      title: 'Database Management System',
      description: 'Designed and implemented efficient database solutions with focus on data validation, clean operations, and performance optimization. Used Postman and debugging tools to test APIs and troubleshoot backend issues effectively.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['MySQL', 'Database Design', 'Query Optimization', 'Data Validation'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2024'
    },
    {
      title: 'RESTful API Development',
      description: 'Built robust RESTful APIs with proper authentication, data validation, and error handling. Collaborated with frontend developers to ensure seamless integration and participated in code reviews for better team collaboration and delivery tracking.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'RESTful APIs', 'Authentication', 'Error Handling'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2024'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects and experiences that showcase my skills in backend development and web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Tag size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500 font-medium">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group/btn"
                  >
                    <ExternalLink size={16} className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    View Details
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center px-4 py-2 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 group/btn"
                  >
                    <Github size={16} className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;