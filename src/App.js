import React from "react";
import "./App.css";
import Card from "./Components/Card"
import PhotoCard from "./Components/PhotoCard";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Card />
      <PhotoCard />
    </div>
  );
}

export default App;
