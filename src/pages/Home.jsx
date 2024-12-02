
import Button from 'react-bootstrap/Button';
import img1 from "../images/images/john-doe-about.jpg"
const Home = () => {
    return (
        <div>
            <header className="Home_header">
                <div className='Home_header_text'>
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <button type="button" class="btn btn-danger">Danger</button>
                </div>
            </header>
            <main>
                <section className="home_main">
                    <div className='home_main_bloc'>
                        <div className="A_propos">
                            <h3>A propos</h3>
                            <hr class="border border-primary border-2 opacity-75"></hr>
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
                            
                        </div>
                        <div className="Home_main_skills">
                        <h3>Mes compétences</h3>
                        <hr class="border border-primary border-2 opacity-75"></hr>
                            <div className="Skills_container">
                                <div className="skills">
                                    <span>HTML5</span>
                                    <div className="bar_red"><div className="progress"></div></div>
                                    <span>css3</span>
                                    <div className="bar_blue"><div className="progress"></div></div>
                                    <span>javascript</span>
                                    <div className="bar_yellow"><div className="progress"></div></div>
                                    <span>php</span>
                                    <div className="bar_green"><div className="progress"></div></div>
                                    <span>react</span>
                                    <div className="bar_blackblue"><div className="progress"></div></div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                
            </footer>

        </div>
           
    )
}
export default Home;