import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ShieldCheck } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const practiceAreas = [
  {
    title: 'Direito Médico',
    description: 'Defendemos profissionais de saúde em processos éticos, administrativos e judiciais, como também atuamos para empresas da área da saúde, promovendo segurança jurídica e prevenindo litígios.',
    icon: Stethoscope,
    link: '/areas-de-atuacao/direito-medico',
  },
  {
    title: 'Direito da Saúde',
    description: 'Defendemos beneficiários de planos de saúde a fim de garantir a preservação de direitos contratuais e legais.',
    icon: ShieldCheck,
    link: '/areas-de-atuacao/direito-da-saude',
  },
];

const PracticeAreasSection: React.FC = () => {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container">
        <SectionTitle
          title="Áreas de Atuação"
          subtitle="Atendemos profissionais da saúde e beneficiários de planos de saúde com foco em dois grandes pilares: Direito Médico e Direito da Saúde."
          center={true}
        />

        <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-4xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all bg-white border rounded-lg shadow-sm group hover:shadow-md border-neutral-200 w-full sm:w-[340px] md:w-[380px]"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-primary-600 group-hover:bg-secondary-600 transition-colors">
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold font-serif text-primary-900">{area.title}</h3>
                <p className="mb-4 text-neutral-700">{area.description}</p>
                <Link
                  to={area.link}
                  className="inline-flex items-center text-primary-700 hover:text-primary-800"
                >
                  <span>Saiba mais</span>
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
          <Link to="/areas-de-atuacao" className="btn btn-primary">
            Ver todas as áreas de atuação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;