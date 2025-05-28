import React from 'react';
import { Shield, Target, Award, Heart } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const ValuesSection: React.FC = () => {
  const values = [
    {
      title: 'Missão',
      description: 'Promover a defesa de profissionais da saúde, assegurando a integridade ética e oferecendo assessoria jurídica especializada.',
      icon: Shield,
    },
    {
      title: 'Visão',
      description: 'Ser a maior referência em Direito Médico e da Saúde do Norte/Nordeste.',
      icon: Target,
    },
    {
      title: 'Valores',
      description: 'Acessibilidade, Empatia e Respeito, Excelência Técnica, Honestidade e Confiança.',
      icon: Heart,
    },
    {
      title: 'Excelência',
      description: 'Comprometimento com os mais altos padrões de qualidade e atualização constante do conhecimento jurídico especializado.',
      icon: Award,
    },
  ];

  return (
    <section className="py-16 bg-neutral-50 sm:py-24">
      <div className="container">
        <SectionTitle
          title="Nosso Compromisso"
          subtitle="Nossos valores fundamentais que guiam cada aspecto de nosso trabalho e relacionamento com clientes."
          center={true}
        />

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-primary-600">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold font-serif text-primary-900">{value.title}</h3>
              <p className="text-neutral-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;