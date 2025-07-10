import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, TrendingUp, Frown } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Resultados Efêmeros',
    description: 'Resultados no pescoço que não perduram como esperado, gerando reoperações'
  },
  {
    icon: Shield,
    title: 'Insegurança Técnica',
    description: 'Hesitação ao abordar casos complexos de flacidez cervical acentuada'
  },
  {
    icon: TrendingUp,
    title: 'Potencial Subaproveitado',
    description: 'A percepção de que poderia cobrar mais se dominasse técnicas avançadas'
  },
  {
    icon: Frown,
    title: 'Resultados Incompletos',
    description: 'Frustração quando o rejuvenescimento facial não é acompanhado pelo cervical'
  }
];

export default function Problems() {
  return (
    <section id="problemas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Uma Reflexão Necessária
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Como cirurgião, você já deve ter enfrentado estas situações:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                <problem.icon className="w-8 h-8 text-red-600" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center">
                {problem.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Se você se identificou com pelo menos duas situações, há uma{' '}
              <span className="font-semibold text-blue-600">oportunidade significativa de evolução</span>{' '}
              em sua prática.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}