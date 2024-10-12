'use client'
import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from "maath/random";
import * as THREE from 'three'

const StarBackground: React.FC = () => {
const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3); // Cada ponto tem 3 coordenadas (x, y, z)
    random.inSphere(positions, { radius: 1.2 });
    return positions;
  });

  const [color, setColor] = useState('#0e3b9c'); // Cor padrão: azul no tema claro

  // Detectar mudança de tema (modo claro/escuro) pela classe "dark" no elemento html
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setColor(isDarkMode ? '#fff' : '#0e3b9c'); // Branco no modo escuro, azul no modo claro
    };

    // Verificar o tema inicial
    checkTheme();

    // Observar mudanças na classe "dark" no HTML
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    // Observar mudanças nos atributos do elemento <html>
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect(); // Limpar o observador quando o componente desmontar
    };
  }, []);

  // Animação de rotação
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled >
        <PointMaterial
          transparent
          color={color} // Define a cor com base no tema
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
