import {create} from 'zustand';
import React from 'react';

interface EventSourceState {
  activeEventSourceRef: React.RefObject<HTMLElement | undefined> | undefined;
  setEventSourceRef: (ref: React.RefObject<HTMLElement | undefined>) => void;
  clearEventSourceRef: () => void;
}

export const useEventSourceStore = create<EventSourceState>(set => {
  return {
    activeEventSourceRef: undefined,
    setEventSourceRef: ref => set({activeEventSourceRef: ref}),
    clearEventSourceRef: () => set({activeEventSourceRef: undefined}),
  };
});

export default useEventSourceStore;
