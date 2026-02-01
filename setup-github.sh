#!/bin/bash

# GitHub Pages Portfolio Setup Script
# Username: Dembla
# Repository: myportfolio
# Domain: shivamdembla.com

github_username="Dembla"
repo_name="myportfolio"

echo "╔════════════════════════════════════════════════════════╗"
echo "║   Portfolio GitHub Pages Setup Script                 ║"
echo "║   User: ${github_username}                            ║"
echo "║   Repo: ${repo_name}                                  ║"
echo "║   Domain: shivamdembla.com                            ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

echo "📋 Configuration:"
echo "   GitHub Username: ${github_username}"
echo "   Repository Name: ${repo_name}"
echo "   Remote URL: https://github.com/${github_username}/${repo_name}.git"
echo ""

read -p "Proceed with this setup? (y/n) [y]: " confirm
confirm=${confirm:-y}

if [[ $confirm != "y" && $confirm != "Y" ]]; then
    echo "❌ Setup cancelled."
    exit 0
fi

echo ""
echo "🚀 Setting up Git repository..."

# Initialize git if not already initialized
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "ℹ️  Git repository already exists"
fi

# Create CNAME file
echo "shivamdembla.com" > CNAME
echo "✅ Created CNAME file"

# Create .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
cat > .gitignore << 'EOF'
# OS files
.DS_Store
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*~

# Logs
*.log

# Backup files
*.bak
*.tmp
EOF
    echo "✅ Created .gitignore file"
fi

# Ensure main branch
current_branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
if [ "$current_branch" != "main" ] && [ -n "$current_branch" ]; then
    git branch -M main
    echo "✅ Switched to main branch"
fi

# Add and commit
git add .

if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    git commit -m "Initial commit: Portfolio website"
    echo "✅ Changes committed"
fi

# Set remote
if git remote | grep -q origin; then
    git remote set-url origin "https://github.com/${github_username}/${repo_name}.git"
    echo "🔁 Updated existing remote"
else
    git remote add origin "https://github.com/${github_username}/${repo_name}.git"
    echo "✅ Added remote origin"
fi

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║   Next Steps                                           ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo "1️⃣  Create Repository:"
echo "   https://github.com/new"
echo "   Name: ${repo_name} (Public)"
echo "   ❌ Do NOT initialize with README"
echo ""
echo "2️⃣  Push Code:"
echo "   git push -u origin main"
echo ""
echo "3️⃣  Enable GitHub Pages:"
echo "   https://github.com/${github_username}/${repo_name}/settings/pages"
echo "   Source: main / root"
echo ""
echo "4️⃣  DNS Records for shivamdembla.com:"
echo "   A     @   185.199.108.153"
echo "   A     @   185.199.109.153"
echo "   A     @   185.199.110.153"
echo "   A     @   185.199.111.153"
echo "   CNAME www ${github_username}.github.io"
echo ""
echo "5️⃣  Set Custom Domain in GitHub Pages"
echo "   shivamdembla.com → Enforce HTTPS"
echo ""
echo "✨ Setup complete. Push when ready 🚀"
