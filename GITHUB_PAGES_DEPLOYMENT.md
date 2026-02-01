# GitHub Pages Deployment Guide
## Host Your Portfolio at shivamdembla.com

This guide will walk you through hosting your portfolio on GitHub Pages with your custom domain.

---

## Part 1: Prepare Your Repository

### Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Click** the "+" icon (top right) → "New repository"
3. **Repository settings**:
   - **Repository name**: `shivamdembla.github.io` (recommended for user site)
     - Alternative: `portfolio` or any name (for project site)
   - **Description**: "My professional portfolio website"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README (we already have files)
4. **Click** "Create repository"

### Step 2: Initialize Git Locally

Open terminal in your `portfolio-project` folder:

```bash
# Navigate to your portfolio folder
cd portfolio-project

# Initialize git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main (if needed)
git branch -M main

# Add GitHub repository as remote
git remote add origin https://github.com/shivamdembla/shivamdembla.github.io.git
# Or if using different repo name: https://github.com/shivamdembla/portfolio.git

# Push to GitHub
git push -u origin main
```

**If you get authentication error**, use a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name, select "repo" scope
4. Copy the token
5. Use it as password when pushing

---

## Part 2: Enable GitHub Pages

### Step 3: Configure GitHub Pages

1. **Go to your repository** on GitHub
2. **Click** "Settings" tab
3. **Click** "Pages" in the left sidebar
4. **Under "Source"**:
   - Branch: `main`
   - Folder: `/ (root)`
   - Click "Save"

5. **Wait 1-2 minutes** for deployment
6. **Your site will be live** at:
   - If repo name is `shivamdembla.github.io`: https://shivamdembla.github.io
   - If repo name is `portfolio`: https://shivamdembla.github.io/portfolio

---

## Part 3: Add Custom Domain (shivamdembla.com)

### Step 4: Configure DNS Settings

Go to your domain registrar (where you bought shivamdembla.com - GoDaddy, Namecheap, Google Domains, etc.)

**Option A: Use Apex Domain (shivamdembla.com)**

Add these DNS records:

| Type | Host/Name | Value/Points To | TTL |
|------|-----------|----------------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | shivamdembla.github.io | 3600 |

**Option B: Use Subdomain (www.shivamdembla.com)**

Add this DNS record:

| Type | Host/Name | Value/Points To | TTL |
|------|-----------|----------------|-----|
| CNAME | www | shivamdembla.github.io | 3600 |

**Recommended: Use both** (Option A) so both `shivamdembla.com` and `www.shivamdembla.com` work.

### Step 5: Examples for Popular Registrars

#### GoDaddy
1. Log in to GoDaddy
2. Go to "My Products" → "DNS"
3. Click "Manage DNS" for shivamdembla.com
4. Add the A and CNAME records above
5. Save changes

#### Namecheap
1. Log in to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to shivamdembla.com
4. Go to "Advanced DNS" tab
5. Add the A and CNAME records above
6. Save changes

#### Google Domains
1. Log in to Google Domains
2. Click on shivamdembla.com
3. Go to "DNS" tab
4. Scroll to "Custom resource records"
5. Add the A and CNAME records above
6. Save

#### Cloudflare (if using)
1. Log in to Cloudflare
2. Select shivamdembla.com
3. Go to "DNS" tab
4. Add the A and CNAME records above
5. Make sure "Proxy status" is set to "DNS only" (grey cloud) for GitHub Pages
6. Save

### Step 6: Add Custom Domain in GitHub

1. **Go to your repository** on GitHub
2. **Click** "Settings" → "Pages"
3. **Under "Custom domain"**:
   - Enter: `shivamdembla.com`
   - Click "Save"
4. **Wait for DNS check** (can take a few minutes to 48 hours)
5. **Once verified**, check "Enforce HTTPS" (wait 24h if option is greyed out)

---

## Part 4: Create CNAME File (Important!)

GitHub Pages needs a CNAME file in your repository:

```bash
# In your portfolio-project folder
echo "shivamdembla.com" > CNAME

# Add and commit
git add CNAME
git commit -m "Add custom domain CNAME file"
git push origin main
```

