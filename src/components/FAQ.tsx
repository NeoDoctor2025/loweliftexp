import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Qual experiência prévia é necessária?',
    answer: 'Recomendamos ao menos dois anos de prática em cirurgia facial. Mais relevante que tempo é o compromisso genuíno com a excelência.'
  },
  {
    question: 'O método é adequado para diferentes faixas etárias de pacientes?',
    answer: 'Certamente. Os protocolos são elegantemente adaptáveis, respeitando as particularidades de cada década de vida.'
  },
  {
    question: 'Como se distingue de cursos convencionais?',
    answer: 'Enquanto cursos oferecem teoria e demonstrações genéricas, proporcionamos mentoria personalizada com seus casos. É a diferença entre conhecimento e maestria.'
  },
  {
    question: 'Existem facilidades de pagamento?',
    answer: 'Sim, parcelamento em até 12x. Pagamentos à vista via PIX contemplam 10% de desconto.'
  },
  {
    question: 'Posso levar um assistente?',
    answer: 'Sim! Oferecemos 50% de desconto para o segundo participante da mesma equipe.'
  },
  {
    question: 'Alunos têm desconto em upgrades?',
    answer: 'Alunos Experience têm 20% de desconto em upgrades no primeiro ano.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Esclarecimentos Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors touch-manipulation"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 sm:px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}