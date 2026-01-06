import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Full Stack Developer",
      company: "Projects & Training",
      location: "Remote",
      period: "2025 - Present",
      description: "Build and maintain full-stack web applications as part of structured training and personal projects. Work with frontend frameworks and backend services to create functional systems.",
      achievements: [
        "Build and maintain full-stack web applications as part of structured training and personal projects",
        "Work with frontend frameworks and backend services to create functional systems",
        "Implement authentication, basic data handling, and API integrations",
        "Use Git/GitHub for version control and collaboration",
        "Apply secure development and clean code principles"
      ]
    },
    {
      title: "IT Support & Systems Assistant",
      company: "Project-Based",
      location: "Remote",
      period: "2020 - Present",
      description: "Provide basic IT and application support for web-based systems. Assist with system setup, testing, troubleshooting, and documentation.",
      achievements: [
        "Provide basic IT and application support for web-based systems",
        "Assist with system setup, testing, troubleshooting, and documentation",
        "Support users with basic technical issues and system navigation"
      ]
    },
    {
      title: "Forex Trader",
      company: "Independent",
      location: "Global Markets",
      period: "2020 - Present",
      description: "Trade global forex markets using structured risk management strategies. Apply technical analysis and market structure concepts.",
      achievements: [
        "Trade global forex markets using structured risk management strategies",
        "Apply technical analysis and market structure concepts",
        "Former partner with international FX brokers",
        "Strong analytical and decision-making skills transferable to software engineering"
      ]
    },
    {
      title: "Cybersecurity Trainee",
      company: "OPSWAT Academy",
      location: "Online",
      period: "2025 - Present",
      description: "Training in cybersecurity fundamentals and secure system practices. Exposure to threat awareness, vulnerabilities, and mitigation concepts.",
      achievements: [
        "Training in cybersecurity fundamentals and secure system practices",
        "Exposure to threat awareness, vulnerabilities, and mitigation concepts"
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
            My experience spans across software development, IT support, financial markets, and cybersecurity. 
            From building full-stack applications to forex trading and security training, I bring a unique combination 
            of technical skills, analytical thinking, and market knowledge that positions me well for entry-level software engineering roles.
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
