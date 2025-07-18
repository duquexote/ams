import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/topo-mobile.png"
          alt="Medical Law Background"
          className="object-cover w-full h-full md:hidden"
        />
        <img
          src="/topo-web.png"
          alt="Medical Law Background"
          className="hidden md:block object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary-950/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl md:max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-secondary-500 text-white animate-fade-in">
            Direito Médico e da Saúde
          </div>
          <h1 className="mb-6 text-2xl font-bold text-white font-serif sm:text-3xl md:text-4xl animate-fade-in">
          Defendemos beneficiários de planos de saúde e profissionais da saúde com excelência jurídica. Atendimento ágil no WhatsApp.
          </h1>
          <div className="flex flex-wrap gap-4 animate-slide-up justify-center md:justify-start">
            <Link
              to="/contato"
              className="btn btn-primary bg-secondary-600 hover:bg-secondary-700 text-white"
            >
              Fale com um especialista
            </Link>
            <Link
              to="/areas-de-atuacao"
              className="btn border border-white text-white hover:bg-white/10"
            >
              Conheça nossos serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;