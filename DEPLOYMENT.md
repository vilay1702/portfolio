# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

1. **GitHub Repository** - Your code should be pushed to GitHub
2. **GitHub Pages Enabled** - Enable GitHub Pages in your repository settings
3. **GitHub Actions Permissions** - Ensure Actions have proper permissions

## ⚙️ Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. Configure Repository Settings

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

### 3. Push Your Code

The workflow will automatically trigger when you push to `main` or `master` branch:

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

## 🔄 How It Works

### Workflow Steps:

1. **Checkout** - Downloads your code
2. **Setup Node.js** - Installs Node.js 18
3. **Install Dependencies** - Runs `npm ci`
4. **Run Tests** - Executes test suite
5. **Build Application** - Creates production build
6. **Deploy to GitHub Pages** - Uploads build files

### Triggers:

- ✅ **Push to main/master** - Automatic deployment
- ✅ **Pull Requests** - Build and test only
- ✅ **Manual trigger** - Via GitHub Actions tab

## 📱 Access Your Site

After successful deployment, your portfolio will be available at:

```
https://[your-username].github.io/[repository-name]
```

**Example:** `https://vilay1702.github.io/vilay-portfolio`

## 🔍 Troubleshooting

### Common Issues:

1. **Build Fails**

   - Check if all dependencies are in `package.json`
   - Ensure `npm run build` works locally
   - Review GitHub Actions logs

2. **Page Not Found**

   - Verify GitHub Pages is enabled
   - Check if deployment completed successfully
   - Wait a few minutes for DNS propagation

3. **Permission Errors**
   - Ensure repository has proper permissions
   - Check if GitHub Pages is enabled
   - Verify workflow file is in `.github/workflows/`

### Check Deployment Status:

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Review the logs for any errors

## 🎯 Manual Deployment

To manually trigger deployment:

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## 📊 Monitoring

- **GitHub Actions** - View deployment status
- **GitHub Pages** - Check site availability
- **Repository Settings** - Configure Pages source

## 🔧 Customization

### Environment Variables

Add to your repository secrets if needed:

- `NODE_VERSION` - Change Node.js version
- `BUILD_COMMAND` - Custom build command

### Build Optimization

The workflow includes:

- ✅ **Caching** - npm dependencies cached
- ✅ **Concurrency** - Prevents multiple deployments
- ✅ **Artifacts** - Efficient file transfer

---

🎉 **Your portfolio will be live at:** `https://[username].github.io/[repo-name]`
