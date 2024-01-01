import React from 'react'

import './About.scss'

function About() {
  return (
    <div className='about-container'>
      <div className='about-left'>
        <h1 className='about-header'>About</h1>
        <p className='about-text'>MADHACK is a 24-hour hackathon organized by IEEE Student Branch of University of Colombo School of Computing. </p>

        </div>
        <div className='about-right'>
        <h2>Links</h2>
        <ul className='about-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Timeline</a></li>
            <li><a href="#">Prizes</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
        </div>
    </div>
  )
}

export default About
