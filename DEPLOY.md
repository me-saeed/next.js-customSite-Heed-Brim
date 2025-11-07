# How to Deploy to Netlify

## Option 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Push your code to GitHub
1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

### Step 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub account and select your repository
4. Netlify will automatically detect the settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click **"Deploy site"**

### Step 3: Wait for deployment
- Netlify will build and deploy your site
- You'll get a URL like `your-site-name.netlify.app`
- The site will automatically update when you push to GitHub

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Build your site
```bash
npm run build
```

### Step 4: Deploy
```bash
netlify deploy --prod
```

## Important Notes

- Your project is configured for **static export** (`output: 'export'` in `next.config.js`)
- The build creates an `out` directory with static files
- Netlify will automatically use the `netlify.toml` configuration file
- Make sure to commit the `netlify.toml` file to your repository

## Troubleshooting

If the build fails on Netlify:
1. Check the build logs in the Netlify dashboard
2. Make sure all dependencies are in `package.json`
3. Verify Node.js version (set to 18 in `netlify.toml`)

## Custom Domain

After deployment:
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your domain

