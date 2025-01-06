'use client';

import {Canvas, RenderProps} from '@react-three/fiber';
import {Preload} from '@react-three/drei';
import {r3f} from '@/utils';
import * as THREE from 'three';
import {useEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import useFrameLoopStore from '@/stores/useFrameLoopStore';

export default function Scene({...props}) {
  // Everything defined in here will persist between route changes, only children are swapped
  const ref = useRef<HTMLCanvasElement>(null!);
  const pathname = usePathname();
  const {frameLoop} = useFrameLoopStore();

  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current as RenderProps<HTMLCanvasElement>;
      if (pathname !== '/') {
        canvas.frameloop = 'demand';
      }
    }
  }, [pathname]);

  return (
    <Canvas
      {...props}
      onCreated={state => (state.gl.toneMapping = THREE.AgXToneMapping)}
      frameloop={frameLoop}
      ref={ref}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}
