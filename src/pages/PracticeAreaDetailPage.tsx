import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { practiceAreas } from '../data/practiceAreas';

const PracticeAreaDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const practiceArea = practiceAreas.find((area) => area.id === slug);

  if (!practiceArea) {
    return <Navigate to="/areas-de-atuacao\" replace />;
  }

  const Icon = practiceArea.icon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
        </div>
        <div className="relative container">
          <div className="flex items-center mb-4 text-white/80">
            <Link to="/areas-de-atuacao" className="hover:text-white">
              Áreas de Atuação
            </Link>
            <svg
              className="w-4 h-4 mx-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{practiceArea.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 mr-6 text-white bg-white/20 rounded-full">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl font-serif">
                {practiceArea.title}
              </h1>
            </div>
            <p className="text-xl text-white/80">
              {practiceArea.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <SectionTitle
                title="Visão Geral"
                className="mb-6"
              />
              <p className="mb-8 text-lg text-neutral-700">
                {practiceArea.description}
              </p>

              <h3 className="mb-4 text-2xl font-bold font-serif text-primary-900">
                Em quais casos você pode precisar deste serviço?
              </h3>
              <ul className="mb-8 space-y-3">
                {practiceArea.causes.map((cause, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 text-primary-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg shadow-md bg-primary-50">
              <h3 className="mb-4 text-xl font-bold font-serif text-primary-900">
                Por que escolher o AMS?
              </h3>
              <ul className="space-y-3">
                {practiceArea.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <Link
                  to="/contato"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md bg-primary-700 hover:bg-primary-800"
                >
                  Fale com um especialista
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Como Funciona"
            subtitle="Etapas do Atendimento Jurídico"
            center={true}
          />

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {practiceArea.steps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-md"
              >
                <div className="absolute flex items-center justify-center w-10 h-10 text-white rounded-full -top-5 -left-5 bg-primary-600">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-bold font-serif text-primary-900">{step.title}</h3>
                <p className="text-neutral-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            title="Perguntas Frequentes"
            subtitle="Dúvidas comuns sobre este serviço"
            center={true}
          />

          <div className="max-w-3xl mx-auto mt-12">
            {practiceArea.faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 mb-4 transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-primary-900">{faq.question}</h3>
                <p className="text-neutral-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Fale com nossa equipe jurídica"
              subtitle="Está com dúvidas ou precisa de uma orientação especializada? Entre em contato conosco."
              center={true}
            />

            <div className="p-8 bg-white rounded-lg shadow-md">
              <ContactForm includeSubject={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreaDetailPage;