import "./footer.css";
{/*import lute from "../../assets/images/lute.png"; */}

const Footer = () => {
    return (
        <div className="footer">
            <div className="leftContainer">
                {/*<img src={lute} alt="lute" className="lute"/>*/}
                <div className="mottoContainer">
                    <h1 className="pocketBard">Pocket Bard</h1>
                    <p className="description">The bard that fits in your pocket</p>
                </div>
                <div className="links">
                    <p>Features</p>
                    <p>Price</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div className="rightContainer">
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
            <div className="lineBreak"></div>
            <div className="bottomContainer">
                <div className="bottomLeft">
                    <p>Terms & Conditions</p>
                </div>
                <div className="bottomRight">
                    <p>© 2025 Pocket Bard</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;