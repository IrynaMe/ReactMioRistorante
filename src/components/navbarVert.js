import { Link } from "react-router-dom";


function NavbarVert(props) {
    var bgColors = {
        "gray": "bg-secondary",
        "light": "bg-light",
        "yellow": "bg-warning"

    }

    var appo1 = "navbar " + bgColors.yellow;
    return (
        <nav class={appo1}>
            <ul class="nav navbar-nav" style={{ height: "100vh", padding: "5px", fontSize: "25px" }}>
                <li class="nav-item">
                    <a class="nav-link" href="#" style={{ fontSize: "30px", color: "blue" }}> {props.title} </a>
                </li>

                {props.VettoreLink.map(elemento =>
                    <Link class="nav-link" to={elemento.link} key={elemento.link}>{elemento.testoLink}</Link>)
                }
            </ul>
        </nav>
    );
}

export default NavbarVert;