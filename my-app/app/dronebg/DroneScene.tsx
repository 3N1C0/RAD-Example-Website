'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Drone } from './drone'

interface DroneSceneProps {
  isActive: boolean
}

export function DroneScene({ isActive }: DroneSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 3, 8], fov: 45 }}
      style={{ background: 'transparent' }}
      frameloop={isActive ? 'always' : 'never'}
      gl={{ alpha: true, antialias: true }}
    >
      {/* Ambient — low, just lifts the blacks */}
      <ambientLight intensity={0.15} />

      {/* Key light — warm, upper right */}
      <directionalLight
        position={[5, 8, 3]}
        intensity={1.6}
        color="#fff8e1"
        castShadow
      />

      {/* Fill light — cool, left */}
      <directionalLight
        position={[-5, 2, -2]}
        intensity={0.5}
        color="#b3d9ff"
      />

      {/* Rim light — red accent from behind */}
      <directionalLight
        position={[0, -1, -6]}
        intensity={0.4}
        color="#960018"
      />

      <Suspense fallback={null}>
        <Drone />
      </Suspense>
    </Canvas>
  )
}