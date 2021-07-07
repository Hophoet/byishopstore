import React, { useState, useEffect } from 'react'
import '../styles/ChangePasswordDone.css'

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

function ChangePasswordDone() {
    useEffect(()=>{
    },[])

    const mail = () =>{

    }

  return (
        <div className="login">
            <Link to="/">
                <img src={logo} className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Votre mot de passe à été changer avec succes</h1>
                <p>
                    L'equipe Byishop vous remercie de votre fidélité, et vous propose
                    de participer a l'amélioration des services que nous vous proposons,
                    en envoyeant vous apport la l'adresse <a href=''>service@byishop.com</a>
                </p>
                <button 
                    onClick={mail}
                    className="login__registerButton"
                    >Améliorer byishop</button>
            </div>
        </div>
  );
}

export default ChangePasswordDone;
