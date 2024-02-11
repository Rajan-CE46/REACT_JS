import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName : "Rajan",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        TailWind Test
      </h1>
      <Card channel = "chai aur Code"/>
      <Card channel = "rajan"/>
    </>
  );
}

export default App;
