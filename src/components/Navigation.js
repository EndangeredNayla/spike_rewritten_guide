import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <nav>
          <Link to="/">
            <img
              src="/images/spikes_unwritten_guide.png"
              alt="Spike's Rewritten Guide"
            />
            Home
          </Link>
          <div className="dropdown">
            <button className="dropbtn">Activities&#9662;</button>
            <div className="dropdown-content">
              <Link to="/gardening">Gardening</Link>
              <Link to="/fishing">Fishing</Link>
              <Link to="/racing">Racing</Link>
              <Link to="/golfing">Golfing</Link>
              <Link to="/doodles">Doodles</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Cogs&#9662;</button>
            <div className="dropdown-content">
              <Link to="/sellbots">Sellbots</Link>
              <Link to="/cashbots">Cashbots</Link>
              <Link to="/lawbots">Lawbots</Link>
              <Link to="/bossbots">Bossbots</Link>
            </div>
          </div>
          <Link to="/toontips">Toon Tips</Link>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
}

export default Navigation;
