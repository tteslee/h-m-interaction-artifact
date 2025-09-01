# Human-Machine Interaction Cube

An interactive 3D visualization framework for understanding human-machine interactions across different dimensions of agency, role modes, and interaction topologies.

## Features

- **3D Interactive Cube**: Navigate through different interaction scenarios
- **Examples Table**: Comprehensive examples for each interaction pattern
- **Modern UI**: Clean, minimalist design inspired by 20th century modern graphic design
- **Responsive**: Works on desktop and mobile devices

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. Push your changes to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://[username].github.io/human-machine-interaction-cube/`

### Manual Deployment

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
│   ├── InteractionCube.tsx    # 3D cube visualization
│   ├── ExamplesTable.tsx      # Examples table view
│   └── ...
├── data/               # Data files
│   ├── cubeData.ts     # Cube structure and highlighted cells
│   └── examplesData.ts # Interaction examples
└── types.ts            # TypeScript type definitions
```

## Technologies

- React 18
- TypeScript
- Three.js (via @react-three/fiber)
- Vite
- GitHub Pages

## License

This project is part of the Human Thriving research initiative.
