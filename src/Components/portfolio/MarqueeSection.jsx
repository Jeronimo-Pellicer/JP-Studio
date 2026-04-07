import React from 'react';
import { useLanguage } from './LanguageContext';

// Array de tecnologías con nuevos logos SVG
const techStack = [
    { name: 'React', logo: '/icons/react-logo-svgrepo-com.svg', category: 'Frontend' },
    { name: 'JavaScript', logo: '/icons/icons8-javascript.svg', category: 'Programming' },
    { name: 'Vite', logo: '/icons/icons8-vite.svg', category: 'Build Tool' },
    { name: 'Power BI', logo: '/icons/icons8-power-bi-2021.svg', category: 'Data Viz' },
    { name: 'Figma', logo: '/icons/icons8-figma.svg', category: 'UI Design' },
    { name: 'Adobe Photoshop', logo: '/icons/icons8-adobe.svg', category: 'Creative' },
    { name: 'Adobe Illustrator', logo: '/icons/icons8-adobe (1).svg', category: 'Vector Graphics' },
    { name: 'Google Analytics', logo: '/icons/ic_analytics.svg', category: 'Analytics' },
    { name: 'HubSpot', logo: '/icons/hubspot-seeklogo.svg', category: 'CRM' },
    { name: 'MySQL', logo: '/icons/0adb09b6580d9c13a6fd4af026649940.svg', category: 'Database' },
];

export default function MarqueeSection() {
    const { t } = useLanguage();
    // Duplicate the array multiple times to ensure seamless infinite loop
    const duplicatedStack = [...techStack, ...techStack, ...techStack, ...techStack];

    return (
        <section className="py-3 md:py-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-y border-zinc-800/50 overflow-hidden min-h-[60px] md:min-h-[100px]" style={{ contain: 'layout paint' }}>
            <div className="mb-2 md:mb-3 text-center px-4">
                <h2 className="text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-wide hover:text-emerald-400 transition-colors duration-300 cursor-default">
                    {t.marquee.toolsTechnologies}
                </h2>
            </div>
            <div className="relative overflow-hidden">
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-${(techStack.length * 40) + (techStack.length * 24)}px)); }
                    }
                    @media (max-width: 768px) {
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(calc(-${(techStack.length * 40) + (techStack.length * 16)}px)); }
                        }
                    }
                    .marquee-container {
                        display: flex;
                        gap: 24px;
                        animation: marquee 30s linear infinite;
                        will-change: transform;
                    }
                    @media (max-width: 768px) {
                        .marquee-container {
                            gap: 16px;
                        }
                    }
                `}</style>
                <div className="marquee-container">
                    {duplicatedStack.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="flex-shrink-0 w-10 h-10 flex items-center justify-center cursor-pointer group"
                        >
                            <img 
                                src={tech.logo} 
                                alt={tech.name}
                                width="40"
                                height="40"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                                style={{ aspectRatio: '1/1' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
