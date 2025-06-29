import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Calendar, Send, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rodneygilbert321@gmail.com',
      link: 'mailto:rodneygilbert321@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254780482290',
      link: 'tel:+254780482290'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kenya (Remote)',
      link: '#'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'rodney-gilbert-b00867236',
      link: 'https://www.linkedin.com/in/rodney-gilbert-b00867236/'
    }
  ];

  // Countdown effect for redirect
  useEffect(() => {
    if (showSuccessModal && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showSuccessModal && countdown === 0) {
      // Redirect to home page
      const homeElement = document.getElementById('home');
      if (homeElement) {
        console.log('Scrolling to home section...');
        homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Also scroll to top of page for better visibility
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.log('Home element not found, scrolling to top...');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setShowSuccessModal(false);
      setCountdown(4);
    }
  }, [showSuccessModal, countdown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Log form data for debugging
      const formData = new FormData(formRef.current!);
      console.log('Form data being sent:', {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      });

      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'service_rkb5qye', // Replace with your EmailJS service ID
        'template_aev6y9v', // Replace with your EmailJS template ID
        formRef.current!,
        'Vg6irtdCrNrZN8X1C' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      console.log('EmailJS response:', result.text);
      setSubmitStatus('success');
      setShowSuccessModal(true);
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Email send failed:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-teal-300 mx-auto mb-8"></div>
            <p className="text-lg text-blue-100 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and meaningful connections. 
              Let's discuss how we can work together to achieve great results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'LinkedIn' ? '_blank' : undefined}
                    rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-white/20 dark:bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-gray-600/50 transition-all duration-200">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{info.title}</p>
                      <p className="text-blue-100 dark:text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar size={24} className="text-teal-300" />
                  <h4 className="text-xl font-semibold">Schedule a Meeting</h4>
                </div>
                <p className="text-blue-100 dark:text-gray-300 mb-4">
                  Ready to discuss opportunities? I'd love to hear from you and explore how we can collaborate.
                </p>
                <a 
                  href="https://calendly.com/rodneygilbert/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white dark:bg-gray-700 text-blue-800 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Schedule Call
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-gray-500 text-white placeholder-blue-200 dark:placeholder-gray-400"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-gray-500 text-white placeholder-blue-200 dark:placeholder-gray-400"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-gray-500 text-white placeholder-blue-200 dark:placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-gray-500 text-white placeholder-blue-200 dark:placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-gray-500 text-white placeholder-blue-200 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-400 rounded-lg text-red-200">
                    Failed to send message. Please try again or contact me directly via email.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white dark:bg-gray-700 text-blue-800 dark:text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-600 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-800"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl transform animate-scale-in">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600 dark:text-green-400" size={40} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Message Sent Successfully!
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
                <ArrowRight size={20} />
                <span className="font-semibold">Redirecting to home page in {countdown} seconds...</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((4 - countdown) / 4) * 100}%` }}
              ></div>
            </div>

            <button
              onClick={() => {
                const homeElement = document.getElementById('home');
                if (homeElement) {
                  homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setShowSuccessModal(false);
                setCountdown(4);
              }}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <ArrowRight size={20} />
              <span>Go to Home Page Now</span>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Contact;