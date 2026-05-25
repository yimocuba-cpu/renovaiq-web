const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const width = 1200;
const height = 630;

// Crear SVG con diseño profesional
const svgImage = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f766e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#134e4a;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Fondo con gradiente -->
  <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>
  
  <!-- Patrón decorativo sutil -->
  <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.05)"/>
  <circle cx="${width - 100}" cy="${height - 100}" r="100" fill="rgba(255,255,255,0.05)"/>
  
  <!-- Logo/Marca RenovaIQ -->
  <text x="60" y="120" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#ffffff">
    RenovaIQ
  </text>
  
  <!-- Línea decorativa -->
  <line x1="60" y1="140" x2="300" y2="140" stroke="#ffffff" stroke-width="3" opacity="0.8"/>
  
  <!-- Texto principal -->
  <text x="60" y="320" font-family="Arial, sans-serif" font-size="56" font-weight="bold" fill="#ffffff">
    Bathroom Remodel
  </text>
  <text x="60" y="390" font-family="Arial, sans-serif" font-size="56" font-weight="bold" fill="#ffffff">
    Cost Calculator
  </text>
  
  <!-- Descripción -->
  <text x="60" y="470" font-family="Arial, sans-serif" font-size="24" fill="#e0f2f1">
    Get accurate estimates instantly • Free for USA homeowners
  </text>
  
  <!-- Elemento decorativo -->
  <rect x="${width - 200}" y="50" width="150" height="150" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.3" rx="10"/>
  <text x="${width - 150}" y="140" font-family="Arial, sans-serif" font-size="80" fill="#ffffff" opacity="0.1">✓</text>
</svg>
`;

async function generateOGImage() {
  try {
    const outputPath = path.join(__dirname, '../public/og-image.jpg');
    
    // Crear directorio public si no existe
    const publicDir = path.dirname(outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Convertir SVG a imagen JPG
    await sharp(Buffer.from(svgImage))
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    
    console.log(`✓ OG image created successfully at ${outputPath}`);
    console.log(`  Dimensions: 1200x630px`);
    console.log(`  Format: JPG (optimized for social media)`);
  } catch (error) {
    console.error('Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
