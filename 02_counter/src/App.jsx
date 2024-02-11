import { useState } from "react";
import "./App.css";

function App() {
  // to get displyed on the UI make sure to use following format of declaration ...
  // hookes -->

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(++counter);
  };

  const decreamentValue = () => {
    if (counter == 0) return;
    setCounter(--counter);
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>increament</button>
      <br />
      <button onClick={decreamentValue}>decreament</button>
    </>
  );
}

export default App;
