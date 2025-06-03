import { Link, useLocation } from "react-router-dom"
import "./Header.css"
import Navigation from "../Navigation/Navigation"

export default function Header() {
    const location = useLocation();
    return (
        <header className="header">
            {/* add "link--black" on saved articles route */}
            <Link to={"/"} className={`header__logo ${location.pathname == "/saved-articles" ? "header__logo--black" : ""}`}>
                NewsExplorer
            </Link>
            <Navigation />
        </header>
    )
}