# Portfolio Website - Modular Structure

This portfolio website is built with a modular architecture where each section is a separate component file. This makes it easy to maintain, update, and customize individual sections.

## 📁 Project Structure

```
portfolio-project/
├── index.html                      # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css             # All CSS styles
│   ├── js/
│   │   └── main.js                # Component loader & interactions
│   └── images/                     # (Add your images here)
├── components/
│   ├── navigation.html            # Navigation bar
│   ├── hero.html                  # Hero/Header section
│   ├── skills.html                # Skills section
│   ├── experience.html            # Work experience section
│   ├── education.html             # Education section
│   ├── projects.html              # Projects section with web & GitHub links
│   ├── certificates.html          # Certificates section
│   ├── hackathons.html            # Hackathons section
│   └── footer.html                # Footer
└── README.md                       # This file
```

## 🎯 How It Works

1. **index.html**: The main file that contains the page structure and section placeholders
2. **Components**: Each section is stored as a separate HTML file in the `components/` folder
3. **main.js**: Automatically loads all components into the main page when it loads
4. **styles.css**: Contains all the styling for the entire website

## ✏️ How to Customize Each Section

### 1. Navigation (components/navigation.html)
Update the logo text and navigation links as needed.

### 2. Hero Section (components/hero.html)
- Replace "Your Name" with your actual name
- Update the subtitle with your role/title
- Modify the description
- Update LinkedIn URL: `https://linkedin.com/in/yourprofile`
- Update GitHub URL: `https://github.com/yourusername`

### 3. Skills (components/skills.html)
Add or remove skill categories and individual skills:
```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### 4. Work Experience (components/experience.html)
Add new job entries:
```html
<div class="timeline-item">
    <h3>Job Title</h3>
    <p class="meta">Company Name | Start Date - End Date</p>
    <p class="description">
        Your job description and achievements...
    </p>
</div>
```

### 5. Education (components/education.html)
Add educational qualifications:
```html
<div class="timeline-item">
    <h3>Degree Name</h3>
    <p class="meta">Institution Name | Year Range</p>
    <p class="description">
        Details about your education...
    </p>
</div>
```

### 6. Projects (components/projects.html)
**Important**: Each project now has both live demo and GitHub repository links!

Add new projects:
```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <div class="tech-stack">
            <span class="tech-badge">Tech 1</span>
            <span class="tech-badge">Tech 2</span>
        </div>
    </div>
    <div class="project-body">
        <p>Project description...</p>
        <div class="project-links">
            <a href="https://your-live-demo.com" target="_blank" class="project-link">
                <span>🌐</span> Live Demo
            </a>
            <a href="https://github.com/yourusername/repo-name" target="_blank" class="project-link github">
                <span>📁</span> GitHub Repo
            </a>
        </div>
    </div>
</div>
```

**Note**: You can include just one link if you don't have both:
- Remove the Live Demo link if the project isn't deployed
- Remove the GitHub link if the repository is private

### 7. Certificates (components/certificates.html)
Add certifications:
```html
<div class="certificate-item">
    <h3>Certificate Name</h3>
    <p class="issuer">Issuing Organization</p>
    <p class="date">Issued: Month Year</p>
</div>
```

### 8. Hackathons (components/hackathons.html)
Add hackathon participation:
```html
<div class="hackathon-item">
    <h3>Hackathon Name</h3>
    <p class="event-info">Event Details | Date</p>
    <p class="achievement">Your achievement/prize</p>
</div>
```

### 9. Footer (components/footer.html)
Update the copyright information with your name.

## 🚀 Testing Locally

Since this uses `fetch()` to load components, you need to run a local server:

### Option 1: Using Python
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 2: Using Node.js (http-server)
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit the URL shown in terminal
```

### Option 3: Using VS Code
Install the "Live Server" extension and click "Go Live" in the bottom right.

## 📤 Deploying to Digital Ocean

### Quick Upload Method
```bash
# SSH into your droplet
ssh yourusername@YOUR_DROPLET_IP

# Navigate to web directory
cd /var/www/portfolio

# Upload all files from your local machine
# Run this from your local machine in the portfolio-project folder:
scp -r * yourusername@YOUR_DROPLET_IP:/var/www/portfolio/

# Set proper permissions (on the droplet)
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### Using Git (Recommended)
```bash
# On your local machine, initialize git
cd portfolio-project
git init
git add .
git commit -m "Initial portfolio commit"

# Create a GitHub repository and push
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# On your droplet
cd /var/www
sudo git clone https://github.com/yourusername/portfolio.git
sudo chown -R www-data:www-data /var/www/portfolio
```

To update after making changes:
```bash
# On your droplet
cd /var/www/portfolio
sudo git pull origin main
```

## 🎨 Customizing Colors

Edit `assets/css/styles.css` and modify the CSS variables at the top:

```css
:root {
    --bg-primary: #0a0a0f;           /* Main background */
    --bg-secondary: #13131a;         /* Card backgrounds */
    --bg-tertiary: #1a1a24;          /* Darker sections */
    --accent-primary: #00f0ff;       /* Primary accent (cyan) */
    --accent-secondary: #ff006e;     /* Secondary accent (pink) */
    --text-primary: #e8e8f0;         /* Main text */
    --text-secondary: #a0a0b8;       /* Secondary text */
    --text-muted: #6a6a80;           /* Muted text */
}
```

## 🔧 Common Modifications

### Add a New Section
1. Create a new component file: `components/newsection.html`
2. Add a placeholder in `index.html`:
   ```html
   <section id="newsection-section"></section>
   ```
3. Load it in `assets/js/main.js`:
   ```javascript
   await loadComponent('newsection-section', 'components/newsection.html')
   ```

### Change Font
Replace the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Update the CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Add Images
1. Place images in `assets/images/`
2. Reference them in components:
   ```html
   <img src="assets/images/your-photo.jpg" alt="Description">
   ```

## 📝 Benefits of This Structure

✅ **Easy to Maintain**: Each section in its own file
✅ **Reusable**: Components can be reused across projects
✅ **Version Control Friendly**: Changes are isolated to specific files
✅ **Team Collaboration**: Multiple people can work on different sections
✅ **Clean Code**: Organized and easy to navigate
✅ **Easy Updates**: Modify one section without touching others

## 🐛 Troubleshooting

### Components Not Loading?
- Make sure you're running a local server (not opening the HTML file directly)
- Check browser console for errors (F12)
- Verify file paths are correct

### Styles Not Applying?
- Check that `assets/css/styles.css` is linked in `index.html`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Links Not Working?
- Ensure all URLs are updated with your actual links
- Check for typos in href attributes

## 📚 File Checklist Before Deployment

- [ ] Update your name in hero.html and footer.html
- [ ] Add your LinkedIn URL
- [ ] Add your GitHub URL
- [ ] Customize all skills in skills.html
- [ ] Add your work experience
- [ ] Add your education
- [ ] Add your projects with proper links
- [ ] Add your certificates
- [ ] Add your hackathon achievements
- [ ] Test all links work correctly
- [ ] Run on local server to verify everything loads
- [ ] Optimize any images you add

## 🎓 Next Steps

1. Customize all components with your information
2. Test locally using a development server
3. Deploy to Digital Ocean following the deployment guide
4. Share your portfolio link!

## 💡 Tips

- Keep descriptions concise and impactful
- Use action verbs for experience and achievements
- Update regularly with new projects and skills
- Ensure all links are working
- Add real project screenshots in the images folder
- Consider adding a blog section for articles you write

---

**Need Help?** Refer to the DEPLOYMENT_GUIDE.md for detailed server setup instructions.

Good luck with your portfolio! 🚀
