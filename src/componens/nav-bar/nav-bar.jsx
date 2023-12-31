import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <ul className="navbar">
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/about">A Propos</NavLink>
            </li>
            <li>
                <NavLink to="/">Deconnexion</NavLink>
            </li>
        </ul>
    )
}
export default NavBar;