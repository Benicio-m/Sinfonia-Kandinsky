import { useEffect, useRef, useState } from "react"
import styles from "../App.module.css"
import audio from "/Sinestesia da composição 8.mp3"
import obra from "../assets/obra.jpg"
export default function Oa() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (playing && audioRef.current) {
            audioRef.current.play();
        } else if (audioRef.current) {
            audioRef.current.pause();
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
                <div className={styles.i1}>
                    <img src={obra} alt="obra" style={{height: "70vh"}} />
                </div>
                <audio src={audio} ref={audioRef} />
                <button onClick={() => setPlaying(!playing)} className={styles.but}>▶</button>
            </div>
        </div>
    )
}