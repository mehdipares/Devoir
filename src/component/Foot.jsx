
import github from "../images/images/github.png";
import twitter from "../images/images/twitter.png";
import linkedin from "../images/images/linkedin.png";

export default function Footer () {
  return (
  <div className="Footer_background">
    <div className="footer_grid">
      <div className="footer_John_Doe">
        <h4 className="footer_John_Doe_titre">John Doe</h4>
        <p>40 rue Laure Diebold</p>
        <p>69009 Lyon, France</p>
        <p>01 20 30 40 50</p>
        <p>john.doe@gmail.com</p>
        <div className="footer_John_Doe_Social">
          <img src={github} style={{width: 40 + 'px', height: 40 + 'px'}} alt="Github logo"></img>
          <img src={twitter} style={{width: 40 + 'px', height: 40 + 'px'}} alt="twitter logo"></img>
          <img src={linkedin} style={{width: 40 + 'px', height: 40 + 'px'}} alt="linkedin logo"></img>
        </div>
      </div>
      <div className="footer_John_Doe">
        <h4 className="footer_John_Doe_titre">Liens utiles</h4>
        <p><a href="/">Home</a></p>
        <p><a href="/contacts">contact</a></p>
        <p><a href="/legal">mentions</a></p>
        <p><a href="/portefolio">portefolio</a></p>
        <p><a href="/services">services</a></p>  
      </div>
      <div className="footer_John_Doe">
        <h4 className="footer_John_Doe_titre">Mes dernières réalisations</h4>
        <p><a href="">Fresh Food</a></p>
        <p><a href="">Restaurant Akira</a></p>
        <p><a href="">Espace bien-être</a></p>
        <p><a href="">SEO</a></p>
        <p><a href="">Création d'une API</a></p>
        <p><a href="">Maquettes d'un site</a></p>    
      </div>
  </div>
  </div>
  );
}

