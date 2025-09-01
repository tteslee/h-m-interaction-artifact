export interface ExampleData {
  xAxis: string
  yAxis: string
  examples: string[]
}

export const examplesData: ExampleData[] = [
  // Human-only (S0 baseline)
  {
    xAxis: 'H1 – Service / Prompt',
    yAxis: 'Human-only (S0 baseline)',
    examples: [
      'Colleague asks: "Send me rainfall dataset."',
      'Student asks peer for lecture notes.'
    ]
  },
  {
    xAxis: 'H2 – Advice / Feedback',
    yAxis: 'Human-only (S0 baseline)',
    examples: [
      'Peer reviewer critiques paper',
      'Colleague says: "That slide is confusing."'
    ]
  },
  {
    xAxis: 'H3 – Instruction',
    yAxis: 'Human-only (S0 baseline)',
    examples: [
      'Teacher: "Write a 500-word essay."',
      'Chef instructs kitchen staff.'
    ]
  },
  {
    xAxis: 'H4 – Developmental (Co-steering)',
    yAxis: 'Human-only (S0 baseline)',
    examples: [
      'Mentor guides apprentice',
      'Team retrospective adjusts practice.'
    ]
  },
  {
    xAxis: 'H5 – Psychologist / Meta-Reflection',
    yAxis: 'Human-only (S0 baseline)',
    examples: [
      'Therapist cultivates systemic self-awareness',
      'Philosopher runs reflection circle.'
    ]
  },

  // Human → Machine
  {
    xAxis: 'H1 – Service / Prompt',
    yAxis: 'Human → Machine',
    examples: [
      'Citizen asks chatbot: "Nearest flood shelter?"',
      'Planner prompts GIS AI for roof maps.'
    ]
  },
  {
    xAxis: 'H2 – Advice / Feedback',
    yAxis: 'Human → Machine',
    examples: [
      'Data scientist uploads model; AI flags overfitting',
      'Architect: "Does this plan meet fire code?"'
    ]
  },
  {
    xAxis: 'H3 – Instruction',
    yAxis: 'Human → Machine',
    examples: [
      'Engineer instructs robotic arm',
      'Trader scripts auto-buy orders.'
    ]
  },
  {
    xAxis: 'H4 – Developmental (Co-steering)',
    yAxis: 'Human → Machine',
    examples: [
      'Planner sets "net-zero 2030" goal; AI proposes retrofit pathways',
      'Citizen scientists set hypotheses, AI tests.'
    ]
  },
  {
    xAxis: 'H5 – Psychologist / Meta-Reflection',
    yAxis: 'Human → Machine',
    examples: [
      'Human asks AI: "Reflect on my cognitive biases."',
      'Assembly asks machine to show hidden assumptions.'
    ]
  },

  // Shared (Human ⇄ Machine)
  {
    xAxis: 'H1 – Service / Prompt',
    yAxis: 'Shared (Human ⇄ Machine)',
    examples: [
      'Designer + AI iterate street layouts',
      'Community + civic AI inject agenda prompts.'
    ]
  },
  {
    xAxis: 'H2 – Advice / Feedback',
    yAxis: 'Shared (Human ⇄ Machine)',
    examples: [
      'Doctor & AI critique each other\'s notes',
      'Policy modeller + AI co-review climate budget.'
    ]
  },
  {
    xAxis: 'H3 – Instruction',
    yAxis: 'Shared (Human ⇄ Machine)',
    examples: [
      'Emergency ops: either side issues evacuation',
      'Teacher + AI co-sequence classroom tasks.'
    ]
  },
  {
    xAxis: 'H4 – Developmental (Co-steering)',
    yAxis: 'Shared (Human ⇄ Machine)',
    examples: [
      'Pilot + autopilot dynamically steer',
      'Researcher + lab AI co-evolve experiments.'
    ]
  },
  {
    xAxis: 'H5 – Psychologist / Meta-Reflection',
    yAxis: 'Shared (Human ⇄ Machine)',
    examples: [
      'Human + machine co-analyse zoning bias',
      'Therapist + AI copilot reflect with patient.'
    ]
  },

  // Machine → Human
  {
    xAxis: 'H1 – Service / Prompt',
    yAxis: 'Machine → Human',
    examples: [
      'Calendar AI nudges: "Report due—shall I pull data?"',
      'Smart city layer: "Air quality spike—take action?"'
    ]
  },
  {
    xAxis: 'H2 – Advice / Feedback',
    yAxis: 'Machine → Human',
    examples: [
      'Car AI: "Driver fatigue detected"',
      'AI advisor: "Portfolio overweight in fossil risk."'
    ]
  },
  {
    xAxis: 'H3 – Instruction',
    yAxis: 'Machine → Human',
    examples: [
      'AI tutor: "Solve this next"',
      'Navigation AI: "Turn left in 100m."'
    ]
  },
  {
    xAxis: 'H4 – Developmental (Co-steering)',
    yAxis: 'Machine → Human',
    examples: [
      'Wearable coach adjusts routines',
      'AI project manager identifies recurring bottlenecks.'
    ]
  },
  {
    xAxis: 'H5 – Psychologist / Meta-Reflection',
    yAxis: 'Machine → Human',
    examples: [
      'AI: "Your choices cluster short-term—explore alternatives?"',
      'CEO gets reflection on systemic impact of supply chains.'
    ]
  },

  // Machine-only (S1 baseline)
  {
    xAxis: 'H1 – Service / Prompt',
    yAxis: 'Machine-only (S1 baseline)',
    examples: [
      'Logistics bots reroute trucks',
      'Swarm bots request firmware updates.'
    ]
  },
  {
    xAxis: 'H2 – Advice / Feedback',
    yAxis: 'Machine-only (S1 baseline)',
    examples: [
      'AI ensemble peer-reviews models',
      'Swarms self-assess efficiency.'
    ]
  },
  {
    xAxis: 'H3 – Instruction',
    yAxis: 'Machine-only (S1 baseline)',
    examples: [
      'Drones coordinate firefighting',
      'Warehouse bots issue order-picking steps.'
    ]
  },
  {
    xAxis: 'H4 – Developmental (Co-steering)',
    yAxis: 'Machine-only (S1 baseline)',
    examples: [
      'Self-play AIs test strategies in simulated cities',
      'AI collectives run recursive design experiments.'
    ]
  },
  {
    xAxis: 'H5 – Psychologist / Meta-Reflection',
    yAxis: 'Machine-only (S1 baseline)',
    examples: [
      'Machine collectives audit bias/ecology',
      'Planetary-scale meta-agent audits alignment of other agents'
    ]
  }
]
