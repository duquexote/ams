import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <SectionTitle 
              title="Quem Somos" 
              subtitle="O AMS Advogados é um escritório especializado na defesa de profissionais da saúde e na atuação estratégica em Direito Médico e da Saúde."
              center={false}
            />
            <p className="mb-6 text-neutral-700">
              Com anos de experiência e uma equipe altamente qualificada, buscamos sempre a excelência técnica, 
              o atendimento humanizado e a construção de relações pautadas na confiança, ética e resultado.
            </p>
            <Link to="/sobre" className="btn btn-primary">
              Saiba mais sobre nós
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-100 rounded-lg z-0"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary-100 rounded-lg z-0"></div>
            <img
              src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Equipe AMS Advogados"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;