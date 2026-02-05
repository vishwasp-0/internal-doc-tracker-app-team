# Scaffold Prompt for Tech Changes Tracker

Copy and paste this prompt when you want to create the tech changes tracker HTML file in a new project:

---

Create an HTML-based tech changes tracker website with the following requirements:

## Requirements

1. **Single HTML file** - Everything in one file (HTML, CSS, JavaScript) ready for GitHub Pages
2. **Minimal, professional design** - Clean, corporate aesthetic with:
   - Light gray background (#f5f5f5)
   - White cards with thin borders (#e0e0e0)
   - Black text on white
   - Minimal form inputs (underline style)
   - Simple, flat buttons
   - Clean section headers with uppercase labels
   - No gradients, shadows, or decorative elements
   - No emojis in UI

3. **Authentication** - Hardcoded credentials:
   - Username: `admin`
   - Password: `internal2024`
   - Login screen that hides after authentication
   - Session persists in localStorage

4. **Search functionality** - Full-text search across all entry fields

5. **Entry structure** - Each entry must include:
   - `title` (string) - Brief title
   - `date` (string) - Format: "YYYY-MM-DD"
   - `author` (string, optional) - Author name
   - `prLink` (string, optional) - Pull request URL
   - `figmaLink` (string, optional) - Figma design link
   - `description` (string) - Brief description
   - `changes` (array) - List of changes made
   - `decisions` (string) - Detailed decisions and rationale
   - `diagram` (string, optional) - Mermaid.js diagram code
   - `tags` (array, optional) - Array of tag strings

6. **Display features**:
   - Entry cards with title, date, description
   - Changes listed as bullet points
   - Decisions section with left border
   - Mermaid.js diagrams rendered (use CDN: https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js)
   - Metadata section at bottom showing: Author, PR link (clickable), Figma link (clickable)
   - Tags displayed as minimal bordered pills

7. **Search** - Must search across: title, description, date, author, prLink, figmaLink, changes, decisions, tags

8. **Data persistence** - Use localStorage with key `techChanges`

9. **Function to add entries** - Expose `window.updateTechChanges(newEntry)` function that:
   - Adds entry to beginning of list
   - Saves to localStorage
   - Refreshes display

10. **Default entries** - Include 4 sample entries with complete dummy data:
    - All fields populated including author, prLink, figmaLink
    - Realistic GitHub PR URLs
    - Realistic Figma URLs
    - Mermaid diagrams
    - Various tags

## CSS Requirements

- Minimal, professional styling
- Responsive design
- Clean typography with system fonts
- Subtle borders instead of shadows
- Hover effects on links only
- Metadata section with top border separator
- Links styled with underline on hover

## JavaScript Requirements

- Mermaid initialized with neutral theme
- Search filters entries in real-time
- Entries displayed in reverse chronological order (newest first)
- All optional fields handled gracefully (don't break if missing)

## Example Entry Structure

```json
{
    "title": "Refactored Authentication System",
    "date": "2024-01-15",
    "author": "John Doe",
    "prLink": "https://github.com/org/repo/pull/123",
    "figmaLink": "https://www.figma.com/file/abc123/auth-redesign",
    "description": "Brief description of the change",
    "changes": [
        "Change item 1",
        "Change item 2"
    ],
    "decisions": "Detailed explanation of decisions made and rationale",
    "diagram": "graph TD\n    A[Start] --> B[End]",
    "tags": ["Tag1", "Tag2"]
}
```

Create the complete HTML file with all features implemented. The file should be production-ready and work standalone.
