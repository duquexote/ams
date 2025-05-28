import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const teamMembers = [
  {
    name: 'Dr. Alexandre M. Silva',
    role: 'Sócio Fundador',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dra. Maria Santos',
    role: 'Sócia Fundadora',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dr. Pedro Almeida',
    role: 'Advogado Associado',
    image: 'https://images.pexels.com/photos/8422128/pexels-photo-8422128.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50 sm:py-24">
      <div className="container">
        <SectionTitle
          title="Um Time Especializado em Direito da Saúde"
          subtitle="Conheça os sócios, advogados associados e profissionais que fazem do AMS uma referência jurídica na área médica."
          center={true}
        />

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-1 text-xl font-bold font-serif text-primary-900">{member.name}</h3>
                <p className="mb-4 text-neutral-600">{member.role}</p>
                <Link
                  to="/equipe"
                  className="inline-flex items-center text-primary-700 hover:text-primary-800"
                >
                  <span>Ver perfil completo</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/equipe" className="btn btn-primary">
            Ver Equipe Completa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;