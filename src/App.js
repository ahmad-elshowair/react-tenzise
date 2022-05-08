
import { Die } from "./components/Die";
function App() {
  return (
    <div className="main">
      <div className="dice--container">
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
        <Die value={Math.ceil(Math.random() * 6)}/>
      </div>
    </div>
  );
}

export default App;
