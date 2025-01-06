import {create} from 'zustand';
import {Frameloop} from '@react-three/fiber';

interface FrameLoopState {
  frameLoop: Frameloop;
  setFrameLoop: (frameLoop: Frameloop) => void;
}

export const useEventSourceStore = create<FrameLoopState>(set => {
  return {
    frameLoop: 'always',
    setFrameLoop: v => set({frameLoop: v}),
  };
});

export default useEventSourceStore;
