import React, { useState } from 'react'
import '../styles/ChangePassword.css'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Step from '../components/Step';
import BottomLead from '../components/BottomLead';
import Footer from '../components/Footer';

import logo from "../assets/lo.png";
import Rectangle_3 from '../assets/Rectangle_3.png';
import Rectangle_4 from '../assets/Rectangle_4.png';
import Rectangle_5 from '../assets/Rectangle_5.png';
import Rectangle_6 from '../assets/Rectangle_6.png';
import {Link, useHistory} from 'react-router-dom'


function Landing() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

  return (
        <div className="login">
            <Link to="/">
                <img src={logo} className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Changer votre mot de passe</h1>
                <form>
                    <h5>Nouveau mot de passe</h5>
                    <input 
                        type="text" 
                        value={password1} 
                        onChange={
                            e => setPassword1(e.target.value)
                        }
                        
                    />

                    <h5>Confirmation</h5>

                    <input 
                        type="password" 
                        value={password2}
                        onChange={
                            e => setPassword2(e.target.value)
                        }
                        />

                    {/* <button 
                        type="submit"
                        className="login__signInButton"

                        // onClick={signIn}

                        >Sign in</button> */}
                </form>
                
                <p>
                    By signing-in you agree to Amazon fake clone
                    Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>
                <button 
                    // onClick={register}
                    className="login__registerButton"
                    >Changer le mot de passe</button>
            </div>
        </div>
  );
}

export default Landing;
