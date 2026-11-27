export const COMPANY = {
  brand: 'GasCryo',
  legalName: 'Gultiere Alves Santos de Melo - ME',
  tradeName: 'G.A.S.CRYO',
  subtitle: 'Equipamentos Industriais Criogênicos',
  cnpj: '60.078.834/0001-41',
  phoneDisplay: '(11) 91363-0927',
  phoneDigits: '5511913630927',
  email: 'gascryo1@gmail.com',
  instagramUrl: 'https://www.instagram.com/gascryo/',
  instagramHandle: '@gascryo',
  addressLine: 'Estrada Municipal Rubens de Almeida Pupo — Chácaras Canaã',
  cityState: 'Jarinu/SP',
  cep: '13246-692',
  coverage: 'Atendimento em todo o Brasil',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export interface SolutionTab {
  id: string;
  label: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
  ctaLabel: string;
  whatsappDraft: string;
}

export const SOLUTIONS: SolutionTab[] = [
  {
    id: 'tanques',
    label: 'Tanques Criogênicos',
    title: 'Tanques estacionários e rodoviários fabricados sob medida',
    summary:
      'Projetamos e fabricamos reservatórios criogênicos para armazenamento estacionário em plantas industriais e montagem rodoviária sobre caminhões e carretas, unindo robustez estrutural e rigor técnico.',
    image: '/images/tank-refurbish.jpg',
    imageAlt: 'Tanque criogênico estacionário vertical e tanque rodoviário em galpão industrial da GasCryo',
    deliverables: [
      'Fabricação sob medida conforme especificações operacionais',
      'Montagem de cabines, carrocerias e estruturas para transporte criogênico',
      'Tubulações industriais e adequação operacional completa',
      'Fornecimento de máquinas, partes e peças industriais',
    ],
    ctaLabel: 'Orçar tanque criogênico',
    whatsappDraft:
      'Olá equipe GasCryo! Gostaria de solicitar um orçamento técnico para tanque criogênico (estacionário/rodoviário).',
  },
  {
    id: 'reformas',
    label: 'Reforma Completa',
    title: 'Recuperação estrutural, isolamento térmico e pintura industrial',
    summary:
      'Restauramos tanques criogênicos estacionários, rodoviários e cabines operacionais para estender a vida útil do ativo com máxima segurança, estanqueidade e acabamento industrial.',
    image: '/images/hero-tank.jpg',
    imageAlt: 'Tanque criogênico rodoviário reformado com pintura industrial branca e tubulação em aço inox',
    deliverables: [
      'Reforma estrutural completa de tanques e cabines criogênicas',
      'Isolamento e recuperação térmica em poliuretano e alumínio',
      'Pintura industrial de alta resistência e durabilidade',
      'Inspeção técnica especializada e controle rigoroso de qualidade',
    ],
    ctaLabel: 'Avaliar reforma de tanque',
    whatsappDraft:
      'Olá equipe GasCryo! Preciso de uma avaliação técnica para reforma completa de tanque ou cabine criogênica.',
  },
  {
    id: 'aquecedor-co2',
    label: 'Aquecedor de CO₂',
    title: 'Aquecedor de CO₂ em aço inox desenvolvido sob medida',
    summary:
      'Cada aquecedor de CO₂ é fabricado conforme as especificações do cliente, com acabamento em aço inox, serpentina interna dimensionada e rigoroso controle de fabricação para desempenho contínuo.',
    image: '/images/heater-co2.jpg',
    imageAlt: 'Aquecedor de CO₂ fabricado sob medida em aço inox escovado com serpentina interna',
    deliverables: [
      'Fabricado conforme vazão, pressão e dimensões do projeto',
      'Construção e acabamento em aço inox de alta durabilidade',
      'Serpentina interna soldada com precisão industrial',
      'Segurança e confiabilidade operacional em regime contínuo',
    ],
    ctaLabel: 'Solicitar projeto de Aquecedor CO₂',
    whatsappDraft:
      'Olá equipe GasCryo! Gostaria de solicitar orçamento para fabricação sob medida de Aquecedor de CO₂ em aço inox.',
  },
  {
    id: 'manutencao',
    label: 'Manutenção & Testes',
    title: 'Manutenção preventiva, corretiva e teste de microvazamento',
    summary:
      'Equipe técnica especializada em soldagem TIG e MIG/MAG, caldeiraria pesada e testes de segurança para garantir que cada equipamento opere com zero vazamento e total confiabilidade.',
    image: '/images/tank-refurbish.jpg',
    imageAlt: 'Equipamentos criogênicos passando por inspeção e controle de qualidade industrial',
    deliverables: [
      'Teste de microvazamento de alta precisão em linhas e vasos',
      'Manutenção preventiva e corretiva em sistemas criogênicos',
      'Soldagem industrial especializada (TIG e MIG/MAG)',
      'Adequação operacional e inspeção técnica completa',
    ],
    ctaLabel: 'Agendar inspeção técnica',
    whatsappDraft:
      'Olá equipe GasCryo! Gostaria de agendar uma manutenção técnica ou teste de microvazamento.',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Avaliação e diagnóstico técnico',
    description:
      'Levantamento completo das condições estruturais, integridade do isolamento térmico, válvulas, tubulações e requisitos operacionais do cliente.',
  },
  {
    number: '02',
    title: 'Caldeiraria e soldagem especializada',
    description:
      'Execução estrutural sob medida e soldagem industrial TIG e MIG/MAG em aço inox e ligas metálicas com rigor dimensional.',
  },
  {
    number: '03',
    title: 'Isolamento e recuperação térmica',
    description:
      'Aplicação ou recomposição do sistema térmico em poliuretano e revestimento em alumínio para preservar o gás liquefeito com mínima perda.',
  },
  {
    number: '04',
    title: 'Teste de microvazamento e validação',
    description:
      'Controle rigoroso de qualidade e ensaios de estanqueidade para assegurar que 100% dos equipamentos atendam aos padrões de segurança criogênica.',
  },
  {
    number: '05',
    title: 'Pintura industrial e entrega nacional',
    description:
      'Acabamento em pintura técnica de alta resistência à corrosão e condensação, seguido de conferência final e expedição para qualquer região do Brasil.',
  },
];

export interface GasSpec {
  formula: string;
  name: string;
  boilingPoint: string;
  code: string;
  applications: string;
}

export const GASES: GasSpec[] = [
  {
    formula: 'O₂',
    name: 'Oxigênio Líquido',
    boilingPoint: '-183 °C',
    code: 'LOX',
    applications: 'Siderurgia, metalurgia, corte térmico, processos industriais e gases medicinais.',
  },
  {
    formula: 'N₂',
    name: 'Nitrogênio Líquido',
    boilingPoint: '-196 °C',
    code: 'LN₂',
    applications: 'Inertização, ultracongelamento industrial, indústria química, farmacêutica e alimentícia.',
  },
  {
    formula: 'Ar',
    name: 'Argônio Líquido',
    boilingPoint: '-186 °C',
    code: 'ONU 1951',
    applications: 'Soldagem de alta pureza, metalurgia especial, eletrônica e atmosfera controlada.',
  },
  {
    formula: 'CO₂',
    name: 'Dióxido de Carbono',
    boilingPoint: '-78,5 °C',
    code: 'CO₂',
    applications: 'Aquecedores de CO₂ em aço inox sob medida, bebidas, refrigeração e indústria química.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'A GasCryo atende empresas fora do estado de São Paulo?',
    answer:
      'Sim. Nossa estrutura fabril fica em Jarinu/SP — no eixo industrial de Jundiaí com acesso rápido às principais rodovias — e atendemos clientes, transportadoras e indústrias em todo o território nacional.',
  },
  {
    question: 'Vocês trabalham com tanques estacionários e também com tanques rodoviários?',
    answer:
      'Sim. Realizamos fabricação sob medida, reforma completa, recuperação térmica, pintura industrial e manutenção tanto para tanques estacionários quanto para tanques rodoviários (caminhões e carretas criogênicas).',
  },
  {
    question: 'O Aquecedor de CO₂ pode ser fabricado conforme nosso projeto técnico?',
    answer:
      'Sim. Desenvolvemos cada Aquecedor de CO₂ em aço inox sob medida, respeitando as especificações técnicas, conexões e exigências operacionais de cada cliente.',
  },
  {
    question: 'Quais controles de segurança são feitos em uma reforma de tanque criogênico?',
    answer:
      'Cada reforma inclui inspeção técnica especializada, teste de microvazamento, verificação estrutural e térmica, além de controle rigoroso de qualidade para que o equipamento saia 100% testado.',
  },
  {
    question: 'O que está incluso na reforma de uma cabine criogênica?',
    answer:
      'A reforma abrange recuperação estrutural, revisão e substituição de tubulações e componentes desgastados, recuperação térmica, pintura técnica industrial, adequação operacional e testes de estanqueidade.',
  },
  {
    question: 'Como solicitar uma avaliação técnica ou orçamento?',
    answer:
      'Você pode preencher o formulário ao final da página ou chamar diretamente no WhatsApp (11) 91363-0927 informando o tipo de equipamento, gás utilizado e serviço desejado. Nossa equipe técnica retorna com o direcionamento completo.',
  },
];
