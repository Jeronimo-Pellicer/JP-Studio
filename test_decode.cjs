const fs = require('fs');

const content = fs.readFileSync('src/data/projectDetails.js', 'utf8');

// Find a known bad line
const lines = content.split('\n');
const badLine = lines.find(l => l.includes('DesarrollÃƒ'));

console.log("Original bad line:", badLine.substring(0, 100));

let current = badLine;
for(let i = 1; i <= 4; i++) {
    try {
        current = Buffer.from(current, 'latin1').toString('utf8');
        console.log(`Level ${i} decode:`, current.substring(0, 100));
    } catch(e) {
        console.log(`Level ${i} error`, e.message);
    }
}
