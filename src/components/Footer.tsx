import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              LowerLift<span className="text-blue-400">®</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Deep Neck Academy - Revolucionando o rejuvenescimento cervical através de mentoria especializada e técnicas avançadas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5511999999999"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="tel:+5511999999999"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:contato@deepneckacademy.com"
                className="bg-gray-600 hover:bg-gray-700 p-2 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Modalidades</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#modalidades" className="hover:text-white transition-colors">Essentials</a></li>
              <li><a href="#modalidades" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#modalidades" className="hover:text-white transition-colors">At Home</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+55 11 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>contato@deepneckacademy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Deep Neck Academy. Todos os direitos reservados.</p>
          <p className="mt-2">LowerLift® é marca registrada da Deep Neck Academy.</p>
        </div>
      </div>
    </footer>
  );
}