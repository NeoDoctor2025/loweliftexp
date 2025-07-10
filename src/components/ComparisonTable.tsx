import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Investimento',
    essentials: 'R$ 6.900',
    experience: 'R$ 11.900',
    athome: 'R$ 49.900'
  },
  {
    feature: 'Duração',
    essentials: '3 dias',
    experience: '5 dias',
    athome: '1-2 dias'
  },
  {
    feature: 'Local',
    essentials: 'Campo Grande/MS',
    experience: 'Campo Grande/MS',
    athome: 'Sua cidade'
  },
  {
    feature: 'Cirurgias LowerLift®',
    essentials: '3 (observação)',
    experience: '3 (observação)',
    athome: '1 (hands-on)'
  },
  {
    feature: 'FaceDay® (Consultas)',
    essentials: false,
    experience: true,
    athome: true
  },
  {
    feature: 'FaceCare® (Pós-op)',
    essentials: false,
    experience: true,
    athome: true
  },
  {
    feature: 'Execução em Paciente Próprio',
    essentials: false,
    experience: false,
    athome: true
  },
  {
    feature: 'Material Didático',
    essentials: true,
    experience: true,
    athome: true
  },
  {
    feature: 'Protocolos Completos',
    essentials: 'Básico',
    experience: 'Completo',
    athome: 'Personalizado'
  },
  {
    feature: 'Scripts de Venda',
    essentials: false,
    experience: true,
    athome: true
  },
  {
    feature: 'Certificação',
    essentials: 'Participação',
    experience: 'Proficiência',
    athome: 'Gold'
  },
  {
    feature: 'Co-marketing Autorizado',
    essentials: false,
    experience: false,
    athome: true
  },
  {
    feature: 'Suporte Pós-Mentoria',
    essentials: '30 dias',
    experience: '60 dias',
    athome: '90 dias VIP'
  },
  {
    feature: 'Acesso a Grupo Exclusivo',
    essentials: true,
    experience: true,
    athome: true
  },
  {
    feature: 'Mentoria Individual',
    essentials: false,
    experience: false,
    athome: true
  },
  {
    feature: 'Análise de Instrumentais',
    essentials: false,
    experience: false,
    athome: true
  },
  {
    feature: 'Plano Customizado',
    essentials: false,
    experience: false,
    athome: true
  },
  {
    feature: 'Cirurgias Adicionais',
    essentials: false,
    experience: false,
    athome: true
  }
];

const renderCell = (value: any) => {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mx-auto" />
    ) : (
      <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mx-auto" />
    );
  }
  return <span className="text-xs sm:text-sm font-medium">{value}</span>;
};

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Compare e Escolha Sua Jornada de Transformação
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="overflow-x-auto -mx-4 sm:mx-0"
        >
          <div className="min-w-full bg-white sm:rounded-xl shadow-lg overflow-hidden">
            <table className="min-w-full" style={{ minWidth: '800px' }}>
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-3 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Benefício
                  </th>
                  <th className="px-2 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    <div className="flex flex-col items-center">
                      <span className="text-yellow-400 text-xs mb-1 hidden sm:block">🥉 FUNDAMENTOS</span>
                      <span className="text-yellow-400 text-xs mb-1 sm:hidden">🥉</span>
                      <span>ESSENTIALS</span>
                    </div>
                  </th>
                  <th className="px-2 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider bg-blue-800">
                    <div className="flex flex-col items-center">
                      <span className="text-yellow-400 text-xs mb-1 hidden sm:block">🥈 MAIS ESCOLHIDO</span>
                      <span className="text-yellow-400 text-xs mb-1 sm:hidden">🥈</span>
                      <span>EXPERIENCE</span>
                    </div>
                  </th>
                  <th className="px-2 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    <div className="flex flex-col items-center">
                      <span className="text-yellow-400 text-xs mb-1 hidden sm:block">🥇 EXCLUSIVO</span>
                      <span className="text-yellow-400 text-xs mb-1 sm:hidden">🥇</span>
                      <span>AT HOME</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-gray-700">
                      {renderCell(row.essentials)}
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-gray-700 bg-blue-50">
                      {renderCell(row.experience)}
                    </td>
                    <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-gray-700">
                      {renderCell(row.athome)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-blue-600">Cada modalidade</span> foi cuidadosamente estruturada para atender diferentes perfis profissionais e objetivos de aprendizado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}