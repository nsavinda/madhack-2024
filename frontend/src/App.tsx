import React from 'react'
import './App.scss'
import "@fontsource/ibm-plex-mono"

import NavBar from './Components/NavBar/NavBar'
import Hero from "./Components/Hero/Hero";

import About from './Components/About/About';

const App = () => {
    return (
        <div className="app-container">
            <NavBar />
            <Hero />

            {/* <About /> */}

            <Timeline />

            <Prizes />

            <Faq />
            <Footer />

        </div>
    );
}

export default App;
