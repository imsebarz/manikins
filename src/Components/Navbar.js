import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { useUserDispatch } from '../context/user/State'
import { getAllItems, loginUser } from '../context/user/Actions'
import {ReactComponent as DiscordIcon} from '../assets/discordIcon.svg'
import {ReactComponent as TwitterIcon} from '../assets/twitterIcon.svg'
import manikinIcon from '../assets/manikinIcon.svg'

const Navbar = () => {
    const userDispatch = useUserDispatch()
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < lastScrollY || window.scrollY < 550) { // if scroll down hide the navbar
                setShow(true);
            } else { // if scroll up show the navbar
                setShow(false);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const login = async () => {
        loginUser(userDispatch, { username: 'manikin@litgame.com', password: '_DevPassWord' })
            .then(() => {
                getAllItems(userDispatch)
            })
    }


    return (
        <header className={`navbar ${show === true ? "active" : "hidden"}`}>
            <nav >
                <img src={manikinIcon} className='logo' alt="" />
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/market">NTF's</a>
                    </li>
                    <li>
                        <a href="/roadmap">Road map</a>
                    </li>
                    <li>
                        <a href="/team">Our Team</a>
                    </li>
                    <li>
                        <button onClick={login} className='register'>Register</button>
                    </li>

                    <li className='socials'>
                        <DiscordIcon/>
                        <TwitterIcon/>
                    </li>
                </ ul>
            </nav >
        </header>
    )
}

export default Navbar
