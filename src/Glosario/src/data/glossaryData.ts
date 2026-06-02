// Etiquetas y iconos de categoría para el filtro y visualización
export type Category = 'metrics' | 'strategy' | 'advertising' | 'channels' | 'technology' | 'ai';

export const categoryLabels: Record<Category, { es: string; en: string }> = {
  metrics: { es: 'Métricas', en: 'Metrics' },
  strategy: { es: 'Estrategia', en: 'Strategy' },
  advertising: { es: 'Publicidad', en: 'Advertising' },
  channels: { es: 'Canales', en: 'Channels' },
  technology: { es: 'Tecnología', en: 'Technology' },
  ai: { es: 'IA', en: 'AI' },
};

export const categoryIcons: Record<Category, string> = {
  metrics: '📊',
  strategy: '🧭',
  advertising: '💡',
  channels: '🌐',
  technology: '🛠️',
  ai: '🤖',
};
// Alphabet array for navigation (A-Z, including Ñ for Spanish)
export const alphabet = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
export type GlossaryTerm = {
  id: string;
  term: { es: string; en: string };
  shortDefinition: { es: string; en: string };
  fullDefinition: { es: string; en: string };
  category: string;
  relatedTerms?: string[];
  isNew?: boolean;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'abandonment-rate',
    term: { es: 'Abandonment Rate', en: 'Abandonment Rate' },
    shortDefinition: {
      en: 'Percentage of initiated actions that are not completed by users.',
      es: 'Porcentaje de acciones iniciadas que los usuarios no completan.'
    },
    fullDefinition: {
      en: 'Abandonment rate refers to the percentage of initiated processes or actions—such as online purchases, form submissions, or website visits—that are prematurely terminated by users before completion, reflecting the level of friction or dissatisfaction encountered in the user journey and serves as a key metric for assessing the effectiveness of conversion optimization strategies and user experience enhancements.',
      es: 'La tasa de abandono se refiere al porcentaje de procesos o acciones iniciados—como compras en línea, envíos de formularios o visitas a sitios web—que los usuarios terminan prematuramente antes de completarlos, reflejando el nivel de fricción o insatisfacción en la experiencia del usuario y sirviendo como métrica clave para evaluar la efectividad de las estrategias de optimización de conversión y mejoras de experiencia.'
    },
    category: 'metrics',
    relatedTerms: ['conversion', 'user-experience'],
  },
  {
    id: 'above-the-fold',
    term: { es: 'Above the Fold', en: 'Above the Fold' },
    shortDefinition: {
      en: 'The part of a webpage visible without scrolling.',
      es: 'La parte de una página web visible sin hacer scroll.'
    },
    fullDefinition: {
      en: '"Above the fold" refers to the upper section of a webpage that is visible to users without the need for scrolling. It\'s prime real estate in the digital world, akin to the front page of a newspaper, where important content, headlines, and calls to action are strategically placed to capture immediate attention and engage users without requiring them to explore further down the page. It\'s like the shop window of the internet, where businesses strive to make a compelling first impression to entice users to delve deeper into their online offerings.',
      es: '"Above the fold" se refiere a la sección superior de una página web que es visible para los usuarios sin necesidad de desplazarse. Es un espacio privilegiado en el mundo digital, similar a la portada de un periódico, donde se colocan estratégicamente contenidos importantes, titulares y llamados a la acción para captar la atención inmediata y motivar a los usuarios a explorar más. Es como la vidriera de una tienda en internet, donde las empresas buscan causar una primera impresión atractiva para animar a los usuarios a profundizar en su oferta online.'
    },
    category: 'technology',
    relatedTerms: ['ux', 'web-design'],
  },
  {
    id: 'a-b-testing',
    term: { es: 'A/B Testing', en: 'A/B Testing' },
    shortDefinition: {
      en: 'Experiment comparing two or more variants to optimize results.',
      es: 'Experimento que compara dos o más variantes para optimizar resultados.'
    },
    fullDefinition: {
      en: 'A/B testing, often dubbed as split testing, is a methodological experimentation process in which two or more variants (A and B) of a product, webpage, or user experience are compared in a controlled environment to determine which variant yields the most favorable outcome, thereby facilitating data-driven decisions aimed at optimizing performance and enhancing user engagement.',
      es: 'El A/B testing, también llamado prueba dividida, es un proceso experimental metodológico en el que se comparan dos o más variantes (A y B) de un producto, página web o experiencia de usuario en un entorno controlado para determinar cuál variante produce el resultado más favorable, facilitando así decisiones basadas en datos para optimizar el rendimiento y mejorar la interacción del usuario.'
    },
    category: 'metrics',
    relatedTerms: ['experimentation', 'optimization'],
  },
  {
    id: 'access-log',
    term: { es: 'Access Log', en: 'Access Log' },
    shortDefinition: {
      en: 'A log file listing all requests for files on a website.',
      es: 'Archivo de registro que lista todas las solicitudes de archivos en un sitio web.'
    },
    fullDefinition: {
      en: 'A log file listing all requests for individual files made by people or bots on a website.',
      es: 'Un archivo de registro que lista todas las solicitudes de archivos individuales realizadas por personas o bots en un sitio web.'
    },
    category: 'technology',
    relatedTerms: ['server-log', 'analytics'],
  },
  {
    id: 'account-based-marketing',
    term: { es: 'Account Based Marketing (ABM)', en: 'Account Based Marketing (ABM)' },
    shortDefinition: {
      en: 'B2B marketing strategy focused on high-value accounts.',
      es: 'Estrategia de marketing B2B enfocada en cuentas de alto valor.'
    },
    fullDefinition: {
      en: 'Account-based marketing (ABM) is a strategic approach to B2B marketing that focuses on treating individual high-value accounts as markets in their own right, tailoring personalized campaigns and initiatives to resonate with the unique needs, pain points, and objectives of each targeted account, ultimately fostering deeper relationships and driving mutually beneficial outcomes.',
      es: 'El Account Based Marketing (ABM) es un enfoque estratégico de marketing B2B que trata a cuentas individuales de alto valor como mercados propios, personalizando campañas e iniciativas para adaptarse a las necesidades, retos y objetivos de cada cuenta objetivo, fomentando relaciones más profundas y resultados mutuamente beneficiosos.'
    },
    category: 'strategy',
    relatedTerms: ['b2b', 'personalization'],
  },
  {
    id: 'adaptive-web-design',
    term: { es: 'Adaptive Web Design', en: 'Adaptive Web Design' },
    shortDefinition: {
      en: 'Approach to web design with multiple layouts for different devices.',
      es: 'Enfoque de diseño web con múltiples diseños para diferentes dispositivos.'
    },
    fullDefinition: {
      en: 'Adaptive web design is an approach to creating websites that involves designing and developing multiple layouts and styles to accommodate various screen sizes, resolutions, and device capabilities. Unlike responsive design, which uses fluid grids and flexible elements to adapt to different viewport sizes, adaptive design involves creating distinct layouts for specific breakpoints or device categories. This allows the website to dynamically switch between different layouts based on the device detected, providing users with an optimized viewing experience tailored to their device\'s characteristics.',
      es: 'El diseño web adaptativo es un enfoque para crear sitios web que implica diseñar y desarrollar múltiples diseños y estilos para adaptarse a diferentes tamaños de pantalla, resoluciones y capacidades de dispositivos. A diferencia del diseño responsivo, que utiliza cuadrículas fluidas y elementos flexibles para adaptarse a diferentes tamaños de pantalla, el diseño adaptativo implica crear diseños distintos para puntos de quiebre o categorías de dispositivos específicos. Esto permite que el sitio web cambie dinámicamente entre diferentes diseños según el dispositivo detectado, brindando a los usuarios una experiencia optimizada adaptada a las características de su dispositivo.'
    },
    category: 'technology',
    relatedTerms: ['responsive-design', 'ux'],
  },
  {
    id: 'ad-blockers',
    term: { es: 'Ad Blockers', en: 'Ad Blockers' },
    shortDefinition: {
      en: 'Tools that filter out unwanted ads online.',
      es: 'Herramientas que filtran anuncios no deseados en línea.'
    },
    fullDefinition: {
      en: 'Ad blockers are digital gatekeepers that allow users to selectively filter out unwanted ads while browsing online. They give individuals greater control over their online environment and privacy preferences.',
      es: 'Los ad blockers son guardianes digitales que permiten a los usuarios filtrar selectivamente los anuncios no deseados mientras navegan en línea. Ofrecen mayor control sobre el entorno online y las preferencias de privacidad.'
    },
    category: 'technology',
    relatedTerms: ['privacy', 'ads'],
  },
  {
    id: 'ad-group',
    term: { es: 'Ad Group', en: 'Ad Group' },
    shortDefinition: {
      en: 'Collection of ads grouped by shared criteria in a campaign.',
      es: 'Conjunto de anuncios agrupados por criterios comunes en una campaña.'
    },
    fullDefinition: {
      en: 'An ad group is a structured collection of advertisements within an online advertising campaign that are grouped together based on shared criteria such as keywords, audience targeting, or campaign goals. It serves as a unit for organizing and managing related ads to optimize performance and relevance within digital advertising platforms.',
      es: 'Un ad group es una colección estructurada de anuncios dentro de una campaña de publicidad online que se agrupan según criterios compartidos como palabras clave, segmentación de audiencia u objetivos de campaña. Sirve para organizar y gestionar anuncios relacionados y optimizar su rendimiento y relevancia.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'campaign'],
  },
  {
    id: 'ad-keyword',
    term: { es: 'Ad Keyword', en: 'Ad Keyword' },
    shortDefinition: {
      en: 'Query that triggers paid results in search engines.',
      es: 'Consulta que activa resultados pagados en buscadores.'
    },
    fullDefinition: {
      en: 'The query entered into a search engine that triggers Paid results.',
      es: 'La consulta ingresada en un motor de búsqueda que activa resultados pagados.'
    },
    category: 'advertising',
    relatedTerms: ['keyword', 'search'],
  },
  {
    id: 'ad-network',
    term: { es: 'Ad Network', en: 'Ad Network' },
    shortDefinition: {
      en: 'Platform connecting advertisers with publishers for ads.',
      es: 'Plataforma que conecta anunciantes con editores para anuncios.'
    },
    fullDefinition: {
      en: 'An ad network is a platform or intermediary service that connects advertisers with publishers who want to display ads on their websites, apps, or other digital properties. Ad networks facilitate the buying and selling of advertising inventory across a wide range of publishers, allowing advertisers to reach their target audience across multiple websites or apps through a single interface.',
      es: 'Una ad network es una plataforma o servicio intermediario que conecta a los anunciantes con editores que desean mostrar anuncios en sus sitios web, apps u otras propiedades digitales. Facilita la compra y venta de inventario publicitario entre muchos editores, permitiendo a los anunciantes llegar a su audiencia objetivo a través de múltiples sitios o apps desde una sola interfaz.'
    },
    category: 'advertising',
    relatedTerms: ['ad-platform', 'ads'],
  },
  {
    id: 'ad-platform',
    term: { es: 'Ad Platform', en: 'Ad Platform' },
    shortDefinition: {
      en: 'System for managing and placing ads across channels.',
      es: 'Sistema para gestionar y colocar anuncios en varios canales.'
    },
    fullDefinition: {
      en: 'An ad platform refers to a digital system or service that facilitates the placement and management of advertisements across various channels such as websites, social media, mobile apps, and search engines.',
      es: 'Una ad platform es un sistema o servicio digital que facilita la colocación y gestión de anuncios en varios canales como sitios web, redes sociales, apps móviles y motores de búsqueda.'
    },
    category: 'advertising',
    relatedTerms: ['ad-network', 'ads'],
  },
  {
    id: 'ad-rank',
    term: { es: 'Ad Rank', en: 'Ad Rank' },
    shortDefinition: {
      en: 'Value used to determine ad position and visibility.',
      es: 'Valor usado para determinar la posición y visibilidad de un anuncio.'
    },
    fullDefinition: {
      en: 'A value used to determine your ad position (where ads are shown on a page relative to other ads) and whether your ads will show at all. Ad Rank is calculated using your bid amount, ad quality (including expected CTR, ad relevance, and landing page experience), the context of the person’s search, and the expected impact of extensions and other ad formats.',
      es: 'Un valor utilizado para determinar la posición de tu anuncio (dónde se muestra en la página respecto a otros anuncios) y si se mostrará o no. El Ad Rank se calcula usando tu puja, la calidad del anuncio (incluyendo CTR esperado, relevancia y experiencia de la landing), el contexto de la búsqueda y el impacto esperado de extensiones y otros formatos.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'sem'],
  },
  {
    id: 'advertising-agency',
    term: { es: 'Advertising Agency', en: 'Advertising Agency' },
    shortDefinition: {
      en: 'Firm specializing in creating and managing ad campaigns.',
      es: 'Empresa especializada en crear y gestionar campañas publicitarias.'
    },
    fullDefinition: {
      en: 'An advertising agency is a professional service firm that specializes in creating, planning, and executing advertising campaigns for businesses and organizations. These agencies typically offer a range of services, including market research, creative concept development, media planning and buying, campaign management, and performance analysis.',
      es: 'Una agencia de publicidad es una empresa de servicios profesionales especializada en crear, planificar y ejecutar campañas publicitarias para empresas y organizaciones. Suelen ofrecer servicios como investigación de mercado, desarrollo creativo, planificación y compra de medios, gestión de campañas y análisis de resultados.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'media-buying'],
  },
  {
    id: 'affiliate',
    term: { es: 'Affiliate', en: 'Affiliate' },
    shortDefinition: {
      en: 'Site that markets products/services sold by another for commission.',
      es: 'Sitio que promociona productos/servicios de otro a cambio de comisión.'
    },
    fullDefinition: {
      en: 'An affiliate site markets products or services that are actually sold by another website or business in exchange for fees or commissions.',
      es: 'Un sitio afiliado promociona productos o servicios que realmente vende otro sitio web o empresa, a cambio de comisiones.'
    },
    category: 'channels',
    relatedTerms: ['affiliate-marketing', 'partnership'],
  },
  {
    id: 'affiliate-marketing',
    term: { es: 'Affiliate Marketing', en: 'Affiliate Marketing' },
    shortDefinition: {
      en: 'Performance-based marketing rewarding third-party partners.',
      es: 'Marketing basado en resultados que recompensa a socios externos.'
    },
    fullDefinition: {
      en: 'Affiliate marketing is a performance-based marketing strategy where businesses (merchants or advertisers) reward third-party partners (affiliates or publishers) for driving traffic or sales to their products or services. In affiliate marketing, affiliates promote the merchant\'s offerings through various channels such as websites, blogs, social media, email newsletters, or online advertisements. When a visitor clicks on an affiliate link and completes a desired action, such as making a purchase or filling out a form, the affiliate earns a commission or a predetermined payment from the merchant.',
      es: 'El affiliate marketing es una estrategia de marketing basada en resultados donde las empresas (anunciantes) recompensan a socios externos (afiliados) por generar tráfico o ventas a sus productos o servicios. Los afiliados promocionan las ofertas del anunciante a través de sitios web, blogs, redes sociales, newsletters o anuncios online. Cuando un usuario realiza una acción deseada, como comprar o completar un formulario, el afiliado recibe una comisión.'
    },
    category: 'channels',
    relatedTerms: ['affiliate', 'performance-marketing'],
  },
  {
    id: 'agile-marketing',
    term: { es: 'Agile Marketing', en: 'Agile Marketing' },
    shortDefinition: {
      en: 'Iterative marketing approach focused on flexibility and speed.',
      es: 'Enfoque de marketing iterativo enfocado en flexibilidad y rapidez.'
    },
    fullDefinition: {
      en: 'Agile marketing is an iterative approach to marketing that emphasizes flexibility, collaboration, and rapid response to change. Inspired by the principles of agile software development, agile marketing involves breaking down marketing projects into smaller, manageable tasks or "sprints," which are executed in short cycles, typically ranging from one to four weeks. Teams work collaboratively, often in cross-functional groups, to prioritize tasks, adapt strategies, and deliver measurable results quickly.',
      es: 'El agile marketing es un enfoque iterativo de marketing que enfatiza la flexibilidad, la colaboración y la respuesta rápida al cambio. Inspirado en el desarrollo ágil de software, implica dividir proyectos de marketing en tareas pequeñas o "sprints" ejecutados en ciclos cortos. Los equipos colaboran para priorizar tareas, adaptar estrategias y entregar resultados medibles rápidamente.'
    },
    category: 'strategy',
    relatedTerms: ['agile', 'project-management'],
  },
  {
    id: 'ai-marketing',
    term: { es: 'AI Marketing', en: 'AI Marketing' },
    shortDefinition: {
      en: 'Use of AI and machine learning to optimize marketing.',
      es: 'Uso de IA y aprendizaje automático para optimizar el marketing.'
    },
    fullDefinition: {
      en: 'AI marketing, also known as artificial intelligence marketing, refers to the use of advanced machine learning algorithms and artificial intelligence techniques to analyze vast amounts of data, automate tasks, and optimize marketing efforts.',
      es: 'El AI marketing, o marketing de inteligencia artificial, se refiere al uso de algoritmos avanzados de machine learning e inteligencia artificial para analizar grandes volúmenes de datos, automatizar tareas y optimizar esfuerzos de marketing.'
    },
    category: 'ai',
    relatedTerms: ['machine-learning', 'automation'],
  },
  {
    id: 'ai-prompt',
    term: { es: 'AI Prompt', en: 'AI Prompt' },
    shortDefinition: {
      en: 'Instruction or input given to an AI system.',
      es: 'Instrucción o entrada dada a un sistema de IA.'
    },
    fullDefinition: {
      en: 'An AI prompt is a specific instruction or input provided to an artificial intelligence system, such as a language model, to generate a desired output or response. These prompts can vary widely in format, ranging from a simple sentence or phrase to a more complex set of instructions or context provided to guide the AI\'s output.',
      es: 'Un AI prompt es una instrucción o entrada específica proporcionada a un sistema de inteligencia artificial, como un modelo de lenguaje, para generar una respuesta deseada. Estos prompts pueden variar en formato, desde una simple frase hasta instrucciones o contexto más complejos para guiar la salida de la IA.'
    },
    category: 'ai',
    relatedTerms: ['prompt-engineering', 'ai'],
  },
  {
    id: 'algorithm',
    term: { es: 'Algorithm', en: 'Algorithm' },
    shortDefinition: {
      en: 'Set of calculations and rules for computer actions.',
      es: 'Conjunto de cálculos y reglas para acciones de un programa.'
    },
    fullDefinition: {
      en: 'A list of mathematical calculations and if/then statements that decide what action a computer program should take.',
      es: 'Una lista de cálculos matemáticos y sentencias if/then que determinan qué acción debe tomar un programa.'
    },
    category: 'technology',
    relatedTerms: ['programming', 'automation'],
  },
  {
    id: 'alt-text',
    term: { es: 'Alt Text', en: 'Alt Text' },
    shortDefinition: {
      en: 'Description of an image for accessibility and SEO.',
      es: 'Descripción de una imagen para accesibilidad y SEO.'
    },
    fullDefinition: {
      en: 'A description of an image, which usually isn’t displayed to the end user unless the image is undeliverable or a browser is used that doesn’t display images. Alt–text is essential because search engines can’t always tell one picture from another.',
      es: 'Descripción de una imagen, que normalmente no se muestra al usuario salvo que la imagen no se cargue o el navegador no muestre imágenes. El alt text es esencial porque los buscadores no siempre pueden distinguir una imagen de otra.'
    },
    category: 'technology',
    relatedTerms: ['seo', 'accessibility'],
  },
  {
    id: 'analytics',
    term: { es: 'Analytics', en: 'Analytics' },
    shortDefinition: {
      en: 'Process of collecting and analyzing data for insights.',
      es: 'Proceso de recopilar y analizar datos para obtener insights.'
    },
    fullDefinition: {
      en: 'Analytics refers to the process of collecting, processing, analyzing, and interpreting data to gain insights, make informed decisions, and optimize performance',
      es: 'Analytics se refiere al proceso de recopilar, procesar, analizar e interpretar datos para obtener insights, tomar decisiones informadas y optimizar el rendimiento.'
    },
    category: 'metrics',
    relatedTerms: ['data', 'reporting'],
  },
  {
    id: 'anchor-text',
    term: { es: 'Anchor Text', en: 'Anchor Text' },
    shortDefinition: {
      en: 'Clickable text in a hyperlink.',
      es: 'Texto clickeable en un hipervínculo.'
    },
    fullDefinition: {
      en: 'Texts that appear highlighted in a hypertext link that ultimately brings you to a specific webpage when clicked. They are only used for text backlinks, for images, it’s an alt attribute (see Alt text).',
      es: 'Textos que aparecen resaltados en un enlace de hipertexto y que llevan a una página web específica al hacer clic. Solo se usan para backlinks de texto; para imágenes, se usa el atributo alt.'
    },
    category: 'technology',
    relatedTerms: ['backlink', 'seo'],
  },
  {
    id: 'api',
    term: { es: 'Application Program Interface (API)', en: 'Application Program Interface (API)' },
    shortDefinition: {
      en: 'Set of rules and tools for software communication.',
      es: 'Conjunto de reglas y herramientas para la comunicación entre software.'
    },
    fullDefinition: {
      en: 'An Application Programming Interface (API) is a set of rules, protocols, and tools that allow different software applications to communicate and interact with each other. APIs define the methods and data formats that applications can use to request and exchange information or perform specific actions, such as retrieving data from a database, accessing a web service, or integrating with a third-party software platform.',
      es: 'Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas, protocolos y herramientas que permiten que diferentes aplicaciones de software se comuniquen e interactúen entre sí. Las APIs definen los métodos y formatos de datos que las aplicaciones pueden usar para solicitar e intercambiar información o realizar acciones específicas, como obtener datos de una base de datos, acceder a un servicio web o integrarse con una plataforma de terceros.'
    },
    category: 'technology',
    relatedTerms: ['integration', 'web-service'],
  },
  {
    id: 'authority-score',
    term: { es: 'Authority Score', en: 'Authority Score' },
    shortDefinition: {
      en: 'Metric to gauge a domain’s quality and influence on SEO.',
      es: 'Métrica para medir la calidad e influencia de un dominio en SEO.'
    },
    fullDefinition: {
      en: 'A proprietary Semrush compound metric used to gauge a domain’s overall quality and influence on SEO. The calculation is based on three main facets: Link Power: quality and quantity of backlinks; Organic Traffic: estimated monthly average of traffic; Spam Factors (Natural Profile): indicators of manipulation or spam in the link profile',
      es: 'Una métrica compuesta de Semrush utilizada para medir la calidad general e influencia de un dominio en SEO. El cálculo se basa en tres factores principales: Link Power (calidad y cantidad de backlinks), Tráfico Orgánico (promedio mensual estimado) y Factores de Spam (indicadores de manipulación o spam en el perfil de enlaces).'
    },
    category: 'metrics',
    relatedTerms: ['seo', 'domain-authority'],
  },
  {
    id: 'average-difficulty',
    term: { es: 'Average Difficulty', en: 'Average Difficulty' },
    shortDefinition: {
      en: 'Average keyword difficulty in a keyword list.',
      es: 'Dificultad promedio de palabras clave en una lista.'
    },
    fullDefinition: {
      en: 'A metric used in Semrush, located at the top of the keyword chart, is the combined average keyword difficulty of every keyword result in a Keyword Manager list. This can give you a general understanding of how hard it will be to run an SEO campaign in this keyword’s market. The higher the percentage, the more difficult it becomes to get a high ranking for each keyword.',
      es: 'Una métrica utilizada en Semrush, ubicada en la parte superior del gráfico de palabras clave, es la dificultad promedio combinada de todas las palabras clave en una lista de Keyword Manager. Esto da una idea general de la dificultad de posicionar en ese mercado. Cuanto mayor el porcentaje, más difícil será lograr un alto ranking para cada palabra clave.'
    },
    category: 'metrics',
    relatedTerms: ['keyword-difficulty', 'seo'],
  },
  {
    id: 'average-position',
    term: { es: 'Average Position', en: 'Average Position' },
    shortDefinition: {
      en: 'Average value of all your keyword rankings in a campaign.',
      es: 'Valor promedio de todos tus rankings de palabras clave en una campaña.'
    },
    fullDefinition: {
      en: 'The average value of all your rankings for the keywords in your campaign. In Semrush Position Tracking, for any keyword where you aren’t ranking, it will be calculated as a ranking of 100.',
      es: 'El valor promedio de todos tus rankings para las palabras clave en tu campaña. En el seguimiento de posiciones de Semrush, para cualquier palabra clave donde no tengas ranking, se calculará como un ranking de 100.'
    },
    category: 'metrics',
    relatedTerms: ['seo', 'ranking'],
  },
  {
    id: 'b2b-marketing',
    term: { es: 'B2B Marketing', en: 'B2B Marketing' },
    shortDefinition: {
      en: 'Marketing from one business to another.',
      es: 'Marketing de una empresa a otra.'
    },
    fullDefinition: {
      en: 'B2B marketing, also known as business-to-business marketing, refers to the process of promoting and selling products or services from one business to another. Unlike business-to-consumer (B2C) marketing, which targets individual consumers, B2B marketing focuses on meeting the needs of businesses, organizations, or professionals as customers.',
      es: 'El marketing B2B, también conocido como marketing de empresa a empresa, se refiere al proceso de promocionar y vender productos o servicios de una empresa a otra. A diferencia del marketing B2C, que se dirige a consumidores individuales, el B2B se enfoca en satisfacer las necesidades de empresas, organizaciones o profesionales como clientes.'
    },
    category: 'strategy',
    relatedTerms: ['b2c-marketing', 'business'],
  },
  {
    id: 'b2c-marketing',
    term: { es: 'B2C Marketing', en: 'B2C Marketing' },
    shortDefinition: {
      en: 'Marketing from business to individual consumers.',
      es: 'Marketing de empresa a consumidores individuales.'
    },
    fullDefinition: {
      en: 'B2C marketing, also known as business-to-consumer marketing, involves the promotion and sale of products or services directly to individual consumers. Unlike B2B marketing, which targets businesses as customers, B2C marketing focuses on reaching and appealing to individual consumers to generate sales and build brand loyalty.',
      es: 'El marketing B2C, también conocido como marketing de empresa a consumidor, implica la promoción y venta de productos o servicios directamente a consumidores individuales. A diferencia del B2B, que se dirige a empresas, el B2C se enfoca en llegar y atraer a consumidores para generar ventas y fidelidad de marca.'
    },
    category: 'strategy',
    relatedTerms: ['b2b-marketing', 'consumer'],
  },
  {
    id: 'backlinks',
    term: { es: 'Backlinks', en: 'Backlinks' },
    shortDefinition: {
      en: 'Incoming links to a website from another resource.',
      es: 'Enlaces entrantes a un sitio web desde otro recurso.'
    },
    fullDefinition: {
      en: 'Incoming links to a website or web page from another resource.',
      es: 'Enlaces entrantes a un sitio web o página web desde otro recurso.'
    },
    category: 'technology',
    relatedTerms: ['link-building', 'seo'],
  },
  {
    id: 'black-hat-seo',
    term: { es: 'Black Hat SEO', en: 'Black Hat SEO' },
    shortDefinition: {
      en: 'Unethical techniques to increase search rankings.',
      es: 'Técnicas poco éticas para aumentar el ranking en buscadores.'
    },
    fullDefinition: {
      en: 'The use of unethical or manipulative techniques to increase a website\'s search engine rankings.',
      es: 'El uso de técnicas poco éticas o manipuladoras para aumentar el posicionamiento de un sitio web en los motores de búsqueda.'
    },
    category: 'technology',
    relatedTerms: ['seo', 'white-hat-seo'],
  },
  {
    id: 'blogging',
    term: { es: 'Blogging', en: 'Blogging' },
    shortDefinition: {
      en: 'Creating and publishing content in blog format.',
      es: 'Crear y publicar contenido en formato de blog.'
    },
    fullDefinition: {
      en: 'Blogging refers to the practice of creating and publishing content on a website in the form of articles, posts, or entries, typically in chronological order. Blogging often involves sharing thoughts, ideas, and expertise with an audience, whether it\'s a personal blog maintained by an individual or a professional blog managed by a business or organization.',
      es: 'El blogging se refiere a la práctica de crear y publicar contenido en un sitio web en forma de artículos, publicaciones o entradas, generalmente en orden cronológico. Suele implicar compartir ideas, pensamientos y experiencia con una audiencia, ya sea en un blog personal o profesional.'
    },
    category: 'channels',
    relatedTerms: ['content-marketing', 'blog'],
  },
  {
    id: 'bot',
    term: { es: 'Bot', en: 'Bot' },
    shortDefinition: {
      en: 'Program that performs tasks autonomously.',
      es: 'Programa que realiza tareas de forma autónoma.'
    },
    fullDefinition: {
      en: 'A program that performs a task more or less autonomously. Search engines use bots to find and add web pages to their search indexes. Spammers often use bots to “scrape” content to plagiarize it for exploitation by the Spammer.',
      es: 'Un programa que realiza tareas de forma más o menos autónoma. Los motores de búsqueda usan bots para encontrar y agregar páginas web a sus índices. Los spammers suelen usar bots para “raspar” contenido y plagiarlo.'
    },
    category: 'technology',
    relatedTerms: ['crawler', 'automation'],
  },
  {
    id: 'bottom-of-the-funnel',
    term: { es: 'Bottom of the Funnel', en: 'Bottom of the Funnel' },
    shortDefinition: {
      en: 'Final stage in the marketing and sales funnel.',
      es: 'Etapa final en el embudo de marketing y ventas.'
    },
    fullDefinition: {
      en: 'The bottom of the funnel refers to the final stage in the marketing and sales funnel, where prospects are closest to making a purchase decision or converting into customers. At this stage, potential customers have moved through the earlier stages of awareness and consideration, and they are actively evaluating their options and ready to make a decision.',
      es: 'El bottom of the funnel se refiere a la etapa final del embudo de marketing y ventas, donde los prospectos están más cerca de tomar una decisión de compra o convertirse en clientes. En esta etapa, los clientes potenciales ya han pasado por las fases de awareness y consideración, y están evaluando opciones y listos para decidir.'
    },
    category: 'strategy',
    relatedTerms: ['marketing-funnel', 'conversion'],
  },
  {
    id: 'bounce-rate',
    term: { es: 'Bounce Rate', en: 'Bounce Rate' },
    shortDefinition: {
      en: 'Percentage of users who leave after viewing one page.',
      es: 'Porcentaje de usuarios que abandonan tras ver una sola página.'
    },
    fullDefinition: {
      en: 'A digital marketing metric that tells you the percentage of users that land on one page of a website and then leave the site without viewing any other pages.',
      es: 'Métrica de marketing digital que indica el porcentaje de usuarios que llegan a una página de un sitio web y luego se van sin ver otras páginas.'
    },
    category: 'metrics',
    relatedTerms: ['analytics', 'user-experience'],
  },
  {
    id: 'brand-awareness',
    term: { es: 'Brand Awareness', en: 'Brand Awareness' },
    shortDefinition: {
      en: 'Level of familiarity and recognition of a brand.',
      es: 'Nivel de familiaridad y reconocimiento de una marca.'
    },
    fullDefinition: {
      en: 'Brand awareness is the level of familiarity and recognition that a brand has among its target audience or within a specific market. It reflects how well consumers can recall or recognize a brand name, logo, or other brand elements when presented with them.',
      es: 'El brand awareness es el nivel de familiaridad y reconocimiento que una marca tiene entre su público objetivo o en un mercado específico. Refleja cuán bien los consumidores pueden recordar o reconocer el nombre, logo u otros elementos de la marca.'
    },
    category: 'metrics',
    relatedTerms: ['branding', 'brand-equity'],
  },
  {
    id: 'brand-equity',
    term: { es: 'Brand Equity', en: 'Brand Equity' },
    shortDefinition: {
      en: 'Intangible value and perception of a brand.',
      es: 'Valor intangible y percepción de una marca.'
    },
    fullDefinition: {
      en: 'Brand equity refers to the intangible value and perception that a brand holds in the minds of consumers. It encompasses the overall reputation, recognition, and loyalty that consumers associate with a brand based on their experiences, perceptions, and interactions with it over time.',
      es: 'El brand equity se refiere al valor intangible y la percepción que una marca tiene en la mente de los consumidores. Incluye la reputación, reconocimiento y lealtad que los consumidores asocian con una marca a lo largo del tiempo.'
    },
    category: 'metrics',
    relatedTerms: ['brand-awareness', 'branding'],
  },
  {
    id: 'brand-identity',
    term: { es: 'Brand Identity', en: 'Brand Identity' },
    shortDefinition: {
      en: 'Visual, verbal, and conceptual elements of a brand.',
      es: 'Elementos visuales, verbales y conceptuales de una marca.'
    },
    fullDefinition: {
      en: 'Brand identity is the visual, verbal, and conceptual elements that collectively convey the essence, personality, and values of a brand to its target audience. It encompasses the unique combination of brand attributes, such as the brand name, logo, colors, typography, imagery, messaging, voice, and tone, as well as the overall brand positioning and perception.',
      es: 'La brand identity son los elementos visuales, verbales y conceptuales que transmiten la esencia, personalidad y valores de una marca a su público objetivo. Incluye el nombre, logo, colores, tipografía, imágenes, mensajes, voz, tono y posicionamiento.'
    },
    category: 'strategy',
    relatedTerms: ['branding', 'brand-equity'],
  },
  {
    id: 'brand-loyalty',
    term: { es: 'Brand Loyalty', en: 'Brand Loyalty' },
    shortDefinition: {
      en: 'Consistent preference or attachment to a brand.',
      es: 'Preferencia o apego constante a una marca.'
    },
    fullDefinition: {
      en: 'Brand loyalty refers to the strong, positive, and consistent preference or attachment that consumers have towards a particular brand over time. It reflects a customer\'s willingness to repeatedly purchase or engage with a specific brand\'s products or services, despite the availability of other options or competitive offerings in the marketplace.',
      es: 'La brand loyalty es la preferencia o apego fuerte, positivo y constante que los consumidores tienen hacia una marca a lo largo del tiempo. Refleja la disposición del cliente a comprar o interactuar repetidamente con una marca, incluso ante otras opciones.'
    },
    category: 'strategy',
    relatedTerms: ['brand-equity', 'brand-awareness'],
  },
  {
    id: 'brand-manager',
    term: { es: 'Brand Manager', en: 'Brand Manager' },
    shortDefinition: {
      en: 'Professional responsible for managing a brand.',
      es: 'Profesional responsable de gestionar una marca.'
    },
    fullDefinition: {
      en: 'A brand manager is a marketing professional responsible for overseeing the development, implementation, and management of a brand\'s marketing strategies and initiatives. Their primary focus is on building and maintaining the brand\'s identity, reputation, and equity in the marketplace.',
      es: 'Un brand manager es un profesional de marketing responsable de supervisar el desarrollo, implementación y gestión de las estrategias e iniciativas de marketing de una marca. Su enfoque principal es construir y mantener la identidad, reputación y valor de la marca.'
    },
    category: 'strategy',
    relatedTerms: ['branding', 'brand-identity'],
  },
  {
    id: 'brand-marketing',
    term: { es: 'Brand Marketing', en: 'Brand Marketing' },
    shortDefinition: {
      en: 'Strategic approach to promoting and positioning a brand.',
      es: 'Enfoque estratégico para promocionar y posicionar una marca.'
    },
    fullDefinition: {
      en: 'Brand marketing is a strategic approach to promoting and positioning a brand in the marketplace to build awareness, loyalty, and preference among target consumers. It involves creating and communicating a distinct identity, personality, and value proposition for the brand that resonates with its target audience.',
      es: 'El brand marketing es un enfoque estratégico para promocionar y posicionar una marca en el mercado, con el objetivo de construir awareness, lealtad y preferencia entre los consumidores. Implica crear y comunicar una identidad, personalidad y propuesta de valor distintiva.'
    },
    category: 'strategy',
    relatedTerms: ['branding', 'brand-identity'],
  },
  {
    id: 'breadcrumbs',
    term: { es: 'Breadcrumbs', en: 'Breadcrumbs' },
    shortDefinition: {
      en: 'Website navigation that shows user location and path.',
      es: 'Navegación web que muestra la ubicación y ruta del usuario.'
    },
    fullDefinition: {
      en: 'Website navigation in a horizontal line above the main content, which helps the user to understand where they are on the site and how to get back to the root sections.',
      es: 'Navegación del sitio en una línea horizontal sobre el contenido principal, que ayuda al usuario a entender dónde está y cómo volver a las secciones principales.'
    },
    category: 'technology',
    relatedTerms: ['navigation', 'ux'],
  },
  {
    id: 'buyer-persona',
    term: { es: 'Buyer Persona', en: 'Buyer Persona' },
    shortDefinition: {
      en: 'Fictional representation of an ideal customer.',
      es: 'Representación ficticia de un cliente ideal.'
    },
    fullDefinition: {
      en: 'A buyer persona is a fictional representation of an ideal customer based on market research, data analysis, and insights gathered from real customers. It is a detailed profile that includes demographic information, behaviors, motivations, goals, challenges, and preferences of a specific segment of the target audience.',
      es: 'Un buyer persona es una representación ficticia de un cliente ideal basada en investigación de mercado, análisis de datos y conocimientos de clientes reales. Es un perfil detallado que incluye información demográfica, comportamientos, motivaciones, objetivos, retos y preferencias de un segmento específico del público objetivo.'
    },
    category: 'strategy',
    relatedTerms: ['customer', 'segmentation'],
  },
  // --- C ---
      // --- N ---
      // --- O ---
      {
        id: 'online-directories',
        term: { es: 'Online Directories', en: 'Online Directories' },
        shortDefinition: {
          en: 'Websites that compile and categorize business information, allowing users to find and connect with businesses.',
          es: 'Sitios web que recopilan y categorizan información de negocios, permitiendo a los usuarios encontrar y conectar con empresas.'
        },
        fullDefinition: {
          en: "Websites that compile and categorize business information, allowing users to find and connect with businesses. They typically include details such as the business's name, address, and phone number (NAP), website, hours of operation, and sometimes additional information like customer reviews, services offered, and photos. Examples of online directories include Google Business Profile, Yellow Pages, and TripAdvisor.",
          es: "Sitios web que recopilan y categorizan información de negocios, permitiendo a los usuarios encontrar y conectar con empresas. Normalmente incluyen detalles como el nombre, dirección y teléfono (NAP), sitio web, horario de atención y, a veces, información adicional como reseñas de clientes, servicios ofrecidos y fotos. Ejemplos de directorios online incluyen Google Business Profile, Páginas Amarillas y TripAdvisor."
        },
        category: 'local-seo',
      },
      {
        id: 'online-review-management',
        term: { es: 'Online Review Management', en: 'Online Review Management' },
        shortDefinition: {
          en: 'The process of monitoring reviews across all platforms and actively responding to feedback.',
          es: 'El proceso de monitorear reseñas en todas las plataformas y responder activamente a los comentarios.'
        },
        fullDefinition: {
          en: 'The process of monitoring reviews across all platforms, actively responding to feedback, reporting fake reviews, and addressing complaints to maintain a positive online reputation.',
          es: 'El proceso de monitorear reseñas en todas las plataformas, responder activamente a los comentarios, reportar reseñas falsas y atender quejas para mantener una reputación online positiva.'
        },
        category: 'local-seo',
      },
      {
        id: 'online-visibility',
        term: { es: 'Online Visibility', en: 'Online Visibility' },
        shortDefinition: {
          en: 'The overall presence of a business or brand on the Internet.',
          es: 'La presencia general de un negocio o marca en Internet.'
        },
        fullDefinition: {
          en: 'The overall presence of a business or brand on the Internet. Improving online visibility allows a business to reach more customers and make more money. This can be achieved through digital marketing campaigns, SEO, PPC, Public Relations, social media marketing (SMM), blogging, and outreach among other strategies.',
          es: 'La presencia general de un negocio o marca en Internet. Mejorar la visibilidad online permite a una empresa llegar a más clientes y aumentar sus ingresos. Esto se puede lograr mediante campañas de marketing digital, SEO, PPC, relaciones públicas, marketing en redes sociales (SMM), blogging y outreach, entre otras estrategias.'
        },
        category: 'strategy',
      },
      {
        id: 'open-graph',
        term: { es: 'Open Graph', en: 'Open Graph' },
        shortDefinition: {
          en: 'A form of markup that enables your content to become a rich object when shared via social networks.',
          es: 'Un tipo de marcado que permite que tu contenido se convierta en un objeto enriquecido al compartirse en redes sociales.'
        },
        fullDefinition: {
          en: 'A form of markup that you can add to the metadata of a webpage that will enable your content to become a rich object when shared via social networks. This protocol allows objects on your website like videos, images, and audio files to appear in the timeline when your link is over Twitter, for example.',
          es: 'Un tipo de marcado que puedes agregar a los metadatos de una página web para que tu contenido se convierta en un objeto enriquecido al compartirse en redes sociales. Este protocolo permite que objetos como videos, imágenes y archivos de audio aparezcan en la línea de tiempo cuando tu enlace se comparte, por ejemplo, en Twitter.'
        },
        category: 'technology',
      },
      {
        id: 'organic-search-results',
        term: { es: 'Organic Search Results', en: 'Organic Search Results' },
        shortDefinition: {
          en: 'The search results that are unpaid and generally organized by relevance, popularity, and common usage.',
          es: 'Los resultados de búsqueda que no son pagados y generalmente se organizan por relevancia, popularidad y uso común.'
        },
        fullDefinition: {
          en: 'The search results that are unpaid and generally organized by relevance, popularity, and common usage.',
          es: 'Los resultados de búsqueda que no son pagados y generalmente se organizan por relevancia, popularidad y uso común.'
        },
        category: 'seo',
      },
      {
        id: 'orphaned-pages',
        term: { es: 'Orphaned Pages', en: 'Orphaned Pages' },
        shortDefinition: {
          en: 'Pages of a website that have no internal links pointing to them from within the website.',
          es: 'Páginas de un sitio web que no tienen enlaces internos apuntando a ellas desde el propio sitio.'
        },
        fullDefinition: {
          en: 'Pages of a website that have no internal links pointing to them from within the website. This can be harmful to SEO as orphaned pages are harder for search engines and users to locate than pages with internal links.',
          es: 'Páginas de un sitio web que no tienen enlaces internos apuntando a ellas desde el propio sitio. Esto puede ser perjudicial para el SEO, ya que las páginas huérfanas son más difíciles de localizar tanto para los motores de búsqueda como para los usuarios.'
        },
        category: 'seo',
      },
      {
        id: 'outreach',
        term: { es: 'Outreach', en: 'Outreach' },
        shortDefinition: {
          en: 'A method of proactively acquiring backlinks to your website by contacting other website owners.',
          es: 'Método para adquirir backlinks de forma proactiva contactando a otros propietarios de sitios web.'
        },
        fullDefinition: {
          en: 'A method of proactively acquiring backlinks to your website by contacting other website owners.',
          es: 'Método para adquirir backlinks de forma proactiva contactando a otros propietarios de sitios web.'
        },
        category: 'seo',
      },
    // --- C ---
  {
    id: 'canonical-url',
    term: { es: 'Canonical URL', en: 'Canonical URL' },
    shortDefinition: {
      en: 'Preferred URL to avoid duplicate content issues.',
      es: 'URL preferida para evitar problemas de contenido duplicado.'
    },
    fullDefinition: {
      en: 'A solution for solving issues related to duplicate content. If you have two webpages on your site that have duplicate content (for example, example.com/shoes/red and example.com/shop/red–shoes), making one of them the canonical URL tells search engines you want that page to be the one displayed in search results over the other. The html element for this would look like: <link rel=canonical href= “https://example.com/shoes/red” />',
      es: 'Una solución para resolver problemas relacionados con contenido duplicado. Si tienes dos páginas web en tu sitio con contenido duplicado (por ejemplo, example.com/shoes/red y example.com/shop/red–shoes), hacer que una de ellas sea la URL canónica le indica a los motores de búsqueda que deseas que esa página sea la que se muestre en los resultados de búsqueda sobre la otra. El elemento HTML para esto sería: <link rel=canonical href= “https://example.com/shoes/red” />'
    },
    category: 'seo',
    relatedTerms: ['duplicate-content', 'search-engine'],
  },
  {
    id: 'carousel',
    term: { es: 'Carousel', en: 'Carousel' },
    shortDefinition: {
      en: 'SERP feature with scrollable images.',
      es: 'Función de la SERP con imágenes desplazables.'
    },
    fullDefinition: {
      en: 'A SERP Feature consisting of a set of scrollable images displayed near the top of a SERP. The Image Carousel differs from the standard image result in that the Carousel will bring you to a new SERP for the image that you select.',
      es: 'Una función de la SERP que consiste en un conjunto de imágenes desplazables que se muestran cerca de la parte superior de una SERP. El Carrusel de Imágenes difiere del resultado de imagen estándar en que el Carrusel te llevará a una nueva SERP para la imagen que selecciones.'
    },
    category: 'seo',
    relatedTerms: ['serp', 'images'],
  },
  {
    id: 'chatgpt',
    term: { es: 'ChatGPT', en: 'ChatGPT' },
    shortDefinition: {
      en: 'Conversational AI developed by OpenAI.',
      es: 'IA conversacional desarrollada por OpenAI.'
    },
    fullDefinition: {
      en: 'ChatGPT is an advanced conversational AI developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture. It is designed to engage in natural language conversations with users, providing responses and generating text based on the input it receives. It leverages machine learning techniques, including deep learning and natural language processing, to continuously improve its language understanding and generation capabilities.',
      es: 'ChatGPT es una IA conversacional avanzada desarrollada por OpenAI, basada en la arquitectura GPT (Generative Pre-trained Transformer). Está diseñada para entablar conversaciones en lenguaje natural con los usuarios, proporcionando respuestas y generando texto según la entrada que recibe. Utiliza técnicas de aprendizaje automático, incluido el aprendizaje profundo y el procesamiento de lenguaje natural, para mejorar continuamente su comprensión y generación de lenguaje.'
    },
    category: 'ai',
    relatedTerms: ['ai', 'gpt'],
  },
  {
    id: 'churn-rate',
    term: { es: 'Churn Rate', en: 'Churn Rate' },
    shortDefinition: {
      en: 'Percentage of customers who stop using a product or service.',
      es: 'Porcentaje de clientes que dejan de usar un producto o servicio.'
    },
    fullDefinition: {
      en: "Churn rate is the percentage of customers or subscribers who stop using a product or service over a specified period of time. It is a key metric used to measure customer attrition or defection and assess the health of a business's customer base. A high churn rate indicates that a significant number of customers are discontinuing their relationship with the business, which can negatively impact revenue, profitability, and long-term growth.",
      es: 'La tasa de abandono es el porcentaje de clientes o suscriptores que dejan de usar un producto o servicio durante un período de tiempo determinado. Es una métrica clave para medir la pérdida o deserción de clientes y evaluar la salud de la base de clientes de un negocio. Una tasa de abandono alta indica que un número significativo de clientes está terminando su relación con la empresa, lo que puede afectar negativamente los ingresos, la rentabilidad y el crecimiento a largo plazo.'
    },
    category: 'metrics',
    relatedTerms: ['retention', 'customer'],
  },
  {
    id: 'citation-building',
    term: { es: 'Citation Building', en: 'Citation Building' },
    shortDefinition: {
      en: 'Process of obtaining business mentions across websites.',
      es: 'Proceso de obtener menciones de un negocio en sitios web.'
    },
    fullDefinition: {
      en: "The process for obtaining mentions or citations of a business's NAP and other pertinent details across diverse websites. These citations act as references to the business and are typically found on online business directories and review sites.",
      es: 'El proceso de obtener menciones o citas del NAP de un negocio y otros detalles relevantes en diversos sitios web. Estas citas actúan como referencias para el negocio y normalmente se encuentran en directorios de empresas en línea y sitios de reseñas.'
    },
    category: 'seo',
    relatedTerms: ['local-seo', 'directory'],
  },
  {
    id: 'click-potential',
    term: { es: 'Click Potential', en: 'Click Potential' },
    shortDefinition: {
      en: 'Predicted chance of getting a click-through from SERP.',
      es: 'Probabilidad estimada de obtener un clic desde la SERP.'
    },
    fullDefinition: {
      en: 'Click potential is a metric used to gauge the predicted chance of getting a click-through to your website if your search result occupies the top position of the SERP. Click Potential depends on the presence of SERP Features that would hinder searchers from clicking on organic website results.',
      es: 'El potencial de clic es una métrica utilizada para estimar la probabilidad de obtener un clic hacia tu sitio web si tu resultado de búsqueda ocupa la primera posición de la SERP. El potencial de clic depende de la presencia de funciones de la SERP que puedan dificultar que los usuarios hagan clic en los resultados orgánicos.'
    },
    category: 'metrics',
    relatedTerms: ['serp', 'ctr'],
  },
  {
    id: 'clickstream-data',
    term: { es: 'Clickstream Data', en: 'Clickstream Data' },
    shortDefinition: {
      en: 'Digital records of user interactions on a website.',
      es: 'Registros digitales de interacciones de usuarios en un sitio web.'
    },
    fullDefinition: {
      en: 'Clickstream data refers to the digital records or logs of user interactions and activities as they navigate through a website or application. This data captures every action taken by a user, including clicks, page views, time spent on each page, navigation paths, interactions with elements such as buttons or forms, and other behaviors. It provides valuable insights into user behavior, preferences, and engagement patterns, allowing businesses to analyze and understand how users interact with their digital properties.',
      es: 'Los datos de clickstream se refieren a los registros digitales o logs de las interacciones y actividades de los usuarios mientras navegan por un sitio web o aplicación. Estos datos capturan cada acción realizada por un usuario, incluidos clics, vistas de página, tiempo en cada página, rutas de navegación, interacciones con elementos como botones o formularios y otros comportamientos. Proporcionan información valiosa sobre el comportamiento, las preferencias y los patrones de interacción de los usuarios, permitiendo a las empresas analizar y comprender cómo interactúan los usuarios con sus propiedades digitales.'
    },
    category: 'technology',
    relatedTerms: ['analytics', 'user-behavior'],
  },
  {
    id: 'clickthrough-rate',
    term: { es: 'Clickthrough Rate (CTR)', en: 'Clickthrough Rate (CTR)' },
    shortDefinition: {
      en: 'Percentage of users who click on a link or CTA.',
      es: 'Porcentaje de usuarios que hacen clic en un enlace o CTA.'
    },
    fullDefinition: {
      en: 'Clickthrough rate (CTR) is a digital marketing metric that measures the percentage of users who click on a specific link or call-to-action (CTA) out of the total number of users who view it. CTR is commonly used in online advertising, email marketing, and other digital channels to assess the effectiveness and engagement level of campaigns and content. A higher CTR indicates that a larger proportion of users are clicking on the link or CTA, demonstrating greater interest and engagement with the content. CTR is calculated by dividing the number of clicks on a link by the number of impressions (or views) of that link, then multiplying by 100 to express it as a percentage.',
      es: 'La tasa de clics (CTR) es una métrica de marketing digital que mide el porcentaje de usuarios que hacen clic en un enlace o llamado a la acción (CTA) específico sobre el total de usuarios que lo ven. El CTR se utiliza comúnmente en publicidad online, email marketing y otros canales digitales para evaluar la efectividad y el nivel de compromiso de campañas y contenidos. Un CTR más alto indica que una mayor proporción de usuarios está haciendo clic en el enlace o CTA, demostrando mayor interés y compromiso con el contenido. El CTR se calcula dividiendo el número de clics en un enlace por el número de impresiones (o vistas) de ese enlace y luego multiplicando por 100 para expresarlo como porcentaje.'
    },
    category: 'metrics',
    relatedTerms: ['ctr', 'advertising'],
  },
  {
    id: 'common-keywords',
    term: { es: 'Common Keywords', en: 'Common Keywords' },
    shortDefinition: {
      en: 'Keywords for which multiple domains rank in Google.',
      es: 'Palabras clave para las que varios dominios se posicionan en Google.'
    },
    fullDefinition: {
      en: 'Keywords for which multiple domains rank among the top Google search results.',
      es: 'Palabras clave para las que varios dominios se posicionan entre los mejores resultados de búsqueda de Google.'
    },
    category: 'seo',
    relatedTerms: ['keyword', 'ranking'],
  },
  {
    id: 'competitor-analysis',
    term: { es: 'Competitor Analysis', en: 'Competitor Analysis' },
    shortDefinition: {
      en: 'Process of evaluating competitors in your market.',
      es: 'Proceso de evaluar a los competidores en tu mercado.'
    },
    fullDefinition: {
      en: "Competitor analysis is the process of evaluating and understanding the strengths, weaknesses, strategies, and performance of competitors operating in the same industry or market segment. It involves gathering and analyzing data on competitors' products, services, pricing, distribution channels, marketing tactics, customer base, and overall market positioning. The goal of competitor analysis is to gain insights into the competitive landscape, identify opportunities and threats, and inform strategic decision-making.",
      es: 'El análisis de la competencia es el proceso de evaluar y comprender las fortalezas, debilidades, estrategias y desempeño de los competidores que operan en la misma industria o segmento de mercado. Implica recopilar y analizar datos sobre los productos, servicios, precios, canales de distribución, tácticas de marketing, base de clientes y posicionamiento general en el mercado de los competidores. El objetivo del análisis de la competencia es obtener información sobre el panorama competitivo, identificar oportunidades y amenazas e informar la toma de decisiones estratégicas.'
    },
    category: 'strategy',
    relatedTerms: ['market', 'benchmark'],
  },
  {
    id: 'competitors-google-ads',
    term: { es: 'Competitors in Google Ads', en: 'Competitors in Google Ads' },
    shortDefinition: {
      en: 'Websites that rank for the same queries in Google Paid results.',
      es: 'Sitios web que se posicionan para las mismas consultas en resultados pagados de Google.'
    },
    fullDefinition: {
      en: 'The websites that rank for the same queries as the analyzed domain in Google Paid results.',
      es: 'Los sitios web que se posicionan para las mismas consultas que el dominio analizado en los resultados pagados de Google.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'sem'],
  },
  {
    id: 'competitors-organic-search',
    term: { es: 'Competitors in Organic Search', en: 'Competitors in Organic Search' },
    shortDefinition: {
      en: 'Sites that compete in organic search results.',
      es: 'Sitios que compiten en los resultados de búsqueda orgánica.'
    },
    fullDefinition: {
      en: 'Sites that compete with the analyzed website in organic search results.',
      es: 'Sitios que compiten con el sitio web analizado en los resultados de búsqueda orgánica.'
    },
    category: 'seo',
    relatedTerms: ['seo', 'competition'],
  },
  {
    id: 'content',
    term: { es: 'Content', en: 'Content' },
    shortDefinition: {
      en: 'Part of a web page intended to have value for the user.',
      es: 'Parte de una página web destinada a tener valor para el usuario.'
    },
    fullDefinition: {
      en: 'The part of a web page intended to have value for and be of interest to the user. Advertising, navigation, branding, and boilerplate HTML are not usually considered to be content. Page content refers to all the information contained in a website. Page content can be displayed as text, links, images, audio, animation, or videos. Search engines have a limited ability to recognize images, animation, video, and audio. In these instances, search engines use file names or alt attributes to determine the contents of a page. Therefore, important information needs to be given in text–form to make it accessible to search engines.',
      es: 'La parte de una página web destinada a tener valor y ser de interés para el usuario. La publicidad, la navegación, la marca y el HTML de plantilla generalmente no se consideran contenido. El contenido de la página se refiere a toda la información contenida en un sitio web. El contenido de la página puede mostrarse como texto, enlaces, imágenes, audio, animación o videos. Los motores de búsqueda tienen una capacidad limitada para reconocer imágenes, animaciones, videos y audio. En estos casos, los motores de búsqueda utilizan los nombres de archivo o los atributos alt para determinar el contenido de una página. Por lo tanto, la información importante debe proporcionarse en forma de texto para que sea accesible a los motores de búsqueda.'
    },
    category: 'seo',
    relatedTerms: ['webpage', 'information'],
  },
  {
    id: 'content-management-system',
    term: { es: 'Content Management System (CMS)', en: 'Content Management System (CMS)' },
    shortDefinition: {
      en: 'Programs that separate webmaster tasks from content creation.',
      es: 'Programas que separan tareas del webmaster de la creación de contenido.'
    },
    fullDefinition: {
      en: 'Programs such as WordPress, which separate most of the mundane Webmaster tasks from content creation so that a publisher can be effective without acquiring or even understanding sophisticated coding skills if they so choose.',
      es: 'Programas como WordPress, que separan la mayoría de las tareas mundanas del webmaster de la creación de contenido para que un editor pueda ser efectivo sin adquirir o incluso comprender habilidades de codificación sofisticadas si así lo desea.'
    },
    category: 'technology',
    relatedTerms: ['cms', 'wordpress'],
  },
  {
    id: 'content-marketing',
    term: { es: 'Content Marketing', en: 'Content Marketing' },
    shortDefinition: {
      en: 'Strategic approach to creating and distributing valuable content.',
      es: 'Enfoque estratégico para crear y distribuir contenido valioso.'
    },
    fullDefinition: {
      en: 'A strategic marketing approach that entails creating and distributing content (blog posts, ebooks, videos, infographics, etc.) that is valuable to an audience. The valuable content attracts attention to a brand, builds an audience, and eventually helps grow revenue.',
      es: 'Un enfoque estratégico de marketing que implica crear y distribuir contenido (entradas de blog, libros electrónicos, videos, infografías, etc.) que sea valioso para una audiencia. El contenido valioso atrae la atención hacia una marca, construye una audiencia y, finalmente, ayuda a aumentar los ingresos.'
    },
    category: 'strategy',
    relatedTerms: ['content', 'strategy'],
  },
  {
    id: 'content-strategy',
    term: { es: 'Content Strategy', en: 'Content Strategy' },
    shortDefinition: {
      en: 'Comprehensive plan for content creation and management.',
      es: 'Plan integral para la creación y gestión de contenido.'
    },
    fullDefinition: {
      en: 'Content strategy is a comprehensive plan or framework that guides the creation, publication, distribution, and management of content across various channels and platforms. It involves defining the goals, objectives, target audience, messaging, and key performance indicators (KPIs) for content initiatives, as well as outlining the processes, resources, and workflows needed to execute the strategy effectively.',
      es: 'La estrategia de contenidos es un plan o marco integral que guía la creación, publicación, distribución y gestión de contenido en diversos canales y plataformas. Implica definir los objetivos, la audiencia objetivo, el mensaje y los indicadores clave de rendimiento (KPI) para las iniciativas de contenido, así como describir los procesos, recursos y flujos de trabajo necesarios para ejecutar la estrategia de manera efectiva.'
    },
    category: 'strategy',
    relatedTerms: ['content', 'planning'],
  },
  {
    id: 'conversion',
    term: { es: 'Conversion (Goal)', en: 'Conversion (Goal)' },
    shortDefinition: {
      en: 'Achievement of a quantifiable goal on a website.',
      es: 'Logro de un objetivo cuantificable en un sitio web.'
    },
    fullDefinition: {
      en: 'Achievement of a quantifiable goal on a website. Ad clicks, sign-ups, and sales are examples of conversions.',
      es: 'Logro de un objetivo cuantificable en un sitio web. Los clics en anuncios, los registros y las ventas son ejemplos de conversiones.'
    },
    category: 'metrics',
    relatedTerms: ['goal', 'conversion-rate'],
  },
  {
    id: 'conversion-path',
    term: { es: 'Conversion Path', en: 'Conversion Path' },
    shortDefinition: {
      en: 'Series of steps leading to a conversion.',
      es: 'Serie de pasos que llevan a una conversión.'
    },
    fullDefinition: {
      en: 'A conversion path refers to the series of steps or interactions that a user takes on a website or digital platform leading up to a desired action or conversion, such as making a purchase, filling out a form, or subscribing to a newsletter. It typically involves multiple touchpoints and may encompass various stages of the user journey, from initial awareness to consideration and ultimately conversion.',
      es: 'Una ruta de conversión se refiere a la serie de pasos o interacciones que un usuario realiza en un sitio web o plataforma digital que conducen a una acción o conversión deseada, como realizar una compra, completar un formulario o suscribirse a un boletín. Normalmente implica múltiples puntos de contacto y puede abarcar varias etapas del recorrido del usuario, desde la conciencia inicial hasta la consideración y, finalmente, la conversión.'
    },
    category: 'metrics',
    relatedTerms: ['conversion', 'journey'],
  },
  {
    id: 'conversion-rate',
    term: { es: 'Conversion Rate', en: 'Conversion Rate' },
    shortDefinition: {
      en: 'Percentage of visitors who complete a desired action.',
      es: 'Porcentaje de visitantes que completan una acción deseada.'
    },
    fullDefinition: {
      en: 'Conversion rate is a key performance metric in digital marketing that measures the percentage of website visitors or users who complete a desired action or conversion out of the total number of visitors or users who were exposed to the action. The desired action can vary depending on the specific goals of the website or campaign, such as making a purchase, filling out a form, subscribing to a newsletter, or downloading a whitepaper. Conversion rate is calculated by dividing the number of conversions by the total number of visitors or users, then multiplying by 100 to express it as a percentage.',
      es: 'La tasa de conversión es una métrica clave de rendimiento en marketing digital que mide el porcentaje de visitantes o usuarios de un sitio web que completan una acción o conversión deseada sobre el total de visitantes o usuarios expuestos a la acción. La acción deseada puede variar según los objetivos específicos del sitio web o campaña, como realizar una compra, completar un formulario, suscribirse a un boletín o descargar un libro blanco. La tasa de conversión se calcula dividiendo el número de conversiones por el número total de visitantes o usuarios y luego multiplicando por 100 para expresarlo como porcentaje.'
    },
    category: 'metrics',
    relatedTerms: ['conversion', 'goal'],
  },
  {
    id: 'conversion-rate-optimization',
    term: { es: 'Conversion Rate Optimization (CRO)', en: 'Conversion Rate Optimization (CRO)' },
    shortDefinition: {
      en: 'Process of improving conversion effectiveness.',
      es: 'Proceso de mejorar la efectividad de la conversión.'
    },
    fullDefinition: {
      en: 'Conversion rate optimization (CRO) is the process of improving the effectiveness of a website, landing page, or digital marketing campaign in converting visitors into customers or achieving other desired actions. It involves systematically analyzing user behavior, identifying barriers to conversion, and implementing strategic changes to optimize the user experience and increase the likelihood of desired outcomes.',
      es: 'La optimización de la tasa de conversión (CRO) es el proceso de mejorar la efectividad de un sitio web, página de destino o campaña de marketing digital para convertir visitantes en clientes o lograr otras acciones deseadas. Implica analizar sistemáticamente el comportamiento del usuario, identificar barreras para la conversión e implementar cambios estratégicos para optimizar la experiencia del usuario y aumentar la probabilidad de resultados deseados.'
    },
    category: 'strategy',
    relatedTerms: ['conversion', 'optimization'],
  },
  {
    id: 'core-web-vitals',
    term: { es: 'Core Web Vitals', en: 'Core Web Vitals' },
    shortDefinition: {
      en: 'Google initiative for measuring URL performance.',
      es: 'Iniciativa de Google para medir el rendimiento de las URLs.'
    },
    fullDefinition: {
      en: 'An initiative by Google to highlight and describe a set of specific factors that shows URL performance grouped by status (Poor, Needs Improvement, Good), key metrics (CLS, FID, LCP), and URL groups (groups of similar web pages). The report is based on three metrics measured by actual user data: LCP, FID, and CLS.',
      es: 'Una iniciativa de Google para resaltar y describir un conjunto de factores específicos que muestran el rendimiento de las URL agrupadas por estado (Malo, Necesita mejorar, Bueno), métricas clave (CLS, FID, LCP) y grupos de URL (grupos de páginas web similares). El informe se basa en tres métricas medidas por datos reales de usuarios: LCP, FID y CLS.'
    },
    category: 'metrics',
    relatedTerms: ['web-vitals', 'performance'],
  },
  {
    id: 'core-web-vitals-semrush',
    term: { es: 'Core Web Vitals (in Semrush)', en: 'Core Web Vitals (in Semrush)' },
    shortDefinition: {
      en: 'Set of metrics in Site Audit for web performance.',
      es: 'Conjunto de métricas en Site Audit para el rendimiento web.'
    },
    fullDefinition: {
      en: 'A set of metrics in Site Audit that measure the loading performance, interactivity, and visual stability of a website. Specifically, it measures the Largest Contentful Paint (LCP), which judges the perceived load speed of the page, and the Cumulative Layout Shift (CLS), which quantifies the amount of unexpected layout shift in the visible page content. The third Vital is called First Input Delay (FID), which quantifies the user experience when the user first interacts with the page. However, this is a user-centric metric that cannot be recreated in a lab environment so, instead, Site Audit uses Total Blocking Time (TBT), which, according to Google, is an excellent lab-based proxy for FID.',
      es: 'Un conjunto de métricas en Site Audit que miden el rendimiento de carga, la interactividad y la estabilidad visual de un sitio web. Específicamente, mide el Largest Contentful Paint (LCP), que evalúa la velocidad de carga percibida de la página, y el Cumulative Layout Shift (CLS), que cuantifica la cantidad de cambios inesperados de diseño en el contenido visible de la página. La tercera métrica se llama First Input Delay (FID), que cuantifica la experiencia del usuario cuando interactúa por primera vez con la página. Sin embargo, esta es una métrica centrada en el usuario que no puede recrearse en un entorno de laboratorio, por lo que Site Audit utiliza Total Blocking Time (TBT), que, según Google, es un excelente sustituto en laboratorio para FID.'
    },
    category: 'metrics',
    relatedTerms: ['web-vitals', 'site-audit'],
  },
  // --- D ---
  {
    id: 'declined-keywords',
    term: { es: 'Declined Keywords', en: 'Declined Keywords' },
    shortDefinition: {
      en: 'Keywords with declining rankings but still in top 100.',
      es: 'Palabras clave que han bajado de posición pero siguen en el top 100.'
    },
    fullDefinition: {
      en: 'In Semrush, these are keywords for which a domain has seen a decline in rankings but still remains in the top 100 ranking positions.',
      es: 'En Semrush, son palabras clave para las que un dominio ha visto una disminución en el ranking pero aún permanece en las 100 primeras posiciones.'
    },
    category: 'seo',
    relatedTerms: ['keywords', 'ranking'],
  },
  {
    id: 'destination-site',
    term: { es: 'Destination Site', en: 'Destination Site' },
    shortDefinition: {
      en: 'Site visited after leaving a domain.',
      es: 'Sitio que el usuario visita después de salir de un dominio.'
    },
    fullDefinition: {
      en: 'The site that the user visits directly after leaving a domain.',
      es: 'El sitio que el usuario visita directamente después de salir de un dominio.'
    },
    category: 'metrics',
    relatedTerms: ['traffic', 'analytics'],
  },
  {
    id: 'digital-marketing',
    term: { es: 'Digital Marketing', en: 'Digital Marketing' },
    shortDefinition: {
      en: 'Promotion of products/services via digital channels.',
      es: 'Promoción de productos/servicios a través de canales digitales.'
    },
    fullDefinition: {
      en: 'Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, and brands to target audiences. It encompasses a wide range of online tactics and strategies aimed at reaching, engaging, and converting customers through various digital touchpoints.',
      es: 'El marketing digital se refiere al uso de canales, plataformas y tecnologías digitales para promocionar productos, servicios y marcas a audiencias objetivo. Incluye una amplia gama de tácticas y estrategias online para alcanzar, involucrar y convertir clientes a través de diferentes puntos de contacto digitales.'
    },
    category: 'strategy',
    relatedTerms: ['advertising', 'channels'],
  },
  {
    id: 'direct-marketing',
    term: { es: 'Direct Marketing', en: 'Direct Marketing' },
    shortDefinition: {
      en: 'Promotional strategy with direct communication to customers.',
      es: 'Estrategia promocional con comunicación directa al cliente.'
    },
    fullDefinition: {
      en: 'Direct marketing is a promotional strategy that involves communicating directly with potential customers to promote products or services and elicit a measurable response. Unlike traditional mass marketing approaches, direct marketing targets specific individuals or groups with personalized messages and offers delivered through various channels, such as direct mail, email, telemarketing, text messaging, social media, and targeted online advertising.',
      es: 'El marketing directo es una estrategia promocional que implica comunicarse directamente con clientes potenciales para promocionar productos o servicios y obtener una respuesta medible. A diferencia del marketing masivo tradicional, el marketing directo se dirige a individuos o grupos específicos con mensajes y ofertas personalizadas a través de canales como correo directo, email, telemarketing, mensajes de texto, redes sociales y publicidad online segmentada.'
    },
    category: 'strategy',
    relatedTerms: ['advertising', 'personalization'],
  },
  {
    id: 'direct-traffic',
    term: { es: 'Direct Traffic', en: 'Direct Traffic' },
    shortDefinition: {
      en: 'Traffic from users entering your site URL directly.',
      es: 'Tráfico de usuarios que ingresan la URL directamente.'
    },
    fullDefinition: {
      en: 'Traffic from users navigating to your site through a browser\'s address bar without going through a third party.',
      es: 'Tráfico de usuarios que navegan a tu sitio a través de la barra de direcciones del navegador sin pasar por un tercero.'
    },
    category: 'metrics',
    relatedTerms: ['traffic', 'analytics'],
  },
  {
    id: 'disavow',
    term: { es: 'Disavow', en: 'Disavow' },
    shortDefinition: {
      en: 'Tell Google to ignore certain backlinks.',
      es: 'Indicar a Google que ignore ciertos backlinks.'
    },
    fullDefinition: {
      en: 'If your backlink profile includes a high number of spammy, artificial, or low–quality inbound links that may be harming your rankings – and don’t have the ability to get them removed for a legitimate reason (e.g., the link exists on a site you have no control over) – you can use Google’s Disavow Tool tool to tell Google to ignore those links.',
      es: 'Si tu perfil de backlinks incluye muchos enlaces entrantes de baja calidad, artificiales o spam que pueden estar perjudicando tu ranking – y no puedes eliminarlos por una razón legítima (por ejemplo, el enlace está en un sitio que no controlas) – puedes usar la herramienta Disavow de Google para pedirle que los ignore.'
    },
    category: 'seo',
    relatedTerms: ['backlink', 'google'],
  },
  {
    id: 'disavow-file',
    term: { es: 'Disavow File', en: 'Disavow File' },
    shortDefinition: {
      en: 'List of backlinks to be ignored by Google.',
      es: 'Lista de backlinks que Google debe ignorar.'
    },
    fullDefinition: {
      en: 'A list of backlinks that can be sent to Google in order to not take them into consideration when reviewing your site for a potential Google Penalty. If you have backlinks that may create the risk of receiving a Google Penalty, you can add them to a Disavow list and send the information to Google. In Semrush, you are able to create a disavow txt file in a Backlink Audit campaign.',
      es: 'Una lista de backlinks que se puede enviar a Google para que no los tome en cuenta al revisar tu sitio por una posible penalización. Si tienes backlinks que pueden crear el riesgo de recibir una penalización de Google, puedes agregarlos a una lista de Disavow y enviar la información a Google. En Semrush, puedes crear un archivo disavow txt en una campaña de Backlink Audit.'
    },
    category: 'seo',
    relatedTerms: ['backlink', 'penalty'],
  },
  {
    id: 'display-ads',
    term: { es: 'Display Ads', en: 'Display Ads' },
    shortDefinition: {
      en: 'Online ads combining text, images, and links.',
      es: 'Anuncios online que combinan texto, imágenes y enlaces.'
    },
    fullDefinition: {
      en: 'A type of online advertisement that combines text, images, and a URL that links to a website where a customer can learn more about or buy products. These ads can be static with an image or animated with multiple images, videos, or changing text. Some display ads educate about the product, while others are designed to entertain and engage through simple games or puzzles. Banner ads are a common form of display ads.',
      es: 'Un tipo de anuncio online que combina texto, imágenes y una URL que enlaza a un sitio donde el cliente puede obtener más información o comprar productos. Estos anuncios pueden ser estáticos con una imagen o animados con varias imágenes, videos o texto cambiante. Algunos anuncios display educan sobre el producto, mientras que otros están diseñados para entretener y atraer mediante juegos o acertijos simples. Los banners son una forma común de anuncios display.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'banner'],
  },
  {
    id: 'display-advertising',
    term: { es: 'Display Advertising', en: 'Display Advertising' },
    shortDefinition: {
      en: 'Promotion through visual ads on digital platforms.',
      es: 'Promoción mediante anuncios visuales en plataformas digitales.'
    },
    fullDefinition: {
      en: 'Display advertising is the practice of promoting products, services, or brands through visual advertisements that are displayed on websites, mobile apps, or other digital platforms. These ads typically consist of images, graphics, videos, or interactive elements and are placed strategically within relevant content or on designated ad spaces across the internet.',
      es: 'La publicidad display es la práctica de promocionar productos, servicios o marcas mediante anuncios visuales que se muestran en sitios web, aplicaciones móviles u otras plataformas digitales. Estos anuncios suelen consistir en imágenes, gráficos, videos o elementos interactivos y se colocan estratégicamente dentro de contenido relevante o en espacios publicitarios designados en internet.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'digital-marketing'],
  },
  {
    id: 'duplicate-content',
    term: { es: 'Duplicate Content', en: 'Duplicate Content' },
    shortDefinition: {
      en: 'Content that appears in more than one location online.',
      es: 'Contenido que aparece en más de una ubicación en internet.'
    },
    fullDefinition: {
      en: 'Content that appears in more than one location on the Internet. Duplicate content can confuse search engines when deciding which page to index in a search, and in turn, this hurts the website’s SEO.',
      es: 'Contenido que aparece en más de una ubicación en Internet. El contenido duplicado puede confundir a los motores de búsqueda al decidir qué página indexar en una búsqueda y, en consecuencia, perjudica el SEO del sitio web.'
    },
    category: 'seo',
    relatedTerms: ['content', 'seo'],
  },
  // --- E ---
  {
    id: 'earned-media',
    term: { es: 'Earned Media', en: 'Earned Media' },
    shortDefinition: {
      en: 'Publicity gained through unpaid channels.',
      es: 'Publicidad obtenida a través de canales no pagados.'
    },
    fullDefinition: {
      en: 'Earned media refers to publicity or exposure that a brand, product, or service receives through unpaid channels, typically as a result of positive word-of-mouth, media coverage, or social sharing by customers, influencers, journalists, or other third-party sources. Unlike paid media, which involves advertising and promotional activities that require payment, earned media is generated organically and is based on the merit of the brand\'s offerings, reputation, or newsworthy events.',
      es: 'Los medios ganados se refieren a la publicidad o exposición que una marca, producto o servicio recibe a través de canales no pagados, generalmente como resultado de recomendaciones, cobertura mediática o difusión en redes sociales por parte de clientes, influencers, periodistas u otras fuentes externas. A diferencia de los medios pagados, que implican actividades publicitarias que requieren pago, los medios ganados se generan de forma orgánica y se basan en el mérito de la marca, su reputación o eventos noticiosos.'
    },
    category: 'branding',
    relatedTerms: ['media', 'publicity'],
  },
  {
    id: 'ecommerce',
    term: { es: 'Ecommerce', en: 'Ecommerce' },
    shortDefinition: {
      en: 'Buying and selling goods or services online.',
      es: 'Compra y venta de bienes o servicios en línea.'
    },
    fullDefinition: {
      en: 'E-commerce, short for electronic commerce, refers to the buying and selling of goods, products, or services over the internet. It involves conducting commercial transactions electronically, often through online platforms, websites, or mobile applications. E-commerce enables businesses to reach a global audience, operate 24/7, and facilitate transactions without the need for physical storefronts or face-to-face interactions.',
      es: 'El comercio electrónico, abreviado como e-commerce, se refiere a la compra y venta de bienes, productos o servicios a través de internet. Implica realizar transacciones comerciales electrónicamente, a menudo mediante plataformas online, sitios web o aplicaciones móviles. El e-commerce permite a las empresas llegar a una audiencia global, operar 24/7 y facilitar transacciones sin necesidad de tiendas físicas o interacción presencial.'
    },
    category: 'technology',
    relatedTerms: ['online-store', 'transaction'],
  },
  {
    id: 'email-marketing',
    term: { es: 'Email Marketing', en: 'Email Marketing' },
    shortDefinition: {
      en: 'Strategy of sending promotional messages via email.',
      es: 'Estrategia de enviar mensajes promocionales por correo electrónico.'
    },
    fullDefinition: {
      en: 'Email marketing is a digital marketing strategy that involves sending targeted promotional messages, offers, or information to a group of recipients via email. It is a direct and cost-effective method of communicating with customers, prospects, or subscribers to build relationships, drive engagement, and achieve business objectives.',
      es: 'El email marketing es una estrategia de marketing digital que consiste en enviar mensajes promocionales, ofertas o información a un grupo de destinatarios por correo electrónico. Es un método directo y rentable de comunicarse con clientes, prospectos o suscriptores para construir relaciones, fomentar la participación y lograr objetivos comerciales.'
    },
    category: 'advertising',
    relatedTerms: ['email', 'campaign'],
  },
  {
    id: 'engagement-rate-social-analytics',
    term: { es: 'Engagement rate (Social Analytics)', en: 'Engagement rate (Social Analytics)' },
    shortDefinition: {
      en: 'Likes and comments divided by reach, times 100.',
      es: 'Likes y comentarios divididos por alcance, multiplicado por 100.'
    },
    fullDefinition: {
      en: 'A total number of likes and comments on an Instagram or Facebook post, divided by the number of people who saw the post, multiplied by 100.',
      es: 'El número total de likes y comentarios en una publicación de Instagram o Facebook, dividido por el número de personas que vieron la publicación, multiplicado por 100.'
    },
    category: 'metrics',
    relatedTerms: ['social-media', 'analytics'],
  },
  {
    id: 'engagement-rate-social-tracker',
    term: { es: 'Engagement rate (Social Tracker)', en: 'Engagement rate (Social Tracker)' },
    shortDefinition: {
      en: 'Engagement relative to audience and posts.',
      es: 'Engagement relativo al tamaño de la audiencia y cantidad de publicaciones.'
    },
    fullDefinition: {
      en: 'A metric that shows how much engagement the social profile was able to get relative to the size of their audience and amount of posts. The formula we use to calculate the engagement rate number is: <total engagement rate> = <total engagement> / <number of posts> / <audience> * 10000',
      es: 'Una métrica que muestra cuánto engagement pudo obtener el perfil social en relación con el tamaño de su audiencia y la cantidad de publicaciones. La fórmula utilizada es: <tasa de engagement total> = <engagement total> / <número de publicaciones> / <audiencia> * 10000.'
    },
    category: 'metrics',
    relatedTerms: ['social-media', 'analytics'],
  },
  {
    id: 'estimated-accuracy',
    term: { es: 'Estimated Accuracy', en: 'Estimated Accuracy' },
    shortDefinition: {
      en: 'Metric that gauges the accuracy of traffic data.',
      es: 'Métrica que mide la precisión de los datos de tráfico.'
    },
    fullDefinition: {
      en: 'A metric in the Traffic Analytics report that gauges the accuracy of the data presented. Since accuracy is dependent on the size of the data sample used to estimate the domain traffic, larger websites will generally have higher accuracy than less popular websites.',
      es: 'Una métrica en el informe de Traffic Analytics que mide la precisión de los datos presentados. Dado que la precisión depende del tamaño de la muestra de datos utilizada para estimar el tráfico del dominio, los sitios web más grandes generalmente tendrán mayor precisión que los menos populares.'
    },
    category: 'metrics',
    relatedTerms: ['traffic', 'analytics'],
  },
  {
    id: 'estimated-traffic',
    term: { es: 'Estimated Traffic', en: 'Estimated Traffic' },
    shortDefinition: {
      en: 'Estimated amount of traffic for a website.',
      es: 'Cantidad estimada de tráfico para un sitio web.'
    },
    fullDefinition: {
      en: 'A metric calculated by Semrush showing the estimated amount of traffic for a given website. There are three tools in Semrush that can estimate website traffic: Domain Analytics, Traffic Analytics, and Position Tracking. In Domain Analytics, we present estimated organic and paid traffic based on the keyword positions that we see a website ranking for, the monthly volume of those searches, and average click-through rates per position. This estimation is solely based on traffic from Google search (either organic or paid). The second place is Traffic Analytics and Market Explorer. This tool estimates the website’s total traffic based on clickstream data and the estimation takes into account traffic from multiple sources – search, direct, referral, social, and advertising traffic. Position Tracking has an estimated organic or paid traffic metric that is based on the local search volume and the rankings that the domain occupies for keywords that are being tracked in the campaign. In this tool, estimated traffic represents a daily estimated number of visits.',
      es: 'Una métrica calculada por Semrush que muestra la cantidad estimada de tráfico para un sitio web. Hay tres herramientas en Semrush que pueden estimar el tráfico de un sitio web: Domain Analytics, Traffic Analytics y Position Tracking. En Domain Analytics, se presenta el tráfico orgánico y pagado estimado según las posiciones de palabras clave que vemos para un sitio web, el volumen mensual de esas búsquedas y las tasas de clic promedio por posición. Esta estimación se basa únicamente en el tráfico de búsqueda de Google (orgánico o pagado). El segundo lugar es Traffic Analytics y Market Explorer. Esta herramienta estima el tráfico total del sitio web en función de los datos de clickstream y la estimación tiene en cuenta el tráfico de múltiples fuentes: búsqueda, directo, referido, social y publicidad. Position Tracking tiene una métrica de tráfico orgánico o pagado estimado basada en el volumen de búsqueda local y los rankings que el dominio ocupa para las palabras clave que se están rastreando en la campaña. En esta herramienta, el tráfico estimado representa un número estimado diario de visitas.'
    },
    category: 'metrics',
    relatedTerms: ['traffic', 'analytics'],
  },
  // --- F ---
  {
    id: 'facebook-engagement',
    term: { es: 'Facebook Engagement', en: 'Facebook Engagement' },
    shortDefinition: {
      en: 'Sum of shares, likes, reactions, and comments on Facebook posts.',
      es: 'Suma de compartidos, likes, reacciones y comentarios en publicaciones de Facebook.'
    },
    fullDefinition: {
      en: 'A sum of shares, likes, reactions (wow\'s, sad\'s, angry\'s, etc.), and comments made on all posts during the selected time period.',
      es: 'Suma de compartidos, likes, reacciones (wow, triste, enojado, etc.) y comentarios hechos en todas las publicaciones durante el período seleccionado.'
    },
    category: 'metrics',
    relatedTerms: ['facebook', 'social-media'],
  },
  {
    id: 'featured-snippet',
    term: { es: 'Featured Snippet', en: 'Featured Snippet' },
    shortDefinition: {
      en: 'SERP feature with summarized answers at the top.',
      es: 'Función de la SERP con respuestas resumidas en la parte superior.'
    },
    fullDefinition: {
      en: 'A SERP Feature that appears at the top of some Google search results and gives summarized answers to specific questions asked within Google.',
      es: 'Una función de la SERP que aparece en la parte superior de algunos resultados de búsqueda de Google y da respuestas resumidas a preguntas específicas realizadas en Google.'
    },
    category: 'seo',
    relatedTerms: ['serp', 'google'],
  },
  {
    id: 'follow-links',
    term: { es: 'Follow Links', en: 'Follow Links' },
    shortDefinition: {
      en: 'Links that influence the ranking of the linked site.',
      es: 'Enlaces que influyen en el ranking del sitio enlazado.'
    },
    fullDefinition: {
      en: 'Links that have an influence on the rankings of the linked site. These links help communicate a signal of trust in a web page to search engines.',
      es: 'Enlaces que influyen en el ranking del sitio enlazado. Estos enlaces ayudan a comunicar una señal de confianza en una página web a los motores de búsqueda.'
    },
    category: 'seo',
    relatedTerms: ['backlink', 'seo'],
  },
  // --- G ---
  {
    id: 'gdpr',
    term: { es: 'GDPR', en: 'GDPR' },
    shortDefinition: {
      en: 'EU regulation for data protection and privacy.',
      es: 'Reglamento de la UE para protección de datos y privacidad.'
    },
    fullDefinition: {
      en: 'The General Data Protection Regulation (GDPR) is a comprehensive data protection and privacy regulation implemented by the European Union (EU) to safeguard the personal data of individuals within the EU and the European Economic Area (EEA). GDPR aims to give individuals greater control over their personal data and strengthen privacy rights by imposing strict requirements on how organizations collect, process, store, and protect personal data.',
      es: 'El Reglamento General de Protección de Datos (RGPD) es una regulación integral de protección de datos y privacidad implementada por la Unión Europea (UE) para salvaguardar los datos personales de las personas dentro de la UE y el Espacio Económico Europeo (EEE). El RGPD busca dar a los individuos mayor control sobre sus datos personales y fortalecer los derechos de privacidad imponiendo requisitos estrictos sobre cómo las organizaciones recopilan, procesan, almacenan y protegen los datos personales.'
    },
    category: 'technology',
    relatedTerms: ['privacy', 'data'],
  },
  {
    id: 'google-adsense',
    term: { es: 'Google AdSense', en: 'Google AdSense' },
    shortDefinition: {
      en: 'Program for serving targeted ads on websites.',
      es: 'Programa para mostrar anuncios segmentados en sitios web.'
    },
    fullDefinition: {
      en: 'Google AdSense is a program run by Google through which website publishers in the Google Network of content sites serve text, images, video, or interactive media advertisements that are targeted to the site content and audience. These advertisements are administered, sorted, and maintained by Google.',
      es: 'Google AdSense es un programa gestionado por Google mediante el cual los editores de sitios web en la Red de contenido de Google muestran anuncios de texto, imágenes, video o medios interactivos que están segmentados según el contenido y la audiencia del sitio. Estos anuncios son administrados, clasificados y mantenidos por Google.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'google'],
  },
  {
    id: 'google-algorithm',
    term: { es: 'Google Algorithm', en: 'Google Algorithm' },
    shortDefinition: {
      en: 'Rules-based system Google uses to rank search results.',
      es: 'Sistema de reglas que Google usa para clasificar resultados de búsqueda.'
    },
    fullDefinition: {
      en: 'Algorithms are a list of mathematical calculations and if/then statements that decide what action a computer program should take. The Google algorithm is the rules-based system Google uses to sort through hundreds of billions of websites to deliver relevant results to users’ search queries. The results are ranked in order of relevance on the search engine results page (SERP). The algorithm also uses personal context, such as your current location and past search history, to tailor the results.',
      es: 'Los algoritmos son una lista de cálculos matemáticos y declaraciones if/then que deciden qué acción debe tomar un programa informático. El algoritmo de Google es el sistema de reglas que Google utiliza para clasificar cientos de miles de millones de sitios web y ofrecer resultados relevantes a las consultas de los usuarios. Los resultados se ordenan por relevancia en la página de resultados del buscador (SERP). El algoritmo también utiliza el contexto personal, como la ubicación actual y el historial de búsqueda, para personalizar los resultados.'
    },
    category: 'technology',
    relatedTerms: ['search', 'serp'],
  },
  {
    id: 'google-analytics',
    term: { es: 'Google Analytics (GA)', en: 'Google Analytics (GA)' },
    shortDefinition: {
      en: 'Free web analytics service by Google.',
      es: 'Servicio gratuito de analítica web de Google.'
    },
    fullDefinition: {
      en: 'A free web analytics service provided by Google. It brings you detailed analytics about the activity on your website.',
      es: 'Un servicio gratuito de analítica web proporcionado por Google. Ofrece análisis detallados sobre la actividad en tu sitio web.'
    },
    category: 'technology',
    relatedTerms: ['analytics', 'google'],
  },
  {
    id: 'googlebot',
    term: { es: 'GoogleBot (robot, spider, crawler)', en: 'GoogleBot (robot, spider, crawler)' },
    shortDefinition: {
      en: 'Google’s program for crawling and indexing web pages.',
      es: 'Programa de Google para rastrear e indexar páginas web.'
    },
    fullDefinition: {
      en: 'Google’s program that performs a task more or less autonomously. Search engines use bots to find and add web pages to their search indexes. Spammers often use bots to “scrape” content to plagiarize it for exploitation by the Spammer.',
      es: 'El programa de Google que realiza tareas de forma más o menos autónoma. Los motores de búsqueda usan bots para encontrar y agregar páginas web a sus índices. Los spammers a menudo usan bots para “raspar” contenido y plagiarlo para su explotación.'
    },
    category: 'technology',
    relatedTerms: ['crawler', 'search'],
  },
  {
    id: 'google-business-profile',
    term: { es: 'Google Business Profile', en: 'Google Business Profile' },
    shortDefinition: {
      en: 'Free tool for managing business presence on Google.',
      es: 'Herramienta gratuita para gestionar la presencia de negocios en Google.'
    },
    fullDefinition: {
      en: 'A free Google tool that local businesses can use to manage their presence on Google Search and Google Maps. It enables businesses to display essential information, interact with customers by responding to reviews and questions, and upload photos and updates. It also provides insights on customer interactions like calls and website visits. By keeping their profile updated, businesses can enhance visibility, improve local search rankings, and attract more customers.',
      es: 'Una herramienta gratuita de Google que los negocios locales pueden usar para gestionar su presencia en Google Search y Google Maps. Permite mostrar información esencial, interactuar con clientes respondiendo reseñas y preguntas, y subir fotos y actualizaciones. También ofrece información sobre interacciones de clientes como llamadas y visitas al sitio web. Mantener el perfil actualizado ayuda a mejorar la visibilidad, el posicionamiento local y atraer más clientes.'
    },
    category: 'technology',
    relatedTerms: ['google', 'local-seo'],
  },
  {
    id: 'google-looker-studio',
    term: { es: 'Google Looker Studio', en: 'Google Looker Studio' },
    shortDefinition: {
      en: 'Free tool for creating visual reports from data.',
      es: 'Herramienta gratuita para crear reportes visuales a partir de datos.'
    },
    fullDefinition: {
      en: 'A free online tool that lets you customize visual reports using data from various sources.',
      es: 'Una herramienta online gratuita que permite personalizar reportes visuales usando datos de diversas fuentes.'
    },
    category: 'technology',
    relatedTerms: ['reporting', 'data'],
  },
  {
    id: 'google-review-link',
    term: { es: 'Google Review Link', en: 'Google Review Link' },
    shortDefinition: {
      en: 'URL for customers to leave reviews on Google.',
      es: 'URL para que los clientes dejen reseñas en Google.'
    },
    fullDefinition: {
      en: 'A URL that takes customers to the review section of your Google Business Profile. This link simplifies the review process by guiding customers straight to where they can leave their feedback.',
      es: 'Una URL que lleva a los clientes a la sección de reseñas de tu Perfil de Negocio de Google. Este enlace simplifica el proceso de dejar una reseña guiando a los clientes directamente al lugar donde pueden dejar su opinión.'
    },
    category: 'technology',
    relatedTerms: ['review', 'google'],
  },
  {
    id: 'google-search-console',
    term: { es: 'Google Search Console', en: 'Google Search Console' },
    shortDefinition: {
      en: 'Free analytics service for search visibility and performance.',
      es: 'Servicio gratuito de analítica para visibilidad y rendimiento en búsquedas.'
    },
    fullDefinition: {
      en: 'A free analytics service (formerly titled Webmaster Tools) provided by Google that offers data on a domain’s search visibility and performance. It can be used in the assessment of a website’s crawlability and SEO.',
      es: 'Un servicio gratuito de analítica (antes llamado Webmaster Tools) proporcionado por Google que ofrece datos sobre la visibilidad y el rendimiento de un dominio en las búsquedas. Puede usarse para evaluar la capacidad de rastreo y el SEO de un sitio web.'
    },
    category: 'technology',
    relatedTerms: ['analytics', 'seo'],
  },
  {
    id: 'google-search-text-ad-keywords',
    term: { es: 'Google Search Text Ad Keywords', en: 'Google Search Text Ad Keywords' },
    shortDefinition: {
      en: 'Keywords targeted in Google search ads campaigns.',
      es: 'Palabras clave objetivo en campañas de anuncios de búsqueda de Google.'
    },
    fullDefinition: {
      en: 'Keywords that a domain has targeted with their search ads campaigns.',
      es: 'Palabras clave que un dominio ha dirigido en sus campañas de anuncios de búsqueda.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'keywords'],
  },
  {
    id: 'google-search-text-ads-bottom',
    term: { es: 'Google Search Text Ads Bottom', en: 'Google Search Text Ads Bottom' },
    shortDefinition: {
      en: 'Ad block below organic results in Google search.',
      es: 'Bloque de anuncios debajo de los resultados orgánicos en la búsqueda de Google.'
    },
    fullDefinition: {
      en: 'The advertising block of Google Ads that appears below the Organic results in Google’s search results.',
      es: 'El bloque de anuncios de Google Ads que aparece debajo de los resultados orgánicos en la búsqueda de Google.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'google'],
  },
  {
    id: 'google-search-text-ads',
    term: { es: 'Google Search Text Ads (formerly Google AdWords)', en: 'Google Search Text Ads (formerly Google AdWords)' },
    shortDefinition: {
      en: 'Google’s link auction network for cost-per-click ads.',
      es: 'Red de subastas de enlaces de Google para anuncios de costo por clic.'
    },
    fullDefinition: {
      en: 'Google\'s link auction network, also used for advertisement, where most keywords are sold on a cost-per-click basis.',
      es: 'La red de subastas de enlaces de Google, también utilizada para publicidad, donde la mayoría de las palabras clave se venden en un modelo de costo por clic.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'google'],
  },
  {
    id: 'google-search-text-ads-top',
    term: { es: 'Google Search Text Ads Top', en: 'Google Search Text Ads Top' },
    shortDefinition: {
      en: 'Ad block above organic results in Google search.',
      es: 'Bloque de anuncios encima de los resultados orgánicos en la búsqueda de Google.'
    },
    fullDefinition: {
      en: 'The advertising block of Google Ads that appears above the Organic results in Google’s search results.',
      es: 'El bloque de anuncios de Google Ads que aparece encima de los resultados orgánicos en la búsqueda de Google.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'google'],
  },
  {
    id: 'google-search-text-ads-traffic',
    term: { es: 'Google Search Text Ads Traffic', en: 'Google Search Text Ads Traffic' },
    shortDefinition: {
      en: 'Estimated monthly visitors from Google Ads.',
      es: 'Visitantes mensuales estimados desde Google Ads.'
    },
    fullDefinition: {
      en: 'An estimated monthly amount of visitors coming to a website from Google Ads.',
      es: 'Cantidad estimada de visitantes mensuales que llegan a un sitio web desde Google Ads.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'traffic'],
  },
  {
    id: 'google-search-text-ads-traffic-price',
    term: { es: 'Google Search Text Ads Traffic Price', en: 'Google Search Text Ads Traffic Price' },
    shortDefinition: {
      en: 'Estimated monthly expenses for a Google Ads campaign.',
      es: 'Gastos mensuales estimados para una campaña de Google Ads.'
    },
    fullDefinition: {
      en: 'Estimated monthly expenses for a Google Ads campaign.',
      es: 'Gastos mensuales estimados para una campaña de Google Ads.'
    },
    category: 'advertising',
    relatedTerms: ['ads', 'cost'],
  },
  {
    id: 'google-se-traffic',
    term: { es: 'Google SE Traffic', en: 'Google SE Traffic' },
    shortDefinition: {
      en: 'Estimated monthly visitors from Google organic search.',
      es: 'Visitantes mensuales estimados desde la búsqueda orgánica de Google.'
    },
    fullDefinition: {
      en: 'The estimated monthly amount of visitors coming from the first 100 organic Google search results.',
      es: 'La cantidad estimada de visitantes mensuales que provienen de los primeros 100 resultados orgánicos de búsqueda de Google.'
    },
    category: 'seo',
    relatedTerms: ['traffic', 'seo'],
  },
  // --- H ---
  {
    id: 'heading-tag',
    term: { es: 'Heading Tag', en: 'Heading Tag' },
    shortDefinition: {
      en: 'An HTML tag that indicates the levels of the headings within a webpage or document.',
      es: 'Etiqueta HTML que indica los niveles de encabezados dentro de una página web o documento.'
    },
    fullDefinition: {
      en: 'These tags form a hierarchy from the highest level of importance/organization to the lowest: from <h1> to <h6>. Using heading tags to relevantly indicate the levels of your webpage helps search engines understand your content better, which is good for SEO.',
      es: 'Estas etiquetas forman una jerarquía desde el nivel más alto de importancia/organización hasta el más bajo: de <h1> a <h6>. Usar etiquetas de encabezado de forma relevante ayuda a los motores de búsqueda a entender mejor tu contenido, lo cual es bueno para el SEO.'
    },
    category: 'technology',
    relatedTerms: ['html', 'seo'],
  },
  {
    id: 'heat-map',
    term: { es: 'Heat Map', en: 'Heat Map' },
    shortDefinition: {
      en: 'A map that represents the data and uses color to communicate areas of highest use or likelihood.',
      es: 'Mapa que representa datos y usa colores para mostrar áreas de mayor uso o probabilidad.'
    },
    fullDefinition: {
      en: 'A click map is a special type of heat map that shows which parts of web pages receive the most clicks. Using a scale of red (“hot”) to blue (“cold”), areas, where people look or click the most, are labeled with red. Web designers can combine the data from an eye-tracking heat map and a click map to position call-to-action buttons where they are most likely to be seen and clicked.',
      es: 'Un click map es un tipo especial de heat map que muestra qué partes de las páginas web reciben más clics. Usando una escala de rojo (“caliente”) a azul (“frío”), las áreas donde la gente mira o hace clic más se marcan en rojo. Los diseñadores web pueden combinar datos de mapas de calor de seguimiento ocular y de clics para colocar botones de acción donde es más probable que sean vistos y clicados.'
    },
    category: 'metrics',
    relatedTerms: ['ux', 'analytics'],
  },
  {
    id: 'historical-data',
    term: { es: 'Historical Data', en: 'Historical Data' },
    shortDefinition: {
      en: 'The data that allows you to perform research on keywords and domains from previous months.',
      es: 'Datos que permiten investigar palabras clave y dominios de meses anteriores.'
    },
    fullDefinition: {
      en: 'Domain Analytics and Keyword Analytics historical data goes back to January 2012. PLA historical data goes back to September 2013. Traffic Analytics historical data goes back to January 2017.',
      es: 'Domain Analytics y Keyword Analytics tienen datos históricos desde enero de 2012. Los datos históricos de PLA desde septiembre de 2013. Traffic Analytics desde enero de 2017.'
    },
    category: 'metrics',
    relatedTerms: ['analytics', 'keywords'],
  },
  {
    id: 'hreflang-tags',
    term: { es: 'Hreflang Tags', en: 'Hreflang Tags' },
    shortDefinition: {
      en: 'An HTML tag that helps search engines find and display content in a specific language when a website uses multiple languages.',
      es: 'Etiqueta HTML que ayuda a los motores de búsqueda a mostrar contenido en un idioma específico cuando un sitio usa varios idiomas.'
    },
    fullDefinition: {
      en: 'For example, Hreflang tags can help search engines in the United States find a page in English while a similar search performed in Mexico would return a page in Spanish. Hreflang pages also solve the problem of duplicate content penalties. Hreflang tags help search engines understand when content is customized to specific audiences rather than being duplicated as a search engine optimization (SEO) trick.',
      es: 'Por ejemplo, las etiquetas hreflang pueden ayudar a que los motores de búsqueda en EE.UU. encuentren una página en inglés, mientras que una búsqueda similar en México devuelva una página en español. También resuelven el problema de penalizaciones por contenido duplicado, ayudando a los motores a entender cuándo el contenido está personalizado para audiencias específicas y no duplicado como truco de SEO.'
    },
    category: 'technology',
    relatedTerms: ['html', 'seo'],
  },
  {
    id: 'hsts',
    term: { es: 'HSTS (HTTP Strict Transport Security)', en: 'HSTS (HTTP Strict Transport Security)' },
    shortDefinition: {
      en: 'A web security policy mechanism that helps to protect websites against protocol downgrade attacks and cookie hijacking.',
      es: 'Mecanismo de política de seguridad web que protege contra ataques de degradación de protocolo y secuestro de cookies.'
    },
    fullDefinition: {
      en: 'It allows web servers to declare that web browsers (or other complying user agents) should interact with it using only HTTPS connections, which provide Transport Layer Security (TLS/SSL), unlike the insecure HTTP used alone.',
      es: 'Permite a los servidores web declarar que los navegadores deben interactuar solo mediante conexiones HTTPS, que proporcionan seguridad TLS/SSL, a diferencia de HTTP solo.'
    },
    category: 'technology',
    relatedTerms: ['security', 'https'],
  },
  {
    id: 'html',
    term: { es: 'HTML (HyperText Markup Language)', en: 'HTML (HyperText Markup Language)' },
    shortDefinition: {
      en: 'A standard markup language or “markup” which is used to add formatting and web functionality to plain text for use on the internet.',
      es: 'Lenguaje de marcado estándar usado para dar formato y funcionalidad web al texto plano en internet.'
    },
    fullDefinition: {
      en: 'HTML is the mother tongue of search engines and should generally be strictly and exclusively adhered to on web pages.',
      es: 'HTML es el idioma base de los motores de búsqueda y debe usarse de forma estricta y exclusiva en las páginas web.'
    },
    category: 'technology',
    relatedTerms: ['web', 'markup'],
  },
  {
    id: 'http',
    term: { es: 'HTTP', en: 'HTTP' },
    shortDefinition: {
      en: 'The Hypertext Transfer Protocol is a protocol for fetching resources transferred from a computer server to a web browser.',
      es: 'Protocolo para transferir recursos desde un servidor a un navegador web.'
    },
    fullDefinition: {
      en: 'The Hypertext Transfer Protocol is a protocol for fetching resources transferred from a computer server to a web browser.',
      es: 'El Protocolo de Transferencia de Hipertexto es un protocolo para obtener recursos transferidos de un servidor a un navegador web.'
    },
    category: 'technology',
    relatedTerms: ['web', 'protocol'],
  },
  {
    id: 'https',
    term: { es: 'HTTPS', en: 'HTTPS' },
    shortDefinition: {
      en: 'A secured protocol for fetching resources that uses a Secure Sockets Layer (SSL) to encrypt data transferred between a website and a web browser.',
      es: 'Protocolo seguro para transferir recursos usando SSL para cifrar los datos entre un sitio web y un navegador.'
    },
    fullDefinition: {
      en: 'HTTPS is a minor Google ranking factor.',
      es: 'HTTPS es un factor menor de ranking en Google.'
    },
    category: 'technology',
    relatedTerms: ['web', 'security'],
  },
  // ...continúa con I-W...
    // --- I ---
    {
      id: 'impressions',
      term: { es: 'Impressions', en: 'Impressions' },
      shortDefinition: {
        en: 'Number of times content is displayed to users.',
        es: 'Número de veces que el contenido se muestra a los usuarios.'
      },
      fullDefinition: {
        en: 'Impressions refer to the total number of times a piece of content, such as an ad, post, or webpage, is displayed to users, regardless of whether it is clicked or interacted with. It is a key metric in digital marketing and advertising used to measure the reach and visibility of content across various platforms and channels.',
        es: 'Las impresiones se refieren al número total de veces que un contenido, como un anuncio, publicación o página web, se muestra a los usuarios, independientemente de si se hace clic o se interactúa con él. Es una métrica clave en marketing digital y publicidad para medir el alcance y la visibilidad del contenido en diferentes plataformas y canales.'
      },
      category: 'metrics',
      relatedTerms: ['reach', 'views'],
    },
    {
      id: 'inbound-marketing',
      term: { es: 'Inbound Marketing', en: 'Inbound Marketing' },
      shortDefinition: {
        en: 'Marketing strategy focused on attracting customers through valuable content.',
        es: 'Estrategia de marketing enfocada en atraer clientes mediante contenido valioso.'
      },
      fullDefinition: {
        en: 'Inbound marketing is a business methodology that attracts customers by creating valuable content and experiences tailored to them. It forms connections they are looking for and solves problems they already have.',
        es: 'El inbound marketing es una metodología empresarial que atrae clientes creando contenido y experiencias valiosas adaptadas a ellos. Forma conexiones que buscan y resuelve problemas que ya tienen.'
      },
      category: 'strategy',
      relatedTerms: ['content-marketing', 'lead-generation'],
    },
    {
      id: 'influencer',
      term: { es: 'Influencer', en: 'Influencer' },
      shortDefinition: {
        en: 'Individual with the power to affect purchase decisions of others.',
        es: 'Persona con poder de influir en las decisiones de compra de otros.'
      },
      fullDefinition: {
        en: 'An influencer is an individual who has the power to affect the purchasing decisions of others because of their authority, knowledge, position, or relationship with their audience. Influencers often have a following in a particular niche, with whom they actively engage.',
        es: 'Un influencer es una persona que tiene el poder de influir en las decisiones de compra de otros debido a su autoridad, conocimiento, posición o relación con su audiencia. Los influencers suelen tener seguidores en un nicho particular, con quienes interactúan activamente.'
      },
      category: 'channels',
      relatedTerms: ['social-media', 'brand-ambassador'],
    },
    {
      id: 'influencer-marketing',
      term: { es: 'Influencer Marketing', en: 'Influencer Marketing' },
      shortDefinition: {
        en: 'Type of marketing that uses endorsements and product mentions from influencers.',
        es: 'Tipo de marketing que utiliza recomendaciones y menciones de productos de influencers.'
      },
      fullDefinition: {
        en: 'Influencer marketing is a form of social media marketing involving endorsements and product placements from influencers, people and organizations who have a purported expert level of knowledge or social influence in their field.',
        es: 'El influencer marketing es una forma de marketing en redes sociales que implica recomendaciones y colocaciones de productos de influencers, personas y organizaciones con un nivel de conocimiento o influencia social en su campo.'
      },
      category: 'channels',
      relatedTerms: ['influencer', 'social-media'],
    },
    {
      id: 'insights',
      term: { es: 'Insights', en: 'Insights' },
      shortDefinition: {
        en: 'Deep understanding of a specific issue or trend.',
        es: 'Comprensión profunda de un tema o tendencia específica.'
      },
      fullDefinition: {
        en: 'Insights are deep understandings derived from data analysis, research, or observation that reveal underlying patterns, trends, or opportunities. In marketing, insights help inform strategy and decision-making.',
        es: 'Los insights son comprensiones profundas derivadas del análisis de datos, la investigación o la observación que revelan patrones, tendencias u oportunidades subyacentes. En marketing, los insights ayudan a informar la estrategia y la toma de decisiones.'
      },
      category: 'metrics',
      relatedTerms: ['analytics', 'data'],
    },
    {
      id: 'instagram',
      term: { es: 'Instagram', en: 'Instagram' },
      shortDefinition: {
        en: 'Social media platform for sharing photos and videos.',
        es: 'Plataforma de redes sociales para compartir fotos y videos.'
      },
      fullDefinition: {
        en: 'Instagram is a social networking app made for sharing photos and videos from a smartphone. It allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.',
        es: 'Instagram es una aplicación de red social creada para compartir fotos y videos desde un smartphone. Permite a los usuarios subir contenido multimedia que puede ser editado con filtros y organizado por hashtags y etiquetas geográficas.'
      },
      category: 'channels',
      relatedTerms: ['social-media', 'facebook'],
    },
    {
      id: 'interactive-content',
      term: { es: 'Interactive Content', en: 'Interactive Content' },
      shortDefinition: {
        en: 'Content that requires active engagement from users.',
        es: 'Contenido que requiere la participación activa de los usuarios.'
      },
      fullDefinition: {
        en: 'Interactive content is digital content that requires active engagement from users, such as quizzes, polls, calculators, or interactive infographics. It increases user engagement and provides personalized experiences.',
        es: 'El contenido interactivo es contenido digital que requiere la participación activa de los usuarios, como quizzes, encuestas, calculadoras o infografías interactivas. Aumenta el engagement y ofrece experiencias personalizadas.'
      },
      category: 'technology',
      relatedTerms: ['engagement', 'content'],
    },
    {
      id: 'internal-link',
      term: { es: 'Internal Link', en: 'Internal Link' },
      shortDefinition: {
        en: 'A hyperlink that points to another page on the same website.',
        es: 'Hipervínculo que apunta a otra página dentro del mismo sitio web.'
      },
      fullDefinition: {
        en: 'An internal link is a hyperlink that points to another page or resource within the same website or domain. Internal links help users navigate a website and distribute link equity across pages, which is important for SEO.',
        es: 'Un enlace interno es un hipervínculo que apunta a otra página o recurso dentro del mismo sitio web o dominio. Los enlaces internos ayudan a los usuarios a navegar y distribuyen la autoridad de enlace entre páginas, lo cual es importante para el SEO.'
      },
      category: 'seo',
      relatedTerms: ['link', 'seo'],
    },
    {
      id: 'inview-rate',
      term: { es: 'Inview Rate', en: 'Inview Rate' },
      shortDefinition: {
        en: 'Percentage of an ad that is actually viewable by users.',
        es: 'Porcentaje de un anuncio que realmente es visible para los usuarios.'
      },
      fullDefinition: {
        en: 'Inview rate is a metric that measures the percentage of an ad that is actually viewable by users, as opposed to simply being served. It helps advertisers understand the effectiveness of their ad placements.',
        es: 'La tasa de visibilidad (inview rate) es una métrica que mide el porcentaje de un anuncio que realmente es visible para los usuarios, en lugar de simplemente ser servido. Ayuda a los anunciantes a entender la efectividad de la ubicación de sus anuncios.'
      },
      category: 'metrics',
      relatedTerms: ['ads', 'viewability'],
    },
    // --- Z ---
    {
      id: 'zero-click-search',
      term: { es: 'Zero Click Search', en: 'Zero Click Search' },
      shortDefinition: {
        en: 'A search result that provides the answer directly on the search engine, with no need to click.',
        es: 'Resultado de búsqueda que ofrece la respuesta directamente en el buscador sin necesidad de hacer clic.'
      },
      fullDefinition: {
        en: 'In digital marketing, a Zero Click Search occurs when the user gets the information they need directly on the search engine results page (SERP), for example through featured snippets, knowledge panels, or quick answers. This reduces traffic to websites but forces SEO specialists to optimize content for these privileged positions, increasing visibility even if not always clicks.',
        es: 'En marketing digital, un Zero Click Search ocurre cuando el usuario obtiene la información que necesita directamente en la página de resultados del motor de búsqueda (SERP), por ejemplo mediante featured snippets, paneles de conocimiento o respuestas rápidas. Esto reduce el tráfico hacia los sitios web, pero obliga a los especialistas en SEO a optimizar su contenido para aparecer en esas posiciones privilegiadas, aumentando visibilidad aunque no siempre clics.'
      },
      category: 'seo',
    },
    {
      id: 'zero-party-data',
      term: { es: 'Zero-Party Data', en: 'Zero-Party Data' },
      shortDefinition: {
        en: 'Data that the customer voluntarily shares with a brand.',
        es: 'Datos que el cliente comparte voluntariamente con una marca.'
      },
      fullDefinition: {
        en: 'Zero-Party Data refers to information that consumers intentionally and directly provide to a company, such as preferences, interests, or feedback. Unlike first-party data (collected by user interaction) or third-party data (purchased from others), this data is highly reliable and allows for more precise personalization in digital campaigns, strengthening the trust relationship between brand and customer.',
        es: 'El concepto de Zero-Party Data se refiere a la información que los consumidores proporcionan de manera intencional y directa a una empresa, como preferencias, intereses o feedback. A diferencia de los first-party data (recogidos por la interacción del usuario) o third-party data (comprados a terceros), estos datos son altamente confiables y permiten una personalización más precisa en campañas digitales, fortaleciendo la relación de confianza entre marca y cliente.'
      },
      category: 'analytics',
    },
    {
      id: 'z-index',
      term: { es: 'Z-Index (Web Design)', en: 'Z-Index (Web Design)' },
      shortDefinition: {
        en: 'CSS property that controls the stacking order of elements on a web page.',
        es: 'Propiedad CSS que controla el orden de apilamiento de elementos en una página web.'
      },
      fullDefinition: {
        en: 'In web design and digital marketing, Z-Index is a CSS property that determines which elements appear above or below others in an interface. It is key for user experience and the presentation of ads or banners, ensuring that important elements (like conversion buttons or promotional messages) are visible and not hidden behind other graphics.',
        es: 'En diseño web y marketing digital, el Z-Index es una propiedad de CSS que determina qué elementos se muestran por encima o por debajo de otros en una interfaz. Es clave para la experiencia de usuario y la presentación de anuncios o banners, ya que asegura que los elementos más importantes (como botones de conversión o mensajes promocionales) sean visibles y no queden ocultos detrás de otros componentes gráficos.'
      },
      category: 'technology',
    },
    {
      id: 'zettabyte-era',
      term: { es: 'Zettabyte Era', en: 'Zettabyte Era' },
      shortDefinition: {
        en: 'Digital era characterized by massive data consumption at the zettabyte scale.',
        es: 'Era digital caracterizada por el consumo masivo de datos a escala zettabyte.'
      },
      fullDefinition: {
        en: 'The term Zettabyte Era describes the current context in which the volume of digital data generated and consumed globally reaches zettabyte magnitudes (a trillion gigabytes). For digital marketing, this implies the need for advanced big data and predictive analytics tools to process and leverage this huge amount of information to segment audiences, personalize experiences, and optimize campaigns in real time.',
        es: 'El término Zettabyte Era describe el contexto actual en el que el volumen de datos digitales generados y consumidos globalmente alcanza magnitudes de zettabytes (un trillón de gigabytes). Para el marketing digital, esto implica la necesidad de herramientas avanzadas de big data y analítica predictiva, que permitan procesar y aprovechar esta enorme cantidad de información para segmentar audiencias, personalizar experiencias y optimizar campañas en tiempo real.'
      },
      category: 'technology',
    },
    {
      id: 'zip-code-marketing',
      term: { es: 'Zip Code Marketing', en: 'Zip Code Marketing' },
      shortDefinition: {
        en: 'Hyperlocal marketing strategy based on postal codes.',
        es: 'Estrategia de marketing hiperlocal basada en códigos postales.'
      },
      fullDefinition: {
        en: 'Zip Code Marketing is a technique that segments digital campaigns according to users’ geographic location, using postal codes as the main criterion. This allows brands to personalize messages and offers for specific communities, optimize ad spend, and increase relevance in local markets. It is especially useful in retail, delivery, and services that depend on physical proximity.',
        es: 'Zip Code Marketing es una técnica que segmenta campañas digitales según la ubicación geográfica de los usuarios, utilizando códigos postales como criterio principal. Esto permite a las marcas personalizar mensajes y ofertas para comunidades específicas, optimizar la inversión publicitaria y aumentar la relevancia de sus acciones en mercados locales. Es especialmente útil en retail, delivery y servicios que dependen de la proximidad física.'
      },
      category: 'marketing',
    },
    {
      id: 'zoom-marketing',
      term: { es: 'Zoom Marketing', en: 'Zoom Marketing' },
      shortDefinition: {
        en: 'Use of Zoom and similar platforms for digital marketing events.',
        es: 'Uso de Zoom y plataformas similares para eventos digitales de marketing.'
      },
      fullDefinition: {
        en: 'Zoom Marketing refers to the use of videoconferencing platforms like Zoom to organize webinars, workshops, virtual conferences, and product presentations. This strategy became established with the digitalization of events and allows brands to reach global audiences, generate qualified leads, and strengthen real-time interaction with potential clients, also integrating participation tracking and analytics tools.',
        es: 'Zoom Marketing se refiere a la utilización de plataformas de videoconferencia como Zoom para organizar webinars, talleres, conferencias virtuales y presentaciones de producto. Esta estrategia se consolidó con la digitalización de eventos y permite a las marcas llegar a audiencias globales, generar leads cualificados y fortalecer la interacción en tiempo real con clientes potenciales, integrando además herramientas de seguimiento y análisis de participación.'
      },
      category: 'content',
    },
    {
      id: 'z-test',
      term: { es: 'Z-Test (Statistical Analysis)', en: 'Z-Test (Statistical Analysis)' },
      shortDefinition: {
        en: 'Statistical test used to compare data in digital marketing.',
        es: 'Prueba estadística usada para comparar datos en marketing digital.'
      },
      fullDefinition: {
        en: 'The Z-Test is a statistical tool used in digital marketing to compare a sample with a population or between two large samples, evaluating if the observed differences are significant. It is applied in campaign analysis, market studies, and especially in A/B testing, helping specialists make evidence-based decisions and optimize strategies with greater precision.',
        es: 'El Z-Test es una herramienta estadística que se utiliza en marketing digital para comparar una muestra con una población o entre dos muestras grandes, evaluando si las diferencias observadas son significativas. Se aplica en análisis de campañas, estudios de mercado y especialmente en A/B testing, ayudando a los especialistas a tomar decisiones basadas en evidencia y optimizar estrategias con mayor precisión.'
      },
      category: 'analytics',
    },
    {
      id: 'zoning',
      term: { es: 'Zoning (Digital Advertising)', en: 'Zoning (Digital Advertising)' },
      shortDefinition: {
        en: 'Division of digital advertising spaces into strategic zones.',
        es: 'División de espacios publicitarios digitales en zonas estratégicas.'
      },
      fullDefinition: {
        en: 'In digital advertising, Zoning consists of organizing and dividing the areas of a website or app into different zones to strategically place ads. Each zone has a different value in terms of visibility and engagement, allowing advertisers to maximize campaign impact. For example, a banner at the top of a page usually has a higher view rate than one in the footer.',
        es: 'En publicidad digital, Zoning consiste en organizar y dividir las áreas de un sitio web o aplicación en diferentes zonas para colocar anuncios de manera estratégica. Cada zona tiene un valor distinto en términos de visibilidad y engagement, lo que permite a los anunciantes maximizar el impacto de sus campañas. Por ejemplo, un banner en la parte superior de una página suele tener mayor tasa de visualización que uno en el pie de página.'
      },
      category: 'ads',
    },
    // --- Y ---
    {
      id: 'yahoo-advertising',
      term: { es: 'Yahoo Advertising', en: 'Yahoo Advertising' },
      shortDefinition: {
        en: 'Yahoo’s platform for display, native, and search ads.',
        es: 'Plataforma de Yahoo para anuncios display, nativos y de búsqueda.'
      },
      fullDefinition: {
        en: 'Yahoo Advertising is the advertising platform offered by Yahoo, used for display ads, native ads, and search marketing. It allows brands to reach audiences across Yahoo’s network with various ad formats and targeting options, supporting both brand awareness and performance campaigns.',
        es: 'Yahoo Advertising es la plataforma publicitaria de Yahoo, utilizada para anuncios display, anuncios nativos y marketing en buscadores. Permite a las marcas llegar a audiencias a través de la red de Yahoo con diferentes formatos y opciones de segmentación, apoyando campañas de branding y performance.'
      },
      category: 'ads',
    },
    {
      id: 'yandex',
      term: { es: 'Yandex', en: 'Yandex' },
      shortDefinition: {
        en: 'Major Russian search engine and tech company.',
        es: 'Principal motor de búsqueda y empresa tecnológica rusa.'
      },
      fullDefinition: {
        en: 'Yandex is a Russian multinational company that operates one of the largest search engines in Europe. It is often used in SEO and SEM strategies targeting Eastern European markets, offering a suite of digital products including maps, email, and advertising platforms.',
        es: 'Yandex es una empresa multinacional rusa que opera uno de los mayores motores de búsqueda de Europa. Se utiliza en estrategias de SEO y SEM para mercados de Europa del Este y ofrece una gama de productos digitales como mapas, correo y plataformas publicitarias.'
      },
      category: 'seo',
    },
    {
      id: 'yelp-marketing',
      term: { es: 'Yelp Marketing', en: 'Yelp Marketing' },
      shortDefinition: {
        en: 'Strategies to boost visibility and reputation on Yelp.',
        es: 'Estrategias para mejorar visibilidad y reputación en Yelp.'
      },
      fullDefinition: {
        en: 'Yelp Marketing refers to strategies that leverage Yelp, a local business review platform, to improve visibility, reputation, and customer acquisition. Businesses use Yelp to manage reviews, respond to feedback, and run ads, making it a key channel for local marketing and reputation management.',
        es: 'Yelp Marketing se refiere a estrategias que aprovechan Yelp, una plataforma de reseñas de negocios locales, para mejorar la visibilidad, reputación y adquisición de clientes. Las empresas usan Yelp para gestionar reseñas, responder a comentarios y hacer publicidad, siendo un canal clave para el marketing local y la gestión de reputación.'
      },
      category: 'marketing',
    },
    {
      id: 'yield-management',
      term: { es: 'Yield Management', en: 'Yield Management' },
      shortDefinition: {
        en: 'Dynamic pricing strategy to maximize revenue.',
        es: 'Estrategia de precios dinámica para maximizar ingresos.'
      },
      fullDefinition: {
        en: 'Yield Management is a pricing strategy used in digital marketing and e-commerce to maximize revenue by adjusting prices based on demand, timing, and customer behavior. It involves analyzing data to predict demand and optimize pricing in real time, commonly used in industries like travel, hospitality, and retail.',
        es: 'Yield Management es una estrategia de precios utilizada en marketing digital y e-commerce para maximizar ingresos ajustando precios según la demanda, el momento y el comportamiento del cliente. Implica analizar datos para predecir la demanda y optimizar precios en tiempo real, siendo común en sectores como viajes, hotelería y retail.'
      },
      category: 'sales',
    },
    {
      id: 'youtube-marketing',
      term: { es: 'YouTube Marketing', en: 'YouTube Marketing' },
      shortDefinition: {
        en: 'Using YouTube for video ads, tutorials, and branded content.',
        es: 'Uso de YouTube para anuncios en video, tutoriales y contenido de marca.'
      },
      fullDefinition: {
        en: 'YouTube Marketing is the use of YouTube as a platform for video advertising, influencer collaborations, tutorials, and branded content to reach and engage audiences. Brands leverage YouTube’s massive user base and targeting tools to build awareness, drive traffic, and foster community engagement.',
        es: 'YouTube Marketing es el uso de YouTube como plataforma para publicidad en video, colaboraciones con influencers, tutoriales y contenido de marca para llegar y conectar con audiencias. Las marcas aprovechan la gran base de usuarios y las herramientas de segmentación de YouTube para generar awareness, tráfico y comunidad.'
      },
      category: 'content',
    },
    {
      id: 'youtube-seo',
      term: { es: 'YouTube SEO', en: 'YouTube SEO' },
      shortDefinition: {
        en: 'Optimizing videos for better ranking on YouTube.',
        es: 'Optimización de videos para mejor posicionamiento en YouTube.'
      },
      fullDefinition: {
        en: 'YouTube SEO is the process of optimizing video titles, descriptions, tags, and thumbnails to improve visibility and ranking within YouTube’s search results. Effective YouTube SEO increases discoverability, watch time, and subscriber growth for channels and brands.',
        es: 'YouTube SEO es el proceso de optimizar títulos, descripciones, etiquetas y miniaturas de videos para mejorar la visibilidad y el posicionamiento en los resultados de búsqueda de YouTube. Una buena optimización aumenta la visibilidad, el tiempo de visualización y el crecimiento de suscriptores para canales y marcas.'
      },
      category: 'seo',
    },
    {
      id: 'youth-marketing',
      term: { es: 'Youth Marketing', en: 'Youth Marketing' },
      shortDefinition: {
        en: 'Marketing strategies for Gen Z and Millennials.',
        es: 'Estrategias de marketing para Gen Z y Millennials.'
      },
      fullDefinition: {
        en: 'Youth Marketing refers to marketing strategies specifically designed to target younger demographics, such as Gen Z and Millennials. These strategies often focus on social media, influencers, and trends to engage and convert younger audiences in a rapidly changing digital landscape.',
        es: 'Youth Marketing se refiere a estrategias de marketing diseñadas para públicos jóvenes como Gen Z y Millennials. Estas estrategias suelen centrarse en redes sociales, influencers y tendencias para captar y convertir audiencias jóvenes en un entorno digital en constante cambio.'
      },
      category: 'marketing',
    },
    {
      id: 'ymyl',
      term: { es: 'YMYL (Your Money or Your Life)', en: 'YMYL (Your Money or Your Life)' },
      shortDefinition: {
        en: 'Google’s category for content impacting finances, health, or safety.',
        es: 'Categoría de Google para contenido que impacta finanzas, salud o seguridad.'
      },
      fullDefinition: {
        en: 'YMYL (Your Money or Your Life) is a Google Search Quality guideline category for content that can impact a person’s financial stability, health, or safety. Websites in this category require high levels of expertise, authority, and trustworthiness (E-A-T) to rank well and protect users.',
        es: 'YMYL (Your Money or Your Life) es una categoría de las directrices de calidad de Google para contenido que puede afectar la estabilidad financiera, salud o seguridad de una persona. Estos sitios requieren altos niveles de experiencia, autoridad y confiabilidad (E-A-T) para posicionarse bien y proteger a los usuarios.'
      },
      category: 'seo',
    },
    // --- X ---
    {
      id: 'xaas',
      term: { es: 'XaaS (Anything as a Service)', en: 'XaaS (Anything as a Service)' },
      shortDefinition: {
        en: 'Cloud-based model for delivering products or services by subscription.',
        es: 'Modelo basado en la nube para ofrecer productos o servicios por suscripción.'
      },
      fullDefinition: {
        en: 'XaaS (Anything as a Service) is a digital business model in which products, platforms, or services are offered via cloud subscription. Examples include SaaS (Software as a Service), PaaS (Platform as a Service), and IaaS (Infrastructure as a Service). This model provides flexibility, scalability, and cost efficiency for both providers and customers.',
        es: 'XaaS (Anything as a Service) es un modelo de negocio digital en el que productos, plataformas o servicios se ofrecen bajo suscripción en la nube. Ejemplos incluyen SaaS (Software como Servicio), PaaS (Plataforma como Servicio) e IaaS (Infraestructura como Servicio). Este modelo brinda flexibilidad, escalabilidad y eficiencia de costos para proveedores y clientes.'
      },
      category: 'technology',
    },
    {
      id: 'xml-sitemap',
      term: { es: 'XML Sitemap', en: 'XML Sitemap' },
      shortDefinition: {
        en: 'XML file listing website pages for better search engine indexing.',
        es: 'Archivo XML que lista páginas de un sitio para mejor indexación.'
      },
      fullDefinition: {
        en: 'An XML Sitemap is a file in XML format that lists all the pages of a website, helping search engines crawl and index content more efficiently. It is a key tool for SEO, ensuring that all important pages are discoverable and properly ranked by search engines.',
        es: 'Un XML Sitemap es un archivo en formato XML que lista todas las páginas de un sitio web, ayudando a los motores de búsqueda a rastrear e indexar el contenido de manera más eficiente. Es una herramienta clave para el SEO, asegurando que todas las páginas importantes sean detectadas y clasificadas correctamente por los buscadores.'
      },
      category: 'seo',
    },
    {
      id: 'x-advertising',
      term: { es: 'X-Advertising (Cross-Advertising)', en: 'X-Advertising (Cross-Advertising)' },
      shortDefinition: {
        en: 'Cross-platform digital advertising strategy.',
        es: 'Estrategia de publicidad digital cruzada entre plataformas.'
      },
      fullDefinition: {
        en: 'X-Advertising (Cross-Advertising) is a strategy of running advertising campaigns across different digital platforms to maximize reach and visibility. By leveraging multiple channels, brands can reinforce their message, target diverse audiences, and improve overall campaign effectiveness.',
        es: 'X-Advertising (Cross-Advertising) es una estrategia de realizar campañas publicitarias en diferentes plataformas digitales para maximizar el alcance y la visibilidad. Al aprovechar múltiples canales, las marcas refuerzan su mensaje, llegan a audiencias diversas y mejoran la efectividad general de la campaña.'
      },
      category: 'marketing',
    },
    {
      id: 'xenial-marketing',
      term: { es: 'Xenial Marketing', en: 'Xenial Marketing' },
      shortDefinition: {
        en: 'Marketing approach focused on friendly, hospitable customer experiences.',
        es: 'Enfoque de marketing centrado en experiencias amigables y hospitalarias.'
      },
      fullDefinition: {
        en: 'Xenial Marketing is a marketing approach that aims to create friendly and hospitable experiences for customers, building trust and loyalty. This strategy emphasizes personalized service, empathy, and positive interactions to foster long-term relationships and brand advocacy.',
        es: 'Xenial Marketing es un enfoque de marketing que busca crear experiencias amigables y hospitalarias para los clientes, generando confianza y fidelidad. Esta estrategia enfatiza el servicio personalizado, la empatía y las interacciones positivas para fomentar relaciones duraderas y la defensa de la marca.'
      },
      category: 'marketing',
    },
    {
      id: 'x-marketing',
      term: { es: 'X (formerly Twitter) Marketing', en: 'X (formerly Twitter) Marketing' },
      shortDefinition: {
        en: 'Digital marketing strategies for the X (formerly Twitter) platform.',
        es: 'Estrategias de marketing digital para la red X (antes Twitter).'
      },
      fullDefinition: {
        en: 'X (formerly Twitter) Marketing refers to digital marketing strategies applied on the X platform, including content campaigns, hashtags, and paid ads. Marketers use X to build brand awareness, engage audiences, and drive conversions through organic and paid tactics.',
        es: 'X (antes Twitter) Marketing se refiere a estrategias de marketing digital aplicadas en la red social X, incluyendo campañas de contenido, hashtags y anuncios pagados. Los especialistas usan X para generar awareness, interactuar con audiencias y lograr conversiones mediante tácticas orgánicas y pagadas.'
      },
      category: 'marketing',
    },
    {
      id: 'x-channel-marketing',
      term: { es: 'X-Channel Marketing (Cross-Channel Marketing)', en: 'X-Channel Marketing (Cross-Channel Marketing)' },
      shortDefinition: {
        en: 'Coordinating campaigns across multiple digital channels for a unified experience.',
        es: 'Coordinación de campañas en varios canales digitales para una experiencia unificada.'
      },
      fullDefinition: {
        en: 'X-Channel Marketing (Cross-Channel Marketing) is the coordination of messages and campaigns across multiple digital channels—such as email, social media, search engines, and apps—to provide an integrated user experience. This approach ensures consistency, maximizes reach, and improves engagement by meeting users where they are.',
        es: 'X-Channel Marketing (Cross-Channel Marketing) es la coordinación de mensajes y campañas a través de múltiples canales digitales (email, redes sociales, buscadores, apps) para ofrecer una experiencia integrada al usuario. Este enfoque asegura la consistencia, maximiza el alcance y mejora el engagement al encontrarse con los usuarios en los canales que prefieren.'
      },
      category: 'marketing',
    },
    // --- V ---
    {
      id: 'value-proposition',
      term: { es: 'Value Proposition', en: 'Value Proposition' },
      shortDefinition: {
        en: 'Clear statement of product or service benefits and differentiation.',
        es: 'Declaración clara de beneficios y diferenciación de un producto o servicio.'
      },
      fullDefinition: {
        en: 'A Value Proposition is a clear statement that explains how a product or service solves a problem, delivers benefits, and why it is better than competitors. It communicates unique value to customers and is central to marketing and sales strategies.',
        es: 'La Value Proposition es una declaración clara que explica cómo un producto o servicio resuelve un problema, entrega beneficios y por qué es mejor que la competencia. Comunica el valor único al cliente y es central en las estrategias de marketing y ventas.'
      },
      category: 'marketing',
    },
    {
      id: 'vanity-metrics',
      term: { es: 'Vanity Metrics', en: 'Vanity Metrics' },
      shortDefinition: {
        en: 'Superficial metrics that look good but lack business impact.',
        es: 'Métricas superficiales que lucen bien pero no reflejan impacto real.'
      },
      fullDefinition: {
        en: 'Vanity Metrics are superficial metrics (likes, followers, page views) that look good but don’t necessarily reflect meaningful business outcomes like conversions or revenue. They can be misleading if used as the sole measure of success in digital marketing.',
        es: 'Las Vanity Metrics son métricas superficiales (me gusta, seguidores, vistas) que lucen bien pero no reflejan resultados de negocio significativos como conversiones o ingresos. Pueden ser engañosas si se usan como único indicador de éxito en marketing digital.'
      },
      category: 'metrics',
    },
    {
      id: 'viral-marketing',
      term: { es: 'Viral Marketing', en: 'Viral Marketing' },
      shortDefinition: {
        en: 'Strategy to encourage rapid content sharing for exponential reach.',
        es: 'Estrategia para incentivar la rápida difusión de contenido.'
      },
      fullDefinition: {
        en: 'Viral Marketing is a strategy that encourages users to share content rapidly, creating exponential exposure through social networks. Successful viral campaigns leverage emotions, trends, and shareable formats to maximize reach and engagement.',
        es: 'El Viral Marketing es una estrategia que incentiva a los usuarios a compartir contenido rápidamente, generando exposición exponencial en redes sociales. Las campañas virales exitosas aprovechan emociones, tendencias y formatos compartibles para maximizar el alcance y la interacción.'
      },
      category: 'marketing',
    },
    {
      id: 'visibility',
      term: { es: 'Visibility (Online Visibility)', en: 'Visibility (Online Visibility)' },
      shortDefinition: {
        en: 'How easily a brand or website can be found online.',
        es: 'Qué tan fácil es encontrar una marca o sitio en línea.'
      },
      fullDefinition: {
        en: 'Visibility (Online Visibility) refers to the extent to which a brand or website can be easily found and recognized across digital channels. It is often linked to SEO and social media presence, and is crucial for attracting and retaining customers.',
        es: 'Visibility (Online Visibility) se refiere al grado en que una marca o sitio puede ser fácilmente encontrado y reconocido en canales digitales. Suele estar vinculado al SEO y la presencia en redes sociales, y es clave para atraer y retener clientes.'
      },
      category: 'seo',
    },
    {
      id: 'voice-search-optimization',
      term: { es: 'Voice Search Optimization', en: 'Voice Search Optimization' },
      shortDefinition: {
        en: 'Optimizing content for discovery via voice assistants.',
        es: 'Optimización de contenido para asistentes de voz.'
      },
      fullDefinition: {
        en: 'Voice Search Optimization is the process of optimizing digital content so it can be easily found through voice assistants like Siri, Alexa, or Google Assistant. This involves using natural language, answering common questions, and structuring data for voice search algorithms.',
        es: 'Voice Search Optimization es el proceso de optimizar contenido digital para que pueda ser encontrado fácilmente mediante asistentes de voz como Siri, Alexa o Google Assistant. Implica usar lenguaje natural, responder preguntas frecuentes y estructurar datos para algoritmos de búsqueda por voz.'
      },
      category: 'seo',
    },
    {
      id: 'vpn',
      term: { es: 'VPN (Virtual Private Network)', en: 'VPN (Virtual Private Network)' },
      shortDefinition: {
        en: 'Tool that encrypts internet connections for privacy and testing.',
        es: 'Herramienta que cifra conexiones para privacidad y pruebas.'
      },
      fullDefinition: {
        en: 'A VPN (Virtual Private Network) is a tool that encrypts internet connections, sometimes used in digital marketing to test campaigns in different regions or protect data. It enhances privacy, security, and allows marketers to simulate browsing from various locations.',
        es: 'Una VPN (Virtual Private Network) es una herramienta que cifra conexiones a internet, usada en marketing digital para probar campañas en distintas regiones o proteger datos. Mejora la privacidad, la seguridad y permite simular navegación desde diferentes ubicaciones.'
      },
      category: 'technology',
    },
    {
      id: 'video-marketing',
      term: { es: 'Video Marketing', en: 'Video Marketing' },
      shortDefinition: {
        en: 'Using video content to promote, engage, and convert.',
        es: 'Uso de videos para promocionar, atraer y convertir.'
      },
      fullDefinition: {
        en: 'Video Marketing is the use of video content (ads, tutorials, testimonials, live streams) to promote products, engage audiences, and boost conversions. It is a powerful tool for storytelling, brand building, and driving action in digital marketing.',
        es: 'El Video Marketing es el uso de contenido en video (anuncios, tutoriales, testimonios, transmisiones en vivo) para promocionar productos, atraer audiencias y aumentar conversiones. Es una herramienta poderosa para contar historias, construir marca y generar acción en marketing digital.'
      },
      category: 'content',
    },
    {
      id: 'vtr',
      term: { es: 'View-Through Rate (VTR)', en: 'View-Through Rate (VTR)' },
      shortDefinition: {
        en: 'Metric for users who saw an ad and later visited or converted.',
        es: 'Métrica de usuarios que vieron un anuncio y luego visitaron o convirtieron.'
      },
      fullDefinition: {
        en: 'View-Through Rate (VTR) is a metric that measures how many people saw an ad and later visited the website or converted, even without clicking directly. It helps marketers understand the indirect impact of display and video ads on conversions.',
        es: 'El View-Through Rate (VTR) es una métrica que mide cuántas personas vieron un anuncio y luego visitaron el sitio o convirtieron, incluso sin hacer clic directamente. Ayuda a los especialistas a entender el impacto indirecto de los anuncios display y de video en las conversiones.'
      },
      category: 'metrics',
    },
    {
      id: 'virtual-event-marketing',
      term: { es: 'Virtual Event Marketing', en: 'Virtual Event Marketing' },
      shortDefinition: {
        en: 'Promoting and hosting online events to engage and generate leads.',
        es: 'Promoción y organización de eventos online para atraer y generar prospectos.'
      },
      fullDefinition: {
        en: 'Virtual Event Marketing is the practice of promoting and hosting events online (webinars, conferences, workshops) to engage audiences and generate leads. It enables brands to reach wider audiences, collect data, and build relationships in a digital environment.',
        es: 'El Virtual Event Marketing es la práctica de promocionar y organizar eventos en línea (webinars, conferencias, talleres) para atraer audiencias y generar prospectos. Permite a las marcas llegar a más personas, recopilar datos y construir relaciones en un entorno digital.'
      },
      category: 'marketing',
    },
    {
      id: 'visitor-flow',
      term: { es: 'Visitor Flow', en: 'Visitor Flow' },
      shortDefinition: {
        en: 'Analytics report showing user navigation paths on a website.',
        es: 'Reporte de analítica que muestra el recorrido de usuarios en un sitio.'
      },
      fullDefinition: {
        en: 'Visitor Flow is a web analytics report that shows the path users take through a website, helping marketers understand behavior and optimize navigation. It visualizes entry points, drop-offs, and common user journeys to improve site structure and user experience.',
        es: 'Visitor Flow es un reporte de analítica web que muestra el recorrido de los usuarios en un sitio, ayudando a entender el comportamiento y optimizar la navegación. Visualiza puntos de entrada, abandonos y rutas comunes para mejorar la estructura y experiencia del sitio.'
      },
      category: 'analytics',
    },
    // --- U ---
    {
      id: 'ui',
      term: { es: 'UI (User Interface)', en: 'UI (User Interface)' },
      shortDefinition: {
        en: 'Visual and interactive elements of a website or app.',
        es: 'Elementos visuales e interactivos de un sitio web o app.'
      },
      fullDefinition: {
        en: 'UI (User Interface) refers to the visual and interactive elements of a website or app that users engage with. It is crucial for usability and conversion optimization, as a well-designed UI enhances user satisfaction and drives business results.',
        es: 'UI (User Interface) se refiere a los elementos visuales e interactivos de un sitio web o app con los que los usuarios interactúan. Es fundamental para la usabilidad y la optimización de conversiones, ya que un buen diseño de UI mejora la satisfacción del usuario y los resultados del negocio.'
      },
      category: 'technology',
    },
    {
      id: 'ugc',
      term: { es: 'UGC (User-Generated Content)', en: 'UGC (User-Generated Content)' },
      shortDefinition: {
        en: 'Content created by customers or fans for brands.',
        es: 'Contenido creado por clientes o fans para marcas.'
      },
      fullDefinition: {
        en: 'UGC (User-Generated Content) is content created by customers or fans (reviews, photos, videos, testimonials) that brands use to build trust and authenticity in digital marketing. It is a powerful tool for social proof and community engagement.',
        es: 'UGC (User-Generated Content) es contenido creado por clientes o fans (reseñas, fotos, videos, testimonios) que las marcas utilizan para generar confianza y autenticidad en el marketing digital. Es una herramienta poderosa para el proof social y la participación de la comunidad.'
      },
      category: 'content',
    },
    {
      id: 'unique-visitors',
      term: { es: 'Unique Visitors', en: 'Unique Visitors' },
      shortDefinition: {
        en: 'Metric counting each individual website visitor in a period.',
        es: 'Métrica que cuenta cada visitante único en un periodo.'
      },
      fullDefinition: {
        en: 'Unique Visitors is a web analytics metric that counts each individual user who visits a website during a specific period, regardless of how many times they return. It helps measure audience size and reach for digital properties.',
        es: 'Unique Visitors es una métrica de analítica web que cuenta cada usuario individual que visita un sitio durante un periodo específico, sin importar cuántas veces regrese. Ayuda a medir el tamaño y alcance de la audiencia de propiedades digitales.'
      },
      category: 'metrics',
    },
    {
      id: 'upselling',
      term: { es: 'Upselling', en: 'Upselling' },
      shortDefinition: {
        en: 'Sales technique to encourage purchase of upgrades or more expensive options.',
        es: 'Técnica de ventas para incentivar compras de versiones superiores o más caras.'
      },
      fullDefinition: {
        en: 'Upselling is a sales technique in digital marketing where customers are encouraged to purchase a more expensive or upgraded version of a product or service. It increases average order value and customer lifetime value for brands.',
        es: 'Upselling es una técnica de ventas en marketing digital donde se anima al cliente a comprar una versión más cara o mejorada de un producto o servicio. Incrementa el valor promedio de compra y el valor de vida del cliente para las marcas.'
      },
      category: 'sales',
    },
    {
      id: 'url',
      term: { es: 'URL (Uniform Resource Locator)', en: 'URL (Uniform Resource Locator)' },
      shortDefinition: {
        en: 'Web address of a page, essential for SEO and links.',
        es: 'Dirección web de una página, esencial para SEO y enlaces.'
      },
      fullDefinition: {
        en: 'A URL (Uniform Resource Locator) is the web address of a page, essential for SEO and link-building strategies. Well-structured URLs improve discoverability, user experience, and search engine rankings.',
        es: 'Una URL (Uniform Resource Locator) es la dirección web de una página, esencial para SEO y estrategias de construcción de enlaces. URLs bien estructuradas mejoran la visibilidad, la experiencia del usuario y el posicionamiento en buscadores.'
      },
      category: 'technology',
    },
    {
      id: 'usability-testing',
      term: { es: 'Usability Testing', en: 'Usability Testing' },
      shortDefinition: {
        en: 'Evaluating how easy and effective a website or app is for users.',
        es: 'Evaluación de la facilidad y efectividad de uso de una web o app.'
      },
      fullDefinition: {
        en: 'Usability Testing is the process of evaluating how easy and effective a website or app is for users, often used to improve customer experience. It involves observing real users as they interact with a product to identify pain points and areas for improvement.',
        es: 'Usability Testing es el proceso de evaluar cuán fácil y efectiva es una web o app para los usuarios, usado para mejorar la experiencia del cliente. Implica observar a usuarios reales mientras interactúan con el producto para identificar problemas y oportunidades de mejora.'
      },
      category: 'ux',
    },
    {
      id: 'ux',
      term: { es: 'User Experience (UX)', en: 'User Experience (UX)' },
      shortDefinition: {
        en: 'Overall experience when interacting with a digital product or service.',
        es: 'Experiencia general al interactuar con un producto o servicio digital.'
      },
      fullDefinition: {
        en: 'User Experience (UX) is the overall experience a person has when interacting with a digital product or service, including design, functionality, and satisfaction. Good UX increases engagement, loyalty, and business success.',
        es: 'User Experience (UX) es la experiencia general de una persona al interactuar con un producto o servicio digital, incluyendo diseño, funcionalidad y satisfacción. Un buen UX incrementa la interacción, la lealtad y el éxito del negocio.'
      },
      category: 'ux',
    },
    {
      id: 'user-persona',
      term: { es: 'User Persona', en: 'User Persona' },
      shortDefinition: {
        en: 'Semi-fictional representation of an ideal customer.',
        es: 'Representación semi-ficticia del cliente ideal.'
      },
      fullDefinition: {
        en: 'A User Persona is a semi-fictional representation of a brand’s ideal customer, based on data and research, used to guide marketing strategies. Personas help teams understand customer needs, motivations, and behaviors for better targeting.',
        es: 'Una User Persona es una representación semi-ficticia del cliente ideal de una marca, basada en datos e investigación, usada para guiar estrategias de marketing. Las personas ayudan a entender necesidades, motivaciones y comportamientos del cliente para una mejor segmentación.'
      },
      category: 'marketing',
    },
    {
      id: 'user-retention',
      term: { es: 'User Retention', en: 'User Retention' },
      shortDefinition: {
        en: 'Ability to keep customers engaged and returning over time.',
        es: 'Capacidad de mantener clientes comprometidos y recurrentes.'
      },
      fullDefinition: {
        en: 'User Retention is the ability of a brand to keep customers engaged and returning over time, often measured through loyalty programs, personalized marketing, and consistent value delivery. High retention rates indicate strong customer relationships and business health.',
        es: 'User Retention es la capacidad de una marca para mantener a los clientes comprometidos y regresando, medida por programas de lealtad, marketing personalizado y valor constante. Altas tasas de retención indican relaciones sólidas y buena salud del negocio.'
      },
      category: 'marketing',
    },
    {
      id: 'utm-parameters',
      term: { es: 'UTM Parameters (Urchin Tracking Module)', en: 'UTM Parameters (Urchin Tracking Module)' },
      shortDefinition: {
        en: 'Tags added to URLs to track campaign effectiveness in analytics.',
        es: 'Etiquetas añadidas a URLs para rastrear campañas en analítica.'
      },
      fullDefinition: {
        en: 'UTM Parameters (Urchin Tracking Module) are tags added to URLs to track the effectiveness of online campaigns in analytics tools like Google Analytics. They help marketers attribute traffic, measure ROI, and optimize digital strategies.',
        es: 'UTM Parameters (Urchin Tracking Module) son etiquetas añadidas a las URLs para rastrear la efectividad de campañas online en herramientas como Google Analytics. Ayudan a los marketers a atribuir tráfico, medir ROI y optimizar estrategias digitales.'
      },
      category: 'analytics',
    },
    // --- T ---
    {
      id: 'tf-idf',
      term: { es: 'TF-IDF (Frecuencia de Término — Frecuencia Inversa de Documento)', en: 'TF-IDF (Term Frequency — Inverse Document Frequency)' },
      shortDefinition: {
        en: 'Metric for measuring the importance of a term in a document.',
        es: 'Métrica para medir la importancia de un término en un documento.'
      },
      fullDefinition: {
        en: 'TF-IDF (Term Frequency — Inverse Document Frequency) is a way of measuring how important a certain term is for comprehension and the subject of an entire document. It tells you how important the target phrase is based on how frequently it is mentioned within the set of text, helping with keyword analysis and content optimization.',
        es: 'TF-IDF (Frecuencia de Término — Frecuencia Inversa de Documento) es una forma de medir la importancia de un término para la comprensión y el tema de un documento. Indica cuán importante es la frase objetivo según la frecuencia con la que se menciona en el texto, ayudando en el análisis de palabras clave y la optimización de contenido.'
      },
      category: 'metrics',
    },
    {
      id: 'time-on-page',
      term: { es: 'Time on Page', en: 'Time on Page' },
      shortDefinition: {
        en: 'Metric for how long a user spends on a page.',
        es: 'Métrica de cuánto tiempo pasa un usuario en una página.'
      },
      fullDefinition: {
        en: 'Time on Page is the amount of time that a user spends on one page before clicking away. It can be used as an indication of the quality and relevance of the page’s content, helping marketers optimize for engagement.',
        es: 'Time on Page es el tiempo que un usuario pasa en una página antes de salir. Puede usarse como indicativo de la calidad y relevancia del contenido, ayudando a los marketers a optimizar el engagement.'
      },
      category: 'metrics',
    },
    {
      id: 'title-tag',
      term: { es: 'Title Tag', en: 'Title Tag' },
      shortDefinition: {
        en: 'HTML tag that specifies the title of a webpage.',
        es: 'Etiqueta HTML que especifica el título de una página web.'
      },
      fullDefinition: {
        en: 'A Title Tag is an HTML tag, also known as a page title, that specifies the title of a webpage. Placed within the <head> of the HTML, it appears as the clickable title in search engine results and is highly important for SEO.',
        es: 'Un Title Tag es una etiqueta HTML, también conocida como título de página, que especifica el título de una página web. Se coloca dentro del <head> del HTML y aparece como título clicable en los resultados de búsqueda, siendo muy importante para el SEO.'
      },
      category: 'seo',
    },
    {
      id: 'tld',
      term: { es: 'TLD (Top Level Domain)', en: 'TLD (Top Level Domain)' },
      shortDefinition: {
        en: 'Extension of a domain such as .com, .org, .edu.',
        es: 'Extensión de un dominio como .com, .org, .edu.'
      },
      fullDefinition: {
        en: 'A TLD (Top Level Domain) represents the extension of a domain (.gov, .org, .edu, .com, etc.). It helps categorize websites and can influence SEO and user trust.',
        es: 'Un TLD (Top Level Domain) representa la extensión de un dominio (.gov, .org, .edu, .com, etc.). Ayuda a categorizar sitios web y puede influir en el SEO y la confianza del usuario.'
      },
      category: 'technology',
    },
    {
      id: 'topic-efficiency',
      term: { es: 'Topic Efficiency', en: 'Topic Efficiency' },
      shortDefinition: {
        en: 'Metric for the ratio between a topic’s search volume and difficulty.',
        es: 'Métrica de la relación entre volumen de búsqueda y dificultad.'
      },
      fullDefinition: {
        en: 'Topic Efficiency is a qualitative metric that represents the ratio between a topic’s search volume and difficulty. A higher score means higher volume and lower difficulty, indicating a good topic for content marketing.',
        es: 'Topic Efficiency es una métrica cualitativa que representa la relación entre el volumen de búsqueda de un tema y su dificultad. Un puntaje alto suele indicar mayor volumen y menor dificultad, lo que puede señalar un buen tema para marketing de contenidos.'
      },
      category: 'metrics',
    },
    {
      id: 'total-addressable-market',
      term: { es: 'Total Addressable Market (TAM)', en: 'Total Addressable Market (TAM)' },
      shortDefinition: {
        en: 'Total demand from all individuals in a target market.',
        es: 'Demanda total de todos los individuos en un mercado objetivo.'
      },
      fullDefinition: {
        en: 'Total Addressable Market (TAM) is the total demand from all individuals within your target market. It includes demand from those who need an offered product or service, even if they’re not willing, ready, or able to make a purchase.',
        es: 'Total Addressable Market (TAM) es la demanda total de todos los individuos dentro de tu mercado objetivo. Incluye la demanda de quienes necesitan el producto o servicio, aunque no estén dispuestos, listos o puedan comprar.'
      },
      category: 'metrics',
    },
    {
      id: 'total-blocking-time',
      term: { es: 'Total Blocking Time (TBT)', en: 'Total Blocking Time (TBT)' },
      shortDefinition: {
        en: 'Metric for time the main thread is blocked between FCP and TTI.',
        es: 'Métrica del tiempo que el hilo principal está bloqueado entre FCP y TTI.'
      },
      fullDefinition: {
        en: 'Total Blocking Time (TBT) is a metric that measures the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness. It is recommended as a replacement for FID in lab testing for Core Web Vitals.',
        es: 'Total Blocking Time (TBT) es una métrica que mide el tiempo total entre First Contentful Paint (FCP) y Time to Interactive (TTI) en que el hilo principal estuvo bloqueado lo suficiente para impedir la respuesta a entradas. Se recomienda como reemplazo de FID en pruebas de laboratorio para Core Web Vitals.'
      },
      category: 'metrics',
    },
    {
      id: 'total-engagement',
      term: { es: 'Total Engagement', en: 'Total Engagement' },
      shortDefinition: {
        en: 'Sum of all audience interactions on a social network.',
        es: 'Suma de todas las interacciones de la audiencia en una red social.'
      },
      fullDefinition: {
        en: 'Total Engagement is the sum of all audience interactions on a social network over your set date range. Each network measures engagement differently, and the metric can be adjusted for different time periods and platforms.',
        es: 'Total Engagement es la suma de todas las interacciones de la audiencia en una red social durante el periodo seleccionado. Cada red mide el engagement de forma diferente y la métrica puede ajustarse para distintos periodos y plataformas.'
      },
      category: 'metrics',
    },
    {
      id: 'tracking-code',
      term: { es: 'Tracking Code', en: 'Tracking Code' },
      shortDefinition: {
        en: 'JavaScript code placed on a website to send data to analytics tools.',
        es: 'Código JavaScript en un sitio web para enviar datos a herramientas de analítica.'
      },
      fullDefinition: {
        en: 'A Tracking Code is a small piece of JavaScript code placed on a website that sends data to Google Analytics or other analytics tools. It enables reporting on audience behavior, acquisition channels, and user engagement.',
        es: 'Un Tracking Code es un fragmento de código JavaScript colocado en un sitio web que envía datos a Google Analytics u otras herramientas de analítica. Permite reportar sobre el comportamiento de la audiencia, los canales de adquisición y la interacción de los usuarios.'
      },
      category: 'technology',
    },
    {
      id: 'traffic-cost',
      term: { es: 'Traffic Cost', en: 'Traffic Cost' },
      shortDefinition: {
        en: 'How much an advertiser would have to spend on average per month in Google Ads to receive all the traffic the source received from organic search.',
        es: 'Cuánto tendría que gastar un anunciante al mes en Google Ads para recibir todo el tráfico que el sitio recibe de búsqueda orgánica.'
      },
      fullDefinition: {
        en: 'How much an advertiser would have to spend on average per month in Google Ads to receive all the traffic the source received from organic search for all of the keywords and positions listed in the report. This number is provided to give you a baseline estimation of how valuable a domain’s keyword portfolio is. This metric is gathered through a proprietary method that takes multiple values into consideration including CPC, volume, competition level, and more.',
        es: 'Cuánto tendría que gastar un anunciante al mes en Google Ads para recibir todo el tráfico que el sitio recibe de búsqueda orgánica para todas las palabras clave y posiciones del informe. Este número da una estimación del valor del portafolio de palabras clave de un dominio. Se calcula con un método propio que considera CPC, volumen, competencia y más.'
      },
      category: 'metrics',
    },
    {
      id: 'traffic-percent',
      term: { es: 'Traffic %', en: 'Traffic %' },
      shortDefinition: {
        en: 'A metric that represents how much of the overall site traffic is coming from the specific keyword to a specific page.',
        es: 'Métrica que representa qué porcentaje del tráfico total del sitio proviene de una palabra clave específica a una página concreta.'
      },
      fullDefinition: {
        en: 'A metric that represents how much of the overall site traffic is coming from the specific keyword to a specific page. The Traffic % coincides with the overall traffic number shown in the top left in both reports. You will notice a Traffic % for each keyword and the corresponding landing page the queried domain ranks for.',
        es: 'Métrica que representa qué porcentaje del tráfico total del sitio proviene de una palabra clave específica a una página concreta. El Traffic % coincide con el tráfico total mostrado en los informes. Verás un Traffic % para cada palabra clave y la landing page correspondiente.'
      },
      category: 'metrics',
    },
    {
      id: 'trend',
      term: { es: 'Trend', en: 'Trend' },
      shortDefinition: {
        en: 'A graph that Indicates the changes in the number of searches for this keyword over the last 12 months.',
        es: 'Gráfica que indica los cambios en el número de búsquedas de una palabra clave en los últimos 12 meses.'
      },
      fullDefinition: {
        en: 'A graph that Indicates the changes in the number of searches for this keyword over the last 12 months.',
        es: 'Gráfica que indica los cambios en el número de búsquedas de una palabra clave en los últimos 12 meses.'
      },
      category: 'metrics',
    },
    // --- S ---
    // Todos los términos de la letra S ahora tienen una definición corta y una larga, siguiendo el formato de la letra Z.
    {
      id: 'saas',
      term: { es: 'SaaS (Software as a Service)', en: 'SaaS (Software as a Service)' },
      shortDefinition: {
        en: 'A model of delivering software through a subscription-based license hosted from a central location on the web.',
        es: 'Modelo de entrega de software mediante suscripción, alojado desde una ubicación central en la web.'
      },
      fullDefinition: {
        en: 'A model of delivering software through a subscription-based license hosted from a central location on the web. Semrush is an example of a SaaS, along with other services like Gmail, Netflix, or Salesforce.',
        es: 'Modelo de entrega de software mediante suscripción, alojado desde una ubicación central en la web. Ejemplos de SaaS son Semrush, Gmail, Netflix o Salesforce.'
      },
      category: 'technology',
    },
    {
      id: 'sab',
      term: { es: 'SAB (Service Area Business)', en: 'SAB (Service Area Business)' },
      shortDefinition: {
        en: 'A business that may or may not have a local storefront but offers services by traveling to customers’ locations.',
        es: 'Negocio que puede o no tener local físico, pero ofrece servicios desplazándose a la ubicación del cliente.'
      },
      fullDefinition: {
        en: 'A business that may or may not have a local storefront but offers services by traveling to customers’ locations. Common examples include delivery services, plumbers, landscaping companies, etc. Specifying your service area to Google within Google Business Profile (former Google My Business) is an important part of local SEO.',
        es: 'Negocio que puede o no tener local físico, pero ofrece servicios desplazándose a la ubicación del cliente. Ejemplos: servicios de entrega, plomeros, jardineros, etc. Es importante especificar el área de servicio en Google Business Profile para el SEO local.'
      },
      category: 'local-seo',
    },
    {
      id: 'schema-org',
      term: { es: 'Schema.org', en: 'Schema.org' },
      shortDefinition: {
        en: 'A website that published the documentation and guidelines for using structured data markup.',
        es: 'Sitio web que publica la documentación y guías para el uso de datos estructurados.'
      },
      fullDefinition: {
        en: 'A website that published the documentation and guidelines for using structured data markup.',
        es: 'Sitio web que publica la documentación y guías para el uso de datos estructurados.'
      },
      category: 'technology',
    },
    {
      id: 'scraping',
      term: { es: 'Scraping', en: 'Scraping' },
      shortDefinition: {
        en: 'A technique employed to extract large amounts of data from websites.',
        es: 'Técnica utilizada para extraer grandes cantidades de datos de sitios web.'
      },
      fullDefinition: {
        en: '(Web Scraping, Screen Scraping, Web Data Extraction, Web Harvesting etc.) – This is a technique employed to extract large amounts of data from websites whereby the data is extracted and saved to a local file in your computer or to a database in table (spreadsheet) format.',
        es: '(Web Scraping, Screen Scraping, Web Data Extraction, Web Harvesting, etc.) – Técnica utilizada para extraer grandes cantidades de datos de sitios web, guardando la información en un archivo local o en una base de datos en formato de tabla.'
      },
      category: 'technology',
    },
    {
      id: 'search-engine',
      term: { es: 'Search Engine (SE)', en: 'Search Engine (SE)' },
      shortDefinition: {
        en: 'A program that searches documents for relevant matches of a user’s keyword phrase and returns a list of the most relevant matches.',
        es: 'Programa que busca coincidencias relevantes de una palabra clave y devuelve una lista de los resultados más relevantes.'
      },
      fullDefinition: {
        en: 'A program, which searches a document or group of documents for relevant matches of a users keyword phrase and returns a list of the most relevant matches. Internet search engines such as Google and Yahoo search the entire internet for relevant matches.',
        es: 'Programa que busca coincidencias relevantes de una palabra clave en uno o varios documentos y devuelve una lista de los resultados más relevantes. Motores de búsqueda como Google y Yahoo buscan en todo internet.'
      },
      category: 'technology',
    },
    {
      id: 'search-traffic',
      term: { es: 'Search Traffic', en: 'Search Traffic' },
      shortDefinition: {
        en: 'Traffic that comes to your site directly from a search engine.',
        es: 'Tráfico que llega a tu sitio directamente desde un motor de búsqueda.'
      },
      fullDefinition: {
        en: 'Traffic that comes to your site directly from a search engine.',
        es: 'Tráfico que llega a tu sitio directamente desde un motor de búsqueda.'
      },
      category: 'metrics',
    },
    {
      id: 'semantic-core',
      term: { es: 'Semantic Core', en: 'Semantic Core' },
      shortDefinition: {
        en: 'Group of the keywords most accurately determining the direction or context of the website.',
        es: 'Grupo de palabras clave que determinan con mayor precisión la dirección o contexto del sitio web.'
      },
      fullDefinition: {
        en: 'Group of the keywords most accurately determining the direction or context of the website. By analyzing the keywords in a Semantic Core, search engines can more accurately match a website\'s content with relevant user queries, ultimately leading to higher rankings and more targeted traffic.',
        es: 'Grupo de palabras clave que determinan con mayor precisión la dirección o contexto del sitio web. Analizando estas palabras, los motores de búsqueda pueden emparejar mejor el contenido con las consultas relevantes, logrando mejores posiciones y tráfico más segmentado.'
      },
      category: 'seo',
    },
    {
      id: 'semrush-rank',
      term: { es: 'Semrush Rank', en: 'Semrush Rank' },
      shortDefinition: {
        en: 'A custom ranking for domains indicating their presence on the Internet based on organic rankings and search traffic.',
        es: 'Ranking personalizado para dominios que indica su presencia en Internet según rankings orgánicos y tráfico de búsqueda.'
      },
      fullDefinition: {
        en: 'A custom ranking for domains. This indicates how much of a presence a domain has on the Internet based on organic rankings and search traffic. This number is calculated based on the visibility of the domain’s ranking for the keywords that are displayed in our database. The amount of information we show for this domain will be based on how we get our data.',
        es: 'Ranking personalizado para dominios que indica su presencia en Internet según rankings orgánicos y tráfico de búsqueda. El número se calcula con base en la visibilidad del dominio para las palabras clave de nuestra base de datos.'
      },
      category: 'metrics',
    },
    {
      id: 'sem',
      term: { es: 'SEM (Search engine marketing)', en: 'SEM (Search engine marketing)' },
      shortDefinition: {
        en: 'A professional service with the goal of bringing more traffic to a website through Search Engines.',
        es: 'Servicio profesional cuyo objetivo es atraer más tráfico a un sitio web mediante motores de búsqueda.'
      },
      fullDefinition: {
        en: 'A professional service with the goal of bringing more traffic to a website through Search Engines. Tactics include PPC (pay–per–click) advertising, Google Shopping, Social Media Marketing, SEO, Content Marketing, and more.',
        es: 'Servicio profesional cuyo objetivo es atraer más tráfico a un sitio web mediante motores de búsqueda. Incluye tácticas como PPC, Google Shopping, SMM, SEO, Content Marketing, entre otras.'
      },
      category: 'advertising',
    },
    {
      id: 'seo',
      term: { es: 'SEO (Search engine optimization)', en: 'SEO (Search engine optimization)' },
      shortDefinition: {
        en: 'A number of practices with the goal of acquiring more organic traffic to a website from search engines.',
        es: 'Conjunto de prácticas cuyo objetivo es obtener más tráfico orgánico desde motores de búsqueda.'
      },
      fullDefinition: {
        en: 'A number of practices with the goal of acquiring more organic traffic to a website from search engines. Tactics include making changes to the technical and content aspects of a website in order to improve its visibility.',
        es: 'Conjunto de prácticas cuyo objetivo es obtener más tráfico orgánico desde motores de búsqueda. Incluye cambios técnicos y de contenido para mejorar la visibilidad.'
      },
      category: 'seo',
    },
    {
      id: 'serp',
      term: { es: 'SERP', en: 'SERP' },
      shortDefinition: {
        en: 'Stands for Search Engine Results Page, the listing of all the web pages, advertisements, and SERP features given by a search engine in response to a query.',
        es: 'Página de resultados de búsqueda, que muestra todas las páginas web, anuncios y funciones SERP en respuesta a una consulta.'
      },
      fullDefinition: {
        en: 'Stands for Search Engine Results Page, and is the listing of all the web pages, advertisements, and SERP features given by a search engine in response to a query.',
        es: 'Página de resultados de búsqueda, que muestra todas las páginas web, anuncios y funciones SERP en respuesta a una consulta.'
      },
      category: 'seo',
    },
    {
      id: 'serp-features',
      term: { es: 'SERP Features', en: 'SERP Features' },
      shortDefinition: {
        en: 'Any result on a Google Search Engine Results Page (SERP) that is not a traditional organic result.',
        es: 'Cualquier resultado en una página de resultados de Google que no sea un resultado orgánico tradicional.'
      },
      fullDefinition: {
        en: 'A SERP feature is any result on a Google Search Engine Results Page (SERP) that is not a traditional organic result. The most common SERP Features are paid results, featured snippets, local packs, knowledge panels, etc.',
        es: 'Una función SERP es cualquier resultado en una página de resultados de Google que no sea un resultado orgánico tradicional. Los más comunes son resultados pagados, featured snippets, local packs, knowledge panels, etc.'
      },
      category: 'seo',
    },
    {
      id: 'serp-source',
      term: { es: 'SERP Source', en: 'SERP Source' },
      shortDefinition: {
        en: 'Refers to a snapshot of the Search Engine Results Page where Semrush gathered its data.',
        es: 'Se refiere a una captura de la página de resultados de búsqueda donde Semrush obtuvo sus datos.'
      },
      fullDefinition: {
        en: 'Refers to a snapshot of the Search Engine Results Page where Semrush gathered its data. When Semrush determines a ranking for a domain/keyword, you can see the ranking reflected in the SERP Source. Once you click the icon, a pop–up window will be displayed asking you to “View the SERP”, and then you can see the screenshot.',
        es: 'Se refiere a una captura de la página de resultados de búsqueda donde Semrush obtuvo sus datos. Cuando Semrush determina un ranking para un dominio/palabra clave, puedes ver el ranking reflejado en el SERP Source. Al hacer clic en el icono, se muestra una ventana emergente para “Ver la SERP” y ver la captura.'
      },
      category: 'metrics',
    },
    {
      id: 'serp-volatility',
      term: { es: 'SERP Volatility', en: 'SERP Volatility' },
      shortDefinition: {
        en: 'The change in the positions on SERP that are usually caused by an update of the Google database or algorithm.',
        es: 'El cambio en las posiciones de la SERP, generalmente causado por una actualización de la base de datos o algoritmo de Google.'
      },
      fullDefinition: {
        en: 'The change in the positions on SERP that are usually caused by an update of the Google database or algorithm. The cause of great angst and consternation for webmasters whose rankings slip in the SERPs. Or, the period of time during a Google index update when different data centers have different data.',
        es: 'El cambio en las posiciones de la SERP, generalmente causado por una actualización de la base de datos o algoritmo de Google. Es motivo de preocupación para webmasters cuyos rankings bajan. También se refiere al periodo durante una actualización del índice de Google cuando diferentes centros de datos muestran información distinta.'
      },
      category: 'metrics',
    },
    {
      id: 'serviceable-available-market',
      term: { es: 'Serviceable Available Market (SAM)', en: 'Serviceable Available Market (SAM)' },
      shortDefinition: {
        en: 'The amount of demand within the Total Addressable Market from individuals who are ready and able to purchase an offered product or service.',
        es: 'Cantidad de demanda dentro del mercado total disponible de personas listas y capaces de comprar un producto o servicio.'
      },
      fullDefinition: {
        en: 'The amount of demand within the Total Addressable Market from individuals who are ready and able to purchase an offered product or service.',
        es: 'Cantidad de demanda dentro del mercado total disponible de personas listas y capaces de comprar un producto o servicio.'
      },
      category: 'metrics',
    },
    {
      id: 'se-traffic-price',
      term: { es: 'SE Traffic Price', en: 'SE Traffic Price' },
      shortDefinition: {
        en: 'Estimated monthly price for an Ad campaign for the same amount of organic traffic as shown in the Domain\'s report.',
        es: 'Precio mensual estimado de una campaña publicitaria para obtener el mismo tráfico orgánico que se muestra en el informe del dominio.'
      },
      fullDefinition: {
        en: 'Estimated monthly price for an Ad campaign for the same amount of organic traffic as shown in the Domain\'s report.',
        es: 'Precio mensual estimado de una campaña publicitaria para obtener el mismo tráfico orgánico que se muestra en el informe del dominio.'
      },
      category: 'metrics',
    },
    {
      id: 'share-of-voice',
      term: { es: 'Share of Voice', en: 'Share of Voice' },
      shortDefinition: {
        en: 'A metric that considers the total combined volume of all of the keywords in a Position Tracking campaign, and shows the ratio of traffic that each site gets.',
        es: 'Métrica que considera el volumen total combinado de todas las palabras clave en una campaña de seguimiento de posiciones y muestra la proporción de tráfico que recibe cada sitio.'
      },
      fullDefinition: {
        en: 'A metric that considers the total combined volume of all of the keywords in a Position Tracking campaign, and shows the ratio of traffic that each site gets. This metric is weighted by the actual number of searches and estimated traffic rather than just by the number of keywords. Share of voice represents how often a website shows up out of every search, not just every keyword.',
        es: 'Métrica que considera el volumen total combinado de todas las palabras clave en una campaña de seguimiento de posiciones y muestra la proporción de tráfico que recibe cada sitio. Está ponderada por el número real de búsquedas y tráfico estimado, no solo por el número de palabras clave. El share of voice representa la frecuencia con la que un sitio aparece en las búsquedas.'
      },
      category: 'metrics',
    },
    {
      id: 'sitelinks',
      term: { es: 'Sitelinks', en: 'Sitelinks' },
      shortDefinition: {
        en: 'A SERP Feature that shows the domain\'s main page as well as more specially, targeted internal links.',
        es: 'Función SERP que muestra la página principal del dominio y enlaces internos especialmente seleccionados.'
      },
      fullDefinition: {
        en: 'A SERP Feature that shows the domain\'s main page as well as more specially, targeted internal links.',
        es: 'Función SERP que muestra la página principal del dominio y enlaces internos especialmente seleccionados.'
      },
      category: 'seo',
    },
    {
      id: 'sitemap-xml',
      term: { es: 'Sitemap.xml', en: 'Sitemap.xml' },
      shortDefinition: {
        en: 'An XML file listing the URLs of a website.',
        es: 'Archivo XML que lista las URLs de un sitio web.'
      },
      fullDefinition: {
        en: 'An XML file listing the URLs of a website. This file communicates to bots and crawlers what files and information are available on a site. When search engines are crawling a website, they will review the sitemap to understand what is important and how to navigate the site to find documents and files to crawl and index. This is different from a site map HTML file, which is used to show people the areas of a website.',
        es: 'Archivo XML que lista las URLs de un sitio web. Este archivo comunica a los bots y rastreadores qué archivos e información están disponibles en el sitio. Los motores de búsqueda revisan el sitemap para entender qué es importante y cómo navegar el sitio para encontrar documentos e indexar. Es diferente de un archivo HTML de mapa del sitio, que se usa para mostrar a las personas las áreas del sitio web.'
      },
      category: 'technology',
    },
    {
      id: 'smm',
      term: { es: 'SMM (Social media marketing)', en: 'SMM (Social media marketing)' },
      shortDefinition: {
        en: 'A professional service that uses social media platforms to promote a product or service on the Internet.',
        es: 'Servicio profesional que utiliza redes sociales para promocionar un producto o servicio en Internet.'
      },
      fullDefinition: {
        en: 'A professional service that uses social media platforms to promote a product or service on the Internet.',
        es: 'Servicio profesional que utiliza redes sociales para promocionar un producto o servicio en Internet.'
      },
      category: 'advertising',
    },
    {
      id: 'social-traffic',
      term: { es: 'Social Traffic', en: 'Social Traffic' },
      shortDefinition: {
        en: 'Traffic that comes to your site from various social media platforms.',
        es: 'Tráfico que llega a tu sitio desde diversas plataformas de redes sociales.'
      },
      fullDefinition: {
        en: 'Traffic that comes to your site from various social media platforms.',
        es: 'Tráfico que llega a tu sitio desde diversas plataformas de redes sociales.'
      },
      category: 'metrics',
    },
    {
      id: 'split-testing',
      term: { es: 'Split Testing', en: 'Split Testing' },
      shortDefinition: {
        en: 'The process of comparing two versions of a web page, email, or another marketing asset with just one varying element.',
        es: 'Proceso de comparar dos versiones de una página web, email u otro recurso de marketing con solo un elemento diferente.'
      },
      fullDefinition: {
        en: 'Sometimes referred to as A/B Testing, the process of comparing two versions of a web page, email, or another marketing asset with just one varying element. For instance, if you’re A/B testing a headline, you would create two versions of the same page with only the headline changed, and would then track which version performs better.',
        es: 'También llamado A/B Testing, es el proceso de comparar dos versiones de una página web, email u otro recurso de marketing con solo un elemento diferente. Por ejemplo, si pruebas dos titulares, creas dos versiones de la misma página cambiando solo el titular y luego mides cuál funciona mejor.'
      },
      category: 'metrics',
    },
    {
      id: 'sponsored',
      term: { es: 'Sponsored', en: 'Sponsored' },
      shortDefinition: {
        en: 'An attribute that is used for all paid/sponsored content.',
        es: 'Atributo utilizado para todo contenido pagado o patrocinado.'
      },
      fullDefinition: {
        en: 'An attribute that is used for all paid/sponsored content. To mark sponsored content, add the rel="sponsored" attribute to the corresponding link: <a href="http://www.awesomeurl.com/" rel="nofollow sponsored">Link text</a>',
        es: 'Atributo utilizado para todo contenido pagado o patrocinado. Para marcar contenido patrocinado, añade el atributo rel="sponsored" al enlace correspondiente: <a href="http://www.awesomeurl.com/" rel="nofollow sponsored">Texto del enlace</a>'
      },
      category: 'advertising',
    },
    {
      id: 'ssl-certificate',
      term: { es: 'SSL Certificate', en: 'SSL Certificate' },
      shortDefinition: {
        en: 'A small data file that encrypts and protects digital information.',
        es: 'Archivo de datos que cifra y protege información digital.'
      },
      fullDefinition: {
        en: 'A small data file that encrypts and protects digital information. When a certificate is implemented by a site, it ensures a secure connection between a web server and web browser, protecting the information of the Internet user and website. When a website uses an SSL certificate it will add the padlock icon and https to the website’s address.',
        es: 'Archivo de datos que cifra y protege información digital. Cuando un sitio implementa un certificado, asegura una conexión segura entre el servidor y el navegador, protegiendo la información del usuario y del sitio. Un sitio con SSL muestra el candado y https en la dirección.'
      },
      category: 'technology',
    },
    {
      id: 'structured-data',
      term: { es: 'Structured Data (markup)', en: 'Structured Data (markup)' },
      shortDefinition: {
        en: 'A semantic vocabulary of tags (or microdata) that you can add to your HTML to improve the way search engines read and represent your page in SERPs.',
        es: 'Vocabulario semántico de etiquetas (o microdatos) que puedes añadir a tu HTML para mejorar cómo los motores de búsqueda leen y representan tu página en las SERPs.'
      },
      fullDefinition: {
        en: 'A semantic vocabulary of tags (or microdata) that you can add to your HTML to improve the way search engines read and represent your page in SERPs.',
        es: 'Vocabulario semántico de etiquetas (o microdatos) que puedes añadir a tu HTML para mejorar cómo los motores de búsqueda leen y representan tu página en las SERPs.'
      },
      category: 'seo',
    },
    {
      id: 'subdomain',
      term: { es: 'Subdomain', en: 'Subdomain' },
      shortDefinition: {
        en: 'An area of a website within a root domain that has its own address indicated by its name and a period before the root domain.',
        es: 'Área de un sitio web dentro de un dominio raíz que tiene su propia dirección, indicada por su nombre y un punto antes del dominio raíz.'
      },
      fullDefinition: {
        en: 'An area of a website within a root domain that has its own address indicated by its name and a period before the root domain. For example, blog.example.com is a subdomain within the example.com root domain.',
        es: 'Área de un sitio web dentro de un dominio raíz que tiene su propia dirección, indicada por su nombre y un punto antes del dominio raíz. Por ejemplo, blog.example.com es un subdominio dentro de example.com.'
      },
      category: 'technology',
    },
    {
      id: 'subfolder',
      term: { es: 'Subfolder', en: 'Subfolder' },
      shortDefinition: {
        en: 'A section within a website indicated by a slash “/” after the TLD and the name of the folder.',
        es: 'Sección dentro de un sitio web indicada por una barra “/” después del TLD y el nombre de la carpeta.'
      },
      fullDefinition: {
        en: 'A subfolder is a section within a website indicated by a slash “/” after the TLD and the name of the folder. For example, example.com/subfolder is a subfolder within the example.com domain.',
        es: 'Una subcarpeta es una sección dentro de un sitio web indicada por una barra “/” después del TLD y el nombre de la carpeta. Por ejemplo, example.com/subfolder es una subcarpeta dentro del dominio example.com.'
      },
      category: 'technology',
    },
    // --- R ---
    // Todos los términos de la letra R ahora tienen una definición corta y una larga, siguiendo el formato de la letra Z.
    {
      id: 'readability-score',
      term: { es: 'Readability Score', en: 'Readability Score' },
      shortDefinition: {
        en: 'A metric based on the Flesch–Kincaid test that describes how difficult is to understand the text.',
        es: 'Métrica basada en el test Flesch–Kincaid que describe la dificultad de comprensión de un texto.'
      },
      fullDefinition: {
        en: 'A metric based on the Flesch–Kincaid test of readability that describes how difficult is to understand the text, has a range from 0 to 100. The higher the score, the easier it is to understand the passage. Semrush will suggest the average of your top ten rivals’ readability scores as the goal for your content’s readability.',
        es: 'Métrica basada en el test Flesch–Kincaid que describe la dificultad de comprensión de un texto, con un rango de 0 a 100. Cuanto mayor es el puntaje, más fácil es entender el texto. Semrush sugiere como objetivo el promedio de los puntajes de legibilidad de tus diez principales rivales.'
      },
      category: 'metrics',
    },
    {
      id: 'redirect',
      term: { es: 'Redirect', en: 'Redirect' },
      shortDefinition: {
        en: 'Any of several methods used to change the address of a landing page.',
        es: 'Cualquier método utilizado para cambiar la dirección de una landing page.'
      },
      fullDefinition: {
        en: 'Any of several methods used to change the address of a landing page, such as when a site is moved to a new domain or in the case of a gateway.',
        es: 'Cualquier método utilizado para cambiar la dirección de una landing page, como cuando un sitio se traslada a un nuevo dominio o en el caso de una puerta de enlace.'
      },
      category: 'technology',
    },
    {
      id: 'referral-traffic',
      term: { es: 'Referral Traffic', en: 'Referral Traffic' },
      shortDefinition: {
        en: 'Traffic that is being sent to your site from a web source outside the search engines and social media.',
        es: 'Tráfico que llega a tu sitio desde una fuente web fuera de los motores de búsqueda y redes sociales.'
      },
      fullDefinition: {
        en: 'Traffic that is being sent to your site from a web source (backlink) outside the SE and SM. For example, whenever someone clicks on a hyperlink from another site that directs to yours, it would be considered Referral Traffic.',
        es: 'Tráfico que llega a tu sitio desde una fuente web (backlink) fuera de los motores de búsqueda y redes sociales. Por ejemplo, cuando alguien hace clic en un enlace de otro sitio que dirige al tuyo, se considera Referral Traffic.'
      },
      category: 'metrics',
    },
    {
      id: 'referrer',
      term: { es: 'Referrer', en: 'Referrer' },
      shortDefinition: {
        en: 'The search result, domain, or social media source, from which a website visitor originates.',
        es: 'El resultado de búsqueda, dominio o fuente de redes sociales de donde proviene un visitante.'
      },
      fullDefinition: {
        en: 'The search result, domain, or social media source, from which a website visitor originates.',
        es: 'El resultado de búsqueda, dominio o fuente de redes sociales de donde proviene un visitante.'
      },
      category: 'metrics',
    },
    {
      id: 'relevancy',
      term: { es: 'Relevancy', en: 'Relevancy' },
      shortDefinition: {
        en: 'A metric that shows the extent to which the site corresponds to the searcher\'s query.',
        es: 'Métrica que muestra en qué medida el sitio corresponde a la consulta del usuario.'
      },
      fullDefinition: {
        en: 'A metric that shows the extent to which the site corresponds to the searcher\'s query according to the search engine\'s algorithm.',
        es: 'Métrica que muestra en qué medida el sitio corresponde a la consulta del usuario según el algoritmo del motor de búsqueda.'
      },
      category: 'metrics',
    },
    {
      id: 'results',
      term: { es: 'Results', en: 'Results' },
      shortDefinition: {
        en: 'The amount of all search results returned for a keyword.',
        es: 'La cantidad de todos los resultados de búsqueda devueltos para una palabra clave.'
      },
      fullDefinition: {
        en: 'The amount of all search results returned for a keyword.',
        es: 'La cantidad de todos los resultados de búsqueda devueltos para una palabra clave.'
      },
      category: 'metrics',
    },
    {
      id: 'review-management-semrush',
      term: { es: 'Review Management (en Semrush)', en: 'Review Management (in Semrush)' },
      shortDefinition: {
        en: 'This Semrush Local tool monitors online customer reviews across the web and provides in-depth competitor analytics.',
        es: 'Esta herramienta de Semrush Local monitorea reseñas de clientes en la web y ofrece análisis de la competencia.'
      },
      fullDefinition: {
        en: 'This Semrush Local tool monitors online customer reviews across the web and provides in-depth competitor analytics. It allows you to monitor reviews from one centralized dashboard and use AI-generated suggestions and auto-replies for Google Business Profile reviews.',
        es: 'Esta herramienta de Semrush Local monitorea reseñas de clientes en la web y ofrece análisis de la competencia. Permite monitorear reseñas desde un panel centralizado y usar sugerencias y respuestas automáticas generadas por IA para reseñas de Google Business Profile.'
      },
      category: 'local-seo',
    },
    {
      id: 'reviews',
      term: { es: 'Reviews', en: 'Reviews' },
      shortDefinition: {
        en: 'A SERP feature that can be displayed alongside a domain\'s result in Google Search.',
        es: 'Función de la SERP que puede mostrarse junto al resultado de un dominio en Google Search.'
      },
      fullDefinition: {
        en: 'A SERP feature that can be displayed alongside a domain\'s result in Google Search. Reviews indicate customers’ experience and satisfaction with a commercial business, specific product, or type of media (e.g. a book or movie), and more. The rating that coincides with your reviews will always be located directly under your link and will display your "star" rating as well as how many reviews you have.',
        es: 'Función de la SERP que puede mostrarse junto al resultado de un dominio en Google Search. Las reseñas indican la experiencia y satisfacción de los clientes con un negocio, producto o tipo de medio (por ejemplo, un libro o película). La calificación que coincide con tus reseñas siempre estará debajo de tu enlace y mostrará tu puntuación en "estrellas" y la cantidad de reseñas.'
      },
      category: 'seo',
    },
    {
      id: 'rich-snippet',
      term: { es: 'Rich Snippet', en: 'Rich Snippet' },
      shortDefinition: {
        en: 'A rich snippet on a search engine result displays extra information associated with a URL.',
        es: 'Un rich snippet en un resultado de búsqueda muestra información extra asociada a una URL.'
      },
      fullDefinition: {
        en: 'A rich snippet on a search engine result displays extra information associated with a URL. For example, review stars, business hours, images, and categories are all examples of rich snippets that can appear with a regular result. These bits of information appearing on SERPs are the result of applying structured data markup to your website and labeling your site’s information accordingly. Some rich snippets can also be referred to as SERP features.',
        es: 'Un rich snippet en un resultado de búsqueda muestra información extra asociada a una URL. Por ejemplo, estrellas de reseñas, horarios, imágenes y categorías son ejemplos de rich snippets que pueden aparecer junto a un resultado normal. Esta información aparece en las SERPs gracias al uso de datos estructurados en el sitio web. Algunos rich snippets también se consideran funciones de la SERP.'
      },
      category: 'seo',
    },
    {
      id: 'robots-txt',
      term: { es: 'Robots.txt', en: 'Robots.txt' },
      shortDefinition: {
        en: 'A public file used by webmasters that gives instructions to bots about how to crawl their websites.',
        es: 'Archivo público usado por webmasters que da instrucciones a los bots sobre cómo rastrear sus sitios web.'
      },
      fullDefinition: {
        en: 'A public file used by webmasters that gives instructions to bots about how to crawl their websites. Bots will read the robots.txt file before visiting URLs, and the file has the ability to tell bots not to visit specific directories (folders/subfolders) with a “disallow” command. This file can also tell a bot the specific URLs of a website\'s sitemaps if there are multiple sitemaps for a single site. To find a domain’s robots.txt, enter /robots.txt after the TLD. For example, semrush.com/robots.txt.',
        es: 'Archivo público usado por webmasters que da instrucciones a los bots sobre cómo rastrear sus sitios web. Los bots leen el archivo robots.txt antes de visitar URLs, y el archivo puede indicar a los bots que no visiten ciertos directorios con el comando “disallow”. También puede indicar la ubicación de los sitemaps si hay varios en un sitio. Para encontrar el robots.txt de un dominio, añade /robots.txt después del TLD. Ejemplo: semrush.com/robots.txt.'
      },
      category: 'technology',
    },
    {
      id: 'roi',
      term: { es: 'ROI (Return on Investment)', en: 'ROI (Return on Investment)' },
      shortDefinition: {
        en: 'A ratio between net income and investment to analyze and quantify the return on investment.',
        es: 'Relación entre ingreso neto e inversión para analizar y cuantificar el retorno de inversión.'
      },
      fullDefinition: {
        en: 'A ratio between net income and investment to analyze and quantify the return on investment, and thus the cost/benefit of different schemes.',
        es: 'Relación entre ingreso neto e inversión para analizar y cuantificar el retorno de inversión, y así el costo/beneficio de diferentes esquemas.'
      },
      category: 'metrics',
    },
    {
      id: 'root-domain',
      term: { es: 'Root Domain', en: 'Root Domain' },
      shortDefinition: {
        en: 'The highest hierarchical level of a website that contains all subdomains and subfolders within it.',
        es: 'El nivel jerárquico más alto de un sitio web que contiene todos los subdominios y subcarpetas.'
      },
      fullDefinition: {
        en: 'The highest hierarchical level of a website that contains all subdomains and subfolders within it. The root domain is followed by a period and the TLD (.com, .org, etc). For example, example.com is a root domain, while blog.example.com is a subdomain within it.',
        es: 'El nivel jerárquico más alto de un sitio web que contiene todos los subdominios y subcarpetas. El root domain va seguido de un punto y el TLD (.com, .org, etc). Por ejemplo, example.com es un root domain, mientras que blog.example.com es un subdominio dentro de él.'
      },
      category: 'technology',
    },
    // --- Q ---
    // Todos los términos de la letra Q ahora tienen una definición corta y una larga, siguiendo el formato de la letra Z.
    {
      id: 'qualified-lead',
      term: { es: 'Qualified Lead', en: 'Qualified Lead' },
      shortDefinition: {
        en: 'A potential customer who has shown enough interest or engagement to be considered likely to convert.',
        es: 'Cliente potencial que ha mostrado suficiente interés o interacción para considerarse probable de convertir.'
      },
      fullDefinition: {
        en: 'A potential customer who has shown enough interest or engagement to be considered likely to convert, based on predefined criteria.',
        es: 'Cliente potencial que ha mostrado suficiente interés o interacción para considerarse probable de convertir, según criterios predefinidos.'
      },
      category: 'strategy',
    },
    {
      id: 'quality-score',
      term: { es: 'Quality Score', en: 'Quality Score' },
      shortDefinition: {
        en: 'A metric used by platforms like Google Ads to measure the relevance and quality of keywords, ads, and landing pages.',
        es: 'Métrica utilizada por plataformas como Google Ads para medir la relevancia y calidad de palabras clave, anuncios y landing pages.'
      },
      fullDefinition: {
        en: 'A metric used by platforms like Google Ads to measure the relevance and quality of keywords, ads, and landing pages. A higher score can lower costs and improve ad placement.',
        es: 'Métrica utilizada por plataformas como Google Ads para medir la relevancia y calidad de palabras clave, anuncios y landing pages. Un puntaje más alto puede reducir costos y mejorar la posición del anuncio.'
      },
      category: 'advertising',
    },
    {
      id: 'query',
      term: { es: 'Query (Search Query)', en: 'Query (Search Query)' },
      shortDefinition: {
        en: 'The exact words or phrases a user types into a search engine.',
        es: 'Las palabras o frases exactas que un usuario escribe en un motor de búsqueda.'
      },
      fullDefinition: {
        en: 'The exact words or phrases a user types into a search engine, forming the basis of SEO and SEM strategies.',
        es: 'Las palabras o frases exactas que un usuario escribe en un motor de búsqueda, formando la base de las estrategias de SEO y SEM.'
      },
      category: 'seo',
    },
    {
      id: 'qr-code',
      term: { es: 'Código QR (Quick Response Code)', en: 'Quick Response (QR) Code' },
      shortDefinition: {
        en: 'A scannable code that links users directly to digital content such as websites, promotions, or apps.',
        es: 'Código escaneable que enlaza directamente a los usuarios con contenido digital como sitios web, promociones o apps.'
      },
      fullDefinition: {
        en: 'A scannable code that links users directly to digital content such as websites, promotions, or apps, widely used in mobile marketing.',
        es: 'Código escaneable que enlaza directamente a los usuarios con contenido digital como sitios web, promociones o apps, ampliamente usado en marketing móvil.'
      },
      category: 'technology',
    },
    {
      id: 'quota-sampling',
      term: { es: 'Quota Sampling (Market Research)', en: 'Quota Sampling (Market Research)' },
      shortDefinition: {
        en: 'A non-random sampling method where researchers ensure certain segments of the population are represented.',
        es: 'Método de muestreo no aleatorio donde los investigadores aseguran que ciertos segmentos de la población estén representados.'
      },
      fullDefinition: {
        en: 'A non-random sampling method where researchers ensure certain segments of the population are represented in marketing studies.',
        es: 'Método de muestreo no aleatorio donde los investigadores aseguran que ciertos segmentos de la población estén representados en estudios de marketing.'
      },
      category: 'metrics',
    },
    {
      id: 'quora-marketing',
      term: { es: 'Quora Marketing', en: 'Quora Marketing' },
      shortDefinition: {
        en: 'Leveraging the Q&A platform Quora to build brand authority, answer questions, and drive traffic to websites.',
        es: 'Aprovechar la plataforma de preguntas y respuestas Quora para construir autoridad de marca, responder preguntas y atraer tráfico a sitios web.'
      },
      fullDefinition: {
        en: 'Leveraging the Q&A platform Quora to build brand authority, answer questions, and drive traffic to websites.',
        es: 'Aprovechar la plataforma de preguntas y respuestas Quora para construir autoridad de marca, responder preguntas y atraer tráfico a sitios web.'
      },
      category: 'strategy',
    },
    {
      id: 'quarterly-report',
      term: { es: 'Quarterly Report (Marketing Analytics)', en: 'Quarterly Report (Marketing Analytics)' },
      shortDefinition: {
        en: 'A performance summary produced every three months to evaluate campaign results, ROI, and strategic adjustments.',
        es: 'Resumen de desempeño producido cada tres meses para evaluar resultados de campañas, ROI y ajustes estratégicos.'
      },
      fullDefinition: {
        en: 'A performance summary produced every three months to evaluate campaign results, ROI, and strategic adjustments.',
        es: 'Resumen de desempeño producido cada tres meses para evaluar resultados de campañas, ROI y ajustes estratégicos.'
      },
      category: 'metrics',
    },
    {
      id: 'query-expansion',
      term: { es: 'Query Expansion (SEO/SEM)', en: 'Query Expansion (SEO/SEM)' },
      shortDefinition: {
        en: 'A technique that broadens search queries by including synonyms.',
        es: 'Técnica que amplía las consultas de búsqueda incluyendo sinónimos.'
      },
      fullDefinition: {
        en: 'A technique that broadens search queries by including synonyms.',
        es: 'Técnica que amplía las consultas de búsqueda incluyendo sinónimos.'
      },
      category: 'seo',
    },
    // --- P ---
    {
      id: 'page-title',
      term: { es: 'Page Title', en: 'Page Title' },
      shortDefinition: {
        en: 'An HTML tag that specifies the title of a webpage, appearing as the clickable title in search engine results.',
        es: 'Etiqueta HTML que especifica el título de una página web y aparece como título clicable en los resultados de búsqueda.'
      },
      fullDefinition: {
        en: 'An HTML tag, also known as a title tag that specifies the title of a webpage. The code is placed within the header tag (<head>) of a webpage’s HTML. The text written in the tag is what will appear as the page’s clickable title when it ranks on a search engine results page. For this reason, page titles are highly important to SEO. In the written form the page title looks like: <title>Title of Page</title>',
        es: 'Etiqueta HTML, también conocida como title tag, que especifica el título de una página web. El código se coloca dentro de la etiqueta <head> del HTML. El texto escrito en la etiqueta es lo que aparecerá como título clicable en los resultados de búsqueda. Por eso, los títulos de página son muy importantes para el SEO. En forma escrita se ve así: <title>Título de la Página</title>'
      },
      category: 'seo',
    },
    {
      id: 'page-view',
      term: { es: 'Page View', en: 'Page View' },
      shortDefinition: {
        en: 'The event where a user views a web page one time.',
        es: 'Evento en el que un usuario visualiza una página web una vez.'
      },
      fullDefinition: {
        en: 'The event where a user views a web page one time.',
        es: 'Evento en el que un usuario visualiza una página web una vez.'
      },
      category: 'metrics',
    },
    {
      id: 'pagination',
      term: { es: 'Pagination', en: 'Pagination' },
      shortDefinition: {
        en: 'The division of web page content into numbered pages.',
        es: 'División del contenido de una página web en páginas numeradas.'
      },
      fullDefinition: {
        en: 'The division of web page content into numbered pages, commonly organized with numbered navigation at the bottom of a page and parameters in the URL.',
        es: 'División del contenido de una página web en páginas numeradas, comúnmente organizada con navegación numerada al pie de página y parámetros en la URL.'
      },
      category: 'technology',
    },
    {
      id: 'position-serp',
      term: { es: 'Position (SERP)', en: 'Position or Pos (SERP)' },
      shortDefinition: {
        en: 'Position of the site’s page for the search query in Google at the moment of data collection.',
        es: 'Posición de la página del sitio para la consulta de búsqueda en Google en el momento de la recolección de datos.'
      },
      fullDefinition: {
        en: 'Position of the site’s page for the search query in Google at the moment of data collection.',
        es: 'Posición de la página del sitio para la consulta de búsqueda en Google en el momento de la recolección de datos.'
      },
      category: 'seo',
    },
    {
      id: 'ppa',
      term: { es: 'PPA (Pay Per Action)', en: 'PPA (Pay Per Action)' },
      shortDefinition: {
        en: 'An Internet advertising model similar to Pay Per Click except for publishers only get paid when click-throughs result in conversions.',
        es: 'Modelo de publicidad en internet similar al Pay Per Click, pero los editores solo cobran cuando los clics resultan en conversiones.'
      },
      fullDefinition: {
        en: 'An Internet advertising model similar to Pay Per Click except for publishers only get paid when click-throughs result in conversions.',
        es: 'Modelo de publicidad en internet similar al Pay Per Click, pero los editores solo cobran cuando los clics resultan en conversiones.'
      },
      category: 'advertising',
    },
    {
      id: 'ppc',
      term: { es: 'PPC (Pay Per Click)', en: 'PPC (Pay Per Click)' },
      shortDefinition: {
        en: 'An internet advertising model used to draw traffic to your website by using ads where the advertiser pays a price for each click.',
        es: 'Modelo de publicidad en internet usado para atraer tráfico mediante anuncios donde el anunciante paga por cada clic.'
      },
      fullDefinition: {
        en: 'An internet advertising model used to draw traffic to your website by using ads (Google Ads) where the advertiser pays a price for each click.',
        es: 'Modelo de publicidad en internet usado para atraer tráfico mediante anuncios (Google Ads) donde el anunciante paga por cada clic.'
      },
      category: 'advertising',
    },
    {
      id: 'public-relations',
      term: { es: 'Public Relations', en: 'Public Relations' },
      shortDefinition: {
        en: 'A marketing discipline concerned with managing a person or brand’s public reputation and communications.',
        es: 'Disciplina de marketing enfocada en gestionar la reputación pública y la comunicación de una persona o marca.'
      },
      fullDefinition: {
        en: 'A marketing discipline concerned with managing a person or brand’s public reputation and communications. PR practices include writing and distributing press releases, outreach, and forming public partnerships.',
        es: 'Disciplina de marketing enfocada en gestionar la reputación pública y la comunicación de una persona o marca. Incluye redacción y distribución de comunicados de prensa, outreach y formación de alianzas públicas.'
      },
      category: 'branding',
    },
    {
      id: 'purchase-conversion',
      term: { es: 'Purchase Conversion', en: 'Purchase Conversion' },
      shortDefinition: {
        en: 'A metric that shows a possible number of visits that ended with some conversion.',
        es: 'Métrica que muestra un posible número de visitas que terminaron en alguna conversión.'
      },
      fullDefinition: {
        en: 'A metric that shows a possible number of visits that ended with some conversion. It’s calculated based on the clickstream data and considers conversions like “thank you” page visits, checkout pages, etc.',
        es: 'Métrica que muestra un posible número de visitas que terminaron en alguna conversión. Se calcula con base en datos de clickstream y considera conversiones como visitas a páginas de “gracias”, páginas de checkout, etc.'
      },
      category: 'metrics',
    },
    // --- N ---
    {
      id: 'native-advertising',
      term: { es: 'Native Advertising', en: 'Native Advertising' },
      shortDefinition: {
        en: 'Paid ads designed to match the look, feel, and function of the platform where they appear.',
        es: 'Anuncios pagados diseñados para coincidir con la apariencia, sensación y función de la plataforma donde aparecen.'
      },
      fullDefinition: {
        en: 'Paid ads designed to match the look, feel, and function of the platform where they appear, blending seamlessly with organic content.',
        es: 'Anuncios pagados diseñados para coincidir con la apariencia, sensación y función de la plataforma donde aparecen, integrándose perfectamente con el contenido orgánico.'
      },
      category: 'advertising',
    },
    {
      id: 'navigation',
      term: { es: 'Navegación (Website Navigation)', en: 'Navigation (Website Navigation)' },
      shortDefinition: {
        en: 'The structure and system of menus, links, and pathways that guide users through a website.',
        es: 'La estructura y sistema de menús, enlaces y rutas que guían a los usuarios por un sitio web.'
      },
      fullDefinition: {
        en: 'The structure and system of menus, links, and pathways that guide users through a website, crucial for user experience and SEO.',
        es: 'La estructura y sistema de menús, enlaces y rutas que guían a los usuarios por un sitio web, crucial para la experiencia de usuario y el SEO.'
      },
      category: 'technology',
    },
    {
      id: 'net-promoter-score',
      term: { es: 'Net Promoter Score (NPS)', en: 'Net Promoter Score (NPS)' },
      shortDefinition: {
        en: 'A customer loyalty metric that measures how likely customers are to recommend a brand, product, or service to others.',
        es: 'Métrica de lealtad del cliente que mide la probabilidad de que recomienden una marca, producto o servicio.'
      },
      fullDefinition: {
        en: 'A customer loyalty metric that measures how likely customers are to recommend a brand, product, or service to others.',
        es: 'Métrica de lealtad del cliente que mide la probabilidad de que recomienden una marca, producto o servicio.'
      },
      category: 'metrics',
    },
    {
      id: 'network-marketing',
      term: { es: 'Network Marketing (Digital Network Marketing)', en: 'Network Marketing (Digital Network Marketing)' },
      shortDefinition: {
        en: 'A strategy where individuals promote products or services through personal networks.',
        es: 'Estrategia donde individuos promocionan productos o servicios a través de redes personales.'
      },
      fullDefinition: {
        en: 'A strategy where individuals promote products or services through personal networks, often enhanced by social media platforms.',
        es: 'Estrategia donde individuos promocionan productos o servicios a través de redes personales, a menudo potenciadas por plataformas de redes sociales.'
      },
      category: 'strategy',
    },
    {
      id: 'neuromarketing',
      term: { es: 'Neuromarketing', en: 'Neuromarketing' },
      shortDefinition: {
        en: 'The application of neuroscience to marketing.',
        es: 'Aplicación de la neurociencia al marketing.'
      },
      fullDefinition: {
        en: 'The application of neuroscience to marketing, studying how consumers’ brains respond to advertising, branding, and product design.',
        es: 'Aplicación de la neurociencia al marketing, estudiando cómo responden los cerebros de los consumidores a la publicidad, el branding y el diseño de productos.'
      },
      category: 'ai',
    },
    {
      id: 'newsletter',
      term: { es: 'Newsletter', en: 'Newsletter' },
      shortDefinition: {
        en: 'A regularly distributed email communication that provides subscribers with updates, promotions, or valuable content from a brand.',
        es: 'Comunicación por email distribuida regularmente que ofrece a los suscriptores actualizaciones, promociones o contenido valioso de una marca.'
      },
      fullDefinition: {
        en: 'A regularly distributed email communication that provides subscribers with updates, promotions, or valuable content from a brand.',
        es: 'Comunicación por email distribuida regularmente que ofrece a los suscriptores actualizaciones, promociones o contenido valioso de una marca.'
      },
      category: 'advertising',
    },
    {
      id: 'niche-marketing',
      term: { es: 'Niche Marketing', en: 'Niche Marketing' },
      shortDefinition: {
        en: 'Targeting a specific, well-defined segment of the market with tailored messages and products.',
        es: 'Dirigir mensajes y productos a un segmento específico y bien definido del mercado.'
      },
      fullDefinition: {
        en: 'Targeting a specific, well-defined segment of the market with tailored messages and products to meet their unique needs.',
        es: 'Dirigir mensajes y productos a un segmento específico y bien definido del mercado para satisfacer sus necesidades únicas.'
      },
      category: 'strategy',
    },
    {
      id: 'no-follow-link',
      term: { es: 'No-Follow Link', en: 'No-Follow Link' },
      shortDefinition: {
        en: 'A type of hyperlink that tells search engines not to pass SEO authority (link juice) to the linked page.',
        es: 'Tipo de hipervínculo que indica a los motores de búsqueda que no transfieran autoridad SEO (link juice) a la página enlazada.'
      },
      fullDefinition: {
        en: 'A type of hyperlink that tells search engines not to pass SEO authority (link juice) to the linked page, often used in sponsored or user-generated content.',
        es: 'Tipo de hipervínculo que indica a los motores de búsqueda que no transfieran autoridad SEO (link juice) a la página enlazada, usado frecuentemente en contenido patrocinado o generado por usuarios.'
      },
      category: 'seo',
    },
    {
      id: 'nonprofit-marketing',
      term: { es: 'Nonprofit Marketing (Digital Nonprofit Marketing)', en: 'Nonprofit Marketing (Digital Nonprofit Marketing)' },
      shortDefinition: {
        en: 'Strategies used by nonprofit organizations to raise awareness, attract donors, and promote causes through digital channels.',
        es: 'Estrategias utilizadas por organizaciones sin fines de lucro para aumentar la visibilidad, atraer donantes y promover causas a través de canales digitales.'
      },
      fullDefinition: {
        en: 'Strategies used by nonprofit organizations to raise awareness, attract donors, and promote causes through digital channels.',
        es: 'Estrategias utilizadas por organizaciones sin fines de lucro para aumentar la visibilidad, atraer donantes y promover causas a través de canales digitales.'
      },
      category: 'strategy',
    },
    {
      id: 'notification',
      term: { es: 'Notificación (Push Notification)', en: 'Notification (Push Notification)' },
      shortDefinition: {
        en: 'Short messages sent directly to users’ devices to engage them with timely updates, offers, or reminders.',
        es: 'Mensajes cortos enviados directamente a los dispositivos de los usuarios para mantenerlos informados con actualizaciones, ofertas o recordatorios.'
      },
      fullDefinition: {
        en: 'Short messages sent directly to users’ devices (mobile or desktop) to engage them with timely updates, offers, or reminders.',
        es: 'Mensajes cortos enviados directamente a los dispositivos de los usuarios (móvil o escritorio) para mantenerlos informados con actualizaciones, ofertas o recordatorios.'
      },
      category: 'technology',
    },
    // --- M ---
    {
      id: 'machine-learning',
      term: { es: 'Machine Learning (ML)', en: 'Machine Learning (ML)' },
      shortDefinition: {
        en: 'A branch of artificial intelligence that allows systems to learn from data and improve performance over time.',
        es: 'Rama de la inteligencia artificial que permite a los sistemas aprender de los datos y mejorar su rendimiento con el tiempo.'
      },
      fullDefinition: {
        en: 'A branch of artificial intelligence that allows systems to learn from data and improve performance over time, often used in predictive analytics, personalization, and ad targeting.',
        es: 'Rama de la inteligencia artificial que permite a los sistemas aprender de los datos y mejorar su rendimiento con el tiempo, utilizada en analítica predictiva, personalización y segmentación de anuncios.'
      },
      category: 'ai',
    },
    {
      id: 'macro-conversion',
      term: { es: 'Macro Conversion', en: 'Macro Conversion' },
      shortDefinition: {
        en: 'A primary goal in digital marketing, such as completing a purchase or signing up for a subscription.',
        es: 'Objetivo principal en marketing digital, como completar una compra o suscribirse.'
      },
      fullDefinition: {
        en: 'A primary goal in digital marketing, such as completing a purchase, signing up for a subscription, or requesting a demo.',
        es: 'Objetivo principal en marketing digital, como completar una compra, suscribirse o solicitar una demo.'
      },
      category: 'metrics',
    },
    {
      id: 'marketing-automation',
      term: { es: 'Marketing Automation', en: 'Marketing Automation' },
      shortDefinition: {
        en: 'The use of software platforms to automate repetitive marketing tasks.',
        es: 'Uso de plataformas de software para automatizar tareas repetitivas de marketing.'
      },
      fullDefinition: {
        en: 'The use of software platforms to automate repetitive marketing tasks (emails, social media posts, ad campaigns), improving efficiency and personalization.',
        es: 'Uso de plataformas de software para automatizar tareas repetitivas de marketing (emails, publicaciones en redes sociales, campañas publicitarias), mejorando la eficiencia y la personalización.'
      },
      category: 'technology',
    },
    {
      id: 'market-segmentation',
      term: { es: 'Market Segmentation', en: 'Market Segmentation' },
      shortDefinition: {
        en: 'The process of dividing a broad audience into smaller groups based on demographics, behavior, or interests.',
        es: 'El proceso de dividir una audiencia amplia en grupos más pequeños según demografía, comportamiento o intereses.'
      },
      fullDefinition: {
        en: 'The process of dividing a broad audience into smaller groups based on demographics, behavior, or interests to deliver more targeted marketing messages.',
        es: 'El proceso de dividir una audiencia amplia en grupos más pequeños según demografía, comportamiento o intereses para entregar mensajes de marketing más segmentados.'
      },
      category: 'strategy',
    },
    {
      id: 'media-buying',
      term: { es: 'Media Buying', en: 'Media Buying' },
      shortDefinition: {
        en: 'The process of purchasing advertising space across digital platforms.',
        es: 'El proceso de comprar espacios publicitarios en plataformas digitales.'
      },
      fullDefinition: {
        en: 'The process of purchasing advertising space across digital platforms (social media, search engines, websites) to reach specific audiences.',
        es: 'El proceso de comprar espacios publicitarios en plataformas digitales (redes sociales, buscadores, sitios web) para llegar a audiencias específicas.'
      },
      category: 'advertising',
    },
    {
      id: 'meta-description',
      term: { es: 'Meta Description', en: 'Meta Description' },
      shortDefinition: {
        en: 'A short snippet of text that appears in search engine results under a page title.',
        es: 'Fragmento de texto breve que aparece en los resultados de búsqueda bajo el título de una página.'
      },
      fullDefinition: {
        en: 'A short snippet of text that appears in search engine results under a page title, influencing click-through rates in SEO.',
        es: 'Fragmento de texto breve que aparece en los resultados de búsqueda bajo el título de una página, influyendo en la tasa de clics en SEO.'
      },
      category: 'seo',
    },
    {
      id: 'metrics',
      term: { es: 'Metrics', en: 'Metrics' },
      shortDefinition: {
        en: 'Quantitative measurements used to evaluate the performance of marketing campaigns.',
        es: 'Mediciones cuantitativas utilizadas para evaluar el desempeño de campañas de marketing.'
      },
      fullDefinition: {
        en: 'Quantitative measurements used to evaluate the performance of marketing campaigns (e.g., CTR, conversion rate, ROI).',
        es: 'Mediciones cuantitativas utilizadas para evaluar el desempeño de campañas de marketing (por ejemplo, CTR, tasa de conversión, ROI).'
      },
      category: 'metrics',
    },
    {
      id: 'micro-conversion',
      term: { es: 'Micro Conversion', en: 'Micro Conversion' },
      shortDefinition: {
        en: 'A smaller step toward a macro conversion, such as downloading a brochure or watching a video.',
        es: 'Un paso menor hacia una macro conversión, como descargar un folleto o ver un video.'
      },
      fullDefinition: {
        en: 'A smaller step toward a macro conversion, such as downloading a brochure, watching a video, or adding a product to the cart.',
        es: 'Un paso menor hacia una macro conversión, como descargar un folleto, ver un video o agregar un producto al carrito.'
      },
      category: 'metrics',
    },
    {
      id: 'mobile-marketing',
      term: { es: 'Mobile Marketing', en: 'Mobile Marketing' },
      shortDefinition: {
        en: 'Strategies and tactics designed to reach audiences on mobile devices.',
        es: 'Estrategias y tácticas diseñadas para llegar a audiencias en dispositivos móviles.'
      },
      fullDefinition: {
        en: 'Strategies and tactics designed to reach audiences on mobile devices through apps, SMS, push notifications, and mobile-optimized websites.',
        es: 'Estrategias y tácticas diseñadas para llegar a audiencias en dispositivos móviles mediante apps, SMS, notificaciones push y sitios web optimizados para móviles.'
      },
      category: 'channels',
    },
    {
      id: 'monetization',
      term: { es: 'Monetization', en: 'Monetization' },
      shortDefinition: {
        en: 'The process of generating revenue from digital assets.',
        es: 'El proceso de generar ingresos a partir de activos digitales.'
      },
      fullDefinition: {
        en: 'The process of generating revenue from digital assets, such as websites, apps, or content, often through ads, subscriptions, or affiliate marketing.',
        es: 'El proceso de generar ingresos a partir de activos digitales, como sitios web, apps o contenido, a menudo mediante anuncios, suscripciones o marketing de afiliados.'
      },
      category: 'strategy',
    },
    {
      id: 'multichannel-marketing',
      term: { es: 'Multichannel Marketing', en: 'Multichannel Marketing' },
      shortDefinition: {
        en: 'The practice of engaging customers across multiple platforms to create a seamless brand experience.',
        es: 'La práctica de interactuar con clientes en múltiples plataformas para crear una experiencia de marca coherente.'
      },
      fullDefinition: {
        en: 'The practice of engaging customers across multiple platforms (email, social media, search, websites) to create a seamless brand experience.',
        es: 'La práctica de interactuar con clientes en múltiples plataformas (email, redes sociales, buscadores, sitios web) para crear una experiencia de marca coherente.'
      },
      category: 'strategy',
    },
    {
      id: 'mysql',
      term: { es: 'MySQL (Gestión de Bases de Datos)', en: 'MySQL (Database Management)' },
      shortDefinition: {
        en: 'A popular open-source database system often used to store and manage customer data in digital marketing platforms.',
        es: 'Sistema de base de datos open-source popular, usado para almacenar y gestionar datos de clientes en plataformas de marketing digital.'
      },
      fullDefinition: {
        en: 'A popular open-source database system often used to store and manage customer data in digital marketing platforms.',
        es: 'Sistema de base de datos open-source popular, usado para almacenar y gestionar datos de clientes en plataformas de marketing digital.'
      },
      category: 'technology',
    },
    // --- L ---
    {
      id: 'landing-page',
      term: { es: 'Landing Page', en: 'Landing Page' },
      shortDefinition: {
        en: 'The page to which a visitor is led via a click anywhere in a digital location or a link in the search result.',
        es: 'La página a la que un visitante es dirigido tras hacer clic en un enlace digital o en un resultado de búsqueda.'
      },
      fullDefinition: {
        en: 'The page to which a visitor is led via a click anywhere in a digital location or a link in the search result.',
        es: 'La página a la que un visitante es dirigido tras hacer clic en un enlace digital o en un resultado de búsqueda.'
      },
      category: 'advertising',
    },
    {
      id: 'largest-contentful-paint',
      term: { es: 'Largest Contentful Paint (LCP)', en: 'Largest Contentful Paint (LCP)' },
      shortDefinition: {
        en: 'One of the three Core Web Vitals metrics that represents how quickly the main content of a web page is loaded.',
        es: 'Una de las tres métricas Core Web Vitals que representa la rapidez con la que se carga el contenido principal de una página web.'
      },
      fullDefinition: {
        en: 'One of the three Core Web Vitals metrics that represents how quickly the main content of a web page is loaded. Specifically, LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport.',
        es: 'Una de las tres métricas Core Web Vitals que representa la rapidez con la que se carga el contenido principal de una página web. Específicamente, LCP mide el tiempo desde que el usuario inicia la carga de la página hasta que la imagen o bloque de texto más grande se renderiza en la pantalla.'
      },
      category: 'metrics',
    },
    {
      id: 'link',
      term: { es: 'Link', en: 'Link' },
      shortDefinition: {
        en: 'An element on a web page that can be clicked on to cause the browser to jump to another page or another part of the current page.',
        es: 'Elemento en una página web que puede ser clicado para llevar al usuario a otra página o a otra parte de la página actual.'
      },
      fullDefinition: {
        en: 'An element on a web page that can be clicked on to cause the browser to jump to another page or another part of the current page.',
        es: 'Elemento en una página web que puede ser clicado para llevar al usuario a otra página o a otra parte de la página actual.'
      },
      category: 'technology',
    },
    {
      id: 'linkbait',
      term: { es: 'Linkbait', en: 'Linkbait' },
      shortDefinition: {
        en: 'A webpage with the designed purpose of attracting incoming links.',
        es: 'Página web diseñada específicamente para atraer enlaces entrantes.'
      },
      fullDefinition: {
        en: 'A webpage with the designed purpose of attracting incoming links.',
        es: 'Página web diseñada específicamente para atraer enlaces entrantes.'
      },
      category: 'seo',
    },
    {
      id: 'link-building',
      term: { es: 'Link Building', en: 'Link Building' },
      shortDefinition: {
        en: 'The digital marketing practice of actively working to generate more incoming links to a site for the benefit of the website’s SEO.',
        es: 'Práctica de marketing digital que busca generar más enlaces entrantes a un sitio para beneficiar el SEO.'
      },
      fullDefinition: {
        en: 'The digital marketing practice of actively working to generate more incoming links to a site for the benefit of the website’s SEO. Common tactics include outreach, link baiting, linking in comment sections, and more.',
        es: 'Práctica de marketing digital que busca generar más enlaces entrantes a un sitio para beneficiar el SEO. Tácticas comunes incluyen outreach, link baiting, enlaces en comentarios y más.'
      },
      category: 'seo',
    },
    {
      id: 'link-juice',
      term: { es: 'Link Juice', en: 'Link Juice' },
      shortDefinition: {
        en: 'Trust/authority from Google, which flows through outgoing links to other pages.',
        es: 'Autoridad o confianza de Google que fluye a través de los enlaces salientes hacia otras páginas.'
      },
      fullDefinition: {
        en: 'Trust/authority from Google, which flows through outgoing links to other pages.',
        es: 'Autoridad o confianza de Google que fluye a través de los enlaces salientes hacia otras páginas.'
      },
      category: 'seo',
    },
    {
      id: 'listing-management',
      term: { es: 'Listing Management', en: 'Listing Management' },
      shortDefinition: {
        en: 'The process of making sure your local business’s information is consistently and accurately represented across authoritative directories.',
        es: 'El proceso de asegurar que la información de tu negocio local esté representada de forma consistente y precisa en directorios autorizados.'
      },
      fullDefinition: {
        en: 'The process of making sure your local business’s information is consistently and accurately represented across authoritative directories. This involves regularly updating and monitoring business details like name, address, phone number, and hours of operation to maintain credibility and improve local search visibility.',
        es: 'El proceso de asegurar que la información de tu negocio local esté representada de forma consistente y precisa en directorios autorizados. Esto implica actualizar y monitorear regularmente detalles como nombre, dirección, teléfono y horario para mantener la credibilidad y mejorar la visibilidad local.'
      },
      category: 'local-seo',
    },
    {
      id: 'listing-management-semrush',
      term: { es: 'Listing Management (en Semrush)', en: 'Listing Management (in Semrush)' },
      shortDefinition: {
        en: 'This Semrush Local tool simplifies the automatic distribution of your business data to authoritative online directories.',
        es: 'Esta herramienta de Semrush Local simplifica la distribución automática de los datos de tu negocio a directorios online autorizados.'
      },
      fullDefinition: {
        en: 'This Semrush Local tool simplifies the automatic distribution of your business data to authoritative online directories. It allows you to make changes to your business information from a centralized location, helps suppress duplicates, and ensures consistency across all listings. Additionally, it optimizes your business information for voice search, ensuring accessibility on platforms like Amazon Alexa, Apple, Bing, and Google.',
        es: 'Esta herramienta de Semrush Local simplifica la distribución automática de los datos de tu negocio a directorios online autorizados. Permite realizar cambios desde una ubicación centralizada, ayuda a suprimir duplicados y asegura la consistencia en todos los listados. Además, optimiza la información para búsquedas por voz en plataformas como Amazon Alexa, Apple, Bing y Google.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-ads',
      term: { es: 'Local Ads', en: 'Local Ads' },
      shortDefinition: {
        en: 'Location-specific targeted ads that can be used in social media, local directories, and search engines.',
        es: 'Anuncios dirigidos a ubicaciones específicas que pueden usarse en redes sociales, directorios locales y motores de búsqueda.'
      },
      fullDefinition: {
        en: 'Location-specific targeted ads that can be used in social media, local directories, and search engines. They are used to boost local visibility and attract more foot traffic to businesses.',
        es: 'Anuncios dirigidos a ubicaciones específicas que pueden usarse en redes sociales, directorios locales y motores de búsqueda. Se utilizan para aumentar la visibilidad local y atraer más tráfico a los negocios.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-citations',
      term: { es: 'Local Citations', en: 'Local Citations' },
      shortDefinition: {
        en: 'Any online reference that refers to your business and includes your basic contact information.',
        es: 'Cualquier referencia online que mencione tu negocio e incluya información básica de contacto.'
      },
      fullDefinition: {
        en: 'Any online reference that refers to your business and includes your basic contact information, specifically your website and business name, address, and phone number (NAP).',
        es: 'Cualquier referencia online que mencione tu negocio e incluya información básica de contacto, específicamente tu sitio web, nombre, dirección y teléfono (NAP).'
      },
      category: 'local-seo',
    },
    {
      id: 'local-finder',
      term: { es: 'Local Finder', en: 'Local Finder' },
      shortDefinition: {
        en: 'A subset of Google Search containing extended listings of local businesses.',
        es: 'Subconjunto de Google Search que contiene listados extendidos de negocios locales.'
      },
      fullDefinition: {
        en: 'A subset of Google Search containing extended listings of local businesses (appears after clicking on “More Places”).',
        es: 'Subconjunto de Google Search que contiene listados extendidos de negocios locales (aparece al hacer clic en “Más lugares”).'
      },
      category: 'local-seo',
    },
    {
      id: 'local-keyword-research',
      term: { es: 'Local Keyword Research', en: 'Local Keyword Research' },
      shortDefinition: {
        en: 'The process of finding keywords people search for when looking for products, services, or amenities in their area.',
        es: 'El proceso de encontrar palabras clave que la gente busca al buscar productos, servicios o comodidades en su área.'
      },
      fullDefinition: {
        en: 'The process of finding keywords people search for when looking for products, services, or amenities in their area. Local Keyword Research helps businesses optimize their online content to enhance their visibility and attract local traffic.',
        es: 'El proceso de encontrar palabras clave que la gente busca al buscar productos, servicios o comodidades en su área. El Local Keyword Research ayuda a las empresas a optimizar su contenido online para mejorar su visibilidad y atraer tráfico local.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-listings',
      term: { es: 'Local Listings', en: 'Local Listings' },
      shortDefinition: {
        en: 'Online entries that provide detailed information about a business.',
        es: 'Entradas online que proporcionan información detallada sobre un negocio.'
      },
      fullDefinition: {
        en: 'Online entries that provide detailed information about a business, including its name, address, phone number, website, and hours of operation. These entries appear on various platforms such as online directories, social media, and search engines.',
        es: 'Entradas online que proporcionan información detallada sobre un negocio, incluyendo nombre, dirección, teléfono, sitio web y horario. Estas entradas aparecen en directorios, redes sociales y motores de búsqueda.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-marketing',
      term: { es: 'Local Marketing', en: 'Local Marketing' },
      shortDefinition: {
        en: 'Promotional activities and strategies designed to increase the visibility of your products and services within a specific locality.',
        es: 'Actividades y estrategias promocionales diseñadas para aumentar la visibilidad de tus productos y servicios en una localidad específica.'
      },
      fullDefinition: {
        en: 'Promotional activities and strategies designed to increase the visibility of your products and services within a specific locality. These include tactics like local SEO, local listings management, social media strategies, and advertising to drive foot traffic.',
        es: 'Actividades y estrategias promocionales diseñadas para aumentar la visibilidad de tus productos y servicios en una localidad específica. Incluyen tácticas como SEO local, gestión de listados, estrategias en redes sociales y publicidad para atraer tráfico.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-pack',
      term: { es: 'Local Pack', en: 'Local Pack' },
      shortDefinition: {
        en: 'A SERP feature consisting of a list of relevant local businesses with contact information, directions, and a map.',
        es: 'Función de la SERP que muestra una lista de negocios locales relevantes con información de contacto, direcciones y un mapa.'
      },
      fullDefinition: {
        en: 'A SERP feature consisting of a list of relevant local businesses with contact information, directions, and a map.',
        es: 'Función de la SERP que muestra una lista de negocios locales relevantes con información de contacto, direcciones y un mapa.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-ranking-factors',
      term: { es: 'Local Ranking Factors', en: 'Local Ranking Factors' },
      shortDefinition: {
        en: 'Key elements that marketers must focus on to improve the position of a business in local search and map results.',
        es: 'Elementos clave en los que los marketers deben enfocarse para mejorar la posición de un negocio en los resultados de búsqueda y mapas locales.'
      },
      fullDefinition: {
        en: 'Key elements that marketers must focus on to improve the position of a business in local search and map results. Essentially, it’s what search engines like Google look for when deciding which businesses to display in prime positions like the local pack. Google has revealed three local ranking factors that businesses should focus on to improve their position within a locality: relevance (how well a Business Profile matches a search query), distance (proximity of a business to the searcher\'s location), and prominence (a business\'s online presence, including reviews and overall reputation).',
        es: 'Elementos clave en los que los marketers deben enfocarse para mejorar la posición de un negocio en los resultados de búsqueda y mapas locales. Esencialmente, es lo que los motores de búsqueda como Google buscan al decidir qué negocios mostrar en posiciones destacadas como el local pack. Google ha revelado tres factores de ranking local: relevancia (qué tan bien el perfil de negocio coincide con la consulta), distancia (proximidad al usuario) y prominencia (presencia online, reseñas y reputación).' 
      },
      category: 'local-seo',
    },
    {
      id: 'local-search-grid',
      term: { es: 'Local Search Grid', en: 'Local Search Grid' },
      shortDefinition: {
        en: 'Based on keywords, a representation in Google Maps of your rankings in your target area on a hyper-local level.',
        es: 'Representación en Google Maps de tus rankings en el área objetivo a nivel hiperlocal, basada en palabras clave.'
      },
      fullDefinition: {
        en: 'Based on keywords, a representation in Google Maps of your rankings in your target area on a hyper-local level. This tells you exactly where and how well your local SEO efforts are paying off.',
        es: 'Representación en Google Maps de tus rankings en el área objetivo a nivel hiperlocal, basada en palabras clave. Esto te indica exactamente dónde y qué tan bien están funcionando tus esfuerzos de SEO local.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-search-marketing-services',
      term: { es: 'Local Search Marketing Services', en: 'Local Search Marketing Services' },
      shortDefinition: {
        en: 'Services that connect businesses with local customers actively searching within their locality.',
        es: 'Servicios que conectan negocios con clientes locales que buscan activamente en su localidad.'
      },
      fullDefinition: {
        en: 'Services that connect businesses with local customers actively searching within their locality. These services usually include ways of optimizing local SEO, listing management, review management, and localized content creation—all the marketing activities that help businesses appear prominently in local search results and Google Maps.',
        es: 'Servicios que conectan negocios con clientes locales que buscan activamente en su localidad. Suelen incluir optimización de SEO local, gestión de listados, gestión de reseñas y creación de contenido localizado: todas las actividades de marketing que ayudan a los negocios a aparecer en los resultados de búsqueda y Google Maps.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-seo',
      term: { es: 'Local SEO', en: 'Local SEO' },
      shortDefinition: {
        en: 'The process of optimizing a business’s online presence to increase visibility in local search and map results.',
        es: 'El proceso de optimizar la presencia online de un negocio para aumentar su visibilidad en búsquedas y mapas locales.'
      },
      fullDefinition: {
        en: 'The process of optimizing a business’s online presence to increase visibility in local search and map results. This includes strategies like Google Business Profiles, managing online reviews, and using location-based keywords. The goal of this process is to attract customers within a specific locality, and to make it easier for them to find local businesses.',
        es: 'El proceso de optimizar la presencia online de un negocio para aumentar su visibilidad en búsquedas y mapas locales. Incluye estrategias como Google Business Profiles, gestión de reseñas y uso de palabras clave de ubicación. El objetivo es atraer clientes dentro de una localidad específica y facilitar que encuentren negocios locales.'
      },
      category: 'local-seo',
    },
    {
      id: 'local-teaser',
      term: { es: 'Local Teaser', en: 'Local Teaser' },
      shortDefinition: {
        en: 'A SERP feature, very similar to the local packs, but more oriented towards reservation-based businesses like hotels and restaurants.',
        es: 'Función de la SERP, similar al local pack, pero más orientada a negocios de reservas como hoteles y restaurantes.'
      },
      fullDefinition: {
        en: 'A SERP feature, very similar to the local packs, but more oriented towards reservation-based businesses like hotels and restaurants. The feature shows a map with different results listed on the map\'s left-hand side.',
        es: 'Función de la SERP, similar al local pack, pero más orientada a negocios de reservas como hoteles y restaurantes. Muestra un mapa con diferentes resultados listados al lado izquierdo.'
      },
      category: 'local-seo',
    },
    {
      id: 'long-tail-keyword',
      term: { es: 'Long Tail Keyword', en: 'Long Tail Keyword' },
      shortDefinition: {
        en: 'A search query that usually contains 3-4+ words.',
        es: 'Consulta de búsqueda que normalmente contiene 3-4 o más palabras.'
      },
      fullDefinition: {
        en: 'A search query that usually contains 3-4+ words. These are keywords with low monthly search volume but describe a specific intention and have a higher probability of conversion through SEO or PPC. You can find long tail keywords in Semrush by using the Keyword Magic Tool and adding filters for a number of words, keyword difficulty, volume, and more.',
        es: 'Consulta de búsqueda que normalmente contiene 3-4 o más palabras. Estas palabras clave tienen bajo volumen de búsqueda mensual pero describen una intención específica y tienen mayor probabilidad de conversión por SEO o PPC. Puedes encontrar long tail keywords en Semrush usando el Keyword Magic Tool y aplicando filtros por número de palabras, dificultad, volumen y más.'
      },
      category: 'seo',
    },
    // --- J ---
    {
      id: 'javascript',
      term: { es: 'JavaScript (JS)', en: 'JavaScript (JS)' },
      shortDefinition: {
        en: 'A programming language used to create interactive elements on websites.',
        es: 'Lenguaje de programación utilizado para crear elementos interactivos en sitios web.'
      },
      fullDefinition: {
        en: 'A programming language used to create interactive elements on websites, often essential for tracking, analytics, and dynamic marketing tools.',
        es: 'Lenguaje de programación utilizado para crear elementos interactivos en sitios web, a menudo esencial para el seguimiento, la analítica y herramientas de marketing dinámicas.'
      },
      category: 'technology',
    },
    {
      id: 'jpeg',
      term: { es: 'JPEG (JPG)', en: 'JPEG (JPG)' },
      shortDefinition: {
        en: 'A widely used image format in digital marketing due to its balance between quality and file size.',
        es: 'Formato de imagen ampliamente utilizado en marketing digital por su equilibrio entre calidad y tamaño de archivo.'
      },
      fullDefinition: {
        en: 'A widely used image format in digital marketing due to its balance between quality and file size, ideal for web and social media visuals.',
        es: 'Formato de imagen ampliamente utilizado en marketing digital por su equilibrio entre calidad y tamaño de archivo, ideal para imágenes web y redes sociales.'
      },
      category: 'technology',
    },
    {
      id: 'jingle',
      term: { es: 'Jingle', en: 'Jingle' },
      shortDefinition: {
        en: 'A short, catchy musical piece used in advertising campaigns.',
        es: 'Pieza musical corta y pegadiza utilizada en campañas publicitarias.'
      },
      fullDefinition: {
        en: 'A short, catchy musical piece used in advertising campaigns to reinforce brand recall and emotional connection.',
        es: 'Pieza musical corta y pegadiza utilizada en campañas publicitarias para reforzar el recuerdo de marca y la conexión emocional.'
      },
      category: 'advertising',
    },
    {
      id: 'joint-venture-digital',
      term: { es: 'Joint Venture (Digital)', en: 'Joint Venture (Digital)' },
      shortDefinition: {
        en: 'A strategic partnership between two companies in the digital space.',
        es: 'Alianza estratégica entre dos empresas en el entorno digital.'
      },
      fullDefinition: {
        en: 'A strategic partnership between two companies in the digital space to share audiences, co-create content, or run joint campaigns.',
        es: 'Alianza estratégica entre dos empresas en el entorno digital para compartir audiencias, co-crear contenido o realizar campañas conjuntas.'
      },
      category: 'strategy',
    },
    {
      id: 'journalism-marketing',
      term: { es: 'Journalism Marketing', en: 'Journalism Marketing' },
      shortDefinition: {
        en: 'The use of journalistic-style content to build credibility and engage audiences.',
        es: 'Uso de contenido de estilo periodístico para construir credibilidad y atraer audiencias.'
      },
      fullDefinition: {
        en: 'The use of journalistic-style content (articles, reports, interviews) to build credibility and engage audiences in digital platforms.',
        es: 'El uso de contenido de estilo periodístico (artículos, reportajes, entrevistas) para construir credibilidad y atraer audiencias en plataformas digitales.'
      },
      category: 'strategy',
    },
    {
      id: 'journey-mapping',
      term: { es: 'Journey Mapping (Customer Journey Mapping)', en: 'Journey Mapping (Customer Journey Mapping)' },
      shortDefinition: {
        en: 'The process of visualizing and analyzing the steps a customer takes from awareness to purchase and beyond.',
        es: 'El proceso de visualizar y analizar los pasos que da un cliente desde el conocimiento hasta la compra y más allá.'
      },
      fullDefinition: {
        en: 'The process of visualizing and analyzing the steps a customer takes from awareness to purchase and beyond, helping marketers optimize touchpoints.',
        es: 'El proceso de visualizar y analizar los pasos que da un cliente desde el conocimiento hasta la compra y más allá, ayudando a los marketers a optimizar los puntos de contacto.'
      },
      category: 'strategy',
    },
    {
      id: 'jump-page',
      term: { es: 'Jump Page (Landing Page)', en: 'Jump Page (Landing Page)' },
      shortDefinition: {
        en: 'A standalone web page designed specifically for a marketing or advertising campaign.',
        es: 'Página web independiente diseñada específicamente para una campaña de marketing o publicidad.'
      },
      fullDefinition: {
        en: 'A standalone web page designed specifically for a marketing or advertising campaign, guiding users toward a single call-to-action.',
        es: 'Página web independiente diseñada específicamente para una campaña de marketing o publicidad, guiando a los usuarios hacia una sola llamada a la acción.'
      },
      category: 'advertising',
    },
    {
      id: 'just-in-time-marketing',
      term: { es: 'Just-in-Time Marketing (JIT Marketing)', en: 'Just-in-Time Marketing (JIT Marketing)' },
      shortDefinition: {
        en: 'A strategy that delivers personalized content or offers at the exact moment a customer is most likely to engage or convert.',
        es: 'Estrategia que entrega contenido u ofertas personalizadas en el momento exacto en que un cliente tiene mayor probabilidad de interactuar o convertir.'
      },
      fullDefinition: {
        en: 'A strategy that delivers personalized content or offers at the exact moment a customer is most likely to engage or convert.',
        es: 'Estrategia que entrega contenido u ofertas personalizadas en el momento exacto en que un cliente tiene mayor probabilidad de interactuar o convertir.'
      },
      category: 'strategy',
    },
    {
      id: 'jargon',
      term: { es: 'Jargon (Marketing Jargon)', en: 'Jargon (Marketing Jargon)' },
      shortDefinition: {
        en: 'Specialized terminology used within the marketing industry.',
        es: 'Terminología especializada utilizada dentro de la industria del marketing.'
      },
      fullDefinition: {
        en: 'Specialized terminology used within the marketing industry, often requiring simplification for broader audiences.',
        es: 'Terminología especializada utilizada dentro de la industria del marketing, que a menudo requiere simplificación para audiencias más amplias.'
      },
      category: 'strategy',
    },
    {
      id: 'judgment-metrics',
      term: { es: 'Judgment Metrics', en: 'Judgment Metrics' },
      shortDefinition: {
        en: 'Qualitative measures in marketing that rely on human evaluation.',
        es: 'Medidas cualitativas en marketing que dependen de la evaluación humana.'
      },
      fullDefinition: {
        en: 'Qualitative measures in marketing that rely on human evaluation, such as brand perception or content quality.',
        es: 'Medidas cualitativas en marketing que dependen de la evaluación humana, como la percepción de marca o la calidad del contenido.'
      },
      category: 'metrics',
    },
    // --- K ---
    {
      id: 'keyword',
      term: { es: 'Keyword', en: 'Keyword' },
      shortDefinition: {
        en: 'A word or expression used as a query in an online search engine.',
        es: 'Palabra o expresión utilizada como consulta en un motor de búsqueda online.'
      },
      fullDefinition: {
        en: 'A word or expression used as a query in an online search engine.',
        es: 'Palabra o expresión utilizada como consulta en un motor de búsqueda online.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-cannibalization',
      term: { es: 'Keyword Cannibalization', en: 'Keyword Cannibalization' },
      shortDefinition: {
        en: 'Special case of duplicate content when 2 or more pages with the same or similar content are competing for the same keyword.',
        es: 'Caso especial de contenido duplicado cuando dos o más páginas con el mismo o similar contenido compiten por la misma palabra clave.'
      },
      fullDefinition: {
        en: 'Special case of duplicate content when 2 or more pages with the same or similar content are competing for the same keyword. This practice makes it difficult for the users and the search engines to determine which page is most relevant for the keyword.',
        es: 'Caso especial de contenido duplicado cuando dos o más páginas con el mismo o similar contenido compiten por la misma palabra clave. Esta práctica dificulta que los usuarios y los motores de búsqueda determinen qué página es más relevante para la palabra clave.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-density',
      term: { es: 'Keyword Density', en: 'Keyword Density' },
      shortDefinition: {
        en: 'The percentage of words on a web page that is a particular keyword.',
        es: 'El porcentaje de palabras en una página web que corresponde a una palabra clave específica.'
      },
      fullDefinition: {
        en: 'The percentage of words on a web page that is a particular keyword. If this value is unnaturally high, the page may be penalized for keyword stuffing.',
        es: 'El porcentaje de palabras en una página web que corresponde a una palabra clave específica. Si este valor es artificialmente alto, la página puede ser penalizada por keyword stuffing.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-difficulty',
      term: { es: 'Keyword Difficulty', en: 'Keyword Difficulty' },
      shortDefinition: {
        en: 'The estimation that shows how difficult it would be to compete in organic search for a certain keyword.',
        es: 'Estimación que muestra cuán difícil sería competir en la búsqueda orgánica por una palabra clave.'
      },
      fullDefinition: {
        en: 'The estimation that shows how difficult it would be to compete in organic search for a certain keyword. The higher the estimation, the harder would it be to compete with the current websites ranking at the top of Google.',
        es: 'Estimación que muestra cuán difícil sería competir en la búsqueda orgánica por una palabra clave. Cuanto mayor sea la estimación, más difícil será competir con los sitios web que actualmente ocupan los primeros lugares en Google.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-google-ads',
      term: { es: 'Keyword (Google Ads)', en: 'Keyword (Google Ads)' },
      shortDefinition: {
        en: 'The term on which the website is bidding on in Google Ads and is found amongst the top Paid results in Google for it.',
        es: 'El término por el que el sitio web está pujando en Google Ads y que se encuentra entre los principales resultados pagados en Google.'
      },
      fullDefinition: {
        en: 'The term on which the website is bidding on in Google Ads and is found amongst the top Paid results in Google for it.',
        es: 'El término por el que el sitio web está pujando en Google Ads y que se encuentra entre los principales resultados pagados en Google.'
      },
      category: 'advertising',
    },
    {
      id: 'keyword-organic',
      term: { es: 'Keyword (organic)', en: 'Keyword (organic)' },
      shortDefinition: {
        en: 'A term for which a domain is ranking amongst the Organic results in Google.',
        es: 'Término por el cual un dominio está posicionado entre los resultados orgánicos en Google.'
      },
      fullDefinition: {
        en: 'A term for which a domain is ranking amongst the Organic results in Google. Semrush monitors the top 100 organic results to provide organic keyword rankings data.',
        es: 'Término por el cual un dominio está posicionado entre los resultados orgánicos en Google. Semrush monitorea los 100 principales resultados orgánicos para proporcionar datos de ranking de palabras clave orgánicas.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-overview',
      term: { es: 'Keyword Overview', en: 'Keyword Overview' },
      shortDefinition: {
        en: 'The main keyword analytics tool for a word or phrase that is queried in the Semrush search bar.',
        es: 'La principal herramienta de análisis de palabras clave para una palabra o frase consultada en la barra de búsqueda de Semrush.'
      },
      fullDefinition: {
        en: 'The main keyword analytics tool for a word or phrase that is queried in the Semrush search bar.',
        es: 'La principal herramienta de análisis de palabras clave para una palabra o frase consultada en la barra de búsqueda de Semrush.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-magic-tool-related',
      term: { es: 'Keyword (related, in Keyword Magic Tool)', en: 'Keyword (related, in Keyword Magic Tool)' },
      shortDefinition: {
        en: 'A term with a similar SERP in Google’s top-20 results.',
        es: 'Término con una SERP similar en los 20 principales resultados de Google.'
      },
      fullDefinition: {
        en: 'A term with a similar SERP in Google’s top-20 results.',
        es: 'Término con una SERP similar en los 20 principales resultados de Google.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-research',
      term: { es: 'Keyword Research', en: 'Keyword Research' },
      shortDefinition: {
        en: 'The process of uncovering keywords worthy of use for SEO and SEM campaigns.',
        es: 'El proceso de descubrir palabras clave valiosas para campañas de SEO y SEM.'
      },
      fullDefinition: {
        en: 'The process of uncovering keywords worthy of use for SEO and SEM campaigns.',
        es: 'El proceso de descubrir palabras clave valiosas para campañas de SEO y SEM.'
      },
      category: 'seo',
    },
    {
      id: 'keyword-stuffing',
      term: { es: 'Keyword Stuffing (Keyword spam)', en: 'Keyword Stuffing (Keyword spam)' },
      shortDefinition: {
        en: 'The excessive reuse of the same keyword on one page.',
        es: 'El uso excesivo de la misma palabra clave en una página.'
      },
      fullDefinition: {
        en: 'The excessive reuse of the same keyword on one page.',
        es: 'El uso excesivo de la misma palabra clave en una página.'
      },
      category: 'seo',
    },
    {
      id: 'knowledge-graph',
      term: { es: 'Knowledge Graph', en: 'Knowledge Graph' },
      shortDefinition: {
        en: 'A SERP Feature located at the top or right-hand side of the page that provides a quick profile on a query along with images and related searches.',
        es: 'Función de la SERP ubicada en la parte superior o lateral de la página que proporciona un perfil rápido sobre una consulta junto con imágenes y búsquedas relacionadas.'
      },
      fullDefinition: {
        en: 'A SERP Feature located at the top or right-hand side of the page that provides a quick profile on a query along with images and related searches.',
        es: 'Función de la SERP ubicada en la parte superior o lateral de la página que proporciona un perfil rápido sobre una consulta junto con imágenes y búsquedas relacionadas.'
      },
      category: 'seo',
    },
    // --- W ---
    {
      id: 'webinar',
      term: { es: 'Webinar', en: 'Webinar' },
      shortDefinition: {
        en: 'Online seminar or presentation conducted over the internet.',
        es: 'Seminario o presentación en línea realizada a través de internet.'
      },
      fullDefinition: {
        en: 'A webinar is an online seminar or presentation conducted over the internet, allowing participants to join remotely from anywhere in the world. Webinars are commonly used for educational, training, or marketing purposes and often include interactive features such as Q&A sessions, polls, and live chat.',
        es: 'Un webinar es un seminario o presentación en línea realizada a través de internet, que permite a los participantes unirse de forma remota desde cualquier parte del mundo. Los webinars se utilizan comúnmente con fines educativos, de capacitación o marketing y suelen incluir funciones interactivas como sesiones de preguntas y respuestas, encuestas y chat en vivo.'
      },
      category: 'channels',
      relatedTerms: ['online-event', 'presentation'],
    },
    {
      id: 'white-hat-seo',
      term: { es: 'White Hat SEO', en: 'White Hat SEO' },
      shortDefinition: {
        en: 'SEO techniques that follow best practices and guidelines.',
        es: 'Técnicas de SEO que siguen las mejores prácticas y directrices.'
      },
      fullDefinition: {
        en: 'White hat SEO refers to search engine optimization techniques and strategies that adhere to search engine guidelines and best practices. These techniques focus on providing value to users and building long-term, sustainable results.',
        es: 'El white hat SEO se refiere a técnicas y estrategias de optimización para motores de búsqueda que cumplen con las directrices y mejores prácticas de los buscadores. Estas técnicas se centran en aportar valor a los usuarios y construir resultados sostenibles a largo plazo.'
      },
      category: 'seo',
      relatedTerms: ['seo', 'best-practices'],
    },
    {
      id: 'widget',
      term: { es: 'Widget', en: 'Widget' },
      shortDefinition: {
        en: 'A small application or component that provides specific functionality.',
        es: 'Pequeña aplicación o componente que proporciona una funcionalidad específica.'
      },
      fullDefinition: {
        en: 'A widget is a small application or component that provides specific functionality or information, often embedded within a website, application, or digital platform. Widgets can include weather updates, calculators, search bars, or social media feeds.',
        es: 'Un widget es una pequeña aplicación o componente que proporciona una funcionalidad o información específica, a menudo incrustada en un sitio web, aplicación o plataforma digital. Los widgets pueden incluir actualizaciones del clima, calculadoras, barras de búsqueda o feeds de redes sociales.'
      },
      category: 'technology',
      relatedTerms: ['component', 'plugin'],
    },
    {
      id: 'workflow',
      term: { es: 'Workflow', en: 'Workflow' },
      shortDefinition: {
        en: 'A sequence of tasks or processes through which work passes from initiation to completion.',
        es: 'Secuencia de tareas o procesos por los que pasa el trabajo desde el inicio hasta la finalización.'
      },
      fullDefinition: {
        en: 'A workflow is a sequence of tasks, processes, or steps through which work passes from initiation to completion. Workflows help organize, automate, and optimize business processes to improve efficiency and productivity.',
        es: 'Un workflow es una secuencia de tareas, procesos o pasos por los que pasa el trabajo desde el inicio hasta la finalización. Los workflows ayudan a organizar, automatizar y optimizar procesos empresariales para mejorar la eficiencia y la productividad.'
      },
      category: 'strategy',
      relatedTerms: ['process', 'automation'],
    },
  ];

export function getRandomDailyTerm(): GlossaryTerm | undefined {
  // Returns undefined since glossary is empty
  return undefined;
}

export function getTermsByLetter(letter: string, language: 'es' | 'en'): GlossaryTerm[] {
  // Devuelve los términos que empiezan con la letra indicada en el idioma seleccionado
  return glossaryTerms.filter(term => {
    const t = term.term?.[language];
    if (!t || typeof t !== 'string' || !t.length) return false;
    return t[0].toUpperCase() === letter.toUpperCase();
  });
}

export function getCurrentLanguage(): 'es' | 'en' {
  if (typeof window !== 'undefined' && window.localStorage) {
    const lang = window.localStorage.getItem('language');
    if (lang === 'en' || lang === 'es') return lang;
  }
  return 'es';
}

export function setCurrentLanguage(lang: 'es' | 'en') {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('language', lang);
  }
}

export function searchTerms(query: string, language: 'es' | 'en'): GlossaryTerm[] {
  const cleanedQuery = query.trim();
  if (!cleanedQuery) return glossaryTerms;

  const normalize = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const tokens = normalize(cleanedQuery).split(/\s+/).filter(Boolean);

  return glossaryTerms.filter((term) => {
    const termText = term.term?.[language] || '';
    const shortText = term.shortDefinition?.[language] || '';
    const fullText = term.fullDefinition?.[language] || '';
    const haystack = normalize(`${termText} ${shortText} ${fullText}`);
    return tokens.every((token) => haystack.includes(token));
  });
}
