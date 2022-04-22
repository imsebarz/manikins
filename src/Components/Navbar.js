import React from 'react'
import './navbar.scss'
import { Link, ETHTokenType } from '@imtbl/imx-sdk';
const link = new Link('https://link.ropsten.x.immutable.com');


const testIMX = async () => {
    const { address } = await link.setup({});
    localStorage.setItem('address', address);
}

const deposit = async () => {
    link.deposit({
    });
}


const disconnect = async () => {
    localStorage.removeItem('address');
}


const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li id='logo-head'>
                    <a href="/">{localStorage.getItem('address')}</a>
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
            <button onClick={testIMX}>Join now</button>
            <button onClick={deposit}>Deposit</button>
            <button onClick={disconnect}>disconnect</button>
        </nav>
    )
}

export default Navbar