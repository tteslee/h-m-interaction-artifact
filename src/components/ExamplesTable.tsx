import React, { useState } from 'react'
import { examplesData } from '../data/examplesData'

const ExamplesTable: React.FC = () => {
  const [selectedYAxis, setSelectedYAxis] = useState<string>('all')

  const yAxes = [
    'Human-only (S0 baseline)',
    'Human → Machine',
    'Shared (Human ⇄ Machine)',
    'Machine → Human',
    'Machine-only (S1 baseline)'
  ]

  const xAxes = [
    'H1 – Service / Prompt',
    'H2 – Advice / Feedback',
    'H3 – Instruction',
    'H4 – Developmental (Co-steering)',
    'H5 – Psychologist / Meta-Reflection'
  ]



  const getExamplesForCell = (xAxis: string, yAxis: string): string[] => {
    const cell = examplesData.find(item => item.xAxis === xAxis && item.yAxis === yAxis)
    return cell ? cell.examples : []
  }

  return (
    <div className="examples-table-container">
      <div className="examples-header">
        <h2>Interaction Examples by Slice/Scenario</h2>
        <p>Explore concrete examples of human-machine interactions across different modes and agency distributions</p>
      </div>

      <div className="examples-controls">
        <label htmlFor="yAxisFilter">Filter by Agency Distribution:</label>
        <select 
          id="yAxisFilter"
          value={selectedYAxis} 
          onChange={(e) => setSelectedYAxis(e.target.value)}
          className="y-axis-filter"
        >
          <option value="all">All Agency Distributions</option>
          {yAxes.map(axis => (
            <option key={axis} value={axis}>{axis}</option>
          ))}
        </select>
      </div>

      <div className="examples-table-wrapper">
        <table className="examples-table">
          <thead>
            <tr>
              <th className="corner-cell"></th>
              {xAxes.map(axis => (
                <th key={axis} className="x-axis-header">
                  <div className="axis-label">
                    <span className="axis-id">{axis.split('–')[0].trim()}</span>
                    <span className="axis-description">{axis.split('–')[1]?.trim()}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {yAxes.map(yAxis => (
              <tr key={yAxis} className={selectedYAxis !== 'all' && selectedYAxis !== yAxis ? 'hidden-row' : ''}>
                <td className="y-axis-header">
                  <div className="axis-label">
                    <span className="axis-id">{yAxis.includes('→') ? yAxis.split('→')[0].trim() : yAxis.split('(')[0].trim()}</span>
                    <span className="axis-description">
                      {yAxis.includes('→') ? `→ ${yAxis.split('→')[1].trim()}` : yAxis.includes('(') ? `(${yAxis.split('(')[1]}` : yAxis}
                    </span>
                  </div>
                </td>
                {xAxes.map(xAxis => {
                  const examples = getExamplesForCell(xAxis, yAxis)
                  return (
                    <td key={`${xAxis}-${yAxis}`} className="example-cell">
                      {examples.length > 0 ? (
                        <div className="examples-list">
                          {examples.map((example, index) => (
                            <div key={index} className="example-item">
                              {example}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="no-example">No examples available</div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="examples-legend">
        <div className="legend-item">
          <span className="legend-dot"></span>
          <span>Hover over cells to see examples</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot"></span>
          <span>Use the filter above to focus on specific agency distributions</span>
        </div>
      </div>
    </div>
  )
}

export default ExamplesTable
