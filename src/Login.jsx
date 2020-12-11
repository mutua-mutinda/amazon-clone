import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth => {
            if (auth) {
                history.push("/")
            }
        })).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth)
            if (auth) {
                history.push("/")
            }
        }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG21.png" alt=""/>
            </Link>

            <div className="login__container">
                <h2>Sign-In</h2>

                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Pasword</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                    <p className="terms">By continuing, you agree to AMAZON CLONE <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice.</a></p>
                    <button onClick={register} className="login__registerButton">Create your amazon account</button>
                </form>
            </div>

        </div>
    ) 
}

export default Login
