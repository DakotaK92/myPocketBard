import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <h2>Features</h2>
                <h2>Price</h2>
                <h2>FAQs</h2>
            </div>
            <div className="empty"></div>
        </div>
    ) 
};

export default Navbar;