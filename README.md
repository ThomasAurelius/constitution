# Constitution Facts

A React web application that presents the United States Constitution's 27 amendments with their original text and plain-language summaries, making constitutional knowledge accessible to everyone.

## Features

- **Overview page** – explains why a constitution matters and the core principles it upholds.
- **Amendments list** – browse all 27 amendments at a glance.
- **Amendment detail** – read the original text alongside a plain-language summary for each amendment.
- Client-side routing with React Router so every amendment has its own shareable URL.

## Tech Stack

| Tool | Version |
|------|---------|
| [React](https://react.dev/) | 18 |
| [React Router](https://reactrouter.com/) | 6 |
| [Vite](https://vitejs.dev/) | 5 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

The optimized output is written to the `dist/` folder.

### Preview the production build locally

```bash
npm run preview
```

## Project Structure

```
constitution/
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── package.json
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Root component with routing
    ├── styles.css      # Global styles
    ├── components/
    │   ├── Header.jsx
    │   └── Footer.jsx
    ├── data/
    │   └── amendments.js   # Amendment text and summaries
    └── pages/
        ├── Overview.jsx        # Home page
        ├── Amendments.jsx      # Amendment list page
        └── AmendmentDetail.jsx # Individual amendment page
```

## License

This project is open source. The text of the United States Constitution and its amendments is in the public domain.
