import './App.css'
import play from './assets/play.svg'
function App() {
    const img = new URL("./assets/kandinsky-composicao-viii-d.jpg", import.meta.url).href
    return (
        <div style={{backgroundImage: `url(${img})`,  backgroundPosition: 'center',  backgroundSize: 'cover',  backgroundRepeat: 'no-repeat', height: "100vh"}}>
            <button title='Play' style={{position: "absolute", left: "20.5em", top: "5.5em", backgroundColor: "#ff5e00ff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "31.5em", top: "5.5em", backgroundColor: "#1900ff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "58.5em", top: "5.5em", backgroundColor: "#00ff4cff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "42.5em", top: "17.6em", backgroundColor: "#008cff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "34.5em", top: "30.7em", backgroundColor: "#ff0800", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "20.5em", top: "5.5em", backgroundColor: "#ff5e00ff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "20.5em", top: "5.5em", backgroundColor: "#ff5e00ff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "20.5em", top: "5.5em", backgroundColor: "#ff5e00ff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
            <button title='Play' style={{position: "absolute", left: "20.5em", top: "5.5em", backgroundColor: "#ff5e00ff", height: "3em", width: "3em"}}>
                <img src={play} alt='play' style={{transform: "translate(-40%, -9%)"}}/>
            </button>
        </div>
    )
}

export default App
