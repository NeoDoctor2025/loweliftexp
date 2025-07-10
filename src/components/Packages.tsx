import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, Crown, Check } from 'lucide-react';

const packages = [
  {
    name: 'LowerLift® Essentials',
    badge: '🥉 FUNDAMENTOS',
    subtitle: 'Imersão Observacional em Campo Grande',
    price: 'R$ 6.900',
    icon: Eye,
    features: [
      '3 dias intensivos em Campo Grande/MS',
      'Acompanha 3 cirurgias completas',
      'Observação direta com os criadores',
      'Material didático exclusivo',
      'Certificado de Participação',
      'Grupo de discussão por 30 dias'
    ],
    bestFor: 'Ideal para: Cirurgiões que querem conhecer profundamente o método',
    cta: 'QUERO ESTA OPÇÃO',
    popular: false
  },
  {
    name: 'LowerLift® Experience',
    badge: '🥈 MAIS ESCOLHIDO',
    subtitle: 'Jornada Completa com FaceDay® e FaceCare®',
    price: 'R$ 11.900',
    icon: Users,
    features: [
      '5 dias completos em Campo Grande/MS',
      '3 cirurgias + consultório + pós',
      'FaceDay®: dia completo de consultas',
      'FaceCare®: protocolos pós-operatório',
      'Scripts de consulta e precificação',
      'Certificado de Proficiência',
      'Suporte WhatsApp por 60 dias'
    ],
    bestFor: 'Ideal para: Dominar TODO o processo, da consulta ao pós',
    cta: 'ESCOLHER EXPERIENCE',
    popular: true
  },
  {
    name: 'LowerLift® At Home',
    badge: '🥇 EXCLUSIVO',
    subtitle: 'Mentoria Personalizada em Seu Ambiente',
    price: 'R$ 49.900',
    priceTag: 'por procedimento',
    icon: Crown,
    features: [
      'Fundador vai ATÉ VOCÊ',
      'Mentoria hands-on com SEU paciente',
      'No SEU centro cirúrgico',
      'Análise completa da estrutura',
      'Certificação Gold LowerLift®',
      'Autorização para co-marketing',
      'Suporte VIP por 90 dias'
    ],
    bestFor: 'Ideal para: Implementação imediata com máxima segurança',
    cta: 'APLICAR PARA VIP',
    popular: false
  }
];

export default function Packages() {
  return (
    <section id="modalidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Modalidades de Mentoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o Percurso Ideal para Sua Evolução
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-blue-600 lg:scale-105' : ''
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {pkg.badge}
                </span>
              </div>
              
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto mt-4">
                <pkg.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              {/* Title and Subtitle */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {pkg.name}
              </h3>
              
              <p className="text-blue-600 font-semibold text-center mb-6">
                {pkg.subtitle}
              </p>
              
              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                {pkg.priceTag && (
                  <p className="text-gray-600 text-sm mt-1">{pkg.priceTag}</p>
                )}
              </div>
              
              {/* Features */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Best For */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-800 text-sm font-medium text-center">
                  {pkg.bestFor}
                </p>
              </div>
              
              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                pkg.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 touch-manipulation'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              } touch-manipulation`}>
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg max-w-md mx-auto">
            <p className="text-yellow-800 font-medium">
              Pré-requisito: RQE em Cirurgia Plástica
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}