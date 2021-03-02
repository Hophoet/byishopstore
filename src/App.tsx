import React, {MouseEvent, ReactHTMLElement, ChangeEvent} from 'react';

import './App.css';
import mockup from './mockup.png';
import ps from './ps.png'

interface Props {
  defaultEmail?:string
}
interface State {
  email?:string
}

export default class App extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {email:this.props.defaultEmail}
   
  }

  handleSubmit = (event:MouseEvent) => {
    alert('Le nom a été soumis : ' + this.state.email);
    event.preventDefault();
  }

  handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    this.setState({email:event.target.value})
  }

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
                    <input onChange={this.handleChange} type="text" placeholder='Enter votre email'/>
                    <button onClick={this.handleSubmit}>Souscrire</button>
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

