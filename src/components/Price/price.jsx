import "./price.css";

const Price = () => {
    return (
        <div className="priceContainer">
            <h1 className="priceTitle">Free and premium offerings</h1>
            <p className="priceDescription">Enjoy hours of free, high-quality content right away. Upgrade to premium to access
            everything else, like Sci-Fi, Horror, and more!</p>
            <div className="priceSwitch">
                <div className="freeContainer">
                    {/*<div className="priceSwitchOption">
                        <p className="priceSwitchOptionText">Free</p>
                    </div>*/}
                    <div className="priceSwitchOption">
                        <p>A comprehensive catalog of High Fantasy music and sound effects.</p>
                        <p>Fantasy Essentails (14 Scenes)</p>
                        <p>A variety of sound effects</p>
                    </div>
                </div>
                <div className="premiumContainer">
                    <div className="priceSwitchOption">
                        <p className="priceSwitchOptionText">Premium</p>
                    </div>
                    <div className="amountContainer">
                        <p className="amount">$9.99</p>
                        <p>Access to all of the Pocket Bard content.</p>
                        <p className="leftContainer">
                            Everything in Free<br />
                            Sci-Fi<br />
                            Horror<br />
                        </p>
                        <p className="leftContainer">
                            Seafaring<br />
                            Cyberpunk<br />
                            And more!<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Price;