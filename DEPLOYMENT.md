# Vercel Deployment Guide

## Prerequisites
- Node.js 16+ installed
- Vercel CLI installed (`npm i -g vercel`)
- GitHub repository connected to Vercel

## Deployment Steps

### 1. Local Build Test
First, test the build locally to ensure everything works:

```bash
cd client
npm install
npm run build
```

### 2. Vercel Configuration
The project includes:
- `vercel.json` - Vercel configuration
- `.vercelignore` - Files to exclude from deployment

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow the prompts:
# - Set up and deploy: Yes
# - Which scope: Select your account
# - Link to existing project: No
# - Project name: codable-studio (or your preferred name)
# - Directory: ./ (root directory)
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - Framework Preset: Create React App
   - Root Directory: `./` (root)
   - Build Command: `cd client && npm install && npm run build`
   - Output Directory: `client/build`
   - Install Command: `cd client && npm install`

### 4. Environment Variables (if needed)
If your app uses environment variables, add them in the Vercel dashboard:
- Go to Project Settings > Environment Variables
- Add any required environment variables

## Troubleshooting

### Common Issues

#### 1. Build Fails with "Module not found"
- Ensure all dependencies are in `client/package.json`
- Check that `node_modules` is not in `.vercelignore`

#### 2. Large File Upload Issues
The project includes large video files (19MB, 23MB). If deployment fails:
- Consider compressing videos or hosting them externally (YouTube, Vimeo)
- Update video references to use external URLs

#### 3. Routing Issues
- The `vercel.json` includes rewrites for React Router
- All routes should redirect to `index.html`

#### 4. Build Timeout
- The configuration includes extended function timeout
- If still timing out, consider optimizing the build process

### Optimization Tips

#### 1. Video Optimization
```bash
# Compress videos using ffmpeg
ffmpeg -i coding.mp4 -vf scale=1280:720 -c:v libx264 -crf 23 coding_compressed.mp4
```

#### 2. Image Optimization
- Use WebP format for images
- Compress images before adding to the project

#### 3. Bundle Size
- Check bundle size: `npm run build` and review the output
- Consider code splitting for large components

## Post-Deployment

### 1. Verify Deployment
- Check all pages load correctly
- Test navigation and routing
- Verify all assets (images, videos) load

### 2. Custom Domain (Optional)
- Go to Project Settings > Domains
- Add your custom domain
- Configure DNS settings

### 3. Analytics (Optional)
- Enable Vercel Analytics in Project Settings
- Or integrate Google Analytics

## Support
If you encounter issues:
1. Check Vercel deployment logs
2. Test build locally first
3. Review the troubleshooting section above
4. Check Vercel documentation: https://vercel.com/docs 