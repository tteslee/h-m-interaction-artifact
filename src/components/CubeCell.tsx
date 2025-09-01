import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { Text } from '@react-three/drei'
import { CellProps } from '../types'
import * as THREE from 'three'

const CubeCell: React.FC<CellProps> = ({ cell, isVisible, onHover, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Calculate position based on cell coordinates
  const position: [number, number, number] = [
    (cell.x - 2) * 2.5, // X: -5 to 5
    (cell.y - 2) * 2.5, // Y: -5 to 5  
    (cell.z - 4.5) * 2.5 // Z: -11.25 to 11.25
  ]
  
  // Debug logging for first few cells
  if (cell.x <= 1 && cell.y <= 1 && cell.z <= 1) {
    console.log('Cell data:', {
      x: cell.x, y: cell.y, z: cell.z,
      xLabel: cell.xLabel,
      yLabel: cell.yLabel,
      zLabel: cell.zLabel,
      description: cell.description,
      example: cell.example
    })
  }

  // Spring animations for hover and selection
  const { scale, opacity, color } = useSpring({
    scale: isHovered ? 1.2 : 1,
    opacity: isVisible ? (cell.isHighlighted ? 0.9 : 0.6) : 0.1,
    color: cell.isHighlighted 
      ? '#4a9eff' 
      : isHovered 
        ? '#ffffff' 
        : '#666666',
    config: { mass: 1, tension: 280, friction: 60 }
  })

  // Pulsing animation for highlighted cells
  const [pulseScale, setPulseScale] = useState(1)
  useFrame((state) => {
    if (cell.isHighlighted && meshRef.current) {
      const time = state.clock.getElapsedTime()
      const pulse = 1 + 0.1 * Math.sin(time * 2)
      setPulseScale(pulse)
    }
  })

  const handlePointerOver = () => {
    console.log('Cell hovered:', cell.x, cell.y, cell.z, 'xLabel:', cell.xLabel)
    setIsHovered(true)
    onHover(cell)
  }

  const handlePointerOut = () => {
    console.log('Cell unhovered:', cell.x, cell.y, cell.z)
    setIsHovered(false)
    onHover(null)
  }

  const handleClick = () => {
    console.log('Cell clicked:', cell.x, cell.y, cell.z, 'xLabel:', cell.xLabel)
    onClick(cell)
  }

  if (!isVisible) {
    console.log('Cell not visible:', cell.x, cell.y, cell.z)
    return null
  }

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <boxGeometry args={[2.2, 2.2, 2.2]} />
      <animated.meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        roughness={0.3}
        metalness={0.1}
      />
      
      {/* Debug: Always show a small indicator for all cells */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial color="lime" />
      </mesh>
      
      {/* Debug: Make first few cells more visible */}
      {cell.x <= 1 && cell.y <= 1 && cell.z <= 1 && (
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="yellow" />
        </mesh>
      )}
      
      {/* Debug: Show cell data on hover */}
      {isHovered && (
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {cell.xLabel}
        </Text>
      )}
      
      {/* Highlighted cells get a subtle glow effect */}
      {cell.isHighlighted && (
        <mesh position={[0, 0, 0]} scale={pulseScale}>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial
            color="#4a9eff"
            transparent
            opacity={0.1}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </animated.mesh>
  )
}

export default CubeCell
