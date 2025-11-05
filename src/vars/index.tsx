import { createContext, useContext, useState, type ReactNode } from "react";

type AudioContextType = {
  playingId: string | null,
  setPlayingId: (id: string | null) => void
};

const AudioContext = createContext<AudioContextType>({
  playingId: null,
  setPlayingId: () => {},
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  return (
    <AudioContext.Provider value={{ playingId, setPlayingId }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudioGlobal() {
  return useContext(AudioContext);
}
