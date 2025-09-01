import { CubeData, CubeCell } from '../types'

export const cubeData: CubeData = {
  xAxis: [
    { id: 'H1', label: 'H1: Service/Prompt', description: 'Machine provides service based on human prompts' },
    { id: 'H2', label: 'H2: Advice/Feedback', description: 'Machine offers advice and feedback to human' },
    { id: 'H3', label: 'H3: Instruction', description: 'Machine instructs or guides human' },
    { id: 'H4', label: 'H4: Developmental', description: 'Co-steering and collaborative development' },
    { id: 'H5', label: 'H5: Psychologist', description: 'Meta-reflection and psychological insights' }
  ],
  
  yAxis: [
    { id: 'S0', label: 'Human-only', description: 'Complete human agency' },
    { id: 'H→M', label: 'Human → Machine', description: 'Human directs machine' },
    { id: 'H⇄M', label: 'Shared (H⇄M)', description: 'Collaborative agency' },
    { id: 'M→H', label: 'Machine → Human', description: 'Machine directs human' },
    { id: 'S1', label: 'Machine-only', description: 'Complete machine agency' }
  ],
  
  zAxis: [
    { id: '1', label: '1↔1 (dyadic)', description: 'One-to-one interaction' },
    { id: '2', label: '1→M (one-to-many)', description: 'One human to many machines' },
    { id: '3', label: 'M→1 (many-to-one)', description: 'Many machines to one human' },
    { id: '4', label: 'M↔M (machines only)', description: 'Machine-to-machine interaction' },
    { id: '5', label: '1↔1 powered-n', description: 'Hidden ensemble of machines' },
    { id: '6', label: 'H↔H mediated by M', description: 'Machine as translator/facilitator' },
    { id: '7', label: 'Hybrid HxM swarms', description: 'Mixed many-to-many' },
    { id: '8', label: 'Recursive Self', description: 'Self↔simulated selves' },
    { id: '9', label: 'Temporal', description: 'Synchronous vs asynchronous' },
    { id: '10', label: 'Nested Modalities', description: 'Multi-layered contexts' }
  ],
  
  highlightedCells: [
    {
      x: 2, y: 2, z: 4,
      xLabel: 'H3: Instruction',
      yLabel: 'Human → Machine',
      zLabel: 'M↔M (machines only)',
      description: 'AI systems coordinating classroom management',
      example: 'Multiple AI assistants coordinating lesson plans, student progress tracking, and resource allocation without direct human intervention',
      isHighlighted: true
    },
    {
      x: 3, y: 2, z: 5,
      xLabel: 'H4: Developmental',
      yLabel: 'Human → Machine',
      zLabel: '1↔1 powered-n',
      description: 'Classroom copilot with hidden AI ensemble',
      example: 'Teacher interacts with one AI interface while multiple specialized AI systems work behind the scenes to optimize learning outcomes',
      isHighlighted: true
    },
    {
      x: 2, y: 2, z: 6,
      xLabel: 'H3: Instruction',
      yLabel: 'Human → Machine',
      zLabel: 'H↔H mediated by M',
      description: 'AI-facilitated peer learning',
      example: 'Students collaborate through AI-mediated communication, with the AI translating and enhancing their interactions',
      isHighlighted: true
    },
    {
      x: 1, y: 1, z: 1,
      xLabel: 'H1: Service/Prompt',
      yLabel: 'Human → Machine',
      zLabel: '1↔1 (dyadic)',
      description: 'Personal AI tutor',
      example: 'Student asks AI for help with math problem, AI provides step-by-step solution',
      isHighlighted: true
    },
    {
      x: 4, y: 2, z: 7,
      xLabel: 'H5: Psychologist',
      yLabel: 'Human → Machine',
      zLabel: 'Hybrid HxM swarms',
      description: 'Meta-cognitive learning analysis',
      example: 'AI swarm analyzes learning patterns across multiple students and provides insights to teachers about cognitive development',
      isHighlighted: true
    }
  ]
}

export const generateAllCells = (): CubeCell[] => {
  const cells: CubeCell[] = []
  
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      for (let z = 0; z < 10; z++) {
        const xData = cubeData.xAxis[x]
        const yData = cubeData.yAxis[y]
        const zData = cubeData.zAxis[z]
        
        // Check if this cell is highlighted
        const highlightedCell = cubeData.highlightedCells.find(
          cell => cell.x === x && cell.y === y && cell.z === z
        )
        
        if (highlightedCell) {
          // Use the highlighted cell data
          cells.push(highlightedCell)
        } else {
          // Generate default content for non-highlighted cells
          cells.push({
            x, y, z,
            xLabel: xData.label,
            yLabel: yData.label,
            zLabel: zData.label,
            description: `${xData.description} in ${yData.description} context with ${zData.description}`,
            example: `Example: ${xData.label} + ${yData.label} + ${zData.label}`,
            isHighlighted: false
          })
        }
      }
    }
  }
  
  console.log('Generated cells:', cells.length)
  console.log('Sample cell data:', cells[0])
  return cells
}
