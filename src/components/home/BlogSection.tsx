import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const blogPosts = [
  {
    title: 'Responsabilidade Civil Médica: O que Precisa Saber',
    excerpt: 'Entenda os principais aspectos legais sobre responsabilidade profissional em casos de alegação de erro médico.',
    date: '10 de Abril, 2025',
    category: 'Direito Médico',
    image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'responsabilidade-civil-medica',
  },
  {
    title: 'LGPD e Prontuários Médicos: Como se Adequar?',
    excerpt: 'Um guia completo sobre como clínicas e hospitais devem tratar os dados dos pacientes conforme a legislação vigente.',
    date: '28 de Março, 2025',
    category: 'LGPD na Saúde',
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'lgpd-prontuarios-medicos',
  },
  {
    title: 'Telemedicina: Aspectos Jurídicos para Profissionais',
    excerpt: 'Conheça os principais pontos de atenção e requisitos legais para atendimentos realizados à distância.',
    date: '15 de Março, 2025',
    category: 'Telemedicina',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'telemedicina-aspectos-juridicos',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container">
        <SectionTitle
          title="Conteúdos para quem vive o Direito da Saúde"
          subtitle="Acompanhe nossos artigos, atualizações jurídicas, decisões recentes e conteúdos práticos. São mais de 2.000 textos exclusivos."
          center={true}
        />

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 space-x-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-500">{post.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold font-serif text-primary-900">
                  {post.title}
                </h3>
                <p className="mb-4 text-neutral-700">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-700 hover:text-primary-800"
                >
                  <span>Ler artigo completo</span>
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
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/blog" className="btn btn-primary">
            Acessar Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;