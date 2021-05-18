import React from 'react'
import Logo from '../Images/Logo.png'

function Header() {
    return (
        <header>
            <div>
                <img src={Logo}/>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Events</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
