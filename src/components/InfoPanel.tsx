import React from 'react'
import { CubeCell } from '../types'

interface InfoPanelProps {
  selectedCell: CubeCell | null
  hoveredCell: CubeCell | null
}

const InfoPanel: React.FC<InfoPanelProps> = ({ selectedCell, hoveredCell }) => {
  console.log('InfoPanel props:', { selectedCell: selectedCell?.xLabel, hoveredCell: hoveredCell?.xLabel })
  const displayCell = selectedCell || hoveredCell

  if (!displayCell) {
    return (
      <div className="info-panel">
        <h3>Human-Machine Interaction Cube</h3>
        <p>
          This 3D visualization represents the framework for understanding human-machine interactions across three dimensions.
        </p>
        <p>
          <strong>X-axis:</strong> Role/Mode of Relation (H1-H5)<br/>
          <strong>Y-axis:</strong> Locus of Agency (Human-only to Machine-only)<br/>
          <strong>Z-axis:</strong> Interaction Topology (1-10)
        </p>
        <p>
          Hover over cells to explore different interaction patterns, or use the controls to slice the cube along specific axes.
        </p>
      </div>
    )
  }

  return (
    <div className="info-panel">
      <h3>{displayCell.xLabel}</h3>
      <p><strong>Mode:</strong> {displayCell.description}</p>
      <p><strong>Agency:</strong> {displayCell.yLabel}</p>
      <p><strong>Topology:</strong> {displayCell.zLabel}</p>
      
      {displayCell.example && (
        <p><strong>Example:</strong> {displayCell.example}</p>
      )}
      
      {displayCell.isHighlighted && (
        <p style={{ color: '#4a9eff', fontWeight: 'bold' }}>
          ★ Highlighted Scenario
        </p>
      )}
      
      <div className="coordinates">
        X: {displayCell.x} | Y: {displayCell.y} | Z: {displayCell.z}
      </div>
    </div>
  )
}

export default InfoPanel
