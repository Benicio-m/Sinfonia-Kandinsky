import styles from "./App.module.css";
import { AudioProvider } from "./vars";
import Oa from './works/oa';
import Ob from './works/ob';
 
function App() {
    
  return (
    <AudioProvider>
       <div className={styles.b}>
          <Oa />
          <Ob />
        </div>     
    </AudioProvider>
  );
}

export default App;
