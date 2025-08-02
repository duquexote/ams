import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SupabaseArticle, articlesService } from '../../services/supabase';

interface ArticleFormProps {
  article?: SupabaseArticle;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ article, onSubmit, onCancel }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(article?.image || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tagsInput, setTagsInput] = useState<string>(article?.tags.join(', ') || '');
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: article?.title || '',
      excerpt: article?.excerpt || '',
      content: article?.content || '',
      date: article?.date || new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
      author: article?.author || '',
      category: article?.category || '',
      featured: article?.featured || false,
    }
  });
  
  // Função para gerar slug a partir do título
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      // Criar preview da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const processSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      
      // Processar tags
      const tags = tagsInput
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '');
      
      // Gerar slug a partir do título
      const slug = article?.slug || generateSlug(data.title);
      
      // Processar imagem se houver uma nova
      let imageUrl = article?.image || '';
      if (imageFile) {
        const uploadedUrl = await articlesService.uploadImage(imageFile);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        } else {
          throw new Error('Falha ao fazer upload da imagem');
        }
      }
      
      // Formatar data de publicação
      const publishedAt = article?.published_at || new Date().toISOString();
      
      // Preparar dados para envio
      const articleData = {
        ...data,
        tags,
        slug,
        image: imageUrl,
        published_at: publishedAt
      };
      
      await onSubmit(articleData);
    } catch (error) {
      console.error('Erro ao salvar artigo:', error);
      alert('Ocorreu um erro ao salvar o artigo. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(processSubmit)} className="space-y-6">
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-neutral-700">
          Título
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: 'Título é obrigatório' })}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message as string}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="excerpt" className="block mb-2 text-sm font-medium text-neutral-700">
          Resumo
        </label>
        <textarea
          id="excerpt"
          rows={3}
          {...register('excerpt', { required: 'Resumo é obrigatório' })}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.excerpt && (
          <p className="mt-1 text-sm text-red-600">{errors.excerpt.message as string}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-neutral-700">
          Conteúdo (HTML)
        </label>
        <textarea
          id="content"
          rows={10}
          {...register('content', { required: 'Conteúdo é obrigatório' })}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm"
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-600">{errors.content.message as string}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block mb-2 text-sm font-medium text-neutral-700">
            Data (formato exibição)
          </label>
          <input
            type="text"
            id="date"
            {...register('date', { required: 'Data é obrigatória' })}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message as string}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="author" className="block mb-2 text-sm font-medium text-neutral-700">
            Autor
          </label>
          <input
            type="text"
            id="author"
            {...register('author', { required: 'Autor é obrigatório' })}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {errors.author && (
            <p className="mt-1 text-sm text-red-600">{errors.author.message as string}</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-neutral-700">
            Categoria
          </label>
          <input
            type="text"
            id="category"
            {...register('category', { required: 'Categoria é obrigatória' })}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category.message as string}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="tags" className="block mb-2 text-sm font-medium text-neutral-700">
            Tags (separadas por vírgula)
          </label>
          <input
            type="text"
            id="tags"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-neutral-700">
          Imagem
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {imagePreview && (
          <div className="mt-2">
            <img src={imagePreview} alt="Preview" className="h-40 object-cover rounded-md" />
          </div>
        )}
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          {...register('featured')}
          className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
        />
        <label htmlFor="featured" className="ml-2 text-sm font-medium text-neutral-700">
          Destacar na página inicial
        </label>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Salvando...' : article ? 'Atualizar' : 'Criar'}
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;
