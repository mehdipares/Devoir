

import Footer from "../component/Foot";
import React, {useState,useEffect} from "react";
import img1 from "../images/images/john-doe-about.jpg"
import { Navihome } from "../component/Navihome";

 
   


  
const Home = () => {
  const [users,setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUsers(json);

  }
  useEffect(() => {
    getUsers();
    
  },[])
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
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" data-bs-theme="dark" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">Mon profil Github</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                        <img src={users.avatar_url} alt="Github user, profile image"></img>
                      
                      <div className="modal_info">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>{users.name}</p>
                        <hr></hr>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg></p>
                        <hr></hr>
                        <p>As we all know, John Doe's identity is unknown. I just wanted to contribute whithout being known.</p>
                        <hr></hr>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                        </svg>Repositeries : {users.public_repos}</p>
                          <hr></hr>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>Followers : {users.followers}</p>
                          <hr></hr>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>Following : {users.following}</p>
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
                  <div className="Home_main_article">
                    <img src={img1} alt="Focused person working in front of a computer screen."></img>
                    <p>
                    Nullam ultricies malesuada venenatis. Praesent blandit placerat urna id rutrum. Vestibulum magna lorem, tempus sit amet dapibus non, pharetra sed risus.
                    </p>
                    <p>
                    Morbi rhoncus, lacus et viverra molestie, orci urna blandit odio,  sollicitudin id quis nisl. Phasellus felis mi, tempor et lacus in, malesuada consectetur nunc.
                    </p>
                    <p>
                    ellentesque ut laoreet massa. Fusce velit massa, sodales sit amet nisi id, vestibulum dapibus tortor. Mauris accumsan dolor felis, in tempor massa iaculis ac. 
                    </p>
                  </div>
                </div>

                <div className="Home_main_skills">
                  <h3>Mes compétences</h3>
                  <hr class="border border-primary border-2 opacity-75"></hr>

                  <div className="Home_main_article">
                
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
                  </div>
              </div>

              </div>
            </section>
      </div>
    );
    
}
export default Home;
