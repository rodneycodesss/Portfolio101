import React, { useState, useEffect, useRef } from 'react';
import { Code, Users, TrendingUp, Lightbulb } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills: Skill[] = [
    { name: 'JavaScript/TypeScript', level: 85, icon: Code },
    { name: 'React.js', level: 80, icon: Code },
    { name: 'HTML/CSS', level: 90, icon: Code },
    { name: 'Node.js', level: 75, icon: Code },
  ];

  const softSkills: Skill[] = [
    { name: 'Problem Solving', level: 90, icon: Lightbulb },
    { name: 'Communication', level: 85, icon: Users },
    { name: 'Team Collaboration', level: 88, icon: Users },
    { name: 'Learning Agility', level: 95, icon: TrendingUp },
  ];

  const tools = [
    'VS Code',
    'Git & GitHub',
    'Chrome DevTools',
    'Postman',
    'Figma',
    'npm/yarn',
    'Vite',
    'Tailwind CSS',
    'MongoDB',
    'Firebase'
  ];

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <skill.icon className="text-blue-600 dark:text-blue-400" size={20} />
          <span className="font-bold text-gray-900 dark:text-white text-lg tracking-wide">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-600 to-teal-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            A growing skill set in modern web development technologies, combined with strong problem-solving 
            and communication abilities to create effective digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
              <Code className="text-blue-600 dark:text-blue-400" size={32} />
              <span className="tracking-wide">Technical Skills</span>
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center space-x-3">
              <Users className="text-blue-600 dark:text-blue-400" size={32} />
              <span className="tracking-wide">Soft Skills</span>
            </h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center tracking-wide">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 cursor-default border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-md"
                style={{
                  animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 50}ms both` : 'none'
                }}
              >
                <span className="font-bold text-base tracking-wide uppercase text-gray-800 dark:text-gray-200">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;