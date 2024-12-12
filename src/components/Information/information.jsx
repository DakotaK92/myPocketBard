import React from "react";
import "./information.css";
import art0 from "../../assets/images/Art 0.jpg"
import art1 from "../../assets/images/Art 1.jpg"
import art2 from "../../assets/images/Art 2.jpg"
import art3 from "../../assets/images/Art 3.jpg"
import art4 from "../../assets/images/Art 4.jpg"
import art5 from "../../assets/images/Art 5.jpg"

const Information = () => {
    return (
        <div className="infoContainer">
            <h1 className="infoTitle">Craft the perfect soundscape with interactive<br></br>
            music and dynamic sound effects</h1>
            <div className="artContainer">
                <div className="artTop">
                    <div className="art0">
                        <h1></h1>
                        <img src={art0} alt="art0" />
                    </div>
                    <div className="art1">
                        <h1></h1>
                        <img src={art1} alt="art1" />
                    </div>
                    <div className="art2">
                        <h1></h1>
                        <img src={art2} alt="art2" />
                    </div>
                </div>
                <div className="artBottom">
                    <div className="art3">
                        <h1></h1>
                        <img src={art3} alt="art3" />
                    </div>
                    <div className="art4">
                        <h1></h1>
                        <img src={art4} alt="art4" />
                    </div>
                    <div className="art5">
                        <h1></h1>
                        <img src={art5} alt="art5" />
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Information;