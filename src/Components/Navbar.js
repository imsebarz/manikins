import React from 'react'
import './navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li id='logo-head'>
                    <a href="/">Logo</a>
                </li>
                <li>
                    <a href="/team">Team</a>
                </li>
                <li>
                    <a href="/teasers">Teasers</a>
                </li>
                <li>
                    <a href="/market">Market</a>
                </li>
                <li>
                    <a href="/faq">FAQ</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
            <button>Join now</button>
        </nav>
    )
}

export default Navbar