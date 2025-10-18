# CSC13008 - Group Assignment# React + TypeScript + Vite



A modern, responsive team introduction website built with React, TypeScript, and TailwindCSS.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🎯 Project OverviewCurrently, two official plugins are available:



This is a frontend-only web application created as part of the CSC13008 course group assignment. The website showcases our team and individual member profiles with a clean, professional design inspired by HTML5 UP's "Read Only" template.- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ✨ Features

## React Compiler

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices

- **Modern Tech Stack**: Built with React 19, TypeScript, and TailwindCSSThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- **Smooth Navigation**: Client-side routing with React Router for fast page transitions

- **Interactive UI**: Hover effects, animations, and smooth transitions## Expanding the ESLint configuration

- **Accessible**: Semantic HTML and ARIA labels for better accessibility

- **Clean Code**: TypeScript for type safety and better code maintainabilityIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:



## 🎨 Design```js

export default defineConfig([

- **Primary Color**: `#4acaa8` (Teal/Turquoise)  globalIgnores(['dist']),

- **Secondary Color**: `#989898` (Gray)  {

- **Design Inspiration**: HTML5 UP's "Read Only" template    files: ['**/*.{ts,tsx}'],

- **Layout**: Sidebar navigation with responsive mobile menu    extends: [

      // Other configs...

## 📋 Pages

      // Remove tseslint.configs.recommended and replace with this

1. **Home** (`/`) - Team overview with introduction and member cards      tseslint.configs.recommendedTypeChecked,

2. **Member Details** (`/member/1` to `/member/5`) - Individual member profiles with bio, skills, education, interests, and achievements      // Alternatively, use this for stricter rules

3. **About** (`/about`) - Project information, technologies used, and assignment requirements      tseslint.configs.strictTypeChecked,

      // Optionally, add this for stylistic rules

## 🛠️ Technologies Used      tseslint.configs.stylisticTypeChecked,



### Frontend Framework      // Other configs...

- **React 19** - For building interactive user interfaces    ],

- **TypeScript** - For type-safe development    languageOptions: {

      parserOptions: {

### Styling        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- **TailwindCSS v4** - Utility-first CSS framework        tsconfigRootDir: import.meta.dirname,

- **Custom Design System** - Consistent color scheme and components      },

      // other options...

### Build Tools    },

- **Vite** - Fast development server and optimized production builds  },

- **ESLint** - Code linting and quality checks])

```

### Routing

- **React Router DOM** - Client-side navigationYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:



## 🚀 Getting Started```js

// eslint.config.js

### Prerequisitesimport reactX from 'eslint-plugin-react-x'

- Node.js (v18 or higher)import reactDom from 'eslint-plugin-react-dom'

- npm or yarn

export default defineConfig([

### Installation  globalIgnores(['dist']),

  {

1. Clone the repository:    files: ['**/*.{ts,tsx}'],

```bash    extends: [

git clone <repository-url>      // Other configs...

cd CSC13008-GA01      // Enable lint rules for React

```      reactX.configs['recommended-typescript'],

      // Enable lint rules for React DOM

2. Install dependencies:      reactDom.configs.recommended,

```bash    ],

npm install    languageOptions: {

```      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

3. Start the development server:        tsconfigRootDir: import.meta.dirname,

```bash      },

npm run dev      // other options...

```    },

  },

4. Open your browser and navigate to `http://localhost:5173`])

```

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

#### Option 1: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/CSC13008-GA01"
}
```

3. Deploy:
```bash
npm run deploy
```

#### Option 2: Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

#### Option 3: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

Or simply drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

## 📁 Project Structure

```
CSC13008-GA01/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Sidebar.tsx  # Navigation sidebar
│   │   ├── Footer.tsx   # Footer component
│   │   └── Layout.tsx   # Main layout wrapper
│   ├── pages/          # Page components
│   │   ├── Home.tsx    # Homepage
│   │   ├── MemberDetail.tsx  # Member profile pages
│   │   └── About.tsx   # About page
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles & Tailwind imports
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 📊 Assignment Requirements Checklist

- ✅ **Information (4.0 points)**: 
  - Homepage with team introduction
  - Detail pages for 5 members with comprehensive information
  
- ✅ **Theme and Color (2.0 points)**: 
  - Custom theme with primary color #4acaa8
  - Consistent color scheme throughout
  
- ✅ **Responsive Layout (2.0 points)**: 
  - Responsive sidebar navigation
  - Mobile-friendly header with hamburger menu
  - Adaptive footer
  - Works on all screen sizes
  
- ✅ **Publish on Public Host (2.0 points)**: 
  - Ready for deployment to GitHub Pages, Vercel, or Netlify
  - Build process optimized for production

## 👥 Team Members

- **Member 1** - Team Leader & Full-Stack Developer
- **Member 2** - Frontend Developer & UI Specialist
- **Member 3** - Backend Developer & Database Expert
- **Member 4** - UI/UX Designer & Creative Director
- **Member 5** - Quality Assurance & Testing Specialist

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

This project uses:
- ESLint for code linting
- TypeScript for type checking
- Prettier-compatible formatting

## 📝 License

This project is created for educational purposes as part of the CSC13008 course.

## 🙏 Acknowledgments

- Design inspired by [HTML5 UP's Read Only template](https://html5up.net/read-only)
- Icons from [Heroicons](https://heroicons.com/)
- Built with [Vite](https://vitejs.dev/)

## 📞 Contact

For questions or feedback about this project, please contact any team member through the website.

---

**Course**: CSC13008 - Web Development  
**Assignment**: Group Project - Team Introduction Website  
**Year**: 2025
