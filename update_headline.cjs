const fs = require('fs');
let c = fs.readFileSync('src/data/projectDetails.js', 'utf8');

c = c.replace(
    /headline:\s*\{\s*es:\s*'Paid Media',\s*en:\s*'Paid Media'\s*\}/,
    "headline: { es: 'Paid Media & App Growth', en: 'Paid Media & App Growth' }"
);

c = c.replace(
    /role:\s*\{\s*es:\s*'Responsable de Paid Media',\s*en:\s*'Paid Media Manager'\s*\}/,
    "role: { es: 'Responsable de Paid Media / App Growth', en: 'Paid Media / App Growth Manager' }"
);

c = c.replace(
    /overview:\s*\{\s*es:\s*`Diseñé una estrategia de paid media full-funnel para EasyTruck.*?`,\s*en:\s*`I designed a full-funnel paid media strategy for EasyTruck.*?`\s*\}/s,
    "overview: { es: `Diseñé una estrategia de paid media full-funnel para EasyTruck, una app fintech enfocada en planificación financiera y gestión de gastos. El trabajo integró el diseño presupuestario, la arquitectura de audiencias por cohorte, implementación de deep links y testing creativo para crecer en instalaciones y empujar upgrades a membresía Premium en Meta Ads y Google Ads.`, en: `I designed a full-funnel paid media strategy for EasyTruck, a fintech app focused on financial planning and expense management. The work integrated budget design, cohort-based audience architecture, deep link implementation and creative testing to grow installs and push Premium membership upgrades across Meta Ads and Google Ads.` }"
);

fs.writeFileSync('src/data/projectDetails.js', c);
console.log("Updated headline, role, and overview successfully!");
