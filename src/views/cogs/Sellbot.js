import React from "react";

class Sellbot extends React.Component {
    componentDidMount() {
        document.title = "Sellbots | Spike's Rewritten Guide";
    }

    render() {
        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Sellbots</h1>
                        <p>
                            Sellbots are one of the four tiers of cogs found in
                            Toontown. As an overview, they represent the selling
                            business and they are the lowest ranked cogs.
                            Despite being the lowest ranked, some Sellbots have
                            powerful attacks, such as the Mover & Shaker and the
                            Mingler, so be careful! The Sellbot Headquarters is
                            the home of the Sellbots and is most likely the
                            first headquarters a toon will visit. The head of
                            all Sellbots is the Senior V.P., which toons can
                            battle in Sellbot HQ.
                        </p>
                        <img
                            src="/images/cogs/SellbotHD.png"
                            className="badge"
                            alt="Sellbot badge"
                        />
                        <p>
                            Sellbots can be identified by their cog symbol,
                            which is pink in color and has four standing bars on
                            it, representing a bar graph (displayed to the
                            right).
                        </p>
                        <div className="panel-nav">
                            <a href="#list">List of Sellbots</a>
                            <a href="#where">Where to Find Sellbots</a>
                            <a href="#hq">Sellbot HQ</a>
                            <a href="#sos">SOS Cards</a>
                        </div>
                        <h2 id="list">List of Sellbots</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Cog Name</th>
                                    <th>Level Range</th>
                                    <th>Headshot</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cold Caller</td>
                                    <td>1 - 5</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/Cold_caller.png"
                                            alt="Cold Caller"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Telemarketer</td>
                                    <td>2 - 6</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/Telemarketer.png"
                                            alt="Telemarketer"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Name Dropper</td>
                                    <td>3 - 7</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/Name_dropper.png"
                                            alt="Name Dropper"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Glad Hander</td>
                                    <td>4 - 8</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/Glad_hander.png"
                                            alt="Glad Hander"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mover & Shaker</td>
                                    <td>5 - 9</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/Mover_and_shaker.png"
                                            alt="Mover & Shaker"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Two Face</td>
                                    <td>6 - 10</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/Two_face.png"
                                            alt="Two Face"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>The Mingler</td>
                                    <td>7 - 11</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/The_mingler.png"
                                            alt="The Mingler"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mr. Hollywood</td>
                                    <td>8 - 12</td>
                                    <td>
                                        <img
                                            src="/images/cogs/sellbots/Mr_hollywood.png"
                                            alt="Mr. Hollywood"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="where">Where to Find Sellbots</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Street</th>
                                    <th>Playground</th>
                                    <th>Percentage Found</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Punchline Place</td>
                                    <td>Toontown Central</td>
                                    <td>40%</td>
                                </tr>
                                <tr>
                                    <td>Silly Street</td>
                                    <td>Toontown Central</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                    <td>Loopy Lane</td>
                                    <td>Toontown Central</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Seaweed Street</td>
                                    <td>Donald's Dock</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Lighthouse Lane</td>
                                    <td>Donald's Dock</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Oak Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>85%</td>
                                </tr>
                                <tr>
                                    <td>Elm Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>70%</td>
                                </tr>
                                <tr>
                                    <td>Maple Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td>Alto Avenue</td>
                                    <td>Minnie's Melodyland</td>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <td>Baritone Boulevard</td>
                                    <td>Minnie's Melodyland</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Sleet Street</td>
                                    <td>The Brrrgh</td>
                                    <td>40%</td>
                                </tr>
                                <tr>
                                    <td>Polar Place</td>
                                    <td>The Brrrgh</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Lullaby Lane</td>
                                    <td>Donald's Dreamland</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                    <td>Pajama Place</td>
                                    <td>Donald's Dreamland</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Sellbot Headquarters</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="hq">Sellbot HQ</h2>
                        <p>
                            Sellbot Headquarters, or commonly known as Sellbot
                            HQ, is the base of all Sellbot operations. It is
                            located at the end of Oak Street in Daisy Gardens.
                            Within the headquarters, there are the Sellbot
                            Towers and the Sellbot Factory.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 320 + "px" }}
                            src="/images/cogs/sellbots/sbhq.PNG"
                            alt="Sellbot HQ Courtyard"
                        />
                        <p>
                            Toons will usually visit Sellbot HQ first, as there
                            are toontasks in Daisy Gardens that require toons to
                            complete objectives in or around the headquarters.
                        </p>
                        <h3>
                            Building a Sellbot Disguise & The Sellbot Factory
                        </h3>
                        <p>
                            To fight the V.P., a toon must completely build the
                            Sellbot cog suit disguise and be ready for a
                            promotion. Any toon at any laff can build a Sellbot
                            suit! There are 10 parts a toon must collect to
                            complete their suit. To get all of these parts, a
                            toon must simply fight the Factory Foreman in a
                            Sellbot Factory 10 times. The factory can be found
                            in Sellbot HQ through another tunnel labeled
                            "Sellbot Factory" (to the right when entering the
                            headquarters).
                        </p>
                        <p>
                            Here, toons can form boarding groups with other
                            toons to take on the factory. There are typically
                            two different routes toons take: the short route and
                            the long route. The short route ensures toons get
                            through the factory quickly while the long route
                            ensures toons defeat all available cogs in the
                            factory. The map below, created originally by
                            Disney's Toontown, presents the map of the entire
                            Sellbot factory. The orange path provides the route
                            taken for the short route and the green path
                            provides the route taken for the long route. The
                            yellow path towards the end shows the overlap
                            between the short and long route.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 420 + "px" }}
                            src="/images/cogs/sellbots/Sellbot-factory-map.jpg"
                            alt="Sellbot HQ Factory route map"
                        />
                        <p>
                            What is the point of completing a Sellbot factory
                            once I built my suit? That is a wonderful question I
                            asked for you! After completely building a suit, a
                            toon still needs to earn a promotion. A promotion
                            will need to be earned every time a toon levels up
                            their suit. In other words, fight V.P., earn
                            promotion, fight V.P., earn promotion, and so on. To
                            earn a promotion, a toon needs to collect a certain
                            amount of merits. Merits can be collected by
                            defeating Sellbots. Merits will be rewarded at the
                            end of a battle in the same way gag experience is
                            earned. And yes, factories are not the only place to
                            defeat Sellbots, but as a toon moves up in the ranks
                            with their cog suit, a factory will be the most
                            efficient way to collect merits.
                        </p>
                        <ul>
                            <li>
                                Short Route provides <strong>480 merits</strong>
                            </li>
                            <li>
                                Long Route provies <strong>776 merits</strong>
                            </li>
                        </ul>
                        <p>
                            Ranking up a cog suit works similarly to how cog
                            levels work. A toon starts out as a level 1 Cold
                            Caller. As a toon continues to defeat the V.P.,
                            their cog suit will continue to level up. For
                            example, to a level 2 Cold Caller after defeating
                            one V.P. Would if a toon is currently a level 5 Cold
                            Caller, there is no level 6 Cold Caller to promote
                            to! Good point! A toon's cog suit will then upgrade
                            to a level 2 Telemarketer.
                        </p>
                        <p>
                            What happens once a toon reaches a level 12 Mr.
                            Hollywood suit? A toon can continue to rank up their
                            suit until they reach level 50, the maxed level.
                            Upon reaching level 50, a toon will no longer need
                            to collect merits to fight the V.P. As a toon
                            reaches level 15, 20, 30, 40, and 50, they receive a
                            laff point as a reward!
                        </p>
                        <p>
                            To view cog suit information, go to the Cog Disguise
                            page by clicking the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/cog_disguise_tab.PNG"
                                    alt="Cog disguise tab"
                                />
                            </span>{" "}
                            tab in the Shticker Book.
                        </p>
                        <h3>Senior Vice President</h3>
                        <p>
                            The Vice President, also known as the V.P., is the
                            boss of the Sellbots. He can be found within the
                            Sellbot Towers at Sellbot HQ.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 225 + "px", borderRadius: 0 }}
                            src="/images/cogs/sellbots/Vice_President.png"
                            alt="Senior Vice President"
                        />
                        <p>
                            Once a toon has successfully built their Sellbot
                            suit and earns a promotion, they can battle the
                            V.P.! To enter the V.P. battle, a toon must enter
                            the elevator within the Sellbot Towers through the
                            four daunting doors in Courtyard (shown below) with
                            a maximum of 7 other toons.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 220 + "px" }}
                            src="/images/cogs/sellbots/sbhq_vpdoors.png"
                            alt="Sellbot HQ Sellbot Tower entrance"
                        />
                        <p>
                            Once everyone has gone up the elevator, the V.P.
                            will be there, congratulating Cogs on their
                            promotions. There will be a familiar toon hanging in
                            a cage and will give you away, rats! The V.P. will
                            get rid of each cog disguise on each toon and then
                            he will begin attacking. One wave of Cogs and one
                            wave of Skelecogs will challenge toons before the
                            boss battle against the V.P. himself. The final
                            battle against the V.P. entails throwing pies at him
                            until he backs himself off the edge of the map! Once
                            completed, the toon in the cage will be saved and an{" "}
                            <a href="#sos">SOS card</a> will be rewarded.
                        </p>
                        <iframe
                            className="video-frame"
                            width="560"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/QzqXeuTrmzA"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="V.P. Play-through"
                        ></iframe>
                        <h2 id="sos">SOS Cards</h2>
                        <p>
                            An SOS card is a one time use reward given by
                            defeating the V.P. The toon trapped in the cage
                            during the V.P. will provide their SOS card to
                            return the favor of saving them. There are 29
                            different types of SOS cards a toon can receive,
                            some of which are more powerful than others. Each
                            SOS has a unique ability, but a toon can collect
                            multiple of each card. When using an SOS card during
                            battle, the toon on the card will appear during the
                            current round in the battle to help. Using an SOS
                            card will count as a turn.
                        </p>
                        <p>
                            To call an SOS card during any cog battle, click the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/sos_button.PNG"
                                    alt="SOS button"
                                />
                            </span>{" "}
                            button to the left of the gag choice menu. Then,
                            choose an SOS card by pressing the CALL button on
                            the choosen card.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 150 + "px" }}
                            src="/images/sos_card_options.PNG"
                            alt="SOS Card example"
                        />
                        <p>
                            To view SOS cards, go to the SOS Toons page by
                            clicking the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/sos_toons_tab.PNG"
                                    alt="SOS book tab"
                                />
                            </span>{" "}
                            tab in the Shticker book. The table below lists all
                            the SOS cards a toon can collect.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>SOS Toon</th>
                                    <th>Star Rating</th>
                                    <th>Ability</th>
                                    <th>Gag Track</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Madam Chuckle</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Heal toons</td>
                                    <td>Toon-up</td>
                                </tr>
                                <tr>
                                    <td>Daffy Don</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Heal toons</td>
                                    <td>Toon-up</td>
                                </tr>
                                <tr>
                                    <td>Flippy</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Heal toons</td>
                                    <td>Toon-up</td>
                                </tr>
                                <tr>
                                    <td>Clerk Will</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Trap</td>
                                </tr>
                                <tr>
                                    <td>Clerk Penny</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Trap</td>
                                </tr>
                                <tr>
                                    <td>Clerk Clara</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Trap</td>
                                </tr>
                                <tr>
                                    <td>Stinky Ned</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Lure all cogs</td>
                                    <td>Lure</td>
                                </tr>
                                <tr>
                                    <td>Nancy Gas</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Lure all cogs</td>
                                    <td>Lure</td>
                                </tr>
                                <tr>
                                    <td>Lil Oldman</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Lure all cogs</td>
                                    <td>Lure</td>
                                </tr>
                                <tr>
                                    <td>Barbara Seville</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Sound</td>
                                </tr>
                                <tr>
                                    <td>Sid Sonata</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Sound</td>
                                </tr>
                                <tr>
                                    <td>Moe Zart</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Sound</td>
                                </tr>
                                <tr>
                                    <td>Clumsy Ned</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Drop</td>
                                </tr>
                                <tr>
                                    <td>Franz Neckvein</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Drop</td>
                                </tr>
                                <tr>
                                    <td>Barnancle Bessie</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Attack all cogs</td>
                                    <td>Drop</td>
                                </tr>
                                <tr>
                                    <td>Professor Guffaw</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>Toon-up</td>
                                </tr>
                                <tr>
                                    <td>Clerk Ray</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>Trap</td>
                                </tr>
                                <tr>
                                    <td>Doctor Drift</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>Lure</td>
                                </tr>
                                <tr>
                                    <td>Melody Wavers</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>Sound</td>
                                </tr>
                                <tr>
                                    <td>Baker Bridget</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>Throw</td>
                                </tr>
                                <tr>
                                    <td>Sofie Squirt</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>Squirt</td>
                                </tr>
                                <tr>
                                    <td>Shelly Seaweed</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>Drop</td>
                                </tr>
                                <tr>
                                    <td>Professor Pete</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>Restock all toons</td>
                                    <td>All gags</td>
                                </tr>
                                <tr>
                                    <td>Soggy Bottom</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>All toons hit for one round</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>Soggy Nell</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>All toons hit for two rounds</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>Sticky Lou</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>All toons hit for three rounds</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>Flim Flam</td>
                                    <td>&#9733;&#9733;&#9733;</td>
                                    <td>All cogs miss for one round</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>Mr. Freeze</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>All cogs miss for two rounds</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>Julius Wheezer</td>
                                    <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
                                    <td>All cogs miss for three rounds</td>
                                    <td>---</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <div className="panel-nav">
                            <a href="#list">List of Sellbots</a>
                            <a href="#where">Where to Find Sellbots</a>
                            <a href="#hq">Sellbot HQ</a>
                            <a href="#sos">SOS Cards</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Sellbot;
