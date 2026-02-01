# DNS Configuration Guide for shivamdembla.com
## Complete DNS Setup for GitHub Pages

---

## What You Need to Configure

To make **shivamdembla.com** point to your GitHub Pages site, you need to add DNS records at your domain registrar (where you purchased the domain).

---

## DNS Records to Add

### Required Records

| Record Type | Host/Name | Value/Points To | TTL |
|-------------|-----------|-----------------|-----|
| **A** | @ | 185.199.108.153 | 3600 |
| **A** | @ | 185.199.109.153 | 3600 |
| **A** | @ | 185.199.110.153 | 3600 |
| **A** | @ | 185.199.111.153 | 3600 |
| **CNAME** | www | shivamdembla.github.io | 3600 |

### What These Mean

- **A Records** (4 total): Point your root domain (shivamdembla.com) to GitHub's servers
- **CNAME Record**: Points www.shivamdembla.com to your GitHub Pages site
- **@** means "root domain" (shivamdembla.com)
- **www** means the www subdomain (www.shivamdembla.com)
- **TTL** (Time To Live): How long DNS servers cache the record (3600 = 1 hour)

---

## Step-by-Step Instructions by Registrar

Choose your domain registrar below:

### 🔷 GoDaddy

1. **Log in** to https://godaddy.com
2. **Go to** "My Products"
3. **Click** "DNS" next to shivamdembla.com
4. **Add A Records**:
   - Click "Add" button
   - Type: **A**
   - Name: **@**
   - Value: **185.199.108.153**
   - TTL: **1 Hour** (or 3600 seconds)
   - Click "Save"
   - **Repeat 3 more times** for the other 3 IP addresses
5. **Add CNAME Record**:
   - Click "Add"
   - Type: **CNAME**
   - Name: **www**
   - Value: **shivamdembla.github.io**
   - TTL: **1 Hour**
   - Click "Save"
6. **Delete old records** (if any):
   - Look for existing A records pointing to other IPs
   - Delete parking page A records
   - Delete old CNAME records for www

**DNS Updates**: Usually live in 10-30 minutes

---

### 🔶 Namecheap

1. **Log in** to https://namecheap.com
2. **Go to** "Domain List"
3. **Click** "Manage" next to shivamdembla.com
4. **Go to** "Advanced DNS" tab
5. **Add A Records**:
   - Click "Add New Record"
   - Type: **A Record**
   - Host: **@**
   - Value: **185.199.108.153**
   - TTL: **Automatic** (or 3600)
   - Click ✓ (checkmark)
   - **Repeat 3 more times** for other IPs
6. **Add CNAME Record**:
   - Click "Add New Record"
   - Type: **CNAME Record**
   - Host: **www**
   - Value: **shivamdembla.github.io**
   - TTL: **Automatic**
   - Click ✓
7. **Delete old records**:
   - Click trash icon next to old A records
   - Delete parking page records

**DNS Updates**: Usually live in 30 minutes

---

### 🔷 Google Domains

1. **Log in** to https://domains.google.com
2. **Click** on shivamdembla.com
3. **Go to** "DNS" tab on the left
4. **Scroll to** "Custom resource records"
5. **Add A Records**:
   - Host name: **@**
   - Type: **A**
   - TTL: **3600**
   - Data: **185.199.108.153**
   - Click "Add"
   - Click "Add more to this host" 3 times
   - Add the other 3 IP addresses
   - Click "Save"
6. **Add CNAME Record**:
   - Host name: **www**
   - Type: **CNAME**
   - TTL: **3600**
   - Data: **shivamdembla.github.io.**
   - Click "Add"

**DNS Updates**: Usually live in 15 minutes

---

### ☁️ Cloudflare

1. **Log in** to https://cloudflare.com
2. **Select** shivamdembla.com from dashboard
3. **Go to** "DNS" section
4. **Add A Records**:
   - Click "Add record"
   - Type: **A**
   - Name: **@**
   - IPv4 address: **185.199.108.153**
   - Proxy status: **DNS only** (grey cloud icon) ⚠️ Important!
   - TTL: **Auto**
   - Click "Save"
   - **Repeat 3 more times** for other IPs
5. **Add CNAME Record**:
   - Click "Add record"
   - Type: **CNAME**
   - Name: **www**
   - Target: **shivamdembla.github.io**
   - Proxy status: **DNS only** (grey cloud) ⚠️ Important!
   - Click "Save"

**Important**: Must use "DNS only" (not "Proxied") for GitHub Pages to work!

**DNS Updates**: Usually instant to 5 minutes

---

### 🌐 Other Registrars

If your registrar isn't listed above, look for:
- "DNS Management"
- "DNS Records"
- "Advanced DNS"
- "Nameserver Records"

Then add the same records as shown in the table at the top.

---

## After Adding DNS Records

### 1. Wait for Propagation

