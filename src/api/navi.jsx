export default Navi () {
    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">John Doe</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contacts">CONTACT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="legal">MENTIONS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portefolio">PORTEFOLIO</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Services">SERVICES</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
}

