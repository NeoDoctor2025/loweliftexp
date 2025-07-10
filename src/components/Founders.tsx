import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';

const founders = [
  {
    name: 'Dr. João Silva',
    title: 'Fundador & Diretor Técnico',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    credentials: [
      'Cirurgião Plástico - CRM 12345',
      'Especialista em Rejuvenescimento Cervical',
      'Mais de 15 anos de experiência',
      'Autor de 20+ publicações científicas'
    ],
    description: 'Pioneer no desenvolvimento do método LowerLift®, com mais de 2000 procedimentos realizados.'
  },
  {
    name: 'Dr. Roberto Alves',
    title: 'Co-fundador & Diretor de Ensino',
    image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    credentials: [
      'Cirurgião Plástico - CRM 67890',
      'Doutor em Cirurgia Plástica',
      'Professor Universitário',
      'Palestrante Internacional'
    ],
    description: 'Especialista em educação médica e responsável pelo desenvolvimento dos protocolos de ensino.'
  }
];

export default function Founders() {
  return (
    <section id="fundadores" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Conheça os Fundadores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Os criadores do método LowerLift® são referências em rejuvenescimento cervical
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-6 shadow-lg"
                />
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                
                <p className="text-sm sm:text-base text-blue-600 font-semibold mb-4">
                  {founder.title}
                </p>
                
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  {founder.description}
                </p>
                
                <div className="w-full space-y-2">
                  {founder.credentials.map((credential, credIndex) => (
                    <div key={credIndex} className="flex items-start text-gray-700">
                      <Award className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 p-8 rounded-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">2000+</h4>
              <p className="text-gray-600">Procedimentos Realizados</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">500+</h4>
              <p className="text-gray-600">Cirurgiões Treinados</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">15</h4>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}