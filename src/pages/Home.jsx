
import img1 from "../images/images/john-doe-about.jpg";
import Footer from "../component/foot";
import React, {useState,useEffect} from "react";

import { Navihome } from "../component/navihome";

 
   

  
const Home = () => {
    return (
      <div classname="home">
        <header>
          <Navihome/>
        </header>
          <section className="home_main">
              <div className='Home_main_background'>
                
                <div className="Home_main_hello">
                      <h1><strong>Bonjour, je suis John Doe</strong></h1>
                      <h2>Développeur web full stack</h2>
                      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">En savoir plus</button>
                </div>
              </div>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">Mon profil Github</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div>

                      </div>
                      <div>
                        <p></p>
                        <hr></hr>
                        <p></p>
                        <hr></hr>
                        <p>As we all know, John Doe's identity is unknown. I just wanted to contribute whithout being known.</p>
                        <hr></hr>
                        <p>repository:</p>
                        <hr></hr>
                        <p>Followers:</p>
                        <hr></hr>
                        <p>Following:</p>
                        <hr></hr>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                  </div>
                </div>
              </div>
            


              <div className='home_main_bloc'>
                <div className="home_main_a_propos">
                  <h3 classname>A propos</h3>
                  <hr class="border border-primary border-2 opacity-75"></hr>
                  <section className="Home_main_article">
                    <img src={img1}></img>
                    <p>
                    Nullam ultricies malesuada venenatis. Praesent blandit placerat urna id rutrum. Vestibulum magna lorem, tempus sit amet dapibus non, pharetra sed risus.
                    </p>
                    <p>
                    Morbi rhoncus, lacus et viverra molestie, orci urna blandit odio,  sollicitudin id quis nisl. Phasellus felis mi, tempor et lacus in, malesuada consectetur nunc.
                    </p>
                    <p>
                    ellentesque ut laoreet massa. Fusce velit massa, sodales sit amet nisi id, vestibulum dapibus tortor. Mauris accumsan dolor felis, in tempor massa iaculis ac. 
                    </p>
                  </section>
                </div>

                <div className="Home_main_skills">
                  <h3>Mes compétences</h3>
                  <hr class="border border-primary border-2 opacity-75"></hr>

                  <section className="Home_main_article">
                
                    <div className="Skills_container">
                        <div className="Home_main_bar_container">
                          <div classname="Home_main_bars">
                            <p>HTML 90%</p>
                            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                  <div class="progress-bar bg-danger" style={{width: 90 + '%'}}></div>
                            </div>
                          </div>
                          <div className="Home_main_bars">
                            <p>CSS3 80%</p>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-info" style={{width: 80 + '%'}}></div>
                            </div>
                          </div>
                          <div className="Home_main_bars">
                            <p>JAVASCRIPT 70%</p>
                            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-warning" style={{width: 70 + '%'}}></div>
                          </div>
                          <div className="Home_main_bars">
                            </div>
                            <p>PHP 60%</p>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar bg-success" style={{width: 60 + '%'}}></div>
                            </div>
                          </div>
                          <div className="Home_main_bars">
                            <p>REACT 50%</p>
                            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                              <div class="progress-bar" style={{width: 50 + '%'}}></div>
                            </div>
                          </div>
                        </div>
                  </div>
                  </section>
              </div>

              </div>
            </section>
      </div>
    );
    
}
export default Home;