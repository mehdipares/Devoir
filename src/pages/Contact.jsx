
import {Routes, Route} from "react-router-dom";
import { Navicontact } from "../component/navicontact";


export default function Contacts () {
    return (
    
        <html>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                    </svg><p>40 rue Laure diebold</p>
                    </div>
                    <div className="Contact_main_icones">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg><p>69009 Lyon, France</p>
                    </div>
                    <div className="Contact_main_icones">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg><p>10 20 30 40 50</p>
                    </div>
                    <div className="Contact_main_icones">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg><p>john.doe@gmail.com</p>
                    </div>
                   
                
                
                    <div className="Skills_container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657540993!2d4.796403976643224!3d45.77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1733739886857!5m2!1sfr!2sfr"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  </section>
              </div>
              </div>
            
                
            </main>
        </div>
        </html>
    );
      
           
            
}
