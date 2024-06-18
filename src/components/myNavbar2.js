//import logo from '../logo.svg';
import logo from '../images/logofood1.png';
import { Link } from 'react-router-dom';
import '../App.css';

function MyNavbar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {props.VettoreLink.map((elemento) => (
                <Link className="nav-link active" aria-current="page" to={elemento.link} key={elemento.link}>{elemento.testoLink}</Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default MyNavbar;