# Human-Machine Interaction Cube - Demo Guide

## 🚀 Getting Started

The application is now running at `http://localhost:3000`. Open this URL in your browser to explore the interactive 3D visualization.

## 🎯 Key Features to Explore

### 1. **3D Cube Navigation**
- **Orbit**: Left-click and drag to rotate around the cube
- **Zoom**: Use mouse wheel to zoom in/out
- **Pan**: Right-click and drag to move the view

### 2. **Interactive Cells**
- **Hover**: Move your mouse over any cell to see a tooltip with basic information
- **Click**: Click on cells to select them and see detailed information in the left panel
- **Highlighted Cells**: Look for the blue glowing cells - these contain real-world examples

### 3. **Axis Filtering**
Use the right panel controls to slice the cube:
- **X-Axis**: Filter by Role/Mode (H1-H5)
- **Y-Axis**: Filter by Agency level (Human-only to Machine-only)
- **Z-Axis**: Filter by Interaction Topology (1-10)

### 4. **Highlighted Scenarios**
The cube includes several pre-loaded examples:
- **H3 × Human→Machine × M↔M**: AI systems coordinating classroom management
- **H4 × Human→Machine × 1↔1 powered-n**: Classroom copilot with hidden AI ensemble
- **H3 × Human→Machine × H↔H mediated by M**: AI-facilitated peer learning
- **H1 × Human→Machine × 1↔1**: Personal AI tutor
- **H5 × Human→Machine × Hybrid HxM swarms**: Meta-cognitive learning analysis

## 🔍 Understanding the Framework

### X-Axis: Role/Mode of Relation
- **H1**: Service/Prompt - Machine provides service based on human prompts
- **H2**: Advice/Feedback - Machine offers advice and feedback
- **H3**: Instruction - Machine instructs or guides human
- **H4**: Developmental - Co-steering and collaborative development
- **H5**: Psychologist - Meta-reflection and psychological insights

### Y-Axis: Locus of Agency
- **S0**: Human-only - Complete human agency
- **H→M**: Human → Machine - Human directs machine
- **H⇄M**: Shared - Collaborative agency
- **M→H**: Machine → Human - Machine directs human
- **S1**: Machine-only - Complete machine agency

### Z-Axis: Interaction Topology
1. **1↔1 (dyadic)** - One-to-one interaction
2. **1→M (one-to-many)** - One human to many machines
3. **M→1 (many-to-one)** - Many machines to one human
4. **M↔M (machines only)** - Machine-to-machine interaction
5. **1↔1 powered-n** - Hidden ensemble of machines
6. **H↔H mediated by M** - Machine as translator/facilitator
7. **Hybrid HxM swarms** - Mixed many-to-many
8. **Recursive Self** - Self↔simulated selves
9. **Temporal** - Synchronous vs asynchronous
10. **Nested Modalities** - Multi-layered contexts

## 🎨 Visual Design Features

- **Minimalist Grid**: Clean, modern aesthetic inspired by 20th-century design
- **Color Coding**: Each axis has distinct colors for easy identification
- **Semi-transparent Cells**: Allows seeing through the cube structure
- **Smooth Animations**: Hover effects and highlighted cell pulsing
- **Responsive UI**: Clean panels with backdrop blur effects

## 💡 Tips for Exploration

1. **Start with the whole cube** to get an overview
2. **Use filters** to focus on specific interaction patterns
3. **Look for highlighted cells** to see real examples
4. **Try different camera angles** to understand the 3D structure
5. **Hover over cells** to quickly explore different combinations

## 🛠️ Technical Details

- Built with React 18 + TypeScript
- 3D rendering via Three.js and React Three Fiber
- Smooth animations with React Spring
- Responsive design with CSS Grid and Flexbox
- Vite for fast development and building

## 🔧 Customization

You can easily modify the framework by editing `src/data/cubeData.ts`:
- Add new highlighted scenarios
- Modify axis definitions
- Update examples and descriptions
- Change the cube dimensions

The application will automatically update to reflect your changes!

