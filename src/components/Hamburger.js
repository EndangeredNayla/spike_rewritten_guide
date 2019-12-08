import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../scss/hamburger.scss";

class Hamburger extends React.Component {
    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (
            <div>
                <Menu right>
                    <div>
                        <details>
                            <summary class="summary">Activities&#9662;</summary>
                            <Link to="/gardening">Gardening</Link>
                            <Link to="/fishing">Fishing</Link>
                            <Link to="/racing">Racing</Link>
                            <Link to="/golfing">Golfing</Link>
                            <Link to="/doodles" style={{marginBottom: 20 + "px"}}>Doodles</Link>
                        </details>
                    </div>
                    <div>
                        <details>
                            <summary class="summary">Cogs&#9662;</summary>
                            <Link to="/sellbots">Sellbots</Link>
                            <Link to="/cashbots">Cashbots</Link>
                            <Link to="/lawbots">Lawbots</Link>
                            <Link to="/bossbots" style={{marginBottom: 20 + "px"}}>Bossbots</Link>
                        </details>
                    </div>
                    <Link to="/toontips">Toon Tips</Link>
                    <Link to="/about">About</Link>
                </Menu>
            </div>
        );
    }
}

export default Hamburger;
