# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Theme toggle using next-themes
- **Interactive UI**: Smooth animations with Framer Motion
- **Sections**:
  - Hero section with introduction
  - About section with personal information
  - Skills showcase
  - Projects portfolio
  - Work experience timeline
  - Contact form with EmailJS integration
- **Cursor Trail Effect**: Interactive cursor trail animation
- **Modern UI Components**: Using Radix UI primitives

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Email Integration**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app`: Next.js app router files
- `/components`: React components
  - `/ui`: Reusable UI components
  - Sections: Hero, About, Skills, Projects, Experience, Contact
- `/public`: Static assets

## Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Replace project details in the `projects.tsx` file
3. Update skills and experience in their respective component files
4. Configure EmailJS in the contact form for your own email service

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/), the platform built by the creators of Next.js:

```bash
npm run build
# or
vercel deploy
```

## Troubleshooting

### Dependency Conflicts

If you encounter dependency conflicts during installation or deployment, particularly with `date-fns` and `react-day-picker`, use one of these solutions:

1. Use the version specified in package.json (date-fns ^3.6.0)
2. Install dependencies with the `--legacy-peer-deps` flag:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Or use the `--force` flag:
   ```bash
   npm install --force
   ```

## License

[MIT](LICENSE)
