import React from "react";
import { Link } from "react-router-dom";
import Species from "../../components/fishing/Species";
import Rod from "../../components/fishing/Rod";
import Pond from "../../components/fishing/Pond";

class Fishing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pond: false,
            rod: false,
            species: true
        };

        this.getFishInfo = this.getFishInfo.bind(this);
    }

    componentDidMount() {
        document.title = "Fishing | Spike's Rewritten Guide";
    }

    getFishInfo(species, pond) {
        if (species) {
            this.setState({ species: true, rod: false, pond: false });
        } else if (pond) {
            this.setState({ species: false, rod: false, pond: true });
        } else {
            this.setState({ species: false, rod: true, pond: false });
        }
    }

    render() {
        let display = <Species action={this.getFishInfo} />;
        if (this.state.rod) {
            display = <Rod action={this.getFishInfo} />;
        } else if (this.state.pond) {
            display = <Pond action={this.getFishInfo} />;
        } else {
            display = <Species action={this.getFishInfo} />;
        }

        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Fishing</h1>
                        <p>
                            Fishing is a fun way to earn yourself an additional
                            7 laff points! At any time, in any playground with a
                            pond, which is all of them, a toon can fish to earn
                            jellybeans and to add new species to their fish
                            album.
                        </p>
                        <p>
                            To view the fishing bucket, the fish album, and
                            other fishing information, check out the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/fish_tab.PNG"
                                    alt="Fishing book tab"
                                />
                            </span>{" "}
                            tab in the Shticker Book.
                        </p>
                        <div className="panel-nav">
                            <a href="#fish">How to Fish</a>
                            <a href="#ponds">Ponds & Rods</a>
                            <a href="#bingo">Fish Bingo</a>
                            <a href="#fishFinder">Finding Fish Species</a>
                        </div>
                        <h2 id="fish">How to Fish</h2>
                        <p>
                            To start fishing, simply walk up to any available
                            fishing dock. From here, you will see the fishing
                            dashboard that displays your jellybean jar, a bucket
                            with a maximum capacity of 20, and a circle labled
                            "Cast". To throw a line, click and hold the Cast
                            button then pull left or right for direction and
                            pull back for distance. Release the Cast button to
                            throw the line. Each cast will cost you 1 or more
                            jellybeans. Your goal is to throw a line near the
                            moving shadows in the pond. If you successfully
                            catch a fish, the information card for the fish you
                            caught will pop up on your screen and the fish will
                            be added to your bucket.
                        </p>
                        <p>
                            Similar to <Link to="/gardening">gardening</Link>,
                            for every 10 new species caught and sold, a laff
                            point is earned! There are 70 total species and 7
                            earnable fishing trophies.
                        </p>
                        <p>
                            Once you have reached capacity in your fishing
                            bucket, you have to sell your fish to a fisherman or
                            the Petshop. Fishermen can be found in close
                            proximity to the pond you are fishing at. If you are
                            fishing at your estate, there is a yellow bucket
                            next to the pond where you can sell your fish. If
                            you sell your fish for more jellybeans than you can
                            carry, do not fear! The overflow will go to your
                            main jellybean bank in your estate.
                        </p>
                        <p>
                            Click{" "}
                            <a
                                href="/doc/fishing.pdf"
                                title="Visual How To PDF guide"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>{" "}
                            to view a more detailed guide on how to fish.
                        </p>
                        <h2 id="ponds">Ponds & Rods</h2>
                        <p>
                            A pond is the area were a toon is able to fish. They
                            are located in each playground and can also be found
                            on any street. Note, you will not find a pond in cog
                            headquarters, Goofy Speedway, or Chip n' Dales
                            MiniGolf. Most ponds are unique in a way that they
                            contain different types of fish species. Some
                            provide a better probablity of catching certain
                            species as well. This can be helpful when on the
                            hunt for rare fishes!
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 160 + "px" }}
                            src="/images/mml_pond.PNG"
                            alt="Minnies Melodyland pond"
                        />
                        <p>
                            Of course to fish, a toon needs a fishing rod! There
                            is no initial purchase necessary to start fishing,
                            every toon starts out with a Twig rod. The Twig rod
                            is the weakest tier rod and will not be able to
                            catch heavier fish. But do not worry, you can
                            upgrade your rod by purchasing them as they become
                            available in Clarabelle's Catalog! These upgrades
                            are important if you are interested in catching all
                            70 fish. With each upgrade, an additional jellybean
                            is added to the cost of casting. Check out the table
                            below to see how each rod differs and what each
                            upgrade will provide you:
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rod</th>
                                    <th>Weight (lbs)</th>
                                    <th>Cost (per cast)</th>
                                    <th>Available Fish Species</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Twig Rod</td>
                                    <td>0 - 4</td>
                                    <td>1 jellybean</td>
                                    <td>38</td>
                                </tr>
                                <tr>
                                    <td>Bamboo Rod</td>
                                    <td>0 - 8</td>
                                    <td>2 jellybeans</td>
                                    <td>49 (+11)</td>
                                </tr>
                                <tr>
                                    <td>Hardwood Rod</td>
                                    <td>0 - 12</td>
                                    <td>3 jellybeans</td>
                                    <td>60 (+11)</td>
                                </tr>
                                <tr>
                                    <td>Steel Rod</td>
                                    <td>0 - 16</td>
                                    <td>4 jellybeans</td>
                                    <td>69 (+9)</td>
                                </tr>
                                <tr>
                                    <td>Gold Rod</td>
                                    <td>0 - 20</td>
                                    <td>5 jellybeans</td>
                                    <td>70 (+1)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Note, having an upgraded rod will increase the
                            probablity of catching a rare fish species.
                        </p>
                        <h2 id="bingo">Fish Bingo</h2>
                        <p>
                            Fish Bingo is an event which happens every Wednesday
                            and every Silly Saturday. The objective of Fish
                            Bingo is very similar to how regular Bingo works.
                            The aim is to fill the white spots on the board,
                            which will appear in your fish dashboard on the
                            appropriate days. To do this, you have to catch the
                            fish that appear on the board. If you do
                            successfully catch a needed fish, the spot on the
                            board will flash red. Be quick, that spot must be
                            clicked before someone else marks it! If all the
                            white spots are marked, the Bingo button will begin
                            to flash and the first toon to click it gets the
                            reward.
                        </p>
                        <div className="row row-images">
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 150 + "px" }}
                                    src="/images/fish/fish_bingo_classic.jpg"
                                    alt="Bingo classic"
                                />
                            </div>
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 150 + "px" }}
                                    src="/images/fish/fish_bingo_diagonals.jpg"
                                    alt="Bingo diagonals"
                                />
                            </div>
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 150 + "px" }}
                                    src="/images/fish/fish_bingo_corners.jpg"
                                    alt="Bingo corners"
                                />
                            </div>
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 150 + "px" }}
                                    src="/images/fish/fish_bingo_threeway.jpg"
                                    alt="Bingo threeway"
                                />
                            </div>
                        </div>
                        <p>
                            Here is a Bingo tip: If an old boot is caught, any
                            spot on the board can be marked.
                        </p>
                        <br />
                        <br />
                        <div className="panel-nav">
                            <a href="#fish">How to Fish</a>
                            <a href="#ponds">Ponds & Rods</a>
                            <a href="#bingo">Fish Bingo</a>
                        </div>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <h2>
                            <span id="fishFinder">Finding Fish Species</span>
                        </h2>
                        <p>
                            Ready to start fishing? Great! There are many
                            different types of fish species to catch. Different
                            types of species are found in different ponds across
                            Toontown. Some fish are harder to find than others.
                            Use the lists below as a guide to find fishes. You
                            can organize by fish type, by rod type, or by pond
                            location. Click the links below to quickly jump to a
                            desired section. Happy fishing!
                        </p>
                    </div>
                </div>
                {display}
            </>
        );
    }
}

export default Fishing;
