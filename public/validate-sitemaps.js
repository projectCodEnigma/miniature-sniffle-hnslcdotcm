#!/usr/bin/env node

/**
 * Sitemap Validation Utility
 * 
 * This script validates sitemap files for common errors.
 * Run with: node validate-sitemaps.js
 */

const fs = require('fs');
const path = require('path');

// Validate XML structure
function validateXML(xmlContent, filename) {
    const errors = [];
    
    // Check for basic XML structure
    if (!xmlContent.includes('<?xml version="1.0"')) {
        errors.push('Missing XML declaration');
    }
    
    // Check for proper sitemap namespace
    if (!xmlContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
        errors.push('Missing sitemap namespace');
    }
    
    // Check for balanced tags
    const openTags = (xmlContent.match(/<url>/g) || []).length;
    const closeTags = (xmlContent.match(/<\/url>/g) || []).length;
    
    if (openTags !== closeTags) {
        errors.push(`Unbalanced <url> tags: ${openTags} open, ${closeTags} close`);
    }
    
    // Check for required elements in each URL
    const urlMatches = xmlContent.match(/<url>[\s\S]*?<\/url>/g) || [];
    urlMatches.forEach((urlBlock, index) => {
        if (!urlBlock.includes('<loc>')) {
            errors.push(`URL ${index + 1}: Missing <loc> element`);
        }
        if (!urlBlock.includes('<lastmod>')) {
            errors.push(`URL ${index + 1}: Missing <lastmod> element`);
        }
    });
    
    return errors;
}

// Validate robots.txt
function validateRobotsTxt(content) {
    const errors = [];
    
    // Check for sitemap declaration
    if (!content.includes('Sitemap:')) {
        errors.push('Missing Sitemap declaration');
    }
    
    // Check for user-agent declaration
    if (!content.includes('User-agent:')) {
        errors.push('Missing User-agent declaration');
    }
    
    return errors;
}

// Main validation function
function validateSitemaps() {
    console.log('🔍 Validating sitemap files...\n');
    
    const files = [
        { name: 'robots.txt', validator: validateRobotsTxt },
        { name: 'sitemap.xml', validator: validateXML },
        { name: 'sitemap-services.xml', validator: validateXML },
        { name: 'sitemap-blog.xml', validator: validateXML },
        { name: 'sitemap-index.xml', validator: validateXML }
    ];
    
    let totalErrors = 0;
    
    files.forEach(file => {
        const filePath = path.join(__dirname, file.name);
        
        if (!fs.existsSync(filePath)) {
            console.log(`❌ ${file.name}: File not found`);
            totalErrors++;
            return;
        }
        
        const content = fs.readFileSync(filePath, 'utf8');
        const errors = file.validator(content, file.name);
        
        if (errors.length === 0) {
            console.log(`✅ ${file.name}: Valid`);
        } else {
            console.log(`❌ ${file.name}: ${errors.length} error(s)`);
            errors.forEach(error => {
                console.log(`   - ${error}`);
            });
            totalErrors += errors.length;
        }
    });
    
    console.log(`\n📊 Validation complete: ${totalErrors} total error(s)`);
    
    if (totalErrors === 0) {
        console.log('🎉 All files are valid!');
    } else {
        console.log('⚠️  Please fix the errors above before deploying.');
    }
    
    return totalErrors === 0;
}

// Check sitemap URLs for common issues
function checkSitemapURLs() {
    console.log('\n🔗 Checking sitemap URLs...\n');
    
    const sitemapFiles = ['sitemap.xml', 'sitemap-services.xml', 'sitemap-blog.xml'];
    let urlCount = 0;
    let issues = [];
    
    sitemapFiles.forEach(filename => {
        const filePath = path.join(__dirname, filename);
        
        if (!fs.existsSync(filePath)) {
            return;
        }
        
        const content = fs.readFileSync(filePath, 'utf8');
        const urlMatches = content.match(/<loc>(.*?)<\/loc>/g) || [];
        
        urlMatches.forEach(match => {
            const url = match.replace(/<\/?loc>/g, '');
            urlCount++;
            
            // Check for common issues
            if (!url.startsWith('https://')) {
                issues.push(`Non-HTTPS URL: ${url}`);
            }
            
            if (url.includes('localhost') || url.includes('127.0.0.1')) {
                issues.push(`Local URL: ${url}`);
            }
            
            if (url.endsWith('/') && !url.endsWith('.com/')) {
                // This is actually good for directories
            }
        });
    });
    
    console.log(`📊 Found ${urlCount} URLs across all sitemaps`);
    
    if (issues.length === 0) {
        console.log('✅ No URL issues found');
    } else {
        console.log(`⚠️  Found ${issues.length} URL issue(s):`);
        issues.forEach(issue => {
            console.log(`   - ${issue}`);
        });
    }
    
    return issues.length === 0;
}

// Command line interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        // Default: validate all files
        const isValid = validateSitemaps();
        const urlsOk = checkSitemapURLs();
        
        if (isValid && urlsOk) {
            console.log('\n🎉 All validations passed! Your sitemaps are ready for deployment.');
        } else {
            process.exit(1);
        }
    } else if (args[0] === 'urls') {
        // Only check URLs
        checkSitemapURLs();
    } else {
        console.log('📖 Usage:');
        console.log('  node validate-sitemaps.js        # Validate all files');
        console.log('  node validate-sitemaps.js urls   # Check URLs only');
    }
}

module.exports = {
    validateSitemaps,
    checkSitemapURLs,
    validateXML,
    validateRobotsTxt
}; 