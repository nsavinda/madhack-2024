import React from 'react'

import {createBrowserRouter,
    RouterProvider,
    Route, Routes } from 'react-router-dom'

import './App.scss'
import "@fontsource/ibm-plex-mono"

import NavBar from './Components/NavBar/NavBar'
import Hero from "./Components/Hero/Hero";

import Timeline from './Components/Timeline/Timeline';
import Prizes from './Components/Prizes/Prizes';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';


import Registration from './Components/Registration/Registration'



const App = () => {
    return (
        <div className="app-container">
            {/* <RouterProvider router={}> */}

  

            <Routes>

            <Route path="/register" Component={Registration} />
            {/* <Route path="/" Component={NavBar} /> */}


            <Route path="/" element={<div> <NavBar /> <Hero /> <Timeline /> <Prizes /> <Faq /> <Footer /> </div>} />
            
        


            </Routes>

            {/* <NavBar />
            <Hero />



            <Timeline />

            <Prizes />

            <Faq />
            <Footer /> */}

            {/* </RouterProvider> */}



        </div>
    );
}

export default App;
