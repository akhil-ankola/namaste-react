import React from "react";
import {LOGO_URL} from "../utils/constants";

const Header = () => {
    return(
        <div className="header">
            <div className="logo_container">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>cart</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;