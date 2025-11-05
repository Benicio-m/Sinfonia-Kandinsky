import { useEffect, useRef, useState } from "react"
import styles from "../App.module.css"
import audio from "/Sinestesia da composição 8.mp3"

export default function Oa() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    const isOtherAudioPlaying = () => {
        const audios = document.querySelectorAll('audio');
        return Array.from(audios).some(audio => !audio.paused);
    };

    useEffect(() => {
        if (audioRef.current) {
            if (playing) {
            // Play only if no other audio is playing or if this audio is already playing
            if (!isOtherAudioPlaying() || !audioRef.current.paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            } else {
                audioRef.current.pause();
            }
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [playing]);
    return(
        <div className={styles.c}>
            <div className={styles.hor}>
                <h1>Composição VIII</h1>
            </div>
            <div className={styles.image} >
                <div className={styles.i1} />
                <audio src={audio} ref={audioRef} />
                <button onClick={() => setPlaying(!playing)} className={styles.but}>▶</button>
            </div>
        </div>
    )
}