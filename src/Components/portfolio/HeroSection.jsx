import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Package } from 'lucide-react';
import { useLanguage } from './LanguageContext';

function HandDrawnArrowDown() {
    return (
        <svg
            className="hand-drawn-arrow"
            width="60"
            height="50"
            viewBox="0 0 60 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 5C10 8 18 12 25 20C30 26 33 33 36 40C37 42 38 44 40 45"
                stroke="#666667"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M34 38L40 45L44 37"
                stroke="#666667"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}

function HandDrawnArrowUp() {
    return (
        <svg
            className="hand-drawn-arrow"
            width="55"
            height="45"
            viewBox="0 0 55 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 40C10 36 17 30 25 24C33 18 40 14 47 10C49 9 50 7 51 6"
                stroke="#666667"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M45 2L51 6L47 13"
                stroke="#666667"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}

function TrustBadge({ language }) {
    const avatars = [
        { name: 'Martina S.', src: '/avatars/avatar-1.webp' },
        { name: 'Lucas R.', src: '/avatars/avatar-2.webp' },
        { name: 'Sof\u00eda P.', src: '/avatars/avatar-3.webp' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="trust-badge mb-8"
        >
            <div className="trust-badge-avatars">
                <div className="avatar-stack">
                    {avatars.map((avatar, index) => (
                        <button
                            key={avatar.name}
                            type="button"
                            className="avatar-item"
                            style={{ zIndex: avatars.length - index }}
                            aria-label={avatar.name}
                        >
                            <span className="avatar-tooltip">{avatar.name}</span>
                            <img 
                                src={avatar.src} 
                                alt={avatar.name} 
                                decoding="async"
                                fetchPriority={index === 0 ? "high" : "auto"}
                                width="36" 
                                height="36" 
                            />
                        </button>
                    ))}
                </div>
            </div>
            <span className="trust-badge-text">
                {language === 'es' ? 'Aprobada por +50 marketers' : 'Trusted by 50+ marketers'}
            </span>
            <span className="trust-badge-balance" aria-hidden="true" />
        </motion.div>
    );
}

export default function HeroSection() {
    const { language } = useLanguage();
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative overflow-x-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black pt-6">
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-0 md:opacity-100 transition-opacity duration-300">
                {!isMobile && (
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            rotate: [0, 90, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
                        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                    />
                )}
                {!isMobile && (
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, -50, 0],
                            rotate: [0, -90, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: 1,
                        }}
                        className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                    />
                )}
            </div>

            <div className="hidden lg:block">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 }}
                    className="absolute hero-float-1"
                    style={{
                        top: '60px',
                        left: '-80px',
                        zIndex: 5,
                        willChange: 'transform'
                    }}
                >
                    <Link to="/herramientas" className="block">
                        <img
                            src="/laptop.webp"
                            alt={language === 'es' ? 'Laptop con proyecto' : 'Laptop with project'}
                            className="hero-image w-[320px] h-auto"
                            loading="lazy"
                            width="320"
                            height="220"
                        />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.7 }}
                    className="absolute hero-float-2"
                    style={{
                        top: '70px',
                        right: '-28px',
                        zIndex: 5,
                        willChange: 'transform'
                    }}
                >
                    <Link to="/herramientas/quiz-estrategia" className="hero-media-shell hero-media-shell-quiz block">
                        <img
                            src="/new-quiz.webp"
                            alt={language === 'es' ? 'Quiz de estrategia digital' : 'Digital strategy quiz'}
                            className="hero-image hero-image-cropped hero-image-quiz"
                            loading="lazy"
                            width="280"
                            height="200"
                        />
                    </Link>
                </motion.div>

                <div
                    className="absolute z-[6] pointer-events-none"
                    style={{
                        top: '254px',
                        right: '18px',
                    }}
                >
                    <div className="flex flex-col items-start max-w-[235px]">
                        <HandDrawnArrowDown />
                        <p className="handwritten-text text-sm mt-1 leading-snug">
                            {language === 'es'
                                ? '\u00bfEst\u00e1s seguro de que tu estrategia est\u00e1 alineada con tus objetivos?'
                                : 'Are you sure your strategy is aligned with your goals?'}
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.9 }}
                    className="absolute hero-float-3"
                    style={{
                        bottom: '92px',
                        left: '22px',
                        zIndex: 5,
                        willChange: 'transform'
                    }}
                >
                    <Link to="/glosario-marketing" className="hero-media-shell hero-media-shell-glosario block">
                        <img
                            src="/new-glosario.webp"
                            alt={language === 'es' ? 'Celular con libros de marketing' : 'Phone with marketing books'}
                            className="hero-image hero-image-cropped hero-image-glosario"
                            loading="lazy"
                            width="260"
                            height="320"
                        />
                    </Link>
                </motion.div>

                <div
                    className="absolute z-[6] pointer-events-none"
                    style={{
                        bottom: '296px',
                        left: '4px',
                    }}
                >
                    <div className="flex items-center gap-2">
                        <HandDrawnArrowUp />
                        <p className="handwritten-text text-sm max-w-[180px] leading-snug">
                            {language === 'es' ? 'Aprend\u00e9 slang marketinero' : 'Learn marketing slang'}
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 1.1 }}
                    className="absolute hero-float-4"
                    style={{
                        bottom: '26px',
                        right: '-46px',
                        zIndex: 5,
                        willChange: 'transform'
                    }}
                >
                    <Link to="/recursos" className="hero-media-shell hero-media-shell-recursos block">
                        <img
                            src="/new-recursos.webp"
                            alt={language === 'es' ? 'Recursos de marketing digital' : 'Digital marketing resources'}
                            className="hero-image hero-image-cropped hero-image-recursos"
                            loading="lazy"
                            width="280"
                            height="200"
                        />
                    </Link>
                </motion.div>
            </div>

            <section className="relative -mt-5 pb-8 md:pb-12">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                        className="max-w-5xl mx-auto text-center flex flex-col items-center"
                    >
                        <TrustBadge language={language} />

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mb-4 tracking-tight leading-[0.95]"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.05em' }}
                        >
                            {language === 'es' ? (
                                <>
                                    <span className="block">{'Menos fricci\u00f3n.'}</span>
                                    <span className="block">{'M\u00e1s conversi\u00f3n.'}</span>
                                </>
                            ) : (
                                <>
                                    <span className="block">Less friction.</span>
                                    <span className="block">More conversion.</span>
                                </>
                            )}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-sm md:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-6"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                            {language === 'es'
                                ? 'Acelera tu crecimiento profesional con recursos y herramientas digitales premium. Soluciones pr\u00e1cticas y listas para usar que te ayudar\u00e1n a resolver desaf\u00edos t\u00e9cnicos y creativos en minutos, no en horas.'
                                : 'Accelerate your professional growth with premium digital resources and tools. Practical, ready-to-use solutions to help you solve technical and creative challenges in minutes, not hours.'}
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100px' }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="flex flex-col items-center justify-center w-full mt-2"
                        >
                            <p className="text-zinc-500 text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold mb-5">
                                {language === 'es' ? '\u00bfPor d\u00f3nde empezar?' : 'Where to start?'}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-5 px-4 sm:px-0">
                                <Link to="/projects" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group"
                                    >
                                        {language === 'es' ? 'Ver mi trabajo' : 'View my work'}
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </motion.button>
                                </Link>

                                <Link to="/herramientas" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <Package className="h-4 w-4" />
                                        {language === 'es' ? 'Explorar productos' : 'Explore products'}
                                    </motion.button>
                                </Link>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-sm mb-8 text-zinc-400">
                                <Link to="/recursos" className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400/50 pb-0.5">
                                    {language === 'es' ? 'Recursos gratuitos' : 'Free resources'}
                                </Link>
                                <span className="text-zinc-700 text-xs" aria-hidden="true">&bull;</span>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400/50 pb-0.5 cursor-pointer"
                                >
                                    {language === 'es' ? 'Contactar' : 'Contact'}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </section>
    );
}
