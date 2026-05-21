const fs = require('fs');

function testDecode() {
    const corrupted = "ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©"; // Should be 'é'
    let text = corrupted;

    // Try a few levels of latin1 -> utf8 decoding
    for (let i = 1; i <= 4; i++) {
        try {
            text = Buffer.from(text, 'latin1').toString('utf8');
            console.log(`Level ${i} decode:`, text);
        } catch (e) {
            console.error(e);
            break;
        }
    }
}

testDecode();
