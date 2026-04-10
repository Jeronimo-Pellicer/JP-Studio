import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, X, Target, TrendingUp, Users, BarChart3, Megaphone, Settings, Smartphone, MonitorSpeaker } from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import SEO from '@/Components/shared/SEO';
import { getProjectDetails } from '../data/projectDetails';

// Section icon mapping
const sectionIcons = {
    'intro': Target,
    'diagnostico': BarChart3,
    'buyer-persona': Users,
    'objetivos': TrendingUp,
    'campanas': Megaphone,
    'control': Settings,
    'ads-meta-premium': Smartphone,
    'ads-meta-captacion': Smartphone,
    'ads-google': MonitorSpeaker,
    'meta-placements': Smartphone,
    'meta-architecture': Users,
    'meta-messaging': Megaphone,
};

// Lightbox component for full-screen image viewing
function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            style={{ zIndex: 99999, fontFamily: "'Anonymous Pro', monospace" }}
            onClick={onClose}
        >
            {/* Close button */}
            <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="absolute top-6 right-6 z-50 p-4 bg-white/15 hover:bg-white/30 rounded-full transition-colors"
            >
                <X className="w-7 h-7 text-white" />
            </button>

            {/* Navigation arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-4 md:left-8 z-50 p-4 bg-white/15 hover:bg-white/30 rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-7 h-7 text-white" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-4 md:right-8 z-50 p-4 bg-white/15 hover:bg-white/30 rounded-full transition-colors"
                    >
                        <ChevronRight className="w-7 h-7 text-white" />
                    </button>
                </>
            )}

            {/* Image */}
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-[90vw] max-h-[85vh] flex flex-col items-center pt-16"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={images[currentIndex]?.src}
                    alt={images[currentIndex]?.caption || ''}
                    className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
                />
                {images[currentIndex]?.caption && (
                    <p className="mt-4 text-zinc-300 text-sm text-center max-w-2xl">
                        {images[currentIndex].caption}
                    </p>
                )}
                <p className="mt-2 text-zinc-500 text-xs">
                    {currentIndex + 1} / {images.length}
                </p>
            </motion.div>
        </motion.div>,
        document.body
    );
}

