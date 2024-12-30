import "./connect.css";
import appleStore from "../../assets/images/Apple Store.png";
import googlePlay from "../../assets/images/Google Play.png";
import { BsDiscord } from "react-icons/bs";

const Connect = () => {
    return (
        <div className="connectContainer">
            <div className="leftConnect">
                <h1 className="downloadTitle"> Download the App</h1>
                <p className="downloadDescription">Try Pocket Bard for free on iOS & Andriod!</p>
                <div className="socailsContainer">
                    <img src={googlePlay} alt="googlePlay" className="googlePlay"/>
                    <img src={appleStore} alt="appleStore" className="appleStore"/>
                </div>
            </div>
            <div className="verticalLine"></div>
            <div className="rightConnect">
                <h1 className="downloadTitle">Join our community</h1>
                <p className="downloadDescription">Folow development updates, feeback, and connect with <br/>
                    the team and other Pocket Bard users!</p>
                <a href="https://discord.com/invite/pocket-bard" target="_blank" className="discordConnect">
                    <BsDiscord />
                </a>
            </div>
        </div>
    )
};

export default Connect;