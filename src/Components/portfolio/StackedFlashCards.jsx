import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const getCardsData = (isEnglish) => [
  {
    id: 1,
    badge: isEnglish ? 'SEO & CONVERSION' : 'POSICIONAMIENTO & CONVERSION',
    badgeColor: 'text-orange-300',
    title: isEnglish ? 'Smart growth and real scalability for your company' : 'Crecimiento inteligente y escalabilidad real para tu empresa',
    description: isEnglish ? 'I boost your brand\'s scalability in conventional search engines and AI-driven platforms. My SEO approach combines creativity and data analysis to achieve tangible results.' : 'Impulso la escalabilidad de tu marca en motores de búsqueda convencionales y en plataformas impulsadas por IA. Mi enfoque SEO combina creatividad y análisis de datos para lograr resultados tangibles.',
    link: '/projects'
  },
  {
    id: 2,
    badge: isEnglish ? 'ANALYTICS & MEASUREMENT' : 'ANALÍTICA & MEDICIÓN',
    badgeColor: 'text-green-300',
    title: isEnglish ? 'I help organize data and make complex decisions' : 'Ayudo a ordenar datos y tomar decisiones complejas',
    description: isEnglish ? 'I adapt easily to dynamic environments with clear goals and precise objectives. I actively seek challenges that represent opportunities for professional growth through data analysis, process optimization, or digital marketing initiatives.' : 'Me adaptó fácilmente a entornos dinámicos con metas claras y objetivos precisos. Busco activamente desafíos que representen oportunidades de crecimiento profesional, ya sea mediante análisis de datos, optimización de procesos o iniciativas de marketing digital. Generación de valor en organizaciones.',
    link: '/projects'
  },
  {
    id: 3,
    badge: isEnglish ? 'INNOVATION & ADAPTABILITY' : 'INNOVACION & ADAPTABILIDAD',
    badgeColor: 'text-pink-300',
    title: isEnglish ? 'I ensure your company stays at the forefront of the digital ecosystem' : 'Aseguro que tu empresa se mantenga a la vanguardia del ecosistema digital',
    description: isEnglish ? 'I continuously train in new technologies, artificial intelligence, and digital tools, focusing on their practical application for process improvement, strategic analysis, and value generation in organizations.' : 'Me capacito de manera permanente en nuevas tecnologías, inteligencia artificial y herramientas digitales, con foco en su aplicación práctica para la mejora de procesos, el análisis estratégico y la generación de valor en organizaciones.',
    link: '/projects'
  },
  {
    id: 4,
    badge: isEnglish ? 'LEADERSHIP & EXCELLENCE' : 'LIDERAZGO & EXCELENCIA',
    badgeColor: 'text-orange-300',
    title: isEnglish ? 'Insertion of Green Bonds in the Argentine market' : 'Insercion de Green Bonds en mercado argentino',
    description: isEnglish ? 'I have been selected to lead a university project on International Finance and the insertion of Green Bonds in Argentina, with projections for several congresses.' : 'He sido seleccionado para liderar un proyecto universitario de Finanzas Internacionales e inserción de Green Bonds en Argentina, con proyección a varios congresos.',
    link: '/projects'
  }
];

const FlashCard = React.memo(({ card, index, scrollYProgress, totalCards, isDesktop, isEnglish }) => {
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

  // Near-solid darken effect is not needed if background cards are visible
  const darkenOpacity = useTransform(
    scrollYProgress,
    [-1, activeProgress, activeProgress + 0.1, 2],
    [0, 0, 0.1, 0.1]
  );

  // Maintain opacity 1 when active, but fade in during entry. 
  // It won't fade out fully because the next card covers it seamlessly!
  const opacity = useTransform(
    scrollYProgress,
    [-1, prevProgress, activeProgress, 2],
    [0, 1, 1, 1]
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
        zIndex: index + 10,
        willChange: 'transform, opacity',
      }}
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 pt-[80px] md:pt-[120px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[560px] md:max-w-[850px] bg-zinc-950/95 md:backdrop-blur-xl border border-emerald-500/10 rounded-[40px] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 md:gap-16 overflow-hidden relative group/card"
      >
        {/* Background Index Number for depth */}
        <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-emerald-500/[0.03] select-none pointer-events-none italic leading-none transition-transform duration-700 group-hover/card:-translate-x-4">
            {index < 9 ? `0${index + 1}` : index + 1}
        </div>

        {/* Black overlay for depth */}
        <motion.div
          style={{ opacity: darkenOpacity }}
          className="absolute inset-0 bg-black pointer-events-none z-50 rounded-[40px]"
        />

        {/* Aesthetic Glow that follows the index number slightly */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10 rounded-full" />

        {/* Content Section */}
        <div className="flex-1 space-y-6 relative z-10">
          <div className="space-y-4">
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase inline-block px-3 py-1 rounded-full bg-zinc-900/50 ${card.badgeColor}`}
            >
              {card.badge}
            </motion.span>
            
            <h3 className="text-[26px] md:text-[42px] font-extrabold text-white leading-[1.1] tracking-tight max-w-[650px]">
              {card.title}
            </h3>
          </div>

          <p className="text-[14px] md:text-[17px] text-zinc-400 font-medium leading-relaxed max-w-[600px]">
            {card.description}
          </p>

          <motion.div 
            whileHover={{ scale: 1.05, x: 5 }} 
            whileTap={{ scale: 0.95 }}
            className="pt-4"
          >
            <Link
              to={card.link}
              onClick={() => window.scrollTo(0, 0)}
              className="premium-glow-button relative group inline-flex items-center justify-center text-[11px] font-bold text-white uppercase tracking-widest transition-all px-8 py-4 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <span className="relative z-10">{isEnglish ? 'LEARN MORE' : 'APRENDE MAS'}</span>
              <svg className="w-4 h-4 ml-3 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
});

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
          {/* Static Noise Overlay - much faster than SVG feTurbulence during scroll */}
          <div
            className="absolute inset-0 z-10 opacity-[0.2] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: 'url("/noise.png")' }}
          />
          {/* Floating Nebula Orbs */}
            <motion.div
              className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-emerald-600/10 blur-[130px] rounded-full"
              animate={{ rotate: 360, x: [0, 50, 0], y: [0, -50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center center", willChange: "transform" }}
            />
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full"
            animate={{ rotate: -360, x: [0, -40, 0], y: [0, 60, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center center", willChange: "transform" }}
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
          className="absolute top-[4%] md:top-[8%] left-0 w-full px-6 z-[100] flex flex-col items-center pointer-events-none text-center drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
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
