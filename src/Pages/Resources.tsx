import React, { useState, useMemo, useEffect, Suspense, lazy } from 'react';
import SEO from '../Components/shared/SEO';
import AlphabetBar from '../Components/ui/AlphabetBar';
import AlphabetSlider from '../Components/ui/AlphabetSlider';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, FileText, Image } from 'lucide-react';
import { useLanguage } from '../Components/portfolio/LanguageContext';
import { useSearchParams, useParams } from 'react-router-dom';

const Prism = lazy(() => import('../Components/resources/Prism'));
import ResourceHero from '../Components/resources/ResourceHero';
import ResourceFilter from '../Components/resources/ResourceFilter';
import ResourceSection from '../Components/resources/ResourceSection';
const ResourcePreviewModal = lazy(() => import('../Components/resources/ResourcePreviewModal'));
const PaymentModal = lazy(() => import('../Components/resources/PaymentModal'));
import ResourceCTA from '../Components/resources/ResourceCTA';
import ResourceFAQ from '../Components/resources/ResourceFAQ';
import ResourceArticle from '../Components/resources/ResourceArticle';
import AnimatedDivider from '../Components/resources/AnimatedDivider';
import { resourcesData } from '../data/resourcesData';

export default function Resources() {
  const { t, language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const { articleId } = useParams(); // Get article from URL param
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);

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
    if (activeFilter === 'all') return resourcesData;
    return resourcesData.filter(r => r.type === activeFilter);
  }, [activeFilter, language]);

  const templates = filteredResources.filter(r => r.type === 'template');
  const guides = filteredResources.filter(r => r.type === 'guide');
  const infographics = filteredResources.filter(r => r.type === 'infographic');

  const handlePreview = (resource) => {
    setSelectedResource(resource);
    setIsPreviewOpen(true);
  };

  const handlePurchase = (resource) => {
    setSelectedResource(resource);
    setIsPaymentOpen(true);
  };

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

  return (
    <div className="bg-slate-950 relative overflow-x-hidden">
      <SEO 
        title="Recursos Digitales y Guías | JP Studio"
        description="Recursos, guías y materiales gratuitos y premium sobre UX, marketing digital y crecimiento de negocios. Aprendé y mejorá tus habilidades."
        url="/recursos"
      />
      {/* Prism Background - Fixed */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div />}>
          <Prism height={3.5} baseWidth={5.5} animationType="rotate" glow={0.8} noise={0.3} transparent={true} scale={3.6} hueShift={0.5} colorFrequency={1} bloom={0.8} timeScale={0.3} />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90" />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {selectedArticleId ? (
            <motion.div key="article" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceArticle resourceId={selectedArticleId} onBack={handleBackToResources} />
              </div>
            </motion.div>
          ) : (
            <motion.div key="resources" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Hero Section */}
              <ResourceHero key={`hero-${language}`} />
              {/* Animated Divider */}
              <AnimatedDivider />
              {/* Main Content - Max-width 1200px centrado */}
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                {/* Filters */}
                <ResourceFilter key={`filter-${language}`} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                {/* Resources Sections */}
                <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                  {templates.length > 0 && (
                    <ResourceSection key={`templates-${language}`} id="templates" title={t.resources.sections.templates.title} subtitle={t.resources.sections.templates.subtitle} icon={FileSpreadsheet} resources={templates} onPreview={handlePreview} onPurchase={handlePurchase} onReadArticle={handleReadArticle} />
                  )}
                  {guides.length > 0 && (
                    <ResourceSection key={`guides-${language}`} id="guides" title={t.resources.sections.guides.title} subtitle={t.resources.sections.guides.subtitle} icon={FileText} resources={guides} onPreview={handlePreview} onPurchase={handlePurchase} onReadArticle={handleReadArticle} />
                  )}
                  {infographics.length > 0 && (
                    <ResourceSection key={`infographics-${language}`} id="infographics" title={t.resources.sections.infographics.title} subtitle={t.resources.sections.infographics.subtitle} icon={Image} resources={infographics} onPreview={handlePreview} onPurchase={handlePurchase} onReadArticle={handleReadArticle} />
                  )}
                </div>
              </main>
              {/* FAQ Section */}
              <ResourceFAQ />
              {/* CTA Section */}
              <ResourceCTA />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Preview Modal */}
      <Suspense fallback={null}>
        <ResourcePreviewModal resource={selectedResource} isOpen={isPreviewOpen} onClose={() => { setIsPreviewOpen(false); setSelectedResource(null); }} />
      </Suspense>
      {/* Payment Modal */}
      <Suspense fallback={null}>
        <PaymentModal resource={selectedResource} isOpen={isPaymentOpen} onClose={() => { setIsPaymentOpen(false); setSelectedResource(null); }} />
      </Suspense>
    </div>
  );
}
