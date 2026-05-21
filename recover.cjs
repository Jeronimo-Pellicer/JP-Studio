const fs = require('fs');

const appDataDir = 'C:\\Users\\jerop\\.gemini\\antigravity\\brain';
// I need the conversation ID. The <user_information> block gave me:
// Conversation ID: 42064a8d-075f-4177-bc9b-48df5a9bd68c
const logPath = `${appDataDir}\\42064a8d-075f-4177-bc9b-48df5a9bd68c\\.system_generated\\logs\\overview.txt`;

if (!fs.existsSync(logPath)) {
    console.error("Log file not found!");
    process.exit(1);
}

const lines = fs.readFileSync(logPath, 'utf8').split('\n');

let extractedLines = [];
let capturing = false;

for (let line of lines) {
    if (line.includes('File Path: `file:///c:/Users/jerop/JP-Studio/src/data/projectDetails.js`') || line.includes('File Path: `file:///c:/Users/jerop/JP-Studio/src/data/projectDetails.js`')) {
        // Find when it starts printing the file contents (after '<original_line>.')
        continue;
    }
    
    // Check if we hit the prefix "1:" or "728:"
    if (line.match(/^1:\s/)) {
        capturing = true;
    }
    
    if (capturing) {
        if (line.startsWith('The above content does NOT show the entire file contents') || line.startsWith('The above content shows the entire, complete file contents')) {
            capturing = false;
        } else {
            // Remove the line number prefix (e.g., "1: ")
            const match = line.match(/^\d+:\s?(.*)$/);
            if (match) {
                extractedLines.push(match[1]);
            }
        }
    }
}

// Write the first chunk
let fullContent = extractedLines.join('\n');

// Also extract lines 728-825 from the second view_file call
let extractedLines2 = [];
capturing = false;

for (let line of lines) {
    if (line.match(/^728:\s/)) {
        capturing = true;
    }
    if (capturing) {
        if (line.startsWith('The above content does NOT show the entire file contents') || line.startsWith('The above content shows the entire, complete file contents')) {
            capturing = false;
        } else {
            const match = line.match(/^\d+:\s?(.*)$/);
            if (match) {
                extractedLines2.push(match[1]);
            }
        }
    }
}

// Append chunk 2 and write to file
fullContent += '\n' + extractedLines2.join('\n');

// Now FIX the mojibake directly while it's in string format
const replacements = {
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡': 'á',
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©': 'é',
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­': 'í',
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³': 'ó',
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âº': 'ú',
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±': 'ñ',
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼': 'ü',
  'ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â°': 'É',
  'ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ': '-',
  'ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢': '•',
  'ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¿': '¿',
  'ÃƒÆ’Ã¢â‚¬Â°': 'É',
  'ÃƒÆ’Ã‚Â³': 'ó',
  'ÃƒÆ’Ã‚Â±': 'ñ',
  'ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢': '→',
  'Ã¡': 'á',
  'Ã©': 'é',
  'Ã­': 'í',
  'Ã³': 'ó',
  'Ãº': 'ú',
  'Ã±': 'ñ',
  'Ã¼': 'ü',
  'Ã¿': 'ÿ',
  'SÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â£o': 'São',
  'ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â gil': 'Ágil'
};

const keys = Object.keys(replacements).sort((a,b) => b.length - a.length);

keys.forEach(bad => {
    fullContent = fullContent.split(bad).join(replacements[bad]);
});

fs.writeFileSync('C:\\Users\\jerop\\JP-Studio\\src\\data\\projectDetails.js', fullContent, 'utf8');
console.log('Successfully recovered and fixed projectDetails.js');
