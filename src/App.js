import React, {useState,useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Image  from "./images/images/john-doe-about.jpg";
import Home from './pages/Home.jsx';
import Contacts from './pages/Contact';
import portefolio from './pages/Portefolio';
import services from "./pages/Services";
import Mentions from './pages/legal';
import Portefolio from "./pages/Portefolio"; 
import Services from "./pages/Services";
import img1 from "./images/images/john-doe-about.jpg";
import Footer from "./component/foot.jsx";


export default function app() {
 
  useEffect(() => {
    console.log("https://api.github.com/users/github-john-doe")
  },[])

  
  return ( 
  

 
    <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="Contacts" element={<Contacts/>}> </Route>
            <Route path="legal" element={<Mentions/>}> </Route>
            <Route path="portefolio" element={<Portefolio/>}> </Route>
            <Route path="services" element={<Services/>}> </Route>
          </Routes>
        <footer>
          <Footer/>

        </footer>
       
    </div>
    
 );
 
}




