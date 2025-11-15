# Website Architecture: Personal Portfolio & Blog

## 1. Project Overview

This document outlines the architecture of the personal portfolio website for MD. SABBIR RAHMAN AKASH. The site is a modern, single-page application (SPA) designed to showcase professional skills, projects, research, awards, and blog content in a clean, minimalist, and highly performant manner.

The current implementation is a **Static React Application**, where all content is hardcoded into the source code. This document also serves as a blueprint for migrating to a full-stack architecture (e.g., MERN stack) in the future.

---

## 2. Core Features & Functionality

The website is divided into several key sections, each serving a distinct purpose:

-   **Home Page:** A dynamic landing page featuring a hero section, communication highlights, and featured previews of projects, awards, and blog posts.
-   **About Page:** A comprehensive professional summary including a biography, skill set (with progress bars), a detailed experience timeline (career, teaching, leadership), education, and certifications.
-   **Portfolio:** A filterable gallery of professional and personal projects. Each project has its own detailed page.
-   **Research:** A showcase of academic research projects and a categorized list of publications. Each research project has a detailed page.
-   **Awards:** A gallery of honors and awards, each with a dedicated detail page.
-   **Blog:** A list of blog articles with search and category filtering capabilities. Each blog post has its own readable page.
-   **Contact:** A page with a contact form for inquiries and direct contact information.
-   **Global UI:**
    -   **Header:** Sticky navigation bar that becomes semi-transparent on scroll.
    -   **Footer:** Contains social media links and copyright information.
    -   **Layout:** A consistent wrapper that provides structure to all pages.

---

## 3. Frontend Architecture (Current Implementation)

-   **Framework:** **React 18+** for building the component-based user interface.
-   **Routing:** **React Router v6** using `HashRouter`. This choice ensures compatibility with simple static file hosting, as the routing is handled entirely on the client-side using the URL hash (`#`).
    -   **Routes:**
        -   `/`: Home
        -   `/about`: About
        -   `/portfolio`: Portfolio
        -   `/portfolio/:slug`: Project Detail
        -   `/research`: Research
        -   `/research/:slug`: Research Detail
        -   `/awards`: Awards
        -   `/awards/:slug`: Award Detail
        -   `/blog`: Blog
        -   `/blog/:slug`: Blog Post
        -   `/contact`: Contact
-   **Styling:** **Tailwind CSS** for a utility-first styling approach.
    -   **Custom Theme:** A custom theme is configured in `tailwind.config.js` to define a specific color palette (primary, secondary, background, surface, text) and fonts (`Lato` for sans-serif, `Montserrat` for display).
    -   **Custom Prose:** Custom CSS styles are defined in `index.html` to format markdown content beautifully, similar to the `@tailwindcss/typography` plugin.
-   **Animations:** **Framer Motion** is used extensively for:
    -   Page transitions (`AnimatePresence`).
    -   Staggered loading animations for list items.
    -   Micro-interactions on hover (e.g., cards lifting, buttons scaling).
    -   Animated counters for statistics.
-   **Icons:** **Lucide React** for a lightweight and consistent set of SVG icons.
-   **Component Structure:**
    -   `pages/`: Contains top-level components for each route (e.g., `Home.tsx`, `About.tsx`).
    -   `components/`: Contains reusable UI elements (e.g., `ProjectCard.tsx`, `Layout.tsx`, `AnimatedPage.tsx`).
    -   `utils/`: Contains helper files, like `animations.ts` for centralized animation variants.

---

## 4. Data Management (Static)

All content for the website is managed statically within the frontend codebase.

