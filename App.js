import '../src/index.css';
import "../src/Peyda/font.css"

import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }


  return (
    <div id='container'>
        <h1 id='heading'>{advice}</h1>
        <button id='btn' onClick={getAdvice}>Get advice</button>
        <Message count={count} />
      
    </div>
  );
}

function Message(props) {
  return (
    <p id='para'>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}


export default App;
