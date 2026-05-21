const fs = require('fs');

const path = 'src/data/projectDetails.js';
let content = fs.readFileSync(path, 'utf8');

// The file format looks like:
// 'easytrack-reporte-financiero': { ... },
// 'easytruck-app-growth-campaigns': { ... },
// };

// I will parse the JS file by isolating the object or use regex to copy the sections and delete the second key. Wait, parsing JS is hard. I can isolate the string blocks since I know exactly where they are.

const fileEndSplit = "    'easytruck-app-growth-campaigns': {";
const splitContent = content.split(fileEndSplit);

if (splitContent.length === 2) {
    let growthContent = splitContent[1];
    
    // Extract sections from growthContent
    // The sections start at "        sections: [" and end at "        stats: ["
    const sectionsStart = growthContent.indexOf('        sections: [') + '        sections: ['.length;
    const statsStart = growthContent.indexOf('        ],', sectionsStart);
    
    // The inner sections objects
    const growthSections = growthContent.substring(sectionsStart, statsStart);

    // Now insert them into easytrack-reporte-financiero
    // The end of easytrack-reporte-financiero sections is roughly:
    //                     { src: '/easytrack/Presentación Informe Paid Media_page-0015.webp', caption: { es: 'Ruteo de Enlaces Parametrizados (UTM)', en: 'Parameterized Link Routing (UTM)' } }
    //                 ]
    //             }
    //         ],
    //         stats: [
    
    const searchTarget = "        stats: [\r\n            { value: '$20M', label: { es: 'Presupuesto Administrado'";
    const replaceTarget = searchTarget; // wait, needs to insert before this.
    // Let's use string replace on the target to append the growthSections
    
    // Actually, just find the `        ],` right before `        stats: [` in the easytrack block.
    // The easytrack block ends at the closing bracket of its sections array.
    const splitIndex = content.lastIndexOf('        ],\r\n        stats: [\r\n            { value: \'$20M\'');
    
    if (splitIndex !== -1) {
        // Find the trailing brace of the last section in easytrack-reporte-financiero
        // We know the last section is `display-campaign`.
        const easyTrackEndStr = "Parameterized Link Routing (UTM)' } }\r\n                ]\r\n            }";
        const insertPosition = content.indexOf(easyTrackEndStr) + easyTrackEndStr.length;
        
        // Ensure there is a comma
        let newContent = content.substring(0, insertPosition) + ',' + growthSections + content.substring(insertPosition);
        
        // Now remove 'easytruck-app-growth-campaigns' entirely
        const startOfGrowth = newContent.indexOf(",\r\n    'easytruck-app-growth-campaigns': {");
        if (startOfGrowth === -1) {
            console.log("Couldn't find start of growth to delete");
        } else {
            const endOfGrowth = newContent.indexOf("        ]\r\n    }\r\n};\r\n");
            
            // Adjust end pattern properly
            const finalEnd = newContent.indexOf("    }\r\n};", startOfGrowth);
            newContent = newContent.substring(0, startOfGrowth) + "\r\n};\r\n" + newContent.substring(finalEnd + 8);
            
            fs.writeFileSync(path, newContent, 'utf8');
            console.log("Merge completed successfully!");
        }
    } else {
        console.log("Could not find the stats block of easytrack.");
    }
} else {
    console.log("Could not find easytruck-app-growth-campaigns block.");
}
