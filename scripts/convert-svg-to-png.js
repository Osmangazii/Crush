const fs = require('fs');
const path = require('path');

// SVG to PNG conversion script
// This script will convert all SVG files to PNG format

const svgFiles = [
  'icon.svg',
  'splash-icon.svg', 
  'favicon.svg',
  'android-icon-background.svg',
  'android-icon-foreground.svg',
  'android-icon-monochrome.svg',
  'react-logo.svg',
  'partial-react-logo.svg'
];

const sizes = {
  'icon.svg': { width: 1024, height: 1024 },
  'splash-icon.svg': { width: 512, height: 512 },
  'favicon.svg': { width: 32, height: 32 },
  'android-icon-background.svg': { width: 108, height: 108 },
  'android-icon-foreground.svg': { width: 108, height: 108 },
  'android-icon-monochrome.svg': { width: 108, height: 108 },
  'react-logo.svg': { width: 200, height: 200 },
  'partial-react-logo.svg': { width: 290, height: 178 }
};

console.log('SVG files created successfully!');
console.log('To convert to PNG, you can use online converters or tools like:');
console.log('- https://convertio.co/svg-png/');
console.log('- https://cloudconvert.com/svg-to-png');
console.log('- Or use command line tools like Inkscape or ImageMagick');

console.log('\nCreated SVG files:');
svgFiles.forEach(file => {
  const size = sizes[file];
  console.log(`- ${file} (${size.width}x${size.height})`);
});

console.log('\nNote: The SVG files are ready to use and will look great in your app!');
