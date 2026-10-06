'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useKeyboardControls } from './usekeyboardcontrols'

const MOVE_SPEED   = 0.05
const ROTATE_SPEED = 0.025
const PITCH_AMOUNT = 0.18
const BOUNDARY     = 4.5
const SPRING_BACK  = 0.06

export function Drone() {
  const { scene } = useGLTF('/dp.glb')
  const { keys } = useKeyboardControls()
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    const g = groupRef.current
    if (!g) return
    const k = keys.current

    // Forward / back with pitch lean
    if (k.ArrowUp) {
      g.position.z -= MOVE_SPEED
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -PITCH_AMOUNT, 0.12)
    } else if (k.ArrowDown) {
      g.position.z += MOVE_SPEED
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, PITCH_AMOUNT, 0.12)
    } else {
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, 0, 0.1)
    }

    // Yaw
    if (k.ArrowLeft)  g.rotation.y += ROTATE_SPEED
    if (k.ArrowRight) g.rotation.y -= ROTATE_SPEED

    // Boundary spring-back on Z
    if (g.position.z >  BOUNDARY) g.position.z = THREE.MathUtils.lerp(g.position.z,  0, SPRING_BACK)
    if (g.position.z < -BOUNDARY) g.position.z = THREE.MathUtils.lerp(g.position.z, -0, SPRING_BACK)
  })

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/dp.glb')