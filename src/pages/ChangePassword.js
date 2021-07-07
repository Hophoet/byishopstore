import React, { useState, useEffect } from 'react'
import '../styles/ChangePassword.css'
import logo from "../assets/lo.png";
import loader from "../assets/lo.gif";
import {Link, useHistory} from 'react-router-dom'
import { confirmPasswordReset } from '../backend/requests';
import { getPasswordResetValues } from '../backend/module';


function Landing() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [token, setToken] = useState('')
    const [uid, setUID] = useState('')
    const [error, setError] = useState('')

    useEffect(()=>{
        let passwordResetValues = getPasswordResetValues()
        setToken(passwordResetValues.token)
        setUID(passwordResetValues.uid)
    },[])

    const _confirmPasswordReset = () => {
        if(!isLoading){
            setIsLoading(true)
            confirmPasswordReset(password1, token, uid)
            .then((response)=>{
                setIsLoading(false)
                if(response.request && response.request.status == 200){
                    history.push('/reset/done/')
                }
            })
            .catch((error)=>{
                setIsLoading(false)
                console.log(error)
            // Stop the request loading 
                if(error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
        }
    }

    const submit = ()=>{
        setError('')
        if(password1 && password2){
            // make the request
            if(password1 == password2){
                if(password1.length < 5){
                    setError('Votre mot de passe est trop faible')
                }
                else{
                    _confirmPasswordReset();
                }
            }
            else{
                setError('Vos mot de passe ne correspondent pas')
            }
        }
        else if(!password1 && !password2){
            setError('Enter votre nouveau mot de passe')
        }
        else if(!password1){
            setError('Enter votre nouveau mot de passe')
        }
        else if(!password2){
            setError('Enter à nouveau votre nouveau mot de passe')
        }
    }


  return (
        <div className="login">
            <Link to="/">
                <img src={logo} className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Changer votre mot de passe</h1>
                { isLoading &&
                <div className='loader_container'>
                    <img src={loader} className="loader"/>
                </div>
                }

                <form>
                    <h5>Nouveau mot de passe</h5>
                    { error &&
                        <p class='error_message'>{error}</p>
                    }
                    <input 
                        type="text" 
                        value={password1} 
                        onChange={
                            e => setPassword1(e.target.value)
                        }
                    />

                    <h5>Confirmation</h5>

                    <input 
                    
                        value={password2}
                        onChange={
                            e => setPassword2(e.target.value)
                        }
                        />
                </form>
                
                <p>
                    By signing-in you agree to Amazon fake clone
                </p>
                <button 
                    onClick={submit}
                    className="login__registerButton"
                    >Changer le mot de passe</button>
            </div>
        </div>
  );
}

export default Landing;
