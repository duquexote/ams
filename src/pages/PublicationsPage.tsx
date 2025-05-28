import React from 'react';

const PublicationsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Publicações</h1>
      <div className="max-w-4xl mx-auto">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/4 bg-gray-200 h-48 rounded-md"></div>
              <div className="w-full md:w-3/4">
                <h2 className="text-2xl font-semibold mb-2">Publicação #{item}</h2>
                <p className="text-sm text-gray-500 mb-4">Publicado em: 15 de Abril, 2025</p>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Download PDF
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                    Ler online
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;
