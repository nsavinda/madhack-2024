import React from 'react'
import './App.css'
import "@fontsource/ibm-plex-mono";
import NavBar from "./Components/NavBar/NavBar"
import Timeline from "./Components/Timeline/Timeline"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Timeline />
    </div>
  );
}

export default App;
