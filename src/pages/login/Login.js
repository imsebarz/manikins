import React, { useState } from 'react'
// import { Link, ETHTokenType } from '@imtbl/imx-sdk';
import './login.scss';
import { Link as BrowserLink, useNavigate } from 'react-router-dom';
import { useUserDispatch, useUserState } from '../../context/user/State';
import { loginUser } from '../../context/user/Actions';


const Login = () => {

    // const link = new Link('https://link.ropsten.x.immutable.com');

    // const [myAddress, setAddress] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { isAuthenticated } = useUserState()
    const userDispatch = useUserDispatch()
    const navigate = useNavigate()


    // const testIMX = async () => {
    //     const { address } = await link.setup({});
    //     localStorage.setItem('address', address);
    //     setAddress(address)
    // }

    // const deposit = async () => {
    //     link.deposit({
    //     });
    // }


    // const disconnect = async () => {
    //     localStorage.removeItem('address');
    //     setAddress('')
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
        }
        loginUser(userDispatch, user, navigate)

    }



    return (
        <section>
            {isAuthenticated === false
                ?
                (
                    <>
                        <h1>Login</h1>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                            <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit'>Login</button>
                        </form>
                        <BrowserLink to='/' >
                            <button>Go back</button>
                        </BrowserLink>
                    </>
                )
                :
                (
                    <>
                        <h1>You are already logged</h1>
                        <BrowserLink to='/' >
                            <button>Go back</button>
                        </BrowserLink>
                    </>
                )
            }
        </section >
    )
}

export default Login