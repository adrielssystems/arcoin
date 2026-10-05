const fs = require('fs');

let html = fs.readFileSync('public/index-vanguardia.html', 'utf-8');

// Extract body inner content
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Remove script tags at the bottom
bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');

// Convert class to className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// Convert HTML comments to JSX comments
bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Self close void elements roughly
const voidTags = ['img', 'br', 'hr', 'input', 'link', 'meta'];
voidTags.forEach(tag => {
  const regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'g');
  bodyContent = bodyContent.replace(regex, '<' + tag + '$1 />');
});

// Fix image source
bodyContent = bodyContent.replace(/https:\/\/lh3.googleusercontent.com[^\s<]*/g, '/hero-bg.jpg');

// Logo image logic
bodyContent = bodyContent.replace(/<div className=\"w-10 h-10 rounded-lg bg-primary-container text-white flex items-center justify-center font-orbitron font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform\">\s*A\s*<\/div>/g, '<img src=\"/logo.jpg\" alt=\"Arcoin Logo\" className=\"h-10 w-auto mix-blend-multiply group-hover:scale-105 transition-transform\" />');

// Remove extra closing tag that might break JSX if any, but since the source is valid HTML it should be fine.

const jsx = `import React from 'react';

export default function App() {
  return (
    <div className="bg-surface-bright text-on-surface technical-grid min-h-screen selection:bg-primary-container selection:text-white antialiased overflow-x-hidden">
      ${bodyContent}
    </div>
  );
}
`;

fs.writeFileSync('src/App.tsx', jsx);

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf-8');
if(!indexHtml.includes('favicon')) {
  indexHtml = indexHtml.replace('</head>', '  <link rel="icon" type="image/jpeg" href="/logo.jpg" />\n  </head>');
}
if(!indexHtml.includes('Material+Symbols')) {
    indexHtml = indexHtml.replace('</head>', '  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Orbitron:wght@600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />\n</head>');
}
fs.writeFileSync('index.html', indexHtml);

const cssAdditions = `
@theme {
  --color-on-primary-fixed: #000c61;
  --color-secondary: #5a5f66;
  --color-surface-bright: #f8f9ff;
  --color-error-container: #ffdad6;
  --color-secondary-container: #dbe0e9;
  --color-on-primary-container: #8e9bf8;
  --color-on-tertiary: #ffffff;
  --color-tertiary-fixed-dim: #93ccff;
  --color-tertiary-fixed: #cce5ff;
  --color-primary-fixed-dim: #bcc2ff;
  --color-surface-container: #eaeef8;
  --color-inverse-on-surface: #edf1fb;
  --color-surface: #f8f9ff;
  --color-error: #ba1a1a;
  --color-primary: #021371;
  --color-on-background: #171c23;
  --color-on-primary: #ffffff;
  --color-tertiary-container: #003c5e;
  --color-on-tertiary-fixed-variant: #004b73;
  --color-secondary-fixed-dim: #c2c7cf;
  --color-inverse-surface: #2c3138;
  --color-on-surface-variant: #454652;
  --color-on-primary-fixed-variant: #313e95;
  --color-on-tertiary-container: #49a9ef;
  --color-inverse-primary: #bcc2ff;
  --color-on-secondary: #ffffff;
  --color-surface-container-highest: #dee2ec;
  --color-background: #f8f9ff;
  --color-on-secondary-fixed-variant: #42474e;
  --color-on-secondary-container: #5e636a;
  --color-secondary-fixed: #dee3eb;
  --color-surface-variant: #dee2ec;
  --color-tertiary: #00253d;
  --color-primary-container: #212e86;
  --color-primary-fixed: #dfe0ff;
  --color-surface-dim: #d6dae4;
  --color-surface-container-lowest: #ffffff;
  --color-on-secondary-fixed: #171c22;
  --color-outline-variant: #c6c5d3;
  --color-on-error: #ffffff;
  --color-on-tertiary-fixed: #001d31;
  --color-on-surface: #171c23;
  --color-on-error-container: #93000a;
  --color-surface-tint: #4a56ae;
  --color-outline: #767683;
  --color-surface-container-high: #e4e8f2;
  --color-surface-container-low: #f0f4fd;

  --spacing-space-lg: 1.5rem;
  --spacing-space-md: 1rem;
  --spacing-gutter: 1.25rem;
  --spacing-space-xl: 2.5rem;
  --spacing-space-xs: 0.25rem;
  --spacing-space-sm: 0.5rem;
  --spacing-gutter-mobile: 0.75rem;

  --font-orbitron: 'Orbitron', sans-serif;
  --font-inter: 'Inter', sans-serif;
  --font-code-spec: 'JetBrains Mono', monospace;
  --font-headline-xl: 'Space Grotesk', sans-serif;
  --font-headline-lg: 'Space Grotesk', sans-serif;
  --font-headline-md: 'Space Grotesk', sans-serif;
  --font-headline-sm: 'Space Grotesk', sans-serif;
  --font-title-md: 'Inter', sans-serif;
  --font-title-sm: 'Inter', sans-serif;
  --font-body-lg: 'Inter', sans-serif;
  --font-body-md: 'Inter', sans-serif;
  --font-body-sm: 'Inter', sans-serif;
  --font-label-md: 'JetBrains Mono', monospace;
  --font-label-sm: 'JetBrains Mono', monospace;
}
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 1;
  display: inline-block;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
.technical-grid {
  background-size: 32px 32px;
  background-image: 
    linear-gradient(to right, rgba(30, 35, 42, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 35, 42, 0.04) 1px, transparent 1px);
}
.crosshair-corner {
  position: relative;
}
.crosshair-corner::before, .crosshair-corner::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-color: rgba(33, 46, 134, 0.3);
  pointer-events: none;
}
.crosshair-corner::before {
  top: -1px;
  left: -1px;
  border-top: 2px solid;
  border-left: 2px solid;
}
.crosshair-corner::after {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid;
  border-right: 2px solid;
}
`;

let css = fs.readFileSync('src/index.css', 'utf-8');
css = '@import "tailwindcss";\n' + cssAdditions;
fs.writeFileSync('src/index.css', css);
console.log('Migration complete');
