import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../Components/shared/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/Components/portfolio/LanguageContext';
import { createProjectSlug } from '../utils/projectUtils';

function Projects() {
    const { t, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');

    const allProjects = [
        {
            title: t.projects.project3.title,
            description: t.projects.project3.description,
            image: '/easytrack/Presentación Informe Paid Media_page-0001.webp',
            tags: ['Paid Media', 'Fintech', 'Performance Marketing'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
            detailSlug: 'easytrack-reporte-financiero'
        },
        {
            title: t.projects.project2.title,
            description: t.projects.project2.description,
            image: '/topper/topper-0001.webp',
            tags: ['Marketing Strategy', 'Paid Media', 'Mobile-First'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
            detailSlug: 'topper-plan-mobile-first',
        },
        {
            title: t.projects.project5.title,
            description: t.projects.project5.description,
            image: '/stiberman/Digital Marketing Brief (3)_page-0001.webp',
            tags: ['SEO/SEM', 'Legal Marketing', 'Lead Generation'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
            detailSlug: 'stiberman-law-seo-sem',
        },
        {
            title: t.projects.project6.title,
            description: t.projects.project6.description,
            image: '/pinturerias-coco/1.webp',
            tags: ['Digital Transformation', 'Omnichannel', 'E-Commerce'],
            category: 'strategy',
            liveUrl: '#',
            githubUrl: '#',
            detailSlug: 'pinturerias-coco-transformacion-digital'
        },
        {
            title: t.projects.project4.title,
            description: t.projects.project4.description,
            image: '/licki/KPI Monthly Presentation_page-0001.webp',
            tags: ['Data Visualization', 'Executive Reporting', 'KPIs'],
            category: 'analytics',
            liveUrl: '#',
            githubUrl: '#',
            detailSlug: 'lisicki-litvin-metricas',
        },
        {
            title: t.projects.project1.title,
            description: t.projects.project1.description,
            image: '/kiddo/Franchising Kiddo _ Comercial_page-0001.webp',
            tags: ['Business Strategy', 'Franchising', 'Expansion'],
            category: 'strategy',
            liveUrl: '#',
            githubUrl: '#',
            detailSlug: 'kiddo-franquicias',
        },

        {
            title: 'E-Commerce Platform Redesign',
            description: 'Complete UX/UI redesign and conversion optimization for an online retail platform, increasing conversion rates by 40%.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
            tags: ['UX Design', 'Conversion Optimization', 'E-Commerce'],
            category: 'design',
            liveUrl: '#',
            githubUrl: '#',
            beta: true,
        },
        {
            title: 'Customer Journey Mapping',
            description: 'Comprehensive customer journey analysis and touchpoint optimization for B2B SaaS company, reducing churn by 25%.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
            tags: ['CX Strategy', 'Journey Mapping', 'B2B'],
            category: 'strategy',
            liveUrl: '#',
            githubUrl: '#',
            beta: true,
        },
        {
            title: 'Brand Identity System',
            description: 'Complete brand identity development including logo, color palette, typography, and brand guidelines for startup.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
            tags: ['Branding', 'Visual Identity', 'Design System'],
            category: 'design',
            liveUrl: '#',
            githubUrl: '#',
            beta: true,
        },
        {
            title: 'Marketing Automation Setup',
            description: 'Implementation of marketing automation workflows and email campaigns, increasing engagement by 60%.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
            tags: ['Marketing Automation', 'Email Marketing', 'CRM'],
            category: 'marketing',
            liveUrl: '#',
            githubUrl: '#',
            beta: true,
        },
        {
            title: 'Data-Driven Growth Strategy',
            description: 'Development of growth strategy based on data analysis, identifying key opportunities and optimizing user acquisition channels.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
            tags: ['Growth Strategy', 'Data Analysis', 'User Acquisition'],
            category: 'strategy',
            liveUrl: '#',
            githubUrl: '#',
            beta: true,
        },
    ];

    const filters = [
        { key: 'all', label: t.projects.filter.all },
        { key: 'strategy', label: t.projects.filter.strategy },
        { key: 'marketing', label: t.projects.filter.marketing },
        { key: 'analytics', label: t.projects.filter.analytics },
        { key: 'design', label: t.projects.filter.design },
    ];

    const categoryCounts = allProjects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
    }, {});

    const filterItems = filters.map((filter) => ({
        ...filter,
        count: filter.key === 'all' ? allProjects.length : (categoryCounts[filter.key] || 0)
    }));

    const filteredProjects = activeFilter === 'all' 
        ? allProjects 
        : allProjects.filter(project => project.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="projects-section">
            <SEO 
                title="Proyectos y Casos de Éxito | Jerónimo Pellicer"
                description="Proyectos de diseño UX, desarrollo frontend y estrategias de marketing digital con resultados reales para clientes en Argentina."
                url="/projects"
            />
            <div className="projects-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="projects-header"
                >
                    <p className="projects-kicker">
                        / {language === 'en' ? 'My Work' : 'Mi Trabajo'}
                    </p>
                    <h1 className="projects-title">
                        {language === 'en' ? 'Projects' : 'Proyectos'}
                    </h1>
                    <p className="projects-description">
                        {t.projects.description}
                    </p>
                </motion.div>

                <div className="projects-filters">
                    {filterItems.map((filter) => (
                        <button
                            key={filter.key}
                            type="button"
                            onClick={() => setActiveFilter(filter.key)}
                            className={`filter-item${activeFilter === filter.key ? ' is-active' : ''}`}
                        >
                            <span className="filter-left">
                                <span className="filter-symbol">+</span>
                                <span className="filter-name">{filter.label}</span>
                            </span>
                            <span className="filter-count">
                                {String(filter.count).padStart(2, '0')}
                            </span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="projects-grid"
                    >
                        {filteredProjects.map((project, index) => {
                            const projectSlug = createProjectSlug(project.title);
                            const hasDetail = !!project.detailSlug;
                            const cardSlug = project.detailSlug || projectSlug;

                            const CardWrapper = ({ children }) => hasDetail ? (
                                <Link to={`/projects/${cardSlug}`} className="project-card-link">{children}</Link>
                            ) : (
                                <div className="project-card-link" aria-disabled="true">{children}</div>
                            );

                            return (
                                <motion.div
                                    key={project.title}
                                    variants={itemVariants}
                                    className={`project-card${hasDetail ? '' : ' is-disabled'}`}
                                >
                                    <CardWrapper>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-thumb"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="project-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-text">{project.description}</p>
                                            <div className="project-tags">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="project-tag">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardWrapper>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="projects-empty"
                    >
                        {language === 'en'
                            ? 'No projects found in this category.'
                            : 'No hay proyectos en esta categoria.'}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Projects;
