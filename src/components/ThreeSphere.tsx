"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SphereParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate sphere surface points
  const positions = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.0; // radius

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Auto rotation
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;

      // Mouse sway interpolations
      pointsRef.current.rotation.y += (state.pointer.x * 0.4 - pointsRef.current.rotation.y) * 0.08;
      pointsRef.current.rotation.x += (-state.pointer.y * 0.4 - pointsRef.current.rotation.x) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00F5D4"
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function SphereWireframe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Opposite rotation
      meshRef.current.rotation.y = -state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.x = -state.clock.getElapsedTime() * 0.04;

      meshRef.current.rotation.y += (state.pointer.x * 0.25 - meshRef.current.rotation.y) * 0.08;
      meshRef.current.rotation.x += (-state.pointer.y * 0.25 - meshRef.current.rotation.x) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.05, 18, 18]} />
      <meshBasicMaterial
        color="#5B5BFF"
        wireframe={true}
        transparent={true}
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function ThreeSphere() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        {/* Spinner Loader Fallback */}
        <div className="relative h-40 w-40 flex items-center justify-center">
          <div className="absolute h-full w-full rounded-full border-4 border-brand-primary/10 border-t-brand-secondary animate-spin" />
          <span className="text-xs font-semibold tracking-widest text-brand-muted uppercase">Loading AI Space</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative min-h-[220px] sm:min-h-[450px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <group scale={isMobile ? 0.85 : 1}>
          <SphereParticles />
          <SphereWireframe />
        </group>
      </Canvas>
      {/* Visual background lights behind the canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-36 w-36 sm:h-72 sm:w-72 rounded-full bg-brand-secondary/10 blur-[60px] sm:blur-[80px] pointer-events-none" />
    </div>
  );
}
