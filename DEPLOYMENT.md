# Deployment Guide - Modular Portfolio on Digital Ocean

This guide covers deploying your modular portfolio website to a new Digital Ocean droplet.

## Prerequisites

- Digital Ocean account
- SSH client (Terminal on Mac/Linux, PuTTY on Windows)
- Your portfolio files ready

## Part 1: Create and Configure Digital Ocean Droplet

### Step 1: Create New Droplet

1. Log in to [Digital Ocean](https://cloud.digitalocean.com/)
2. Click **Create** → **Droplets**
3. Choose settings:
   - **Image**: Ubuntu 22.04 LTS
   - **Plan**: Basic ($6/month is sufficient)
   - **CPU Options**: Regular (Shared CPU)
   - **Datacenter**: Choose closest to your audience
   - **Authentication**: SSH keys (recommended) or Password
   - **Hostname**: `portfolio-server` or similar
4. Click **Create Droplet**
5. **Note the IP address** once created (e.g., 123.45.67.89)

### Step 2: Initial Server Connection

```bash
# Connect via SSH
ssh root@YOUR_DROPLET_IP

# First time? You'll see a fingerprint warning - type 'yes'
```

### Step 3: Create Non-Root User

```bash
# Create user (replace 'yourname' with your preferred username)
adduser yourname

# Add to sudo group
usermod -aG sudo yourname

# Switch to new user
su - yourname
```

## Part 2: Install Required Software

### Step 4: Update System

```bash
# Update package lists
sudo apt update && sudo apt upgrade -y
```

### Step 5: Install Nginx

```bash
# Install Nginx
sudo apt install nginx -y

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Verify it's running
sudo systemctl status nginx
```

Visit `http://YOUR_DROPLET_IP` in a browser - you should see the Nginx welcome page!

### Step 6: Configure Firewall

```bash
# Allow necessary ports
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

## Part 3: Upload Your Portfolio

### Method A: Using SCP (Recommended for first deployment)

From your **local machine**, in the portfolio-project directory:

```bash
# Upload the entire portfolio folder
scp -r * yourname@YOUR_DROPLET_IP:~/portfolio/

# Connect to your droplet
ssh yourname@YOUR_DROPLET_IP

# Move to web directory
sudo mkdir -p /var/www/portfolio
sudo mv ~/portfolio/* /var/www/portfolio/

# Set proper permissions
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### Method B: Using Git (Recommended for ongoing updates)

**On your local machine:**
```bash
# Initialize git in your portfolio-project folder
cd portfolio-project
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

**On your droplet:**
```bash
# Install git if not present
sudo apt install git -y

# Clone your repository
cd /var/www
sudo git clone https://github.com/yourusername/portfolio.git

# Set permissions
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

**To update after making changes:**
```bash
# On droplet
cd /var/www/portfolio
sudo git pull origin main
```

## Part 4: Configure Nginx for Your Portfolio

### Step 7: Create Nginx Configuration

```bash
# Create config file
sudo nano /etc/nginx/sites-available/portfolio
```

**Paste this configuration:**

```nginx
server {
    listen 80;
    listen [::]:80;

    root /var/www/portfolio;
    index index.html;

    server_name YOUR_DROPLET_IP;  # Replace with domain later

    location / {
        try_files $uri $uri/ =404;
    }

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Cache static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Ensure correct MIME types
    location ~* \.css$ {
        add_header Content-Type text/css;
    }

    location ~* \.js$ {
        add_header Content-Type application/javascript;
    }

    location ~* \.html$ {
        add_header Content-Type text/html;
    }
}
```

Save and exit (Ctrl+X, Y, Enter)

### Step 8: Enable the Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx
```

### Step 9: Verify Your Site

Visit `http://YOUR_DROPLET_IP` in your browser. You should see your portfolio!

**If components don't load:**
- Check browser console (F12) for errors
- Verify file structure is correct
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`

## Part 5: Add Custom Domain (Optional but Recommended)

### Step 10: Point Domain to Droplet

1. Go to your domain registrar
2. Create an **A Record**:
   - Host/Name: `@` (or `portfolio` for subdomain)
   - Value: `YOUR_DROPLET_IP`
   - TTL: 3600 (or default)
3. Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Step 11: Update Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Change the `server_name` line:
```nginx
server_name yourdomain.com www.yourdomain.com;
# Or for subdomain: portfolio.yourdomain.com
```

```bash
# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

### Step 12: Install SSL Certificate (HTTPS)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow prompts:
# - Enter email address
# - Agree to terms
# - Choose to redirect HTTP to HTTPS (recommended: option 2)
```

Certbot will automatically:
- Install the SSL certificate
- Update Nginx configuration
- Set up auto-renewal

**Verify auto-renewal:**
```bash
sudo certbot renew --dry-run
```

Your site is now live at `https://yourdomain.com`! 🎉

## Part 6: Updating Your Portfolio

### After Making Changes Locally

**If using Git:**
```bash
# On local machine
git add .
git commit -m "Updated experience section"
git push origin main

# On droplet
cd /var/www/portfolio
sudo git pull origin main
```

**If using SCP:**
```bash
# Upload specific changed file
scp components/experience.html yourname@YOUR_DROPLET_IP:~/

# On droplet
ssh yourname@YOUR_DROPLET_IP
sudo mv ~/experience.html /var/www/portfolio/components/
```

**No need to restart Nginx** - changes to HTML/CSS/JS are immediate!

## Part 7: Maintenance & Monitoring

### Regular Updates
```bash
# Update system packages (monthly)
sudo apt update && sudo apt upgrade -y
```

### Check Website Status
```bash
# Check Nginx status
sudo systemctl status nginx

# View access logs
sudo tail -f /var/log/nginx/access.log

# View error logs
sudo tail -f /var/log/nginx/error.log
```

### Backup Your Site
```bash
# Create backup
sudo tar -czf ~/portfolio-backup-$(date +%Y%m%d).tar.gz /var/www/portfolio

# Download to local (from local machine)
scp yourname@YOUR_DROPLET_IP:~/portfolio-backup-*.tar.gz ~/backups/
```

### Monitor Disk Space
```bash
df -h
```

### Check Site Performance
```bash
# Test response time
curl -w "@curl-format.txt" -o /dev/null -s http://yourdomain.com
```

## Troubleshooting

### Components Not Loading (Blank Page)

**Check browser console (F12):**
- MIME type errors? See Nginx config above
- 404 errors? Check file paths are correct
- CORS errors? Make sure you're accessing via domain/IP, not file://

**Check file structure:**
```bash
cd /var/www/portfolio
ls -la
ls -la components/
ls -la assets/css/
ls -la assets/js/
```

Should see:
- index.html
- components/ folder with all .html files
- assets/css/styles.css
- assets/js/main.js

**Check permissions:**
```bash
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio
```

### 502 Bad Gateway
```bash
# Restart Nginx
sudo systemctl restart nginx
```

### Site Not Accessible
```bash
# Check firewall
sudo ufw status

# Ensure Nginx Full is allowed
sudo ufw allow 'Nginx Full'

# Check if Nginx is running
sudo systemctl status nginx
```

### SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew manually
sudo certbot renew

# Check Nginx config
sudo nginx -t
```

## Security Best Practices

### 1. Keep System Updated
```bash
# Enable automatic security updates
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure -plow unattended-upgrades
```

### 2. Disable Root Login
```bash
sudo nano /etc/ssh/sshd_config

# Change to:
# PermitRootLogin no

sudo systemctl restart sshd
```

### 3. Set Up Fail2Ban (Prevents brute force attacks)
```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### 4. Regular Backups
Set up a cron job for automatic backups:
```bash
crontab -e

# Add this line (backup every Sunday at 2 AM):
0 2 * * 0 tar -czf ~/portfolio-backup-$(date +\%Y\%m\%d).tar.gz /var/www/portfolio
```

## Performance Optimization

### Enable Brotli Compression (Better than Gzip)
```bash
# Install Brotli module
sudo apt install nginx-module-brotli -y

# Add to Nginx config
sudo nano /etc/nginx/sites-available/portfolio
```

Add inside server block:
```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/javascript application/json image/svg+xml;
```

### Monitor Site Uptime
Use a free service like:
- [UptimeRobot](https://uptimerobot.com/) - Free for 50 monitors
- [Freshping](https://www.freshworks.com/website-monitoring/) - Free plan available

### Add Analytics
Add Google Analytics or similar to track visitors. In `index.html`, add before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## Cost Summary

| Item | Cost |
|------|------|
| Basic Droplet | $6/month |
| Domain Name (optional) | $10-15/year |
| SSL Certificate | Free (Let's Encrypt) |
| **Total** | **~$6/month** or **~$82/year with domain** |

## Quick Reference Commands

```bash
# View site
curl http://YOUR_DROPLET_IP

# Reload Nginx after config changes
sudo nginx -t && sudo systemctl reload nginx

# View real-time logs
sudo tail -f /var/log/nginx/access.log

# Update from Git
cd /var/www/portfolio && sudo git pull

# Check disk space
df -h

# Restart Nginx
sudo systemctl restart nginx
```

## Next Steps

1. ✅ Customize all components with your information
2. ✅ Test locally before deploying
3. ✅ Deploy to Digital Ocean
4. ✅ Set up custom domain
5. ✅ Enable HTTPS
6. ✅ Add to resume and LinkedIn
7. ✅ Share with potential employers!

---

**Congratulations!** Your modular portfolio is now live on the internet! 🚀

For quick commands and troubleshooting, see QUICK_REFERENCE.md
