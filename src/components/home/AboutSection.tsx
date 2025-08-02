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
              subtitle="O AMS Advogados nasceu da união de três profissionais que compartilham a mesma paixão pela advocacia e um propósito comum: proteger e fortalecer os direitos de quem cuida da saúde das pessoas e também de quem precisa dela."
              center={false}
            />
            <p className="mb-6 text-neutral-700">
              Fundado por Matheus Athayde, Lucas Macedo e Gabriela Sady, o escritório consolida uma trajetória que se iniciou muito antes da formação da sociedade. Após anos de atuação conjunta em grandes demandas de Direito Médico e da Saúde, os sócios decidiram formalizar a parceria e construir um escritório que refletisse os valores, a técnica e o compromisso que sempre os nortearam individualmente.
            </p>
            <Link to="/sobre" className="btn btn-primary">
              Saiba mais sobre nós
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-100 rounded-lg z-0"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary-100 rounded-lg z-0"></div>
            <img
              src="/quem-somos.webp"
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