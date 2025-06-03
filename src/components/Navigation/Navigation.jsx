import { Link, useLocation } from "react-router-dom"
import "./Navigation.css"
import { useContext } from "react"
import HeaderContext from "../Contexts/HeaderContext"
export default function Navigation() {
    const { showModal, toggleMobileMenu } = useContext(HeaderContext)
    const location = useLocation()
    return (
        <nav className="nav">
            {/* nav__mobile--active for mobile active mode */}
            <ul className={`nav__list ${location.pathname == "/saved-articles" ? "nav--black" : ""}`} >
                <li className="nav__list-element nav__mobile-menu">
                    <div className="nav__mobile__btn" onClick={toggleMobileMenu}>
                        <span className="nav__menu-hands nav__menu-hand1"></span>
                        <span className="nav__menu-hands nav__menu-hand2"></span>
                    </div>
                </li>
                <li className={`nav__list-element nav__home ${location.pathname == "/" ? "nav--active" : ""}`}>
                    <Link to="/" className="nav__link">
                        Home
                    </Link>
                </li>
                <li className={`nav__list-element nav__saved-article ${location.pathname == "/saved-articles" ? "nav--active" : ""}`}>
                    <Link to="/saved-articles" className="nav__link">
                        Saved Articles
                    </Link>
                </li>
                <li className="nav__list-element nav__login">
                    <button className="nav__login-button" onClick={() => showModal("sign in")}>Sign in</button>
                </li>
            </ul>
        </nav>
    )
}