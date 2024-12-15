import "./information.css";
import art0 from "../../assets/images/Resize 1.png"
import art1 from "../../assets/images/Resize 2.png"
import art2 from "../../assets/images/Resize 3.png"
import art3 from "../../assets/images/Resize 4.png"
import art4 from "../../assets/images/Resize 5.png"
import art5 from "../../assets/images/Resize 6.png"

const Information = () => {
    return (
        <div className="infoContainer">
            <h1 className="infoTitle">Craft the perfect soundscape with interactive<br></br>
            music and dynamic sound effects</h1>
            <div className="artContainer">
                <div className="artTop">
                    <div className="art0">
                        <img src={art0} alt="art0" />
                    </div>
                    <div className="art1">
                        <img src={art1} alt="art1" />
                    </div>
                    <div className="art2">
                        <img src={art2} alt="art2" />
                    </div>
                </div>
                <div className="artBottom">
                    <div className="art3">
                        <img src={art3} alt="art3" />
                    </div>
                    <div className="art4">
                        <img src={art4} alt="art4" />
                    </div>
                    <div className="art5">
                        <img src={art5} alt="art5" />
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Information;