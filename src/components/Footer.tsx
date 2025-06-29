import React from 'react';
import { Heart, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Rodney Gilbert</h3>
            <p className="text-gray-400 mb-4">
              Software Development Student passionate about creating innovative web solutions and learning new technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/rodney-gilbert-b00867236/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-blue-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/rodneycodesss"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:rodneygilbert321@gmail.com"
                className="p-2 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 transform hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Education
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Kenya (Remote)</p>
              <p>rodneygilbert321@gmail.com</p>
              <p>+254780482290</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Rodney Gilbert © {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;