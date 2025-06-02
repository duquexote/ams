import {Stethoscope, ShieldCheck } from 'lucide-react';

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  description: string;
  causes: string[];
  steps: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 'direito-medico',
    title: 'Direito Médico',
    subtitle: 'Defesa especializada para profissionais de saúde',
    icon: Stethoscope,
    description: 'Atuamos na defesa de médicos e profissionais da saúde em todas as esferas, garantindo a proteção de seus direitos e de sua reputação profissional. Nossa equipe possui vasta experiência em casos complexos envolvendo alegações de erro médico, processos éticos e questões contratuais.',
    causes: [
      'Defesa de processo judicial',
      'Defesa de processo ético',
      'Auxílio-moradia',
      '1% FIES – abatimento proporcional',
      'FIES – suspensão de pagamento',
      'FIES – revisão para médicos',
      'Consultoria empresarial',
      'Adequação documental + LGPD',
      'PJMED – adequação societária',
      'CSLL – Equiparação hospitalar',
      'Holding Médica',
      'Ação de cobrança de honorários médicos',
      'Descredenciamento',
      'Pack de documentos'
    ],
    steps: [
      {
        title: 'Análise do Caso',
        description: 'Avaliação detalhada da documentação e construção do diagnóstico jurídico inicial.'
      },
      {
        title: 'Estratégia de Defesa',
        description: 'Desenvolvimento de argumentação técnica e jurídica personalizada para cada caso.'
      },
      {
        title: 'Representação Legal',
        description: 'Atuação em audiências, elaboração de peças processuais e acompanhamento integral.'
      },
      {
        title: 'Consultoria Contínua',
        description: 'Suporte constante com esclarecimento de dúvidas e orientações estratégicas.'
      }
    ],
    benefits: [
      'Equipe especializada com conhecimento técnico em saúde',
      'Atendimento personalizado e humanizado',
      'Experiência comprovada em casos complexos',
      'Suporte jurídico 24/7 em situações de urgência',
      'Defesa da reputação profissional e continuidade da carreira'
    ],
    faqs: [
      {
        question: 'Quanto tempo dura um processo por erro médico?',
        answer: 'O tempo médio de duração varia entre 3 e 5 anos, dependendo da complexidade do caso e da jurisdição. Nosso escritório trabalha para agilizar o processo e buscar a melhor resolução no menor tempo possível.'
      },
      {
        question: 'Sou obrigado a comparecer pessoalmente a todas as audiências?',
        answer: 'Não necessariamente. Em muitos casos, seus advogados podem representá-lo, especialmente em audiências de caráter processual. Avaliamos cada situação para minimizar impactos em sua rotina profissional.'
      },
      {
        question: 'Como posso me prevenir juridicamente no exercício da medicina?',
        answer: 'Oferecemos consultoria preventiva que inclui revisão de termos de consentimento, protocolos de atendimento e orientações sobre documentação adequada do prontuário médico, reduzindo significativamente riscos jurídicos.'
      }
    ]
  },
  {
    id: 'direito-da-saude',
    title: 'Direito da Saúde',
    subtitle: 'Soluções jurídicas para o setor de saúde',
    icon: ShieldCheck,
    description: 'Prestamos consultoria e representação legal para instituições de saúde, planos de saúde e pacientes em questões relacionadas ao direito à saúde, regulação sanitária e saúde suplementar. Nossa atuação visa garantir a conformidade legal e a proteção dos direitos de todos os envolvidos.',
    causes: [
      'Cancelamento de Contrato de Plano de Saúde',
      'Cobertura (medicamentos de alto custo, medicamentos off label, medicamento sem previsão no Rol da ANS)',
      'Medicamentos importados, tratamentos oncológicos, OPME, exames complexos',
      'Cirurgias reconstrutivas, cirurgias robóticas, home care, TEA',
      'Tratamentos para transtornos do neurodesenvolvimento, internação psiquiátrica',
      'Cirurgia reparadora, redução mamária, ortognática',
      'Coparticipação',
      'Exclusão de dependente',
      'Inclusão de dependente',
      'Exclusão a pedido',
      'Fracionamento do contrato/Alteração de titularidade',
      'Descredenciamento',
      'Revisão de reajustes anuais',
      'Revisão de reajustes por faixa etária',
      'Revisão de reajustes em planos antigos (anteriores a 1998)',
      'Revisão de preço-médio (aposentadoria)',
      'Upgrade/Downgrade da categoria do plano',
      'Remissão',
      'Reembolso'
    ],
    steps: [
      {
        title: 'Consultoria Especializada',
        description: 'Análise da situação e orientações específicas para cada contexto.'
      },
      {
        title: 'Elaboração de Documentos',
        description: 'Preparação de contratos, termos e documentos legais necessários.'
      },
      {
        title: 'Representação Administrativa',
        description: 'Atuação junto a órgãos reguladores e agências governamentais.'
      },
      {
        title: 'Ações Judiciais',
        description: 'Quando necessário, representação em processos judiciais para garantia de direitos.'
      }
    ],
    benefits: [
      'Conhecimento específico da legislação de saúde',
      'Experiência em negociações com operadoras de saúde',
      'Abordagem preventiva para evitar litígios',
      'Relacionamento estabelecido com órgãos reguladores',
      'Resolução eficiente de conflitos'
    ],
    faqs: [
      {
        question: 'O plano de saúde pode negar um procedimento prescrito pelo médico?',
        answer: 'A negativa só é legalmente válida em situações específicas previstas em contrato e regulamentação da ANS. Analisamos cada caso para verificar a legalidade da negativa e as possíveis medidas a serem tomadas.'
      },
      {
        question: 'Como posso garantir acesso a medicamentos de alto custo?',
        answer: 'Existem diversos caminhos, desde solicitações administrativas até ações judiciais. Nossa equipe avalia a melhor estratégia considerando a urgência, o tipo de medicamento e a situação específica do paciente.'
      },
      {
        question: 'Quais os principais cuidados jurídicos que uma clínica deve ter?',
        answer: 'Recomendamos atenção especial à documentação de pacientes, termos de consentimento, contratos com profissionais, adequação à LGPD e cumprimento das normas sanitárias aplicáveis ao segmento específico.'
      }
    ]
  }
];