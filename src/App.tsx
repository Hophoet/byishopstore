import React from 'react';
import './App.css';
import mockup from './mockup.png';
import ps from './ps.png'

function App() {
  return (
    <div className="App">
     
        <div className="main_container">
            <div className="labels">
                <div>
                  
                    <p><h1>Byi</h1> shop</p>
                
                   
                </div>
               <div>
                    <h4> Lorem ipsum dolor sit amet dolor sit amet consectetur, </h4>
                    <a href="">
                      <img className='playstore' src={ps} alt=""/>
                    </a>
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

export default App;
