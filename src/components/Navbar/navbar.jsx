import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <Link to="infoContainer" className="infoButton" smooth={true} duration={1000}>Features</Link>
                <Link to="priceContainer" className="priceButton" smooth={true} duration={1000}>Price</Link>
                <Link to="questionsContainer" className="questionsButton" smooth={true} duration={1000}>FAQs</Link>
            </div>
            <div className="empty"></div>
        </nav>
    ) 
};

export default Navbar;