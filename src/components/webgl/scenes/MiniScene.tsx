'use client';

import * as THREE from 'three';
import {Mesh, MeshBasicMaterial} from 'three';

import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import useCursorPosition from '@/hooks/useCursorPosition';

const MiniScene = () => {
  const meshRef = useRef<Mesh>(null!);
  const pointer = useCursorPosition();

  const handleHover = () => {
    if (meshRef.current) {
      (meshRef.current.material as MeshBasicMaterial).color.set('red');
    }
  };

  const handleHoverEnd = () => {
    if (meshRef.current) {
      (meshRef.current.material as MeshBasicMaterial).color.set('green');
    }
  };

  useFrame(state => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      const target = state.camera.localToWorld(
        new THREE.Vector3(
          pointer.scaled.x * state.viewport.width * 0.5,
          pointer.scaled.y * state.viewport.height * 0.5,
          1,
        ),
      );
      mesh.lookAt(target);
    }
  });

  return (
    <mesh ref={meshRef} onPointerEnter={handleHover} onPointerLeave={handleHoverEnd}>
      <meshBasicMaterial color={'green'} wireframe={true} />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default MiniScene;
