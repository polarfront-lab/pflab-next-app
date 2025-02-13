'use client';

import {ColorRepresentation} from 'three';
import {DetailedHTMLProps, forwardRef, HTMLAttributes, ReactNode, Suspense, useImperativeHandle, useRef} from 'react';
import {OrbitControls, PerspectiveCamera, View as ViewImpl} from '@react-three/drei';
import {Three} from './Three';

export const Common = ({color}: {color?: ColorRepresentation}) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color={'blue'} intensity={3} decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

const View = forwardRef(
  (
    {
      children,
      orbit = false,
      ...props
    }: {children?: ReactNode; orbit?: boolean} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ref,
  ) => {
    const localRef = useRef<HTMLDivElement>(null!);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props}>
          <Three>
            <ViewImpl track={localRef} id={'viewImpl'}>
              {children}
              {orbit && <OrbitControls />}
            </ViewImpl>
          </Three>
        </div>
      </>
    );
  },
);

View.displayName = 'View';

export {View};
