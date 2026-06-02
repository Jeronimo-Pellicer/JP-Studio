import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import SEO from './Components/shared/SEO';
import ResourceHints from './Components/shared/ResourceHints';
import HeroSection from './Components/portfolio/HeroSection';
import MarqueeSection from './Components/portfolio/MarqueeSection';
import AboutSection from './Components/portfolio/AboutSection';
import FAQSection from './Components/portfolio/FAQSection';
import ContactSection from './Components/portfolio/ContactSection';
import Projects from './Pages/Projects';
import ProjectDetail from './Pages/ProjectDetail';
import Books from './Pages/Books';
import Herramientas from './Pages/Herramientas';
import Resources from './Pages/Resources';
import ROICalculator from './Pages/ROICalculator';
import BuyerPersona from './Pages/BuyerPersona';
import PriorityMatrix from './Pages/PriorityMatrix';
import StrategyQuiz from './Pages/StrategyQuiz';
import GlosarioMarketing from './Pages/GlosarioMarketing';
import { Toaster } from 'sonner';

function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    // Manejar hash en la URL (ej: /#contact)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO 
        title="JP | Digital Growth Studio"
        description="JP Digital Growth Studio: diseño UX basado en datos, marketing digital y herramientas gratuitas para marketers y estudiantes. Buenos Aires, Argentina."
        url=""
      />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return children;
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <>
      <ResourceHints />
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/books" element={<Books />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/herramientas/calculadora-roi" element={<ROICalculator />} />
          <Route path="/herramientas/buyer-persona" element={<BuyerPersona />} />
          <Route path="/herramientas/matriz-priorizacion" element={<PriorityMatrix />} />
          <Route path="/herramientas/quiz-estrategia" element={<StrategyQuiz />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/recursos/:articleId" element={<Resources />} />
           <Route path="/glosario-marketing" element={<GlosarioMarketing />} />
        </Routes>
      </Layout>
      <ClientOnly>
        <Toaster richColors position="top-right" />
      </ClientOnly>
    </>
  );
}

export default App;
