import React from 'react'
import { CubeCell } from '../types'

interface TooltipProps {
  x: number
  y: number
  cell: CubeCell
}

const Tooltip: React.FC<TooltipProps> = ({ x, y, cell }) => {
  return (
    <div 
      className="tooltip"
      style={{
        left: x,
        top: y,
        transform: 'translate(0, -50%)'
      }}
    >
      <h4>{cell.xLabel}</h4>
      <p><strong>Agency:</strong> {cell.yLabel}</p>
      <p><strong>Topology:</strong> {cell.zLabel}</p>
      <p>{cell.description}</p>
      
      {cell.example && (
        <p style={{ marginTop: '8px', fontStyle: 'italic' }}>
          "{cell.example}"
        </p>
      )}
      
      {cell.isHighlighted && (
        <p style={{ color: '#4a9eff', fontWeight: 'bold', marginTop: '8px' }}>
          ★ Highlighted Scenario
        </p>
      )}
    </div>
  )
}

export default Tooltip

