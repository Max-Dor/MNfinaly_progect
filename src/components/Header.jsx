import { Link } from "react-router-dom";

export function Header(){
    return <nav className="green darken-1">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">React Movies</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                </div>
            </nav>
}