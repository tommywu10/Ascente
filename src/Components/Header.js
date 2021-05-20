import React, {useState} from 'react'
import Logo from '../Images/Logo.png'
import {Link} from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


function Header() {
    const [navbarOpen, setNavBarOpen] = useState(false)

    const handleToggle = () => {
        setNavBarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavBarOpen(false)
    }

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Ascente logo"/>
            </div>
                <button onClick={handleToggle}> {navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "black", width: "40px", height: "40px" }} />
  )}</button>
                <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                    <Link to="/" className="menu-item" onClick={() => closeMenu()}><li>Home</li></Link>
                    <Link to="/events" className="menu-item" onClick={() => closeMenu()}><li>Events</li></Link>
                    <Link to="/about" className="menu-item" onClick={() => closeMenu()}><li>About</li></Link>
                    <Link to="/contact" className="menu-item" onClick={() => closeMenu()}><li>Contact</li></Link>
                </ul>
        </header>
    )
}

export default Header
