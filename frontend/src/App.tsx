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
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

import About from './Components/About/About';

const App = () => {
    return (
        <div className="app-container">
            <NavBar />
            <Hero />
            <About />

            <Timeline />

            <Prizes />

            <Faq />
            <Footer />
        </div>
    );
}

export default App;
