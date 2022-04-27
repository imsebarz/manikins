import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.scss'
import { useUserState, useUserDispatch } from '../context/user/State'
import { signOut } from '../context/user/Actions'

const Navbar = () => {

    const { isAuthenticated } = useUserState()
    const userDispatch = useUserDispatch()
    const navigate = useNavigate()

    return (
        <nav className='navbar'>
            <ul>
                <li id='logo-head'>
                    <a href="/">{ }</a>
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
            {isAuthenticated
                ?
                <button onClick={() => signOut(userDispatch, navigate)}>Log out </button>
                :
                <>
                    <Link to='/register'>
                        <button >Register </button>
                    </Link>
                    <Link to='/login'>
                        <button >Login</button>
                    </Link>
                </>

            }

        </nav >
    )
}

export default Navbar