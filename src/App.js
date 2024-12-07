import React from "react";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Image  from "./images/images/john-doe-about.jpg";
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import portefolio from './pages/Portefolio';
import services from './pages/Services';
import Mentions from './pages/legal';
import Portefolio from "./pages/Portefolio";
import Services from "./pages/Services";
import img1 from "./images/images/john-doe-about.jpg";



function app() {
 
  return ( 

 
    <div className="App">
  
     
        <main>
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="CONTACT" element={<Contact/>}> </Route>
            <Route path="Mentions" element={<Mentions/>}> </Route>
            <Route path="portefolio" element={<Portefolio/>}> </Route>
            <Route path="services" element={<Services/>}> </Route>
          </Routes>
          
            
        </main>
       
    </div>
    
 );
 
}


export default app;

