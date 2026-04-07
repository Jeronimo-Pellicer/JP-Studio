import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './Layout';
import SEO from './Components/shared/SEO';
import ResourceHints from './Components/shared/ResourceHints';
import HeroSection from './Components/portfolio/HeroSection';
import MarqueeSection from './Components/portfolio/MarqueeSection';

// Defer non-critical toast notifications
const Toaster = lazy(() => import('sonner').then(module => ({ default: module.Toaster })));

// Lazy-load pages (route-level splitting)
const Projects = lazy(() => import(/* webpackChunkName: "projects" */ './Pages/Projects'));
const ProjectDetail = lazy(() => import(/* webpackChunkName: "project-detail" */ './Pages/ProjectDetail'));
const Books = lazy(() => import(/* webpackChunkName: "books" */ './Pages/Books'));
const Herramientas = lazy(() => import(/* webpackChunkName: "herramientas" */ './Pages/Herramientas'));
const Resources = lazy(() => import(/* webpackChunkName: "resources" */ './Pages/Resources'));
const ROICalculator = lazy(() => import(/* webpackChunkName: "roi-calculator" */ './Pages/ROICalculator'));
const BuyerPersona = lazy(() => import(/* webpackChunkName: "buyer-persona" */ './Pages/BuyerPersona'));
const PriorityMatrix = lazy(() => import(/* webpackChunkName: "priority-matrix" */ './Pages/PriorityMatrix'));
const StrategyQuiz = lazy(() => import(/* webpackChunkName: "strategy-quiz" */ './Pages/StrategyQuiz'));

// Below-the-fold components - defer loading
const AboutSection = lazy(() => import(/* webpackChunkName: "about" */ './Components/portfolio/AboutSection'));
const FAQSection = lazy(() => import(/* webpackChunkName: "faq" */ './Components/portfolio/FAQSection'));
const ContactSection = lazy(() => import(/* webpackChunkName: "contact" */ './Components/portfolio/ContactSection'));

// Minimal loading fallback to avoid flashing header/footer during lazy load
const LoadingFallback = () => (
  <div className="min-h-screen bg-zinc-950" aria-hidden="true" />
);

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
      <Suspense fallback={null}>
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ResourceHints />
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
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
            <Route path="/glosario-marketing" element={React.createElement(lazy(() => import("./Pages/GlosarioMarketing")))} />
          </Routes>
        </Suspense>
      </Layout>
      <Suspense fallback={null}>
        <Toaster richColors position="top-right" />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
