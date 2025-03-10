import React from "react";
import Heading from "./Heading";

import ghrce from "../Assets/Images/Logos/GHRCE.png";
// import rgi from "../Assets/Images/Logos/RGI.png";
import rgi from "../Assets/Images/Logos/RGi.png";

import ieee from "../Assets/Images/Logos/IEEE_CIS_logo_White.png";
import jarvis from "../Assets/Images/Logos/JARVIS.png";
// import jarvis_black from "../Assets/Images/Logos/JARVIS_black.png";
import gdgc from "../Assets/Images/Logos/GDGC.png";
import coe from "../Assets/Images/Logos/coeaiml.png";
import mlsa from "../Assets/Images/Logos/mlsa.png";

import classes from "../Assets/Styles/Presenters.module.scss";

const Presenters = () => {
    return (
        <div className={classes.rootPresenters}>
            <div className={classes.logoContainer}>
                <div className={classes.ghrce}>
                    <img src={ghrce} />
                </div>
                <div className={classes.rgi}>
                    <img src={rgi} />
                </div>
                <div className={classes.jarvis}>
                    <img src={jarvis} />
                </div>

                <div className={classes.ieee}>
                    <img src={ieee} />
                </div>

                <div className={classes.coe}>
                    <img src={coe} />
                </div>
                <div className={classes.gdgc}>
                    <img src={gdgc} />
                </div>
                <div className={classes.mlsa}>
                    <img src={mlsa} />
                </div>
            </div>
        </div>
    );
};

export default Presenters;
