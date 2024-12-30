import "./footer.css";
import lute from "../../assets/images/lute.png";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="topLeft">
                <div className="mottoContainer">
                    <img src={lute} alt="lute" className="lute"/>
                    <div className="brandTitles">
                        <h1 className="pocketBard">Pocket Bard</h1>
                        <p className="description">Immersive audio made simple</p>
                    </div>
                </div>
                <div className="links">
                    <p>Features</p>
                    <p>Price</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div className="topRight">
                <div className="socials">
                    <a href="https://discord.com/invite/pocket-bard" target="_blank" className="discordFooter">
                        <FaDiscord />
                    </a>
                    <a href="https://www.instagram.com/pocket_bard" target="_blank" className="instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@pocketbardapp" target="_blank" className="tiktok">
                        <FaTiktok />
                    </a>
                    <a href="https://www.youtube.com/@pocketbard" target="_blank" className="youtube">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;