const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/image/original');
const outputDir = path.join(__dirname, 'src/image/optimized');

const sizes = [450, 900, 1900];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);

  sizes.forEach(size => {
    const outputPath = path.join(outputDir, `${baseName}-${size}w${ext}`);

    sharp(inputPath)
      .resize({ width: size })
      .toFile(outputPath)
      .then(() => {
        console.log(`✅ Resized ${file} to ${size}px`);
      })
      .catch(err => {
        console.error(`❌ Error resizing ${file} to ${size}px:`, err);
      });
  });
});
