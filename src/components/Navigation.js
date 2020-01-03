import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import HomeButton from "./HomeButton";

class Navigation extends React.Component {
    render() {
        return (
            <>
                <nav>
                    <div className="web-nav">
                        <HomeButton />
                        <div className="dropdown">
                            <button className="dropbtn">
                                Activities&nbsp;&#9662;
                            </button>
                            <div className="dropdown-content">
                                <Link to="/gardening">Gardening&nbsp;</Link>
                                <Link to="/fishing">Fishing&nbsp;</Link>
                                <Link to="/racing">Racing&nbsp;</Link>
                                <Link to="/golfing">Golfing&nbsp;</Link>
                                <Link to="/doodles">Doodles&nbsp;</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">Cogs&nbsp;&#9662;</button>
                            <div className="dropdown-content">
                                <Link to="/sellbots">Sellbots&nbsp;</Link>
                                <Link to="/cashbots">Cashbots&nbsp;</Link>
                                <Link to="/lawbots">Lawbots&nbsp;</Link>
                                <Link to="/bossbots">Bossbots&nbsp;</Link>
                            </div>
                        </div>
                        <Link to="/toontips">Toon Tips&nbsp;</Link>
                        <Link to="/about">About&nbsp;</Link>
                    </div>
                    <div className="mobile-nav">
                        <HomeButton />
                        <Hamburger />
                    </div>
                </nav>
            </>
        );
    }
}

export default Navigation;
