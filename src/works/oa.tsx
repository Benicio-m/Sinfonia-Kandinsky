import { useEffect, useRef, useState } from "react";
import styles from "../App.module.css";
import audioOa from "/Sinestesia da composição 8.mp3";
import { useAudioGlobal } from "../vars";
export default function Oa() {
  const id = "oa"; // unique string for this component
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const { playingId, setPlayingId } = useAudioGlobal();

  function handlePlayClick() {
    if (!audioRef.current) return;
    if (!playingId || playingId === id) {
      // allow play or pause this
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
        setPlayingId(null);
      } else {
        audioRef.current.play();
        setPlaying(true);
        setPlayingId(id);
      }
    }
    // else: do nothing, some other audio is playing
  }

  // Sync play state when global changes (pause if another starts)
  useEffect(() => {
    if (playingId !== id && playing) {
      audioRef.current?.pause();
      setPlaying(false);
    }
  }, [playingId, playing]);

  // Clean up state when audio ends
  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    const onEnded = () => {
      setPlaying(false);
      setPlayingId(null);
    };
    audioEl.addEventListener("ended", onEnded);
    return () => {
      audioEl.removeEventListener("ended", onEnded);
    };
  }, [setPlayingId]);

  return (
    <div className={styles.c}>
      <h1>Composição VIII</h1>
      <div className={styles.i1} />
      <audio ref={audioRef} src={audioOa} />
      <button onClick={handlePlayClick} className={styles.but}>
        {playing ? "❚❚" : "▶"}
      </button>
      {playingId && playingId !== id && (
        <div className={styles.locked}>Outro áudio está em execução</div>
      )}
    </div>
  );
}