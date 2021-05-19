import React from 'react'
import Logo from '../Images/Logo.png'
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Ascente logo"/>
            </div>
            <div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/events"><li>Events</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
