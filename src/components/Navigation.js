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
                                Activities&nbsp;
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/gardening">Gardening</Link>
                                <Link to="/fishing">Fishing</Link>
                                <Link to="/racing">Racing</Link>
                                <Link to="/golfing">Golfing</Link>
                                <Link to="/doodles">Doodles</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">
                                Cogs&nbsp;<i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/sellbots">Sellbots</Link>
                                <Link to="/cashbots">Cashbots</Link>
                                <Link to="/lawbots">Lawbots</Link>
                                <Link to="/bossbots">Bossbots</Link>
                            </div>
                        </div>
                        <Link to="/toontips">Toon Tips</Link>
                        <Link to="/about">About</Link>
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
