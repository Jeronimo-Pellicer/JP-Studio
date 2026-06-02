import React, { useState, useMemo, useEffect } from 'react';
import SEO from '../Components/shared/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, FileText, Image, ArrowUpRight, Search, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../Components/portfolio/LanguageContext';
import { Link, useSearchParams, useParams } from 'react-router-dom';
import ResourceArticle from '../Components/resources/ResourceArticle';
import { resourcesData } from '../data/resourcesData';

export default function Resources() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const { articleId } = useParams(); // Get article from URL param
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Derive state from URL: prefer path param (/recursos/:articleId) over query param (?article=)
  const selectedArticleId = articleId || searchParams.get('article');

  // Handle filter changes from URL
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam && ['template', 'guide', 'infographic', 'all'].includes(filterParam)) {
      setActiveFilter(filterParam);
    }
  }, [searchParams]);

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return resourcesData.filter((resource) => {
      const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
      if (!matchesFilter) return false;
      if (!query) return true;

      const title = language === 'en' && resource.titleEn ? resource.titleEn : resource.title;
      const description = language === 'en' && resource.descriptionEn ? resource.descriptionEn : resource.description;
      const haystack = `${title || ''} ${description || ''}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [activeFilter, searchQuery, language]);


  const handleReadArticle = (resource) => {
    // Only update searchParams, React will re-render and selectedArticleId will be updated
    const newParams = new URLSearchParams(searchParams);
    newParams.set('article', resource.id);
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToResources = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('article');
    setSearchParams(newParams);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    const newParams = new URLSearchParams(searchParams);
    if (filterId === 'all') {
      newParams.delete('filter');
    } else {
      newParams.set('filter', filterId);
    }
    newParams.delete('article');
    setSearchParams(newParams);
  };

  const searchPlaceholder = language === 'es' ? 'Buscar recursos...' : 'Search resources...';
  const heroLines = language === 'es'
    ? ['Recursos que', 'Transforman', 'Estrategias.']
    : ['Resources that', 'Transform', 'Strategies.'];
  const ctaBase = language === 'es' ? 'Ver' : 'View';
  const rightLabel = language === 'es'
    ? '¿Qué tipo de recurso buscas?'
    : 'What type of resource are you looking for?';
  const booksCtaText = language === 'es'
    ? 'Explora recursos externos para formarte y ampliar criterio.'
    : 'Explore external resources to learn and expand your perspective.';
  const booksCtaLink = language === 'es'
    ? 'Ver biblioteca externa'
    : 'See external library';
  const emptyState = language === 'es'
    ? 'No hay recursos que coincidan con tu busqueda.'
    : 'No resources match your search.';

  const filters = [
    { id: 'all', label: language === 'es' ? 'Todos' : 'All', icon: LayoutGrid, tone: 'all' },
    { id: 'template', label: language === 'es' ? 'Templates' : 'Templates', icon: FileSpreadsheet, tone: 'template' },
    { id: 'guide', label: language === 'es' ? 'Guías' : 'Guides', icon: FileText, tone: 'guide' },
    { id: 'infographic', label: language === 'es' ? 'Infografías' : 'Infographics', icon: Image, tone: 'infographic' },
  ];

  const typeConfig = {
    template: { label: t.resources.filters.template, icon: FileSpreadsheet },
    guide: { label: t.resources.filters.guide, icon: FileText },
    infographic: { label: t.resources.filters.infographic, icon: Image },
  };


  return (
    <div className="resources-page">
      <SEO 
        title="Recursos Digitales y Guías | JP Studio"
        description="Recursos, guías y materiales gratuitos y premium sobre UX, marketing digital y crecimiento de negocios. Aprendé y mejorá tus habilidades."
        url="/recursos"
      />
      <AnimatePresence mode="wait">
        {selectedArticleId ? (
          <motion.section
            key="article"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="resources-section"
          >
            <div className="resources-wrapper resources-wrapper--article">
              <ResourceArticle resourceId={selectedArticleId} onBack={handleBackToResources} />
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="resources"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="resources-section"
          >
            <div className="resources-wrapper">
              <div className="resources-layout">
                <div className="resources-left">
                  <p className="resources-breadcrumb">/ {t.resources.hero.title}</p>
                  <h1 className="resources-title">
                    {heroLines.map((line, index) => (
                      <span key={line} className={index === heroLines.length - 1 ? 'is-highlight' : ''}>
                        {line}
                      </span>
                    ))}
                  </h1>
                  <p className="resources-description">{t.resources.hero.description}</p>

                  <div className="resources-cta-group">
                    <a className="resources-cta" href="/#contact">
                      {t.resources.cta.buttonCustom}
                      <ArrowUpRight className="resources-cta-icon" />
                    </a>
                    <p className="resources-cta-note">{booksCtaText}</p>
                    <Link className="resources-cta-secondary" to="/books">
                      {booksCtaLink}
                      <ArrowUpRight className="resources-cta-icon" />
                    </Link>
                  </div>
                </div>

                <div className="resources-right">
                  <p className="resources-right-label">{rightLabel}</p>
                  <div className="resources-tabs">
                    {filters.map((filter) => {
                      const Icon = filter.icon;
                      return (
                        <button
                          key={filter.id}
                          type="button"
                          onClick={() => handleFilterChange(filter.id)}
                          className={`resources-tab-card resources-tab-${filter.tone}${activeFilter === filter.id ? ' is-active' : ''}`}
                        >
                          <span className="resources-tab-icon" aria-hidden="true">
                            <Icon className="resources-tab-icon-svg" />
                          </span>
                          <span className="resources-tab-label">{filter.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="resources-search">
                    <Search className="resources-search-icon" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder={searchPlaceholder}
                      aria-label={searchPlaceholder}
                    />
                    <span className="resources-search-shortcut">⌘ K</span>
                  </div>

                  <div className="resources-list">
                    {filteredResources.length === 0 ? (
                      <div className="resources-empty">{emptyState}</div>
                    ) : (
                      filteredResources.map((resource) => {
                        const title = language === 'en' && resource.titleEn ? resource.titleEn : resource.title;
                        const description = language === 'en' && resource.descriptionEn ? resource.descriptionEn : resource.description;
                        const config = typeConfig[resource.type] || typeConfig.guide;
                        const Icon = config.icon;
                        const ctaLabel = `${ctaBase} ${config.label.toLowerCase()}`;

                        return (
                          <button
                            key={resource.id}
                            type="button"
                            className={`resource-row resource-row-${resource.type}`}
                            onClick={() => handleReadArticle(resource)}
                          >
                            <span className="resource-row-icon" aria-hidden="true">
                              <Icon className="resource-row-icon-svg" />
                            </span>
                            <span className="resource-row-body">
                              <span className="resource-row-type">{config.label}</span>
                              <span className="resource-row-title">{title}</span>
                              <span className="resource-row-desc">{description}</span>
                            </span>
                            <span className="resource-row-cta">
                              {ctaLabel}
                              <ArrowUpRight className="resource-row-cta-icon" />
                            </span>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
