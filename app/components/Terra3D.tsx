'use client'
import React from 'react'
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import {Canvas} from "@react-three/fiber"

export function DModel(props) {
  const { nodes, materials } = useGLTF('/Polygon_Planet_1012005902.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        scale={2.5}
      />
    </group>
  )
}

useGLTF.preload('/Polygon_Planet_1012005902.glb')

const Terra3D = () => {
  return (

        <Canvas>
            <Environment preset="city" />
            <OrbitControls autoRotate enableZoom={false} />
            <DModel />
        </Canvas>
  );
};
export default Terra3D;