-   **Data Source:** The primary source of truth is the `constants.ts` file. This file exports typed arrays and objects containing all the text, images, and metadata for the entire site.
-   **Data Models (Types):** The structure of all data is strictly defined using TypeScript interfaces in the `types.ts` file. This ensures data consistency across the application. The key models are:
    -   `Project`: `{ slug, title, category, thumbnail, description, longDescription, images, technologies, liveLink?, repoLink? }`
    -   `BlogPost`: `{ slug, title, date, author, excerpt, content, featuredImage, category }`
    -   `ResearchProject`: `{ slug, title, institution, duration, supervisor, description, longDescription, image, images?, videoUrl? }`
    -   `Award`: `{ slug, title, organization, date, description, longDescription, image, images?, videoUrl? }`
    -   `TimelineEvent`: `{ type, icon, title, subtitle, duration, description, image? }`
    -   `Education`: `{ institution, degree, duration, details, thesisTitle?, images }`
    -   `Skill`: `{ name, level }`
    -   `Publication`: `{ type, title, details, link? }`
-   **Assets:**
    -   Images are currently hot-linked from external services like `imgur.com` and `picsum.photos`.
    -   Videos are embedded from YouTube and Pexels.

---

## 5. Blueprint for a Full-Stack (MERN) Implementation

To convert this static site into a dynamic MERN application, the following architectural changes are required.

### A. Backend (Node.js & Express.js)

A RESTful API server needs to be created to manage and serve the data.

-   **Responsibilities:** Handle CRUD (Create, Read, Update, Delete) operations for all content.
-   **API Endpoints:** The API should expose endpoints that correspond to the data models.
    -   `GET /api/projects` -> Get all projects.
    -   `GET /api/projects/:slug` -> Get a single project by its slug.
    -   `GET /api/posts` -> Get all blog posts (with pagination).
    -   `GET /api/posts/:slug` -> Get a single blog post.
    -   `GET /api/research` -> Get all research projects.
    -   `GET /api/research/:slug` -> Get a single research project.
    -   `GET /api/awards` -> Get all awards.
    -   `GET /api/awards/:slug` -> Get a single award.
    -   `GET /api/site-data` -> Get static data like skills, timeline, education, etc.
    -   `POST /api/contact` -> Handle contact form submissions (e.g., send an email).

### B. Database (MongoDB)

MongoDB is a natural fit due to its flexible, document-based nature.

-   **Collections:** Create collections that map directly to the data models:
    -   `projects`
    -   `posts`
    -   `researchProjects`
    -   `awards`
    -   `timelineEvents`
    -   `educations`
-   **Schemas:** Use Mongoose (an ODM for MongoDB) to define schemas. The TypeScript interfaces in `types.ts` can be used as a direct reference to create these Mongoose schemas, ensuring a smooth transition.

### C. Frontend (React)

The frontend will need to be refactored to fetch data from the new API instead of the static `constants.ts` file.

-   **Data Fetching:**
    -   Replace all static imports from `constants.ts` in page components with asynchronous API calls.
    -   Use the `useEffect` hook to fetch data when components mount.
    -   Use a data fetching library like `SWR` or `React Query` for a more robust solution that handles caching, revalidation, and state management.
-   **Contact Form:** Modify the `Contact.tsx` component to send a `POST` request to the `/api/contact` endpoint on form submission.
-   **Routing:** Switch from `HashRouter` to `BrowserRouter` for cleaner, server-friendly URLs (e.g., `yourdomain.com/portfolio/project-name`). This will require server-side configuration to ensure all routes serve the main `index.html` file.

### D. Deployment

The deployment strategy will change from a single static site to a two-part system:

-   **Frontend:** The React application can still be built as a static site and deployed to a service like **Vercel** or **Netlify**. These platforms will need to be configured to proxy API requests to the backend server.
-   **Backend:** The Node.js/Express API server must be deployed on a platform that supports persistent server processes, such as **Render**, **Heroku**, or a cloud provider's service (e.g., AWS EC2, Google App Engine).
-   **Database:** A managed database service like **MongoDB Atlas** is highly recommended for production.

---

## 6. Asset Manifest & Usage

This section catalogs all external visual assets (images and videos) used in the website. It is structured to serve as a reference, mapping each asset to its specific context and purpose.

### Site-Wide & Banners

| URL                                                                                 | Page / Component      | Context / Purpose                                   |
| ----------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------- |
| `https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4`      | `Home.tsx`            | Background video for the main hero section.         |
| `https://i.imgur.com/Th0OGFa.png`                                                     | `Portfolio.tsx`       | Decorative banner image at the top of the portfolio page. |
| `https://i.imgur.com/74atleo.png`                                                     | `Research.tsx`        | Decorative banner image for the research page.      |

