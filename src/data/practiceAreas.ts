import { Gavel, Stethoscope, ShieldCheck, FileText} from 'lucide-react';

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
      'Processos por alegação de erro médico',
      'Sindicâncias e processos ético-profissionais',
      'Questões contratuais com operadoras e clínicas',
      'Defesa em processos cíveis e criminais',
      'Assessoria preventiva para redução de riscos jurídicos'
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
      'Questões envolvendo planos de saúde',
      'Acesso a tratamentos e medicamentos',
      'Regulação sanitária e compliance',
      'Judicialização da saúde',
      'Direitos dos pacientes'
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
  },
  {
    id: 'defesa-processo-judicial',
    title: 'Defesa de Processos Judiciais',
    subtitle: 'Proteção jurídica em ações civis e criminais',
    icon: Gavel,
    description: 'Atuamos na defesa técnica de médicos e profissionais da saúde em processos judiciais, com foco na construção de teses sólidas e personalizadas. Nossa experiência em casos de responsabilidade profissional permite uma defesa eficaz e estratégica.',
    causes: [
      'Alegações de erro médico',
      'Processos de indenização por danos',
      'Ações por falha de comunicação médico-paciente',
      'Questionamentos sobre consentimento informado',
      'Processos relacionados a procedimentos estéticos'
    ],
    steps: [
      {
        title: 'Análise da documentação',
        description: 'Estudo detalhado do prontuário, exames e toda documentação relevante.'
      },
      {
        title: 'Diagnóstico jurídico',
        description: 'Avaliação das vulnerabilidades e pontos fortes do caso.'
      },
      {
        title: 'Definição da estratégia processual',
        description: 'Planejamento da linha de defesa e argumentação técnica.'
      },
      {
        title: 'Defesa e acompanhamento',
        description: 'Representação em todas as fases processuais e audiências.'
      }
    ],
    benefits: [
      'Atendimento com urgência e clareza',
      'Profundo conhecimento técnico na área médica',
      'Equipe multidisciplinar dedicada',
      'Histórico de sucesso em casos similares',
      'Minimização de impactos na reputação profissional'
    ],
    faqs: [
      {
        question: 'O que devo fazer ao receber uma notificação judicial?',
        answer: 'O primeiro passo é não responder diretamente e buscar imediatamente orientação jurídica especializada. Nosso escritório pode ser acionado em regime de urgência para análise inicial e primeiras providências.'
      },
      {
        question: 'Posso ser responsabilizado por erros da equipe ou da instituição?',
        answer: 'A responsabilização depende de diversos fatores, incluindo seu cargo, funções, relação contratual e o nexo causal entre sua atuação e o dano alegado. Analisamos caso a caso para determinar a estratégia adequada.'
      },
      {
        question: 'Qual a importância do prontuário médico na minha defesa?',
        answer: 'O prontuário é frequentemente a peça central da defesa, pois documenta todas as decisões e procedimentos realizados. Um prontuário bem elaborado, com registros claros e completos, é fundamental para demonstrar a adequação da conduta profissional.'
      }
    ]
  },
  {
    id: 'processos-eticos',
    title: 'Processos Ético-Profissionais',
    subtitle: 'Defesa especializada junto aos Conselhos de Classe',
    icon: FileText,
    description: 'Oferecemos representação jurídica em sindicâncias e processos ético-disciplinares junto aos Conselhos Profissionais, como CRM, CRO, COREN e outros. Nossa atuação visa proteger o registro profissional e a reputação do profissional de saúde.',
    causes: [
      'Denúncias de pacientes aos Conselhos',
      'Sindicâncias por questões publicitárias',
      'Processos por conflitos entre profissionais',
      'Questionamentos sobre procedimentos realizados',
      'Infrações éticas alegadas por instituições'
    ],
    steps: [
      {
        title: 'Análise da denúncia',
        description: 'Estudo detalhado da acusação e identificação dos pontos críticos.'
      },
      {
        title: 'Preparação da defesa prévia',
        description: 'Elaboração de argumentação técnica e ética fundamentada.'
      },
      {
        title: 'Acompanhamento processual',
        description: 'Presença em oitivas, depoimentos e sessões de julgamento.'
      },
      {
        title: 'Recursos administrativos',
        description: 'Quando necessário, interposição de recursos às instâncias superiores.'
      }
    ],
    benefits: [
      'Conhecimento profundo dos Códigos de Ética profissionais',
      'Experiência em Conselhos Regionais e Federais',
      'Abordagem discreta e confidencial',
      'Alta taxa de arquivamento de denúncias',
      'Proteção da reputação e do registro profissional'
    ],
    faqs: [
      {
        question: 'Quais são as possíveis penalidades em um processo ético?',
        answer: 'As penalidades variam de advertência confidencial até cassação do registro profissional, dependendo da gravidade da infração e do histórico do profissional. Nossa atuação visa sempre a aplicação da penalidade mínima ou o arquivamento.'
      },
      {
        question: 'O processo no Conselho pode gerar também um processo judicial?',
        answer: 'Sim, processos éticos e judiciais são independentes, podendo tramitar simultaneamente. Entretanto, nossa estratégia contempla a defesa coordenada em ambas as esferas quando necessário.'
      },
      {
        question: 'Quanto tempo dura um processo ético-profissional?',
        answer: 'O prazo médio é de 1 a 2 anos, podendo variar conforme a complexidade do caso, a região e a estrutura do Conselho. Trabalhamos para a resolução mais ágil possível, com foco na preservação da sua carreira.'
      }
    ]
  }
];