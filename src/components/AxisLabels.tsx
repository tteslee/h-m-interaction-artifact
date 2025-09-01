import React from 'react'
import { Text } from '@react-three/drei'
import { cubeData } from '../data/cubeData'

const AxisLabels: React.FC = () => {
  return (
    <group>
      {/* X-axis labels (Role/Mode of Relation) */}
      {cubeData.xAxis.map((axis, index) => (
        <Text
          key={`x-${index}`}
          position={[(index - 2) * 2.5, -7, 0]}
          fontSize={0.5}
          color="#4a9eff"
          anchorX="center"
          anchorY="middle"
        >
          {axis.id}
        </Text>
      ))}

      {/* Y-axis labels (Locus of Agency) */}
      {cubeData.yAxis.map((axis, index) => (
        <Text
          key={`y-${index}`}
          position={[-7, (index - 2) * 2.5, 0]}
          fontSize={0.5}
          color="#ff6b6b"
          anchorX="center"
          anchorY="middle"
        >
          {axis.id}
        </Text>
      ))}

      {/* Z-axis labels (Interaction Topology) */}
      {cubeData.zAxis.map((axis, index) => (
        <Text
          key={`z-${index}`}
          position={[0, -7, (index - 4.5) * 2.5]}
          fontSize={0.5}
          color="#51cf66"
          anchorX="center"
          anchorY="middle"
        >
          {axis.id}
        </Text>
      ))}

      {/* Axis titles */}
                                                           <Text
            position={[0, -8.5, 0]}
            fontSize={0.7}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
        X: Role/Mode
      </Text>

                                                           <Text
            position={[-8.5, 0, 0]}
            fontSize={0.7}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, Math.PI / 2]}
          >
        Y: Agency
      </Text>

              <Text
          position={[0, 0, -13.5]}
          fontSize={0.7}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
        Z: Topology
      </Text>

      {/* Corner labels for better orientation */}
              <Text
          position={[-8.5, -8.5, -13.5]}
          fontSize={0.9}
          color="#888888"
          anchorX="left"
          anchorY="top"
        >
        Origin
      </Text>
    </group>
  )
}

export default AxisLabels