### Personal & About

| URL                             | Page / Component      | Context / Purpose                                       |
| ------------------------------- | --------------------- | ------------------------------------------------------- |
| `https://i.imgur.com/0HemqBs.jpeg` | `Home.tsx`, `About.tsx` | Main profile picture used in the hero and about sections. |

### Education

| URL                                       | Page / Component | Context / Purpose                                                         |
| ----------------------------------------- | ---------------- | ------------------------------------------------------------------------- |
| `https://picsum.photos/seed/kuet1/800/600`  | `EducationCard`  | Gallery image 1 for Khulna University of Engineering & Technology (KUET). |
| `https://picsum.photos/seed/kuet2/800/600`  | `EducationCard`  | Gallery image 2 for KUET.                                                 |
| `https://picsum.photos/seed/kuet3/800/600`  | `EducationCard`  | Gallery image 3 for KUET.                                                 |
| `https://picsum.photos/seed/kuet4/800/600`  | `EducationCard`  | Gallery image 4 for KUET.                                                 |
| `https://picsum.photos/seed/kuet5/800/600`  | `EducationCard`  | Gallery image 5 for KUET.                                                 |
| `https://picsum.photos/seed/kuet6/800/600`  | `EducationCard`  | Gallery image 6 for KUET.                                                 |

### Experience Timeline

| URL                             | Page / Component        | Context / Purpose                                                     |
| ------------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `https://i.imgur.com/wYKiVUA.png` | `TimelineItem` (`About.tsx`) | Image for the "Founder & President, Neuronite, KUET" leadership event. |

### Projects

| URL                                                | Page / Component             | Context / Purpose                                                                          |
| -------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------ |
| `https://picsum.photos/seed/pipeline/600/400`        | `ProjectCard` (Portfolio)     | Thumbnail for "Real-Time Gas Pipeline Defect Detection" project.                           |
| `https://picsum.photos/seed/pipeline-detail1/800/600`| `ProjectDetail.tsx`         | Detail image 1 for "Gas Pipeline Defect Detection" project.                                |
| `https://picsum.photos/seed/pipeline-detail2/800/600`| `ProjectDetail.tsx`         | Detail image 2 for "Gas Pipeline Defect Detection" project.                                |
| `https://picsum.photos/seed/leather/600/400`         | `ProjectCard` (Portfolio)     | Thumbnail for "Automated Grading System for Finished Leather" project.                     |
| `https://picsum.photos/seed/leather-detail1/800/600` | `ProjectDetail.tsx`         | Detail image 1 for "Automated Grading System" project.                                     |
| `https://picsum.photos/seed/leather-detail2/800/600` | `ProjectDetail.tsx`         | Detail image 2 for "Automated Grading System" project.                                     |
| `https://picsum.photos/seed/ride/600/400`            | `ProjectCard` (Portfolio)     | Thumbnail for "Ride-Sharing System" project.                                               |
| `https://picsum.photos/seed/ride-detail1/800/600`    | `ProjectDetail.tsx`         | Detail image 1 for "Ride-Sharing System" project.                                          |
| `https://picsum.photos/seed/restaurant/600/400`      | `ProjectCard` (Portfolio)     | Thumbnail for "Restaurant Management System" project.                                      |
| `https://picsum.photos/seed/restaurant-detail1/800/600`| `ProjectDetail.tsx`         | Detail image 1 for "Restaurant Management System" project.                                 |

### Blog

| URL                                           | Page / Component           | Context / Purpose                                                    |
| --------------------------------------------- | -------------------------- | -------------------------------------------------------------------- |
| `https://picsum.photos/seed/yolo/800/400`       | `BlogPost.tsx` / `Card`    | Featured image for "The Rise of YOLOv8" post.                        |
| `https://picsum.photos/seed/green-tech/800/400` | `BlogPost.tsx` / `Card`    | Featured image for "Sustainable Technology: A Path to a Greener Future" post. |