**Or create manually:**

Create a file named `CNAME` (no extension) in the root of your project with this content:
```
shivamdembla.com
```

---

## Part 5: Fix Component Loading Issue

GitHub Pages serves static files, so your component loading will work! But let's make sure:

### Update main.js (if needed)

The current `main.js` should work fine, but if you have issues, update the path:

```javascript
// In assets/js/main.js
async function loadComponent(elementId, componentPath) {
    try {
        // For GitHub Pages, paths are relative to root
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}
```

No changes needed if using the provided code!

---

## Part 6: Verify Everything Works

### Step 7: Test Your Site

1. **Wait for DNS propagation** (usually 10 minutes to 2 hours, max 48 hours)
2. **Check DNS propagation**: https://dnschecker.org
   - Enter: shivamdembla.com
   - Should show GitHub's IP addresses globally

3. **Visit your site**:
   - http://shivamdembla.com
   - http://www.shivamdembla.com
   - https://shivamdembla.com (after HTTPS is enabled)

4. **Test all sections load**:
   - Open browser DevTools (F12)
   - Check Console for any errors
   - Verify all components loaded

---

## Part 7: Enable HTTPS (SSL Certificate)

GitHub Pages provides free SSL certificates!

1. **Go to repository** → Settings → Pages
2. **Check the box** "Enforce HTTPS"
   - If greyed out, wait 24 hours for certificate provisioning
   - GitHub automatically gets a certificate from Let's Encrypt

3. **Once enabled**:
   - All HTTP traffic will redirect to HTTPS
   - Your site will be secure (padlock in browser)

---

## Updating Your Portfolio

### Make Changes and Deploy

```bash
# Make your changes to any component files

# Stage changes
git add .

# Commit changes
git commit -m "Updated work experience section"

# Push to GitHub
git push origin main

# Changes will be live in 1-2 minutes!
```

### Quick Commands

```bash
# Check git status
git status

# View commit history
git log --oneline

# See what changed
git diff

# Undo changes to a file (before commit)
git checkout -- filename.html

# Create a new branch for testing
git checkout -b feature-update
git push origin feature-update
```

---

## Troubleshooting

### DNS Not Working?

**Check DNS propagation:**
```bash
# On Mac/Linux
dig shivamdembla.com
nslookup shivamdembla.com

# Should show GitHub's IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

**If DNS not propagating:**
- Wait longer (up to 48 hours)
- Clear your browser cache
- Try incognito/private browsing
- Try different browser
- Check registrar dashboard for DNS changes

### Components Not Loading?

**Check browser console (F12):**
- Look for 404 errors
- Verify paths are correct
- Ensure CNAME file exists

**Fix:**
```bash
# Ensure components folder is pushed
git add components/
git commit -m "Add components folder"
git push origin main
```

### 404 Page Not Found?

**Verify files are in repository:**
1. Go to your GitHub repo
2. Check that all files are there
3. Ensure index.html is in root (not in a subfolder)

**Create custom 404 page (optional):**
Create `404.html` in root:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Not Found</title>
    <style>
        body { 
            font-family: Arial; 
            text-align: center; 
            padding: 100px;
            background: #0a0a0f;
            color: #fff;
        }
        h1 { color: #00f0ff; }
        a { color: #ff006e; }
    </style>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go Home</a>
</body>
</html>
```

### HTTPS Not Working?

**Wait 24 hours** after adding custom domain for GitHub to provision certificate.

**If still not working:**
1. Remove custom domain from GitHub Pages settings
2. Wait 5 minutes
3. Re-add custom domain
4. Wait another 24 hours

### Mixed Content Warnings?

Ensure all links in your HTML use HTTPS:
```html
<!-- Change this -->
<link href="http://fonts.googleapis.com/...">

<!-- To this -->
<link href="https://fonts.googleapis.com/...">
```

---

## Performance & SEO Optimization

### Step 8: Add SEO Meta Tags

