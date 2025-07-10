import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800 z-50"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />
      
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                LowerLift<span className="text-blue-600">®</span>
              </h1>
              <span className="ml-2 text-sm text-gray-600">Deep Neck Academy</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('metodo')}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Método
              </button>
              <button
                onClick={() => scrollToSection('modalidades')}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Modalidades
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('fundadores')}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Fundadores
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/5511999999999"
                className="hidden sm:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors touch-manipulation"
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </a>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 -mr-2 touch-manipulation"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              <button
                onClick={() => scrollToSection('metodo')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors touch-manipulation"
              >
                Método
              </button>
              <button
                onClick={() => scrollToSection('modalidades')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors touch-manipulation"
              >
                Modalidades
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors touch-manipulation"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('fundadores')}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors touch-manipulation"
              >
                Fundadores
              </button>
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/5511999999999"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors touch-manipulation"
                >
                  <Phone size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}