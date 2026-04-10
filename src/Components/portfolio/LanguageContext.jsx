import React, { createContext, useContext, useState, useEffect } from 'react';
import { setCurrentLanguage } from '../../Glosario/src/data/glossaryData';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

export const translations = {
    en: {
        // Navigation
        nav: {
            aboutMe: 'ABOUT ME',
            projects: 'PROJECTS',
            contactMe: 'CONTACT ME',
            resume: 'RESUME',
            tools: 'TOOLS',
            resources: 'RESOURCES',
            glossary: 'GLOSSARY',
            resourcesMenu: {
                templates: 'Templates',
                guides: 'Guides',
                infographics: 'Infographics',
                cjmTemplate: 'CJM Template',
                fodaKit: 'Full SWOT Kit',
                contentCalendar: '2024 Content Calendar',
                npsDashboard: 'NPS Dashboard',
                contentStrategy: 'B2B Content Strategy',
                cjmGuide: 'How to create a Customer Journey Map',
                seoLocalGuide: 'Local SEO Guide',
                linkedinStrategy: 'LinkedIn Content Strategy for Professionals',
                cxMetrics: '10 Key Customer Experience Metrics',
                linkedinPostAnatomy: 'Anatomy of a Good Post on LinkedIn/Instagram',
                cxOptimization: '6-Stage Customer Service Optimization Process',
                keywordResearch: 'Keywords: How to Find and Use Them',
                landingPageElements: 'Key Elements of a Converting Landing Page',
            },
        },
        // Hero Section
        hero: {
            welcome: 'Welcome to my portfolio',
            greeting: "Hi, I'm",
            name: 'Jerónimo',
            subtitle: 'A passionate',
            role: 'Digital Business Student & Customer Experience Analyst',
            description: 'specialized in data-driven customer experience optimization and digital marketing.',
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch',
            location: 'Buenos Aires, AR (GMT-3)',
            openToWork: 'Open to Work',
            yearsExperience: 'Years of Experience',
            projectsCompleted: 'Projects Completed',
            connectWithMe: 'Connect with me',
            dropOffRate: 'Drop-off Rate',
            csat: 'Customer Satisfaction (CSAT)',
        },
        // About Section
        about: {
            title: 'About Me',
            heading: 'Data-Driven Customer Experience',
            subtitle: 'Empathetic professional focused on digital transformation',
            whyTrustMe: 'Why Trust Me?',
            trust1: {
                title: 'Academic Excellence and Leadership in Global Initiatives',
                description: 'Bachelor\'s in Internet Administration at UEAN, with a GPA of +8.66. Leading a university International Finance Project and Green Bonds integration in Argentina, with projection to several congresses.',
            },
            trust2: {
                title: 'Web positioning that converts',
                description: 'I help brands scale not only in conventional search engines, but also on AI-powered platforms. My SEO strategies include technical audits, content optimization, advanced keyword research, and building digital authority. I combine creativity with data analysis to generate visibility, attract quality traffic, and turn visits into real customers.',
            },
            trust3: {
                title: 'Cutting-Edge Innovation Applied to Your Business',
                description: 'I continuously train in new technologies, artificial intelligence, and digital tools, with a focus on their practical application for process improvement, strategic analysis, and value generation in organizations.',
            },
            trust4: {
                title: 'Professional Resilience and Measurable Results',
                description: 'I easily adapt to dynamic environments with clear goals and precise objectives. I actively seek challenges that represent opportunities for professional growth, whether through data analysis, process optimization, or digital marketing initiatives.',
            },
            paragraph1: "I'm currently studying Digital Business Administration at UEAN while working as a Customer Experience Analyst at Estudio Notarial Castro. I led the optimization of the client service system through data analysis, reducing response times and improving satisfaction in high-confidentiality critical procedures.",
            paragraph2: 'With certifications in Digital Marketing from The University of Manchester, I combine analytical skills with strategic thinking. I specialize in SEO, content marketing, social media strategies, and analytics, all focused on driving business success.',
            paragraph3: 'I thrive in dynamic environments with clear goals and precise objectives. I actively seek challenges that represent opportunities for professional growth, whether through data analysis, process optimization, or digital marketing initiatives.',
            techLabel: 'Technologies & Skills:',
            skills: {
                cleanCode: { title: 'Clean Code', description: 'Writing maintainable, scalable code with best practices' },
                design: { title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
                performance: { title: 'Performance', description: 'Optimizing for speed and seamless experiences' },
                passion: { title: 'Passion', description: 'Dedicated to continuous learning and growth' },
            },
        },
        // Projects Section
        projects: {
            title: 'My Work',
            heading: 'Featured Projects',
            description: 'A selection of projects that showcase my skills and passion for creating impactful digital solutions.',
            viewAll: 'View All Projects',
            viewDetails: 'View Details',
            filter: {
                all: 'All Projects',
                strategy: 'Strategy',
                marketing: 'Marketing',
                analytics: 'Analytics',
                design: 'Design',
            },
            project1: {
                title: 'Kiddo Franchising Strategy',
                description: 'Expansion and franchising strategy for a fast-food brand, focused on scalable formats, unit economics and international growth.',
            },
            project2: {
                title: 'Topper Integrated Marketing Plan + Paid Media',
                description: 'Comprehensive marketing plan with mobile-first paid media, buyer personas and campaign architecture for awareness, sales and retargeting.',
            },
            project3: {
                title: 'EasyTruck Paid Media & App Growth',
                description: 'Full-funnel paid media strategy & app growth execution for a fintech app, combining budget design, campaign structure, deep linking, and Premium subscription growth.',
            },
            project4: {
                title: 'Lisicki Litvin Corp Metrics',
                description: 'Executive KPI reporting system for translating financial, operational and client-service metrics into actionable decisions.',
            },
            project5: {
                title: 'Stiberman Law SEO/SEM',
                description: 'SEO and SEM strategy built to capture high-intent legal demand and close the visibility gap of a US bankruptcy law firm.',
            },
            project6: {
                title: 'Pinturerías Coco Digital Transformation',
                description: 'Full-funnel digital transformation plan for a retail chain, bridging the gap between physical stores and a robust omnichannel ecosystem.',
            },
            liveDemo: 'Live Demo',
            source: 'Source',
        },
        // Contact Section
        contact: {
            title: 'Get In Touch',
            heading: "Let's Connect",
            description: "Looking for someone to optimize your customer experience or drive your digital strategy? Let's talk about how I can help your business grow.",
            info: {
                email: 'Email',
                location: 'Location',
                locationValue: 'Buenos Aires, Argentina',
                phone: 'Phone',
            },
            social: 'Connect with me',
            available: 'Available for opportunities',
            availableText: "I'm open to new challenges in customer experience, data analysis, and digital marketing. Let's discuss how I can add value to your team.",
            form: {
                name: 'Your Name',
                namePlaceholder: 'John Doe',
                email: 'Your Email',
                emailPlaceholder: 'john@example.com',
                subject: 'Subject',
                subjectPlaceholder: 'Project Inquiry',
                message: 'Your Message',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message Sent!',
                successMessage: "Thank you for reaching out. I'll get back to you soon.",
            },
        },
        // FAQ Section
        faq: {
            title: 'Strategic Insights',
            heading: '5 Key Insights',
            description: 'Strategic perspectives on the future of customer experience and digital marketing',
            questions: [
                {
                    q: 'What is Artificial Experience (AX) and how does it transform customer experience?',
                    a: 'Artificial Experience represents the natural evolution of Customer Experience by seamlessly integrating artificial intelligence at every customer touchpoint. Unlike traditional chatbots, AX uses generative AI and machine learning to create personalized, predictive, and conversational experiences that adapt in real-time to each user\'s individual needs. This technology enables anticipating problems before they occur, offering genuinely relevant recommendations, and providing 24/7 assistance with a level of empathy and contextual understanding that was previously impossible. Companies implementing AX are seeing significant reductions in response times, increases in customer satisfaction, and greater operational efficiency, all while freeing their human teams to focus on higher strategic value interactions.'
                },
                {
                    q: 'How is Phygital Marketing integrated into an effective omnichannel strategy?',
                    a: 'Phygital marketing represents the strategic convergence between physical and digital experiences, creating an ecosystem where both worlds complement each other seamlessly. Successful implementation requires synchronizing data in real-time across all channels, allowing a customer to start their journey on social media, continue in-store with personalized assistance based on their digital history, and complete the purchase via a mobile app without losing context at any moment. Enabling technologies include smart QR codes, augmented reality for virtual product trials, beacons for location-based experiences, and unified identity management systems. The fundamental goal is to eliminate friction between channels and create a fluid experience that recognizes and values the customer regardless of which touchpoint they choose to use.'
                },
                {
                    q: 'Why is measuring Customer Effort Score (CES) crucial in 2026 and how does it differ from other metrics?',
                    a: 'Customer Effort Score has emerged as the most predictive metric of customer loyalty in the digital age, even surpassing the traditional Net Promoter Score in certain contexts. This metric specifically evaluates how much effort a customer must invest to resolve their need, complete a purchase, or receive support. Research has consistently demonstrated that customers who experience low effort have significantly higher probability of repeat purchases and brand recommendations. Effective CES measurement involves immediate post-interaction surveys, friction point analysis in the customer journey through session replay tools, and sentiment analysis in support conversations. Leading organizations are using AI to automatically identify high-effort patterns and prioritize improvements that generate the greatest impact on customer experience.'
                },
                {
                    q: 'How to implement effective Social Commerce beyond simply posting products on social media?',
                    a: 'Authentic social commerce goes far beyond creating catalogs on Instagram or Facebook. It requires building genuine communities where user-generated content, live product demonstrations, and peer-to-peer recommendations naturally drive purchase decisions. The most successful strategies integrate micro-influencers who share authentic values with the brand, implement one-click purchase functionalities directly from short videos, and use conversational AI to respond to queries in comments and direct messages instantly. The critical aspect is maintaining the social and community experience while reducing friction on the path to conversion. Brands that master social commerce are seeing that between 20% and 40% of their digital sales come directly from social platforms, without needing to drive traffic to traditional websites.'
                },
                {
                    q: 'What role does AI-powered Hyper-Personalization play in customer retention?',
                    a: 'Hyper-personalization represents the next evolutionary level beyond traditional segmentation, using artificial intelligence to create unique experiences for each individual based on real-time behavior, situational context, complete interaction history, and predictive signals. Unlike basic personalization that simply inserts a name in an email, hyper-personalization dynamically adjusts website content, product recommendations, marketing messages, dynamic pricing, and even communication tone according to psychographic profile and specific customer journey moment. Enabling technologies include customer data platforms (CDP) that unify data from multiple sources, deep learning-based recommendation engines, and experience orchestration systems that automatically activate optimal content for each interaction. Companies correctly implementing hyper-personalization are seeing conversion increases of 15% to 25% and substantial increases in customer lifetime value by making each customer feel that the experience was designed exclusively for them.'
                }
            ]
        },
        // Footer
        footer: {
            tagline: 'Optimizing customer experiences through data and strategy',
            copyright: 'enjoy this sh¡t.',
            booksRecommend: 'Books I Recommend',
        },
        // Marquee Sections
        marquee: {
            trustedBy: 'Trusted By',
            toolsTechnologies: 'Tools & Technologies',
        },
        // Books Section
        books: {
            title: 'Books I Recommend',
            description: 'A selection of books that have influenced my thinking about business, design, and personal development.',
            backToHome: 'Back to Home',
            buyOnAmazon: 'Buy on Amazon',
            opinions: {
                atomicHabits: 'A fundamental book on habit building. Clear explains clearly and practically how small changes can generate extraordinary results. The "1% better each day" methodology is transformative and applicable to any area of life.',
                thinkingSystems: 'A masterpiece on systems thinking. Meadows provides a comprehensive framework for understanding complex systems and how to intervene effectively. Essential for anyone working with organizational change, policy, or complex problems.',
                thinkingFast: 'Kahneman explores the two systems of thinking that govern our decisions. It\'s fascinating to discover how our brain makes decisions and the cognitive biases that affect us. Essential for understanding human behavior in business and design.',
                juegoVida: 'Una obra profunda sobre estrategia, toma de decisiones y pensamiento sistémico aplicado a la vida personal y profesional. Llovet ofrece insights valiosos sobre cómo navegar la complejidad del mundo moderno.',
            },
        },
        // Project Detail
        projectDetail: {
            notFound: 'Project Not Found',
            notFoundMessage: "The project you're looking for doesn't exist.",
            backToProjects: 'Back to Projects',
            overview: 'Project Overview',
            technologies: 'Technologies Used',
        },
        // Tools Page
        tools: {
            heading: 'TOOLS',
            description: 'Professional tools to optimize your digital and marketing strategies.',
            hero: {
                badge: 'Digital Marketing Suite',
                tagline: 'Professional tools for marketers seeking measurable results.',
                title: 'Digital Tools',
                subtitle: 'Four essential tools to optimize your strategy. No registration, no costs, only results.',
                cta: 'Get Started Now',
                exploreTools: 'Explore the tools',
                freeAndNoRegistration: '100% free and no registration',
                stats: {
                    tools: '4 tools',
                    uses: '∞ uses',
                    cost: '$0 cost'
                }
            },
            section: {
                badge: 'Professional Tools',
                title: 'Everything You Need to',
                titleHighlight: 'Scale Your Marketing',
                subtitle: 'Four essential tools designed for marketers seeking results. No registration, no hidden costs, only real value for your business.',
            },
            roi: {
                title: 'ROI Calculator',
                subtitle: 'Return on Investment for Digital Campaigns',
                description: 'Accurately calculate the return on investment of your advertising campaigns. Get key metrics like CPA, conversion rate and future projections to optimize your marketing budget.',
                features: {
                    realTime: 'Real-time ROI calculation',
                    cpa: 'CPA and conversion rate',
                    projections: 'Projections at 3, 6 and 12 months',
                    detailedMetrics: 'Detailed campaign metrics'
                },
                benefits: {
                    title: 'Key Benefits',
                    items: [
                        'Identify profitable vs non-profitable campaigns',
                        'Optimize your budget distribution',
                        'Make data-driven decisions',
                        'Present clear results to stakeholders'
                    ]
                },
                cta: 'Use Tool',
                stats: {
                    users: '10K+ users',
                    time: '~2 min'
                },
                badge: '✓ 100% Free'
            },
            persona: {
                title: 'Buyer Persona Generator',
                subtitle: 'Create Detailed Profiles of Your Ideal Customer',
                description: 'Develop complete buyer personas with demographic, psychographic information, goals and pain points. Download in PDF to share with your team and align all marketing strategies.',
                features: {
                    demographicProfiles: 'Complete demographic profiles',
                    goalsMotivations: 'Goals and motivations',
                    painPoints: 'Identified pain points',
                    communicationChannels: 'Preferred communication channels'
                },
                benefits: {
                    title: 'Key Benefits',
                    items: [
                        'Personalize your marketing message',
                        'Improve audience segmentation',
                        'Align the entire team on the ideal customer',
                        'Increase the effectiveness of your campaigns'
                    ]
                },
                cta: 'Use Tool',
                stats: {
                    users: '8K+ users',
                    time: '~5 min'
                },
                badge: '✓ 100% Free'
            },
            matrix: {
                title: 'Prioritization Matrix',
                subtitle: 'Organize by Impact vs Effort',
                description: 'Visualize and prioritize your marketing tasks using the impact vs effort methodology. Drag and drop tasks between quadrants to identify quick wins and avoid resource waste.',
                features: {
                    quickWins: 'Identified quick wins',
                    dragDrop: 'Intuitive drag & drop',
                    quadrants: 'Four strategic quadrants',
                    visualPrioritization: 'Instant visual prioritization'
                },
                benefits: {
                    title: 'Key Benefits',
                    items: [
                        'Focus on high-impact tasks',
                        'Avoid wasting time on trivial matters',
                        'Improve team productivity',
                        'Make quick strategic decisions'
                    ]
                },
                cta: 'Use Tool',
                stats: {
                    users: '6K+ users',
                    time: '~3 min'
                },
                badge: '✓ 100% Free'
            },
            quiz: {
                title: 'Digital Strategy Quiz',
                subtitle: 'Evaluate and Improve Your Marketing',
                description: 'Answer 20 strategic questions to get a complete diagnosis of your digital maturity. Receive personalized recommendations based on your answers to improve each area.',
                features: {
                    strategicQuestions: '20 strategic questions',
                    detailedScore: 'Detailed scoring',
                    personalizedRecommendations: 'Personalized recommendations',
                    improvementPlan: 'Clear improvement plan'
                },
                benefits: {
                    title: 'Key Benefits',
                    items: [
                        'Identify strengths and weaknesses',
                        'Get an improvement roadmap',
                        'Compare with industry benchmarks',
                        'Prioritize areas of greatest impact'
                    ]
                },
                cta: 'Use Tool',
                stats: {
                    users: '12K+ users',
                    time: '~4 min'
                },
                badge: '✓ 100% Free'
            },
            why: {
                title: 'Why Choose Us?',
                subtitle: 'Designed for Demanding Marketers',
                description: 'Every detail has been thought out to offer you the best experience. Tools that really work, without complications.',
                features: [
                    {
                        title: 'Instant Results',
                        description: 'No waiting, no long processes. Get insights and analysis in seconds to make quick decisions.'
                    },
                    {
                        title: 'No Registration Required',
                        description: 'Use all tools without creating an account. Your privacy matters, we don\'t collect personal data.'
                    },
                    {
                        title: 'Save Valuable Time',
                        description: 'Automate complex calculations and generate professional documents in minutes, not hours.'
                    },
                    {
                        title: '100% Free Always',
                        description: 'No premium plans, no usage limits, no hidden costs. Full access to all features.'
                    },
                    {
                        title: 'Based on Best Practices',
                        description: 'Proven methodologies by digital marketing experts, applied in thousands of successful companies.'
                    },
                    {
                        title: 'Access from Any Device',
                        description: 'Responsive design optimized for desktop, tablet and mobile. Work from wherever you are.'
                    }
                ],
                stats: [
                    { value: '50K+', label: 'Tools used' },
                    { value: '4.8', label: 'Average satisfaction' },
                    { value: '15K+', label: 'Active marketers' },
                    { value: '99.9%', label: 'Guaranteed uptime' }
                ]
            },
            howItWorks: {
                badge: 'Simple Process',
                title: 'How Does It Work?',
                subtitle: 'In just 4 simple steps, get valuable insights for your marketing strategy. No learning curve, no complications.',
                steps: [
                    {
                        number: '01',
                        title: 'Select Your Tool',
                        description: 'Choose from our suite of 4 specialized tools according to your current need.',
                        items: [
                            'ROI Calculator for campaign analysis',
                            'Buyer Persona to know your audience',
                            'Prioritization Matrix to organize tasks',
                            'Strategy Quiz for diagnosis'
                        ]
                    },
                    {
                        number: '02',
                        title: 'Enter Your Data',
                        description: 'Fill in the fields with your business information. Intuitive interfaces guide each step.',
                        items: [
                            'Clear and direct forms',
                            'Examples and help tooltips',
                            'Real-time validation',
                            'No complicated technical data'
                        ]
                    },
                    {
                        number: '03',
                        title: 'Get Actionable Results',
                        description: 'Receive detailed analysis, recommendations and documents ready to use or share.',
                        items: [
                            'Automatically calculated metrics',
                            'Charts and visualizations',
                            'PDF export available',
                            'Personalized recommendations'
                        ]
                    },
                    {
                        number: '04',
                        title: 'Iterate and Improve',
                        description: 'Use the tools again whenever you want to continue optimizing your strategy.',
                        items: [
                            'Always unlimited use',
                            'Compare historical results',
                            'Adjust variables instantly',
                            'Evolve your strategy'
                        ]
                    }
                ]
            },
            faq: {
                badge: 'Frequently Asked Questions',
                title: 'Have Questions? We Answer',
                subtitle: 'Find answers to the most common questions about our digital marketing tools.',
                questions: [
                    {
                        q: 'Are the tools really free?',
                        a: 'Yes, 100% free forever. There are no premium plans, usage limits or hidden costs. All features are available to everyone without restrictions.'
                    },
                    {
                        q: 'Do I need to create an account to use the tools?',
                        a: 'No. You can use all tools immediately without registration. We do not require personal data or email. Your privacy is important to us.'
                    },
                    {
                        q: 'Is my data safe?',
                        a: 'Absolutely. We do not store any data you enter. All calculations are done in your browser in real time and nothing is sent to external servers.'
                    },
                    {
                        q: 'What is ROI and why is it important to calculate it?',
                        a: 'ROI (Return on Investment) measures how much you earn for every dollar invested in advertising. Calculating it helps you identify which campaigns are profitable and optimize your marketing budget.'
                    },
                    {
                        q: 'What is a Buyer Persona and what is it for?',
                        a: 'A Buyer Persona is a detailed profile of your ideal customer. It helps you personalize your message, improve segmentation, and align your entire team on who you are targeting.'
                    },
                    {
                        q: 'How does the Prioritization Matrix work?',
                        a: 'It uses the Impact vs Effort methodology to classify tasks into 4 quadrants: Quick Wins, Major Projects, Minor Tasks, and Avoid. This helps you focus on what really matters.'
                    },
                    {
                        q: 'Is the Digital Strategy Quiz accurate?',
                        a: 'Yes, it is based on proven methodologies used by marketing experts. The questions evaluate key areas of your digital strategy and provide personalized recommendations based on your answers.'
                    },
                    {
                        q: 'Can I use these tools for my agency or clients?',
                        a: 'Of course! The tools are designed for marketers, agencies, and businesses. You can use them as many times as you need for different projects and clients.'
                    },
                    {
                        q: 'How often are the tools updated?',
                        a: 'We constantly update them based on user feedback and best practices in digital marketing. New features and improvements are added regularly.'
                    },
                    {
                        q: 'Do they work on mobile devices?',
                        a: 'Yes, all tools are fully responsive and optimized for mobile, tablet and desktop. You can use them from any device with an internet connection.'
                    }
                ]
            },
            cta: {
                badge: 'Start Today, It\'s Free',
                title: 'Ready to Optimize',
                titleHighlight: 'Your Digital Marketing?',
                subtitle: 'Join thousands of marketers who are already making better decisions with our tools. No registration, no costs, only results.',
                toolLabels: {
                    roi: 'ROI',
                    persona: 'Persona',
                    matrix: 'Matrix',
                    quiz: 'Quiz'
                },
                button: 'Get Started Now — It\'s Free',
                trustBadges: '✓ No registration required  •  ✓ No hidden costs  •  ✓ Unlimited use'
            },
            footer: {
                title: 'Marketing Tools',
                description: 'Free tool suite for marketers. Calculate ROI, create buyer personas, prioritize tasks and evaluate your digital strategy. All without registration and no costs.',
                tagline: 'Made with ♥ for marketers worldwide',
                sections: {
                    tools: 'Tools',
                    resources: 'Resources'
                },
                links: {
                    allTools: 'All Tools',
                    howItWorks: 'How It Works',
                    faq: 'Frequently Asked Questions'
                },
                copyright: '© 2026 Marketing Tools. All rights reserved.',
                taglineBottom: 'Tools 100% free forever'
            },
            // Tool Pages Internal Translations
            pages: {
                roiCalculator: {
                    campaignData: 'Campaign Data',
                    totalInvestment: 'Total Investment',
                    generatedRevenue: 'Generated Revenue',
                    conversions: 'Conversions',
                    totalClicks: 'Total Clicks',
                    tooltips: {
                        investment: 'The total amount invested in your advertising campaign',
                        revenue: 'Total revenue attributed to this campaign',
                        conversions: 'Number of completed actions (sales, leads, etc.)',
                        clicks: 'Total clicks received on your ads'
                    },
                    insights: {
                        excellent: 'Excellent ROI. Your campaign is very profitable.',
                        good: 'Good ROI. You\'re doubling your investment.',
                        acceptable: 'Acceptable ROI. There\'s room for optimization.',
                        low: 'Low ROI. Consider adjusting your strategy.',
                        negative: 'Negative ROI. The campaign is generating losses.'
                    },
                    returnOnInvestment: 'Return on Investment',
                    profitableCampaign: 'Profitable Campaign',
                    unprofitableCampaign: 'Unprofitable Campaign',
                    profitLoss: 'Profit/Loss:',
                    cpa: 'CPA',
                    cpaDescription: 'Cost per Acquisition',
                    conversionRate: 'Conversion Rate',
                    conversionRateDescription: 'From clicks to conversions',
                    cpc: 'CPC',
                    cpcDescription: 'Cost per Click',
                    valuePerConversion: 'Value per Conversion',
                    valuePerConversionDescription: 'Average revenue',
                    profitProjections: 'Profit Projections',
                    months3: '3 months',
                    months6: '6 months',
                    months12: '12 months',
                    howToInterpret: 'How to interpret these metrics?',
                    roiTitle: 'ROI (Return on Investment)',
                    roiDesc: 'Measures how much you earn for each dollar invested. An ROI of 100% means you double your investment. Aim for ROI above 100% for profitable campaigns.',
                    cpaTitle: 'CPA (Cost per Acquisition)',
                    cpaDesc: 'The average cost to get a conversion. Compare it to your profit margin: if your CPA is higher than your margin, you\'re losing money.',
                    conversionRateTitle: 'Conversion Rate',
                    conversionRateDesc: 'Percentage of clicks that convert into actions. A rate of 2-5% is typical for e-commerce. Higher rates indicate good targeting.',
                    cpcTitle: 'CPC (Cost per Click)',
                    cpcDesc: 'What you pay for each visit. Varies by industry and competition. A low CPC with high conversion is the ideal scenario.'
                },
                buyerPersona: {
                    completed: 'Completed',
                    tabs: {
                        info: 'Info',
                        goals: 'Goals',
                        pain: 'Pain',
                        channels: 'Channels'
                    },
                    personaName: 'Persona Name',
                    personaNamePlaceholder: 'Ex: Maria Entrepreneur',
                    age: 'Age',
                    agePlaceholder: 'Ex: 35',
                    gender: 'Gender',
                    genderSelect: 'Select',
                    male: 'Male',
                    female: 'Female',
                    other: 'Other',
                    preferNotToSay: 'Prefer not to say',
                    occupation: 'Occupation',
                    occupationPlaceholder: 'Ex: Marketing Director',
                    income: 'Income',
                    incomePlaceholder: 'Ex: $50,000 - $80,000',
                    education: 'Education',
                    educationPlaceholder: 'Ex: Bachelor in Business Administration',
                    location: 'Location',
                    locationPlaceholder: 'Ex: Mexico City, Mexico',
                    bio: 'Biography',
                    bioPlaceholder: 'Briefly describe who this person is, their day-to-day, interests and behaviors...',
                    goals: 'Goals and Motivations',
                    goalsPlaceholder: 'Ex: Increase visibility of their brand...',
                    painPoints: 'Pain Points and Challenges',
                    painPointsPlaceholder: 'Ex: Limited budget for advertising...',
                    motivations: 'Main Motivations',
                    motivationsPlaceholder: 'Ex: Achieve financial independence...',
                    preferredChannels: 'Preferred Communication Channels',
                    downloadPDF: 'Download PDF',
                    whyCreate: 'Why create Buyer Personas?',
                    personalizeMessage: 'Personalize your Message',
                    personalizeMessageDesc: 'Knowing your ideal customer, you can create content and messages that resonate directly with their needs and desires.',
                    improveSegmentation: 'Improve Segmentation',
                    improveSegmentationDesc: 'Better define your audiences on advertising platforms to reach exactly who you want.',
                    alignTeam: 'Align your Team',
                    alignTeamDesc: 'The entire team works with the same vision of the customer, from sales to customer service.',
                    increaseConversions: 'Increase Conversions',
                    increaseConversionsDesc: 'By understanding pain points, you can offer precise solutions that convert better.'
                },
                priorityMatrix: {
                    newTask: 'Write a new marketing task...',
                    add: 'Add',
                    lowEffort: '← Low Effort',
                    highEffort: 'High Effort →',
                    highImpact: 'High Impact ↑',
                    lowImpact: '↓ Low Impact',
                    quickWins: 'Quick Wins',
                    quickWinsDesc: 'High impact, low effort',
                    quickWinsCount: 'tasks',
                    dragHere: 'Drag tasks here',
                    majorProjects: 'Major Projects',
                    majorProjectsDesc: 'High impact, high effort',
                    minorTasks: 'Minor Tasks',
                    minorTasksDesc: 'Low impact, low effort',
                    avoid: 'Avoid',
                    avoidDesc: 'Low impact, high effort',
                    totalTasks: 'Total tasks',
                    howToUse: 'How to use the Prioritization Matrix?',
                    step1: '1',
                    step1Title: 'Quick Wins',
                    step1Desc: 'Tasks that generate great results with little work. Do them first!',
                    step2: '2',
                    step2Title: 'Major Projects',
                    step2Desc: 'Important initiatives that require planning. Schedule and execute.',
                    step3: '3',
                    step3Title: 'Minor Tasks',
                    step3Desc: 'Simple tasks that can be delegated or done during downtime.',
                    step4: '4',
                    step4Title: 'Avoid',
                    step4Desc: 'Consume time without generating value. Eliminate or automate.',
                    proTip: '💡 Pro Tip',
                    proTipDesc: 'Review your matrix every week. Priorities change and what was a "major project" can become a "quick win" if you find a better way to do it, or vice versa.'
                },
                footer: {
                    freeToolmark: '100% free tool — No registration required',
                    viewAllTools: 'View all tools →'
                },
                strategyQuiz: {
                    step: 'Step',
                    of: 'of',
                    question: 'Question',
                    back: 'Back',
                    next: 'Next',
                    viewResult: 'View result',
                    yourRecommendedStrategy: 'Your recommended strategy',
                    restartQuiz: 'Start over',
                    scheduleConsultation: 'Schedule a consultation',
                    title: 'Strategy Quiz',
                    subtitle: 'Discover which marketing strategy you need right now. Answer 20 quick questions.',
                    questions: [
                        {
                            id: 'objective',
                            text: 'What is your main objective for this quarter?',
                            description: 'Choose the goal that best matches your priority.',
                            options: [
                                { id: 'leads', label: 'Generate more qualified leads', value: 'performance' },
                                { id: 'brand', label: 'Increase brand awareness', value: 'branding' },
                                { id: 'retention', label: 'Improve retention and LTV', value: 'product' },
                                { id: 'revenue', label: 'Increase immediate revenue', value: 'performance' },
                                { id: 'expansion', label: 'Expand into new markets', value: 'branding' },
                            ],
                        },
                        {
                            id: 'stage',
                            text: 'What stage is your business in?',
                            description: 'Helps tailor tactics to your context.',
                            options: [
                                { id: 'early', label: 'Pre-product or validation', value: 'product' },
                                { id: 'growing', label: 'Fast growth', value: 'performance' },
                                { id: 'mature', label: 'Established brand', value: 'branding' },
                                { id: 'pivot', label: 'Pivoting or relaunching', value: 'product' },
                                { id: 'scale', label: 'Scaling with validated product', value: 'performance' },
                            ],
                        },
                        {
                            id: 'channel',
                            text: 'Which channels have worked best so far?',
                            description: 'Select the most consistent channel.',
                            options: [
                                { id: 'ads', label: 'Ads (Meta/Google/TikTok)', value: 'performance' },
                                { id: 'content', label: 'Organic content (SEO/YouTube/Newsletter)', value: 'branding' },
                                { id: 'referrals', label: 'Referrals or partnerships', value: 'product' },
                                { id: 'sales', label: 'Outbound or sales team', value: 'performance' },
                                { id: 'social', label: 'Organic social media', value: 'branding' },
                            ],
                        },
                        {
                            id: 'resource',
                            text: 'What is your biggest limitation right now?',
                            description: 'Identify the main blocker to prioritize.',
                            options: [
                                { id: 'budget', label: 'Limited budget', value: 'performance' },
                                { id: 'time', label: 'Lack of time/team', value: 'product' },
                                { id: 'awareness', label: 'Low brand awareness', value: 'branding' },
                                { id: 'convertion', label: 'Low funnel conversion', value: 'performance' },
                                { id: 'retention', label: 'High churn rate', value: 'product' },
                            ],
                        },
                        {
                            id: 'audience',
                            text: 'How well do you know your audience?',
                            description: 'Assess your knowledge of the ideal customer.',
                            options: [
                                { id: 'very_well', label: 'Very well - We have detailed personas', value: 'performance' },
                                { id: 'somewhat', label: 'Somewhat - We know basic demographics', value: 'branding' },
                                { id: 'limited', label: 'Limited - We are discovering', value: 'product' },
                                { id: 'assumptions', label: 'Based on assumptions', value: 'product' },
                                { id: 'data_driven', label: 'Data-driven from real behavior', value: 'performance' },
                            ],
                        },
                        {
                            id: 'content',
                            text: 'How often do you publish content?',
                            description: 'Assess your current content activity.',
                            options: [
                                { id: 'daily', label: 'Daily on multiple channels', value: 'branding' },
                                { id: 'weekly', label: 'Weekly consistently', value: 'branding' },
                                { id: 'sporadic', label: 'Sporadically', value: 'product' },
                                { id: 'rarely', label: 'Rarely or never', value: 'performance' },
                                { id: 'planned', label: 'We have an editorial calendar', value: 'branding' },
                            ],
                        },
                        {
                            id: 'competition',
                            text: 'What is your current market like?',
                            description: 'Identify the level of competition.',
                            options: [
                                { id: 'saturated', label: 'Very saturated - Many competitors', value: 'branding' },
                                { id: 'competitive', label: 'Competitive but with room', value: 'performance' },
                                { id: 'emerging', label: 'Emerging market - Few players', value: 'product' },
                                { id: 'niche', label: 'Niche with little competition', value: 'branding' },
                                { id: 'dominated', label: 'Dominated by 1-2 big brands', value: 'branding' },
                            ],
                        },
                        {
                            id: 'data',
                            text: 'How do you handle marketing data?',
                            description: 'Assess your current analytics capability.',
                            options: [
                                { id: 'advanced', label: 'Advanced dashboards and predictive analysis', value: 'performance' },
                                { id: 'basic', label: 'Basic analytics (GA, Meta Insights)', value: 'performance' },
                                { id: 'manual', label: 'Manual occasional review', value: 'product' },
                                { id: 'minimal', label: 'Minimal data or no tracking', value: 'product' },
                                { id: 'automated', label: 'Automated weekly reports', value: 'performance' },
                            ],
                        },
                        {
                            id: 'customer_journey',
                            text: 'What is your conversion funnel like?',
                            description: 'Describe your typical sales process.',
                            options: [
                                { id: 'short', label: 'Short - Impulse or direct purchase', value: 'performance' },
                                { id: 'medium', label: 'Medium - 2-3 touchpoints before buying', value: 'branding' },
                                { id: 'long', label: 'Long - Multiple interactions and nurturing', value: 'branding' },
                                { id: 'complex', label: 'Complex - Requires demos or trials', value: 'product' },
                                { id: 'undefined', label: 'Not well defined yet', value: 'product' },
                            ],
                        },
                        {
                            id: 'value_prop',
                            text: 'How clear is your value proposition?',
                            description: 'Assess the clarity of your main message.',
                            options: [
                                { id: 'crystal', label: 'Crystal clear - We communicate it constantly', value: 'branding' },
                                { id: 'clear', label: 'Clear - But needs reinforcement', value: 'branding' },
                                { id: 'confusing', label: 'Somewhat confusing - Needs simplification', value: 'product' },
                                { id: 'evolving', label: 'Evolving - We are iterating', value: 'product' },
                                { id: 'differentiated', label: 'Highly differentiated in the market', value: 'branding' },
                            ],
                        },
                        {
                            id: 'team',
                            text: 'What marketing resources do you have?',
                            description: 'Assess your current execution capacity.',
                            options: [
                                { id: 'full_team', label: 'Full marketing team', value: 'branding' },
                                { id: 'marketer', label: '1-2 dedicated marketers', value: 'performance' },
                                { id: 'part_time', label: 'Part-time or freelancers', value: 'performance' },
                                { id: 'founder', label: 'Only founder/internal team', value: 'product' },
                                { id: 'agency', label: 'We work with an external agency', value: 'branding' },
                            ],
                        },
                        {
                            id: 'automation',
                            text: 'How automated is your marketing?',
                            description: 'Measure your level of automation.',
                            options: [
                                { id: 'highly', label: 'Highly - Email flows, retargeting, CRM', value: 'performance' },
                                { id: 'partially', label: 'Partially - Some basic tools', value: 'performance' },
                                { id: 'manual', label: 'Mostly manual', value: 'product' },
                                { id: 'none', label: 'No automation', value: 'product' },
                                { id: 'advanced', label: 'Advanced marketing automation', value: 'performance' },
                            ],
                        },
                        {
                            id: 'social_presence',
                            text: 'How would you describe your social media presence?',
                            description: 'Assess your current social activity.',
                            options: [
                                { id: 'strong', label: 'Strong - High and consistent engagement', value: 'branding' },
                                { id: 'growing', label: 'Growing - Improving steadily', value: 'branding' },
                                { id: 'weak', label: 'Weak - Little activity or engagement', value: 'product' },
                                { id: 'nonexistent', label: 'Almost nonexistent', value: 'product' },
                                { id: 'focused', label: 'Focused on 1-2 main channels', value: 'performance' },
                            ],
                        },
                        {
                            id: 'seo',
                            text: 'What is your current SEO situation?',
                            description: 'Assess your organic search visibility.',
                            options: [
                                { id: 'ranking', label: 'We rank in top positions', value: 'branding' },
                                { id: 'improving', label: 'Improving positions gradually', value: 'branding' },
                                { id: 'basic', label: 'Basics but no strategy', value: 'product' },
                                { id: 'neglected', label: 'We have not worked on SEO', value: 'product' },
                                { id: 'investing', label: 'Actively investing in SEO content', value: 'branding' },
                            ],
                        },
                        {
                            id: 'email',
                            text: 'How do you use email marketing?',
                            description: 'Assess your email strategy.',
                            options: [
                                { id: 'strategic', label: 'Strategically - Segmentation and nurturing', value: 'performance' },
                                { id: 'regular', label: 'Regular newsletters', value: 'branding' },
                                { id: 'occasional', label: 'Occasional sends without plan', value: 'product' },
                                { id: 'minimal', label: 'Barely use email', value: 'product' },
                                { id: 'automated', label: 'Automated conversion flows', value: 'performance' },
                            ],
                        },
                        {
                            id: 'paid_ads',
                            text: 'What is your experience with paid ads?',
                            description: 'Assess your paid media maturity.',
                            options: [
                                { id: 'expert', label: 'Experts - Constant optimization', value: 'performance' },
                                { id: 'intermediate', label: 'Intermediate - Active and profitable campaigns', value: 'performance' },
                                { id: 'beginner', label: 'Beginner - Testing with low budget', value: 'product' },
                                { id: 'none', label: 'We have not invested in ads', value: 'branding' },
                                { id: 'testing', label: 'Testing multiple platforms', value: 'performance' },
                            ],
                        },
                        {
                            id: 'brand_awareness',
                            text: 'How strong is your brand awareness?',
                            description: 'Assess how well-known your brand is.',
                            options: [
                                { id: 'high', label: 'High - Known in the sector', value: 'branding' },
                                { id: 'moderate', label: 'Moderate - Some people know us', value: 'branding' },
                                { id: 'low', label: 'Low - Few people know us', value: 'product' },
                                { id: 'emerging', label: 'Emerging - Building reputation', value: 'branding' },
                                { id: 'niche', label: 'Very known in a specific niche', value: 'performance' },
                            ],
                        },
                        {
                            id: 'customer_feedback',
                            text: 'How do you gather customer feedback?',
                            description: 'Assess your listening system.',
                            options: [
                                { id: 'systematic', label: 'Systematically - Surveys and analysis', value: 'product' },
                                { id: 'regular', label: 'Regularly - Direct conversations', value: 'product' },
                                { id: 'sporadic', label: 'Sporadically - No formal process', value: 'performance' },
                                { id: 'reactive', label: 'Only when there are problems', value: 'product' },
                                { id: 'data_driven', label: 'Based on behavioral data', value: 'performance' },
                            ],
                        },
                        {
                            id: 'innovation',
                            text: 'How innovative is your marketing?',
                            description: 'Assess your experimentation capability.',
                            options: [
                                { id: 'pioneer', label: 'Pioneers - Always testing new things', value: 'branding' },
                                { id: 'early_adopter', label: 'Early adopters - Adopt trends early', value: 'branding' },
                                { id: 'follower', label: 'Followers - Apply what works', value: 'performance' },
                                { id: 'conservative', label: 'Conservative - Only proven tactics', value: 'performance' },
                                { id: 'testing', label: 'Constantly A/B testing', value: 'performance' },
                            ],
                        },
                        {
                            id: 'goals',
                            text: 'How do you measure marketing success?',
                            description: 'Identify your main KPIs.',
                            options: [
                                { id: 'revenue', label: 'Revenue and direct ROI', value: 'performance' },
                                { id: 'leads', label: 'Quantity and quality of leads', value: 'performance' },
                                { id: 'awareness', label: 'Reach and brand awareness', value: 'branding' },
                                { id: 'engagement', label: 'Engagement and community', value: 'branding' },
                                { id: 'retention', label: 'Retention and customer lifetime value', value: 'product' },
                            ],
                        },
                    ],
                    strategyProfiles: {
                        performance: {
                            title: 'Performance-Driven Strategy',
                            description: 'Optimize conversions and immediate revenue with results-focused campaigns.',
                            actions: [
                                'Double your winning creatives and test 3 new audiences weekly',
                                'Implement CRO on your main landing and run A/B offer tests',
                                'Create a retargeting system with dynamic ads',
                            ],
                            gradient: 'from-emerald-500 to-teal-500',
                        },
                        branding: {
                            title: 'Brand-Led Strategy',
                            description: 'Build authority and demand mid-term with content and community.',
                            actions: [
                                'Launch a video series focused on your ICP',
                                'Create lead magnets and activate a weekly newsletter',
                                'Generate light PR: podcasts, guest posts, collaborations',
                            ],
                            gradient: 'from-indigo-500 to-purple-500',
                        },
                        product: {
                            title: 'Product-Led Strategy',
                            description: 'Improve experience and retention so the product drives growth.',
                            actions: [
                                'Implement guided onboarding and activation emails',
                                'Map churn reasons and prioritize quick fixes',
                                'Activate simple viral loops: referrals or share-to-unlock',
                            ],
                            gradient: 'from-amber-500 to-orange-500',
                        },
                    }
                }
            }
        },
        // Resources Page
        resources: {
            heading: 'RESOURCES',
            hero: {
                title: 'Professional Resources',
                subtitle: 'Resources that Transform Strategies',
                description: 'Ready-to-use tools and actionable knowledge. Everything you need to take your marketing and customer experience to the next level.',
                templates: 'Templates',
                guides: 'Guides',
                infographics: 'Infographics',
            },
            filters: {
                all: 'All Resources',
                template: 'Template',
                guide: 'Guide',
                infographic: 'Infographic',
            },
            sections: {
                templates: {
                    title: 'Templates',
                    subtitle: 'Professional templates ready to use. Save time and work like the experts from day one.',
                },
                guides: {
                    title: 'Guides',
                    subtitle: 'Distilled knowledge in practical guides. Proven methodologies explained step by step.',
                },
                infographics: {
                    title: 'Infographics',
                    subtitle: 'Complex information visualized simply. Perfect for reference and sharing.',
                },
            },
            ctas: {
                downloadNow: 'Download Now',
                viewDetails: 'View Details',
                readInfographic: 'Read Infographic',
                obtain: 'Get Access Now!',
                preview: 'Preview',
                readArticle: 'Read Article',
                getFree: 'Get Free',
                getFor: 'Get for',
            },
            badges: {
                free: 'FREE',
                premium: 'PREMIUM',
            },
            labels: {
                free: 'Free',
                whyNeedIt: 'Why do you need it?',
            },
            cta: {
                title: 'Need a Custom Resource?',
                subtitle: 'If you need a specific template, guide, or consulting for your business, I can help you.',
                buttonCustom: 'Request Custom Resource',
                buttonContact: 'Contact',
            },
            faq: {
                title: 'Frequently Asked Questions',
                questions: [
                    {
                        q: 'How do free downloads work?',
                        a: 'Free resources can be downloaded immediately without registration. Simply click "Download Now" and the file will start downloading automatically.',
                    },
                    {
                        q: 'What payment methods do you accept?',
                        a: 'Premium resources can be purchased through PayPal. After payment, you will receive the resource immediately via email.',
                    },
                    {
                        q: 'Can I request a custom resource?',
                        a: 'Yes! If you need a specific template or consulting adapted to your business, contact me through the form at the end of the page.',
                    },
                    {
                        q: 'Do you offer support after purchase?',
                        a: 'Yes, all premium resources include email support for questions about their use and implementation.',
                    },
                ],
            },
            payment: {
                title: 'Get Your Resource',
                processing: 'Processing Payment...',
                success: 'Payment Successful!',
                instructions: 'To get this resource:',
                step1: 'Send the payment via PayPal',
                step2: 'Send proof of payment to:',
                step3: 'You will receive the resource within 24h',
                paypal: 'PayPal',
                email: 'Email',
                price: 'Price',
                sendPayment: 'Send Payment',
                close: 'Close',
            },
            preview: {
                whatsIncluded: "What's Included",
                whyUseful: 'Why Is It Useful?',
                preview: 'Preview',
                close: 'Close',
            },
            article: {
                notFound: 'Article not found',
                backToResources: 'Back to resources',
                typeLabels: {
                    'cjm-template': 'CJM Template',
                    'foda-kit': 'SWOT Kit',
                    'social-media-calendar': 'Content Calendar',
                    'nps-template': 'NPS Dashboard',
                    'content-grid': 'Content Strategy',
                    'cjm-guide': 'CJM Guide',
                    'seo-local-guide': 'Local SEO Guide',
                    'linkedin-strategy': 'LinkedIn Strategy',
                    'cx-metrics-guide': 'CX Metrics',
                    'linkedin-post-anatomy': 'Post Infographic',
                    'cx-optimization-process': 'CX Process',
                    'keyword-research': 'Keyword Research',
                    'content-strategy': 'Content Strategy',
                },
                defaultLabels: {
                    template: 'Template',
                    guide: 'Guide',
                    infographic: 'Infographic',
                },
            },
        },
    },
    es: {
        // Navegación
        nav: {
            aboutMe: 'SOBRE MÍ',
            projects: 'PROYECTOS',
            contactMe: 'CONTÁCTAME',
            resume: 'CV',
            tools: 'HERRAMIENTAS',
            resources: 'RECURSOS',
            resourcesMenu: {
                templates: 'Templates',
                guides: 'Guías',
                infographics: 'Infografías',
                cjmTemplate: 'Template de CJM',
                fodaKit: 'Kit FODA completo',
                contentCalendar: 'Calendario de Contenidos 2024',
                npsDashboard: 'Dashboard de NPS',
                contentStrategy: 'Planificador de Estrategia',
                cjmGuide: 'Cómo crear un Customer Journey Map',
                seoLocalGuide: 'Guía de SEO local',
                linkedinStrategy: 'Estrategia de contenido en LinkedIn para profesionales',
                cxMetrics: '10 métricas clave de experiencia del cliente',
                linkedinPostAnatomy: 'Anatomía de un buen post en LinkedIn/Instagram',
                cxOptimization: 'Proceso de optimización de atención al cliente en 6 etapas',
                keywordResearch: 'Palabras clave: cómo encontrarlas y usarlas',
                landingPageElements: 'Elementos clave de una landing page que convierte',
            },
        },
        // Sección Hero
        hero: {
            welcome: 'Bienvenido a mi portafolio',
            greeting: 'Hola, soy',
            name: 'Jerónimo',
            subtitle: 'Un apasionado',
            role: 'Estudiante de Negocios Digitales y Analista de Experiencia del Cliente',
            description: 'especializado en optimización de experiencia del cliente basada en datos y marketing digital.',
            viewWork: 'Ver Mi Trabajo',
            getInTouch: 'Contactar',
            location: 'Buenos Aires, AR (GMT-3)',
            openToWork: 'Disponible para trabajar',
            yearsExperience: 'Años de Experiencia',
            projectsCompleted: 'Proyectos Completados',
            connectWithMe: 'Conéctate conmigo',
            dropOffRate: 'Tasa de Abandono',
            csat: 'Satisfacción CSAT',
        },
        // Sección Sobre Mí
        about: {
            title: 'Sobre Mí',
            heading: 'Experiencia del Cliente Basada en Datos',
            subtitle: 'Profesional empático enfocado en la transformación digital',
            whyTrustMe: '¿Por qué confiar en mí?',
            trust1: {
                title: 'Excelencia académica y liderazgo en iniciativas globales',
                description: 'Licenciatura en Administración en Internet en UEAN, con promedio de +8,66. Liderando un Proyecto universitario de Finanzas Internacionales e inserción de Green Bonds en Argentina, con proyección a varios congresos.',
            },
            trust2: {
                title: 'Posicionamiento web que convierte',
                description: 'Ayudo a marcas a escalar no solo en buscadores convencionales, sino también en plataformas impulsadas por inteligencia artificial. Mis estrategias SEO incluyen auditorías técnicas, optimización de contenido, investigación avanzada de palabras clave y construcción de autoridad digital. Combino creatividad con análisis de datos para generar visibilidad, atraer tráfico de calidad y transformar visitas en clientes reales.',
            },
            trust3: {
                title: 'Innovación de vanguardia aplicada a tu negocio',
                description: 'Me capacito de manera permanente en nuevas tecnologías, inteligencia artificial y herramientas digitales, con foco en su aplicación práctica para la mejora de procesos, el análisis estratégico y la generación de valor en organizaciones.',
            },
            trust4: {
                title: 'Resiliencia profesional y resultados medibles',
                description: 'Me adapto fácilmente a entornos dinámicos con metas claras y objetivos precisos. Busco activamente desafíos que representen oportunidades de crecimiento profesional, ya sea mediante análisis de datos, optimización de procesos o iniciativas de marketing digital.',
            },
            paragraph1: 'Actualmente estudio Licenciatura en Administración en Internet en UEAN mientras trabajo como Analista de Experiencia del Cliente en Estudio Notarial Castro. Lideré la optimización del sistema de atención mediante análisis de datos, reduciendo tiempos de respuesta y mejorando la satisfacción en trámites críticos de alta confidencialidad.',
            paragraph2: 'Con certificaciones en Marketing Digital de The University of Manchester, combino habilidades analíticas con pensamiento estratégico. Me especializo en SEO, marketing de contenido, estrategias en redes sociales y analítica, todo enfocado en impulsar el éxito empresarial.',
            paragraph3: 'Me adapto fácilmente a entornos dinámicos con metas claras y objetivos precisos. Busco activamente desafíos que representen oportunidades de crecimiento profesional, ya sea mediante análisis de datos, optimización de procesos o iniciativas de marketing digital.',
            techLabel: 'Tecnologías y Habilidades:',
            skills: {
                cleanCode: { title: 'Código Limpio', description: 'Escribiendo código mantenible y escalable con mejores prácticas' },
                design: { title: 'Diseño UI/UX', description: 'Creando interfaces intuitivas y hermosas' },
                performance: { title: 'Rendimiento', description: 'Optimizando para velocidad y experiencias fluidas' },
                passion: { title: 'Pasión', description: 'Dedicado al aprendizaje continuo y crecimiento' },
            },
        },
        // Sección Proyectos
        projects: {
            title: 'Mi Trabajo',
            heading: 'Proyectos Destacados',
            description: 'Una selección de proyectos que muestran mis habilidades y pasión por crear soluciones digitales impactantes.',
            viewAll: 'Ver Todos los Proyectos',
            filter: {
                all: 'Todos los Proyectos',
                strategy: 'Estrategia',
                marketing: 'Marketing',
                analytics: 'Analítica',
                design: 'Diseño',
            },
            project1: {
                title: 'Kiddo Estrategia de Franquicias',
                description: 'Estrategia de expansión y franquicias para una marca gastronómica, enfocada en formatos escalables, unit economics y crecimiento internacional.',
            },
            project2: {
                title: 'Topper Plan de marketing integral + paid media',
                description: 'Plan de marketing integral con enfoque mobile-first, buyer personas y campañas paid media para awareness, ventas y retargeting.',
            },
            project3: {
                title: 'EasyTruck Paid Media & App Growth',
                description: 'Estrategia full-funnel de paid media y app growth para una app fintech, combinando presupuesto, estructura de campañas, deep linking y crecimiento de suscripciones Premium.',
            },
            project4: {
                title: 'Lisicki Litvin Corp Métricas',
                description: 'Sistema de reporting ejecutivo para traducir KPIs financieros, operativos y de servicio en decisiones claras y accionables.',
            },
            project5: {
                title: 'Stiberman Law SEO/SEM',
                description: 'Estrategia SEO y SEM para captar demanda legal de alta intención y corregir la brecha de visibilidad de una firma de bancarrota en EE.UU.',
            },
            project6: {
                title: 'Pinturerías Coco Transformación Digital',
                description: 'Plan integral de transformación digital para una cadena de retail, conectando la venta física con un ecosistema omnicanal robusto.',
            },
            liveDemo: 'Demo en Vivo',
            source: 'Código',
            viewDetails: 'Ver Detalles',
        },
        // Sección Contacto
        contact: {
            title: 'Contáctame',
            heading: 'Conectemos',
            description: '¿Buscas a alguien para optimizar la experiencia del cliente o impulsar tu estrategia digital? Hablemos sobre cómo puedo ayudar a que tu negocio crezca.',
            info: {
                email: 'Email',
                location: 'Ubicación',
                locationValue: 'Buenos Aires, Argentina',
                phone: 'Teléfono',
            },
            social: 'Conéctate conmigo',
            available: 'Disponible para oportunidades',
            availableText: 'Estoy abierto a nuevos desafíos en experiencia del cliente, análisis de datos y marketing digital. Hablemos sobre cómo puedo agregar valor a tu equipo.',
            form: {
                name: 'Tu Nombre',
                namePlaceholder: 'Juan Pérez',
                email: 'Tu Email',
                emailPlaceholder: 'juan@ejemplo.com',
                subject: 'Asunto',
                subjectPlaceholder: 'Consulta de Proyecto',
                message: 'Tu Mensaje',
                messagePlaceholder: 'Cuéntame sobre tu proyecto...',
                send: 'Enviar Mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje Enviado!',
                successMessage: 'Gracias por contactarme. Te responderé pronto.',
            },
        },
        // FAQ Section
        faq: {
            title: 'Insights Estratégicos',
            heading: '5 Insights Clave',
            description: 'Perspectivas estratégicas sobre el futuro de la experiencia del cliente y el marketing digital.',
            questions: [
                {
                    q: '¿Qué es la Artificial Experience (AX) y cómo transforma la experiencia del cliente?',
                    a: 'La Artificial Experience representa la evolución natural de la Customer Experience al integrar inteligencia artificial de manera fluida en cada punto de contacto con el cliente. A diferencia de los chatbots tradicionales, la AX utiliza IA generativa y aprendizaje automático para crear experiencias personalizadas, predictivas y conversacionales que se adaptan en tiempo real a las necesidades individuales de cada usuario. Esta tecnología permite anticipar problemas antes de que ocurran, ofrecer recomendaciones genuinamente relevantes y proporcionar asistencia 24/7 con un nivel de empatía y comprensión contextual que antes era imposible. Las empresas que implementan AX están observando reducciones significativas en tiempos de respuesta, aumentos en satisfacción del cliente y mayor eficiencia operativa, todo mientras liberan a sus equipos humanos para enfocarse en interacciones de mayor valor estratégico.'
                },
                {
                    q: '¿Cómo se integra el Phygital Marketing en una estrategia omnicanal efectiva?',
                    a: 'El marketing phygital representa la convergencia estratégica entre experiencias físicas y digitales, creando un ecosistema donde ambos mundos se complementan sin fisuras. La implementación exitosa requiere sincronizar datos en tiempo real entre todos los canales, permitiendo que un cliente comience su journey en redes sociales, continúe en tienda física con asistencia personalizada basada en su historial digital, y finalice la compra mediante una app móvil sin perder contexto en ningún momento. Las tecnologías habilitadoras incluyen códigos QR inteligentes, realidad aumentada para pruebas virtuales de productos, beacons para experiencias basadas en ubicación y sistemas de gestión de identidad unificada. El objetivo fundamental es eliminar la fricción entre canales y crear una experiencia fluida que reconozca y valore al cliente independientemente del punto de contacto que elija utilizar.'
                },
                {
                    q: '¿Por qué es crucial medir el Customer Effort Score (CES) en 2026 y cómo se diferencia de otras métricas?',
                    a: 'El Customer Effort Score ha emergido como la métrica más predictiva de lealtad del cliente en la era digital, superando incluso al tradicional Net Promoter Score en ciertos contextos. Esta métrica evalúa específicamente cuánto esfuerzo debe invertir un cliente para resolver su necesidad, completar una compra o recibir soporte. La investigación ha demostrado consistentemente que los clientes que experimentan bajo esfuerzo tienen significativamente mayor probabilidad de repetir compras y recomendar la marca. La medición efectiva del CES implica encuestas post-interacción inmediatas, análisis de puntos de fricción en el customer journey mediante herramientas de session replay y análisis de sentimiento en conversaciones de soporte. Las organizaciones líderes están utilizando IA para identificar automáticamente patrones de alto esfuerzo y priorizar mejoras que generen el mayor impacto en la experiencia del cliente.'
                },
                {
                    q: '¿Cómo implementar Social Commerce efectivo más allá de simplemente publicar productos en redes sociales?',
                    a: 'El social commerce auténtico va mucho más allá de crear catálogos en Instagram o Facebook. Requiere construir comunidades genuinas donde el contenido generado por usuarios, las transmisiones en vivo con demostraciones de productos y las recomendaciones peer-to-peer impulsen naturalmente las decisiones de compra. Las estrategias más exitosas integran micro-influencers que comparten valores auténticos con la marca, implementan funcionalidades de compra en un solo clic directamente desde videos cortos, y utilizan IA conversacional para responder consultas en comentarios y mensajes directos de manera instantánea. El aspecto crítico es mantener la experiencia social y comunitaria mientras se reduce la fricción en el camino hacia la conversión. Las marcas que dominan social commerce están viendo que entre el 20% y 40% de sus ventas digitales provienen directamente de plataformas sociales, sin necesidad de dirigir tráfico hacia sitios web tradicionales.'
                },
                {
                    q: '¿Qué papel juega la Hyper-Personalization impulsada por IA en la retención de clientes?',
                    a: 'La hiperpersonalización representa el siguiente nivel evolutivo más allá de la segmentación tradicional, utilizando inteligencia artificial para crear experiencias únicas para cada individuo basándose en comportamiento en tiempo real, contexto situacional, historial completo de interacciones y señales predictivas. A diferencia de la personalización básica que simplemente inserta un nombre en un email, la hiperpersonalización ajusta dinámicamente el contenido del sitio web, las recomendaciones de productos, los mensajes de marketing, los precios dinámicos y hasta el tono de las comunicaciones según el perfil psicográfico y el momento específico del customer journey. Las tecnologías habilitadoras incluyen customer data platforms (CDP) que unifican datos de múltiples fuentes, motores de recomendación basados en aprendizaje profundo y sistemas de orquestación de experiencias que activan automáticamente el contenido óptimo para cada interacción. Las empresas que implementan correctamente la hiperpersonalización están observando incrementos en conversión del 15% al 25% y aumentos sustanciales en customer lifetime value al hacer que cada cliente sienta que la experiencia fue diseñada exclusivamente para él.'
                }
            ]
        },
        // Footer
        footer: {
            tagline: 'Optimizando experiencias del cliente a través de datos y estrategia',
            copyright: 'enjoy this sh¡t.',
            booksRecommend: 'Libros que Recomiendo',
        },
        // Secciones Marquee
        marquee: {
            trustedBy: 'Confían en Mí',
            toolsTechnologies: 'Herramientas y Tecnologías',
        },
        // Sección Libros
        books: {
            title: 'Libros que Recomiendo',
            description: 'Una selección de libros que han influido en mi forma de pensar sobre negocios, diseño y desarrollo personal.',
            backToHome: 'Volver al Inicio',
            buyOnAmazon: 'Comprar en Amazon',
            opinions: {
                atomicHabits: 'Un libro fundamental sobre la construcción de hábitos. Clear explica de manera clara y práctica cómo pequeños cambios pueden generar resultados extraordinarios. La metodología de "1% mejor cada día" es transformadora y aplicable a cualquier área de la vida.',
                thinkingSystems: 'Una obra maestra sobre pensamiento sistémico. Meadows proporciona un marco comprensivo para entender sistemas complejos y cómo intervenir efectivamente. Esencial para cualquiera que trabaje con cambio organizacional, políticas o problemas complejos.',
                thinkingFast: 'Kahneman explora los dos sistemas de pensamiento que gobiernan nuestras decisiones. Es fascinante descubrir cómo nuestro cerebro toma decisiones y los sesgos cognitivos que nos afectan. Fundamental para entender el comportamiento humano en negocios y diseño.',
                juegoVida: 'Una obra profunda sobre estrategia, toma de decisiones y pensamiento sistémico aplicado a la vida personal y profesional. Llovet ofrece insights valiosos sobre cómo navegar la complejidad del mundo moderno.',
            },
        },
        // Detalle de Proyecto
        projectDetail: {
            notFound: 'Proyecto No Encontrado',
            notFoundMessage: 'El proyecto que estás buscando no existe.',
            backToProjects: 'Volver a Proyectos',
            overview: 'Descripción del Proyecto',
            technologies: 'Tecnologías Utilizadas',
        },
        // Página Herramientas
        tools: {
            heading: 'HERRAMIENTAS',
            description: 'Herramientas profesionales para optimizar tus estrategias digitales y de marketing.',
            hero: {
                badge: 'Suite de Marketing Digital',
                tagline: 'Herramientas profesionales para marketers que buscan resultados medibles.',
                title: 'Herramientas Digitales',
                subtitle: 'Cuatro herramientas esenciales para optimizar tu estrategia. Sin registro, sin costos, solo resultados.',
                cta: 'Comenzar Ahora',
                exploreTools: 'Explora las herramientas',
                freeAndNoRegistration: '100% gratuitas y sin registro',
                stats: {
                    tools: '4 herramientas',
                    uses: '∞ usos',
                    cost: '$0 costo'
                }
            },
            section: {
                badge: 'Herramientas Profesionales',
                title: 'Todo lo que Necesitas para',
                titleHighlight: 'Escalar tu Marketing',
                subtitle: 'Cuatro herramientas esenciales diseñadas para marketers que buscan resultados. Sin registro, sin costos ocultos, solo valor real para tu negocio.',
            },
            roi: {
                title: 'Calculadora de ROI',
                subtitle: 'Retorno de Inversión para Campañas Digitales',
                description: 'Calcula con precisión el retorno de inversión de tus campañas publicitarias. Obtén métricas clave como CPA, tasa de conversión y proyecciones a futuro para optimizar tu presupuesto de marketing.',
                features: {
                    realTime: 'Cálculo de ROI en tiempo real',
                    cpa: 'CPA y tasa de conversión',
                    projections: 'Proyecciones a 3, 6 y 12 meses',
                    detailedMetrics: 'Métricas detalladas de campaña'
                },
                benefits: {
                    title: 'Beneficios Clave',
                    items: [
                        'Identifica campañas rentables vs no rentables',
                        'Optimiza la distribución de tu presupuesto',
                        'Toma decisiones basadas en datos reales',
                        'Presenta resultados claros a stakeholders'
                    ]
                },
                cta: 'Usar Herramienta',
                stats: {
                    users: '10K+ usuarios',
                    time: '~2 min'
                },
                badge: '✓ 100% Gratuito'
            },
            persona: {
                title: 'Generador de Buyer Persona',
                subtitle: 'Crea Perfiles Detallados de tu Cliente Ideal',
                description: 'Desarrolla buyer personas completos con información demográfica, psicográfica, objetivos y pain points. Descarga en PDF para compartir con tu equipo y alinear todas las estrategias de marketing.',
                features: {
                    demographicProfiles: 'Perfiles demográficos completos',
                    goalsMotivations: 'Objetivos y motivaciones',
                    painPoints: 'Pain points identificados',
                    communicationChannels: 'Canales de comunicación preferidos'
                },
                benefits: {
                    title: 'Beneficios Clave',
                    items: [
                        'Personaliza tu mensaje de marketing',
                        'Mejora la segmentación de audiencia',
                        'Alinea a todo el equipo en el cliente ideal',
                        'Aumenta la efectividad de tus campañas'
                    ]
                },
                cta: 'Usar Herramienta',
                stats: {
                    users: '8K+ usuarios',
                    time: '~5 min'
                },
                badge: '✓ 100% Gratuito'
            },
            matrix: {
                title: 'Matriz de Priorización',
                subtitle: 'Organiza por Impacto vs Esfuerzo',
                description: 'Visualiza y prioriza tus tareas de marketing usando la metodología de impacto vs esfuerzo. Arrastra y suelta tareas entre cuadrantes para identificar quick wins y evitar desperdicios de recursos.',
                features: {
                    quickWins: 'Quick wins identificados',
                    dragDrop: 'Drag & drop intuitivo',
                    quadrants: 'Cuatro cuadrantes estratégicos',
                    visualPrioritization: 'Priorización visual instantánea'
                },
                benefits: {
                    title: 'Beneficios Clave',
                    items: [
                        'Enfócate en tareas de alto impacto',
                        'Evita desperdiciar tiempo en lo trivial',
                        'Mejora la productividad del equipo',
                        'Toma decisiones estratégicas rápidas'
                    ]
                },
                cta: 'Usar Herramienta',
                stats: {
                    users: '6K+ usuarios',
                    time: '~3 min'
                },
                badge: '✓ 100% Gratuito'
            },
            quiz: {
                title: 'Quiz de Estrategia Digital',
                subtitle: 'Evalúa y Mejora tu Marketing',
                description: 'Responde 20 preguntas estratégicas para obtener un diagnóstico completo de tu madurez digital. Recibe recomendaciones personalizadas basadas en tus respuestas para mejorar cada área.',
                features: {
                    strategicQuestions: '20 preguntas estratégicas',
                    detailedScore: 'Puntuación detallada',
                    personalizedRecommendations: 'Recomendaciones personalizadas',
                    improvementPlan: 'Plan de mejora claro'
                },
                benefits: {
                    title: 'Beneficios Clave',
                    items: [
                        'Identifica fortalezas y debilidades',
                        'Obtén un roadmap de mejora',
                        'Compara con benchmarks del sector',
                        'Prioriza las áreas de mayor impacto'
                    ]
                },
                cta: 'Usar Herramienta',
                stats: {
                    users: '12K+ usuarios',
                    time: '~4 min'
                },
                badge: '✓ 100% Gratuito'
            },
            why: {
                title: '¿Por Qué Elegirnos?',
                subtitle: 'Diseñado para Marketers Exigentes',
                description: 'Cada detalle ha sido pensado para ofrecerte la mejor experiencia. Herramientas que realmente funcionan, sin complicaciones.',
                features: [
                    {
                        title: 'Resultados Instantáneos',
                        description: 'Sin esperas, sin procesos largos. Obtén insights y análisis en segundos para tomar decisiones rápidas.'
                    },
                    {
                        title: 'Sin Registro Requerido',
                        description: 'Usa todas las herramientas sin crear cuenta. Tu privacidad es importante, no recopilamos datos personales.'
                    },
                    {
                        title: 'Ahorra Tiempo Valioso',
                        description: 'Automatiza cálculos complejos y genera documentos profesionales en minutos, no en horas.'
                    },
                    {
                        title: '100% Gratuito Siempre',
                        description: 'Sin planes premium, sin límites de uso, sin costos ocultos. Acceso completo a todas las funcionalidades.'
                    },
                    {
                        title: 'Basado en Mejores Prácticas',
                        description: 'Metodologías probadas por expertos en marketing digital, aplicadas en miles de empresas exitosas.'
                    },
                    {
                        title: 'Acceso desde Cualquier Dispositivo',
                        description: 'Diseño responsive optimizado para desktop, tablet y móvil. Trabaja desde donde estés.'
                    }
                ],
                stats: [
                    { value: '50K+', label: 'Herramientas usadas' },
                    { value: '4.8', label: 'Satisfacción promedio' },
                    { value: '15K+', label: 'Marketers activos' },
                    { value: '99.9%', label: 'Uptime garantizado' }
                ]
            },
            howItWorks: {
                badge: 'Proceso Simple',
                title: '¿Cómo Funciona?',
                subtitle: 'En solo 4 pasos simples, obtén insights valiosos para tu estrategia de marketing. Sin curva de aprendizaje, sin complicaciones.',
                steps: [
                    {
                        number: '01',
                        title: 'Selecciona tu Herramienta',
                        description: 'Elige entre nuestra suite de 4 herramientas especializadas según tu necesidad actual.',
                        items: [
                            'ROI Calculator para análisis de campañas',
                            'Buyer Persona para conocer tu audiencia',
                            'Matriz de Priorización para organizar tareas',
                            'Quiz de Estrategia para diagnóstico'
                        ]
                    },
                    {
                        number: '02',
                        title: 'Ingresa tus Datos',
                        description: 'Completa los campos con información de tu negocio. Interfaces intuitivas guían cada paso.',
                        items: [
                            'Formularios claros y directos',
                            'Ejemplos y tooltips de ayuda',
                            'Validación en tiempo real',
                            'Sin datos técnicos complicados'
                        ]
                    },
                    {
                        number: '03',
                        title: 'Obtén Resultados Accionables',
                        description: 'Recibe análisis detallados, recomendaciones y documentos listos para usar o compartir.',
                        items: [
                            'Métricas calculadas automáticamente',
                            'Gráficos y visualizaciones',
                            'Exportación a PDF disponible',
                            'Recomendaciones personalizadas'
                        ]
                    },
                    {
                        number: '04',
                        title: 'Itera y Mejora',
                        description: 'Vuelve a usar las herramientas cuando quieras para seguir optimizando tu estrategia.',
                        items: [
                            'Uso ilimitado siempre',
                            'Compara resultados históricos',
                            'Ajusta variables al instante',
                            'Evoluciona tu estrategia'
                        ]
                    }
                ]
            },
            faq: {
                badge: 'Preguntas Frecuentes',
                title: '¿Tienes Dudas? Te Respondemos',
                subtitle: 'Encuentra respuestas a las preguntas más comunes sobre nuestras herramientas de marketing digital.',
                questions: [
                    {
                        q: '¿Las herramientas son realmente gratuitas?',
                        a: 'Sí, 100% gratuitas para siempre. No hay planes premium, límites de uso ni costos ocultos. Todas las funcionalidades están disponibles para todos sin restricciones.'
                    },
                    {
                        q: '¿Necesito crear una cuenta para usar las herramientas?',
                        a: 'No. Puedes usar todas las herramientas de inmediato sin registro. No requerimos datos personales ni email. Tu privacidad es importante para nosotros.'
                    },
                    {
                        q: '¿Mis datos están seguros?',
                        a: 'Absolutamente. No almacenamos ningún dato que ingreses. Todos los cálculos se realizan en tu navegador en tiempo real y nada se envía a servidores externos.'
                    },
                    {
                        q: '¿Qué es el ROI y por qué es importante calcularlo?',
                        a: 'El ROI (Retorno de Inversión) mide cuánto ganas por cada dólar invertido en publicidad. Calcularlo te ayuda a identificar qué campañas son rentables y optimizar tu presupuesto de marketing.'
                    },
                    {
                        q: '¿Qué es un Buyer Persona y para qué sirve?',
                        a: 'Un Buyer Persona es un perfil detallado de tu cliente ideal. Te ayuda a personalizar tu mensaje, mejorar la segmentación y alinear a todo tu equipo en quién es tu target.'
                    },
                    {
                        q: '¿Cómo funciona la Matriz de Priorización?',
                        a: 'Usa la metodología de Impacto vs Esfuerzo para clasificar tareas en 4 cuadrantes: Quick Wins, Proyectos Grandes, Tareas Menores y Evitar. Esto te ayuda a enfocarte en lo que realmente importa.'
                    },
                    {
                        q: '¿El Quiz de Estrategia Digital es preciso?',
                        a: 'Sí, está basado en metodologías probadas usadas por expertos en marketing. Las preguntas evalúan áreas clave de tu estrategia digital y brindan recomendaciones personalizadas según tus respuestas.'
                    },
                    {
                        q: '¿Puedo usar estas herramientas para mi agencia o clientes?',
                        a: '¡Por supuesto! Las herramientas están diseñadas para marketers, agencias y empresas. Puedes usarlas todas las veces que necesites para diferentes proyectos y clientes.'
                    },
                    {
                        q: '¿Con qué frecuencia se actualizan las herramientas?',
                        a: 'Las actualizamos constantemente basándonos en feedback de usuarios y mejores prácticas en marketing digital. Se añaden nuevas funciones y mejoras regularmente.'
                    },
                    {
                        q: '¿Funcionan en dispositivos móviles?',
                        a: 'Sí, todas las herramientas son completamente responsive y optimizadas para móvil, tablet y desktop. Puedes usarlas desde cualquier dispositivo con conexión a internet.'
                    }
                ]
            },
            cta: {
                badge: 'Empieza Hoy, Es Gratis',
                title: '¿Listo para Optimizar',
                titleHighlight: 'tu Marketing Digital?',
                subtitle: 'Únete a miles de marketers que ya están tomando mejores decisiones con nuestras herramientas. Sin registro, sin costos, solo resultados.',
                toolLabels: {
                    roi: 'ROI',
                    persona: 'Persona',
                    matrix: 'Matriz',
                    quiz: 'Quiz'
                },
                button: 'Comenzar Ahora — Es Gratis',
                trustBadges: '✓ Sin registro requerido  •  ✓ Sin costos ocultos  •  ✓ Uso ilimitado'
            },
            footer: {
                title: 'Marketing Tools',
                description: 'Suite de herramientas gratuitas para marketers. Calcula ROI, crea buyer personas, prioriza tareas y evalúa tu estrategia digital. Todo sin registro y sin costos.',
                tagline: 'Hecho con ♥ para marketers de todo el mundo',
                sections: {
                    tools: 'Herramientas',
                    resources: 'Recursos'
                },
                links: {
                    allTools: 'Todas las Herramientas',
                    howItWorks: 'Cómo Funciona',
                    faq: 'Preguntas Frecuentes'
                },
                copyright: '© 2026 Marketing Tools. Todos los derechos reservados.',
                taglineBottom: 'Herramientas 100% gratuitas para siempre'
            },
            // Traducciones Internas de Páginas de Herramientas
            pages: {
                roiCalculator: {
                    campaignData: 'Datos de la Campaña',
                    totalInvestment: 'Inversión Total',
                    generatedRevenue: 'Ingresos Generados',
                    conversions: 'Conversiones',
                    totalClicks: 'Clics Totales',
                    tooltips: {
                        investment: 'El monto total invertido en tu campaña publicitaria',
                        revenue: 'Total de ingresos atribuidos a esta campaña',
                        conversions: 'Número de acciones completadas (ventas, leads, etc.)',
                        clicks: 'Total de clics recibidos en tus anuncios'
                    },
                    insights: {
                        excellent: 'ROI Excelente. Tu campaña es muy rentable.',
                        good: 'ROI Bueno. Estás duplicando tu inversión.',
                        acceptable: 'ROI Aceptable. Hay espacio para optimizar.',
                        low: 'ROI Bajo. Considera ajustar tu estrategia.',
                        negative: 'ROI Negativo. La campaña está generando pérdidas.'
                    },
                    returnOnInvestment: 'Retorno de Inversión',
                    profitableCampaign: 'Campaña Rentable',
                    unprofitableCampaign: 'Campaña No Rentable',
                    profitLoss: 'Ganancia/Pérdida:',
                    cpa: 'CPA',
                    cpaDescription: 'Costo por Adquisición',
                    conversionRate: 'Tasa de Conversión',
                    conversionRateDescription: 'De clics a conversiones',
                    cpc: 'CPC',
                    cpcDescription: 'Costo por Clic',
                    valuePerConversion: 'Valor por Conversión',
                    valuePerConversionDescription: 'Ingreso promedio',
                    profitProjections: 'Proyecciones de Ganancia',
                    months3: '3 meses',
                    months6: '6 meses',
                    months12: '12 meses',
                    howToInterpret: '¿Cómo interpretar estas métricas?',
                    roiTitle: 'ROI (Retorno de Inversión)',
                    roiDesc: 'Mide cuánto ganas por cada dólar invertido. Un ROI de 100% significa que duplicas tu inversión. Busca ROI arriba de 100% para campañas rentables.',
                    cpaTitle: 'CPA (Costo por Adquisición)',
                    cpaDesc: 'El costo promedio para obtener una conversión. Compáralo con tu margen de ganancia: si tu CPA es mayor que tu margen, estás perdiendo dinero.',
                    conversionRateTitle: 'Tasa de Conversión',
                    conversionRateDesc: 'Porcentaje de clics que se convierten en acciones. Una tasa de 2-5% es típica para e-commerce. Tasas mayores indican buena segmentación.',
                    cpcTitle: 'CPC (Costo por Clic)',
                    cpcDesc: 'Lo que pagas por cada visita. Varía según industria y competencia. Un CPC bajo con alta conversión es el escenario ideal.'
                },
                buyerPersona: {
                    completed: 'Completado',
                    tabs: {
                        info: 'Info',
                        goals: 'Objetivos',
                        pain: 'Pain',
                        channels: 'Canales'
                    },
                    personaName: 'Nombre del Persona',
                    personaNamePlaceholder: 'Ej: María Emprendedora',
                    age: 'Edad',
                    agePlaceholder: 'Ej: 35',
                    gender: 'Género',
                    genderSelect: 'Seleccionar',
                    male: 'Masculino',
                    female: 'Femenino',
                    other: 'Otro',
                    preferNotToSay: 'Prefiero no decir',
                    occupation: 'Ocupación',
                    occupationPlaceholder: 'Ej: Directora de Marketing',
                    income: 'Ingresos',
                    incomePlaceholder: 'Ej: $50,000 - $80,000',
                    education: 'Educación',
                    educationPlaceholder: 'Ej: Licenciatura en Administración de Empresas',
                    location: 'Ubicación',
                    locationPlaceholder: 'Ej: Ciudad de México, México',
                    bio: 'Biografía',
                    bioPlaceholder: 'Describe brevemente quién es esta persona, su día a día, intereses y comportamientos...',
                    goals: 'Objetivos y Motivaciones',
                    goalsPlaceholder: 'Ej: Aumentar la visibilidad de su marca...',
                    painPoints: 'Pain Points y Desafíos',
                    painPointsPlaceholder: 'Ej: Presupuesto limitado para publicidad...',
                    motivations: 'Motivaciones Principales',
                    motivationsPlaceholder: 'Ej: Lograr independencia financiera...',
                    preferredChannels: 'Canales de Comunicación Preferidos',
                    downloadPDF: 'Descargar PDF',
                    whyCreate: '¿Por qué crear Buyer Personas?',
                    personalizeMessage: 'Personaliza tu Mensaje',
                    personalizeMessageDesc: 'Conociendo a tu cliente ideal, puedes crear contenido y mensajes que resuenen directamente con sus necesidades y deseos.',
                    improveSegmentation: 'Mejora tu Segmentación',
                    improveSegmentationDesc: 'Define mejor tus audiencias en plataformas de publicidad para alcanzar exactamente a quien quieres.',
                    alignTeam: 'Alinea a tu Equipo',
                    alignTeamDesc: 'Todo el equipo trabaja con la misma visión del cliente, desde ventas hasta servicio al cliente.',
                    increaseConversions: 'Aumenta las Conversiones',
                    increaseConversionsDesc: 'Al entender los pain points, puedes ofrecer soluciones precisas que convierten mejor.'
                },
                priorityMatrix: {
                    newTask: 'Escribe una nueva tarea de marketing...',
                    add: 'Agregar',
                    lowEffort: '← Bajo Esfuerzo',
                    highEffort: 'Alto Esfuerzo →',
                    highImpact: 'Alto Impacto ↑',
                    lowImpact: '↓ Bajo Impacto',
                    quickWins: 'Quick Wins',
                    quickWinsDesc: 'Alto impacto, bajo esfuerzo',
                    quickWinsCount: 'tareas',
                    dragHere: 'Arrastra tareas aquí',
                    majorProjects: 'Proyectos Grandes',
                    majorProjectsDesc: 'Alto impacto, alto esfuerzo',
                    minorTasks: 'Tareas Menores',
                    minorTasksDesc: 'Bajo impacto, bajo esfuerzo',
                    avoid: 'Evitar',
                    avoidDesc: 'Bajo impacto, alto esfuerzo',
                    totalTasks: 'Total de tareas',
                    howToUse: '¿Cómo usar la Matriz de Priorización?',
                    step1: '1',
                    step1Title: 'Quick Wins',
                    step1Desc: 'Tareas que generan grandes resultados con poco trabajo. ¡Hazlas primero!',
                    step2: '2',
                    step2Title: 'Proyectos Grandes',
                    step2Desc: 'Iniciativas importantes que requieren planeación. Programa y ejecuta.',
                    step3: '3',
                    step3Title: 'Tareas Menores',
                    step3Desc: 'Tareas sencillas que pueden delegarse o hacerse en tiempos muertos.',
                    step4: '4',
                    step4Title: 'Evitar',
                    step4Desc: 'Consumen tiempo sin generar valor. Elimínalas o automatízalas.',
                    proTip: '💡 Pro Tip',
                    proTipDesc: 'Revisa tu matriz cada semana. Las prioridades cambian y lo que era un "proyecto grande" puede convertirse en un "quick win" si encuentras una mejor forma de hacerlo, o viceversa.'
                },
                footer: {
                    freeToolmark: 'Herramienta 100% gratuita — Sin registro requerido',
                    viewAllTools: 'Ver todas las herramientas →'
                },
                strategyQuiz: {
                    step: 'Paso',
                    of: 'de',
                    question: 'Pregunta',
                    back: 'Atrás',
                    next: 'Siguiente',
                    viewResult: 'Ver resultado',
                    yourRecommendedStrategy: 'Tu estrategia recomendada',
                    restartQuiz: 'Empezar de nuevo',
                    scheduleConsultation: 'Agendar consultoría',
                    title: 'Quiz de Estrategia',
                    subtitle: 'Descubre qué tipo de estrategia de marketing necesitas en este momento. Responde 20 preguntas rápidas.',
                    questions: [
                        {
                            id: 'objective',
                            text: '¿Cuál es tu objetivo principal para este trimestre?',
                            description: 'Elige el objetivo que mejor represente tu prioridad.',
                            options: [
                                { id: 'leads', label: 'Generar más leads calificados', value: 'performance' },
                                { id: 'brand', label: 'Aumentar reconocimiento de marca', value: 'branding' },
                                { id: 'retention', label: 'Mejorar retención y LTV', value: 'product' },
                                { id: 'revenue', label: 'Incrementar ingresos inmediatos', value: 'performance' },
                                { id: 'expansion', label: 'Expandir a nuevos mercados', value: 'branding' },
                            ],
                        },
                        {
                            id: 'stage',
                            text: '¿En qué etapa está tu negocio?',
                            description: 'Esto nos ayuda a ajustar las tácticas al contexto.',
                            options: [
                                { id: 'early', label: 'Pre-producto o validación', value: 'product' },
                                { id: 'growing', label: 'Crecimiento acelerado', value: 'performance' },
                                { id: 'mature', label: 'Marca consolidada', value: 'branding' },
                                { id: 'pivot', label: 'En proceso de pivot o relanzamiento', value: 'product' },
                                { id: 'scale', label: 'Scaling con producto validado', value: 'performance' },
                            ],
                        },
                        {
                            id: 'channel',
                            text: '¿Qué canales han funcionado mejor hasta ahora?',
                            description: 'Selecciona el canal más consistente.',
                            options: [
                                { id: 'ads', label: 'Ads (Meta/Google/TikTok)', value: 'performance' },
                                { id: 'content', label: 'Contenido orgánico (SEO/YouTube/Newsletter)', value: 'branding' },
                                { id: 'referrals', label: 'Referencias o partnerships', value: 'product' },
                                { id: 'sales', label: 'Outbound o equipo de ventas', value: 'performance' },
                                { id: 'social', label: 'Redes sociales orgánicas', value: 'branding' },
                            ],
                        },
                        {
                            id: 'resource',
                            text: '¿Cuál es tu mayor limitación actualmente?',
                            description: 'Identifica el principal bloqueo para priorizar.',
                            options: [
                                { id: 'budget', label: 'Presupuesto limitado', value: 'performance' },
                                { id: 'time', label: 'Falta de tiempo/equipo', value: 'product' },
                                { id: 'awareness', label: 'Baja notoriedad de marca', value: 'branding' },
                                { id: 'convertion', label: 'Baja conversión en funnel', value: 'performance' },
                                { id: 'retention', label: 'Alta tasa de churn', value: 'product' },
                            ],
                        },
                        {
                            id: 'audience',
                            text: '¿Qué tan bien conoces a tu audiencia?',
                            description: 'Evalúa tu nivel de conocimiento del cliente ideal.',
                            options: [
                                { id: 'very_well', label: 'Muy bien - Tenemos buyer personas detallados', value: 'performance' },
                                { id: 'somewhat', label: 'Algo - Conocemos demografía básica', value: 'branding' },
                                { id: 'limited', label: 'Limitado - Estamos descubriendo', value: 'product' },
                                { id: 'assumptions', label: 'Basado en suposiciones', value: 'product' },
                                { id: 'data_driven', label: 'Basado en datos y comportamiento real', value: 'performance' },
                            ],
                        },
                        {
                            id: 'content',
                            text: '¿Con qué frecuencia publicas contenido?',
                            description: 'Evalúa tu actividad de contenido actual.',
                            options: [
                                { id: 'daily', label: 'Diariamente en múltiples canales', value: 'branding' },
                                { id: 'weekly', label: 'Semanalmente de forma consistente', value: 'branding' },
                                { id: 'sporadic', label: 'De forma esporádica', value: 'product' },
                                { id: 'rarely', label: 'Rara vez o nunca', value: 'performance' },
                                { id: 'planned', label: 'Tenemos un calendario editorial', value: 'branding' },
                            ],
                        },
                        {
                            id: 'competition',
                            text: '¿Cómo es tu mercado actual?',
                            description: 'Identifica el nivel de competencia.',
                            options: [
                                { id: 'saturated', label: 'Muy saturado - Muchos competidores', value: 'branding' },
                                { id: 'competitive', label: 'Competitivo pero hay espacio', value: 'performance' },
                                { id: 'emerging', label: 'Mercado emergente - Pocos players', value: 'product' },
                                { id: 'niche', label: 'Nicho específico con poca competencia', value: 'branding' },
                                { id: 'dominated', label: 'Dominado por 1-2 grandes marcas', value: 'branding' },
                            ],
                        },
                        {
                            id: 'data',
                            text: '¿Cómo manejas los datos de marketing?',
                            description: 'Evalúa tu capacidad analítica actual.',
                            options: [
                                { id: 'advanced', label: 'Dashboards avanzados y análisis predictivo', value: 'performance' },
                                { id: 'basic', label: 'Analytics básicos (GA, Meta Insights)', value: 'performance' },
                                { id: 'manual', label: 'Revisión manual ocasional', value: 'product' },
                                { id: 'minimal', label: 'Datos mínimos o sin tracking', value: 'product' },
                                { id: 'automated', label: 'Reportes automatizados semanales', value: 'performance' },
                            ],
                        },
                        {
                            id: 'customer_journey',
                            text: '¿Cómo es tu funnel de conversión?',
                            description: 'Describe tu proceso de venta típico.',
                            options: [
                                { id: 'short', label: 'Corto - Compra impulsiva o directa', value: 'performance' },
                                { id: 'medium', label: 'Medio - 2-3 touchpoints antes de comprar', value: 'branding' },
                                { id: 'long', label: 'Largo - Múltiples interacciones y nurturing', value: 'branding' },
                                { id: 'complex', label: 'Complejo - Requiere demos o pruebas', value: 'product' },
                                { id: 'undefined', label: 'Aún no está bien definido', value: 'product' },
                            ],
                        },
                        {
                            id: 'value_prop',
                            text: '¿Qué tan clara es tu propuesta de valor?',
                            description: 'Evalúa la claridad de tu mensaje principal.',
                            options: [
                                { id: 'crystal', label: 'Cristalina - La comunicamos constantemente', value: 'branding' },
                                { id: 'clear', label: 'Clara - Pero necesita refuerzo', value: 'branding' },
                                { id: 'confusing', label: 'Algo confusa - Necesita simplificación', value: 'product' },
                                { id: 'evolving', label: 'En evolución - Estamos iterando', value: 'product' },
                                { id: 'differentiated', label: 'Muy diferenciada del mercado', value: 'branding' },
                            ],
                        },
                        {
                            id: 'team',
                            text: '¿Qué recursos de marketing tienes?',
                            description: 'Evalúa tu capacidad de ejecución actual.',
                            options: [
                                { id: 'full_team', label: 'Equipo completo de marketing', value: 'branding' },
                                { id: 'marketer', label: '1-2 marketers dedicados', value: 'performance' },
                                { id: 'part_time', label: 'Alguien part-time o freelancers', value: 'performance' },
                                { id: 'founder', label: 'Solo el founder/equipo interno', value: 'product' },
                                { id: 'agency', label: 'Trabajamos con agencia externa', value: 'branding' },
                            ],
                        },
                        {
                            id: 'automation',
                            text: '¿Qué tan automatizado está tu marketing?',
                            description: 'Mide tu nivel de automatización.',
                            options: [
                                { id: 'highly', label: 'Altamente - Email flows, retargeting, CRM', value: 'performance' },
                                { id: 'partially', label: 'Parcialmente - Algunas herramientas básicas', value: 'performance' },
                                { id: 'manual', label: 'Mayormente manual', value: 'product' },
                                { id: 'none', label: 'Sin automatización', value: 'product' },
                                { id: 'advanced', label: 'Marketing automation avanzado', value: 'performance' },
                            ],
                        },
                        {
                            id: 'social_presence',
                            text: '¿Cómo describirías tu presencia en redes sociales?',
                            description: 'Evalúa tu actividad social actual.',
                            options: [
                                { id: 'strong', label: 'Fuerte - Engagement alto y consistente', value: 'branding' },
                                { id: 'growing', label: 'En crecimiento - Mejorando steadily', value: 'branding' },
                                { id: 'weak', label: 'Débil - Poca actividad o engagement', value: 'product' },
                                { id: 'nonexistent', label: 'Casi inexistente', value: 'product' },
                                { id: 'focused', label: 'Enfocados en 1-2 canales principales', value: 'performance' },
                            ],
                        },
                        {
                            id: 'seo',
                            text: '¿Cuál es tu situación de SEO actual?',
                            description: 'Evalúa tu visibilidad en búsquedas orgánicas.',
                            options: [
                                { id: 'ranking', label: 'Rankeamos en primeras posiciones', value: 'branding' },
                                { id: 'improving', label: 'Mejorando posiciones gradualmente', value: 'branding' },
                                { id: 'basic', label: 'Tenemos lo básico pero sin estrategia', value: 'product' },
                                { id: 'neglected', label: 'No hemos trabajado SEO', value: 'product' },
                                { id: 'investing', label: 'Invirtiendo activamente en contenido SEO', value: 'branding' },
                            ],
                        },
                        {
                            id: 'email',
                            text: '¿Cómo usas el email marketing?',
                            description: 'Evalúa tu estrategia de email.',
                            options: [
                                { id: 'strategic', label: 'Estratégicamente - Segmentación y nurturing', value: 'performance' },
                                { id: 'regular', label: 'Newsletters regulares', value: 'branding' },
                                { id: 'occasional', label: 'Envíos ocasionales sin plan', value: 'product' },
                                { id: 'minimal', label: 'Apenas usamos email', value: 'product' },
                                { id: 'automated', label: 'Flows automatizados de conversión', value: 'performance' },
                            ],
                        },
                        {
                            id: 'paid_ads',
                            text: '¿Cuál es tu experiencia con paid ads?',
                            description: 'Evalúa tu madurez en publicidad paga.',
                            options: [
                                { id: 'expert', label: 'Expertos - Optimizamos constantemente', value: 'performance' },
                                { id: 'intermediate', label: 'Intermedio - Campañas activas y rentables', value: 'performance' },
                                { id: 'beginner', label: 'Principiante - Probando con presupuesto bajo', value: 'product' },
                                { id: 'none', label: 'No hemos invertido en ads', value: 'branding' },
                                { id: 'testing', label: 'Testing múltiples plataformas', value: 'performance' },
                            ],
                        },
                        {
                            id: 'brand_awareness',
                            text: '¿Cómo es el reconocimiento de tu marca?',
                            description: 'Evalúa qué tan conocida es tu marca.',
                            options: [
                                { id: 'high', label: 'Alto - Nos conocen en el sector', value: 'branding' },
                                { id: 'moderate', label: 'Moderado - Algunos nos conocen', value: 'branding' },
                                { id: 'low', label: 'Bajo - Pocas personas saben de nosotros', value: 'product' },
                                { id: 'emerging', label: 'Emergente - Construyendo reputación', value: 'branding' },
                                { id: 'niche', label: 'Muy conocidos en nicho específico', value: 'performance' },
                            ],
                        },
                        {
                            id: 'customer_feedback',
                            text: '¿Cómo recoges feedback de clientes?',
                            description: 'Evalúa tu sistema de escucha.',
                            options: [
                                { id: 'systematic', label: 'Sistemáticamente - Encuestas y análisis', value: 'product' },
                                { id: 'regular', label: 'Regularmente - Conversaciones directas', value: 'product' },
                                { id: 'sporadic', label: 'Esporádicamente - Sin proceso formal', value: 'performance' },
                                { id: 'reactive', label: 'Solo cuando hay problemas', value: 'product' },
                                { id: 'data_driven', label: 'Basado en datos de comportamiento', value: 'performance' },
                            ],
                        },
                        {
                            id: 'innovation',
                            text: '¿Qué tan innovador es tu marketing?',
                            description: 'Evalúa tu capacidad de experimentación.',
                            options: [
                                { id: 'pioneer', label: 'Pioneros - Siempre probando cosas nuevas', value: 'branding' },
                                { id: 'early_adopter', label: 'Early adopters - Adoptamos tendencias pronto', value: 'branding' },
                                { id: 'follower', label: 'Seguidores - Aplicamos lo que funciona', value: 'performance' },
                                { id: 'conservative', label: 'Conservadores - Solo tácticas probadas', value: 'performance' },
                                { id: 'testing', label: 'Constantemente testing A/B', value: 'performance' },
                            ],
                        },
                        {
                            id: 'goals',
                            text: '¿Cómo mides el éxito de tu marketing?',
                            description: 'Identifica tus KPIs principales.',
                            options: [
                                { id: 'revenue', label: 'Revenue y ROI directo', value: 'performance' },
                                { id: 'leads', label: 'Cantidad y calidad de leads', value: 'performance' },
                                { id: 'awareness', label: 'Alcance y brand awareness', value: 'branding' },
                                { id: 'engagement', label: 'Engagement y comunidad', value: 'branding' },
                                { id: 'retention', label: 'Retención y customer lifetime value', value: 'product' },
                            ],
                        },
                    ],
                    strategyProfiles: {
                        performance: {
                            title: 'Estrategia Performance-Driven',
                            description: 'Optimiza conversiones y revenue inmediato con campañas orientadas a resultados.',
                            actions: [
                                'Duplica tus creatividades ganadoras y prueba 3 nuevas audiencias cada semana',
                                'Implementa CRO en landing principal y test A/B de oferta',
                                'Crea un sistema de retargeting con anuncios dinámicos',
                            ],
                            gradient: 'from-emerald-500 to-teal-500',
                        },
                        branding: {
                            title: 'Estrategia Brand-Led',
                            description: 'Construye autoridad y demanda a mediano plazo con contenido y comunidad.',
                            actions: [
                                'Lanza una serie de contenido en video enfocada en tu ICP',
                                'Crea lead magnets y activa newsletter semanal',
                                'Genera PR ligero: podcasts, guest posts, colaboraciones',
                            ],
                            gradient: 'from-indigo-500 to-purple-500',
                        },
                        product: {
                            title: 'Estrategia Product-Led',
                            description: 'Mejora la experiencia y retención para que el producto sea el principal motor de crecimiento.',
                            actions: [
                                'Implementa onboarding guiado y emails de activación',
                                'Mapea razones de churn y prioriza fixes rápidos',
                                'Activa loops virales simples: referidos o share-to-unlock',
                            ],
                            gradient: 'from-amber-500 to-orange-500',
                        },
                    }
                }
            }
        },
        // Página Recursos
        resources: {
            heading: 'RECURSOS',
            hero: {
                title: 'Recursos Profesionales',
                subtitle: 'Recursos que Transforman Estrategias',
                description: 'Herramientas listas para usar y conocimiento accionable. Todo lo que necesitas para llevar tu marketing y experiencia del cliente al siguiente nivel.',
                templates: 'Templates',
                guides: 'Guías',
                infographics: 'Infografías',
            },
            filters: {
                all: 'Todos los Recursos',
                template: 'Template',
                guide: 'Guía',
                infographic: 'Infografía',
            },
            sections: {
                templates: {
                    title: 'Templates',
                    subtitle: 'Plantillas profesionales listas para usar. Ahorra tiempo y trabaja como los expertos desde el día uno.',
                },
                guides: {
                    title: 'Guías',
                    subtitle: 'Conocimiento destilado en guías prácticas. Metodologías probadas explicadas paso a paso.',
                },
                infographics: {
                    title: 'Infografías',
                    subtitle: 'Información compleja visualizada de forma simple. Perfectas para consultar y compartir.',
                },
            },
            ctas: {
                downloadNow: 'Descargar Ahora',
                viewDetails: 'Ver Detalles',
                readInfographic: 'Leer Infografía',
                obtain: '¡Obtener Acceso Ahora!',
                preview: 'Vista Previa',
                readArticle: 'Leer Artículo',
                getFree: 'Obtener Gratis',
                getFor: 'Obtener por',
            },
            badges: {
                free: 'GRATIS',
                premium: 'PREMIUM',
            },
            labels: {
                free: 'Gratis',
                whyNeedIt: '¿Por qué lo necesitas?',
            },
            cta: {
                title: '¿Necesitas un Recurso Personalizado?',
                subtitle: 'Si necesitas un template específico, guía o consultoría para tu negocio, puedo ayudarte.',
                buttonCustom: 'Solicitar Recurso Personalizado',
                buttonContact: 'Contactar',
            },
            faq: {
                title: 'Preguntas Frecuentes',
                questions: [
                    {
                        q: '¿Cómo funcionan las descargas gratuitas?',
                        a: 'Los recursos gratuitos se pueden descargar inmediatamente sin necesidad de registro. Solo haz clic en "Descargar Ahora" y el archivo comenzará a descargarse automáticamente.',
                    },
                    {
                        q: '¿Qué métodos de pago aceptas?',
                        a: 'Los recursos premium se pueden adquirir a través de PayPal. Después del pago, recibirás el recurso inmediatamente por email.',
                    },
                    {
                        q: '¿Puedo solicitar un recurso personalizado?',
                        a: 'Sí! Si necesitas un template específico o una consultoría adaptada a tu negocio, contáctame a través del formulario al final de la página.',
                    },
                    {
                        q: '¿Ofreces soporte después de la compra?',
                        a: 'Sí, todos los recursos premium incluyen soporte por email para preguntas sobre su uso e implementación.',
                    },
                ],
            },
            payment: {
                title: 'Obtén tu Recurso',
                processing: 'Procesando Pago...',
                success: '¡Pago Exitoso!',
                instructions: 'Para obtener este recurso:',
                step1: 'Envía el pago vía PayPal',
                step2: 'Envía el comprobante de pago a:',
                step3: 'Recibirás el recurso en 24h',
                paypal: 'PayPal',
                email: 'Email',
                price: 'Precio',
                sendPayment: 'Enviar Pago',
                close: 'Cerrar',
            },
            preview: {
                whatsIncluded: 'Qué Incluye',
                whyUseful: '¿Por Qué es Útil?',
                preview: 'Vista Previa',
                close: 'Cerrar',
            },
            article: {
                notFound: 'Artículo no encontrado',
                backToResources: 'Volver a recursos',
                typeLabels: {
                    'cjm-template': 'Template CJM',
                    'foda-kit': 'Kit FODA',
                    'social-media-calendar': 'Calendario de Contenidos',
                    'nps-template': 'Dashboard NPS',
                    'content-grid': 'Estrategia de Contenidos',
                    'cjm-guide': 'Guía CJM',
                    'seo-local-guide': 'Guía SEO Local',
                    'linkedin-strategy': 'Estrategia LinkedIn',
                    'cx-metrics-guide': 'Métricas de CX',
                    'linkedin-post-anatomy': 'Infografía de Post',
                    'cx-optimization-process': 'Proceso CX',
                    'keyword-research': 'Investigación de Keywords',
                    'content-strategy': 'Estrategia de Contenidos',
                },
                defaultLabels: {
                    template: 'Template',
                    guide: 'Guía',
                    infographic: 'Infografía',
                },
            },
        },
    },
};

export function LanguageProvider({ children }) {
    // Read initial language from localStorage if available
    const getInitialLanguage = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const lang = window.localStorage.getItem('language');
            if (lang === 'en' || lang === 'es') return lang;
        }
        return 'es';
    };
    const [language, setLanguage] = useState(getInitialLanguage);


    const toggleLanguage = () => {
        setLanguage(prev => {
            const next = prev === 'en' ? 'es' : 'en';
            setCurrentLanguage(next);
            return next;
        });
    };

    // Keep localStorage in sync if language changes elsewhere
    useEffect(() => {
        setCurrentLanguage(language);
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, locale: language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
