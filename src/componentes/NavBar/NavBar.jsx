import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (
        <header>
            <Link to={"/"}>
                <img className="logo" src="../img/logo.jpg" alt="Logo 4ancos" />
            </Link>
            <ul>
                <li>
                    <NavLink to={`/categoria/vinos`} className="links">VINOS</NavLink>
                </li>

                <li>
                    <NavLink to={`/categoria/cervezas`} className="links">CERVEZAS</NavLink>
                </li>
                <li>
                    <NavLink to={`/categoria/aperitivos`} className="links">APERITIVOS</NavLink>
                </li>
                <li>
                    <NavLink to={`/categoria/promos`} className="links">PROMOS</NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar