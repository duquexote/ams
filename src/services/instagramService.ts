import { InstagramPost } from '../types/instagram';

// Configuração para o Instagram
// O nome de usuário padrão é definido diretamente nas funções para evitar variáveis não utilizadas

// Cache local para armazenar as publicações e reduzir requisições
interface CacheItem {
  posts: InstagramPost[];
  timestamp: number;
  lastId: string | null;
}

const cache: Record<string, CacheItem> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos em milissegundos

/**
 * Função para buscar as publicações do Instagram
 * 
 * Esta função retorna dados simulados para representar publicações do Instagram
 * já que não temos acesso à API oficial do Instagram sem um token de acesso
 */
export async function fetchInstagramPosts(username: string = 'ams.advogados', count: number = 9): Promise<InstagramPost[]> {
  try {
    // Verificar cache primeiro
    const now = Date.now();
    if (cache[username] && (now - cache[username].timestamp) < CACHE_DURATION) {
      return cache[username].posts.slice(0, count);
    }
    
    // Gerar dados simulados para representar publicações do Instagram
    const mockPosts = generateMockPosts(count, username);
    
    // Armazenar os dados simulados no cache
    cache[username] = {
      posts: mockPosts,
      timestamp: now,
      lastId: mockPosts.length > 0 ? mockPosts[0].id : null
    };
    
    return mockPosts;
  } catch (error) {
    console.error('Erro ao gerar publicações simuladas do Instagram:', error);
    return [];
  }
}

/**
 * Função para gerar posts simulados do Instagram
 * Usada para simular publicações do Instagram do escritório
 */
function generateMockPosts(count: number, username: string = 'ams.advogados'): InstagramPost[] {
  const currentDate = new Date();
  
  // Temas relacionados a direito médico e da saúde
  const topics = [
    'direito médico',
    'direito da saúde',
    'advocacia',
    'planos de saúde',
    'defesa médica',
    'conselho de medicina',
    'responsabilidade civil médica'
  ];
  
  // Captions mais realistas para um escritório de advocacia
  const captions = [
    'Conheça nossos serviços especializados em Direito Médico e da Saúde. Entre em contato para uma consulta!',
    'Defendemos profissionais da saúde em processos éticos, administrativos e judiciais. Conte com nossa experiência!',
    'Garantimos os direitos dos beneficiários de planos de saúde. Saiba como podemos ajudar você.',
    'Participamos hoje de um evento importante sobre Direito Médico. Sempre em busca de atualização para melhor atender nossos clientes.',
    'Conheça nossa equipe especializada em Direito Médico e da Saúde. Profissionais dedicados à sua causa!',
    'Entenda seus direitos como beneficiário de plano de saúde. Consulte-nos!',
    'Assessoria jurídica completa para profissionais e instituições de saúde. Previna litígios com nossa consultoria especializada.',
    'Novidades na legislação de planos de saúde. Fique por dentro!',
    'Defesa ética e técnica para profissionais da saúde. Conte com o AMS Advogados.',
  ];
  
  // Hashtags comuns para um escritório de advocacia especializado em direito médico
  const hashtags = '#direitomédico #direitodasaúde #advocacia #amsadvogados #planosdesaúde #defesamédica';
  
  return Array.from({ length: count }, (_, i) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - i);
    
    // Escolhe um tema e uma caption aleatória
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const caption = captions[Math.floor(Math.random() * captions.length)];
    
    return {
      id: `post-${i + 1}-${Date.now()}`,
      mediaUrl: `https://source.unsplash.com/random/600x600?${topic.replace(' ', ',')}&sig=${i}`,
      permalink: `https://www.instagram.com/${username}/`,
      caption: `${caption} ${hashtags}`,
      timestamp: date.toISOString(),
      thumbnailUrl: `https://source.unsplash.com/random/300x300?${topic.replace(' ', ',')}&sig=${i}`
    };
  });
}

/**
 * Função para verificar se há novas publicações
 * Compara o ID da publicação mais recente com o último ID que temos armazenado
 */
export async function checkForNewPosts(
  username: string = 'ams.advogados',
  lastPostId: string | null = null
): Promise<{ hasNewPosts: boolean; newPostsCount: number }> {
  try {
    // Se não temos um lastPostId, não podemos verificar se há novas publicações
    if (lastPostId === null) {
      return { hasNewPosts: false, newPostsCount: 0 };
    }
    
    // Forçar uma nova busca ignorando o cache
    delete cache[username];
    
    // Buscar as publicações mais recentes
    const recentPosts = await fetchInstagramPosts(username, 10);
    
    if (recentPosts.length === 0) {
      return { hasNewPosts: false, newPostsCount: 0 };
    }
    
    // Verificar quantas publicações novas existem
    let newPostsCount = 0;
    for (const post of recentPosts) {
      if (post.id === lastPostId) break;
      newPostsCount++;
    }
    
    return { 
      hasNewPosts: newPostsCount > 0, 
      newPostsCount 
    };
  } catch (error) {
    console.error('Erro ao verificar novas publicações:', error);
    return { hasNewPosts: false, newPostsCount: 0 };
  }
}
