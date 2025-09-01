import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import InteractionCube from './components/InteractionCube'
import ControlsPanel from './components/ControlsPanel'
import InfoPanel from './components/InfoPanel'
import Tooltip from './components/Tooltip'
import ExamplesTable from './components/ExamplesTable'
import { CubeCell, FilterState } from './types'

function App() {
  const [hoveredCell, setHoveredCell] = useState<CubeCell | null>(null)
  const [selectedCell, setSelectedCell] = useState<CubeCell | null>(null)
  
  // Debug logging for state changes
  console.log('App state - hoveredCell:', hoveredCell?.xLabel, 'selectedCell:', selectedCell?.xLabel)
  const [filters, setFilters] = useState<FilterState>({
    xAxis: 'all',
    yAxis: 'all',
    zAxis: 'all'
  })
  const [viewMode, setViewMode] = useState<'3d' | 'examples'>('3d')
  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
    content: CubeCell
  } | null>(null)

  const handleCellHover = (cell: CubeCell | null) => {
    console.log('App: Cell hover:', cell ? `${cell.x},${cell.y},${cell.z} - ${cell.xLabel}` : 'null')
    setHoveredCell(cell)
  }

  const handleCellClick = (cell: CubeCell) => {
    console.log('App: Cell click:', `${cell.x},${cell.y},${cell.z} - ${cell.xLabel}`)
    setSelectedCell(cell)
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    // Only handle tooltip updates if we have a hovered cell
    if (hoveredCell) {
      console.log('Setting tooltip for:', hoveredCell.xLabel, 'at', event.clientX, event.clientY)
      setTooltip({
        x: event.clientX + 10,
        y: event.clientY - 10,
        content: hoveredCell
      })
    }
  }

  // Clear tooltip when hoveredCell changes to null
  useEffect(() => {
    if (!hoveredCell) {
      setTooltip(null)
    }
  }, [hoveredCell])

  // Handle body class for examples view
  useEffect(() => {
    if (viewMode === 'examples') {
      document.body.classList.add('examples-view')
      document.documentElement.classList.add('examples-view')
      document.getElementById('root')?.classList.add('examples-view')
    } else {
      document.body.classList.remove('examples-view')
      document.documentElement.classList.remove('examples-view')
      document.getElementById('root')?.classList.remove('examples-view')
    }
    
    return () => {
      document.body.classList.remove('examples-view')
      document.documentElement.classList.remove('examples-view')
      document.getElementById('root')?.classList.remove('examples-view')
    }
  }, [viewMode])

  const handleMouseLeave = () => {
    setTooltip(null)
    setHoveredCell(null)
  }

  return (
    <div 
      className="app"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* View Toggle Button */}
      <button 
        className="view-toggle"
        onClick={() => setViewMode(viewMode === '3d' ? 'examples' : '3d')}
      >
        {viewMode === '3d' ? 'Switch to Examples' : 'Switch to 3D Cube'}
      </button>

      {/* 3D View */}
      {viewMode === '3d' && (
        <Canvas
          camera={{ position: [20, 20, 20], fov: 60 }}
          style={{ 
            background: '#0a0a0a',
            width: '100%',
            height: '100vh'
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <InteractionCube
            filters={filters}
            onCellHover={handleCellHover}
            onCellClick={handleCellClick}
          />
          
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            enableDamping={false}
            minDistance={10}
            maxDistance={40}
          />
        </Canvas>
      )}

      {/* Examples Table View */}
      {viewMode === 'examples' && (
        <ExamplesTable />
      )}

      {/* UI Overlay - Only show in 3D mode */}
      {viewMode === '3d' && (
        <div className="ui-overlay">
          <ControlsPanel 
            filters={filters}
            onFiltersChange={setFilters}
          />
          
          <InfoPanel 
            selectedCell={selectedCell}
            hoveredCell={hoveredCell}
          />
        </div>
      )}

      {/* Tooltip - Show in both views */}
      {tooltip && (
        <Tooltip
          x={tooltip.x}
          y={tooltip.y}
          cell={tooltip.content}
        />
      )}
    </div>
  )
}

export default App
