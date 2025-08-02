import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SupabaseTeamMember, teamMembersService } from '../../services/supabase';

interface TeamMemberFormProps {
  member?: SupabaseTeamMember;
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({ member, onSubmit, onCancel }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(member?.image || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: member?.name || '',
      role: member?.role || '',
      description: member?.description || '',
      is_partner: member?.is_partner || false
    }
  });
  
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
      
      // Processar imagem se houver uma nova
      let imageUrl = member?.image || '';
      if (imageFile) {
        const uploadedUrl = await teamMembersService.uploadImage(imageFile);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        } else {
          throw new Error('Falha ao fazer upload da imagem');
        }
      }
      
      // Preparar dados para envio
      const memberData = {
        ...data,
        image: imageUrl
      };
      
      await onSubmit(memberData);
    } catch (error) {
      console.error('Erro ao salvar membro da equipe:', error);
      alert('Ocorreu um erro ao salvar o membro da equipe. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(processSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-700">
          Nome
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Nome é obrigatório' })}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="role" className="block mb-2 text-sm font-medium text-neutral-700">
          Cargo
        </label>
        <input
          type="text"
          id="role"
          {...register('role', { required: 'Cargo é obrigatório' })}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.role && (
          <p className="mt-1 text-sm text-red-600">{errors.role.message as string}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-neutral-700">
          Descrição
        </label>
        <textarea
          id="description"
          rows={5}
          {...register('description', { required: 'Descrição é obrigatória' })}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message as string}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="image" className="block mb-2 text-sm font-medium text-neutral-700">
          Foto
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
          id="is_partner"
          {...register('is_partner')}
          className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
        />
        <label htmlFor="is_partner" className="ml-2 text-sm font-medium text-neutral-700">
          É sócio
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
          {isSubmitting ? 'Salvando...' : member ? 'Atualizar' : 'Criar'}
        </button>
      </div>
    </form>
  );
};

export default TeamMemberForm;
