import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { MotionValue } from 'motion/react';

function FloatingElements({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Rotate based on scroll
      groupRef.current.rotation.y = scrollYProgress.get() * Math.PI * 2;
      groupRef.current.position.y = scrollYProgress.get() * 10;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Abstract geometric shapes representing building blocks / soap buckets / microphones */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, -5]}>
          <boxGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial color="#bb9753" wireframe opacity={0.3} transparent />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, -3, -8]}>
          <cylinderGeometry args={[1, 1, 2, 32]} />
          <meshStandardMaterial color="#072754" wireframe opacity={0.4} transparent />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[-5, -6, -10]}>
          <torusGeometry args={[1.5, 0.4, 16, 100]} />
          <meshStandardMaterial color="#382213" wireframe opacity={0.5} transparent />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2}>
        <mesh position={[5, 5, -12]}>
          <octahedronGeometry args={[2]} />
          <meshStandardMaterial color="#bb9753" wireframe opacity={0.2} transparent />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#bb9753" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#072754" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingElements scrollYProgress={scrollYProgress} />
    </Canvas>
  );
}
