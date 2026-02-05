/**
 * Helper script to update tech changes tracker
 * Usage: node update-entry.js <entry-file.json>
 * 
 * This script reads a JSON file with entry data and provides
 * JavaScript code to paste into the browser console
 */

const fs = require('fs');
const path = require('path');

// Get entry file path from command line
const entryFile = process.argv[2];

if (!entryFile) {
    console.log('Usage: node update-entry.js <entry-file.json>');
    console.log('\nExample entry-file.json structure:');
    console.log(JSON.stringify({
        title: "Example Change",
        date: "2024-02-05",
        description: "Description of the change",
        changes: [
            "Change 1",
            "Change 2"
        ],
        decisions: "Decisions and rationale",
        diagram: "graph TD\n    A[Start] --> B[End]",
        tags: ["Tag1", "Tag2"]
    }, null, 2));
    process.exit(1);
}

try {
    const entryData = JSON.parse(fs.readFileSync(entryFile, 'utf8'));
    
    // Validate required fields
    const required = ['title', 'date', 'description', 'changes', 'decisions'];
    const missing = required.filter(field => !entryData[field]);
    
    if (missing.length > 0) {
        console.error(`Missing required fields: ${missing.join(', ')}`);
        process.exit(1);
    }
    
    // Generate JavaScript code to paste into browser console
    const jsCode = `updateTechChanges(${JSON.stringify(entryData, null, 2)});`;
    
    console.log('\n=== Copy and paste this into your browser console ===\n');
    console.log(jsCode);
    console.log('\n====================================================\n');
    
    // Also save to a file for easy copy-paste
    const outputFile = path.join(path.dirname(entryFile), 'console-code.js');
    fs.writeFileSync(outputFile, jsCode);
    console.log(`Also saved to: ${outputFile}\n`);
    
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
