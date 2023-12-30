import React, { JSX } from 'react'
import './NavBar.scss'

const Navbar = () => {
    function navBarItem(text: string, url: string = "#"): JSX.Element {
        return (
            <li className="navbar-item">
                <a href={url} className="navbar-link">
                    {text}
                </a>
            </li>
        );
    }

    let items: JSX.Element[] = [
        navBarItem("About"),
        navBarItem("Guidelines"),
        navBarItem("Timeline"),
        navBarItem("Prizes"),
        navBarItem("Merchandise"),
        navBarItem("Contact Us"),
        navBarItem("Register")
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {items.map((item, index) => (
                    <React.Fragment key={index}>{item}</React.Fragment>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
