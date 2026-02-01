# 🚀 Quick Start: Deploy to GitHub Pages
## Get Your Portfolio Live at shivamdembla.com in 30 Minutes!

---

## 📋 What You'll Get

✅ Free hosting on GitHub Pages  
✅ Custom domain: **shivamdembla.com**  
✅ Free SSL certificate (HTTPS)  
✅ Automatic deployments with git push  
✅ Professional portfolio website  

**Cost**: Only $10-15/year for domain (hosting is FREE!)

---

## ⚡ Express Setup (3 Steps)

### Step 1: Push to GitHub (5 minutes)

```bash
# Navigate to your portfolio folder
cd portfolio-project

# Run the automated setup script (Mac/Linux)
./setup-github.sh

# Or manually:
git init
echo "shivamdembla.com" > CNAME
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/shivamdembla/shivamdembla.github.io.git
git push -u origin main
```

**First time?** Create the repository first:
1. Go to https://github.com/new
2. Name: **shivamdembla.github.io**
3. Public repository
4. Don't initialize with README
5. Click "Create repository"

### Step 2: Enable GitHub Pages (2 minutes)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Source: **main** branch, **/ (root)**
4. Click **Save**

✅ Site is live at: https://shivamdembla.github.io

### Step 3: Connect Your Domain (10 minutes setup + 2-48h DNS)

**A) Configure DNS at your domain registrar:**

Add these 5 DNS records:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | shivamdembla.github.io |

**B) Add domain in GitHub:**

1. Repository → Settings → Pages
2. Custom domain: **shivamdembla.com**
3. Click Save
4. Wait for DNS check ✅
5. Enable "Enforce HTTPS"

**Done!** Site will be live at https://shivamdembla.com (after DNS propagates)

---

## 📚 Detailed Guides

- **GITHUB_PAGES_DEPLOYMENT.md** - Complete step-by-step guide
- **DNS_SETUP_GUIDE.md** - DNS configuration for all registrars
- **README.md** - Project structure and customization
- **CONFIG_TEMPLATE.md** - What to customize checklist

---

## 🔧 Customization Before Deploying

Edit these files with your information:

### Required Updates
- [ ] `components/hero.html` - Your name and social links
- [ ] `components/skills.html` - Your actual skills
- [ ] `components/experience.html` - Your work history
- [ ] `components/education.html` - Your education
- [ ] `components/projects.html` - Your projects
- [ ] `components/certificates.html` - Your certificates
- [ ] `components/hackathons.html` - Your hackathons
- [ ] `components/footer.html` - Your name in copyright

### Optional Updates
- [ ] `index.html` - Add SEO meta tags
- [ ] `assets/css/styles.css` - Change colors/fonts
- [ ] Add Google Analytics
- [ ] Add favicon.ico

---

## 🎯 Making Updates After Deployment

```bash
# 1. Edit your files
# (Make changes to any component)

# 2. Commit and push
git add .
git commit -m "Updated projects section"
git push origin main

# 3. Done! 
# Changes go live in 1-2 minutes automatically
```

---

## 🐛 Common Issues

### Components not loading?
- Run a local server first: `python -m http.server 8000`
- Check browser console (F12) for errors
- Ensure all files are pushed to GitHub

### DNS not working?
- Wait up to 48 hours for propagation
- Check: https://dnschecker.org
- Verify DNS records are correct
- Clear browser cache

### HTTPS not available?
- Wait 24 hours after adding custom domain
- Ensure DNS is fully propagated
- Try removing and re-adding domain

---

## 📞 Need Help?

1. **Check guides**: Read GITHUB_PAGES_DEPLOYMENT.md
2. **DNS issues**: See DNS_SETUP_GUIDE.md
3. **GitHub Docs**: https://docs.github.com/en/pages
4. **DNS Checker**: https://dnschecker.org

---

## ✨ Pro Tips

💡 **Use branches for testing**
```bash
git checkout -b update-design
# Make changes
git push origin update-design
# Test, then merge to main
```

💡 **Local development**
```bash
# Always test locally first
python -m http.server 8000
# Visit: http://localhost:8000
```

💡 **Keep a changelog**
Document your updates in commits:
```bash
git commit -m "Added new project: E-commerce Platform"
git commit -m "Updated skills: Added React Native"
```

---

## 🎉 Launch Checklist

Before announcing your portfolio:

- [ ] All personal info updated
- [ ] All links tested and working
- [ ] Tested on mobile devices
- [ ] No placeholder text remaining
- [ ] Spell-checked all content
- [ ] DNS fully propagated
- [ ] HTTPS enabled and working
- [ ] Checked on multiple browsers
- [ ] Added to LinkedIn profile
- [ ] Added to resume
- [ ] Shared with friends for feedback

---

## 📊 Next Steps After Launch

1. **Add Analytics**: Track your visitors
2. **Google Search Console**: Submit your sitemap
3. **Social Sharing**: Add to LinkedIn, Twitter
4. **Regular Updates**: Add new projects monthly
5. **Backup**: Keep local copy of your code

---

## 💰 Cost Breakdown

| Item | Cost |
|------|------|
| GitHub Pages Hosting | **FREE** ✅ |
| SSL Certificate | **FREE** ✅ |
| Domain (shivamdembla.com) | $10-15/year |
| **Total Annual Cost** | **$10-15/year** |

Compare to traditional hosting: $72-120/year

**Savings: $60-100 per year!** 💸

---

## 🚀 Ready to Deploy?

1. Open terminal in `portfolio-project` folder
2. Run: `./setup-github.sh` (or follow Step 1 above)
3. Create GitHub repository
4. Push your code
5. Configure DNS
6. Wait for your site to go live!

**Your portfolio will be live at: https://shivamdembla.com**

Good luck! 🎊
