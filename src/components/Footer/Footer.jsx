import "./footer.css";
import lute from "../../assets/images/lute.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="topFooter">
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
                        <div className="circles">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                        {/*<img src="" alt="discord" className="discord"/>
                        <img src="" alt="instagram" className="instagram"/>
                        <img src="" alt="tiktok" className="tiktok"/>
                        <img src="" alt="youtube" className="youtube"/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;