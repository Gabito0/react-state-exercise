import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EightBall from "./EightBall";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <EightBall />
    </div>
  );
}

export default App;
