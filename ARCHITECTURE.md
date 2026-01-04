# Website Architecture: Personal Portfolio & Blog

## 1. Project Overview

This document outlines the architecture of the personal portfolio website for MD. SABBIR RAHMAN AKASH. The site is a modern, single-page application (SPA) designed to showcase professional skills, projects, research, awards, and blog content in a clean, minimalist, and highly performant manner.

The current implementation is a **Static React Application**, where all content is managed via a centralized configuration. It also features a Shariah-compliant **Investment Portal** specifically for engineering and government contract opportunities.

---

## 2. Core Features & Functionality

The website is divided into several key sections, each serving a distinct purpose:

-   **Home Page:** A dynamic landing page featuring a hero section, communication highlights, and featured previews of projects, awards, and blog posts.
-   **About Page:** A comprehensive professional summary including a biography, skill set (with progress bars and icon-based professional skills), a detailed experience timeline (career, teaching, leadership), education, and certifications.
-   **Investment Portal:** A dedicated section listing active, Shariah-compliant (Mudarabah model) investment opportunities in engineering projects. Includes detailed project breakdowns and ROI projections.
-   **Portfolio:** A filterable gallery of professional and personal projects. Each project has its own detailed page.
-   **Research:** A showcase of academic research projects and a categorized list of publications. Each research project has a detailed page.
-   **Awards:** A gallery of honors and awards, each with a dedicated detail page.
-   **Blog:** A list of blog articles with search and category filtering capabilities. Each blog post has its own readable page.
-   **Student Corner:** A centralized hub for students to access academic resources, lecture notes, and shared drives.
-   **Contact:** A page with a contact form (Formspree integration) and direct contact information.

---

## 3. Frontend Architecture

-   **Framework:** **React 18+** for building the component-based user interface.
-   **Routing:** **React Router v6** using `HashRouter`.
    -   **Routes:**
        -   `/`: Home
        -   `/about`: About
        -   `/portfolio`: Portfolio
        -   `/portfolio/:slug`: Project Detail
        -   `/research`: Research
        -   `/research/:slug`: Research Detail
        -   `/investments`: Investment Portal
        -   `/investments/:slug`: Investment Opportunity Detail
        -   `/awards`: Awards
        -   `/awards/:slug`: Award Detail
        -   `/blog`: Blog
        -   `/blog/:slug`: Blog Post
        -   `/student-corner`: Student Corner Hub
        -   `/contact`: Contact
-   **Styling:** **Tailwind CSS** with a custom theme defining:
    -   `primary`: #00A3FF (Engineering Blue)
    -   `secondary`: #FFC700 (Business Gold)
    -   `surface`: #1E1E1E (Dark UI panels)
-   **Animations:** **Framer Motion** for staggered lists, page transitions, and interactive financial cards.
-   **Icons:** **Lucide React** for consistent SVG iconography across technical and business sections.

---

## 4. Data Management (Static)

The primary source of truth is `constants.ts`, utilizing interfaces defined in `types.ts`.

-   **Key Models:**
    -   `InvestmentOpportunity`: `{ slug, title, category, status, roi, minInvestment, duration, riskLevel, model, contractValue, estimatedProfit }`
    -   `Project`: `{ slug, title, category, thumbnail, description, longDescription, technologies }`
    -   `TimelineEvent`: `{ type, icon, title, subtitle, duration, description }`
    -   `BlogPost`: `{ slug, title, date, excerpt, content, featuredImage }`
    -   `ResearchProject`: `{ slug, title, institution, duration, supervisor, longDescription }`

---

## 5. Asset Manifest & Usage

### Site-Wide & Banners

| URL                                                                                 | Page / Component      | Context / Purpose                                   |
| ----------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4`      | `Home.tsx`            | Background video for the main hero section.         |
| `https://i.imgur.com/du9IEPR.jpeg`                                                   | `About.tsx`           | New professional header banner.                     |
| `https://i.imgur.com/Th0OGFa.png`                                                     | `Portfolio.tsx`       | Decorative banner for the portfolio page.           |
| `https://i.imgur.com/74atleo.png`                                                     | `Research.tsx`        | Decorative banner for the research page.            |
| `https://images.unsplash.com/photo-1579532537598-459ecdaf39cc`                      | `Investments.tsx`     | Portal banner image.                                |

### Investment Portal Assets

| URL                                                                                 | Page / Component      | Context / Purpose                                   |
| ----------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `https://images.unsplash.com/photo-1621905251189-08b45d6a269e`                      | `InvestmentCard`      | Electrical repair project thumbnail.                |

### Experience & Timeline

| URL                             | Context / Purpose                                                     |
| ------------------------------- | --------------------------------------------------------------------- |
| `https://i.imgur.com/0HemqBs.jpeg` | Main profile picture for S. R. Akash.                               |
| `https://i.imgur.com/wYKiVUA.png` | Neuronite, KUET Logo/Event Image.                                   |

### Research & Awards Detail

| URL                             | Context / Purpose                                                     |
| ------------------------------- | --------------------------------------------------------------------- |
| `https://i.imgur.com/cN9pjkI.png` | Goatskin preservation research image.                               |
| `https://i.imgur.com/9KAJR8t.png` | Chromium adsorption research figure.                                 |
| `https://i.imgur.com/NZ4Z7zt.png` | Award winning poster image.                                         |
| `https://i.imgur.com/f3YBqjQ.png` | Biz Bash Case Study award image.                                    |
