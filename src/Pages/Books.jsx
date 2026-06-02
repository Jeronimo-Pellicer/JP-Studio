import React, { useMemo, useState } from 'react';
import SEO from '../Components/shared/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';

const staffCategories = [
    {
        key: 'newsletters',
        label: {
            es: 'Newsletters Obligatorios',
            en: 'Must-read Newsletters'
        },
        items: [
            {
                id: 'get-ready-with-mai',
                title: {
                    es: 'Get Ready With Mai (Por Mai Molina)',
                    en: 'Get Ready With Mai (by Mai Molina)'
                },
                focus: {
                    es: 'Una de las lecturas más recomendadas sobre Product Management, estrategia de producto, frameworks de ejecución y cultura de equipos tecnológicos en habla hispana. Imprescindible para entender cómo se construyen los productos digitales modernos.',
                    en: 'One of the most recommended Spanish-language reads on Product Management: strategy, execution frameworks, and high-performing product cultures. Great for understanding how modern digital products are built.'
                },
                link: 'https://getreadywithmai.substack.com',
                linkLabel: 'getreadywithmai.substack.com'
            },
            {
                id: 'growth-tactics',
                title: {
                    es: 'Growth Tactics (Por Dylan Deminiuk)',
                    en: 'Growth Tactics (by Dylan Deminiuk)'
                },
                focus: {
                    es: 'Análisis técnico profundo de estrategias de Growth Marketing, desgloses de embudos de conversión de startups reales y optimización de métricas de retención.',
                    en: 'Deep technical breakdowns of growth strategies, real startup funnel teardowns, and retention metric optimization.'
                },
                link: 'https://growthtactics.substack.com',
                linkLabel: 'growthtactics.substack.com'
            },
            {
                id: 'lennys-newsletter',
                title: {
                    es: "Lenny's Newsletter (Por Lenny Rachitsky)",
                    en: "Lenny's Newsletter (by Lenny Rachitsky)"
                },
                focus: {
                    es: 'El newsletter número uno a nivel global sobre producto, crecimiento, adquisición de usuarios y optimización del conversion rate. Una biblia corporativa para cualquier profesional digital.',
                    en: 'The #1 global newsletter for product and growth: acquisition, conversion, retention, and operator-grade playbooks.'
                },
                link: 'https://www.lennysnewsletter.com',
                linkLabel: 'lennysnewsletter.com'
            }
        ]
    },
    {
        key: 'podcasts',
        label: {
            es: 'Podcasts Recomendados',
            en: 'Recommended Podcasts'
        },
        items: [
            {
                id: 'fabrica-podcast',
                title: {
                    es: 'La Fábrica de Podcast',
                    en: 'La Fábrica de Podcast'
                },
                focus: {
                    es: 'Ideal para entender el funcionamiento detrás de la creación de contenidos de audio premium, estrategias de distribución, branding sonoro y monetización de formatos multimedia.',
                    en: 'Great for understanding how premium audio is produced: distribution strategy, sonic branding, and monetization for modern formats.'
                },
                link: 'https://open.spotify.com/search/La%20F%C3%A1brica%20de%20Podcast',
                linkLabel: 'Spotify · La Fábrica de Podcast'
            },
            {
                id: 'la-guita',
                title: {
                    es: 'La Guita Podcast',
                    en: 'La Guita Podcast'
                },
                focus: {
                    es: 'Análisis crudo, dinámico y estratégico de finanzas, economía digital, mentalidad de negocios y cómo se mueve el capital en los proyectos comerciales actuales.',
                    en: 'Fast, strategic takes on finance, digital economy, business mindset, and how capital actually moves in today’s projects.'
                },
                link: 'https://open.spotify.com/search/La%20Guita%20Podcast',
                linkLabel: 'Spotify · La Guita Podcast'
            },
            {
                id: 'product-hackers',
                title: {
                    es: 'Product Hackers Podcast (Por Luis Díaz del Dedo)',
                    en: 'Product Hackers Podcast (by Luis Díaz del Dedo)'
                },
                focus: {
                    es: 'Entrevistas a directores de Growth y marketing de empresas de habla hispana. Analizan experimentos reales de CRO, analítica de datos y optimización de producto.',
                    en: 'Interviews with top Spanish-speaking growth leaders. Real CRO experiments, analytics, and product optimization tactics.'
                },
                link: 'https://producthackers.com/es/podcast',
                linkLabel: 'producthackers.com/es/podcast'
            }
        ]
    },
    {
        key: 'books',
        label: {
            es: 'Libros Fundacionales',
            en: 'Foundational Books'
        },
        items: [
            {
                id: 'hacking-growth',
                title: {
                    es: 'Hacking Growth (Sean Ellis & Morgan Brown)',
                    en: 'Hacking Growth (Sean Ellis & Morgan Brown)'
                },
                focus: {
                    es: 'El manual definitivo que acuñó el término. Explica cómo crear equipos transversales de experimentación rápida para encontrar palancas de crecimiento en retención y adquisición.',
                    en: 'The classic growth playbook: how to build cross-functional experimentation teams and find leverage in acquisition and retention.'
                },
                link: 'https://www.amazon.com/s?k=Hacking+Growth+Sean+Ellis',
                linkLabel: 'Amazon · Hacking Growth'
            },
            {
                id: 'dont-make-me-think',
                title: {
                    es: "Don't Make Me Think, Revisited (Steve Krug)",
                    en: "Don't Make Me Think, Revisited (Steve Krug)"
                },
                focus: {
                    es: 'La biblia de la usabilidad web. Un libro corto y fundamental que enseña por qué la fricción visual y cognitiva destruye la conversión de cualquier landing page.',
                    en: 'The web usability bible. Short, practical, and brutally clear on how friction kills conversion.'
                },
                link: 'https://www.amazon.com/s?k=Dont+Make+Me+Think+Revisited+Steve+Krug',
                linkLabel: "Amazon · Don't Make Me Think"
            },
            {
                id: 'hooked',
                title: {
                    es: 'Hooked: How to Build Habit-Forming Products (Nir Eyal)',
                    en: 'Hooked: How to Build Habit-Forming Products (Nir Eyal)'
                },
                focus: {
                    es: 'Un desglose psicológico profundo sobre cómo el diseño UX/UI y los disparadores de comportamiento logran que los usuarios regresen a una aplicación de forma orgánica.',
                    en: 'A behavioral framework for building habit-forming products—triggers, motivation, and action loops.'
                },
                link: 'https://www.amazon.com/s?k=Hooked+Nir+Eyal',
                linkLabel: 'Amazon · Hooked'
            },
            {
                id: 'lean-analytics',
                title: {
                    es: 'Lean Analytics (Alistair Croll & Benjamin Yoskovitz)',
                    en: 'Lean Analytics (Alistair Croll & Benjamin Yoskovitz)'
                },
                focus: {
                    es: 'Enseña a identificar la Métrica Única que Importa según el modelo de negocio (E-commerce, SaaS, B2B), evitando las métricas de vanidad.',
                    en: 'How to find your One Metric That Matters by business model (SaaS, e-commerce, B2B) and avoid vanity metrics.'
                },
                link: 'https://www.amazon.com/s?k=Lean+Analytics+Alistair+Croll',
                linkLabel: 'Amazon · Lean Analytics'
            },
            {
                id: 'mom-test',
                title: {
                    es: 'The Mom Test (Rob Fitzpatrick)',
                    en: 'The Mom Test (Rob Fitzpatrick)'
                },
                focus: {
                    es: 'Esencial para la investigación de usuarios. Enseña cómo hablar con los clientes y hacer las preguntas correctas para validar ideas sin sesgos de cortesía.',
                    en: 'A must-read for user research: how to talk to customers and validate ideas without getting “polite lies”.'
                },
                link: 'https://www.amazon.com/s?k=The+Mom+Test+Rob+Fitzpatrick',
                linkLabel: 'Amazon · The Mom Test'
            }
        ]
    },
    {
        key: 'yc',
        label: {
            es: 'Ecosistema Y Combinator',
            en: 'Y Combinator Ecosystem'
        },
        items: [
            {
                id: 'yc-library',
                title: {
                    es: 'Y Combinator Startup Library',
                    en: 'Y Combinator Startup Library'
                },
                focus: {
                    es: 'Repositorio masivo de videos, guías y ensayos sobre Product-Market Fit, retención de usuarios y propuestas de valor claras.',
                    en: 'A massive library of videos and essays on product-market fit, retention, and building clear value propositions.'
                },
                link: 'https://www.ycombinator.com/library',
                linkLabel: 'ycombinator.com/library'
            },
            {
                id: 'startup-school',
                title: {
                    es: 'Startup School por YC',
                    en: 'YC Startup School'
                },
                focus: {
                    es: 'Programa de capacitación gratuito para fundadores y profesionales. Metodologías ágiles de lanzamiento, analíticas y testeo de hipótesis con usuarios.',
                    en: 'A free program for founders: launch methods, metrics, and hypothesis testing with real users.'
                },
                link: 'https://www.startupschool.org',
                linkLabel: 'startupschool.org'
            },
            {
                id: 'paul-graham',
                title: {
                    es: 'Ensayos de Paul Graham',
                    en: 'Paul Graham Essays'
                },
                focus: {
                    es: 'Colección de reflexiones profundas escritas por el cofundador de YC. Textos como "Do Things that Don’t Scale" son lectura obligatoria.',
                    en: 'Timeless essays from YC’s cofounder. “Do Things that Don’t Scale” is a must.'
                },
                link: 'https://paulgraham.com/articles.html',
                linkLabel: 'paulgraham.com/articles.html'
            }
        ]
    },
    {
        key: 'papers',
        label: {
            es: 'Papers Técnicos e Investigación',
            en: 'Technical Papers & Research'
        },
        items: [
            {
                id: 'ab-testing',
                title: {
                    es: 'Trustworthy Online Controlled Experiments (Ron Kohavi)',
                    en: 'Trustworthy Online Controlled Experiments (Ron Kohavi)'
                },
                focus: {
                    es: 'Guía práctica sobre tests A/B válidos y cómo evitar falsos positivos en CRO, basada en experiencia de líderes de Microsoft y Airbnb.',
                    en: 'A practical guide to running statistically sound A/B tests and avoiding false positives (from leaders behind large experimentation programs).'
                },
                link: 'https://www.experimentation-guided.com',
                linkLabel: 'experimentation-guided.com'
            },
            {
                id: 'google-paper',
                title: {
                    es: 'The Anatomy of a Large-Scale Web Search Engine (Brin & Page)',
                    en: 'The Anatomy of a Large-Scale Web Search Engine (Brin & Page)'
                },
                focus: {
                    es: 'Paper original de los fundadores de Google. Fundamental para entender las raíces técnicas de la indexación y arquitectura semántica de la web.',
                    en: 'The original Google paper—foundational for understanding crawling, indexing, and early web search architecture.'
                },
                link: 'https://graphics.stanford.edu/papers/google/',
                linkLabel: 'graphics.stanford.edu/papers/google'
            }
        ]
    }
];

