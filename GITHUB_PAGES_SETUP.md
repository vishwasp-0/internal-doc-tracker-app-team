# GitHub Pages Setup Guide

Follow these steps to deploy your Tech Changes Tracker to GitHub Pages.

## Step 1: Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name your repository (e.g., `tech-changes-tracker`)
4. Choose **Public** or **Private** (both work with GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we'll add files manually)
6. Click **Create repository**

## Step 2: Initialize Git Repository Locally

Open terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add the HTML file
git add index.html

# Make your first commit
git commit -m "Initial commit: Tech Changes Tracker"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**

## Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

**Note:** It may take a few minutes for the site to be available after enabling Pages.

## Step 5: Verify Setup

1. Visit your GitHub Pages URL
2. Login with:
   - Username: `admin`
   - Password: `internal2024`
3. You should see an empty tracker (no entries)
4. Test adding an entry using browser console:
   ```javascript
   updateTechChanges({
       title: "Test Entry",
       date: "2024-02-05",
       author: "Your Name",
       prLink: "https://github.com/org/repo/pull/1",
       description: "This is a test entry",
       changes: ["Change 1", "Change 2"],
       decisions: "Test decision",
       tags: ["Test"]
   });
   ```

## Updating Your Site

To update the site after making changes:

```bash
# Make your changes to index.html
git add index.html
git commit -m "Update: description of changes"
git push
```

Changes will be live within a few minutes.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Create a file named `CNAME` in your repository root
2. Add your domain name (e.g., `tech-changes.yourdomain.com`)
3. Configure DNS records as per GitHub Pages documentation
4. Commit and push the CNAME file

## Troubleshooting

- **Site not loading:** Wait 5-10 minutes after enabling Pages
- **404 error:** Make sure `index.html` is in the root directory
- **Authentication not working:** Check browser console for errors
- **Entries not saving:** Ensure localStorage is enabled in your browser

## Security Note

The hardcoded credentials are fine for internal use, but remember:
- Anyone with the URL can access the site
- Consider making the repository private if needed
- For production, consider implementing proper authentication
