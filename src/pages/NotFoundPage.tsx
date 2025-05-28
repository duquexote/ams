import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-neutral-50">
      <div className="px-4 py-16 mx-auto text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold text-primary-800 font-serif">404</h1>
        <h2 className="mb-6 text-3xl font-bold text-primary-900">Página não encontrada</h2>
        <p className="mb-8 text-lg text-neutral-700 max-w-md mx-auto">
          A página que você está procurando não existe ou foi removida. Volte para a página inicial para continuar navegando.
        </p>
        <Link to="/" className="btn btn-primary">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;