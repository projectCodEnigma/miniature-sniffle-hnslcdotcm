#!/usr/bin/env node

/**
 * Sitemap Update Utility
 * 
 * This script helps update the lastmod dates in sitemap files.
 * Run with: node update-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Update lastmod dates in sitemap files
function updateSitemapDates() {
    const currentDate = getCurrentDate();
    const sitemapFiles = [
        'sitemap.xml',
        'sitemap-services.xml',
        'sitemap-blog.xml',
        'sitemap-index.xml'
    ];

    console.log(`🔄 Updating sitemap dates to: ${currentDate}`);

    sitemapFiles.forEach(filename => {
        const filePath = path.join(__dirname, filename);
        
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Update lastmod dates
            content = content.replace(
                /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
                `<lastmod>${currentDate}</lastmod>`
            );
            
            fs.writeFileSync(filePath, content);
            console.log(`✅ Updated: ${filename}`);
        } else {
            console.log(`⚠️  File not found: ${filename}`);
        }
    });

    console.log('\n🎉 Sitemap update complete!');
    console.log('📝 Remember to:');
    console.log('   - Submit updated sitemaps to search consoles');
    console.log('   - Test sitemap validity');
    console.log('   - Monitor crawl statistics');
}

// Add new URL to main sitemap
function addUrlToSitemap(url, priority = '0.5', changefreq = 'monthly') {
    const currentDate = getCurrentDate();
    const sitemapPath = path.join(__dirname, 'sitemap.xml');
    
    if (!fs.existsSync(sitemapPath)) {
        console.error('❌ sitemap.xml not found!');
        return;
    }

    let content = fs.readFileSync(sitemapPath, 'utf8');
    
    // Find the closing </urlset> tag
    const urlEntry = `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>

</urlset>`;

    content = content.replace('</urlset>', urlEntry);
    
    fs.writeFileSync(sitemapPath, content);
    console.log(`✅ Added URL: ${url}`);
}

// Command line interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        // Default: update all dates
        updateSitemapDates();
    } else if (args[0] === 'add' && args[1]) {
        // Add new URL: node update-sitemap.js add "https://example.com/page"
        const url = args[1];
        const priority = args[2] || '0.5';
        const changefreq = args[3] || 'monthly';
        addUrlToSitemap(url, priority, changefreq);
    } else {
        console.log('📖 Usage:');
        console.log('  node update-sitemap.js                    # Update all dates');
        console.log('  node update-sitemap.js add "URL" [priority] [changefreq]  # Add new URL');
        console.log('');
        console.log('📝 Examples:');
        console.log('  node update-sitemap.js');
        console.log('  node update-sitemap.js add "https://hanslacida.com/new-page/" 0.8 monthly');
    }
}

module.exports = {
    updateSitemapDates,
    addUrlToSitemap,
    getCurrentDate
}; 