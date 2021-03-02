import React from 'react';
import './App.css';
import mockup from './mockup.png';
import ps from './ps.png'

export default class App extends React.Component{
  render(){
  return (
    <div className="App">
     
        <div className="main_container">
            <div className="labels">
                <div>
                    <p><h1>Byi</h1> shop</p>
                </div>
               <div>
                    <h2> Lorem ipsum dolor sit amet dolor sit amet consectetur, </h2>
                    <a href="">
                      <img className='playstore' src={ps} alt=""/>
                    </a>
                  
               </div>
               <div className='main__form'>
                  <div className='main__form_title_container'> 
                      <h3>Inscrivez-vous pour plus d'informations</h3>
                  </div>
                  <div>
                    <input type="text" placeholder='Enter votre email'/>
                    <button>Souscrire</button>
                  </div>  
                 
                </div>
               <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tempore asperiores magni rerum assumenda voluptatibus voluptates odio, molestias harum corrupti officia quis!</p>
               </div>
            </div>
            <div className="mockup">
                <img src={mockup} alt=""/>
            </div>
        </div>
    </div>
  );
  }
}

