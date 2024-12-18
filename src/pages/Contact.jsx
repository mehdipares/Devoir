import {Routes, Route} from "react-router-dom";
import { Navicontact } from "../component/navicontact";
import Footer from "../component/Foot";
import map from "../images/images/map.png";
import point from "../images/images/pointmap.png";
import phone from "../images/images/phone.png";
import mail from "../images/images/mail.png";
export default function Contacts () {
    return (
        <div className="cont">
            <header>
                <Navicontact/>
            </header>
            <main>
            <div className="Contact_titre">
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <hr class="border border-primary border-3 opacity-100"></hr>
            </div>
            <div className='Contact_main_bloc'>
                <div className="home_main_a_propos">
                  <h3 classname>Formulaire de contact</h3>
                  <hr class="border border-primary border-2 opacity-100"></hr>
                  <section className="Contact_main_article">
                  <input class="form-control form-control-lg" type="text" placeholder="Votre Nom" aria-label=".form-control-lg example"></input>
                  <input class="form-control form-control-lg" type="text" placeholder="Votre Adresse Mail" aria-label=".form-control-lg example"></input>
                  <input class="form-control form-control-lg" type="text" placeholder="Votre Numéro de téléphone" aria-label=".form-control-lg example"></input>
                  <input class="form-control form-control-lg" type="text" placeholder="sujet" aria-label=".form-control-lg example"></input>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Votre message" id="floatingTextarea2" style={{height: 20 + 'em'}}></textarea>
                        <label for="floatingTextarea2">Votre message</label>
                    </div>
                  </section>
                </div>

                <div className="Home_main_skills">
                  <h3>Mes Coordonnées</h3>
                  <hr class="border border-primary border-2 opacity-100"></hr>

                  <section className="Home_main_article">
                    <div className="Contact_main_icones">
                        <img src={map} style={{width: 20 + 'px', height: 20 + 'px'}}></img><p>40 rue Laure diebold</p>
                    </div>
                    <div className="Contact_main_icones">
                        <img src={point} style={{width: 20 + 'px', height: 20 + 'px'}}></img><p>69009 Lyon, France</p>
                    </div>
                    <div className="Contact_main_icones">
                        <img src={phone} style={{width: 20 + 'px', height: 20 + 'px'}}></img><p>10 20 30 40 50</p>
                    </div>
                    <div className="Contact_main_icones">
                        <img src={mail} style={{width: 20 + 'px', height: 20 + 'px'}}></img><p>john.doe@gmail.com</p>
                    </div>
                   
                
                
                    <div className="Skills_container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540993!2d4.796403976643224!3d45.77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1733739886857!5m2!1sfr!2sfr"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  </section>
              </div>
              </div>
            
                
            </main>
        </div>
    );
      
           
            
}
