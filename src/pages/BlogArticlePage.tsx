import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../data/blogArticles';
import { BlogArticle } from '../types/blog';

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundArticle = getArticleBySlug(slug);
      if (foundArticle) {
        setArticle(foundArticle);
        setRelatedArticles(getRelatedArticles(foundArticle.id, 3));
      }
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Link to="/blog" className="btn btn-primary">
            Voltar para o Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src={article.image}
            alt={article.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4 space-x-3">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary-500 text-white">
                {article.category}
              </span>
              <span className="text-sm text-white/80">{article.date}</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl font-serif">
              {article.title}
            </h1>
            <p className="text-xl text-white/80">
              {article.excerpt}
            </p>
            <div className="flex items-center mt-6">
              <div className="mr-4">
                <div className="w-12 h-12 overflow-hidden rounded-full bg-primary-700">
                  {/* Placeholder para foto do autor */}
                </div>
              </div>
              <div>
                <p className="font-medium text-white">{article.author}</p>
                <p className="text-sm text-white/70">Advogado Especialista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </article>

              <div className="flex flex-wrap gap-2 mt-8">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-neutral-100 text-neutral-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="p-6 mt-12 border-t border-b border-neutral-200">
                <h3 className="mb-4 text-xl font-bold">Compartilhe este artigo</h3>
                <div className="flex space-x-4">
                  <button className="p-2 text-white rounded-full bg-blue-600 hover:bg-blue-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="p-2 text-white rounded-full bg-blue-400 hover:bg-blue-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="p-2 text-white rounded-full bg-green-600 hover:bg-green-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button className="p-2 text-white rounded-full bg-green-500 hover:bg-green-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="p-6 mb-8 bg-neutral-50 rounded-lg">
                  <h3 className="mb-4 text-xl font-bold font-serif text-primary-900">
                    Artigos Relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((relatedArticle, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-20 h-20 mr-4 overflow-hidden rounded-md flex-shrink-0">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h4 className="mb-1 font-medium text-primary-900">
                            <Link to={`/blog/${relatedArticle.slug}`} className="hover:underline">
                              {relatedArticle.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-neutral-500">{relatedArticle.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-primary-900 rounded-lg">
                  <h3 className="mb-4 text-xl font-bold font-serif text-white">
                    Precisa de Orientação Jurídica?
                  </h3>
                  <p className="mb-6 text-white/80">
                    Entre em contato com nossa equipe para uma análise personalizada do seu caso.
                  </p>
                  <Link
                    to="/contato"
                    className="w-full btn btn-primary bg-white text-primary-900 hover:bg-neutral-100"
                  >
                    Agendar Consulta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticlePage;
