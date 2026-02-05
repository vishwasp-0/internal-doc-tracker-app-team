/**
 * Helper script to update files.json when new HTML tracker files are added
 * Usage: node update-files-list.js <filename.html> "<Title>" "<Description>"
 * 
 * Example: node update-files-list.js my-tracker.html "My Tracker" "Description of my tracker"
 */

const fs = require('fs');
const path = require('path');

const filename = process.argv[2];
const title = process.argv[3] || filename.replace('.html', '').replace(/-/g, ' ');
const description = process.argv[4] || 'Tech changes tracker';

if (!filename) {
    console.log('Usage: node update-files-list.js <filename.html> "<Title>" "<Description>"');
    console.log('\nExample:');
    console.log('node update-files-list.js my-tracker.html "My Tracker" "Description"');
    process.exit(1);
}

if (!filename.endsWith('.html')) {
    console.error('Error: Filename must end with .html');
    process.exit(1);
}

const filesJsonPath = path.join(__dirname, 'files.json');

// Read existing files.json
let files = [];
if (fs.existsSync(filesJsonPath)) {
    try {
        files = JSON.parse(fs.readFileSync(filesJsonPath, 'utf8'));
    } catch (error) {
        console.error('Error reading files.json:', error.message);
        process.exit(1);
    }
}

// Check if file already exists
const existingIndex = files.findIndex(f => f.filename === filename);
if (existingIndex >= 0) {
    // Update existing entry
    files[existingIndex].title = title;
    files[existingIndex].description = description;
    console.log(`Updated entry for ${filename}`);
} else {
    // Add new entry
    files.push({
        filename: filename,
        title: title,
        description: description
    });
    console.log(`Added ${filename} to files.json`);
}

// Write back to files.json
try {
    fs.writeFileSync(filesJsonPath, JSON.stringify(files, null, 2) + '\n');
    console.log('\nfiles.json updated successfully!');
    console.log('\nCurrent files:');
    files.forEach(file => {
        console.log(`  - ${file.filename}: ${file.title}`);
    });
} catch (error) {
    console.error('Error writing files.json:', error.message);
    process.exit(1);
}
