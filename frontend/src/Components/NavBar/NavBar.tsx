import React from 'react'
import logo from '../../assets/logo.png'

function NavBar() {
  return (
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
  )
}

export default NavBar
