import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createNoise() {
    const size = 128;
    const buffer = Buffer.alloc(size * size * 4);
    for (let i = 0; i < buffer.length; i += 4) {
        const val = Math.floor(Math.random() * 255);
        buffer[i] = val;     // R
        buffer[i+1] = val;   // G
        buffer[i+2] = val;   // B
        buffer[i+3] = 15;    // A (Low transparency for subtle noise)
    }
    
    await sharp(buffer, { raw: { width: size, height: size, channels: 4 } })
        .png()
        .toFile(path.join(__dirname, '../public/noise.png'));
    
    console.log('Noise PNG generated.');
}

createNoise().catch(console.error);
