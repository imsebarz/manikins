import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { useUserDispatch } from '../context/user/State'
import { getAllItems, loginUser } from '../context/user/Actions'
import { ReactComponent as DiscordIcon } from '../assets/discordIcon.svg'
// import {ReactComponent as TwitterIcon} from '../assets/twitterIcon.svg'
import manikinIcon from '../assets/manikinIcon.webp'
import tipografia from '../assets/tipografia.png'

const Navbar = () => {
    const userDispatch = useUserDispatch()
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [sideDisplay, setSideDisplay] = useState("-100%");
    const [sideOpacity, setSideOpacity] = useState("0%");
    const [isOpen, setIsOpen] = useState("closed");

    const toggleSidebar = () => {
        if (sideDisplay === "-100%") {
            setSideDisplay("0%");
            setSideOpacity('100%')
            setIsOpen("open");
        } else {
            setSideDisplay("-100%");
            setSideOpacity('0%')
            setIsOpen("closed");
        }
    };

    useEffect(() => {
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
                <ul className='nav-links'>
                    <li className='nav-link'>
                        <a href="/about">About</a>
                    </li>
                    <li className='nav-link'>
                        <a href="/market">Battle Relics</a>
                    </li>
                    <li className='nav-link'>
                        <a href="/roadmap">Roadmap</a>
                    </li>
                    <li className='nav-link'>
                        <a href="/team">Team</a>
                    </li>
                    <li>
                        <button onClick={login} className='register'>Waitlist</button>
                    </li>

                    <li className='socials'>
                        <DiscordIcon />
                    </li>
                </ ul>
                <div className={`hamburger ${isOpen}`} onClick={toggleSidebar}>
                    <svg
                        width="105"
                        height="90"
                        viewBox="0 0 105 90"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="hamburger">
                            <path
                                id="bottom"
                                d="M10.5875 70.3995H94.5039C95.7861 70.3995 97.0558 70.6521 98.2405 71.1428C99.4251 71.6335 100.502 72.3527 101.408 73.2594C102.315 74.1661 103.034 75.2425 103.525 76.4271C104.016 77.6118 104.268 78.8815 104.268 80.1637C104.268 81.446 104.016 82.7157 103.525 83.9003C103.034 85.085 102.315 86.1614 101.408 87.0681C100.502 87.9748 99.4251 88.694 98.2405 89.1847C97.0558 89.6754 95.7861 89.928 94.5039 89.928H10.5875C9.30528 89.928 8.03558 89.6754 6.85093 89.1847C5.66628 88.694 4.58988 87.9748 3.68318 87.0681C2.77649 86.1614 2.05726 85.085 1.56656 83.9003C1.07586 82.7157 0.823303 81.446 0.823303 80.1637C0.823303 78.8815 1.07586 77.6118 1.56656 76.4271C2.05726 75.2425 2.77649 74.1661 3.68318 73.2594C4.58988 72.3527 5.66628 71.6335 6.85093 71.1428C8.03558 70.6521 9.30528 70.3995 10.5875 70.3995V70.3995Z"
                                fill="#E9E9E9"
                            />
                            <path
                                id="middle"
                                d="M10.5875 35.267H94.5039C95.7861 35.267 97.0558 35.5195 98.2405 36.0102C99.4251 36.5009 100.502 37.2201 101.408 38.1268C102.315 39.0335 103.034 40.1099 103.525 41.2946C104.016 42.4792 104.268 43.7489 104.268 45.0312C104.268 46.3134 104.016 47.5832 103.525 48.7678C103.034 49.9525 102.315 51.0289 101.408 51.9355C100.502 52.8422 99.4251 53.5615 98.2405 54.0522C97.0558 54.5429 95.7861 54.7954 94.5039 54.7954H10.5875C9.30528 54.7954 8.03558 54.5429 6.85093 54.0522C5.66628 53.5615 4.58988 52.8422 3.68318 51.9355C2.77649 51.0289 2.05726 49.9525 1.56656 48.7678C1.07586 47.5832 0.823303 46.3134 0.823303 45.0312C0.823303 43.7489 1.07586 42.4792 1.56656 41.2946C2.05726 40.1099 2.77649 39.0335 3.68318 38.1268C4.58988 37.2201 5.66628 36.5009 6.85093 36.0102C8.03558 35.5195 9.30528 35.267 10.5875 35.267V35.267Z"
                                fill="#E9E9E9"
                            />
                            <path
                                id="top"
                                d="M10.5875 0.138149H94.5039C97.0935 0.138149 99.5771 1.16688 101.408 2.99803C103.239 4.82918 104.268 7.31275 104.268 9.90238C104.268 12.492 103.239 14.9756 101.408 16.8067C99.5771 18.6379 97.0935 19.6666 94.5039 19.6666H10.5875C7.9979 19.6666 5.51433 18.6379 3.68318 16.8067C1.85203 14.9756 0.823303 12.492 0.823303 9.90238C0.823303 7.31275 1.85203 4.82918 3.68318 2.99803C5.51433 1.16688 7.9979 0.138149 10.5875 0.138149V0.138149Z"
                                fill="#E9E9E9"
                            />
                        </g>
                    </svg>
                </div>
                <aside className="sidebar" style={{ right: sideDisplay ,opacity: sideOpacity }}>
                    <ul className="aside-links">
                    <li className='logo'>
                        <img src={tipografia} alt="" />
                    </li>
                        <li>
                            {" "}
                            <a href="#about"> About</a>
                        </li>
                        <li>
                            {" "}
                            <a href="#nft">NFT</a>
                        </li>
                        <li>
                            {" "}
                            <a href="#roadmap">RoadMap</a>
                        </li>
                        <li>
                            {" "}   
                            <a href="#team">Team</a>
                        </li>
                        <li>
                        <button onClick={login} className='register'>Waitlist</button>
                        </li>
                        <ul className="socials">
                            <li>
                                {" "}
                                <a href="https://discord.com/" target="_blank" rel="noreferrer">
                                    {" "}
                                 <DiscordIcon />    
                                </a>
                            </li>
                            <li>
                                {" "}
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    {" "}
                                    <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 23 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Twitter">
                                            <path
                                                id="Vector"
                                                d="M22.869 2.41503C22.034 2.78503 21.137 3.03503 20.194 3.14803C21.167 2.56582 21.8949 1.64949 22.242 0.570028C21.3278 1.11302 20.3273 1.49522 19.284 1.70003C18.5824 0.950893 17.653 0.454354 16.6403 0.287502C15.6276 0.12065 14.5881 0.29282 13.6832 0.777281C12.7784 1.26174 12.0588 2.03139 11.6361 2.96673C11.2135 3.90207 11.1115 4.95078 11.346 5.95003C9.49367 5.85702 7.68161 5.37558 6.02741 4.53693C4.37321 3.69829 2.91383 2.52119 1.74399 1.08203C1.34399 1.77203 1.11399 2.57203 1.11399 3.42403C1.11354 4.19102 1.30242 4.94627 1.66387 5.62276C2.02531 6.29925 2.54815 6.87607 3.18599 7.30203C2.44626 7.27849 1.72286 7.07861 1.07599 6.71903V6.77903C1.07591 7.85477 1.44802 8.89741 2.12917 9.73002C2.81032 10.5626 3.75856 11.134 4.81299 11.347C4.12677 11.5327 3.40732 11.5601 2.70899 11.427C3.00648 12.3526 3.58598 13.1621 4.36635 13.742C5.14673 14.3219 6.0889 14.6432 7.06099 14.661C5.41082 15.9564 3.37287 16.6591 1.27499 16.656C0.903368 16.6561 0.532063 16.6344 0.162987 16.591C2.29246 17.9602 4.77133 18.6868 7.30299 18.684C15.873 18.684 20.558 11.586 20.558 5.43003C20.558 5.23003 20.553 5.02803 20.544 4.82803C21.4553 4.169 22.2419 3.35292 22.867 2.41803L22.869 2.41503V2.41503Z"
                                                fill="black"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </aside>
            </nav >
        </header>
    )
}

export default Navbar
