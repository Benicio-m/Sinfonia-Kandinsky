import { useEffect, useRef, useState } from "react"
import styles from "../App.module.css"
import audio from "/Comp vii.mp3"

export default function Ob() {
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
                <h1>Composição VII</h1>
            </div>
            <div className={styles.image}>
                <div className={styles.i2} />  
                <audio src={audio}/>
                <button onClick={() => setPlaying(!playing)} className={styles.but}>▶</button>
            </div>
        </div>
    )
}