import React, { useState, useEffect } from 'react';
import LoginForm from '../components/admin/LoginForm';
import ArticleForm from '../components/admin/ArticleForm';
import TeamMemberForm from '../components/admin/TeamMemberForm';
import { articlesService, teamMembersService, SupabaseArticle, SupabaseTeamMember } from '../services/supabase';

enum AdminTab {
  ARTICLES = 'articles',
  TEAM = 'team'
}

enum FormMode {
  NONE = 'none',
  CREATE = 'create',
  EDIT = 'edit'
}

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<AdminTab>(AdminTab.ARTICLES);
  const [formMode, setFormMode] = useState<FormMode>(FormMode.NONE);
  const [articles, setArticles] = useState<SupabaseArticle[]>([]);
  const [teamMembers, setTeamMembers] = useState<SupabaseTeamMember[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<SupabaseArticle | null>(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState<SupabaseTeamMember | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Verificar autenticação ao carregar a página
  useEffect(() => {
    const checkAuth = () => {
      const isAuth = localStorage.getItem('adminAuthenticated') === 'true';
      setIsAuthenticated(isAuth);
      
      if (isAuth) {
        loadData();
      } else {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, []);
  
  // Carregar dados do Supabase
  const loadData = async () => {
    setIsLoading(true);
    
    try {
      if (activeTab === AdminTab.ARTICLES) {
        const articlesData = await articlesService.getAll();
        setArticles(articlesData);
      } else {
        const teamData = await teamMembersService.getAll();
        setTeamMembers(teamData);
      }
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Função para lidar com o login bem-sucedido
  const handleLogin = () => {
    setIsAuthenticated(true);
    loadData();
  };
  
  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };
  
  // Alternar entre as abas
  const handleTabChange = (tab: AdminTab) => {
    setActiveTab(tab);
    setFormMode(FormMode.NONE);
    loadData();
  };
  
  // Funções para gerenciar artigos
  const handleCreateArticle = () => {
    setSelectedArticle(null);
    setFormMode(FormMode.CREATE);
  };
  
  const handleEditArticle = (article: SupabaseArticle) => {
    setSelectedArticle(article);
    setFormMode(FormMode.EDIT);
  };
  
  const handleDeleteArticle = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este artigo?')) {
      try {
        const success = await articlesService.delete(id);
        if (success) {
          setArticles(articles.filter(article => article.id !== id));
        }
      } catch (error) {
        console.error('Erro ao excluir artigo:', error);
      }
    }
  };
  
  const handleArticleSubmit = async (data: any) => {
    try {
      if (formMode === FormMode.CREATE) {
        const newArticle = await articlesService.create(data);
        if (newArticle) {
          setArticles([newArticle, ...articles]);
        }
      } else if (formMode === FormMode.EDIT && selectedArticle) {
        const updatedArticle = await articlesService.update(selectedArticle.id, data);
        if (updatedArticle) {
          setArticles(articles.map(article => 
            article.id === updatedArticle.id ? updatedArticle : article
          ));
        }
      }
      
      setFormMode(FormMode.NONE);
    } catch (error) {
      console.error('Erro ao salvar artigo:', error);
    }
  };
  
  // Funções para gerenciar membros da equipe
  const handleCreateTeamMember = () => {
    setSelectedTeamMember(null);
    setFormMode(FormMode.CREATE);
  };
  
  const handleEditTeamMember = (member: SupabaseTeamMember) => {
    setSelectedTeamMember(member);
    setFormMode(FormMode.EDIT);
  };
  
  const handleDeleteTeamMember = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este membro da equipe?')) {
      try {
        const success = await teamMembersService.delete(id);
        if (success) {
          setTeamMembers(teamMembers.filter(member => member.id !== id));
        }
      } catch (error) {
        console.error('Erro ao excluir membro da equipe:', error);
      }
    }
  };
  
  const handleTeamMemberSubmit = async (data: any) => {
    try {
      if (formMode === FormMode.CREATE) {
        const newMember = await teamMembersService.create(data);
        if (newMember) {
          setTeamMembers([newMember, ...teamMembers]);
        }
      } else if (formMode === FormMode.EDIT && selectedTeamMember) {
        const updatedMember = await teamMembersService.update(selectedTeamMember.id, data);
        if (updatedMember) {
          setTeamMembers(teamMembers.map(member => 
            member.id === updatedMember.id ? updatedMember : member
          ));
        }
      }
      
      setFormMode(FormMode.NONE);
    } catch (error) {
      console.error('Erro ao salvar membro da equipe:', error);
    }
  };
  
  // Cancelar formulário
  const handleCancelForm = () => {
    setFormMode(FormMode.NONE);
  };
  
  // Renderizar página de login se não estiver autenticado
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="container max-w-md mx-auto">
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-primary-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Painel Administrativo</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-primary-700 hover:bg-primary-800 rounded-md"
          >
            Sair
          </button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        {/* Abas de navegação */}
        <div className="flex border-b border-neutral-300 mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === AdminTab.ARTICLES
                ? 'border-b-2 border-primary-600 text-primary-600'
                : 'text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange(AdminTab.ARTICLES)}
          >
            Artigos
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === AdminTab.TEAM
                ? 'border-b-2 border-primary-600 text-primary-600'
                : 'text-neutral-600 hover:text-primary-600'
            }`}
            onClick={() => handleTabChange(AdminTab.TEAM)}
          >
            Equipe
          </button>
        </div>
        
        {/* Conteúdo da aba */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-neutral-600">Carregando...</p>
            </div>
          ) : (
            <>
              {/* Aba de Artigos */}
              {activeTab === AdminTab.ARTICLES && (
                <>
                  {formMode === FormMode.NONE ? (
                    <>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-neutral-800">Gerenciar Artigos</h2>
                        <button
                          onClick={handleCreateArticle}
                          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                        >
                          Novo Artigo
                        </button>
                      </div>
                      
                      {articles.length === 0 ? (
                        <p className="text-neutral-600 text-center py-8">
                          Nenhum artigo encontrado. Clique em "Novo Artigo" para criar.
                        </p>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-neutral-200">
                            <thead className="bg-neutral-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Título
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Autor
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Categoria
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Data
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Destaque
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Ações
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-neutral-200">
                              {articles.map((article) => (
                                <tr key={article.id}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-neutral-900">{article.title}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-neutral-600">{article.author}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-neutral-600">{article.category}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-neutral-600">{article.date}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-neutral-600">
                                      {article.featured ? 'Sim' : 'Não'}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                      onClick={() => handleEditArticle(article)}
                                      className="text-primary-600 hover:text-primary-900 mr-4"
                                    >
                                      Editar
                                    </button>
                                    <button
                                      onClick={() => handleDeleteArticle(article.id)}
                                      className="text-red-600 hover:text-red-900"
                                    >
                                      Excluir
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-neutral-800">
                          {formMode === FormMode.CREATE ? 'Novo Artigo' : 'Editar Artigo'}
                        </h2>
                      </div>
                      <ArticleForm
                        article={selectedArticle || undefined}
                        onSubmit={handleArticleSubmit}
                        onCancel={handleCancelForm}
                      />
                    </>
                  )}
                </>
              )}
              
              {/* Aba de Equipe */}
              {activeTab === AdminTab.TEAM && (
                <>
                  {formMode === FormMode.NONE ? (
                    <>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-neutral-800">Gerenciar Equipe</h2>
                        <button
                          onClick={handleCreateTeamMember}
                          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                        >
                          Novo Membro
                        </button>
                      </div>
                      
                      {teamMembers.length === 0 ? (
                        <p className="text-neutral-600 text-center py-8">
                          Nenhum membro da equipe encontrado. Clique em "Novo Membro" para criar.
                        </p>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-neutral-200">
                            <thead className="bg-neutral-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Nome
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Cargo
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Sócio
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                  Ações
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-neutral-200">
                              {teamMembers.map((member) => (
                                <tr key={member.id}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                          className="h-10 w-10 rounded-full object-cover"
                                          src={member.image}
                                          alt={member.name}
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <div className="text-sm font-medium text-neutral-900">
                                          {member.name}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-neutral-600">{member.role}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-neutral-600">
                                      {member.is_partner ? 'Sim' : 'Não'}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                      onClick={() => handleEditTeamMember(member)}
                                      className="text-primary-600 hover:text-primary-900 mr-4"
                                    >
                                      Editar
                                    </button>
                                    <button
                                      onClick={() => handleDeleteTeamMember(member.id)}
                                      className="text-red-600 hover:text-red-900"
                                    >
                                      Excluir
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="mb-6">
                        <h2 className="text-xl font-bold text-neutral-800">
                          {formMode === FormMode.CREATE ? 'Novo Membro da Equipe' : 'Editar Membro da Equipe'}
                        </h2>
                      </div>
                      <TeamMemberForm
                        member={selectedTeamMember || undefined}
                        onSubmit={handleTeamMemberSubmit}
                        onCancel={handleCancelForm}
                      />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
