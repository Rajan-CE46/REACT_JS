import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  let mycols = [
    "Red",
    "Green",
    "Blue",
    "Olive",
    "Grey",
    "Yellow",
    "Pink",
    "Purple",
    "Lavender",
    "white",
    "Black",
  ];
  return (
    <div
      className="w-full h-screen duration-200 text-center"
      style={{ backgroundColor: color }}
    >
      you clicked on {color}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: mycols[0] }}
            onClick={() => setColor(mycols[0])}
          >
            {mycols[0]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: mycols[1] }}
            onClick={() => setColor(mycols[1])}
          >
            {mycols[1]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: mycols[2] }}
            onClick={() => setColor(mycols[2])}
          >
            {mycols[2]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: mycols[3] }}
            onClick={() => setColor(mycols[3])}
          >
            {mycols[3]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: mycols[4] }}
            onClick={() => setColor(mycols[4])}
          >
            {mycols[4]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: mycols[5] }}
            onClick={() => setColor(mycols[5])}
          >
            {mycols[5]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: mycols[6] }}
            onClick={() => setColor(mycols[6])}
          >
            {mycols[6]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: mycols[7] }}
            onClick={() => setColor(mycols[7])}
          >
            {mycols[7]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: mycols[8] }}
            onClick={() => setColor(mycols[8])}
          >
            {mycols[8]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: mycols[9] }}
            onClick={() => setColor(mycols[9])}
          >
            {mycols[9]}
          </button>
          <button
            className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: mycols[10] }}
            onClick={() => setColor(mycols[10])}
          >
            {mycols[10]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
