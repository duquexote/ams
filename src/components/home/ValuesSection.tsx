import React from 'react';
import { Shield, Target, Heart } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const ValuesSection: React.FC = () => {
  const values = [
    {
      title: 'Missão',
      description: 'Promover a defesa de profissionais da saúde, assegurando a preservação da integridade ética e profissional, bem como oferecer assessoria jurídica especializada em saúde suplementar para proteger direitos dos beneficiários de planos de saúde.',
      icon: Shield,
    },
    {
      title: 'Visão',
      description: 'Ser a maior referência de Direito Médico e da Saúde do Norte/Nordeste, reconhecido pela excelência no atendimento, qualidade técnica e compromisso com os clientes.',
      icon: Target,
    },
    {
      title: 'Valores',
      description: '- Acessibilidade \n- Empatia e Respeito \n- Excelência Técnica \n- Honestidade e Confiança',
      icon: Heart,
    }
  ];

  return (
    <section className="py-16 bg-neutral-50 sm:py-24">
      <div className="container">
        <SectionTitle
          title="Nosso Compromisso"
          subtitle="Nossos valores fundamentais que guiam cada aspecto de nosso trabalho e relacionamento com clientes."
          center={true}
        />

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 justify-center mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-primary-600">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold font-serif text-primary-900">{value.title}</h3>
              {value.title === 'Valores' ? (
                <ul className="list-disc pl-5 text-neutral-700 space-y-1">
                  {value.description.split('\n').map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-700">{value.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;