import * as THREE from 'three';
import {useEffect, useState} from 'react';

export type CursorPosition = {
  raw: THREE.Vector2;
  scaled: THREE.Vector2;
};

const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    raw: new THREE.Vector2(0, 0),
    scaled: new THREE.Vector2(0, 0),
  });

  useEffect(() => {
    const pointerHandler = (event: PointerEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      const scaledX = (x / window.innerWidth) * 2 - 1;
      const scaledY = -(y / window.innerHeight) * 2 + 1;
      setCursorPosition(prevState => {
        prevState.raw.set(x, y);
        prevState.scaled.set(scaledX, scaledY);
        return prevState;
      });
    };
    window.addEventListener('pointermove', pointerHandler);
    return () => window.removeEventListener('pointermove', pointerHandler);
  }, [cursorPosition]);

  return cursorPosition;
};

export default useCursorPosition;
