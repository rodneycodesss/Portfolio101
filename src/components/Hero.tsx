import React, { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, X } from 'lucide-react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div 
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  src="/Rodney.jpeg" 
                  alt="Rodney Gilbert" 
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    objectPosition: 'center 20%'
                  }}
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-r from-blue-600 to-teal-600 flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
                  RG
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Rodney Gilbert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Software Development Student passionate about creating innovative web solutions and learning new technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="/Rodney_Gilbert_Resume.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/rodney-gilbert-b00867236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:rodneygilbert321@gmail.com"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* Modal for full photo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-2xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
              aria-label="Close photo modal"
            >
              <X size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
            <img 
              src="/Rodney.jpeg" 
              alt="Rodney Gilbert - Full Photo" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;