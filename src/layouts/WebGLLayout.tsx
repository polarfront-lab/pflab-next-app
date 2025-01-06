'use client';

import {ReactNode, Suspense, useRef} from 'react';
import Scene from '@/components/webgl/Scene';

const WebGLLayout = ({children}: {children: ReactNode}) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  /* scaling for the mobile environment */
  const getDevicePixelRatio = () => {
    if (typeof window !== 'undefined' && typeof window.devicePixelRatio !== 'undefined') {
      return window.innerWidth <= 768 ? 1.3 : Math.max(window.devicePixelRatio, 2);
    } else {
      return 1.3;
    }
  };

  return (
    <div
      className="relative w-dvw h-dvh grid items-center justify-center grid-rows-1 grid-cols-1 pointer-events-auto"
      ref={containerRef}
    >
      <div className="w-full h-full col-start-1 row-start-1">{children}</div>
      <Suspense fallback={null}>
        <Scene
          eventSource={containerRef}
          dpr={getDevicePixelRatio()}
          frameloop={'always'} /* @see { https://r3f.docs.pmnd.rs/advanced/scaling-performance } */
          eventPrefix="client"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            gridColumnStart: '1',
            gridRowStart: '1',
            zIndex: -1,
          }}
        />
      </Suspense>
    </div>
  );
};

export default WebGLLayout;
