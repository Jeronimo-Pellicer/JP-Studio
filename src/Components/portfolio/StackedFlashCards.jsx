import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const getCardsData = (isEnglish) => [
  {
    id: 1,
    image: '/pos_conversion.png',
    badge: isEnglish ? 'SEO & CONVERSION' : 'POSICIONAMIENTO & CONVERSION',
    badgeColor: 'text-orange-300',
    title: isEnglish ? 'Smart growth and real scalability for your company' : 'Crecimiento inteligente y escalabilidad real para tu empresa',
    description: isEnglish ? 'I boost your brand\'s scalability in conventional search engines and AI-driven platforms. My SEO approach combines creativity and data analysis to achieve tangible results.' : 'Impulso la escalabilidad de tu marca en motores de búsqueda convencionales y en plataformas impulsadas por IA. Mi enfoque SEO combina creatividad y análisis de datos para lograr resultados tangibles.',
    link: '/projects'
  },
  {
    id: 2,
    image: '/decision_datos.png',
    badge: isEnglish ? 'ANALYTICS & MEASUREMENT' : 'ANALÍTICA & MEDICIÓN',
    badgeColor: 'text-green-300',
    title: isEnglish ? 'I help organize data and make complex decisions' : 'Ayudo a ordenar datos y tomar decisiones complejas',
    description: isEnglish ? 'I adapt easily to dynamic environments with clear goals and precise objectives. I actively seek challenges that represent opportunities for professional growth through data analysis, process optimization, or digital marketing initiatives.' : 'Me adaptó fácilmente a entornos dinámicos con metas claras y objetivos precisos. Busco activamente desafíos que representen oportunidades de crecimiento profesional, ya sea mediante análisis de datos, optimización de procesos o iniciativas de marketing digital. Generación de valor en organizaciones.',
    link: '/projects'
  },
  {
    id: 3,
    image: '/innovacion_adapt.png',
    badge: isEnglish ? 'INNOVATION & ADAPTABILITY' : 'INNOVACION & ADAPTABILIDAD',
    badgeColor: 'text-pink-300',
    title: isEnglish ? 'I ensure your company stays at the forefront of the digital ecosystem' : 'Aseguro que tu empresa se mantenga a la vanguardia del ecosistema digital',
    description: isEnglish ? 'I continuously train in new technologies, artificial intelligence, and digital tools, focusing on their practical application for process improvement, strategic analysis, and value generation in organizations.' : 'Me capacito de manera permanente en nuevas tecnologías, inteligencia artificial y herramientas digitales, con foco en su aplicación práctica para la mejora de procesos, el análisis estratégico y la generación de valor en organizaciones.',
    link: '/projects'
  },
  {
    id: 4,
    image: '/green_bonds.png',
    badge: isEnglish ? 'LEADERSHIP & EXCELLENCE' : 'LIDERAZGO & EXCELENCIA',
    badgeColor: 'text-orange-300',
    title: isEnglish ? 'Insertion of Green Bonds in the Argentine market' : 'Insercion de Green Bonds en mercado argentino',
    description: isEnglish ? 'I have been selected to lead a university project on International Finance and the insertion of Green Bonds in Argentina, with projections for several congresses.' : 'He sido seleccionado para liderar un proyecto universitario de Finanzas Internacionales e inserción de Green Bonds en Argentina, con proyección a varios congresos.',
    link: '/projects'
  }
];

