# 🚐 Camper Rental Service

A modern web platform for renting campervans, designed to help travelers find their perfect home on wheels. Users can explore a diverse catalog, filter by technical specifications, read community reviews, and book their trips instantly.

---

## 🚀 Links
- **Live Demo:** [https://campers-theta.vercel.app/]
- **Repository:** https://github.com/Serhii-Panov/campers

---

## 📖 About the Project

This is a full-featured frontend application built as part of a high-performance rental service. The primary goal was to create a seamless, user-centric interface with a focus on performance, strict typing, and Pixel Perfect design implementation.

### Key Features:
- **Dynamic Catalog:** A fast-loading list of campers with "Load More" functionality.
- **Smart Filtering:** Search by location and technical attributes (vehicle type, transmission, engine type).
- **Detailed Camper Pages:** Comprehensive specifications, high-quality image galleries, and a dedicated reviews tab.
- **Booking System:** An interactive booking form with instant UI feedback (success/error toasts) and automatic form reset.
- **Star Rating System:** A custom-built SVG-based visualization for user ratings.
---
## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict Mode) — 100% type safety with zero `any` usage.
- **Data Fetching:** TanStack Query v5 (React Query) — for efficient server-state management and caching.
- **Styling:** Tailwind CSS — utility-first CSS for a responsive and scalable UI.
- **Icons:** SVG Sprites — optimized icon delivery to minimize HTTP requests and layout shifts.
- **Notifications:** React Hot Toast — for sleek, non-intrusive user feedback.
---
## 🏗 Architecture

The project follows a clean, modular architecture to ensure maintainability:

- `/app/` — Routing logic and page components (App Router).
- `/components/` — A mix of atomic UI-kit elements (Buttons, Icons) and complex business logic components (Sidebar, BookingForm).
- `/services/` — An abstraction layer for API interactions (Axios/Fetch).
- `/types/` — Centralized TypeScript definitions for all project entities.
- `public/` — Static assets, including the optimized SVG sprite and custom favicon.
---
## 💡 Technical Highlights

1. **Pixel Perfect UI:** Rigorous attention to detail—ensuring icons, spacing, and form elements align perfectly with the original design specs.
2. **Icon Optimization:** Leveraging SVG `<symbol>` and sprites allows icons to load instantly without the typical "flicker" of external assets.
3. **Robust Form Handling:** Utilizing `FormData` and `useMutation` provides a reliable way to handle submissions while managing loading and success states.
4. **Enhanced UX:** Integrated "sticky" sidebar elements and skeleton loaders to keep the interface feeling fast and responsive.
