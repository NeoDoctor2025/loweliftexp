import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Target, Clock } from 'lucide-react';

const pillars = [
  {
    icon: Stethoscope,
    title: 'I. Maestria Anatômica Profunda',
    description: 'O domínio de estruturas negligenciadas por 95% dos profissionais - a chave para resultados verdadeiramente duradouros.'
  },
  {
    icon: Target,
    title: 'II. Precisão Metodológica',
    description: 'Um protocolo com 15 anos de evolução, refinado em mais de 2000 procedimentos, garantindo consistência e reprodutibilidade.'
  },
  {
    icon: Clock,
    title: 'III. Longevidade Comprovada',
    description: 'Resultados duradouros com melhor definição cervical. Uma satisfação que transcende expectativas de pacientes e cirurgiões.'
  }
];

export default function Method() {
  return (
    <section id="metodo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A Filosofia LowerLift<span className="text-blue-600">®</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Os Três Fundamentos que Redefinem a Excelência
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <pillar.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
                {pillar.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl max-w-4xl mx-auto text-center border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Imagine a cirurgia cervical como a restauração de uma obra de arte. A abordagem superficial é como retocar apenas o verniz. O LowerLift® trabalha na estrutura, restaurando em essência."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}