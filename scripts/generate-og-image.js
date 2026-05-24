#!/usr/bin/env node

/**
 * Script to generate Open Graph image (1200x630) for RenovaIQ
 * Usage: node scripts/generate-og-image.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT_PATH = path.join(__dirname, '../public/og-image.png');

// Brand colors from the design
const BRAND_BLUE = '#1e293b';      // slate-900
const ACCENT_CYAN = '#06b6d4';     // cyan-500
const TEXT_WHITE = '#ffffff';

async function generateOGImage() {
  try {
    // Create SVG template with RenovaIQ branding
    const svgImage = `
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <!-- Background gradient -->
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
          </linearGradient>
        </defs>
        
        <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradient)"/>
        
        <!-- Accent bar -->
        <rect x="0" y="0" width="8" height="${HEIGHT}" fill="${ACCENT_CYAN}"/>
        
        <!-- Main text: RenovaIQ -->
        <text 
          x="60" 
          y="180" 
          font-family="Arial, sans-serif" 
          font-size="72" 
          font-weight="bold" 
          fill="${TEXT_WHITE}"
          letter-spacing="2"
        >
          RenovaIQ
        </text>
        
        <!-- Accent line under RenovaIQ -->
        <rect x="60" y="210" width="200" height="4" fill="${ACCENT_CYAN}"/>
        
        <!-- Main heading -->
        <text 
          x="60" 
          y="320" 
          font-family="Arial, sans-serif" 
          font-size="56" 
          font-weight="600" 
          fill="${TEXT_WHITE}"
          letter-spacing="0.5"
        >
          Bathroom Remodel
        </text>
        
        <text 
          x="60" 
          y="390" 
          font-family="Arial, sans-serif" 
          font-size="56" 
          font-weight="600" 
          fill="${ACCENT_CYAN}"
          letter-spacing="0.5"
        >
          Cost Calculator
        </text>
        
        <!-- Tagline -->
        <text 
          x="60" 
          y="480" 
          font-family="Arial, sans-serif" 
          font-size="24" 
          fill="#cbd5e1"
          opacity="0.8"
        >
          Free estimates for USA homeowners
        </text>
        
        <!-- Decorative circles (right side) -->
        <circle cx="1000" cy="150" r="80" fill="${ACCENT_CYAN}" opacity="0.1"/>
        <circle cx="1100" cy="450" r="120" fill="${ACCENT_CYAN}" opacity="0.08"/>
      </svg>
    `;

    // Convert SVG to PNG
    await sharp(Buffer.from(svgImage))
      .png()
      .toFile(OUTPUT_PATH);

    console.log(`✅ OG Image generated successfully!`);
    console.log(`   Path: ${OUTPUT_PATH}`);
    console.log(`   Size: ${WIDTH}x${HEIGHT}px`);
    console.log(`   URL: /og-image.png`);
  } catch (error) {
    console.error('❌ Error generating OG image:', error.message);
    process.exit(1);
  }
}

generateOGImage();
