import React from 'react';
import { Award, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Strong analytical skills to break down complex problems and create efficient solutions.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experience working in teams and collaborating effectively on group projects.'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with the latest technologies and best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Approaching development challenges with innovative thinking and creative problem-solving.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Software Engineer with a unique background that combines technology and financial markets expertise. 
            My journey from forex trading to software development has given me a distinctive perspective on creating 
            efficient, user-focused applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <highlight.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">{highlight.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;