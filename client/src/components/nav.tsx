import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper blue home-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down menu-item-container">
                    <li><NavLink  exact={true} to="/">Home</NavLink></li>
                    <li><NavLink to="/chat">Chat</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};
export default Nav