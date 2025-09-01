import React from 'react'
import { FilterState } from '../types'
import { cubeData } from '../data/cubeData'

interface ControlsPanelProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (axis: keyof FilterState, value: string) => {
    console.log('Filter changed:', axis, value, 'current filters:', filters)
    onFiltersChange({
      ...filters,
      [axis]: value
    })
  }

  const resetFilters = () => {
    onFiltersChange({
      xAxis: 'all',
      yAxis: 'all',
      zAxis: 'all'
    })
  }

  return (
    <div className="controls-panel">
      <h3>Cube Controls</h3>
      
      <div className="control-group">
        <label>X-Axis: Role/Mode</label>
        <select
          value={filters.xAxis}
          onChange={(e) => handleFilterChange('xAxis', e.target.value)}
        >
          <option value="all">All Roles</option>
          {cubeData.xAxis.map((axis, index) => (
            <option key={index} value={index}>
              {axis.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label>Y-Axis: Agency</label>
        <select
          value={filters.yAxis}
          onChange={(e) => handleFilterChange('yAxis', e.target.value)}
        >
          <option value="all">All Agency Levels</option>
          {cubeData.yAxis.map((axis, index) => (
            <option key={index} value={index}>
              {axis.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label>Z-Axis: Topology</label>
        <select
          value={filters.zAxis}
          onChange={(e) => handleFilterChange('zAxis', e.target.value)}
        >
          <option value="all">All Topologies</option>
          {cubeData.zAxis.map((axis, index) => (
            <option key={index} value={index}>
              {axis.label}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <button onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="control-group">
        <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#cccccc' }}>
          Instructions
        </h4>
        <p style={{ margin: 0, fontSize: '11px', color: '#888888', lineHeight: '1.3' }}>
          • Use dropdowns to slice the cube<br/>
          • Hover over cells for details<br/>
          • Click cells to select<br/>
          • Orbit/zoom with mouse
        </p>
      </div>
    </div>
  )
}

export default ControlsPanel
