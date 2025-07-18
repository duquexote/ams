import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contato</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Informações de contato */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Telefone</h3>
                <p className="text-gray-600">55 (71) 99723-9870</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-gray-600">contato@amsadvs.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Endereço</h3>
                <p className="text-gray-600">Rua Ewerton Visco, nº 290, Boulevard Side Empresarial, Sala 208</p>
                <p className="text-gray-600">Caminho das Árvores, Salvador, Bahia</p>
                <p className="text-gray-600">CEP: 41.820-022.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Formulário de contato */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Envie uma mensagem</h2>
          <ContactForm includeSubject={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