const FlashCard = ({ card, index, scrollYProgress, totalCards, isDesktop, isEnglish }) => {
  const activeProgress = index / (totalCards - 1);
  const prevProgress = (index - 1) / (totalCards - 1);
  
  // Card enters from below (mobile)
  const y = useTransform(
    scrollYProgress,
    [-1, prevProgress, activeProgress, 2],
    ['100vh', '100vh', '0vh', '0vh']
  );

  // Card enters from right (desktop)
  const x = useTransform(
    scrollYProgress,
    [-1, prevProgress, activeProgress, 2],
    ['100vw', '100vw', '0vw', '0vw']
  );

  const entryY = isDesktop ? '0vh' : y;
  const entryX = isDesktop ? x : '0vw';

  // Once active, if we scroll further down, it scales back slightly to give depth to the next incoming card
  const scale = useTransform(
    scrollYProgress,
    [-1, activeProgress, 1, 2],
    [1, 1, 1 - (totalCards - index - 1) * 0.05, 1 - (totalCards - index - 1) * 0.05]
  );
  
  // Slightly dim the card as it goes to the back
  const filter = useTransform(
    scrollYProgress,
    [-1, activeProgress, activeProgress + 0.1, 2],
    ['brightness(1)', 'brightness(1)', 'brightness(0.6)', 'brightness(0.6)']
  );

  // Maintain opacity 1 when active, but fade in during entry. 
  // It won't fade out fully because the next card covers it seamlessly!
  const opacity = useTransform(
    scrollYProgress,
    [-1, prevProgress + 0.05, activeProgress, 2],
    [0, 0, 1, 1]
  );

  // Enforce first card to not transition y or opacity when scroll is 0
  const isFirst = index === 0;

  return (
    <motion.div
      style={{
        y: isFirst ? '0vh' : entryY,
        x: isFirst ? '0vw' : entryX,
        scale,
        opacity: isFirst ? 1 : opacity,
        filter: filter,
        zIndex: index + 10, // Ascending z-index so newer cards overlap older ones
      }}
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 pt-[120px] md:pt-[160px]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[560px] md:max-w-[700px] bg-[#050b08] border border-emerald-500/20 rounded-[32px] p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(16,185,129,0.15),inset_0_1px_2px_rgba(255,255,255,0.05),inset_0_-2px_15px_rgba(16,185,129,0.1)] flex flex-col items-center text-center mt-12 md:mt-16"
      >
        
        {/* SVG/Image Wrapper. We style it to maintain aspect ratio and size uniformly */}
        <div className="w-full flex justify-center mb-8 relative">
           <img 
              src={card.image} 
              alt={card.title} 
              className="max-h-[300px] w-auto object-contain pointer-events-none drop-shadow-2xl hero-image"
              onError={(e) => {
                 // Fallback if image resolves failed
                 e.target.style.display = 'none';
              }}
           />
           {/* Fallback glow in case images are missing */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 blur-3xl -z-10 rounded-full" />
        </div>

        {/* Text Area */}
        <div className="mb-4">
            <motion.span 
                 animate={{ opacity: [0.7, 1, 0.7], textShadow: ["0px 0px 4px rgba(16,185,129,0)", "0px 0px 12px rgba(16,185,129,0.5)", "0px 0px 4px rgba(16,185,129,0)"] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className={`text-[11px] md:text-[13px] font-bold tracking-widest uppercase inline-block ${card.badgeColor}`}
            >
                {card.badge}
            </motion.span>
        </div>
        
        <h3 className="text-[22px] md:text-[34px] font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-[550px]">
          {card.title}
        </h3>
        
        <p className="text-[14px] md:text-[16px] text-zinc-400 font-medium leading-relaxed max-w-[580px] mb-8">
          {card.description}
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
                to={card.link}
                onClick={() => window.scrollTo(0, 0)}
                className="premium-glow-button relative group inline-flex items-center justify-center text-[12px] font-bold text-white uppercase tracking-widest transition-all px-6 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
                <span className="relative z-10">{isEnglish ? 'LEARN MORE' : 'APRENDE MAS'}</span>
                <svg className="w-4 h-4 ml-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const StackedFlashCards = ({ children }) => {
  const { locale } = useLanguage();
  const isEnglish = locale === 'en';
  const cardsData = getCardsData(isEnglish);

  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Creates a scroll progress relative to the container element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // The height of this container determines how long the scroll animation lasts
    // length - 1 so the last card immediately finishes logic. If we want some pause at the end, we can make it length * 100vh
    <section ref={containerRef} className="relative w-full h-[300vh]">
      {/* Sticky wrapper stays in view while the parent keeps scrolling */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* Background glow specific to stack section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#040906]">
            {/* SVG Noise/Grain Overlay */}
            <div 
                className="absolute inset-0 z-10 opacity-[0.12] mix-blend-overlay pointer-events-none" 
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />
            {/* Floating Nebula Orbs */}
            <motion.div 
                className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-emerald-600/10 blur-[130px] rounded-full"
                animate={{ rotate: 360, x: [0, 50, 0], y: [0, -50, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center center" }}
            />
            <motion.div 
                className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full"
                animate={{ rotate: -360, x: [0, -40, 0], y: [0, 60, 0] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "center center" }}
            />
        </div>

        {cardsData.map((card, index) => (
          <FlashCard 
            key={card.id} 
            card={card} 
            index={index} 
            scrollYProgress={scrollYProgress} 
            totalCards={cardsData.length} 
            isDesktop={isDesktop}
            isEnglish={isEnglish}
          />
        ))}

        {/* Placed children (like the section header) to keep them fixed while scrolling. 
            Rendered AFTER cards in DOM to guarantee it paints OVER them, with absolute z-[100] */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="absolute top-[6%] md:top-[10%] left-0 w-full px-6 z-[100] flex flex-col items-center pointer-events-none text-center drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
            <div className="pointer-events-auto">
               {children}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StackedFlashCards;
