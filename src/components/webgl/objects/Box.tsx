import * as THREE from 'three';
import {useMemo, useRef, useState} from 'react';
import {ThreeElements, useFrame} from '@react-three/fiber';

const Box = (props: ThreeElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({color: hovered ? 'red' : 'green'}), [hovered]);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onPointerMove={() => {}}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerLeave={() => hover(false)}
      geometry={geometry}
      material={material}
    ></mesh>
  );
};

export default Box;
