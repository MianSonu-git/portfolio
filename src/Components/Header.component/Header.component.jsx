import "./Header.component.style.css";
import React from "react";


const HeaderComponents = () => {
    return (
        <>
            <div className="bodyContainer">
                <div className="leftSide headerLeft row">
                    <div className="headerText leftText text-center">
                        <h3 className="textContent col-md-12 col-sm-12">
                            <span className="spanText">Hi!</span>
                            Wellcome to <span className="spanText">Point</span>
                        </h3>
                        <button className="btn btn-primary col-sm-12 col-md-12">Explore More...</button>
                    </div>
                </div>
                <div className="rightSide headerRight">

                </div>
            </div>
        </>
    )
}

export default HeaderComponents;
