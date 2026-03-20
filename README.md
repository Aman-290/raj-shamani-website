# Raj Shamani - Tribute Website

A fan-made tribute and comprehensive portfolio website honoring the journey, philosophies, and media empire of Raj Shamani. 

This interactive website was custom-coded to explore the entire ecosystem of "Figuring Out" featuring cinematic UI/UX, deep-dive statistics, a custom AI dossier agent demo, and a live fan tribute wall.

## Features Let Loose

*   **Cinematic Dark Theme:** Custom immersive UI built with Tailwind CSS, utilizing complex background overlays, micro-interactions, and glassmorphism.
*   **The Journey Timeline:** A fully custom scrollable tracker mapping his milestones from 1997 through achieving India's #1 Business Podcast status.
*   **Interactive 'Guest' Group Interface:** An absolute positioned clipping-mask system showcasing major global guests (like Bill Gates and Emmanuel Macron) that elegantly animates on hover.
*   **Live Community Wall:** Complete with an optimistic UI popup modal that hooks directly into an Upstash Redis database (`@upstash/redis` via Serverless API) to save real fan tributes. Profile pictures are entirely dynamically drawn using the Dicebear Avatar API.
*   **Deep Research Agent Demo:** An animated interactive terminal mocking out advanced Deep Research protocols.
*   **Dynamic Custom Statistical Cards:** Interactive analytics graphs for hours consumed across the Figuring Out brand.

## Technologies Used

*   **Framework:** React 18 with Vite
*   **Styling:** Tailwind CSS (with highly custom arbitrary utilities & gradients)
*   **Animation Engine:** Framer Motion (`motion/react`)
*   **Icons:** Lucide React
*   **Database Integration:** Upstash Redis (Serverless backend configured natively in Vercel)
*   **Avatars:** Dicebear API

## Running Locally

1. Clone this repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Database Connection
If you want to spin up the local database for the Community Wall, ensure you map `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` in a `.env` file at your root directory from an active Upstash cluster.

## Deployment 
Optimized for zero-config deployment on Vercel. 
Simply push to GitHub and import into Vercel. Once deployed, attach an Upstash integration in the Vercel Storage settings to automatically supply the API route backend with live environment keys.

---
*Disclaimer: A fan made tribute website, powered by Brokai Labs. Not officially affiliated with Raj Shamani.*
