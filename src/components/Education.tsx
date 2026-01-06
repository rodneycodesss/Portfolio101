import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Commerce (BCOM)",
      institution: "Masinde Muliro University of Science & Technology (MMUST)",
      location: "Kenya",
      period: "Currently Enrolled",
      gpa: "In Progress",
      achievements: [
        "Business and Commerce Studies",
        "Financial Analysis",
        "Management Principles",
        "Academic Excellence"
      ],
      coursework: [
        "Business Management",
        "Financial Accounting",
        "Economics",
        "Marketing",
        "Statistics",
        "Business Law"
      ]
    },
    {
      degree: "Software Development Program (Full Stack)",
      institution: "Zindua School",
      location: "Online/Remote",
      period: "2025",
      gpa: "3.4",
      achievements: [
        "Full-Stack Development Training",
        "Modern Web Technologies",
        "Project-Based Learning",
        "Industry-Relevant Skills"
      ],
      coursework: [
        "JavaScript & TypeScript",
        "React & Frontend Development",
        "Node.js & Backend Development",
        "Database Management",
        "API Development",
        "DevOps & Deployment"
      ]
    },
    {
      degree: "Cybersecurity Fundamentals",
      institution: "OPSWAT Academy",
      location: "Online",
      period: "2025",
      gpa: "3.4",
      achievements: [
        "Cybersecurity Best Practices",
        "Threat Detection & Prevention",
        "Security Tools & Technologies",
        "Industry-Standard Certifications"
      ],
      coursework: [
        "Network Security",
        "Threat Analysis",
        "Security Protocols",
        "Incident Response",
        "Security Tools",
        "Compliance Standards"
      ]
    },
    {
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Rockfields Senior School (RSS)",
      location: "Kenya",
      period: "",
      gpa: "3.6",
      achievements: [
        "Secondary Education Completion",
        "Academic Excellence",
        "Foundation for Higher Education"
      ],
      coursework: [
        "Mathematics",
        "English",
        "Sciences",
        "Business Studies",
        "Computer Studies"
      ]
    }
  ];

  const certifications = [
    {
      name: "Risk Management in Finance",
      issuer: "Coursera",
      year: "2024"
    },
    {
      name: "Financial Analysis",
      issuer: "Coursera",
      year: "2024"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "OPSWAT",
      year: "2025"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My educational journey includes a Bachelor's degree in Commerce, software development training, 
            cybersecurity fundamentals, and professional certifications in finance and cybersecurity, providing 
            me with a diverse skill set for entry-level software engineering roles.
          </p>
        </div>

        {/* Academic Degrees */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Academic Degrees</h3>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          {edu.period && (
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{edu.period}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Award size={16} />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;