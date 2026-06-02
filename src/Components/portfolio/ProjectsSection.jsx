import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

export default function ProjectsSection() {
    const { t, language } = useLanguage();

    const featuredProjects = [
        {
            title: t.projects.project3.title,
            description: t.projects.project3.description,
            image: '/easytrack/Presentaci%C3%B3n%20Informe%20Paid%20Media_page-0001.webp',
            tags: ['Paid Media', 'Fintech', 'Performance Marketing'],
            detailSlug: 'easytrack-reporte-financiero',
        },
        {
            title: t.projects.project2.title,
            description: t.projects.project2.description,
            image: '/topper/topper-0001.webp',
            tags: ['Marketing Strategy', 'Paid Media', 'Brand Growth'],
            detailSlug: 'topper-plan-mobile-first',
        },
        {
            title: t.projects.project5.title,
            description: t.projects.project5.description,
            image: '/stiberman/Digital Marketing Brief (3)_page-0001.webp',
            tags: ['SEO/SEM', 'Legal Marketing', 'Lead Generation'],
            detailSlug: 'stiberman-law-seo-sem',
        }
    ];

    const filterItems = [
        { key: 'strategy', label: t.projects.filter.strategy, count: 4 },
        { key: 'marketing', label: t.projects.filter.marketing, count: 8 },
        { key: 'analytics', label: t.projects.filter.analytics, count: 3 },
        { key: 'design', label: t.projects.filter.design, count: 6 },
        { key: 'development', label: language === 'en' ? 'Development' : 'Desarrollo', count: 2 },
    ];

    return (
        <section id="featured-projects" className="projects-section">
            <div className="projects-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="projects-header"
                >
                    <p className="projects-kicker">
                        / {language === 'en' ? 'My Work' : 'Mi Trabajo'}
                    </p>
                    <h2 className="projects-title">
                        {language === 'en' ? 'Projects' : 'Proyectos'}
                    </h2>
                    <p className="projects-description">
                        {t.projects.description}
                    </p>
                </motion.div>

                <div className="projects-filters">
                    {filterItems.map((filter) => (
                        <div className="filter-item" key={filter.key}>
                            <div className="filter-left">
                                <span className="filter-symbol">+</span>
                                <span className="filter-name">{filter.label}</span>
                            </div>
                            <span className="filter-count">
                                {String(filter.count).padStart(2, '0')}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="projects-viewall">
                    <Link to="/projects" className="projects-viewall-link">
                        {t.projects.viewAll} <span className="projects-viewall-icon">↗</span>
                    </Link>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.detailSlug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: 'easeOut'
                            }}
                            className="project-card"
                        >
                            <Link
                                to={`/projects/${project.detailSlug}`}
                                className="project-card-link"
                                aria-label={`${project.title} — ${project.description}`}
                            >
                                <div className="project-media">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="project-thumb"
                                    />
                                    <div className="project-overlay">
                                        <div className="project-meta">
                                            <span className="project-meta-label">
                                                {project.tags.slice(0, 2).join(', ').toUpperCase()}
                                            </span>
                                            <span className="project-meta-year">2024</span>
                                        </div>
                                        <div className="project-title-wrapper">
                                            <h3 className="project-title">{project.title}</h3>
                                        </div>
                                        <span className="project-arrow" aria-hidden="true">↗</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
