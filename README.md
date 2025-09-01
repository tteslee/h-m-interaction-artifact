# Human-Machine Interaction Cube

An interactive 3D visualization tool for exploring human-machine interaction scenarios and examples.

This project is part of the Human Thriving research initiative.

## Features

- **3D Interactive Cube**: Navigate through different interaction scenarios
- **Examples Table**: View detailed examples for each axis combination
- **Modern UI**: Clean, accessible interface inspired by 20th century modern design
- **Responsive Design**: Works on desktop and mobile devices

## Development

### Prerequisites
- Node.js 18+ 
- npm

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

## Deployment

### Automatic Deployment (GitHub Actions)
The project automatically deploys to GitHub Pages via GitHub Actions on every push to the main branch.

### Manual Deployment
```bash
npm run build
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
├── data/               # Data files and examples
├── types.ts            # TypeScript type definitions
└── App.tsx             # Main application component
```

## Technologies

- **React 18** with TypeScript
- **Three.js** via @react-three/fiber for 3D graphics
- **Vite** for fast development and building
- **CSS3** for styling and animations

## License

MIT License
