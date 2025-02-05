import "./crew.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/images/Chase.png";
import img2 from "../../assets/images/Janette.png";
import img3 from "../../assets/images/Jason.png";
import img4 from "../../assets/images/Nick.png";
import img5 from "../../assets/images/Zack.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Crew = () => {
    return (
        <div className="crewContainer">
            <h1 className="crewTitle">Meet the Crew</h1>
            <div className="wrapper">
                <i id="left"><IoIosArrowBack /></i>
                    <ul className="carousel">
                        <li className="card">
                            <div className="img1">
                                <img src={img1} alt="img1" draggable="false"></img>
                            </div>
                        </li>
                        <li className="card">
                            <div className="img2">
                                <img src={img2} alt="img2" draggable="false"></img>
                            </div>
                        </li>
                        <li className="card">
                            <div className="img3">
                                <img src={img3} alt="img3" draggable="false"></img>
                            </div>
                        </li>
                        <li className="card">
                            <div className="img4">
                                <img src={img4} alt="img4" draggable="false"></img>
                            </div>
                        </li>
                        <li className="card">
                            <div className="img5">
                                <img src={img5} alt="img5" draggable="false"></img>
                            </div>
                        </li>
                    </ul>
                <i id="right"><IoIosArrowForward /></i>
            </div>
        </div>
    )
};

export default Crew;