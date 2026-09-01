# iConclave

A modern, high-performance web portal built for a multidisciplinary student technology and innovation competition.

## Overview

This project serves as the central hub for exploring various competition disciplines, event schedules, and registration details. It is designed with a minimal interface but maximum personality, focusing on speed, accessibility, and a premium user experience.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel / Netlify Ready (Static Export Capable)

## Features

- **Dynamic Routing:** Statically generated detail pages for all competition tracks.
- **Custom Design System:** Tailored typography scale, fluid spacing, and custom color tokens using Tailwind CSS v4's CSS variable engine.
- **High Performance:** Heavily optimized for Core Web Vitals with minimal client-side JavaScript.
- **Accessibility:** Reduced-motion preferences respected, semantic HTML, and ARIA attributes integrated.
- **Data-Driven Architecture:** All competition content, FAQs, and schedules are isolated in a robust TypeScript data layer, cleanly separated from UI components.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will compile the TypeScript, optimize the CSS, and statically generate all necessary routes.

## Project Structure

- `/app` - Next.js App Router pages and global layouts
- `/components` - Modular, reusable React components (UI primitives, layouts, sections)
- `/data` - Centralized data layer containing all site content and configurations
- `/lib` - Shared utilities and helpers
- `/public` - Static assets, SVG graphics, and brand imagery

## License

All rights reserved. This repository contains proprietary code and design assets for the iConclave event.
