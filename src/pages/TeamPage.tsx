import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const teamMembers = [
  {
    name: 'Matheus Athayde',
    role: 'Sócio Fundador',
    image: '/matheus.jpg',
    description: 'Advogado especialista em Direito Médico e da Saúde e em Advocacia Cível, além de possuir cursos de extensão em Saúde Suplementar, com atuação profissional há mais de 11 anos. Membro da Comissão Especial de Direito Médico e da Saúde da OAB/BA. Autor de artigos e palestrante.',
  },
  {
    name: 'Gabriela Sady',
    role: 'Sócia Fundadora',
    image: '/gabriela.jpg',
    description: 'Advogada especializada em Direito Médico e da Saúde, com mais de 10 anos de experiência. Pós-graduada em Direito Médico e Hospitalar e em Direito Público. Professora do curso de Pós Graduação em Direito Médico e da Saúde do CERS. Defensora Dativa do CREMEB. Secretária-Geral da Comissão Especial de Direito Médico e da Saúde da OAB/BA. Autora de artigos científicos e capítulos de livros publicados. Organizadora e autora das obras "Diálogos consensuais em Direito Médico" e "Estudo de Casos em Direito Médico e da Saúde". Coordenadora de Grupos de Pesquisa na área de Direito Médico e da Saúde.',
  },
  {
    name: 'Lucas Macedo',
    role: 'Sócio Fundador',
    image: '/lucas.jpg',
    description: 'Advogado especialista em Direito da Medicina pela Universidade de Coimbra. Pós-graduado em Direito Público pela Faculdade Baiana de Direito. Bacharel em Direito pela Universidade Salvador. Organizador e coautor das obras “Advocacia Consensual em Direito Médico” e “Estudos de Casos em Direito Médico e da Saúde”. Autor de artigos científicos e capítulos de livros na área de Direito Médico e da Saúde. Conselheiro Seccional da Ordem dos Advogados do Brasil – Seccional Bahia (2022-2024). Foi Secretário-Geral da Comissão Especial de Direito Médico e da Saúde da Ordem dos Advogados do Brasil – Seccional Bahia (2022-2024). Presidente da Comissão Especial de Direito Médico da Ordem dos Advogados do Brasil – Seccional Bahia (2025-). Defensor dativo do Conselho Regional de Medicina do Estado da Bahia – CREMEB (2020-2024). Assessor jurídico do Conselho Regional de Medicina do Estado da Bahia – CREMEB (2024-).',
  },
  {
    name: 'Ayala Silva Faria',
    role: 'Advogada Associada',
    image: '/ayala.jpg',
    description: 'Advogada com atuação em Direito Médico e da Saúde. Pós-graduanda em Direito Médico e da Saúde e em Direito Civil e Processual Civil. Membro da Comissão Especial de Direito Médico da OAB/BA.',
  },
  {
    name: 'Maria Alice Lyra Firmino',
    role: 'Advogada Associada',
    image: '/alice.jpg',
    description: 'Advogada com atuação em Direito Médico e da Saúde. Pós-graduanda em Direito Médico, da Saúde e Bioética pela Faculdade Baiana de Direito. Membro da Comissão Especial de Direito Médico da OAB/BA.',
  },
  {
    name: 'Flávia Oliveira',
    role: 'Advogada Associada',
    image: '/flavia.jpg',
    description: 'Advogada com atuação nas áreas de Direito Criminal e Direito Médico e da Saúde. Pós-graduanda em Direito Médico e da Saúde, Direito Penal e Processual Penal. Membro da Comissão Especial de Direito Médico e da Saúde da OAB/BA.',
  },
  {
    name: 'Keila Catarine',
    role: 'Coordenadora de Marketing Digital',
    image: '/keila.JPG',
    description: 'Responsável pela comunicação institucional e estratégias digitais do AMS Advogados, com foco em posicionamento de autoridade no segmento de Direito Médico e da Saúde.',
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
              title="Equipe"
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