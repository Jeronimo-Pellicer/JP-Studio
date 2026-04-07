import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const AVATAR_DIR = path.join(PUBLIC_DIR, 'avatars');

async function optimizeAvatars() {
    console.log('--- Optimizing Avatars ---');
    const files = fs.readdirSync(AVATAR_DIR).filter(f => f.endsWith('.png') && !f.includes('-small'));
    for (const file of files) {
        const inputPath = path.join(AVATAR_DIR, file);
        const fileName = path.parse(file).name;
        await sharp(inputPath).resize(64, 64).webp({ quality: 85 }).toFile(path.join(AVATAR_DIR, `${fileName}.webp`));
        await sharp(inputPath).resize(64, 64).png({ quality: 85 }).toFile(path.join(AVATAR_DIR, `${fileName}-small.png`));
        console.log(`Optimized ${file}`);
    }
}

async function extractAndOptimizeSvgImages() {
    console.log('--- Optimizing Large SVGs ---');
    const svgFiles = ['new-recursos.svg', 'new-glosario.svg', 'new-quiz.svg', 'laptop.svg'];
    
    for (const file of svgFiles) {
        const filePath = path.join(PUBLIC_DIR, file);
        if (!fs.existsSync(filePath)) continue;
        
        let content = fs.readFileSync(filePath, 'utf8');
        const match = content.match(/data:image\/png;base64,([^"]+)/);
        
        if (match) {
            const base64Data = match[1];
            const buffer = Buffer.from(base64Data, 'base64');
            const fileName = path.parse(file).name;
            const outputImageName = `${fileName}.webp`;
            const outputImagePath = path.join(PUBLIC_DIR, outputImageName);
            
            // Optimize extracted image
            await sharp(buffer)
                .webp({ quality: 80 })
                .toFile(outputImagePath);
            
            const statsBefore = fs.statSync(filePath).size;
            const statsAfter = fs.statSync(outputImagePath).size;
            
            console.log(`Extracted image from ${file}: ${Math.round(statsBefore/1024)}KB -> ${Math.round(statsAfter/1024)}KB (WebP)`);
            
            // We don't modify the SVG, we will just change the reference in the React components
            // because the SVG is just a wrapper for the image anyway.
        } else {
            console.log(`No base64 image found in ${file}, maybe it is a real vector SVG.`);
        }
    }
}

async function optimizeFlashCardImages() {
    console.log('--- Checking Flash Card Images ---');
    const cardImages = ['pos_conversion', 'decision_datos', 'innovacion_adapt', 'green_bonds'];
    for (const name of cardImages) {
        // Check if SVG exists, convert to WebP for performance
        const svgPath = path.join(PUBLIC_DIR, `${name}.svg`);
        if (fs.existsSync(svgPath)) {
            const webpPath = path.join(PUBLIC_DIR, `${name}.webp`);
            await sharp(svgPath)
                .webp({ quality: 85 })
                .toFile(webpPath);
            console.log(`Converted ${name}.svg to WebP`);
        }
    }
}

async function main() {
    await optimizeAvatars();
    await extractAndOptimizeSvgImages();
    await optimizeFlashCardImages();
}

main().catch(console.error);
