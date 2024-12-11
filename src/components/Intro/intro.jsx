import React from "react";
import "./intro.css";
import iPhone from "../../assets/images/iPhone.png";
import appleStore from "../../assets/images/Apple Store.png";
import googlePlay from "../../assets/images/Google Play.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="introContainer">
                <div className="introInfo">
                    <h1 className="introTitle">The bard that fits in your pocket</h1>
                    <p className="introPara">Whether you need epic orchestral music for a fierce dragon<br/>
                        battle or calming forest sounds for a peaceful evening read,<br/>
                        Pocket Bard has you covered.
                    </p>
                    <div className="introBtns">
                        <img src={googlePlay} alt="googlePlay" className="googlePlay"/>
                        <img src={appleStore} alt="appleStore" className="appleStore"/>
                    </div>
                </div>
                <img src={iPhone} alt="iPhone" className="iPhone"/>
            </div>
        </div>
    )
};

export default Intro;
