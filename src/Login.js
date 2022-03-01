import React from 'react'
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider'

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        // auth.signInWithRedirect(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
            console.log(result);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
