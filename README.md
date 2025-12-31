# Trader Portfolio Website

A beautiful, modern portfolio website for traders built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and aesthetic design with glassmorphism effects
- 📱 Fully responsive design
- ✨ Smooth animations using Framer Motion
- 🎯 Sections for:
  - Hero section with call-to-action
  - About section
  - Trading certificates showcase
  - Skills and expertise
  - Contact form
- 🌈 Beautiful gradient backgrounds and effects
- 🚀 Optimized for performance

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Customization

### Adding Your Information

1. **About Section**: Edit `components/About.tsx` to add your personal information
2. **Certificates**: 
   - Add your certificate images to `/public/certificates/` folder
   - Update the certificates array in `components/Certificates.tsx`
3. **Skills**: Modify the skills array in `components/Skills.tsx`
4. **Contact**: Update social links and contact information in `components/Contact.tsx`

### Styling

The website uses Tailwind CSS. You can customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and utilities

## Project Structure

```
Portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Certificates.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── public/
│   └── certificates/  (add your certificate images here)
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

MIT

