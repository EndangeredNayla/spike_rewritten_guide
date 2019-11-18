import React from "react";
import { Link } from "react-router-dom";

class Sitemap extends React.Component {
  componentDidMount(){
    document.title = "Site Map | Spike's Rewritten Guide";
  }

  render() {
    return (
      <>
        <div className="panel">
          <div className="panel-content">
            <h1>Site Map</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Activities</li>
              <ul>
                <li>
                  <Link to="/gardening">Gardening</Link>
                </li>
                <li>
                  <Link to="/fishing">Fishing</Link>
                </li>
                <li>
                  <Link to="/racing">Racing</Link>
                </li>
                <li>
                  <Link to="/golfing">Golfing</Link>
                </li>
                <li>
                  <Link to="/doodles">Doodles</Link>
                </li>
              </ul>
              <li>Cogs</li>
              <ul>
                <li>
                  <Link to="/sellbots">Sellbot</Link>
                </li>
                <li>
                  <Link to="/cashbots">Cashbot</Link>
                </li>
                <li>
                  <Link to="/lawbots">Lawbot</Link>
                </li>
                <li>
                  <Link to="/bossbots">Bossbot</Link>
                </li>
              </ul>
              <li>
                <Link to="/toontips">Toon Tips</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Spike</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/sitemap">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Sitemap;
