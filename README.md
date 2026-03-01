# Devraj Jaiswal Portfolio (React)

A personal portfolio website built with React + Vite, migrated from a static HTML/CSS/Bootstrap version to a component-based architecture.

Live site: [https://devrajjaiswal.vercel.app](https://devrajjaiswal.vercel.app)

## Features

- Multi-page portfolio using React Router
- Reusable section components (`Hero`, `About`, `Skills`, `Projects`, `Contact`)
- Responsive navigation with mobile menu
- About section tabs (Skills / Experience / Education) powered by React state
- Scroll animations using AOS attributes
- Contact form integration via Formspree
- SEO metadata in `index.html` (title, description, Open Graph tags, canonical URL)

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4 (with custom stylesheet in `src/index.css`)
- Font Awesome (CDN)
- AOS (CDN)

## Project Structure

```text
src/
  components/
    layouts/
      MainLayout.jsx
    sections/
      Hero.jsx
      About.jsx
      Skills.jsx
      Projects.jsx
      Contact.jsx
    Header.jsx
    Footer.jsx
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Contact.jsx
    Blog.jsx
  App.jsx
  main.jsx
  index.css
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd my-portfolio-wtih-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Run app in development mode
- `npm run build` - Create production build in `dist/`
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Routing

Configured routes in `src/App.jsx`:

- `/` - Home
- `/about` - About page
- `/skills` - Skills page
- `/projects` - Projects page
- `/blogs` - Blog page (placeholder)
- `/contact` - Contact page

## Customization Guide

- Update personal details and section content inside `src/components/sections/*`
- Update navigation links in `src/components/Header.jsx`
- Update colors, spacing, and responsive styles in `src/index.css`
- Update SEO/meta tags in `index.html`
- Replace images and resume file in the `public/images` directory

## Contact Form

Current setup submits the form to Formspree:

- Endpoint configured in `src/components/sections/Contact.jsx`
- Replace with your own Formspree form ID if needed

## Build and Deployment

Build for production:

```bash
npm run build
```

Deploy the generated `dist/` folder to platforms like Netlify, Vercel, GitHub Pages, or any static hosting provider.

## Author

**Devraj Jaiswal**

- Website: [https://devrajjaiswal.vercel.app](https://devrajjaiswal.vercel.app)
- LinkedIn: [https://www.linkedin.com/in/devraj-jaiswal/](https://www.linkedin.com/in/devraj-jaiswal/)
- GitHub: [https://github.com/devrajjaiswal](https://github.com/devrajjaiswal)
