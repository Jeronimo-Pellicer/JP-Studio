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
            es: 'Newsletters Obligados',
            en: 'Must-read Newsletters'
        },
        items: [
            {
                id: 'get-ready-with-mai',
                title: 'Get Ready With Mai (Por Mai Molina)',
                focus: 'Una de las lecturas más recomendadas sobre Product Management, estrategia de producto, frameworks de ejecución y cultura de equipos tecnológicos en habla hispana. Imprescindible para entender cómo se construyen los productos digitales modernos.',
                link: 'https://getreadywithmai.substack.com',
                linkLabel: 'getreadywithmai.substack.com'
            },
            {
                id: 'growth-tactics',
                title: 'Growth Tactics (Por Dylan Deminiuk)',
                focus: 'Análisis técnico profundo de estrategias de Growth Marketing, desgloses de embudos de conversión de startups reales y optimización de métricas de retención.',
                link: 'https://growthtactics.substack.com',
                linkLabel: 'growthtactics.substack.com'
            },
            {
                id: 'lennys-newsletter',
                title: "Lenny's Newsletter (Por Lenny Rachitsky)",
                focus: 'El newsletter número uno a nivel global sobre producto, crecimiento, adquisición de usuarios y optimización del conversion rate. Una biblia corporativa para cualquier profesional digital.',
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
                title: 'La Fábrica de Podcast',
                focus: 'Ideal para entender el funcionamiento detrás de la creación de contenidos de audio premium, estrategias de distribución, branding sonoro y monetización de formatos multimedia.',
                link: 'https://open.spotify.com/search/La%20F%C3%A1brica%20de%20Podcast',
                linkLabel: 'Spotify · La Fábrica de Podcast'
            },
            {
                id: 'la-guita',
                title: 'La Guita Podcast',
                focus: 'Análisis crudo, dinámico y estratégico de finanzas, economía digital, mentalidad de negocios y cómo se mueve el capital en los proyectos comerciales actuales.',
                link: 'https://open.spotify.com/search/La%20Guita%20Podcast',
                linkLabel: 'Spotify · La Guita Podcast'
            },
            {
                id: 'product-hackers',
                title: 'Product Hackers Podcast (Por Luis Díaz del Dedo)',
                focus: 'Entrevistas a directores de Growth y marketing de empresas de habla hispana. Analizan experimentos reales de CRO, analítica de datos y optimización de producto.',
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
                title: 'Hacking Growth (Sean Ellis & Morgan Brown)',
                focus: 'El manual definitivo que acuñó el término. Explica cómo crear equipos transversales de experimentación rápida para encontrar palancas de crecimiento en retención y adquisición.',
                link: 'https://www.amazon.com/s?k=Hacking+Growth+Sean+Ellis',
                linkLabel: 'Amazon · Hacking Growth'
            },
            {
                id: 'dont-make-me-think',
                title: "Don't Make Me Think, Revisited (Steve Krug)",
                focus: 'La biblia de la usabilidad web. Un libro corto y fundamental que enseña por qué la fricción visual y cognitiva destruye la conversión de cualquier landing page.',
                link: 'https://www.amazon.com/s?k=Dont+Make+Me+Think+Revisited+Steve+Krug',
                linkLabel: "Amazon · Don't Make Me Think"
            },
            {
                id: 'hooked',
                title: 'Hooked: How to Build Habit-Forming Products (Nir Eyal)',
                focus: 'Un desglose psicológico profundo sobre cómo el diseño UX/UI y los disparadores de comportamiento logran que los usuarios regresen a una aplicación de forma orgánica.',
                link: 'https://www.amazon.com/s?k=Hooked+Nir+Eyal',
                linkLabel: 'Amazon · Hooked'
            },
            {
                id: 'lean-analytics',
                title: 'Lean Analytics (Alistair Croll & Benjamin Yoskovitz)',
                focus: 'Enseña a identificar la Métrica Única que Importa según el modelo de negocio (E-commerce, SaaS, B2B), evitando las métricas de vanidad.',
                link: 'https://www.amazon.com/s?k=Lean+Analytics+Alistair+Croll',
                linkLabel: 'Amazon · Lean Analytics'
            },
            {
                id: 'mom-test',
                title: 'The Mom Test (Rob Fitzpatrick)',
                focus: 'Esencial para la investigación de usuarios. Enseña cómo hablar con los clientes y hacer las preguntas correctas para validar ideas sin sesgos de cortesía.',
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
                title: 'Y Combinator Startup Library',
                focus: 'Repositorio masivo de videos, guías y ensayos sobre Product-Market Fit, retención de usuarios y propuestas de valor claras.',
                link: 'https://www.ycombinator.com/library',
                linkLabel: 'ycombinator.com/library'
            },
            {
                id: 'startup-school',
                title: 'Startup School por YC',
                focus: 'Programa de capacitación gratuito para fundadores y profesionales. Metodologías ágiles de lanzamiento, analíticas y testeo de hipótesis con usuarios.',
                link: 'https://www.startupschool.org',
                linkLabel: 'startupschool.org'
            },
            {
                id: 'paul-graham',
                title: 'Ensayos de Paul Graham',
                focus: 'Colección de reflexiones profundas escritas por el cofundador de YC. Textos como "Do Things that Don’t Scale" son lectura obligatoria.',
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
                title: 'Trustworthy Online Controlled Experiments (Ron Kohavi)',
                focus: 'Guía práctica sobre tests A/B válidos y cómo evitar falsos positivos en CRO, basada en experiencia de líderes de Microsoft y Airbnb.',
                link: 'https://www.experimentation-guided.com',
                linkLabel: 'experimentation-guided.com'
            },
            {
                id: 'google-paper',
                title: 'The Anatomy of a Large-Scale Web Search Engine (Brin & Page)',
                focus: 'Paper original de los fundadores de Google. Fundamental para entender las raíces técnicas de la indexación y arquitectura semántica de la web.',
                link: 'https://graphics.stanford.edu/papers/google/',
                linkLabel: 'graphics.stanford.edu/papers/google'
            }
        ]
    }
];

