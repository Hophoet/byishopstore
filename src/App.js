import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step from './components/Step';
import BottomLead from './components/BottomLead';
import Footer from './components/Footer';

import logo from "./assets/log.png";
import Rectangle_3 from './assets/Rectangle_3.png';
import Rectangle_4 from './assets/Rectangle_4.png';
import Rectangle_5 from './assets/Rectangle_5.png';


function App() {
  const data = {
    hero:{
      appType: "application d'achat et de vente",
      tagLine: 'Pourquoi garder vos vetements plus utilisé quand vous pouvez les vendres à vos amis sur Byishop',
      description: "Téléchargez dès maintenant l'application  ByiShop sur",
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
    step1: {
      title: 'Créer un compte gratuit',
      heading: 'Créez / connectez-vous à un compte existant pour commencer',
      description: 'Un compte est créé avec votre email et un mot de passe souhaité',
      img: Rectangle_3,
      alternate: false,
    },
    step2: {
      title: 'Explorer en faisant du shopping',
      heading: 'Shop for your favorites meal as e dey hot.',
      description: 'Shop for your favorite meals or drinks and enjoy while doing it.',
      img: Rectangle_4,
      alternate: true,
    },
    step3: {
      title: 'Commande',
      heading: "Lorsque vous avez terminé, vérifiez et faites-le livrer.",
      description: "Lorsque vous avez terminé, vérifiez et faites-le livrer en toute simplicité.",
      img: Rectangle_5,
      alternate: false,
    },
    bottomLead: {
      actionText: "Téléchargez l'application maintenant.",
      description: "Disponible sur votre application de telechargement d'applications préférée. Commencez votre expérience maintenant.",
      mainActionText: 'Playstore',
      extraActionText: 'App Store',
    },
  }
  return (
    // __________________________TODO: ____________________
    // Add Montserrat font to everything (body)
    
    <div className="box-border">
      <div className="flex flex-col">
        
        <Navbar logo={logo}/>
        <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
        
        <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>
        
        <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">Comment fonctionne l'application</div>
        
        <Step
          title={data.step1.title}
          heading={data.step1.heading}
          description={data.step1.description}
          img={data.step1.img}
          alternate={data.step1.alternate}
          />
          <Step
          title={data.step2.title}
          heading={data.step2.heading}
          description={data.step2.description}
          img={data.step2.img}
          alternate={data.step2.alternate}
          />
          <Step
          title={data.step3.title}
          heading={data.step3.heading}
          description={data.step3.description}
          img={data.step3.img}
          alternate={data.step3.alternate}
          />
          
          <BottomLead 
            actionText={data.bottomLead.actionText}
            description={data.bottomLead.description}
            mainActionText={data.bottomLead.mainActionText}
            extraActionText={data.bottomLead.extraActionText}
          />

          <Footer logo={logo}/>
      </div>
    </div>
  );
}

export default App;
