import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectsSection() {
    const { t, language } = useLanguage();
    
    const featuredProjects = [
        {
            title: t.projects.project2.title,
            description: t.projects.project2.description,
            image: '/topper/topper-0001.webp',
            tags: ['Marketing Strategy', 'Mobile Growth', 'Paid Media'],
            detailSlug: 'topper-plan-mobile-first',
        },
        {
            title: t.projects.project1.title,
            description: t.projects.project1.description,
            image: '/kiddo/Franchising Kiddo _ Comercial_page-0001.webp',
            tags: ['Business Strategy', 'Franchising', 'Commercial'],
            detailSlug: 'kiddo-franquicias',
        },
        {
            title: t.projects.project3.title,
            description: t.projects.project3.description,
            image: '/easytrack/Presentación Informe Paid Media_page-0001.webp',
            tags: ['Fintech', 'Data Analysis', 'Performance Marketing'],
            detailSlug: 'easytrack-reporte-financiero',
        }
    ];

    return (
        <section id="featured-projects" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background effects (Optimized for performance) */}
            <div className="absolute inset-0 pointer-events-none opacity-0 md:opacity-100">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl transform-gpu" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl transform-gpu" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            className="inline-block mb-3"
                        >
                            <Sparkles className="w-10 h-10 text-emerald-400 mx-auto" />
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-teal-400 mt-4 mb-6 tracking-tight">
                            {language === 'en' ? 'Featured Case Studies' : 'Casos de Estudio Destacados'}
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-sans">
                            {language === 'en' 
                                ? 'A selection of projects that showcase my framework for converting complex business challenges into data-driven digital solutions.' 
                                : 'Una selección de proyectos que muestran mi marco de trabajo para convertir desafíos comerciales complejos en soluciones digitales rentables.'}
                        </p>
                        
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mt-8" 
                        />
                    </motion.div>

                    {/* Projects grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.detailSlug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="group relative h-full"
                            >
                                <Link to={`/projects/${project.detailSlug}`} className="block h-full">
                                    <div className="relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 group-hover:border-emerald-500/40 rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl group-hover:shadow-emerald-500/10 md:group-hover:-translate-y-1 transform-gpu">
                                        
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden bg-zinc-800/50">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105 will-change-transform"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                                            
                                            {/* Hover CTA Indicator */}
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                <span className="px-3 py-1.5 bg-emerald-500 text-black text-xs font-bold rounded-lg shadow-lg flex items-center gap-1">
                                                    {language === 'en' ? 'Read Case' : 'Leer Caso'} <ArrowRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight font-sans">
                                                {project.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3 font-sans">
                                                {project.description}
                                            </p>
                                            
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 bg-zinc-800/50 text-zinc-300 md:group-hover:text-emerald-300 md:group-hover:border-emerald-500/30 md:group-hover:bg-emerald-500/10 text-xs font-medium rounded-md border border-zinc-700/50 transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-16 text-center"
                    >
                        <Link 
                            to="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-white rounded-xl transition-all duration-300 group font-semibold shadow-lg hover:shadow-emerald-500/20 active:scale-95 transform-gpu"
                        >
                            {language === 'en' ? 'Explore All Projects' : 'Explorar Todos los Proyectos'}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
