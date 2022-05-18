import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import './navbar.scss'
// import { useUserState, useUserDispatch } from '../context/user/State'
// import { signOut } from '../context/user/Actions'

const Navbar = () => {
  // const { isAuthenticated } = useUserState()
  // const userDispatch = useUserDispatch()
  // const navigate = useNavigate()

  return (
        <nav className='navbar'>
            <ul>
                <li id='logo-head'>
                    <a href="/">{ }</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/market">NTF's</a>
                </li>
                <li>
                    <a href="/team">Our Team</a>
                </li>
                <li>
                    <a href="/contact">Contact US</a>
                </li>
                {/* {isAuthenticated
                    ?
                    <li>
                        <button onClick={() => signOut(userDispatch, navigate)}>Log out </button>
                    </li>
                    :
                    <>
                        <li>
                            <Link to='/register'>
                                <button >Register </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/login'>
                                <button >Login</button>
                            </Link>
                        </li>
                    </>

                } */}
            </ul>

        </nav >
  )
}

export default Navbar

// create a function to convert decimal to binary
function decimalToBinary (decimal) {
  return (decimal >>> 0).toString(2)
}

function binaryToDecimal (binary) {
  return parseInt(binary, 2)
}
