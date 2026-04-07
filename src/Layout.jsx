import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'; // Agregamos Outlet, useLocation y useNavigate
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { LanguageProvider, useLanguage } from './Components/portfolio/LanguageContext';
import LanguageSwitcher from './Components/portfolio/LanguageSwitcher';

// Nested Menu Item Component - for submenu items that can expand vertically
function NestedMenuItem({ item, onClose, timeoutRef }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (hasSubItems) setShowSubmenu(true);
    };

    const handleMouseLeave = () => {
        if (hasSubItems) {
            timeoutRef.current = setTimeout(() => setShowSubmenu(false), 150);
        }
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {hasSubItems ? (
                // Item con submenus - NO es clickeable, solo muestra el chevron
                <div className="flex items-center justify-between px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors group cursor-default">
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-transform ${showSubmenu ? 'rotate-180' : ''}`} />
                </div>
            ) : (
                // Item sin submenus - ES clickeable
                <Link
                    to={item.href}
                    onClick={() => onClose()}
                    className="flex items-center justify-between px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors group"
                >
                    <span>{item.label}</span>
                </Link>
            )}

            {/* Vertical submenu - expands below */}
            {hasSubItems && showSubmenu && (
                <div
                    className="relative bg-zinc-800/30 border-t border-b border-zinc-800/50 overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="py-1">
                        {item.subItems.map((subItem, idx) => (
                            <Link
                                key={idx}
                                to={subItem.href}
                                onClick={() => onClose()}
                                className="block px-4 py-2 pl-8 text-xs text-zinc-400 hover:text-emerald-300 hover:bg-zinc-800/80 transition-colors border-l-2 border-transparent hover:border-emerald-500"
                            >
                                {subItem.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// NavButton Component with elegant multicolor border effect
function NavButton({ onClick, label }) {
    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 relative group"
        >
            <span className="relative z-10">{label}</span>
            {/* Animated multicolor border stroke */}
            <svg
                className="absolute inset-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                preserveAspectRatio="none"
                viewBox="0 0 100 40"
                style={{
                    filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.2))',
                }}
            >
                <defs>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="20%" stopColor="#14b8a6" />
                        <stop offset="40%" stopColor="#06b6d4" />
                        <stop offset="60%" stopColor="#3b82f6" />
                        <stop offset="80%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#10b981" />
                        <animate attributeName="x1" values="0%;100%;0%" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="x2" values="100%;200%;100%" dur="2.5s" repeatCount="indefinite" />
                    </linearGradient>
                </defs>
                <style>{`
                    @keyframes borderFlow {
                        0% { stroke-dashoffset: 280; }
                        100% { stroke-dashoffset: 0; }
                    }
                    .flowing-border {
                        stroke-dasharray: 280;
                        animation: borderFlow 2.5s linear infinite;
                        will-change: stroke-dashoffset;
                    }
                `}</style>
                <rect
                    x="2"
                    y="2"
                    width="96"
                    height="36"
                    rx="6"
                    ry="6"
                    fill="none"
                    stroke="url(#borderGradient)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flowing-border"
                />
            </svg>
        </motion.button>
    );
}

// NavDropdown Component with elegant multicolor border effect
function NavDropdown({ label, items, nestedItems, onNavigate }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 150);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    if (onNavigate) {
                        onNavigate();
                    }
                }}
                className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 relative group flex items-center gap-1"
            >
                <span className="relative z-10">{label}</span>
                <ChevronDown className={`w-4 h-4 transition-transform relative z-10 ${isOpen ? 'rotate-180' : ''}`} />
                {/* Animated multicolor border stroke */}
                <svg
                    className="absolute inset-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 40"
                    style={{
                        filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.2))',
                    }}
                >
                    <defs>
                        <linearGradient id="borderGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="20%" stopColor="#14b8a6" />
                            <stop offset="40%" stopColor="#06b6d4" />
                            <stop offset="60%" stopColor="#3b82f6" />
                            <stop offset="80%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#10b981" />
                            <animate attributeName="x1" values="0%;100%;0%" dur="2.5s" repeatCount="indefinite" />
                            <animate attributeName="x2" values="100%;200%;100%" dur="2.5s" repeatCount="indefinite" />
                        </linearGradient>
                    </defs>
                    <style>{`
                        @keyframes borderFlow {
                            0% { stroke-dashoffset: 280; }
                            100% { stroke-dashoffset: 0; }
                        }
                        .flowing-border-dropdown {
                            stroke-dasharray: 280;
                            animation: borderFlow 2.5s linear infinite;
                            will-change: stroke-dashoffset;
                        }
                    `}</style>
                    <rect
                        x="2"
                        y="2"
                        width="96"
                        height="36"
                        rx="6"
                        ry="6"
                        fill="none"
                        stroke="url(#borderGradient2)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flowing-border-dropdown"
                    />
                </svg>
            </motion.button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl overflow-visible min-w-[240px] shadow-2xl z-50"
                        style={{ overflow: 'visible' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Nested items (with submenus) */}
                        {nestedItems && (
                            <div className="py-2">
                                {nestedItems.map((item, idx) => (
                                    <NestedMenuItem
                                        key={idx}
                                        item={item}
                                        onClose={() => setIsOpen(false)}
                                        timeoutRef={timeoutRef}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Flat items (no submenus) */}
                        {items && (
                            <div className="py-2">
                                {items.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function LayoutContent({ children, currentPageName }) {
    const { t, language } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    
    // Hooks de estado
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isHomePage = location.pathname === '/';

    const handleNavClick = (item) => {
        if (item.type === 'route') {
            navigate(item.href);
            setIsMobileMenuOpen(false);
        } else if (item.type === 'scroll') {
            if (isHomePage) {
                scrollToSection(item.href);
            } else {
                navigate(`/${item.href}`);
            }
        }
    };

    const handleContactClick = () => {
        if (isHomePage) {
            scrollToSection('#contact');
        } else {
            navigate('/#contact');
        }
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = () => {
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const handleResumeClick = () => {
        const link = document.createElement('a');

        // Si el idioma es español ('es'), baja el CV en español
        if (language === 'es') {
            link.href = '/assets/cv-es.pdf';
            link.download = 'CV-Jeronimo-Pellicer-ES.pdf';
        } else {
            // Si no, baja el CV en inglés
            link.href = '/assets/cv-en.pdf';
            link.download = 'CV-Jeronimo-Pellicer-EN.pdf';
        }

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { scrollY } = useScroll();
    
    // Dynamic values for the header based on scroll (proportional shrink)
    // 0 to 300 pixels of scroll provides a much more gradual "little by little" feel
    const mdMarginX = useTransform(scrollY, [0, 300], ["1.0rem", "14%"]);
    const mobileMarginX = useTransform(scrollY, [0, 300], ["1.0rem", "1.75rem"]);
    
    // Blur, background and border fluid transitions
    const blurAmount = useTransform(scrollY, [0, 300], ["blur(12px)", "blur(24px)"]);
    const bgOpacity = useTransform(scrollY, [0, 300], [0.15, 0.45]);
    const borderAlpha = useTransform(scrollY, [0, 300], [0.2, 0.55]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    }; // <--- Esta llave faltaba antes

    return (
        <div className="min-h-screen bg-zinc-950 relative">
            {/* Navigation - Glassmorphism */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                style={{
                    left: isDesktop ? mdMarginX : mobileMarginX,
                    right: isDesktop ? mdMarginX : mobileMarginX,
                    backdropFilter: blurAmount,
                    backgroundColor: useTransform(bgOpacity, v => `rgba(24, 24, 27, ${v})`),
                    borderColor: useTransform(borderAlpha, v => `rgba(63, 63, 70, ${v})`),
                }}
                className="fixed top-4 z-50 border rounded-2xl transition-shadow duration-500 shadow-lg"
            >
                <style>{`
                    @keyframes gradientMove {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}</style>
                <nav className="w-full max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.button
                            onClick={handleLogoClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-xl font-bold text-white tracking-tight relative group"
                        >
                            JP Studio
                            <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full ml-1 group-hover:animate-pulse"></span>
                        </motion.button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2 relative z-10">
                            {/* ABOUT ME */}
                            <NavButton
                                onClick={() => handleNavClick({ type: 'scroll', href: '#about' })}
                                label={t.nav.aboutMe}
                            />
                            
                            {/* PROJECTS - Link to /projects */}
                            <NavButton
                                onClick={() => {
                                    navigate('/projects');
                                    window.scrollTo({ top: 0, behavior: 'instant' });
                                }}
                                label={t.nav.projects}
                            />
                            
                            {/* HERRAMIENTAS with dropdown */}
                            <NavDropdown
                                label={t.nav.tools || 'HERRAMIENTAS'}
                                items={[
                                    { label: language === 'en' ? 'ROI Calculator' : 'Calculadora de ROI', href: '/herramientas/calculadora-roi' },
                                    { label: language === 'en' ? 'Buyer Persona Generator' : 'Generador de Buyer Persona', href: '/herramientas/buyer-persona' },
                                    { label: language === 'en' ? 'Prioritization Matrix' : 'Matriz de Priorización', href: '/herramientas/matriz-priorizacion' },
                                    { label: language === 'en' ? 'Digital Strategy Quiz' : 'Quiz de Estrategia Digital', href: '/herramientas/quiz-estrategia' },
                                ]}
                                onNavigate={() => {
                                    navigate('/herramientas');
                                    window.scrollTo({ top: 0, behavior: 'instant' });
                                }}
                            />
                            
                            {/* RECURSOS with dropdown */}
                            <NavDropdown
                                label={t.nav.resources || 'RECURSOS'}
                                nestedItems={[
                                    { 
                                        label: t.nav.resourcesMenu?.templates || 'Templates', 
                                        href: '/recursos?filter=template',
                                        subItems: [
                                             { label: t.nav.resourcesMenu?.cjmTemplate || 'Template de CJM', href: '/recursos?article=cjm-template' },
                                             { label: t.nav.resourcesMenu?.fodaKit || 'Kit FODA completo', href: '/recursos?article=foda-kit' },
                                             { label: t.nav.resourcesMenu?.contentCalendar || 'Calendario de Contenidos', href: '/recursos?article=content-calendar' },
                                             { label: t.nav.resourcesMenu?.npsDashboard || 'Dashboard de NPS', href: '/recursos?article=nps-template' },
                                             { label: t.nav.resourcesMenu?.contentStrategy || 'Estrategia de Contenidos', href: '/recursos?article=content-strategy' },
                                         ]
                                    },
                                    { 
                                        label: t.nav.resourcesMenu?.guides || 'Guías', 
                                        href: '/recursos?filter=guide',
                                        subItems: [
                                            { label: t.nav.resourcesMenu?.cjmGuide || 'Cómo crear un Customer Journey Map', href: '/recursos?article=guia-customer-journey-map' },
                                            { label: t.nav.resourcesMenu?.seoLocalGuide || 'Guía de SEO local', href: '/recursos?article=guia-seo-local' },
                                            { label: t.nav.resourcesMenu?.linkedinStrategy || 'Estrategia de contenido en LinkedIn', href: '/recursos?article=guia-estrategia-linkedin' },
                                            { label: t.nav.resourcesMenu?.cxMetrics || '10 métricas clave de CX', href: '/recursos?article=cx-metrics-guide' },
                                        ]
                                    },
                                    { 
                                        label: t.nav.resourcesMenu?.infographics || 'Infografías', 
                                        href: '/recursos?filter=infographic',
                                        subItems: [
                                            { label: t.nav.resourcesMenu?.linkedinPostAnatomy || 'Anatomía de un buen post', href: '/recursos?article=infografia-anatomia-post-linkedin' },
                                            { label: t.nav.resourcesMenu?.cxOptimization || 'Proceso de optimización de CX', href: '/recursos?article=infografia-optimizacion-atencion-cliente' },
                                            { label: t.nav.resourcesMenu?.keywordResearch || 'Cómo encontrar y usar keywords', href: '/recursos?article=infografia-palabras-clave' },
                                            { label: t.nav.resourcesMenu?.landingPageElements || 'Elementos clave de una landing page', href: '/recursos?article=infografia-elementos-landing-page' },
                                        ]
                                    },
                                ]}
                                onNavigate={() => {
                                    navigate('/recursos');
                                    window.scrollTo({ top: 0, behavior: 'instant' });
                                }}
                            />
                            
                                {/* CTA GLOSARIO - between Recursos and Contactame */}
                                <NavButton
                                    onClick={() => navigate('/glosario-marketing')}
                                    label={t.nav.glossary || 'GLOSARIO'}
                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg hover:from-emerald-400 hover:to-teal-400 transition-all duration-300"
                                />
                            
                            {/* CONTACT ME */}
                            <NavButton
                                onClick={handleContactClick}
                                label={t.nav.contactMe}
                            />
                        </div>

                        {/* Language switcher (inline in header) */}
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="hidden md:block">
                                <LanguageSwitcher className="relative z-10" />
                            </div>
                            {/* Mobile menu button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                            aria-label={isMobileMenuOpen ? (language === 'es' ? 'Cerrar menú' : 'Close menu') : (language === 'es' ? 'Abrir menú' : 'Open menu')}
                            id="mobile-menu-toggle"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                            <div className="md:hidden">
                                <LanguageSwitcher className="relative z-10" />
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-zinc-900/95 md:backdrop-blur-lg border-t border-zinc-800/50 overflow-hidden rounded-b-2xl"
                        >
                            <div className="container mx-auto px-6 py-6 space-y-2">
                                {/* ABOUT ME */}
                                <button
                                    onClick={() => handleNavClick({ type: 'scroll', href: '#about' })}
                                    className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
                                >
                                    {t.nav.aboutMe}
                                </button>
                                
                                {/* PROJECTS */}
                                <Link to="/projects" className="block">
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            window.scrollTo({ top: 0, behavior: 'instant' });
                                        }}
                                        className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
                                    >
                                        {t.nav.projects}
                                    </button>
                                </Link>
                                
                                {/* HERRAMIENTAS */}
                                <Link to="/herramientas" className="block">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
                                    >
                                        {t.nav.tools || 'HERRAMIENTAS'}
                                    </button>
                                </Link>
                                
                                {/* RECURSOS */}
                                <Link to="/recursos" className="block">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
                                    >
                                        {t.nav.resources || 'RECURSOS'}
                                    </button>
                                </Link>
                                
                                {/* GLOSARIO */}
                                <Link to="/glosario-marketing" className="block">
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
                                    >
                                        {t.nav.glossary || 'GLOSARIO'}
                                    </button>
                                </Link>
                                
                                {/* CONTACT ME */}
                                <button
                                    onClick={handleContactClick}
                                    className="block w-full text-left px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors font-medium rounded-lg"
                                >
                                    {t.nav.contactMe}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Main content - Aquí es donde ocurre la magia */}
            <main className="relative z-10 pt-24">
                {/* Usamos children O Outlet para asegurarnos que se vea el contenido */}
                {children || <Outlet />}
            </main>

            {/* Footer */}
            <footer className="bg-zinc-950 border-t border-zinc-800/50 text-white py-8 md:py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                                Jerónimo<span className="text-emerald-400">.</span>
                            </p>
                            <p className="text-zinc-400 text-xs md:text-sm">
                                Digital Business & UX Professional
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 md:gap-6">
                            <button
                                onClick={() => handleNavClick({ type: 'scroll', href: '#about' })}
                                className="text-xs md:text-sm text-zinc-400 hover:text-emerald-400 transition-colors py-3 px-4 min-w-[44px] min-h-[44px]"
                            >
                                {t.nav.aboutMe}
                            </button>
                            <Link to="/projects">
                                <button
                                    className="text-xs md:text-sm text-zinc-400 hover:text-emerald-400 transition-colors py-3 px-4 min-w-[44px] min-h-[44px]"
                                >
                                    {t.nav.projects}
                                </button>
                            </Link>
                            <Link to="/herramientas">
                                <button
                                    className="text-xs md:text-sm text-zinc-400 hover:text-emerald-400 transition-colors py-3 px-4 min-w-[44px] min-h-[44px]"
                                >
                                    {t.nav.tools || 'HERRAMIENTAS'}
                                </button>
                            </Link>
                            <Link to="/recursos">
                                <button
                                    className="text-xs md:text-sm text-zinc-400 hover:text-emerald-400 transition-colors py-3 px-4 min-w-[44px] min-h-[44px]"
                                >
                                    {t.nav.resources || 'RECURSOS'}
                                </button>
                            </Link>
                            <button
                                onClick={handleContactClick}
                                className="text-xs md:text-sm text-zinc-400 hover:text-emerald-400 transition-colors py-3 px-4 min-w-[44px] min-h-[44px]"
                            >
                                {t.nav.contactMe}
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-zinc-800/50 mt-6 md:mt-10 pt-4 md:pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
                            <p className="text-zinc-400 text-xs md:text-sm">
                                © {new Date().getFullYear()} Jerónimo Pellicer. {t.footer.copyright}
                            </p>
                            <Link 
                                to="/books"
                                className="text-xs md:text-sm text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group py-3 px-4 min-w-[44px] min-h-[44px]"
                            >
                                <span className="font-medium">{t.footer.booksRecommend}</span>
                                <svg 
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function Layout({ children, currentPageName }) {
    return (
        <LanguageProvider>
            <LayoutContent currentPageName={currentPageName}>{children}</LayoutContent>
        </LanguageProvider>
    );
}