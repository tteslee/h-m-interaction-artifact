export interface CubeCell {
  x: number // X-axis: Role/Mode of Relation (H1-H5)
  y: number // Y-axis: Locus of Agency (S0 to S1)
  z: number // Z-axis: Interaction Topology (1-10)
  xLabel: string
  yLabel: string
  zLabel: string
  description: string
  example: string
  isHighlighted: boolean
}

export interface FilterState {
  xAxis: string
  yAxis: string
  zAxis: string
}

export interface CubeData {
  xAxis: {
    id: string
    label: string
    description: string
  }[]
  yAxis: {
    id: string
    label: string
    description: string
  }[]
  zAxis: {
    id: string
    label: string
    description: string
  }[]
  highlightedCells: CubeCell[]
}

export interface CellProps {
  cell: CubeCell
  isVisible: boolean
  onHover: (cell: CubeCell | null) => void
  onClick: (cell: CubeCell) => void
}

