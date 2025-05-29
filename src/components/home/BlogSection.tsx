import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { getFeaturedArticles } from '../../data/blogArticles';

const BlogSection: React.FC = () => {
  const featuredArticles = getFeaturedArticles();
  
  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container">
        <SectionTitle
          title="Conteúdos para quem vive o Direito da Saúde"
          subtitle="Acompanhe nossos artigos, atualizações jurídicas, decisões recentes e conteúdos práticos. São mais de 2.000 textos exclusivos."
          center={true}
        />

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 space-x-2">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-neutral-500">{article.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold font-serif text-primary-900">
                  {article.title}
                </h3>
                <p className="mb-4 text-neutral-700">{article.excerpt}</p>
                <Link
                  to={`/blog/${article.slug}`}
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