export default function Books() {
    const { t, language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState(staffCategories[0].key);
    const [expandedItem, setExpandedItem] = useState(null);

    const categories = useMemo(() => (
        staffCategories.map((category) => ({
            ...category,
            label: category.label[language] || category.label.es,
            count: category.items.length
        }))
    ), [language]);

    const activeCategoryData = staffCategories.find((category) => category.key === activeCategory)
        || staffCategories[0];
    const activeItems = activeCategoryData.items;

    const handleCategoryChange = (key) => {
        setActiveCategory(key);
        setExpandedItem(null);
    };

    const seoTitle = `${t.books.title} | Jerónimo Pellicer`;
    const seoDescription = t.books.description;

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
                    <p className="projects-description">{t.books.description}</p>
                </motion.div>

                <div className="projects-filters">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            type="button"
                            onClick={() => handleCategoryChange(category.key)}
                            className={`filter-item${activeCategory === category.key ? ' is-active' : ''}`}
                        >
                            <span className="filter-left">
                                <span className="filter-symbol">+</span>
                                <span className="filter-name">{category.label}</span>
                            </span>
                            <span className="filter-count">
                                {String(category.count).padStart(2, '0')}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="recommendations-list" aria-live="polite">
                    {activeItems.map((item) => {
                        const isOpen = expandedItem === item.id;
                        const bodyId = `${item.id}-details`;

                        return (
                            <div key={item.id} className={`recommendation-item${isOpen ? ' is-open' : ''}`}>
                                <button
                                    type="button"
                                    className="recommendation-header"
                                    onClick={() => setExpandedItem(isOpen ? null : item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={bodyId}
                                >
                                    <span className="recommendation-title">{item.title}</span>
                                    <span className="recommendation-toggle" aria-hidden="true">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div id={bodyId} className="recommendation-body">
                                        <span className="recommendation-focus-label">{t.books.focusLabel}</span>
                                        <p className="recommendation-focus-text">{item.focus}</p>
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

                    {activeItems.length === 0 && (
                        <p className="recommendations-empty">{t.books.emptyMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
