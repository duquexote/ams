import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl font-serif">
              Quem Somos
            </h1>
            <p className="text-xl text-white/80">
              Conheça nossa história, valores e compromisso com a excelência jurídica na área da saúde.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionTitle
                title="Nossa História"
                subtitle="Fundado por profissionais apaixonados pelo Direito e comprometidos com a defesa da saúde."
                center={false}
              />
              <p className="mb-6 text-lg text-neutral-700">
                O AMS surgiu da necessidade de representar com excelência médicos, clínicas, 
                hospitais e pacientes em suas demandas mais complexas. Atuamos com ética, 
                técnica e senso de urgência, sempre buscando as melhores soluções para 
                nossos clientes.
              </p>
              <p className="text-lg text-neutral-700">
                Nossa trajetória é marcada por casos desafiadores e resultados expressivos, 
                que nos consolidaram como referência em Direito Médico e da Saúde na região.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-100 rounded-lg z-0"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary-100 rounded-lg z-0"></div>
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Escritório AMS Advogados"
                className="relative z-10 w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Nossos Valores"
            subtitle="Princípios que norteiam nossa atuação e relacionamento com clientes"
            center={true}
          />

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold font-serif text-primary-900">Missão</h3>
              <p className="text-neutral-700">
                Promover a defesa de profissionais da saúde, assegurando a integridade 
                ética e oferecendo assessoria jurídica especializada.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold font-serif text-primary-900">Visão</h3>
              <p className="text-neutral-700">
                Ser a maior referência em Direito Médico e da Saúde do Norte/Nordeste, 
                reconhecidos pela excelência e inovação em nossos serviços.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl font-bold font-serif text-primary-900">Valores</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Ética e transparência</li>
                <li>• Excelência técnica</li>
                <li>• Atendimento humanizado</li>
                <li>• Compromisso com resultados</li>
                <li>• Inovação constante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            title="Nossa Estrutura"
            subtitle="Um espaço moderno, acolhedor e funcional para melhor atender nossos clientes"
            center={true}
          />

          <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Recepção"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-primary-900">Recepção</h4>
                <p className="text-neutral-700">Ambiente acolhedor para receber nossos clientes</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Sala de Reuniões"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-primary-900">Sala de Reuniões</h4>
                <p className="text-neutral-700">Espaço para atendimentos e reuniões privativas</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Área de Trabalho"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-primary-900">Área de Trabalho</h4>
                <p className="text-neutral-700">Ambiente integrado para nossa equipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Entre em Contato"
              subtitle="Agende uma consulta ou tire suas dúvidas com nossa equipe"
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

export default AboutPage;