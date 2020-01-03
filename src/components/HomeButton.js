import React from "react";
import { Link } from "react-router-dom";

class HomeButton extends React.Component {
    render() {
        return (
            <Link to="/">
                <img
                    src="/images/spikes_unwritten_guide.png"
                    alt="Spike's Rewritten Guide"
                />
                Home
            </Link>
        );
    }
}

export default HomeButton;
