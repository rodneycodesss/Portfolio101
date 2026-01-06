import React from 'react';
import { Code, Globe, GraduationCap, TrendingUp, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NusuFi",
      category: "FinTech",
      description: "Web3-based investment platform concept focusing on decentralized finance solutions.",
      icon: TrendingUp,
      technologies: ["React", "Web3", "Blockchain", "TypeScript"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "SkillUp",
      category: "EdTech",
      description: "Learning management and authentication platform for skill development and course management.",
      icon: GraduationCap,
      technologies: ["React", "Firebase", "Authentication", "TypeScript"],
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "ElimuNexus",
      category: "EdTech",
      description: "Education-focused LMS project designed specifically for Kenyan high schools, providing comprehensive learning management solutions.",
      icon: Globe,
      technologies: ["React", "Django", "REST APIs", "PostgreSQL"],
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions in fintech and edtech spaces, focusing on scalable web platforms 
            and learning management systems that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mb-4`}>
                <project.icon className="text-white" size={32} />
              </div>
              
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-2">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                <Code size={16} className="mr-2" />
                <span>In Development</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

