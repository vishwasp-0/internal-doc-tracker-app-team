# Workflow Guide: Using Tech Changes Tracker with Cursor

## Quick Start

1. **Open the tracker:** Navigate to `index.html` in your browser
2. **Login:** Use credentials `admin` / `internal2024`
3. **View entries:** Browse existing tech changes with search functionality

## Adding New Entries After Commits

### Step 1: After making commits, ask Cursor:

```
Check the git diff for the last commit and create a tech change entry with:
- Summary of changes
- Mermaid diagram showing the architecture/flow
- Decisions and rationale
- Tags for categorization
```

### Step 2: Cursor will provide you with:

1. **Git diff analysis** - What changed
2. **Mermaid diagram** - Visual representation
3. **Entry JSON** - Ready to add to tracker

### Step 3: Add the entry

**Option A: Browser Console**
- Open browser console (F12)
- Paste the `updateTechChanges()` call provided by Cursor
- Entry appears immediately

**Option B: Using helper script**
```bash
# Save entry to a JSON file
# Then run:
node update-entry.js entry.json
# Copy the output and paste in browser console
```

## Example Cursor Prompt

```
After reviewing the git diff, create a tech change entry for:
- Title: [Brief title]
- Changes: [List of changes from diff]
- Create a Mermaid diagram showing: [architecture/flow]
- Decisions: [Why these changes were made]
- Tags: [relevant tags]

Provide the updateTechChanges() call I can paste into the browser console.
```

## Entry Template

When asking Cursor to create entries, use this structure:

```json
{
    "title": "Brief descriptive title",
    "date": "YYYY-MM-DD",
    "description": "One sentence summary",
    "changes": [
        "Specific change 1",
        "Specific change 2",
        "Specific change 3"
    ],
    "decisions": "Detailed explanation of why these changes were made, alternatives considered, and rationale for the chosen approach.",
    "diagram": "Mermaid diagram code here",
    "tags": ["Category1", "Category2", "Category3"]
}
```

## Mermaid Diagram Types

Ask Cursor to create diagrams based on your changes:

- **Flowcharts** (`graph TD` or `graph LR`) - For process flows
- **Sequence diagrams** (`sequenceDiagram`) - For API interactions
- **Class diagrams** (`classDiagram`) - For code structure
- **State diagrams** (`stateDiagram-v2`) - For state machines
- **ER diagrams** (`erDiagram`) - For database changes

## Tips

1. **Be specific:** Ask Cursor to analyze actual git diffs, not just describe changes
2. **Include context:** Mention related decisions or constraints
3. **Use tags consistently:** Create a tag list for your project (e.g., Frontend, Backend, Database, Security, Performance)
4. **Regular updates:** Add entries after significant commits or PRs
5. **Search is powerful:** Use descriptive titles and detailed descriptions for better search results

## Integration with Git

You can create a git hook or script that:
1. Captures commit messages and diffs
2. Sends to Cursor for analysis
3. Generates entry automatically
4. Updates the tracker

Example git hook concept:
```bash
#!/bin/bash
# .git/hooks/post-commit
git diff HEAD~1 HEAD > /tmp/last-diff.txt
# Then ask Cursor to analyze /tmp/last-diff.txt
```

## File Path Workflow

When you want to update the tracker:
1. Tell Cursor: "Update the tech changes tracker at `/path/to/index.html`"
2. Provide the entry details or ask Cursor to analyze git diff
3. Cursor will update the HTML file or provide code to paste

The tracker uses localStorage, so updates persist across sessions but are browser-specific. For team sharing, consider:
- Exporting entries periodically
- Using a shared JSON file
- Integrating with a backend API (future enhancement)
