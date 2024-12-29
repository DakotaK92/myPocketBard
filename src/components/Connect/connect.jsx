import "./connect.css";
import appleStore from "../../assets/images/Apple Store.png";
import googlePlay from "../../assets/images/Google Play.png";

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
                <div className="discord"></div>
                {/*<img src=""></img>*/}
            </div>
        </div>
    )
};

export default Connect;