import React from "react";
import './Welcome.css';
import Mainnav from "./Mainnavbar";
import Mainwebsite from "./Mainwebsite";

const welcome = () => {
    return (
        <>

            <div className="mainnav">
                <Mainnav />
            </div>
            <div className="mainwelcome">
                <Mainwebsite />
            </div>
        </>
    )
}

export default welcome;