### Research

| URL                                                      | Page / Component             | Context / Purpose                                                                     |
| -------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------- |
| `https://picsum.photos/seed/leather-tech/800/400`          | `ResearchCard` / `Detail`    | Main image for "Automated Grading System for Finished Leather" research.              |
| `https://picsum.photos/seed/leather-tech-detail1/800/600`  | `ResearchDetail.tsx`         | Detail image 1 for "Automated Grading System" research.                               |
| `https://picsum.photos/seed/leather-tech-detail2/800/600`  | `ResearchDetail.tsx`         | Detail image 2 for "Automated Grading System" research.                               |
| `https://picsum.photos/seed/compost-science/800/400`       | `ResearchCard` / `Detail`    | Main image for "Atypical co-composting technique" research.                           |
| `https://picsum.photos/seed/compost-science-detail1/800/600`| `ResearchDetail.tsx`         | Detail image for "Atypical co-composting technique" research.                         |
| `https://i.imgur.com/cN9pjkI.png`                          | `ResearchCard` / `Detail`    | Main image for "Sustainable Goatskin Preservation using Bagasse" research.            |
| `https://picsum.photos/seed/chemistry-water/800/400`       | `ResearchCard` / `Detail`    | Main image for "Adsorption of chromium from tannery wastewater" research.             |
| `https://i.imgur.com/9KAJR8t.png`                          | `ResearchDetail.tsx`         | Detail image 1 for "Adsorption of chromium" research.                                 |
| `https://i.imgur.com/Qgobdft.png`                          | `ResearchDetail.tsx`         | Detail image 2 for "Adsorption of chromium" research.                                 |
| `https://i.imgur.com/1JeMFXz.png`                          | `ResearchDetail.tsx`         | Detail image 3 for "Adsorption of chromium" research.                                 |

### Awards

| URL                                                | Page / Component        | Context / Purpose                                                                  |
| -------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------- |
| `https://i.imgur.com/NZ4Z7zt.png`                    | `AwardCard` / `Detail`  | Main image for "Winner and Best Poster Presentation Award".                        |
| `https://picsum.photos/seed/award1-detail1/800/600`  | `AwardDetail.tsx`       | Detail image 1 for "Winner and Best Poster" award.                                 |
| `https://picsum.photos/seed/award1-detail2/800/600`  | `AwardDetail.tsx`       | Detail image 2 for "Winner and Best Poster" award.                                 |
| `https://picsum.photos/seed/award2/400/200`          | `AwardCard` / `Detail`  | Main image for "First Runners Up, Red & White Innovation Olympiad".                |
| `https://picsum.photos/seed/award2-detail1/800/600`  | `AwardDetail.tsx`       | Detail image for "First Runners Up" award.                                         |
| `https://picsum.photos/seed/award3/400/200`          | `AwardCard` / `Detail`  | Main image for "Second Runners Up, Redesign 2020".                                 |
| `https://picsum.photos/seed/award3-detail1/800/600`  | `AwardDetail.tsx`       | Detail image 1 for "Second Runners Up" award.                                      |
| `https://picsum.photos/seed/award3-detail2/800/600`  | `AwardDetail.tsx`       | Detail image 2 for "Second Runners Up" award.                                      |
| `https://i.imgur.com/f3YBqjQ.png`                    | `AwardCard` / `Detail`  | Main image for "6th Position, Biz Bash Case Study".                                |
| `https://picsum.photos/seed/award5/400/200`          | `AwardCard` / `Detail`  | Main image for "Technical Scholarship, KUET".                                      |

### YouTube

| URL                                                         | Page / Component       | Context / Purpose                                                          |
| ----------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------- |
| `https://www.youtube-nocookie.com/embed/K8s1DzGeDj0`        | `Home.tsx`             | Featured video for the "ParallelX Academia" YouTube channel.               |
| `https://i.ytimg.com/vi/K8s1DzGeDj0/hqdefault.jpg`          | `constants.ts`         | Thumbnail automatically derived from the featured video URL.               |
