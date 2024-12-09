import { Navifolio } from "../component/navifolio";
import Footer from "../component/foot";
import Freshfood from "../images/images/portfolio/fresh-food.jpg";
import Akira from "../images/images/portfolio/restaurant-japonais.jpg";
import Bienetre from "../images/images/portfolio/espace-bien-etre.jpg";
import Seo from "../images/images/portfolio/seo.jpg";
import API from "../images/images/portfolio/coder.jpg";
import Maquette from "../images/images/portfolio/screens.jpg";

const Portefolio = () => {
    return (
        <div className="folio">
            <header>
                <Navifolio/>
            </header>
            <div className="services_banner">

            </div>
            <div className="folio_titre">
                <h1>Portfolio</h1>
                <p>voici quelques-une de mes réalisations.</p>
                <hr class="border border-primary border-3 opacity-100"></hr>
            </div>
            <div className="folio_liste"  style={{width: 80 + 'rem'}}>
                <div class="row row-cols-1 row-cols-md-3 g-4" style={{width: 80 + 'rem'}}>
                        <div class="col">
                            <div class="card text-center h-100">
                            <img src={Freshfood} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Site de vente de produits frais en ligne.</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">site réalisé avec PHP et MySQL</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-center h-100">
                            <img src={Akira} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">site réalisé avec WordPress</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-center h-100">
                            <img src={Bienetre} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">site réalisé avec Laravel</small>
                            </div>
                            </div>
                        </div>
                    </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4" style={{width: 80 + 'rem'}}>
                        <div class="col">
                            <div class="card text-center h-100">
                            <img src={Seo} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Amélioration de référencement d'un site e-comerce</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Utilisation des outils SEO</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-center h-100">
                            <img src={API} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Création d'une API RESTFULL publique.</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">PHP - SYMFONY</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card text-center h-100">
                            <img src={Maquette} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Création du prototype d'un site</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Réalisé avec Figma</small>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
        
    )
}
export default Portefolio;