import { Navilegal } from "../component/navilegal";
import Footer from "../component/foot";
import map from "../images/images/map.png";
import point from "../images/images/pointmap.png";
import phone from "../images/images/phone.png";
import mail from "../images/images/mail.png";
import web from "../images/images/web.png";

export default function Mentions() {
    return (
        <div className="Mentions">
            <header>
                <Navilegal/>
            </header>
            <main>
            <div className="Mentions_titre">
                <h1>Mentions légales</h1>
                <hr class="border border-primary border-3 opacity-100"></hr>
            </div>
            <div className="Mentions_liste">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Editeur du site
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
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
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>alwaysdata</strong>
                            <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                            <div className="Contact_main_icones">
                                <img src={web} style={{width: 15 + 'px', height: 15 + 'px'}}></img><a href="www.alwaysdata.com">www.alwaysdata.com</a>
                            </div>
                            

                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Crédits</strong>
                            <p>ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=1464&utm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gclid=Cj0KCQiAx9q6BhCDARIsACwUxu63WTXy8STa2a6IjG5q6sm7SF8ju19QdWcK8lsCZZOclQ4ApIAW8EQaArJEEALw_wcB">Centre européen de formation</a></p>
                            <p>Les images utilisées sur ce site sont libres de droit et on été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                            <p>la favicon de ce site a été fournie par <a href="https://pixabay.com/fr/">john doe Icons erstelit von Freepik - Flaticon</a></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
            
        </div>
    )
}


