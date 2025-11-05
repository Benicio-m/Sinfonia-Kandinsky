import React, { useEffect, useRef, useState } from "react"
import styles from "../App.module.css"
import audio from "/Comp vii.mp3"
import obra from "../assets/obra3.webp"
export default function Ob() {
    const audioRef = useRef(null);
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
                <h1>Composição VII</h1>
            </div>
            <div className={styles.image}>
                <div className={styles.i1}>
                    <img src={obra} alt="obra" /> 
                </div>  
                <audio src={audio} ref={audioRef} />
                <button type="button" onClick={() => setPlaying(!playing)} className={styles.but}>▶</button>
            </div>
        </div>
    )
}