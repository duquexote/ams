import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sbnibtamfrsriihxwyfr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNibmlidGFtZnJzcmlpaHh3eWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NDU5OTMsImV4cCI6MjA2NDIyMTk5M30.nGku34RuwpsOb9DyU_Hvja9KDgUeXvD-ba53QDOfFfk';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Nota: Os buckets 'articles' e 'team' foram criados diretamente no Supabase
// com as políticas de acesso adequadas para permitir uploads e leitura pública

// Interface para artigos
export interface SupabaseArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  published_at: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  featured: boolean;
  created_at?: string;
  updated_at?: string;
}

// Interface para membros da equipe
export interface SupabaseTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  is_partner: boolean;
  created_at?: string;
  updated_at?: string;
}

// Funções para gerenciar artigos
export const articlesService = {
  getAll: async (): Promise<SupabaseArticle[]> => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false });
    
    if (error) {
      console.error('Erro ao buscar artigos:', error);
      return [];
    }
    
    return data as SupabaseArticle[];
  },
  
  getPaginated: async (offset: number, limit: number): Promise<SupabaseArticle[]> => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1);
    
    if (error) {
      console.error('Erro ao buscar artigos paginados:', error);
      return [];
    }
    
    return data as SupabaseArticle[];
  },
  
  // Obter artigo por ID
  async getById(id: string) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error(`Erro ao buscar artigo com ID ${id}:`, error);
      return null;
    }
    
    return data as SupabaseArticle;
  },
  
  // Obter artigo por slug
  async getBySlug(slug: string) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) {
      console.error(`Erro ao buscar artigo com slug ${slug}:`, error);
      return null;
    }
    
    return data as SupabaseArticle;
  },
  
  // Obter artigos por categoria
  async getByCategory(category: string): Promise<SupabaseArticle[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .order('published_at', { ascending: false });
    
    if (error) {
      console.error(`Erro ao buscar artigos da categoria ${category}:`, error);
      return [];
    }
    
    return data as SupabaseArticle[];
  },
  
  // Obter artigos em destaque
  async getFeatured(): Promise<SupabaseArticle[]> {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(3);
    
    if (error) {
      console.error('Erro ao buscar artigos em destaque:', error);
      return [];
    }
    
    return data as SupabaseArticle[];
  },
  
  // Criar um novo artigo
  async create(article: Omit<SupabaseArticle, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('articles')
      .insert([article])
      .select();
    
    if (error) {
      console.error('Erro ao criar artigo:', error);
      return null;
    }
    
    return data[0] as SupabaseArticle;
  },
  
  // Atualizar um artigo existente
  async update(id: string, article: Partial<SupabaseArticle>) {
    const { data, error } = await supabase
      .from('articles')
      .update(article)
      .eq('id', id)
      .select();
    
    if (error) {
      console.error(`Erro ao atualizar artigo com ID ${id}:`, error);
      return null;
    }
    
    return data[0] as SupabaseArticle;
  },
  
  // Excluir um artigo
  async delete(id: string) {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error(`Erro ao excluir artigo com ID ${id}:`, error);
      return false;
    }
    
    return true;
  },
  
  // Upload de imagem para o artigo
  async uploadImage(file: File) {
    const bucketName = 'articles';
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `${fileName}`;
    
    // Fazer upload diretamente para o bucket 'articles'
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);
    
    if (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      return null;
    }
    
    const { data } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);
    
    return data.publicUrl;
  }
};

// Funções para gerenciar membros da equipe
export const teamMembersService = {
  // Obter todos os membros da equipe
  async getAll() {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Erro ao buscar membros da equipe:', error);
      return [];
    }
    
    return data as SupabaseTeamMember[];
  },
  
  // Obter membros da equipe que não são sócios
  async getNonPartners() {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('is_partner', false)
      .order('name');
    
    if (error) {
      console.error('Erro ao buscar membros da equipe:', error);
      return [];
    }
    
    return data as SupabaseTeamMember[];
  },
  
  // Obter membros da equipe que são sócios
  async getPartners() {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('is_partner', true)
      .order('name');
    
    if (error) {
      console.error('Erro ao buscar sócios:', error);
      return [];
    }
    
    return data as SupabaseTeamMember[];
  },
  
  // Este método foi removido por ser duplicado
  
  // Obter membro da equipe por ID
  async getById(id: string) {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error(`Erro ao buscar membro da equipe com ID ${id}:`, error);
      return null;
    }
    
    return data as SupabaseTeamMember;
  },
  
  // Criar um novo membro da equipe
  async create(member: Omit<SupabaseTeamMember, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('team_members')
      .insert([member])
      .select();
    
    if (error) {
      console.error('Erro ao criar membro da equipe:', error);
      return null;
    }
    
    return data[0] as SupabaseTeamMember;
  },
  
  // Atualizar um membro da equipe existente
  async update(id: string, member: Partial<SupabaseTeamMember>) {
    const { data, error } = await supabase
      .from('team_members')
      .update(member)
      .eq('id', id)
      .select();
    
    if (error) {
      console.error(`Erro ao atualizar membro da equipe com ID ${id}:`, error);
      return null;
    }
    
    return data[0] as SupabaseTeamMember;
  },
  
  // Excluir um membro da equipe
  async delete(id: string) {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error(`Erro ao excluir membro da equipe com ID ${id}:`, error);
      return false;
    }
    
    return true;
  },
  
  // Upload de imagem para o membro da equipe
  async uploadImage(file: File) {
    const bucketName = 'team';
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    const filePath = `${fileName}`;
    
    // Fazer upload diretamente para o bucket 'team'
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);
    
    if (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      return null;
    }
    
    const { data } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);
    
    return data.publicUrl;
  }
};
