# Portfolio Configuration Template

This file contains all the personal information you need to update in your portfolio.
Use this as a checklist to ensure you've customized everything.

## Personal Information

### Basic Details
- **Name**: Your Name
- **Title/Role**: Full Stack Developer | Software Engineer
- **Location**: Your City, Country (optional)
- **Email**: your.email@example.com (optional to display)
- **Phone**: +1-234-567-8900 (optional to display)

### Social Links
- **LinkedIn**: https://linkedin.com/in/yourprofile
- **GitHub**: https://github.com/yourusername
- **Portfolio**: https://yourportfolio.com
- **Twitter/X**: https://twitter.com/yourhandle (optional)
- **Personal Blog**: https://yourblog.com (optional)

## Content Sections

### 1. Hero Section
**File**: `components/hero.html`

- Name: [Your Full Name]
- Subtitle: [Your Role/Title]
- Description: [2-3 sentence bio about yourself]

### 2. Skills
**File**: `components/skills.html`

#### Frontend Skills
- [ ] List all frontend technologies you know
- [ ] Remove technologies you don't use
- [ ] Add new ones you're proficient in

#### Backend Skills
- [ ] List backend frameworks and languages
- [ ] Update based on your expertise

#### Database Skills
- [ ] List databases you've worked with
- [ ] Include both SQL and NoSQL

#### DevOps & Tools
- [ ] Version control (Git, etc.)
- [ ] Cloud platforms (AWS, Azure, GCP)
- [ ] Containerization (Docker, Kubernetes)
- [ ] CI/CD tools

### 3. Work Experience
**File**: `components/experience.html`

For each job, include:
- Job Title
- Company Name
- Date Range (Month Year - Month Year or Present)
- 2-3 bullet points of key achievements
- Quantify results when possible (e.g., "improved performance by 40%")

#### Job 1 (Most Recent)
- Title:
- Company:
- Duration:
- Achievements:

#### Job 2
- Title:
- Company:
- Duration:
- Achievements:

### 4. Education
**File**: `components/education.html`

For each degree:
- Degree Name
- Institution
- Year Range
- GPA (if impressive)
- Relevant coursework or honors

#### Education 1
- Degree:
- Institution:
- Year:
- Details:

#### Education 2
- Degree:
- Institution:
- Year:
- Details:

### 5. Projects
**File**: `components/projects.html`

For each project, include:
- Project Name
- Technology Stack
- Description (2-3 sentences)
- Live Demo URL (if available)
- GitHub Repository URL

#### Project 1
- Name:
- Tech Stack:
- Description:
- Live Demo:
- GitHub:

#### Project 2
- Name:
- Tech Stack:
- Description:
- Live Demo:
- GitHub:

#### Project 3
- Name:
- Tech Stack:
- Description:
- Live Demo:
- GitHub:

### 6. Certificates
**File**: `components/certificates.html`

For each certificate:
- Certificate Name
- Issuing Organization
- Issue Date
- Credential URL (optional)

#### Certificate 1
- Name:
- Issuer:
- Date:

#### Certificate 2
- Name:
- Issuer:
- Date:

### 7. Hackathons
**File**: `components/hackathons.html`

For each hackathon:
- Hackathon Name
- Event Details (location/type, date)
- Achievement (placement, prize, or participation)
- Brief description of what you built

#### Hackathon 1
- Name:
- Event:
- Achievement:
- Project:

#### Hackathon 2
- Name:
- Event:
- Achievement:
- Project:

## Design Customization

### Colors (in assets/css/styles.css)
Current theme: Dark with cyan/pink accents

If you want to change colors, update these CSS variables:
```css
--bg-primary: #0a0a0f;         /* Main background */
--accent-primary: #00f0ff;      /* Primary accent */
--accent-secondary: #ff006e;    /* Secondary accent */
```

### Fonts
Current fonts:
- Headings: Syne (bold, geometric)
- Body: JetBrains Mono (monospace, code-style)

To change, update the Google Fonts link in `index.html`

## Deployment Information

### Digital Ocean
- Droplet IP:
- Droplet Name:
- SSH Username:

### Domain
- Domain Name:
- Registrar:
- DNS Provider:

### SSL Certificate
- Certificate Provider: Let's Encrypt
- Auto-renewal: Yes/No

## Pre-Deployment Checklist

Before deploying, verify:
- [ ] Updated name in hero section
- [ ] Updated name in footer
- [ ] All social media links are correct
- [ ] All skills accurately reflect your abilities
- [ ] Work experience is current and accurate
- [ ] Education information is correct
- [ ] Projects have working links
- [ ] All GitHub repos are public (or removed if private)
- [ ] Removed any placeholder text
- [ ] Tested locally on development server
- [ ] Checked all links work
- [ ] Reviewed for typos and grammar
- [ ] Mobile responsive (test on phone)

## SEO & Meta Tags (Optional Enhancement)

Add to `index.html` in the `<head>` section:

```html
<meta name="description" content="Your Name - Full Stack Developer Portfolio">
<meta name="keywords" content="web developer, full stack, react, node.js, [your skills]">
<meta name="author" content="Your Name">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourportfolio.com/">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Full Stack Developer specializing in [your specialties]">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourportfolio.com/">
<meta property="twitter:title" content="Your Name - Portfolio">
<meta property="twitter:description" content="Full Stack Developer specializing in [your specialties]">
```

## Analytics (Optional)

### Google Analytics
1. Create account at https://analytics.google.com
2. Get your tracking ID (G-XXXXXXXXXX)
3. Add code to `index.html` before closing `</head>` tag

### Alternative: Simple Analytics, Plausible, or Fathom
Consider privacy-focused alternatives if you prefer

## Maintenance Schedule

### Weekly
- [ ] Check if site is accessible
- [ ] Review any error logs

### Monthly
- [ ] Update system packages on droplet
- [ ] Review and update content if needed
- [ ] Check SSL certificate status

### As Needed
- [ ] Add new projects
- [ ] Update skills
- [ ] Add new achievements
- [ ] Update work experience

---

## Quick Commands Reference

```bash
# Update portfolio from Git
cd /var/www/portfolio && sudo git pull

# View site logs
sudo tail -f /var/log/nginx/access.log

# Restart Nginx
sudo systemctl restart nginx

# Backup portfolio
tar -czf portfolio-backup.tar.gz /var/www/portfolio
```

---

**Remember**: Your portfolio is a living document. Update it regularly with your latest achievements and projects!
