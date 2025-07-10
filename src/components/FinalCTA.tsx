import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Users, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            O Momento da Decisão
          </h2>
          
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            A distinção entre mediocridade e excelência raramente reside no talento. 
            Encontra-se no conhecimento diferenciado e orientação precisa.
          </p>
          
          {/* Scarcity Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-red-50 border-2 border-red-200 text-red-800 p-8 rounded-xl mb-12 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              <h3 className="text-2xl font-bold">APENAS 1 VAGA POR SEMANA</h3>
            </div>
            
            <p className="text-lg mb-6 leading-relaxed">
              Nossa dedicação à excelência limita-nos a mentorar um único profissional por vez.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                </div>
                <p className="font-semibold text-xs sm:text-sm">75% das próximas</p>
                <p className="font-bold text-base sm:text-lg">8 semanas</p>
                <p className="text-xs sm:text-sm">comprometidas</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-red-600 mr-2" />
                </div>
                <p className="font-semibold text-xs sm:text-sm">Lista de espera:</p>
                <p className="font-bold text-base sm:text-lg">23</p>
                <p className="text-xs sm:text-sm">profissionais</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-red-600 mr-2" />
                </div>
                <p className="font-semibold text-xs sm:text-sm">Próxima disponibilidade:</p>
                <p className="font-bold text-base sm:text-lg">12</p>
                <p className="text-xs sm:text-sm">dias</p>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <button className="w-full sm:w-auto bg-white text-blue-900 px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl touch-manipulation">
              GARANTIR MINHA VAGA AGORA
            </button>
            
            <p className="text-sm mt-4 opacity-75">
              Ao clicar, você escolherá sua modalidade no formulário
            </p>
          </motion.div>
          
          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="border-t border-blue-700 pt-6 text-sm opacity-75"
          >
            <p>
              Proteção de Dados | WhatsApp: (67) 9XXXX-XXXX
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}