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
    description: 'Atuamos na defesa de médicos e demais profissionais da saúde em todas as instâncias — administrativa, ética e judicial — assegurando a proteção de seus direitos e da sua reputação profissional. Nossa equipe possui sólida experiência na condução de casos complexos, que envolvem desde sindicâncias e processos ético-disciplinares nos Conselhos Regionais, até demandas judiciais relacionadas à responsabilidade civil.',
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
    description: 'Atuamos com consultoria e representação legal especializada na área do Direito da Saúde, com ênfase na defesa de beneficiários de planos de saúde diante de abusos praticados por operadoras. Nossa atuação abrange tanto a via administrativa — incluindo a formulação de Notificações de Intermediação Preliminar (NIP) junto à ANS — quanto a via judicial, por meio do ajuizamento de ações para garantir a cobertura de tratamentos, medicamentos, exames, internações, manutenção de contrato, revisão de reajustes e demais direitos assegurados em lei.',
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
      'Atuação especializada em Direito da Saúde',
      'Experiência na solução de conflitos com operadoras de planos de saúde',
      'Intervenção jurídica rápida e assertiva para garantir o tratamento de saúde',
      'Atuação administrativa estratégica junto à ANS',
      'Compromisso com a proteção integral da saúde e da dignidade do beneficiário de plano de saúde'
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