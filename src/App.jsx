import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("skyBlue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick= {()=> setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }
          }
          >Red</button>
          <button
            onClick= {()=> setColor("Lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Lime" }}
          >Lime</button>
          <button
            onClick= {()=> setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Black" }}
          >Black</button>
          <button
            onClick= {()=> setColor("Maroon")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Maroon" }}
          >Maroon</button>
          <button
            onClick= {()=> setColor("Aqua")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Aqua" }}
          >Aqua</button>
          <button
            onClick= {()=> setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Lavender" }}
          >Lavender</button>
          <button
            onClick= {()=> setColor("Orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Orange" }}
          >Orange</button>
          <button
            onClick= {()=> setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
          >Grey</button>
          <button
            onClick= {()=> setColor("DarkGreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "DarkGreen" }}
          >Dark Green</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
