import React from "react";

import classes from "../Assets/Styles/Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>About Us</h3>
                        <p>
                            We are very glad to announce AI Odyssey, a blend of
                            AI and games.
                        </p>

                        <p>
                            AI Odyssey is going to be on March 24 and March 25,
                            2023. AI Odyssey will discuss AI and its functions
                            in a fun, creative and innovative manner.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <p>G.H. Raisoni College of Engineering, Nagpur</p>
                        {/* <p>Phone: 555-555-5555</p> */}
                        <p>Email: aiodyssey@ghrce.raisoni.net</p>
                    </div>
                    {/* <div className="col-md-4">
                        <h3>Connect With Us</h3>
                        <ul className="list-inline">
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div> */}

                    <div className="regButton">
                        <a href="https://form.typeform.com/to/QCUDC1mO?typeform-source=qrcode-button">
                            Register Now
                        </a>
                    </div>

                    <div className="mine">
                        <a href="https://github.com/AvinashMohare">
                            Made by - Avinash Mohare
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
