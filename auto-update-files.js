/**
 * Auto-discover HTML files and generate files.json
 * Run this script whenever you add a new HTML file
 * Usage: node auto-update-files.js
 */

const fs = require('fs');
const path = require('path');

const directory = __dirname;
const filesJsonPath = path.join(directory, 'files.json');

// Get all HTML files in the directory
const files = fs.readdirSync(directory)
    .filter(file => file.endsWith('.html') && file !== 'index.html')
    .map(file => {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);
        
        // Generate a nice title from filename
        const title = file
            .replace('.html', '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
        
        return {
            filename: file,
            title: title,
            description: `Tech changes tracker - ${title}`,
            lastModified: stats.mtime.toISOString().split('T')[0]
        };
    })
    .sort((a, b) => b.lastModified.localeCompare(a.lastModified)); // Newest first

// Always include index.html if it exists (but it's the file browser, so skip it)
// Actually, let's include all HTML files including index.html alternatives

// Read existing files.json to preserve custom titles/descriptions
let existingFiles = [];
if (fs.existsSync(filesJsonPath)) {
    try {
        existingFiles = JSON.parse(fs.readFileSync(filesJsonPath, 'utf8'));
    } catch (error) {
        console.log('Creating new files.json');
    }
}

// Merge: keep custom titles/descriptions from existing, add new files
const mergedFiles = files.map(file => {
    const existing = existingFiles.find(f => f.filename === file.filename);
    return {
        filename: file.filename,
        title: existing?.title || file.title,
        description: existing?.description || file.description
    };
});

// Write files.json
fs.writeFileSync(filesJsonPath, JSON.stringify(mergedFiles, null, 2) + '\n');

console.log(`✅ Updated files.json with ${mergedFiles.length} HTML file(s):`);
mergedFiles.forEach(file => {
    console.log(`   - ${file.filename}: ${file.title}`);
});
