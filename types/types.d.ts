import {ThreeElements} from '@react-three/fiber';

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare global {
  namespace JSX {
    type IntrinsicElements = ThreeElements;
  }
}
