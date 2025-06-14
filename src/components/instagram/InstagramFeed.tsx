import React, { useState, useEffect, useCallback } from 'react';
import { fetchInstagramPosts, checkForNewPosts } from '../../services/instagramService';
import { InstagramPost } from '../../types/instagram';

interface InstagramFeedProps {
  username?: string;
  count?: number;
  refreshInterval?: number; // em milissegundos
  layout?: 'grid' | 'masonry'; // tipo de layout
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({
  username = 'ams.advogados',
  count = 9,
  refreshInterval = 60000 * 5, // 5 minutos por padrão
  layout = 'grid'
}) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNewPosts, setHasNewPosts] = useState(false);
  const [newPostsCount, setNewPostsCount] = useState(0);

  // Função para carregar as publicações
  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedPosts = await fetchInstagramPosts(username, count);
      setPosts(fetchedPosts);
      setHasNewPosts(false);
      setNewPostsCount(0);
      setError(null);
    } catch (err) {
      setError('Não foi possível carregar as publicações do Instagram.');
      console.error('Erro ao carregar publicações do Instagram:', err);
    } finally {
      setLoading(false);
    }
  }, [username, count]);

  // Função para verificar novas publicações
  const checkNewPosts = useCallback(async () => {
    if (posts.length === 0) return;
    
    try {
      const lastPostId = posts[0]?.id || null;
      const { hasNewPosts: newPostsAvailable, newPostsCount } = 
        await checkForNewPosts(username, lastPostId);
      
      if (newPostsAvailable) {
        setHasNewPosts(true);
        setNewPostsCount(newPostsCount);
      }
    } catch (err) {
      console.error('Erro ao verificar novas publicações:', err);
    }
  }, [posts, username]);

  // Carregar publicações inicialmente
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  // Configurar verificação periódica de novas publicações
  useEffect(() => {
    const intervalId = setInterval(checkNewPosts, refreshInterval);
    
    // Limpar intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [checkNewPosts, refreshInterval]);

  // Formatação da data
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(date);
    } catch (e) {
      return 'Data indisponível';
    }
  };

  // Truncar texto da legenda
  const truncateCaption = (caption: string, maxLength: number = 60): string => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + '...';
  };

  return (
    <div className="instagram-feed">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          Instagram <span className="text-primary-900">@{username}</span>
        </h2>
        
        {hasNewPosts && (
          <button 
            onClick={loadPosts}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {newPostsCount > 1 
              ? `${newPostsCount} novas publicações` 
              : 'Nova publicação disponível'}
          </button>
        )}
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
          {error}
          <button 
            onClick={loadPosts}
            className="ml-4 underline text-primary-900 hover:text-primary-800"
          >
            Tentar novamente
          </button>
        </div>
      )}

      <div className={`grid grid-cols-1 ${layout === 'grid' ? 'sm:grid-cols-2 md:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3'} gap-4`}>
        {posts.map((post) => (
          <a 
            key={post.id} 
            href={post.permalink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-post block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative pb-[100%] bg-gray-100">
              <img 
                src={post.mediaUrl} 
                alt={post.caption || 'Publicação do Instagram'} 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback para imagem de erro
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Imagem+não+disponível';
                }}
              />
              <div className="absolute top-0 right-0 m-2 p-1 bg-white bg-opacity-70 rounded-full">
                <svg className="w-4 h-4" fill="#E1306C" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
            <div className="p-3 bg-white">
              <p className="text-sm text-gray-500 mb-1">{formatDate(post.timestamp)}</p>
              {post.caption && (
                <p className="text-sm text-gray-700 line-clamp-2">
                  {truncateCaption(post.caption)}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>

      {!loading && posts.length === 0 && !error && (
        <div className="text-center py-12">
          <p className="text-gray-500">Nenhuma publicação encontrada.</p>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
