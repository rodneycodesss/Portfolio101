import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Student",
      company: "Zindua School",
      location: "Online/Remote",
      period: "April 2025 - Present",
      description: "Currently enrolled in an intensive software development program learning full-stack web development technologies and best practices.",
      achievements: [
        "Learning modern web technologies including React, Node.js, and TypeScript",
        "Working on real-world projects to build portfolio and practical skills",
        "Collaborating with peers on group projects and code reviews",
        "Developing problem-solving skills through algorithm challenges"
      ]
    },
    {
      title: "Seasoned Forex Trader",
      company: "Independent Trading",
      location: "Global Markets",
      period: "2020 - Present",
      description: "Experienced forex trader with deep market knowledge and former partnerships with top-tier FX brokers worldwide.",
      achievements: [
        "Developed comprehensive understanding of market depth and liquidity analysis",
        "Former partner with leading FX brokers including major international institutions",
        "Specialized in technical analysis, risk management, and algorithmic trading strategies",
        "Consistently profitable trading across multiple currency pairs and market conditions"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2024 - Present",
      description: "Providing web development services to small businesses and individuals, creating responsive and modern websites.",
      achievements: [
        "Developed 5+ responsive websites using HTML, CSS, and JavaScript",
        "Implemented modern design principles and user experience best practices",
        "Collaborated with clients to understand requirements and deliver solutions",
        "Maintained and updated existing websites for ongoing clients"
      ]
    },
    {
      title: "Cybersecurity Training Participant",
      company: "OPSWAT Academy",
      location: "Online",
      period: "2025 - Present",
      description: "Participating in comprehensive cybersecurity training program to develop security skills and knowledge.",
      achievements: [
        "Learning cybersecurity fundamentals and best practices",
        "Understanding threat detection and prevention techniques",
        "Gaining hands-on experience with security tools and technologies",
        "Preparing for industry-recognized cybersecurity certifications"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            My experience spans across multiple domains including financial markets, software development, and cybersecurity. 
            From forex trading with major brokers to web development and security training, I bring a unique combination 
            of analytical thinking, technical skills, and market knowledge that positions me well for fintech and technology roles.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <ChevronRight className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;