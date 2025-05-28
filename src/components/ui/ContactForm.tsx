import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}

interface ContactFormProps {
  includeSubject?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ includeSubject = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real implementation, this would send data to a backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1 text-sm font-medium text-neutral-700">
          Nome completo *
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 ${
            errors.name ? 'border-error-500' : 'border-neutral-300'
          }`}
          placeholder="Seu nome"
          {...register('name', { required: 'Nome é obrigatório' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-neutral-700">
          E-mail *
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 ${
            errors.email ? 'border-error-500' : 'border-neutral-300'
          }`}
          placeholder="seu.email@exemplo.com"
          {...register('email', {
            required: 'E-mail é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Endereço de e-mail inválido',
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block mb-1 text-sm font-medium text-neutral-700">
          Telefone *
        </label>
        <input
          id="phone"
          type="tel"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 ${
            errors.phone ? 'border-error-500' : 'border-neutral-300'
          }`}
          placeholder="(00) 00000-0000"
          {...register('phone', { required: 'Telefone é obrigatório' })}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error-600">{errors.phone.message}</p>
        )}
      </div>

      {includeSubject && (
        <div>
          <label htmlFor="subject" className="block mb-1 text-sm font-medium text-neutral-700">
            Assunto
          </label>
          <input
            id="subject"
            type="text"
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
            placeholder="Assunto da mensagem"
            {...register('subject')}
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block mb-1 text-sm font-medium text-neutral-700">
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 ${
            errors.message ? 'border-error-500' : 'border-neutral-300'
          }`}
          placeholder="Como podemos ajudar?"
          {...register('message', { required: 'Mensagem é obrigatória' })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-error-600">{errors.message.message}</p>
        )}
      </div>

      {submitSuccess && (
        <div className="p-3 bg-success-100 text-success-800 rounded-md">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {submitError && (
        <div className="p-3 bg-error-100 text-error-800 rounded-md">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
};

export default ContactForm;