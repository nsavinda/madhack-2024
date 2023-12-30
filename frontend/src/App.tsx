// import React from 'react'
// import './App.css'
// import NavBar from "./Components/NavBar/NavBar"


// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Timeline />
//     </div>
//   );
import React from 'react';
import './App.scss';
import "@fontsource/ibm-plex-mono";


import logo from './assets/logo.png'
import hero from './assets/hero.png';
import NavBar from './Components/NavBar/NavBar';
import Timeline from "./Components/Timeline/Timeline"
import Hero from './Components/Hero/Hero';
import Prizes from './Components/Prizes/Prizes';


const App = () => {
    return (
        <div className="app-container">
            <NavBar />
            <Hero />
            <Timeline />

            <Prizes />
        </div>
    );
}

export default App;
