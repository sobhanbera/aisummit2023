import React from "react";

import classes from "../Assets/Styles/Header.module.scss";

const Header = () => {
    return (
        <div className={classes.headerRoot}>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <span>AI Odyssey</span>
                </div>

                <div className={classes.headerControls}>
                    <div className={classes.navigation}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Speakers</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Prizes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={classes.headerSmall}></div>
        </div>
    );
};

export default Header;
