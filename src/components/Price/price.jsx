import "./price.css";

const Price = () => {
    return (
        <section className="priceContainer">
            <div className="heading">
                <h1 className="priceTitle">Free and premium offerings</h1>
                <p className="priceDescription">Enjoy hours of free, high-quality content right away. Upgrade to premium to access
                everything else, like Sci-Fi, Horror, and more!</p>
            </div>
            <div className="priceSwitch">
                <div className="priceSwitchOption1">
                    <h1 className="priceSwitchOptionText1">Free</h1>
                </div>
                <div className="priceSwitchOption2">
                    <h1 className="priceSwitchOptionText2">Premium</h1>
                </div>
            </div>
            <div className="priceOptions">
                <div className="freeContainer">
                    <div className="freeOption">
                        <p>A comprehensive catalog of High Fantasy music and sound effects.</p>
                        <p>Fantasy Essentails (14 Scenes)</p>
                        <p>A variety of sound effects</p>
                    </div>
                </div>
                <div className="premiumContainer">
                    <div className="premiumButton">
                        <h4 className="premiumText">Open Worlds</h4>
                        <p className="amount">$6.99</p>
                    </div>
                    <div className="amountContainer">
                        <p>Access to all of the Pocket Bard content.</p>
                        <div className="premiumList">
                            <p className="premiumLeftContainer">
                                Everything in Free<br />
                                Sci-Fi<br />
                                Horror<br />
                            </p>
                            <p className="premiumRightContainer">
                                Seafaring<br />
                                Cyberpunk<br />
                                And more!<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Price;