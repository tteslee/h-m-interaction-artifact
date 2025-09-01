import React, { useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { generateAllCells } from '../data/cubeData'
import { FilterState, CubeCell } from '../types'
import CubeCellComponent from './CubeCell'
import AxisLabels from './AxisLabels'

interface InteractionCubeProps {
  filters: FilterState
  onCellHover: (cell: CubeCell | null) => void
  onCellClick: (cell: CubeCell) => void
}

const InteractionCube: React.FC<InteractionCubeProps> = ({
  filters,
  onCellHover,
  onCellClick
}) => {
  const allCells = useMemo(() => generateAllCells(), [])

  const filteredCells = useMemo(() => {
    const filtered = allCells.filter(cell => {
      if (filters.xAxis !== 'all' && cell.x !== parseInt(filters.xAxis)) return false
      if (filters.yAxis !== 'all' && cell.y !== parseInt(filters.yAxis)) return false
      if (filters.zAxis !== 'all' && cell.z !== parseInt(filters.zAxis)) return false
      return true
    })
    console.log('Filtered cells:', filtered.length, 'filters:', filters)
    
    // Log first few filtered cells to see their data
    if (filtered.length > 0) {
      console.log('First 3 filtered cells:', filtered.slice(0, 3).map(cell => ({
        x: cell.x, y: cell.y, z: cell.z,
        xLabel: cell.xLabel,
        yLabel: cell.yLabel,
        zLabel: cell.zLabel
      })))
    }
    
    return filtered
  }, [allCells, filters])

  // Subtle animation for highlighted cells
  useFrame(() => {

    // This will be used in the CubeCell component for animations
  })

  return (
    <group>
      {/* Test cell for debugging */}
      <mesh 
        position={[0, 0, 0]} 
        onPointerOver={() => console.log('Test cell hovered')}
        onPointerOut={() => console.log('Test cell unhovered')}
        onClick={() => console.log('Test cell clicked')}
      >
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Render all filtered cells */}
      {filteredCells.map((cell) => (
        <CubeCellComponent
          key={`${cell.x}-${cell.y}-${cell.z}`}
          cell={cell}
          isVisible={true}
          onHover={onCellHover}
          onClick={onCellClick}
        />
      ))}
      
      {/* Debug: Show cell count and first few cell positions */}
      <Text position={[0, 8, 0]} fontSize={1} color="white">
        Cells: {filteredCells.length}
      </Text>
      
      {/* Debug: Show first few cell positions */}
      {filteredCells.slice(0, 5).map((cell, index) => (
        <Text key={`debug-${index}`} position={[0, 7 - index * 0.5, 0]} fontSize={0.5} color="yellow">
          Cell {index}: ({cell.x},{cell.y},{cell.z}) - {cell.xLabel}
        </Text>
      ))}

      {/* Axis labels */}
      <AxisLabels />
      
      {/* Grid lines for better visual structure */}
      <GridLines />
    </group>
  )
}

// Grid lines component for visual structure
const GridLines: React.FC = () => {
  const gridColor = '#333333'
  const gridOpacity = 0.3

  return (
    <group>
      {/* X-axis grid lines */}
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={`x-grid-${i}`} position={[i * 2.5 - 5, 0, 0]}>
          <boxGeometry args={[0.02, 10, 22.5]} />
          <meshBasicMaterial color={gridColor} transparent opacity={gridOpacity} />
        </mesh>
      ))}

      {/* Y-axis grid lines */}
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={`y-grid-${i}`} position={[0, i * 2.5 - 5, 0]}>
          <boxGeometry args={[10, 0.02, 22.5]} />
          <meshBasicMaterial color={gridColor} transparent opacity={gridOpacity} />
        </mesh>
      ))}

      {/* Z-axis grid lines */}
      {Array.from({ length: 11 }, (_, i) => (
        <mesh key={`z-grid-${i}`} position={[0, 0, i * 2.5 - 11.25]}>
          <boxGeometry args={[10, 10, 0.02]} />
          <meshBasicMaterial color={gridColor} transparent opacity={gridOpacity} />
        </mesh>
      ))}
    </group>
  )
}

export default InteractionCube
