//import logo from '../logo.svg';
import logo from '../images/logofood1.png';
//import './App.css';

function myNavbar() {
  var bgColors={
    "gray":"bg-secondary",
    "light":"bg-light",
    "blue":"bg-info",
    "yellow":"bg-warning bg-gradient",
    "red":"bg-danger"
  }
  var nomeClasse = "navbar navbar-light " + bgColors.red; 
  return (
<nav className={nomeClasse}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top"></img>
      <span className="p-3 text-light">Bulba</span>
    </a>
  </div>
</nav>
  );
}

export default myNavbar;