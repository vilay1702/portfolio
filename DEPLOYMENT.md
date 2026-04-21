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

After successful deployment, your portfolio is available at:

```
https://vilaybende.com
```

## 🌐 Custom Domain (vilaybende.com)

The `public/CNAME` file tells GitHub Pages to serve the build on `vilaybende.com`. To finish wiring it up:

### 1. DNS records (at your registrar)

For the **apex** (`vilaybende.com`), add four `A` records pointing to GitHub's Pages IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

(Optional but recommended — add AAAA records for IPv6:)

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For the **www subdomain** (`www.vilaybende.com`), add a `CNAME` record pointing to:

```
vilay1702.github.io
```

### 2. Configure in GitHub

1. Repository → **Settings** → **Pages**
2. Under **Custom domain**, enter `vilaybende.com` and save
3. Wait for the DNS check to go green (can take a few minutes up to 24h)
4. Tick **Enforce HTTPS** once the certificate is issued

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

🎉 **Your portfolio is live at:** `https://vilaybende.com`
