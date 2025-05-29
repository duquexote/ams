import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const teamMembers = [
  {
    name: 'Matheus Athayde',
    role: 'Sócio Fundador',
    image: '/matheus.jpg',
    description: 'Advogado especializado em Direito Médico e da Saúde e em Advocacia Cível, além de possuir cursos de extensão em Saúde Suplementar, com atuação profissional há mais de 10 anos. Também é membro da Comissão Especial de Direito Médico e da Saúde da OAB/BA, autor de artigos e palestrante. Foi membro do Grupo de Pesquisa "Estudos de Casos em Direito Médico e da Saúde" da OAB/BA e coautor de obra que foi publicada a partir desses estudos.',
  },
  {
    name: 'Gabriela Sady',
    role: 'Sócia Fundadora',
    image: '/gabriela.jpg',
    description: 'Advogada especializada em Direito Médico e da Saúde, com mais de 9 anos de experiência. Pós-graduada em Direito Médico e Hospitalar e em Direito Público. Professora do curso de Pós-Graduação em Direito Médico e da Saúde do CERS. Defensora Dativa do CREMEB. Membro da Comissão Especial de Direito Médico e da Saúde da OAB/BA. Autora de artigos científicos e capítulos de livros publicados. Organizadora e autora das obras "Diálogos consensuais em Direito Médico" e "Estudo de Casos em Direito Médico e da Saúde". Coordenadora de Grupos de Pesquisa na área de Direito Médico e da Saúde.',
  },
  {
    name: 'Lucas Macedo',
    role: 'Sócio Fundador',
    image: '/lucas.jpg',
    description: 'Advogado com 10 anos de atuação especializada em Direito Médico e da Saúde. Pós-graduado em Direito Público, em Direito Processual Civil e em Direito Médico e da Saúde. Conselheiro Seccional da OAB/Bahia. Secretário Geral da Comissão Especial de Direito Médico e da Saúde da OAB/BA. Autor de artigos científicos e capítulos de livros publicados. Organizador e autor das obras “Diálogos consensuais em Direito Médico” e “Estudo de Casos em Direito Médico e da Saúde”. Coordenador de Grupos de Pesquisa na área de Direito Médico e da Saúde.',
  },
  {
    name: 'Ayala Faria',
    role: 'Advogada Associada',
    image: '/ayala.jpg',
    description: 'Especialista em processos ético-profissionais e defesa administrativa junto aos Conselhos de Classe.',
  },
  {
    name: 'Alice Firmino',
    role: 'Advogada Associada',
    image: '/alice.jpg',
    description: 'Especializada em Direito da Saúde Suplementar e relações com operadoras de planos de saúde.',
  },
  {
    name: 'Flavia Oliveira',
    role: 'Advogada Associada',
    image: '/flavia.jpg',
    description: 'Especializada em Direito da Saúde Suplementar e relações com operadoras de planos de saúde.',
  },
];

const TeamPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          {/* <img
            src=""
            alt="Background"
            className="object-cover w-full h-full"
          /> */}
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
            subtitleAlign="left"
          />

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            {teamMembers.slice(0, 3).map((member, index) => (
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
              subtitleAlign="left"
            />

            <div className="grid gap-8 mt-12 md:grid-cols-2">
              {teamMembers.slice(3).map((member, index) => (
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