import { BlogArticle } from '../types/blog';

// Este é um arquivo para armazenar todos os artigos do blog
// Você pode adicionar os 2778 artigos aqui conforme necessário

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Responsabilidade Civil Médica: O que Precisa Saber',
    excerpt: 'Entenda os principais aspectos legais sobre responsabilidade profissional em casos de alegação de erro médico.',
    content: `
      <p>A responsabilidade civil médica é um tema de grande relevância no contexto jurídico atual. Profissionais da saúde enfrentam desafios crescentes relacionados a processos por suposto erro médico, tornando essencial o conhecimento dos aspectos legais envolvidos.</p>
      
      <h2>Natureza jurídica da responsabilidade médica</h2>
      <p>No ordenamento jurídico brasileiro, a responsabilidade civil do médico é, via de regra, subjetiva. Isso significa que, para sua caracterização, é necessária a comprovação de culpa do profissional, seja por negligência, imprudência ou imperícia.</p>
      
      <h2>Obrigação de meio vs. obrigação de resultado</h2>
      <p>A atividade médica é tradicionalmente considerada uma obrigação de meio, não de resultado. O profissional se compromete a empregar todos os recursos disponíveis e seguir as melhores práticas, mas não pode garantir a cura ou um resultado específico.</p>
      
      <h2>Exceções e casos especiais</h2>
      <p>Existem situações específicas em que a obrigação médica pode ser considerada de resultado, como em procedimentos estéticos eletivos ou exames laboratoriais. Nesses casos, o ônus probatório pode ser invertido.</p>
      
      <h2>Documentação e prontuário médico</h2>
      <p>O prontuário médico completo e detalhado é a principal ferramenta de defesa do profissional. A documentação adequada de todo o atendimento, incluindo anamnese, diagnóstico, condutas adotadas e termo de consentimento informado, é fundamental.</p>
      
      <h2>Conclusão</h2>
      <p>A melhor estratégia para os profissionais da saúde é a prevenção, através de uma prática médica ética, atualizada e bem documentada. Em caso de processos, é essencial buscar orientação jurídica especializada imediatamente.</p>
    `,
    date: '10 de Abril, 2025',
    publishedAt: '2025-04-10T10:00:00Z',
    author: 'Dr. Matheus Athayde',
    category: 'Direito Médico',
    tags: ['responsabilidade civil', 'erro médico', 'defesa profissional'],
    image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'responsabilidade-civil-medica',
    featured: true
  },
  {
    id: '2',
    title: 'LGPD e Prontuários Médicos: Como se Adequar?',
    excerpt: 'Um guia completo sobre como clínicas e hospitais devem tratar os dados dos pacientes conforme a legislação vigente.',
    content: `
      <p>A Lei Geral de Proteção de Dados (LGPD) trouxe importantes mudanças para o tratamento de dados pessoais no Brasil, com impacto significativo no setor de saúde, especialmente no que se refere aos prontuários médicos.</p>
      
      <h2>Prontuário médico como dado sensível</h2>
      <p>Os dados de saúde são classificados como dados sensíveis pela LGPD, recebendo proteção especial. Isso inclui todas as informações contidas em prontuários médicos, exames e histórico de atendimentos.</p>
      
      <h2>Bases legais para tratamento</h2>
      <p>O tratamento de dados de saúde pode ocorrer com base no consentimento do paciente ou nas hipóteses de dispensa previstas na lei, como para a proteção da vida, tutela da saúde ou procedimentos realizados por profissionais da área.</p>
      
      <h2>Medidas de segurança necessárias</h2>
      <p>Instituições de saúde devem implementar medidas técnicas e administrativas de segurança, como controle de acesso, criptografia, backups regulares e políticas de privacidade claras.</p>
      
      <h2>Tempo de armazenamento</h2>
      <p>A LGPD estabelece que os dados devem ser mantidos apenas pelo tempo necessário para cumprir sua finalidade. No entanto, para prontuários médicos, deve-se observar também as normas do CFM, que estabelecem prazos mínimos de guarda.</p>
      
      <h2>Passos práticos para adequação</h2>
      <p>1. Mapeamento de dados: identificar quais dados são coletados e processados<br>
      2. Revisão de contratos com fornecedores que acessam dados<br>
      3. Elaboração de política de privacidade específica<br>
      4. Treinamento da equipe<br>
      5. Implementação de canal para exercício dos direitos dos titulares</p>
      
      <h2>Conclusão</h2>
      <p>A adequação à LGPD é um processo contínuo que exige atenção constante. Além de ser uma obrigação legal, representa uma oportunidade para estabelecer relações de confiança com pacientes e parceiros.</p>
    `,
    date: '28 de Março, 2025',
    publishedAt: '2025-03-28T14:30:00Z',
    author: 'Dra. Gabriela Sady',
    category: 'LGPD na Saúde',
    tags: ['LGPD', 'proteção de dados', 'prontuário eletrônico', 'compliance'],
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'lgpd-prontuarios-medicos',
    featured: true
  },
  {
    id: '3',
    title: 'Telemedicina: Aspectos Jurídicos para Profissionais',
    excerpt: 'Conheça os principais pontos de atenção e requisitos legais para atendimentos realizados à distância.',
    content: `
      <p>A telemedicina ganhou impulso significativo nos últimos anos, especialmente após a pandemia de COVID-19. Com sua regulamentação permanente no Brasil, é fundamental que os profissionais de saúde compreendam os aspectos jurídicos envolvidos.</p>
      
      <h2>Marco regulatório atual</h2>
      <p>A prática da telemedicina foi regulamentada de forma permanente pela Lei nº 14.510/2023, que alterou a Lei nº 8.080/1990. A norma estabelece parâmetros para consultas, diagnósticos e acompanhamentos realizados remotamente.</p>
      
      <h2>Requisitos técnicos e de segurança</h2>
      <p>As plataformas utilizadas para telemedicina devem garantir a segurança e o sigilo das informações, com criptografia de ponta a ponta, autenticação segura e conformidade com a LGPD. A escolha de sistemas adequados é responsabilidade do profissional.</p>
      
      <h2>Consentimento informado</h2>
      <p>É obrigatória a obtenção do consentimento específico do paciente para o atendimento à distância, preferencialmente por escrito. O documento deve esclarecer as limitações da modalidade e a possibilidade de encaminhamento para atendimento presencial.</p>
      
      <h2>Documentação e prontuário</h2>
      <p>Todos os atendimentos por telemedicina devem ser devidamente registrados em prontuário, com o mesmo nível de detalhamento de uma consulta presencial. Recomenda-se documentar também eventuais intercorrências técnicas.</p>
      
      <h2>Responsabilidade profissional</h2>
      <p>O profissional mantém a mesma responsabilidade ética e legal que teria em um atendimento presencial. Deve avaliar criteriosamente quando a telemedicina é adequada para cada caso e reconhecer suas limitações.</p>
      
      <h2>Prescrição eletrônica</h2>
      <p>A prescrição de medicamentos pode ser realizada digitalmente, desde que atenda aos requisitos de autenticidade, integridade e validade jurídica, preferencialmente com uso de certificação digital.</p>
      
      <h2>Conclusão</h2>
      <p>A telemedicina representa uma evolução importante na prestação de serviços de saúde, mas exige atenção redobrada aos aspectos jurídicos para garantir a segurança do paciente e a proteção legal do profissional.</p>
    `,
    date: '15 de Março, 2025',
    publishedAt: '2025-03-15T09:15:00Z',
    author: 'Dr. Lucas Macedo',
    category: 'Telemedicina',
    tags: ['telemedicina', 'atendimento remoto', 'regulamentação', 'tecnologia na saúde'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'telemedicina-aspectos-juridicos',
    featured: true
  },
  {
    id: '4',
    title: 'Telemedicina: Aspectos Jurídicos para Profissionais',
    excerpt: 'Conheça os principais pontos de atenção e requisitos legais para atendimentos realizados à distância.',
    content: `
      <p>A telemedicina ganhou impulso significativo nos últimos anos, especialmente após a pandemia de COVID-19. Com sua regulamentação permanente no Brasil, é fundamental que os profissionais de saúde compreendam os aspectos jurídicos envolvidos.</p>
      
      <h2>Marco regulatório atual</h2>
      <p>A prática da telemedicina foi regulamentada de forma permanente pela Lei nº 14.510/2023, que alterou a Lei nº 8.080/1990. A norma estabelece parâmetros para consultas, diagnósticos e acompanhamentos realizados remotamente.</p>
      
      <h2>Requisitos técnicos e de segurança</h2>
      <p>As plataformas utilizadas para telemedicina devem garantir a segurança e o sigilo das informações, com criptografia de ponta a ponta, autenticação segura e conformidade com a LGPD. A escolha de sistemas adequados é responsabilidade do profissional.</p>
      
      <h2>Consentimento informado</h2>
      <p>É obrigatória a obtenção do consentimento específico do paciente para o atendimento à distância, preferencialmente por escrito. O documento deve esclarecer as limitações da modalidade e a possibilidade de encaminhamento para atendimento presencial.</p>
      
      <h2>Documentação e prontuário</h2>
      <p>Todos os atendimentos por telemedicina devem ser devidamente registrados em prontuário, com o mesmo nível de detalhamento de uma consulta presencial. Recomenda-se documentar também eventuais intercorrências técnicas.</p>
      
      <h2>Responsabilidade profissional</h2>
      <p>O profissional mantém a mesma responsabilidade ética e legal que teria em um atendimento presencial. Deve avaliar criteriosamente quando a telemedicina é adequada para cada caso e reconhecer suas limitações.</p>
      
      <h2>Prescrição eletrônica</h2>
      <p>A prescrição de medicamentos pode ser realizada digitalmente, desde que atenda aos requisitos de autenticidade, integridade e validade jurídica, preferencialmente com uso de certificação digital.</p>
      
      <h2>Conclusão</h2>
      <p>A telemedicina representa uma evolução importante na prestação de serviços de saúde, mas exige atenção redobrada aos aspectos jurídicos para garantir a segurança do paciente e a proteção legal do profissional.</p>
    `,
    date: '15 de Março, 2025',
    publishedAt: '2025-03-15T09:15:00Z',
    author: 'Dr. Lucas Macedo',
    category: 'Telemedicina',
    tags: ['telemedicina', 'atendimento remoto', 'regulamentação', 'tecnologia na saúde'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'telemedicina-aspectos-juridicos',
    featured: true
  },
  {
    id: '5',
    title: 'Telemedicina: Aspectos Jurídicos para Profissionais',
    excerpt: 'Conheça os principais pontos de atenção e requisitos legais para atendimentos realizados à distância.',
    content: `
      <p>A telemedicina ganhou impulso significativo nos últimos anos, especialmente após a pandemia de COVID-19. Com sua regulamentação permanente no Brasil, é fundamental que os profissionais de saúde compreendam os aspectos jurídicos envolvidos.</p>
      
      <h2>Marco regulatório atual</h2>
      <p>A prática da telemedicina foi regulamentada de forma permanente pela Lei nº 14.510/2023, que alterou a Lei nº 8.080/1990. A norma estabelece parâmetros para consultas, diagnósticos e acompanhamentos realizados remotamente.</p>
      
      <h2>Requisitos técnicos e de segurança</h2>
      <p>As plataformas utilizadas para telemedicina devem garantir a segurança e o sigilo das informações, com criptografia de ponta a ponta, autenticação segura e conformidade com a LGPD. A escolha de sistemas adequados é responsabilidade do profissional.</p>
      
      <h2>Consentimento informado</h2>
      <p>É obrigatória a obtenção do consentimento específico do paciente para o atendimento à distância, preferencialmente por escrito. O documento deve esclarecer as limitações da modalidade e a possibilidade de encaminhamento para atendimento presencial.</p>
      
      <h2>Documentação e prontuário</h2>
      <p>Todos os atendimentos por telemedicina devem ser devidamente registrados em prontuário, com o mesmo nível de detalhamento de uma consulta presencial. Recomenda-se documentar também eventuais intercorrências técnicas.</p>
      
      <h2>Responsabilidade profissional</h2>
      <p>O profissional mantém a mesma responsabilidade ética e legal que teria em um atendimento presencial. Deve avaliar criteriosamente quando a telemedicina é adequada para cada caso e reconhecer suas limitações.</p>
      
      <h2>Prescrição eletrônica</h2>
      <p>A prescrição de medicamentos pode ser realizada digitalmente, desde que atenda aos requisitos de autenticidade, integridade e validade jurídica, preferencialmente com uso de certificação digital.</p>
      
      <h2>Conclusão</h2>
      <p>A telemedicina representa uma evolução importante na prestação de serviços de saúde, mas exige atenção redobrada aos aspectos jurídicos para garantir a segurança do paciente e a proteção legal do profissional.</p>
    `,
    date: '15 de Março, 2025',
    publishedAt: '2025-03-15T09:15:00Z',
    author: 'Dr. Lucas Macedo',
    category: 'Telemedicina',
    tags: ['telemedicina', 'atendimento remoto', 'regulamentação', 'tecnologia na saúde'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'telemedicina-aspectos-juridicos',
    featured: true
  },
  {
    id: '6',
    title: 'Telemedicina: Aspectos Jurídicos para Profissionais',
    excerpt: 'Conheça os principais pontos de atenção e requisitos legais para atendimentos realizados à distância.',
    content: `
      <p>A telemedicina ganhou impulso significativo nos últimos anos, especialmente após a pandemia de COVID-19. Com sua regulamentação permanente no Brasil, é fundamental que os profissionais de saúde compreendam os aspectos jurídicos envolvidos.</p>
      
      <h2>Marco regulatório atual</h2>
      <p>A prática da telemedicina foi regulamentada de forma permanente pela Lei nº 14.510/2023, que alterou a Lei nº 8.080/1990. A norma estabelece parâmetros para consultas, diagnósticos e acompanhamentos realizados remotamente.</p>
      
      <h2>Requisitos técnicos e de segurança</h2>
      <p>As plataformas utilizadas para telemedicina devem garantir a segurança e o sigilo das informações, com criptografia de ponta a ponta, autenticação segura e conformidade com a LGPD. A escolha de sistemas adequados é responsabilidade do profissional.</p>
      
      <h2>Consentimento informado</h2>
      <p>É obrigatória a obtenção do consentimento específico do paciente para o atendimento à distância, preferencialmente por escrito. O documento deve esclarecer as limitações da modalidade e a possibilidade de encaminhamento para atendimento presencial.</p>
      
      <h2>Documentação e prontuário</h2>
      <p>Todos os atendimentos por telemedicina devem ser devidamente registrados em prontuário, com o mesmo nível de detalhamento de uma consulta presencial. Recomenda-se documentar também eventuais intercorrências técnicas.</p>
      
      <h2>Responsabilidade profissional</h2>
      <p>O profissional mantém a mesma responsabilidade ética e legal que teria em um atendimento presencial. Deve avaliar criteriosamente quando a telemedicina é adequada para cada caso e reconhecer suas limitações.</p>
      
      <h2>Prescrição eletrônica</h2>
      <p>A prescrição de medicamentos pode ser realizada digitalmente, desde que atenda aos requisitos de autenticidade, integridade e validade jurídica, preferencialmente com uso de certificação digital.</p>
      
      <h2>Conclusão</h2>
      <p>A telemedicina representa uma evolução importante na prestação de serviços de saúde, mas exige atenção redobrada aos aspectos jurídicos para garantir a segurança do paciente e a proteção legal do profissional.</p>
    `,
    date: '15 de Março, 2025',
    publishedAt: '2025-03-15T09:15:00Z',
    author: 'Dr. Lucas Macedo',
    category: 'Telemedicina',
    tags: ['telemedicina', 'atendimento remoto', 'regulamentação', 'tecnologia na saúde'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'telemedicina-aspectos-juridicos',
    featured: true
  },
  {
    id: '7',
    title: 'Telemedicina: Aspectos Jurídicos para Profissionais',
    excerpt: 'Conheça os principais pontos de atenção e requisitos legais para atendimentos realizados à distância.',
    content: `
      <p>A telemedicina ganhou impulso significativo nos últimos anos, especialmente após a pandemia de COVID-19. Com sua regulamentação permanente no Brasil, é fundamental que os profissionais de saúde compreendam os aspectos jurídicos envolvidos.</p>
      
      <h2>Marco regulatório atual</h2>
      <p>A prática da telemedicina foi regulamentada de forma permanente pela Lei nº 14.510/2023, que alterou a Lei nº 8.080/1990. A norma estabelece parâmetros para consultas, diagnósticos e acompanhamentos realizados remotamente.</p>
      
      <h2>Requisitos técnicos e de segurança</h2>
      <p>As plataformas utilizadas para telemedicina devem garantir a segurança e o sigilo das informações, com criptografia de ponta a ponta, autenticação segura e conformidade com a LGPD. A escolha de sistemas adequados é responsabilidade do profissional.</p>
      
      <h2>Consentimento informado</h2>
      <p>É obrigatória a obtenção do consentimento específico do paciente para o atendimento à distância, preferencialmente por escrito. O documento deve esclarecer as limitações da modalidade e a possibilidade de encaminhamento para atendimento presencial.</p>
      
      <h2>Documentação e prontuário</h2>
      <p>Todos os atendimentos por telemedicina devem ser devidamente registrados em prontuário, com o mesmo nível de detalhamento de uma consulta presencial. Recomenda-se documentar também eventuais intercorrências técnicas.</p>
      
      <h2>Responsabilidade profissional</h2>
      <p>O profissional mantém a mesma responsabilidade ética e legal que teria em um atendimento presencial. Deve avaliar criteriosamente quando a telemedicina é adequada para cada caso e reconhecer suas limitações.</p>
      
      <h2>Prescrição eletrônica</h2>
      <p>A prescrição de medicamentos pode ser realizada digitalmente, desde que atenda aos requisitos de autenticidade, integridade e validade jurídica, preferencialmente com uso de certificação digital.</p>
      
      <h2>Conclusão</h2>
      <p>A telemedicina representa uma evolução importante na prestação de serviços de saúde, mas exige atenção redobrada aos aspectos jurídicos para garantir a segurança do paciente e a proteção legal do profissional.</p>
    `,
    date: '15 de Março, 2025',
    publishedAt: '2025-03-15T09:15:00Z',
    author: 'Dr. Lucas Macedo',
    category: 'Telemedicina',
    tags: ['telemedicina', 'atendimento remoto', 'regulamentação', 'tecnologia na saúde'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'telemedicina-aspectos-juridicos',
    featured: true
  },
  {
    id: '8',
    title: 'Telemedicina: Aspectos Jurídicos para Profissionais',
    excerpt: 'Conheça os principais pontos de atenção e requisitos legais para atendimentos realizados à distância.',
    content: `
      <p>A telemedicina ganhou impulso significativo nos últimos anos, especialmente após a pandemia de COVID-19. Com sua regulamentação permanente no Brasil, é fundamental que os profissionais de saúde compreendam os aspectos jurídicos envolvidos.</p>
      
      <h2>Marco regulatório atual</h2>
      <p>A prática da telemedicina foi regulamentada de forma permanente pela Lei nº 14.510/2023, que alterou a Lei nº 8.080/1990. A norma estabelece parâmetros para consultas, diagnósticos e acompanhamentos realizados remotamente.</p>
      
      <h2>Requisitos técnicos e de segurança</h2>
      <p>As plataformas utilizadas para telemedicina devem garantir a segurança e o sigilo das informações, com criptografia de ponta a ponta, autenticação segura e conformidade com a LGPD. A escolha de sistemas adequados é responsabilidade do profissional.</p>
      
      <h2>Consentimento informado</h2>
      <p>É obrigatória a obtenção do consentimento específico do paciente para o atendimento à distância, preferencialmente por escrito. O documento deve esclarecer as limitações da modalidade e a possibilidade de encaminhamento para atendimento presencial.</p>
      
      <h2>Documentação e prontuário</h2>
      <p>Todos os atendimentos por telemedicina devem ser devidamente registrados em prontuário, com o mesmo nível de detalhamento de uma consulta presencial. Recomenda-se documentar também eventuais intercorrências técnicas.</p>
      
      <h2>Responsabilidade profissional</h2>
      <p>O profissional mantém a mesma responsabilidade ética e legal que teria em um atendimento presencial. Deve avaliar criteriosamente quando a telemedicina é adequada para cada caso e reconhecer suas limitações.</p>
      
      <h2>Prescrição eletrônica</h2>
      <p>A prescrição de medicamentos pode ser realizada digitalmente, desde que atenda aos requisitos de autenticidade, integridade e validade jurídica, preferencialmente com uso de certificação digital.</p>
      
      <h2>Conclusão</h2>
      <p>A telemedicina representa uma evolução importante na prestação de serviços de saúde, mas exige atenção redobrada aos aspectos jurídicos para garantir a segurança do paciente e a proteção legal do profissional.</p>
    `,
    date: '15 de Março, 2025',
    publishedAt: '2025-03-15T09:15:00Z',
    author: 'Dr. Lucas Macedo',
    category: 'Telemedicina',
    tags: ['telemedicina', 'atendimento remoto', 'regulamentação', 'tecnologia na saúde'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    slug: 'telemedicina-aspectos-juridicos',
    featured: true
  },
  // Adicione mais artigos conforme necessário
  // Este é apenas um modelo para você adicionar seus 2778 artigos
];

// Função auxiliar para obter artigos em destaque
export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};

// Função auxiliar para obter artigos por categoria
export const getArticlesByCategory = (category: string): BlogArticle[] => {
  return blogArticles.filter(article => article.category === category);
};

// Função auxiliar para obter um artigo pelo slug
export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

// Função auxiliar para obter artigos relacionados
export const getRelatedArticles = (currentArticleId: string, limit: number = 3): BlogArticle[] => {
  return blogArticles
    .filter(article => article.id !== currentArticleId)
    .slice(0, limit);
};

// Função para paginação de artigos
export const getPaginatedArticles = (page: number = 1, perPage: number = 9): {
  articles: BlogArticle[];
  totalPages: number;
} => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedArticles = blogArticles.slice(startIndex, endIndex);
  
  return {
    articles: paginatedArticles,
    totalPages: Math.ceil(blogArticles.length / perPage)
  };
};
