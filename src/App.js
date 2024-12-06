import React from "react";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Image  from "./images/images/john-doe-about.jpg";
import Home from './pages/Home.jsx';
import Contact from './pages/Contact';
import portefolio from './pages/Portefolio';
import services from './pages/Services';
import Mentions from './pages/legal';
import Portefolio from "./pages/Portefolio";
import Services from "./pages/Services";
import head from "./index.js" ;
import img1 from "./images/images/john-doe-about.jpg";
import {Navi} from "./api/navi.jsx";



function app() {
 
  return ( 

 
    <div className="App">
  
      <header>
      
      <Navi/>
     
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="contact" element={<Contact/>}> </Route>
            <Route path="Mentions" element={<Mentions/>}> </Route>
            <Route path="portefolio" element={<Portefolio/>}> </Route>
            <Route path="services" element={<Services/>}> </Route>
          </Routes>
          
            
        </main>
        <footer>
          <div className="John_Doe">
            <h4 className="Titre_footer">John Doe</h4>
            <p>40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
          </div>
          <div className="John_Doe">
            <h4 className="Titre_footer">Liens utiles</h4>
            <p><a href="/Home">Home</a></p>
            <p><a href="/contact">contacts</a></p>
            <p><a href="/mentions">mentions</a></p>
            <p><a href="/portefolio">portefolio</a></p>
            <p><a href="/services">services</a></p>  
          </div>
          <div className="John_Doe">
            <h4 className="Titre_footer">Mes dernières réalisations</h4>
            <p><a href="/Home">Fresh Food</a></p>
            <p><a href="/contact">Restaurant Akira</a></p>
            <p><a href="/mentions">Espace bien-être</a></p>
            <p><a href="/portefolio">SEO</a></p>
            <p><a href="/services">Création d'une API</a></p>
            <p><a href="/services">Maquettes d'un site</a></p>    
          </div>
        </footer>
    </div>
    
 );
 
}


export default app;

