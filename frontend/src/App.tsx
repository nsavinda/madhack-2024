// import React from 'react'
// import './App.css'
// import "@fontsource/ibm-plex-mono";
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
import logo from './assets/logo.png'
import hero from './assets/hero.png';
import Timeline from "./Components/Timeline/Timeline"


const App = () => {
    return (
        <div className="app-container">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul>
                        <li><a href="#about">about</a></li>
                        <li><a href="#guidelines">guidelines</a></li>
                        <li><a href="#timeline">timeline</a></li>
                        <li><a href="#prizes">prizes</a></li>
                        <li><a href="#merchandise">merchandise</a></li>
                        <li><a href="#contact">contact us</a></li>
                        <li><a href="#register">register</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <div className="text-buttons">
                    <h1>Battle out your Mobile App Development Skills</h1>
                    <div className="buttons">
                        <button className="register-btn">Register Now</button>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="Hero" />
                </div>
            </main>
            <Timeline />
        </div>
    );
}

export default App;
