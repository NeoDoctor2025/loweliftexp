import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900/60 to-blue-900/40 z-10" />
        <img
          src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Medical procedure"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            LowerLift<span className="text-blue-400">®</span> Experience
          </h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 font-light px-4 sm:px-0"
          >
            O Método Definitivo para sua Evolução na Cirurgia do Rejuvenescimento Cervical Profundo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 font-light max-w-3xl mx-auto px-4 sm:px-0"
          >
            Desenvolva maestria através de uma mentoria personalizada com os criadores do método que revolucionou a abordagem cervical profunda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
          >
            <button
              onClick={() => scrollToSection('modalidades')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
            >
              CONHECER AS MODALIDADES
            </button>
            
            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 text-white hover:text-blue-400 transition-colors py-4 touch-manipulation">
              <Play size={20} />
              <span>Assistir Vídeo Institucional</span>
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm text-gray-300 mt-6 px-4 sm:px-0"
          >
            15 anos de excelência em rejuvenescimento cervical
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('problemas')}
            className="text-white hover:text-blue-400 transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}