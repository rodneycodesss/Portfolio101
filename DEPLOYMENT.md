# Deployment Guide

## GitHub Pages (Recommended)

### Automatic Deployment (GitHub Actions)
1. The repository includes a GitHub Actions workflow that automatically deploys on push to main branch
2. Go to your repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select "gh-pages" branch and "/ (root)" folder
5. Click Save

### Manual Deployment
1. Build the project: `npm run build`
2. The built files will be in the `dist` folder
3. Upload the contents of `dist` to your hosting platform

## Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy!

## Local Testing

```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173`

## Troubleshooting

### If nothing shows up:
1. Check the browser console for errors
2. Verify the base path in `vite.config.ts` matches your deployment URL
3. Ensure all assets are loading correctly
4. Check if your hosting platform supports SPA routing

### For GitHub Pages:
- URL will be: `https://yourusername.github.io/Portfolio101/`
- Make sure the base path in `vite.config.ts` is set to `/Portfolio101/` 