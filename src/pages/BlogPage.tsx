import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPaginatedArticles } from '../data/blogArticles';
import { BlogArticle } from '../types/blog';
import SectionTitle from '../components/ui/SectionTitle';

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = () => {
      setLoading(true);
      const { articles: fetchedArticles, totalPages: pages } = getPaginatedArticles(currentPage, 9);
      setArticles(fetchedArticles);
      setTotalPages(pages);
      setLoading(false);
    };

    fetchArticles();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          {/* Background image */}
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl font-serif">
              Blog
            </h1>
            <p className="text-xl text-white/80">
              Conteúdos exclusivos sobre Direito Médico e da Saúde para profissionais e instituições.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle
            title="Artigos Recentes"
            subtitle="Acompanhe nossos artigos, atualizações jurídicas e conteúdos práticos."
            center={true}
          />

          {loading ? (
            <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-6 bg-white rounded-b-lg shadow-md">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <nav className="inline-flex rounded-md shadow">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Anterior
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 text-sm font-medium border ${currentPage === page
                          ? 'bg-primary-700 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                          } ${page === 1 ? '' : 'border-l-0'} ${page === totalPages ? 'rounded-r-md' : ''}`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Próxima
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold font-serif text-primary-900">
              Precisa de orientação jurídica especializada?
            </h2>
            <p className="mb-8 text-lg text-neutral-700">
              Entre em contato com nossa equipe para uma análise personalizada do seu caso.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
