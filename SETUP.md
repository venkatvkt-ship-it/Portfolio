# Portfolio Setup & Running Guide

## How to Run This Project

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Start Development Server**
```bash
npm run dev
```
The application will be available at **http://localhost:3000**

### 3. **Build for Production**
```bash
npm run build
```

### 4. **Start Production Server**
```bash
npm start
```

### 5. **Run Linting**
```bash
npm run lint
```

---

## Tech Stack

### Frontend Framework & Runtime
- **Next.js 16.1.6** - React framework with App Router & SSR
- **React 19.2.3** - UI library
- **React DOM 19.2.3** - React rendering engine
- **TypeScript 5.7.3** - Static type checking

### Styling & Design
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.5** - CSS transformation tool
- **Autoprefixer 10.4.20** - Automatically adds vendor prefixes
- **Tailwind Merge 2.5.5** - Utility class merging
- **Tailwind Animate 1.0.7** - Animation utilities

### Component & Icon Libraries
- **Lucide React 0.544.0** - Modern icon library (ArrowDown, Github, Linkedin, Mail, etc.)
- **Class Variance Authority 0.7.1** - Component variant management
- **clsx 2.1.1** - Conditional className utility

### Build & Development
- **Turbopack** - Next.js native bundler for fast builds
- **Node.js (via npm)** - Package manager

### Development Tools
- **Next.js Lint** - ESLint configuration for Next.js
- **@types/react 19.2.7** - React TypeScript definitions
- **@types/react-dom 19.2.3** - React DOM TypeScript definitions
- **@types/node 22** - Node.js TypeScript definitions

### File Structure
```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles
├── components/
│   ├── navbar.tsx        # Navigation header
│   ├── hero.tsx          # Hero section with typing animation
│   ├── about.tsx         # About section
│   ├── projects.tsx      # Projects showcase
│   ├── skills.tsx        # Skills grid
│   ├── experience.tsx    # Experience timeline
│   ├── achievements.tsx  # Achievements with counters
│   ├── contact.tsx       # Contact section
│   ├── footer.tsx        # Footer
│   ├── color-picker.tsx  # Theme color picker
│   ├── theme-provider.tsx # Theme provider setup
│   └── ui/               # UI component library (pre-built components)
├── hooks/
│   ├── use-scroll-reveal.ts  # Scroll reveal animation hook
│   ├── use-mobile.tsx        # Mobile detection hook
│   └── use-toast.ts          # Toast notifications hook
├── lib/
│   └── utils.ts          # Utility functions (cn for className merging)
├── styles/
│   └── globals.css       # Global CSS variables and styles
├── public/
│   └── portfolio.html    # Static HTML file
└── package.json          # Project dependencies

```

---

## Key Features

✅ **Modern Stack** - Next.js 16 with React 19 & TypeScript
✅ **Fast Builds** - Turbopack bundler integration
✅ **Responsive Design** - Tailwind CSS with mobile-first approach
✅ **Dark Mode** - Theme switcher with color customization
✅ **Animations** - Scroll reveal & typing effects
✅ **SEO Ready** - Metadata and semantic HTML
✅ **Icon Library** - 600+ icons via Lucide React

---

## Customization

### Update Portfolio Content
- Edit component files in `/components` folder
- Update metadata in `app/layout.tsx`
- Customize colors in `app/globals.css`

### Change Theme Colors
The color picker sets CSS variables:
```css
--primary: HSL color
--accent: HSL color
--ring: HSL color
```

### Add More Sections
1. Create a new component in `/components`
2. Import it in `app/page.tsx`
3. Add it to the main layout

---

## Performance & Optimization

- **Server-Side Rendering (SSR)** enabled by default
- **Code Splitting** automatic with Next.js App Router
- **Image Optimization** configured (unoptimized for static export)
- **Font Optimization** with Next.js font loading

---

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
1. Build: `npm run build`
2. Deploy the `.next` folder contents to your platform

---

**Note**: Dependencies have been optimized. Unused packages have been removed to reduce bundle size.
