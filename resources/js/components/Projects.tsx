// src/components/Projects.jsx
import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = ({ projects }) => {
  // Temporarily map row manually if it's missing
  const projectsWithRow = projects.map((p) => {
    let row = undefined;
    if (p.name === 'ALTS USA LLC - Import/Export System' || p.name === 'Virtual Budz - API Development') {
      row = 1; // Mark these as featured
    }
    return { ...p, row };
  });

  // Log each project's row value for confirmation
  projectsWithRow.forEach(p => {
    // console.log(`🧪 Project: ${p.name}, row =`, p.row);
  });

  // Only show featured (row === 1)
  const featured = (projectsWithRow || []).filter(p => p.row === 1);

  return (
    <section id='projects' className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.company_name || 'N/A'}
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Tag size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500 font-medium">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(project.skills)
                      ? project.skills
                      : typeof project.skills === 'string'
                      ? project.skills.split(',').map(s => s.trim())
                      : []
                    ).map((tech, i) => (
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

export default Projects;
