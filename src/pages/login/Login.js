import React, { useState } from 'react'
import { Link, ETHTokenType } from '@imtbl/imx-sdk';
import './login.scss';


const Login = () => {

    const link = new Link('https://link.ropsten.x.immutable.com');

    const [myAddress, setAddress] = useState('')

    const testIMX = async () => {
        const { address } = await link.setup({});
        localStorage.setItem('address', address);
        setAddress(address)
    }

    const deposit = async () => {
        link.deposit({
        });
    }


    const disconnect = async () => {
        localStorage.removeItem('address');
        setAddress('')
    }


    return (
        <section>
            <h1>{myAddress}</h1>
            <button onClick={testIMX}>Join now</button>
            <button onClick={deposit}>Deposit</button>
            <button onClick={disconnect}>disconnect</button>
        </section>
    )
}

export default Login