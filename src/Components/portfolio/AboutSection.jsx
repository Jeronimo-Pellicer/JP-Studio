import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import DecryptedText from './DecryptedText';

const AboutSection = React.memo(() => {
    const { t, locale } = useLanguage();
    const isEnglish = locale === 'en';

    const content = isEnglish
        ? {
              sectionTitle: 'Data-Driven Customer Experience',
              line1Before: 'Your ',
              line1Bold: 'best',
              line1After: 'marketing',
              line2: 'is a great',
              line3: 'experience',
              lead: 'Experiences that turn your users into brand ambassadors.',
              body:
                  'I design and develop data-driven user experiences that transform how businesses connect with their audiences. I create scalable solutions that:',
              bullets: [
                  'Improve engagement.',
                  'Optimize performance.',
                  'Drive measurable growth.',
              ],
              guidesCta: 'Explore my guides for $0',
              oldPrice: '$2.99',
              contactCta: 'Contact me',
              videoCaption:
                  'My work is grounded in analytics, strategic thinking, and a deep understanding of user behavior, helping brands grow with purpose, precision, and long-term impact.',
          }
        : {
              sectionTitle: 'Experiencia del Cliente Basada en Datos',
              line1Before: 'Tu ',
              line1Bold: 'mejor',
              line1After: 'marketing',
              line2: 'Es una buena',
              line3: 'experiencia',
              lead: 'Experiencias que convierten a tus usuarios en embajadores de marca.',
              body:
                  'Dise\u00f1o y desarrollo experiencias de usuario basadas en datos que transforman c\u00f3mo las empresas se conectan con sus audiencias. Creo soluciones escalables que:',
              bullets: [
                  'Mejoran el engagement.',
                  'Optimizan el rendimiento.',
                  'Impulsan el crecimiento medible.',
              ],
              guidesCta: 'Explora mis gu\u00edas por $0',
              oldPrice: '$2,99',
              contactCta: 'Cont\u00e1ctame',
              videoCaption:
                  'Mi trabajo se fundamenta en anal\u00edtica, pensamiento estrat\u00e9gico y una comprensi\u00f3n profunda del comportamiento del usuario, ayudando a las marcas a crecer con prop\u00f3sito, precisi\u00f3n e impacto a largo plazo.',
          };

    const scrollToContact = (event) => {
        event.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const trustCards = [
        {
            id: 'trust1',
            title:
                t.about?.trust1?.title ||
                (isEnglish
                    ? 'Academic Excellence and Leadership in Global Initiatives'
                    : 'Excelencia acad\u00e9mica y liderazgo en iniciativas globales'),
            description:
                t.about?.trust1?.description ||
                (isEnglish
                    ? "Bachelor's in Internet Administration at UEAN, with a GPA of +8.66. Leading a university International Finance Project and Green Bonds integration in Argentina, with projection to several congresses."
                    : 'Licenciatura en Administraci\u00f3n en Internet en UEAN, con promedio de +8,66. Liderando un proyecto universitario de Finanzas Internacionales e inserci\u00f3n de Green Bonds en Argentina, con proyecci\u00f3n a varios congresos.'),
            icon: (
                <svg className="about-trust-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            id: 'trust3',
            title:
                t.about?.trust3?.title ||
                (isEnglish
                    ? 'Cutting-Edge Innovation Applied to Your Business'
                    : 'Innovaci\u00f3n de vanguardia aplicada a tu negocio'),
            description:
                t.about?.trust3?.description ||
                (isEnglish
                    ? 'I continuously train in new technologies, artificial intelligence, and digital tools, with a focus on practical application for process improvement and strategic analysis.'
                    : 'Me capacito de manera permanente en nuevas tecnolog\u00edas, inteligencia artificial y herramientas digitales, con foco en su aplicaci\u00f3n pr\u00e1ctica para mejorar procesos y an\u00e1lisis estrat\u00e9gico.'),
            icon: (
                <svg className="about-trust-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            id: 'trust2',
            title:
                t.about?.trust2?.title ||
                (isEnglish ? 'Web positioning that converts' : 'Posicionamiento web que convierte'),
            description:
                t.about?.trust2?.description ||
                (isEnglish
                    ? 'I combine technical SEO, content optimization, and strategic data analysis to drive visibility, attract quality traffic, and convert visits into real customers.'
                    : 'Combino SEO t\u00e9cnico, optimizaci\u00f3n de contenido y an\u00e1lisis estrat\u00e9gico de datos para generar visibilidad, atraer tr\u00e1fico de calidad y convertir visitas en clientes reales.'),
            icon: (
                <svg className="about-trust-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    const trustExtraCard = {
        title:
            t.about?.trust4?.title ||
            (isEnglish
                ? 'Professional Resilience and Measurable Results'
                : 'Resiliencia profesional y resultados medibles'),
        description:
            t.about?.trust4?.description ||
            (isEnglish
                ? 'I adapt quickly to dynamic environments with clear goals and measurable objectives, focusing on data analysis, process optimization, and digital growth.'
                : 'Me adapto f\u00e1cilmente a entornos din\u00e1micos con metas claras y objetivos precisos, enfoc\u00e1ndome en an\u00e1lisis de datos, optimizaci\u00f3n de procesos y crecimiento digital.'),
    };

    return (
        <section id="about" className="relative pt-8 md:pt-10 pb-6 md:pb-10">
            <div className="container mx-auto px-6">
                <div className="about-customer-experience-panel">
                    <div className="about-customer-experience-header">
                        <h2 className="about-customer-experience-title">{content.sectionTitle}</h2>
                        <div className="about-customer-experience-underline" />
                    </div>

                    <div className="about-customer-experience-grid">
                        <div className="about-customer-experience-copy">
                            <h3 className="about-customer-experience-big-title">
                                <span>
                                    {content.line1Before}
                                    <strong className="about-customer-experience-bold-word">
                                        {content.line1Bold}
                                        <span className="about-customer-experience-star" aria-hidden="true">
                                            {'\u2726'}
                                        </span>
                                    </strong>{' '}
                                    <span className="about-customer-experience-marketing-word">{content.line1After}</span>
                                </span>
                                <span>{content.line2}</span>
                                <span>{content.line3}</span>
                            </h3>

                            <p className="about-customer-experience-lead">{content.lead}</p>
                            <p className="about-customer-experience-body">{content.body}</p>

                            <ul className="about-customer-experience-bullets" aria-label={isEnglish ? 'Benefits' : 'Beneficios'}>
                                {content.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>

                            <div className="about-customer-experience-actions">
                                <Link to="/recursos?filter=guide" className="about-guides-cta">
                                    <span>{content.guidesCta}</span>
                                    <s>{content.oldPrice}</s>
                                </Link>
                                <button type="button" onClick={scrollToContact} className="about-contact-cta">
                                    <span className="about-contact-cta-icon" aria-hidden="true">
                                        {'\u2709'}
                                    </span>
                                    <span>{content.contactCta}</span>
                                </button>
                            </div>
                        </div>

                        <div className="about-customer-experience-media">
                            <div className="about-customer-experience-video-shell">
                                <video
                                    src="/about-marketing-loop.mp4"
                                    className="about-customer-experience-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                />
                            </div>
                            <p className="about-customer-experience-video-caption">{content.videoCaption}</p>
                        </div>
                    </div>

                    <motion.div
                        className="about-trust-divider"
                        initial={{ opacity: 0, scaleX: 0.3 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true, amount: 0.45 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <h4 className="about-trust-heading">
                        <DecryptedText
                            text={isEnglish ? 'Why trust me?' : '\u00bfPor qu\u00e9 confiar en m\u00ed?'}
                            speed={42}
                            maxIterations={12}
                            sequential={true}
                            revealDirection="start"
                            animateOn="view"
                            className="text-white"
                            encryptedClassName="text-emerald-400/60"
                        />
                    </h4>

                    <div className="about-trust-grid">
                        {trustCards.map((card, index) => (
                            <motion.article
                                key={card.id}
                                className="about-trust-card"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.42, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="about-trust-icon">{card.icon}</div>
                                <div>
                                    <h5 className="about-trust-card-title">{card.title}</h5>
                                    <p className="about-trust-card-description">{card.description}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <motion.article
                        className="about-trust-card about-trust-card-wide"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.42, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="about-trust-icon">
                            <svg className="about-trust-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h5 className="about-trust-card-title">{trustExtraCard.title}</h5>
                            <p className="about-trust-card-description">{trustExtraCard.description}</p>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
