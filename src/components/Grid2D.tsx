import React from 'react'
import { CubeCell } from '../types'
import { cubeData } from '../data/cubeData'
import { examplesData } from '../data/examplesData'
import { FilterState } from '../types'

interface Grid2DProps {
  filters: FilterState
  onCellHover: (cell: CubeCell | null) => void
  onCellClick: (cell: CubeCell) => void
  onFiltersChange: (filters: FilterState) => void
}

const Grid2D: React.FC<Grid2DProps> = ({ filters, onCellHover, onCellClick, onFiltersChange }) => {
  const handleCellHover = (cell: CubeCell | null) => {
    onCellHover(cell)
  }

  const handleCellClick = (cell: CubeCell) => {
    onCellClick(cell)
  }

  const getCellContent = (x: number, y: number): CubeCell | null => {
    // Find the cell at this position
    const cell = cubeData.highlightedCells.find(
      c => c.x === x && c.y === y
    )
    
    if (cell) return cell
    
    // Get examples data for this X-Y combination
    const xData = cubeData.xAxis[x]
    const yData = cubeData.yAxis[y]
    
    // Find examples for this combination
    const examples = examplesData.find(
      item => item.xAxis === xData.label && item.yAxis === yData.label
    )
    
    // Generate meaningful content based on examples
    return {
      x, y, z: 0, // Z is always 0 for 2D view
      xLabel: xData.label,
      yLabel: yData.label,
      zLabel: '2D Grid View',
      description: `${xData.description} in ${yData.description} context`,
      example: examples ? examples.examples.join(' • ') : `Explore ${xData.label} + ${yData.label} interactions`,
      isHighlighted: false
    }
  }

  const isCellVisible = (x: number, y: number): boolean => {
    if (filters.xAxis !== 'all' && x !== parseInt(filters.xAxis)) return false
    if (filters.yAxis !== 'all' && y !== parseInt(filters.yAxis)) return false
    return true
  }

  return (
    <div className="grid-2d-container">
      <div className="grid-2d">
        {/* Header row with X-axis labels */}
        <div className="grid-header">
          <div className="grid-corner"></div>
          {cubeData.xAxis.map((axis, index) => (
            <div key={`x-${index}`} className="grid-header-cell">
              <div className="axis-label">{axis.id}</div>
              <div className="axis-title">{axis.label.split(':')[1]?.trim() || axis.label}</div>
            </div>
          ))}
        </div>

        {/* Data rows */}
        {cubeData.yAxis.map((yAxis, yIndex) => (
          <div key={`y-${yIndex}`} className="grid-row">
            {/* Y-axis label */}
            <div className="grid-row-header">
              <div className="axis-label">{yAxis.id}</div>
              <div className="axis-title">{yAxis.label}</div>
            </div>

            {/* Data cells */}
            {cubeData.xAxis.map((xAxis, xIndex) => {
              const cell = getCellContent(xIndex, yIndex)
              const isVisible = isCellVisible(xIndex, yIndex)
              
              if (!isVisible) return <div key={`cell-${xIndex}-${yIndex}`} className="grid-cell empty"></div>
              
              return (
                <div
                  key={`cell-${xIndex}-${yIndex}`}
                  className={`grid-cell ${cell?.isHighlighted ? 'highlighted' : ''}`}
                  onMouseEnter={() => handleCellHover(cell)}
                  onMouseLeave={() => handleCellHover(null)}
                  onClick={() => cell && handleCellClick(cell)}
                >
                  <div className="cell-content">
                    <div className="cell-coordinates">
                      {xAxis.id} + {yAxis.id}
                    </div>
                    {cell?.isHighlighted && (
                      <div className="highlighted-indicator">★</div>
                    )}
                    {cell?.example && (
                      <div className="cell-example-preview">
                        {cell.example.length > 50 
                          ? cell.example.substring(0, 50) + '...' 
                          : cell.example
                        }
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Z-axis selector */}
      <div className="z-axis-selector">
        <h4>Z-Axis: Interaction Topology</h4>
        <div className="z-options">
          {cubeData.zAxis.map((zAxis, index) => (
            <div
              key={`z-${index}`}
              className={`z-option ${filters.zAxis === index.toString() ? 'active' : ''}`}
              onClick={() => onFiltersChange({ ...filters, zAxis: index.toString() })}
            >
              {zAxis.id}: {zAxis.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Grid2D
