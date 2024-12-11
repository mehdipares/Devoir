import { Naviservices } from "../component/naviservices";
import Footer from "../component/foot";
import banner from "../images/images/banner.jpg";
import brush from "../images/images/brush.png";
import html from "../images/images/html.png";
import loupe from "../images/images/loupe.png"

const Services = () => {
    return (
        <div className="serices">
            <header>
                <Naviservices/>
            </header>
            <div className="services_banner">

            </div>
            <div className="services_liste">
                <h1>Mon offre de services</h1>
                <p>voici les prestations sur lesquelles je peux intervenir</p>
                <hr class="border border-primary border-3 opacity-100"></hr>
            </div>
            <div className="services_blocs">
                <div class="card text-center mb-3"  >
                    <img src={brush} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">UX Design</h5>
                        <p class="card-text">ux design est une discipline qui consiste a concevoir des produits
                    (site web, applications mobiles, logiciels, objets connectés, ect.) 
                    en placant l'utilisateur au centre des préoccupations. L'objetctif est de rendre l'expérience 
                    utilisateur la plus fluide et agréable possible.</p>
                        
                    </div>
                    
                </div>
                <div class="card text-center mb-3" >
                    <img src={html} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">UX Design</h5>
                        <p class="card-text">ux design est une discipline qui consiste a concevoir des produits
                    (site web, applications mobiles, logiciels, objets connectés, ect.) 
                    en placant l'utilisateur au centre des préoccupations. L'objetctif est de rendre l'expérience 
                    utilisateur la plus fluide et agréable possible.</p>
                        
                    </div>
                    
                </div>
                <div class="card text-center mb-3" >
                    <img src={loupe} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">UX Design</h5>
                        <p class="card-text">ux design est une discipline qui consiste a concevoir des produits
                    (site web, applications mobiles, logiciels, objets connectés, ect.) 
                    en placant l'utilisateur au centre des préoccupations. L'objetctif est de rendre l'expérience 
                    utilisateur la plus fluide et agréable possible.</p>
                        
                    </div>
                    
                </div>

                
            </div>
        </div>
    )
}
export default Services;