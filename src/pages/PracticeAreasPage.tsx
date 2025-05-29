import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import { practiceAreas } from '../data/practiceAreas';

const PracticeAreasPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl font-serif">
              Áreas de Atuação
            </h1>
            <p className="text-xl text-white/80">
              Soluções jurídicas especializadas para profissionais e instituições de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 bg-white sm:py-24">
        <div className="container">
          <SectionTitle
            title="Nossos Serviços Especializados"
            subtitle="Atendemos profissionais da saúde e pacientes com foco em dois grandes pilares: Direito Médico e Direito da Saúde."
            subtitleAlign="left"
          />

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.id}
                  className="overflow-hidden transition-all bg-white border rounded-lg shadow-sm hover:shadow-md border-neutral-200"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full bg-primary-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-serif text-primary-900">{area.title}</h3>
                        <p className="text-neutral-600">{area.subtitle}</p>
                      </div>
                    </div>
                    <p className="mb-6 text-neutral-700">{area.description}</p>
                    <h4 className="mb-3 text-lg font-semibold text-primary-800">Situações comuns:</h4>
                    <ul className="mb-6 space-y-2">
                      {area.causes.slice(0, 3).map((cause, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/areas-de-atuacao/${area.id}`}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-primary-700 hover:bg-primary-800"
                    >
                      <span>Saiba mais</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 sm:py-20">
        <div className="container">
          <div className="px-6 py-10 overflow-hidden rounded-lg md:py-16 md:px-12 bg-gradient-to-r from-primary-800 to-primary-950">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold text-white font-serif sm:text-4xl">
                Precisando de orientação jurídica especializada?
              </h2>
              <p className="mb-8 text-lg text-white/80">
                Entre em contato com nossa equipe para uma análise personalizada do seu caso.
              </p>
              <Link to="/contato" className="btn btn-primary bg-white text-primary-900 hover:bg-neutral-100">
                Agende uma consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreasPage;