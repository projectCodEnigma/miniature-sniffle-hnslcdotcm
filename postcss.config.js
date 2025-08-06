module.exports = {
  plugins: {
    // Tailwind CSS - Utility-first CSS framework
    'tailwindcss': {},
    
    // Autoprefixer - Automatically add vendor prefixes
    'autoprefixer': {
      flexbox: 'no-2009',
      grid: 'autoplace'
    },
    
    // CSSNano - Minify CSS for production
    'cssnano': process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        colormin: true,
        minifyFontValues: true,
        minifySelectors: true,
        mergeLonghand: true,
        mergeRules: true,
        reduceIdents: false,
        reduceInitial: true,
        reduceTransforms: true,
        uniqueSelectors: true,
        zindex: false
      }]
    } : false,
    
    // PostCSS Preset Env - Use modern CSS features
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
        'custom-properties': true,
        'color-functional-notation': true
      }
    },
    
    // PostCSS Import - Handle @import statements
    'postcss-import': {},
    
    // PostCSS Assets - Optimize images and assets
    'postcss-assets': {
      loadPaths: ['images/', 'fonts/'],
      basePath: './',
      cachebuster: true
    },
    
    // PostCSS Flexbugs Fixes - Fix flexbox bugs
    'postcss-flexbugs-fixes': {},
    
    // PostCSS Object Fit Images - Polyfill for object-fit
    'postcss-object-fit-images': {},
    
    // PostCSS Viewport Units - Polyfill for viewport units
    'postcss-viewport-units': {
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1
    }
  }
} 