import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const teamMembers = [
  {
    name: 'Dr. Alexandre M. Silva',
    role: 'Sócio Fundador',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Especialista em Direito Médico com mais de 15 anos de experiência na defesa de profissionais da saúde.',
  },
  {
    name: 'Dra. Maria Santos',
    role: 'Sócia Fundadora',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Mestre em Direito da Saúde e referência em casos complexos envolvendo responsabilidade civil médica.',
  },
  {
    name: 'Dr. Pedro Almeida',
    role: 'Advogado Associado',
    image: 'https://images.pexels.com/photos/8422128/pexels-photo-8422128.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Especialista em processos ético-profissionais e defesa administrativa junto aos Conselhos de Classe.',
  },
  {
    name: 'Dra. Ana Beatriz Costa',
    role: 'Advogada Associada',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Especializada em Direito da Saúde Suplementar e relações com operadoras de planos de saúde.',
  },
];

const TeamPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl font-serif">
              Nossa Equipe
            </h1>
            <p className="text-xl text-white/80">
              Conheça os profissionais dedicados que fazem do AMS Advogados
              uma referência em Direito Médico e da Saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white sm:py-24">
        <div className="container">
          <SectionTitle
            title="Sócios Fundadores"
            subtitle="Liderança com experiência e comprometimento com a excelência jurídica."
          />

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold font-serif text-primary-900">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-lg font-medium text-primary-700">
                    {member.role}
                  </p>
                  <p className="text-neutral-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <SectionTitle
              title="Advogados Associados"
              subtitle="Profissionais especializados que compõem nossa equipe jurídica."
            />

            <div className="grid gap-8 mt-12 md:grid-cols-2">
              {teamMembers.slice(2).map((member, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-white rounded-lg shadow-md"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold font-serif text-primary-900">
                      {member.name}
                    </h3>
                    <p className="mb-3 text-lg font-medium text-primary-700">
                      {member.role}
                    </p>
                    <p className="text-neutral-700">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-neutral-50 sm:py-24">
        <div className="container">
          <SectionTitle
            title="Nossos Valores"
            subtitle="Princípios que norteiam nossa atuação e relacionamento com clientes."
            center={true}
          />

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold font-serif text-primary-900">
                Excelência Técnica
              </h3>
              <p className="text-neutral-700">
                Comprometimento com a qualidade e atualização constante do conhecimento jurídico.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold font-serif text-primary-900">
                Ética Profissional
              </h3>
              <p className="text-neutral-700">
                Atuação pautada na transparência, honestidade e respeito aos princípios éticos.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold font-serif text-primary-900">
                Atendimento Humanizado
              </h3>
              <p className="text-neutral-700">
                Compreensão das necessidades individuais e acolhimento em momentos difíceis.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold font-serif text-primary-900">
                Resultados Efetivos
              </h3>
              <p className="text-neutral-700">
                Foco em soluções práticas e estratégicas para cada caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white sm:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Entre em Contato"
              subtitle="Agende uma reunião com nossa equipe para discutir seu caso."
              center={true}
            />

            <div className="p-8 bg-neutral-50 rounded-lg shadow-md">
              <ContactForm includeSubject={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;