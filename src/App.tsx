import React, {MouseEvent, ReactHTMLElement, ChangeEvent} from 'react';

import './App.css';
import mockup from './mockup.png';
import gif from './assets/l.gif'
import ps from './ps.png'
import lg from './assets/lg.png'
import {subscribe, playStoreURL} from './api/functions'

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
    subscribe(this.state.email)
    .then(response => {
      alert("Merci pour votre subscription\nVous serez informé sur l'evolution du projet");

    })
    .catch(error => {
      alert('error'+error);
      
    })
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
                <div className='logo_container'>
                    <img className='logo' src={lg} alt=""/>
                    <h1>Byi</h1>
                </div>
               <div>
                    <h2>ByiShop qui permet aux Etudiants a faire du shoping entre eux</h2>
                    <a href={playStoreURL} target='_blank'>
                      <img className='playstore' src={ps} alt="" />
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

                    <ul>
                      <li>ByiShop est une application géniale et facile a utilisé qui permet a un Etudiant(e)s de mettre en disponibilité des produits à d'autres Etudiants afin que ces derniers puisse commandés et livrés par l'Etudiants en question.</li>
                      <li>L'application permet a l'etudiant(e)s d'ajouter ces propres articles, vetements, matérielles ou ses propre création qu'il souhaiterai ventre au autres etudiant(e)s</li>
                      <li>
L'application permet au etudiant d'avoir un vue d'ensemble sur l'etat de leur produits disponibles et les commandes relatives a ces produits.

</li>
                      <li>L'application intègre un systeme de livraison trés facile a utilisé qui permet aux etudiants de valider la livraison de leurs produits par un simple geste qui consiste a scanner un QR code de la commande afin de valider la livraison en toute sécurité.</li>
                    </ul>
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