Update `index.html` head section:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Shivam Dembla - Full Stack Developer Portfolio</title>
    <meta name="description" content="Professional portfolio of Shivam Dembla - Full Stack Developer specializing in React, Node.js, and modern web technologies.">
    <meta name="keywords" content="Shivam Dembla, Full Stack Developer, Web Developer, React, Node.js, Portfolio">
    <meta name="author" content="Shivam Dembla">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://shivamdembla.com/">
    <meta property="og:title" content="Shivam Dembla - Full Stack Developer">
    <meta property="og:description" content="Professional portfolio showcasing my work in web development">
    <meta property="og:image" content="https://shivamdembla.com/assets/images/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://shivamdembla.com/">
    <meta property="twitter:title" content="Shivam Dembla - Full Stack Developer">
    <meta property="twitter:description" content="Professional portfolio showcasing my work in web development">
    <meta property="twitter:image" content="https://shivamdembla.com/assets/images/og-image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/images/favicon.png">
    
    <!-- Existing links -->
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
```

### Step 9: Add Google Analytics

```html
<!-- Add before </head> tag in index.html -->
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Get your Google Analytics ID from: https://analytics.google.com

### Step 10: Create Sitemap

Create `sitemap.xml` in root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://shivamdembla.com/</loc>
    <lastmod>2026-02-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Step 11: Create robots.txt

Create `robots.txt` in root:

```
User-agent: *
Allow: /
Sitemap: https://shivamdembla.com/sitemap.xml
```

---

## GitHub Actions (Optional - Advanced)

Automate deployment checks with GitHub Actions.

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Validate HTML
      run: |
        echo "Validating HTML files..."
        # Add HTML validation here if needed
    
    - name: Deploy to GitHub Pages
      run: |
        echo "Deployed successfully!"
```

---

## Complete Deployment Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages in repository settings
- [ ] Added A records to DNS (4 GitHub IPs)
- [ ] Added CNAME record for www subdomain
- [ ] Created CNAME file in repository
- [ ] Added custom domain in GitHub Pages settings
- [ ] Waited for DNS propagation (check dnschecker.org)
- [ ] Enabled HTTPS in GitHub Pages
- [ ] Tested site at shivamdembla.com
- [ ] Tested site at www.shivamdembla.com
- [ ] Verified all components load correctly
- [ ] Added SEO meta tags
- [ ] Added Google Analytics (optional)
- [ ] Created sitemap.xml
- [ ] Created robots.txt
- [ ] Submitted to Google Search Console (optional)

---

## Cost Comparison

### GitHub Pages (This Method)
- **GitHub Pages**: FREE ✅
- **Custom Domain**: $10-15/year
- **SSL Certificate**: FREE (automatic) ✅
- **Total**: $10-15/year

### Digital Ocean (Previous Method)
- **Droplet**: $6/month = $72/year
- **Custom Domain**: $10-15/year
- **SSL Certificate**: FREE ✅
- **Total**: $82-87/year

**Savings with GitHub Pages**: ~$70/year! 💰

---

## Quick Reference Commands

```bash
# Clone your repo (on new machine)
git clone https://github.com/shivamdembla/shivamdembla.github.io.git

# Update portfolio
git add .
git commit -m "Updated skills section"
git push origin main

# Check deployment status
# Visit: https://github.com/shivamdembla/shivamdembla.github.io/deployments

# View live site
# Visit: https://shivamdembla.com
```

---

## Next Steps After Deployment

1. **Submit to Google Search Console**
   - Verify ownership
   - Submit sitemap
   - Monitor search performance

2. **Share Your Portfolio**
   - Add to LinkedIn profile
   - Add to resume
   - Share on social media
   - Add to email signature

3. **Regular Updates**
   - Add new projects as you build them
   - Update skills as you learn
   - Keep experience current

4. **Monitor Analytics**
   - Track visitors
   - See which sections are most viewed
   - Understand your audience

---

## Support & Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Custom Domain Setup**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **DNS Checker**: https://dnschecker.org
- **GitHub Status**: https://www.githubstatus.com

---

**Congratulations!** Your portfolio will be live at **https://shivamdembla.com** 🎉

Free hosting, custom domain, automatic HTTPS, and automatic deployments with every push to GitHub!
