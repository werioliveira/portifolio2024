'use client'
import React from 'react';
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import * as THREE from 'three';

export function DModel() {
  const { nodes } = useGLTF('/Polygon_Planet_1012005902.glb')

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.mesh_0 as THREE.Mesh).geometry} // Assert type to Mesh
        material={(nodes.mesh_0 as THREE.Mesh).material} // Assert type to 
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