export default function Books() {
    const { t, language } = useLanguage();
    const [openCategory, setOpenCategory] = useState(null);
    const [expandedItem, setExpandedItem] = useState(null);

    const textFor = (value) => {
        if (typeof value === 'string') return value;
        return value?.[language] || value?.es || value?.en || '';
    };

    const categories = useMemo(() => (
        staffCategories.map((category) => ({
            ...category,
            label: category.label[language] || category.label.es,
            count: category.items.length
        }))
    ), [language]);

    const toggleCategory = (key) => {
        setExpandedItem(null);
        setOpenCategory((current) => (current === key ? null : key));
    };

    const seoTitle = `${t.books.title} | Jerónimo Pellicer`;
    const seoDescription = t.books.seoDescription || t.books.description || '';

    return (
        <div className="projects-section staff-section">
            <SEO
                title={seoTitle}
                description={seoDescription}
                url="/books"
            />
            <div className="projects-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="projects-header"
                >
                    <div className="projects-back">
                        <Link to="/" className="projects-back-link">
                            <ArrowLeft className="projects-back-icon" />
                            {t.books.backToHome}
                        </Link>
                    </div>
                    <p className="projects-kicker">/ {t.books.kicker}</p>
                    <h1 className="projects-title">{t.books.title}</h1>
                    {t.books.description ? (
                        <p className="projects-description">{t.books.description}</p>
                    ) : null}
                </motion.div>

                <div className="recommendations-categories" aria-live="polite">
                    {categories.map((category) => {
                        const isCategoryOpen = openCategory === category.key;

                        return (
                            <section key={category.key} className="recommendation-category">
                                <button
                                    type="button"
                                    className={`filter-item recommendation-category-toggle${isCategoryOpen ? ' is-active' : ''}`}
                                    onClick={() => toggleCategory(category.key)}
                                    aria-expanded={isCategoryOpen}
                                >
                                    <span className="filter-left">
                                        <span className="filter-symbol">+</span>
                                        <span className="filter-name">{category.label}</span>
                                    </span>
                                    <span className="filter-count">
                                        {String(category.count).padStart(2, '0')}
                                    </span>
                                </button>

                                {isCategoryOpen ? (
                                    <div className="recommendations-list recommendation-category-items">
                                        {category.items.map((item) => {
                                            const isOpen = expandedItem === item.id;
                                            const bodyId = `${item.id}-details`;
                                            const itemTitle = textFor(item.title);
                                            const itemFocus = textFor(item.focus);

                                            return (
                                                <div key={item.id} className={`recommendation-item${isOpen ? ' is-open' : ''}`}>
                                                    <button
                                                        type="button"
                                                        className="recommendation-header"
                                                        onClick={() => setExpandedItem(isOpen ? null : item.id)}
                                                        aria-expanded={isOpen}
                                                        aria-controls={bodyId}
                                                    >
                                                        <span className="recommendation-title">{itemTitle}</span>
                                                        <span className="recommendation-toggle" aria-hidden="true">
                                                            {isOpen ? '−' : '+'}
                                                        </span>
                                                    </button>

                                                    {isOpen && (
                                                        <div id={bodyId} className="recommendation-body">
                                                            <span className="recommendation-focus-label">{t.books.focusLabel}</span>
                                                            <p className="recommendation-focus-text">{itemFocus}</p>
                                                            <div className="recommendation-links">
                                                                <span className="recommendation-link-label">{t.books.linkLabel}</span>
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="recommendation-link"
                                                                    aria-label={`${t.books.openLink}: ${item.linkLabel}`}
                                                                >
                                                                    <span>{item.linkLabel}</span>
                                                                    <span className="recommendation-link-icon" aria-hidden="true">↗</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}

                                        {category.items.length === 0 && (
                                            <p className="recommendations-empty">{t.books.emptyMessage}</p>
                                        )}
                                    </div>
                                ) : null}
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