DNS changes don't happen instantly. Typical wait times:
- **Minimum**: 10 minutes
- **Typical**: 1-2 hours
- **Maximum**: 48 hours

### 2. Check DNS Propagation

**Option A: Online Tool**
1. Go to https://dnschecker.org
2. Enter: **shivamdembla.com**
3. Check Type: **A**
4. You should see the 4 GitHub IPs globally

**Option B: Command Line**

```bash
# Mac/Linux
dig shivamdembla.com

# Windows
nslookup shivamdembla.com

# Should show:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### 3. Add Domain in GitHub

Once DNS is propagating:
1. Go to your repository on GitHub
2. Settings → Pages
3. Custom domain: **shivamdembla.com**
4. Click "Save"
5. Wait for "DNS check successful" ✅
6. Check "Enforce HTTPS"

---

## Verification Checklist

- [ ] Added 4 A records pointing to GitHub IPs
- [ ] Added CNAME record for www subdomain
- [ ] Removed old/conflicting DNS records
- [ ] Waited for DNS propagation (check dnschecker.org)
- [ ] Created CNAME file in repository root
- [ ] Added custom domain in GitHub Pages settings
- [ ] Waited for DNS verification in GitHub
- [ ] Enabled HTTPS enforcement
- [ ] Tested: http://shivamdembla.com
- [ ] Tested: http://www.shivamdembla.com
- [ ] Tested: https://shivamdembla.com
- [ ] Tested: https://www.shivamdembla.com

---

## Common DNS Issues & Solutions

### Issue 1: "DNS check failed" in GitHub

**Solution**:
- Wait longer (up to 48 hours)
- Verify A records are correct
- Check that CNAME file exists in repo
- Try removing and re-adding domain in GitHub

### Issue 2: Site shows "404 Not Found"

**Solution**:
- Ensure `index.html` is in repository root
- Check GitHub Pages is enabled
- Verify files are pushed to `main` branch

### Issue 3: "This site can't be reached"

**Solution**:
- DNS not propagated yet - wait longer
- Check DNS records are correct
- Clear browser cache
- Try different browser/incognito mode

### Issue 4: Shows old parked domain page

**Solution**:
- Delete old A records at registrar
- Clear browser cache (Ctrl+Shift+R)
- Wait for DNS to update
- Try incognito mode

### Issue 5: HTTPS not working

**Solution**:
- Wait 24 hours for GitHub to provision certificate
- Ensure "Enforce HTTPS" is checked
- Verify DNS is fully propagated
- All external resources must use HTTPS

---

## DNS Record Examples

### ✅ Correct Configuration

```
Type    Host    Value                   TTL
A       @       185.199.108.153        3600
A       @       185.199.109.153        3600
A       @       185.199.110.153        3600
A       @       185.199.111.153        3600
CNAME   www     shivamdembla.github.io 3600
```

### ❌ Common Mistakes

```
❌ A     @       192.0.2.1              3600  (Wrong IP - parking page)
❌ CNAME @       shivamdembla.github.io 3600  (Can't use CNAME on root)
❌ A     www     185.199.108.153        3600  (www should be CNAME)
❌ CNAME www     shivamdembla.com       3600  (Wrong target)
```

---

## Testing Your DNS

### Basic Test
```bash
# Should return GitHub IPs
ping shivamdembla.com
```

### Detailed Test
```bash
# Check A records
dig A shivamdembla.com

# Check CNAME record
dig CNAME www.shivamdembla.com

# Check from different DNS server
dig @8.8.8.8 shivamdembla.com
```

### Online Tools
- https://dnschecker.org - Check global DNS propagation
- https://mxtoolbox.com/SuperTool.aspx - DNS diagnostics
- https://www.whatsmydns.net - Check DNS worldwide

---

## Timeline

Here's what to expect:

**Day 1 (Today)**
- ✅ Add DNS records (5 minutes)
- ✅ Create CNAME file (1 minute)
- ✅ Push to GitHub (2 minutes)
- ⏳ Wait for DNS propagation (1-48 hours)

**Day 1-2**
- ⏳ DNS propagates globally
- ✅ Add custom domain in GitHub (1 minute)
- ⏳ Wait for DNS check in GitHub
- ✅ Enable HTTPS (automatic)

**Day 2-3**
- ✅ SSL certificate provisioned
- ✅ HTTPS enforced
- ✅ Site fully live at https://shivamdembla.com 🎉

---

## Support Resources

- **GitHub Pages**: https://docs.github.com/en/pages
- **Custom Domains**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **DNS Troubleshooting**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages

---

## Quick Reference

**GitHub DNS IPs** (for A records):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Target** (for www record):
```
shivamdembla.github.io
```

**CNAME File Content**:
```
shivamdembla.com
```

---

**Once DNS is configured, your site will be live at:**
- ✅ https://shivamdembla.com
- ✅ https://www.shivamdembla.com
- ✅ Free SSL certificate
- ✅ Automatic deployments

Good luck with your deployment! 🚀
