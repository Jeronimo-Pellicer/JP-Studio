import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const techStack = [
    { name: 'Power BI', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/e5c3b36f9_Microsoft-Power-BI-Logo.png', category: 'Data Viz' },
    { name: 'Google Sheets', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/83a9eaacb_Google_Sheets_2020_Logosvg.png', category: 'Advanced/Scripting' },
    { name: 'MySQL', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/364cf34d1_ECX-1909_Hero_MySQL_600x4002x-1.png', category: 'Database' },
    { name: 'Python', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/90f86dd10_Python-logo-notextsvg.png', category: 'Analysis' },
    { name: 'Figma', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/8cf991ead_figma-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png', category: 'UI Design' },
    { name: 'Adobe Photoshop', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/68a664dee_adobe-photoshop-logo-transparent-background-free-png.png', category: 'Creative' },
    { name: 'Adobe Illustrator', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/c9878fa4d_Screenshot_2026-01-02_104533-removebg-preview.png', category: 'Vector Graphics' },
    { name: 'Google Analytics', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/86e34507d_Google-Analytics-logo-01.png', category: 'Analytics' },
    { name: 'Meta Ads', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/896d3fa21_Meta-Logo.png', category: 'Advertising' },
    { name: 'HubSpot', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/64d856549_HubSpot_Logo.png', category: 'CRM' },
    { name: 'Slack', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/e04c8e980_Slack_icon_2019svg.png', category: 'Communication' },
    { name: 'Notion', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69520339a2e433e284c0a19d/7e520ddbc_Notion_app_logo.png', category: 'Productivity' },
];

export default function TechStackMarquee() {
    const { t } = useLanguage();
    // Duplicate the array to create seamless loop
    const duplicatedStack = [...techStack, ...techStack, ...techStack];

    return (
        <section className="w-[380px] h-[178px] md:w-full md:h-auto py-2 md:py-4 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-y border-zinc-800/50 overflow-hidden min-h-[80px] md:min-h-[120px]">
            <motion.div 
                className="mb-1 md:mb-2 text-center px-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2 
                    className="text-[4px] md:text-[5px] font-semibold text-zinc-500 uppercase tracking-wide"
                    whileHover={{ scale: 1.05, color: '#10b981' }}
                    transition={{ duration: 0.3 }}
                >
                    {t.marquee.toolsTechnologies}
                </motion.h2>
            </motion.div>
            <div className="relative overflow-hidden">
                <motion.div
                    className="flex gap-0.5 md:gap-1"
                    animate={{
                        x: [0, -(techStack.length * (72 + 10))],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedStack.map((tech, index) => (
                        <motion.div
                            key={`${tech.name}-${index}`}
                            className="flex-shrink-0 w-20 md:w-28 flex flex-col items-center justify-center gap-0 cursor-pointer group relative"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-sm bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:border-emerald-400/50 group-hover:bg-zinc-800 transition-all duration-300 p-0 md:p-0.5 overflow-visible">
                                <picture>
                                    <source srcSet={tech.logo.replace('.png', '.webp')} type="image/webp" />
                                    <source srcSet={tech.logo.replace('.png', '.avif')} type="image/avif" />
                                    <img 
                                        src={tech.logo} 
                                        alt={tech.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                                    />
                                </picture>
                            </div>
                            <div className="text-center w-full">
                                <p className="text-[4px] md:text-[5px] font-medium text-white whitespace-nowrap">{tech.name}</p>
                                <p className="hidden md:block text-[3px] text-zinc-500 whitespace-nowrap">{tech.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
