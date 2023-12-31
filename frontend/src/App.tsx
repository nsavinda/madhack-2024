import React from 'react'
import './App.scss'
import "@fontsource/ibm-plex-mono"

import NavBar from './Components/NavBar/NavBar'
import Hero from "./Components/Hero/Hero";


const App = () => {
    return (
        <div className="app-container">
            <NavBar />
            <Hero />
        </div>
    );
}

export default App;
