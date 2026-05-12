# Shopping Cart Application

A modern Single Page Application (SPA) built with React and Vite, featuring an interactive shopping cart experience, client-side routing, and animations.

## Features

- **Store & Cart Management:** Browse products on the Store page and manage them in the Cart.
- **Client-Side Routing:** Powered by `react-router` for seamless navigation between Home, Store, and Cart pages, along with error boundary handling.
- **Responsive Styling:** Designed with Tailwind CSS (v4) for a responsive and modern UI.
- **Animations:** Engaging user interface animations utilizing `gsap`.
- **Loading Indicators:** Built-in spinners using `react-loader-spinner` for asynchronous operations.

## Tech Stack

- **Framework:** React 19
- **Bundler:** Vite 8
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP
- **Code Quality:** ESLint

## Directory Structure

- `src/components/`: Reusable UI components including the Navbar, Footer, animated wrappers, and main page templates (`homepage.jsx`, `storePage.jsx`, `cartPage.jsx`).
- `src/routes.jsx`: Configuration for dynamic client-side routes.
- `src/App.jsx` & `src/main.jsx`: Main application bootstrap and layout wrappers.
- `public/`: Static assets and public resources.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository and navigate into the project folder:
   ```bash
   cd shopping-cart
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is occupied).

### Available Scripts

- `npm run dev` - Starts the development server with HMR.
- `npm run build` - Builds the app for production to the `dist` folder.
- `npm run preview` - Locally previews the production build.
- `npm run lint` - Runs ESLint to check for code quality issues.

## Deployment to Vercel

This project is fully ready to be deployed to Vercel. It includes a `vercel.json` configuration file to ensure client-side routing works correctly when deployed.

Because this is a Single Page Application (SPA), Vercel is set up to rewrite all requests `/(*)` to `index.html`. This ensures that your client-side routing handles the navigation smoothly without encountering 404 errors on refreshes or direct URL visits.
