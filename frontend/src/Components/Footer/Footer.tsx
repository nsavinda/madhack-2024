import React from 'react'


import './Footer.scss'

import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className='footer'>

        <div className='footer-container'>
            <div className='footer-left'>
            <img className='footer-logo' src={logo} alt="logo" />
            <p className='footer-text'>MADHACK is a 24-hour hackathon organized by IEEE Student Branch of University of Colombo School of Computing. </p>
            </div>
            <div className='footer-right'>
            {/* <h2>Links</h2> */}
            <ul className='footer-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Timeline</a></li>
                <li><a href="#">Prizes</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            </div>
    </div>
    </div>
  )
}

export default Footer
