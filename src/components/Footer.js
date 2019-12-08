import React from "react";
import { Link } from "react-router-dom";
// import { selectThemeChange } from "../js/theme-change.js"

class Footer extends React.Component {
    getCurrentYear() {
        return String(new Date().getFullYear());
    }

    render() {
        return (
            <>
                <div className="footer-panel">
                    <div>
                        {/* <select
                            className="theme-select"
                            id="selectBox"
                            onChange={""}
                        >
                            <option value="./scss/chipndaletheme.scss">
                                Chip N' Dales Theme
                            </option>
                            <option value="./scss/sellbottheme.scss">
                                Sellbot Theme
                            </option>
                            <option value="./scss/cashbottheme.scss">
                                Cashbot Theme
                            </option>
                            <option value="./scss/lawbottheme.scss">
                                Lawbot Theme
                            </option>
                            <option value="./scss/bossbottheme.scss">
                                Bossbot Theme
                            </option>
                        </select>*/}
                        <a
                            href="https://www.youtube.com/channel/UCkPqlmYEkL9ELhRHV7TWS9w"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fa fa-youtube-play"
                                style={{ fontSize: 15 + "px" }}
                            ></i>
                        </a>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/contact">Contact Spike</Link>
                        <Link to="/sitemap">Site Map</Link>
                        <a
                            href="https://ttr-invasion-tracker.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Invasion Tracker
                        </a>
                    </div>
                    <span>
                        Spike's Rewritten Guide &copy;{" "}
                        {this.getCurrentYear()}
                    </span>
                </div>
            </>
        );
    }
}

export default Footer;
