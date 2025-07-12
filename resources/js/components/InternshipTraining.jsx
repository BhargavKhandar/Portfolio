// src/components/InternshipTraining.jsx
import React from 'react';
import { Calendar, Tag, ExternalLink, Github } from 'lucide-react';

const InternshipTraining = () => {
  const internshipProjects = [
    {
      title: 'Backend Internship at Virtual Carry',
      date: 'Aug 2023 – Apr 2024',
      description:
        'Completed a backend software internship where I worked with the development team, refined my skills in PHP, Laravel, Postman, MySQL, MongoDB, and Node.js, and learned backend development best practices.',
      technologies: ['PHP', 'Laravel', 'Postman', 'MySQL', 'MongoDB', 'Node.js'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Web Development Training at Shree Academy',
      date: 'Aug 2022 – Jan 2023',
      description:
        'Successfully completed a five-month web development course where I honed my skills in Python and gained practical experience with modern web technologies.',
      technologies: ['Python', 'Web Development', 'Problem Solving'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="internship-training" className="pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-semibold text-white mb-10 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Internship & Training
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internshipProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

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

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Tag size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500 font-medium">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipTraining;
