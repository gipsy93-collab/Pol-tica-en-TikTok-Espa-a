import { PartyData, MonthlyData, TheoryCard, ConclusionCard, Comment } from './types';

// Data derived from the article abstract and results
export const PARTIES: PartyData[] = [
  { name: 'PP', color: '#0056a3', videos: 1299, viralPercentage: 6.9, tone: 'Negativo', mainStrategy: 'Ataque / Anti-Sánchez' },
  { name: 'PSOE', color: '#e30613', videos: 102, viralPercentage: 14.7, tone: 'Positivo', mainStrategy: 'Gestión de Crisis / Promoción Líder' },
  { name: 'Vox', color: '#63be21', videos: 487, viralPercentage: 7, tone: 'Positivo', mainStrategy: 'Actividad Constante / Nicho' },
  { name: 'Sumar', color: '#e51c55', videos: 1299, viralPercentage: 19, tone: 'Positivo', mainStrategy: 'Nativo TikTok / Propuestas' },
];

// Approximated data from Figure 3 in the PDF
export const MONTHLY_ACTIVITY: MonthlyData[] = [
  { month: 'Ene', PP: 0.1, PSOE: 0.0, Vox: 0.1, Sumar: 0.0 },
  { month: 'Feb', PP: 0.2, PSOE: 0.1, Vox: 0.3, Sumar: 0.1 },
  { month: 'Mar', PP: 0.1, PSOE: 0.2, Vox: 0.2, Sumar: 0.3, event: 'Crisis Ley Amnistía' },
  { month: 'Abr', PP: 0.15, PSOE: 0.6, Vox: 0.1, Sumar: 0.2, event: 'Carta de Sánchez' },
  { month: 'May', PP: 0.1, PSOE: 0.1, Vox: 0.1, Sumar: 0.1 },
  { month: 'Jun', PP: 0.1, PSOE: 0.0, Vox: 0.1, Sumar: 0.1 },
];

export const INTERVIEW_QUOTES = [
  {
    id: 'E1',
    role: 'Gestor PP',
    quote: "Nuestro objetivo no es personalizar, sino señalar políticas dañinas.",
    reality: "Realidad: 81.5% de los videos virales son ataques negativos.",
    audioMock: "audio-pp"
  },
  {
    id: 'E4',
    role: 'Gestor Sumar',
    quote: "Queremos llegar a una audiencia joven con mensajes visuales y concretos.",
    reality: "Realidad: Mayor adopción de trends nativos (19%).",
    audioMock: "audio-sumar"
  }
];

export const THEORY_CARDS: TheoryCard[] = [
  {
    id: 'habermas',
    title: 'Habermas',
    year: '1981',
    color: 'bg-blue-500',
    shortDesc: 'La Esfera Pública. El debate racional crea consenso.',
    fullTitle: 'Teoría de la Acción Comunicativa',
    definition: 'Jürgen Habermas idealiza un espacio donde los ciudadanos debaten racionalmente sobre asuntos públicos, dejando de lado sus estatus sociales para buscar el consenso mediante argumentos lógicos.',
    implication: 'En TikTok, esto casi no existe. El debate racional es reemplazado por emociones rápidas y polarización.'
  },
  {
    id: 'castells',
    title: 'Castells',
    year: '2001',
    color: 'bg-purple-500',
    shortDesc: 'Ciberpolítica. Internet rompe las jerarquías.',
    fullTitle: 'La Galaxia Internet',
    definition: 'Manuel Castells argumenta que internet permite una "autocomunicación de masas". Los ciudadanos ya no dependen de los medios tradicionales (TV, radio) y pueden organizarse en redes horizontales.',
    implication: 'Es la base de la viralidad política, pero ahora está controlada por algoritmos opacos.'
  },
  {
    id: 'tiktok',
    title: 'Era TikTok',
    year: 'Hoy',
    color: 'bg-pink-500',
    shortDesc: 'Infoentretenimiento. "Politainment". Humor + Política.',
    fullTitle: 'Politainment & Algoritmos',
    definition: 'La fusión definitiva entre política y entretenimiento. El contenido debe ser visualmente estimulante, corto y emocional para retener la atención (Watch Time) en una economía de la atención saturada.',
    implication: 'Los partidos ya no buscan informar, sino entretener para que el algoritmo los recomiende.'
  }
];

export const CONCLUSION_CARDS: ConclusionCard[] = [
  {
    id: 'polarization',
    title: 'Polarización Afectiva',
    summary: 'El ataque como estrategia principal.',
    detail: 'El estudio concluye que el PP utiliza la negatividad (81.5%) y el humor (memes) para movilizar el rechazo hacia Pedro Sánchez, polarizando el debate sin ofrecer alternativas constructivas.',
    color: 'from-red-600 to-red-900'
  },
  {
    id: 'spectacle',
    title: 'Política Pop',
    summary: 'Infoentretenimiento vs. Información.',
    detail: 'Los políticos adoptan roles de "influencers". La música en tendencia, los cortes rápidos y la espectacularización priman sobre los argumentos. Es el triunfo definitivo del "Politainment".',
    color: 'from-yellow-500 to-orange-700'
  },
  {
    id: 'hybrid',
    title: 'Hibridación Mediática',
    summary: 'TV reciclada vs. Nativo.',
    detail: 'Aunque Sumar lidera en contenido nativo (19%), la mayoría de partidos sigue usando TikTok como un archivo de TV (cortes de mítines), desaprovechando el potencial creativo de la plataforma.',
    color: 'from-blue-600 to-indigo-900'
  }
];

export const INITIAL_COMMENTS: Comment[] = []; // Initial comments cleared as requested