// Image gallery grid for each section
function ImageGallery({ images, sectionIndex }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const handlePrev = useCallback(() => {
        setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    if (!images || images.length === 0) return null;

    const gridClass = images.length === 1
        ? 'grid-cols-1'
        : images.length === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : images.length === 3
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2';

    return (
        <>
            <div className={`grid ${gridClass} gap-4 mt-8`}>
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50 cursor-pointer hover:border-emerald-500/30 transition-all duration-300"
                        onClick={() => openLightbox(i)}
                    >
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.caption || `Slide ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm font-medium">{img.caption}</p>
                        </div>
                        {/* Always-visible caption on mobile */}
                        {img.caption && (
                            <div className="p-3 md:hidden">
                                <p className="text-zinc-400 text-xs">{img.caption}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <ImageLightbox
                        images={images}
                        currentIndex={lightboxIndex}
                        onClose={() => setLightboxOpen(false)}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

// Content section component 
function ProjectSection({ section, index }) {
    const IconComponent = sectionIcons[section.id] || Target;

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
            id={section.id}
        >
            <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* Section header */}
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <h2
                            className="text-2xl md:text-3xl font-bold text-white mb-1"
                            style={{ fontFamily: "'Anonymous Pro', monospace", letterSpacing: '-0.02em' }}
                        >
                            {section.title}
                        </h2>
                        {section.subtitle && (
                            <p className="text-emerald-400/80 text-sm font-medium">{section.subtitle}</p>
                        )}
                    </div>
                </div>

                {/* Section content */}
                <div className="text-zinc-300 leading-relaxed whitespace-pre-line text-[15px] md:text-base"
                     style={{ fontFamily: "'Anonymous Pro', monospace" }}
                >
                    {section.content}
                </div>

                {/* Image gallery */}
                <ImageGallery images={section.images} sectionIndex={index} />
            </div>
        </motion.section>
    );
}

function ProjectDetailContent() {
    const { projectId } = useParams();
    const { language } = useLanguage();

    const details = getProjectDetails(projectId, language);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [projectId]);

    if (!details) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center">
                <div className="text-center px-6">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        {language === 'en' ? 'Project Not Found' : 'Proyecto no encontrado'}
                    </h1>
                    <p className="text-zinc-400 mb-8 text-lg">
                        {language === 'en'
                            ? 'The project you are looking for does not have detailed content yet.'
                            : 'El proyecto que buscás todavía no tiene contenido detallado.'}
                    </p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {language === 'en' ? 'Back to Projects' : 'Volver a Proyectos'}
                    </Link>
                </div>
            </div>
        );
    }

    const heroTitle = details.title || details.client;
    const heroHeadline = details.headline || details.context;

    return (
        <>
        <SEO
            title={`${heroTitle}${heroHeadline ? ` - ${heroHeadline}` : ''} | JP Studio`}
            description={typeof details.overview === 'string' ? details.overview.substring(0, 160) : ''}
            url={`/projects/${projectId}`}
        />
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black relative overflow-hidden">
            {/* Animated background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-0 md:opacity-100">
                <motion.div
                    animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative">
                {/* Hero image */}
                <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
                    <img
                        src={details.heroImage}
                        alt={heroTitle}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 to-transparent" />
                </div>

                {/* Hero content overlay */}
                <div className="absolute bottom-0 left-0 right-0 pb-12 pt-32">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-6 transition-colors text-sm font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                {language === 'en' ? 'Back to Projects' : 'Volver a Proyectos'}
                            </Link>

                            <h1
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[0.95]"
                                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.04em' }}
                            >
                                {heroTitle}
                                {heroHeadline && (
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                        {heroHeadline}
                                    </span>
                                )}
                            </h1>

                            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8"
                               style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                            >
                                {details.overview}
                            </p>

                            {/* Meta info pills */}
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold rounded-xl">
                                    {details.role}
                                </span>
                                <span className="px-4 py-2 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-sm font-medium rounded-xl">
                                    {details.client}
                                </span>
                                <span className="px-4 py-2 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-sm font-medium rounded-xl">
                                    {details.date}
                                </span>
                                <span className="px-4 py-2 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-sm font-medium rounded-xl">
                                    {details.context}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            {details.stats && (
                <section className="relative z-10 -mt-1">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {details.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/50 rounded-2xl p-6 text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-1"
                                         style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.03em' }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-zinc-400 text-xs md:text-sm font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Table of Contents */}
            <section className="relative z-10 py-12">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-8"
                        >
                            <h3 className="text-lg font-bold text-white mb-4"
                                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                            >
                                {language === 'en' ? 'Table of Contents' : 'Contenido del Proyecto'}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-2">
                                {details.sections.map((section, i) => {
                                    const Icon = sectionIcons[section.id] || Target;
                                    return (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800/50 transition-colors group"
                                        >
                                            <Icon className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                                            <span className="text-zinc-400 group-hover:text-white text-sm transition-colors">
                                                {section.title}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="relative z-10 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto space-y-8">
                        {details.sections.map((section, index) => (
                            <ProjectSection key={section.id} section={section} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative z-10 pb-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-3xl p-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4"
                                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}
                            >
                                {language === 'en' ? 'Interested in working together?' : '¿Te interesa trabajar conmigo?'}
                            </h3>
                            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                                {language === 'en'
                                    ? 'If you liked this project and want to discuss how I can help your brand, get in touch.'
                                    : 'Si te gustó este proyecto y querés conocer cómo puedo ayudar a tu marca, escribime.'}
                            </p>
                            <Link
                                to="/#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold rounded-2xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/25"
                            >
                                <ExternalLink className="w-5 h-5" />
                                {language === 'en' ? 'Contact Me' : 'Contactame'}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
        </>
    );
}

export default function ProjectDetail() {
    return (
        <ProjectDetailContent />
    );
}
