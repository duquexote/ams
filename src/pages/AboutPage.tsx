import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
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
              O AMS Advogados nasceu da união de três profissionais que compartilham a mesma paixão pela advocacia e um propósito comum: proteger e fortalecer os direitos de quem cuida da saúde das pessoas e também de quem precisa dela. 

              <br/><br/>Fundado por Matheus Athayde, Lucas Macedo e Gabriela Sady, o escritório consolida uma trajetória que se iniciou muito antes da formação da sociedade. Após anos de atuação conjunta em grandes demandas de Direito Médico e da Saúde, os sócios decidiram formalizar a parceria e construir um escritório que refletisse os valores, a técnica e o compromisso que sempre os nortearam individualmente.

              <br/><br/>Mais do que um escritório, o AMS é um projeto que combina excelência técnica, atuação ética e acolhimento genuíno — valores que norteiam cada atendimento, cada petição e cada orientação jurídica prestada. Nossa atuação está voltada à defesa de profissionais da saúde, instituições de saúde e beneficiários de planos de saúde, em todo o Brasil.

              <br/><br/>Com sede em Salvador/BA e atendimento digital para todas as regiões, o AMS Advogados se destaca pela atuação altamente especializada, com equipe qualificada, atualizada e comprometida com resultados concretos.

              <br/><br/>Valorizamos o estudo constante, o pensamento estratégico e a construção de uma relação de confiança com nossos clientes. Não oferecemos fórmulas prontas: cada caso é tratado de forma individual, com escuta ativa, planejamento rigoroso e comunicação clara. Sabemos que, por trás de cada demanda, há uma pessoa, uma família ou um profissional que precisa de amparo jurídico e, acima de tudo, respeito.
              <br/><br/>Nossa atuação é marcada por três pilares:
              <ul className="space-y-2 text-neutral-700">
                <li>• Proteção dos beneficiários de planos de saúde, garantindo acesso ao tratamento médico adequado e à preservação de seus direitos contratuais</li>
                <li>• Defesa técnica e combativa dos profissionais da saúde, em todas as esferas: judicial, ética, administrativa e consultiva</li>
                <li>• Consultoria jurídica estratégica para empresas da área da saúde, promovendo segurança jurídica e prevenindo litígios.</li>
              </ul>
              </p>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-100 rounded-lg z-0"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary-100 rounded-lg z-0"></div>
              <img
                src="/equipe.jpg"
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
          
          <div className="mt-12">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-lg overflow-hidden shadow-xl"
              style={{ height: '500px' }}
            >
              {Array.from({ length: 11 }, (_, i) => i + 1).map((num) => (
                <SwiperSlide key={num}>
                  <img 
                    src={`/estrutura/estrutura-${num}.jpg`} 
                    alt={`Estrutura do escritório ${num}`} 
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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