import React from "react";
import { Link } from "react-router-dom";

class Lawbot extends React.Component {
    componentDidMount() {
        document.title = "Lawbots | Spike's Rewritten Guide";
    }

    render() {
        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Lawbots</h1>
                        <p>
                            Lawbots are one of the four tiers of cogs found in
                            Toontown. This group represents law enforcement and
                            federal law operations. The Lawbot Headquarters is
                            the home of the Lawbots. The boss of all Lawbots is
                            the Chief Justice, which toons can battle in Lawbot
                            HQ.
                        </p>
                        <img
                            src="/images/cogs/LawbotHD.png"
                            className="badge"
                            alt="Lawbot badge"
                        />
                        <p>
                            Lawbots can be identified by their cog symbol, which
                            is light-blue in color and has a gavel symbol on it
                            (displayed to the right). Lawbots are also the only
                            cog type that wears a bow tie.
                        </p>
                        <div className="panel-nav">
                            <a href="#list">List of Lawbots</a>
                            <a href="#where">Where to Find Lawbots</a>
                            <a href="#hq">Lawbot HQ</a>
                            <a href="#suit">Building a Lawbot Disguise</a>
                            <a href="#summon">Cog Summons</a>
                        </div>
                        <h2 id="list">List of Lawbots</h2>
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
                                    <td>Bottom Feeder</td>
                                    <td>1 - 5</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/BottomFeeder2.png"
                                            alt="Bottom Feeder"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bloodsucker</td>
                                    <td>2 - 6</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/Bloodsucker2.png"
                                            alt="Bloodsucker"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Double Talker</td>
                                    <td>3 - 7</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/Doubletalker2.png"
                                            alt="Double Talker"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ambulance Chaser</td>
                                    <td>4 - 8</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/Ambulance_Chaser2.png"
                                            alt="Ambulance Chaser"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Back Stabber</td>
                                    <td>5 - 9</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/Backstabber2.png"
                                            alt="Back Stabber"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Spin Doctor</td>
                                    <td>6 - 10</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/Spindoctor2.png"
                                            alt="Spin Doctor"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Legal Eagle</td>
                                    <td>7 - 11</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/Legaleagle2.png"
                                            alt="Legal Eagle"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Big Wig</td>
                                    <td>8 - 12</td>
                                    <td>
                                        <img
                                            src="/images/cogs/lawbots/Bigwig2.png"
                                            alt="Big Wig"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="where">Where to Find Lawbots</h2>
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
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Silly Street</td>
                                    <td>Toontown Central</td>
                                    <td>25%</td>
                                </tr>
                                <tr>
                                    <td>Loopy Lane</td>
                                    <td>Toontown Central</td>
                                    <td>70%</td>
                                </tr>
                                <tr>
                                    <td>Barnacle Boulevard</td>
                                    <td>Donald's Dock</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Lighthouse Lane</td>
                                    <td>Donald's Dock</td>
                                    <td>40%</td>
                                </tr>
                                <tr>
                                    <td>Oak Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Elm Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td>Maple Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>70%</td>
                                </tr>
                                <tr>
                                    <td>Tenor Terrace</td>
                                    <td>Minnie's Melodyland</td>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <td>Sleet Street</td>
                                    <td>The Brrrgh</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td>Walrus Way</td>
                                    <td>The Brrrgh</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Polar Place</td>
                                    <td>The Brrrgh</td>
                                    <td>85%</td>
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
                                    <td>Lawbot Headquarters</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="hq">Lawbot HQ</h2>
                        <p>
                            Lawbot Headquarters, or often referred to as Lawbot
                            HQ, is the base of all Lawbot operations. It is
                            located at the end of Polar Place in The Brrrgh.
                            Upon entering the headquarters, there is wide open
                            area called the Courtyard. Accessible within the
                            Courtyard are two facilities. The Lawbot Courthouse
                            is to the left and the District Attorney's Offices
                            are to the right.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 320 + "px" }}
                            src="/images/cogs/lawbots/lbhq.PNG"
                            alt="Lawbot HQ Courtyard"
                        />
                        <h3 id="da">District Attorney Offices</h3>
                        <p>
                            The District Attorney Office is a facility located
                            in Lawbot Headquarters. The entrance is the giant
                            doors on the right side of the Lawbot Courtyard
                            (shown below).
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 300 + "px" }}
                            src="/images/cogs/lawbots/lbhq_daoffice.PNG"
                            alt="Lawbot HQ DA Office entrance"
                        />
                        <p>
                            There are four different tiers of offices a toon can
                            enter: Office A, Office B, Office C, Office D. A
                            real original naming convention, huh? The shortest
                            office is Office A while the longest office is
                            Office D. Toons can find the elevators to these
                            offices through those giant doors shown above.
                            However, toons can form boarding groups with others
                            toon to take on an office of their chosing.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 225 + "px" }}
                            src="/images/cogs/lawbots/daoffice_elevators.PNG"
                            alt="DA Office Elevators"
                        />
                        <h4>Lawbot Office Statistics</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>DA Office</th>
                                    <th>Minimum Laff Requirement</th>
                                    <th>Number of Floors</th>
                                    <th>Number of Cogs</th>
                                    <th>Jury Notices Earned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>24</td>
                                    <td>564</td>
                                </tr>
                                <tr>
                                    <td>B</td>
                                    <td>81</td>
                                    <td>4</td>
                                    <td>32</td>
                                    <td>944</td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td>86</td>
                                    <td>5</td>
                                    <td>40</td>
                                    <td>1370</td>
                                </tr>
                                <tr>
                                    <td>D</td>
                                    <td>96</td>
                                    <td>6</td>
                                    <td>48</td>
                                    <td>1842</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            The cogs in each office range from level 10 to level
                            11, with the Clerk being level 12. The cogs a toon
                            will find in an office are Spin Doctors (although
                            rare), Legal Eagles, and Big Wigs. The Clerk is
                            always a Big Wig Skelecog. The purpose of completing
                            DA offices is to collect jury notices to earn a
                            promotion on a Lawbot suit. Office A is typically
                            used by lower level Lawbot suits, Office B & C are
                            typically used by mid-level Lawbot suits such as the
                            Back Stabber, and Office D is typically used by
                            higher level Lawbot suits. Click{" "}
                            <a href="#suit">here</a> to learn how to build a
                            Lawbot suit.
                        </p>
                        <h4>Lawbot Office Obstacles & Puzzles</h4>
                        <p>
                            In any office, a toon can encounter one or more of
                            four different puzzles. When reaching a puzzle room,
                            there will always be two puzzles in the same room.
                            When a puzzle is complete, one of the two locks will
                            unlock on the door toons need to open. When both
                            puzzles are solved, the door can be opened and toons
                            can continue through the office. If a toon steps on
                            a red skull in a puzzle, Red Skelecogs, also known
                            as Virtual Skeelcogs, will be projected and will
                            attack the toons. Once toons defeat those cogs, the
                            puzzle will be marked as complete. Note, no gag
                            experience or jury notices will be awarded in
                            Virtual Skelecog battles.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 25 + "%" }}>Puzzle</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Avoid the Skulls</td>
                                    <td>
                                        On a 7x7 board, each tile is either a
                                        small square, skull, or nothing. Every
                                        few seconds the board is updated. The
                                        small square tiles will turn into skulls
                                        upon update. The goal is to reach the
                                        other side of the board without touching
                                        a skulls.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Skull Finder</td>
                                    <td>
                                        This puzzle is similar to{" "}
                                        <a
                                            href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Minesweeper
                                        </a>
                                        . On a 7x7 board, each tile is a square
                                        hidding either a skull or a number.
                                        Stepping on the tile reveals its
                                        content. Each tile with a number tells
                                        how many touching tiles contain skulls.
                                        The goal is to create a safe path to the
                                        other side of the board.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Drag 3 in a Row</td>
                                    <td>
                                        On a 6x6 board, there are 12 colored
                                        tiles: four green triangles, four blue
                                        rhombus', and four red x's. A tile can
                                        be moved by stepping on it and walking.
                                        The goal is to match three of the same
                                        colored tiles in a row until all tiles
                                        are gone. Upon a 3 tile match, that
                                        color will disappear.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Matching</td>
                                    <td>
                                        On a 6x6 board, there is a random
                                        assortment of green triangle tiles or
                                        red square tiles. Stepping on a tile
                                        changes the color (red to green or green
                                        to red). The goals is to make the entire
                                        board the same color, red or green.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            In some rooms, giant goons will patrol. While it is
                            possible to disable these goons, it is easier to
                            just avoid their patrol light. Additionally, camera
                            searchlights are also positioned around the offices
                            and will move around in a random pattern. If
                            detected, a toon will loose 8 laff points. Stompers
                            can also be found throughout an office, which will
                            deduct 10 laff points if a toon gets squished.
                            Obstacles are randomized through the office floors.
                        </p>
                        <h4>Floor Multipliers</h4>
                        <p>
                            Similar to cog buildings, each floor of an office
                            has a unique gag experience multiplier. These
                            multiplers increase as a toon progresses to a higher
                            floor.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>DA Offices</th>
                                    <th>Floor</th>
                                    <th>Multiplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A, B, C, D</td>
                                    <td>1</td>
                                    <td>2x</td>
                                </tr>
                                <tr>
                                    <td>A, B, C, D</td>
                                    <td>2</td>
                                    <td>3x</td>
                                </tr>
                                <tr>
                                    <td>A, B, C, D</td>
                                    <td>3</td>
                                    <td>4x</td>
                                </tr>
                                <tr>
                                    <td>B, C, D</td>
                                    <td>4</td>
                                    <td>5x</td>
                                </tr>
                                <tr>
                                    <td>C, D</td>
                                    <td>5</td>
                                    <td>6x</td>
                                </tr>
                                <tr>
                                    <td>D</td>
                                    <td>1</td>
                                    <td>7x</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>The Chief Justice</h3>
                        <p>
                            The Chief Justice, otherwise known as the C.J., is
                            the boss of the Lawbots. He lives in the Lawbot
                            Courthouse in Lawbot HQ.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 235 + "px", borderRadius: 0 }}
                            src="/images/cogs/lawbots/Chief_Justice.png"
                            alt="Chief Justice"
                        />
                        <p>
                            Once a toon has a Lawbot suit disguise and has
                            earned a promotion, they can fight the C.J. To
                            access the C.J. battle, a toon must enter the Lawbot
                            Courthouse through the giant marbled doors on the
                            left side of the courtyard (shown below).
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 250 + "px" }}
                            src="/images/cogs/lawbots/lbhq_courthousedoors.PNG"
                            alt="Lawbot HQ Courthouse entrance"
                        />
                        <p>
                            A toon can enter this battle with a maximum of 7
                            other toons. Once all participating toons have gone
                            up the elevator, toons will be greeted by the
                            not-so-friendly C.J. and a fellow toon on trial.
                            Toons will fight waves of cogs that are level 8 and
                            above. In the next round, toons are faced with
                            cannons and 12 jury seats. The goal is to fill up as
                            many jury seats as possible with NPC toons. Each
                            toon will have 70 seconds to do so. Be aware! Cogs
                            are trying to fill up jury seats too! In the final
                            round, toons must throw evidence on their side of a
                            giant scale, with the goal of weighing the pan to
                            the bottom. Toons receive evidence from the toon on
                            trial. There is a line of cogs throwing their own
                            evidence in the pan on their side of the scale or
                            throwing evidence at toons. Toons can stun these
                            cogs for a short period of time by throwing evidence
                            at them. If all cogs are stunned at once, toons get
                            a 10 point laff boost and 2x evidence weight for 20
                            seconds! If toons fail to put enough evidence in
                            their pan, the cogs win and all toons will go sad.
                            If toons successfully throw enough evidence in their
                            pan, the C.J. will be upset and toons will be
                            rewarded a <a href="#summon">cog summon</a>.
                        </p>
                        <iframe
                            className="video-frame"
                            width="560"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/35AXw8y3o64"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="C.J. Play-through"
                        ></iframe>
                        <h2 id="suit">Building a Lawbot Disguise</h2>
                        <p>
                            To fight the Chief Justice, a toon must build a
                            Lawbot suit disguise and be ready for a promotion.
                            There are 14 total cog suit parts to collect. To get
                            all of these parts, a toon must first complete all
                            toontasks in Donald's Dreamland, including building
                            a <Link to="/cashbots">Cashbot</Link> disguise.
                            Then, toons must complete toontasks given by
                            Professor Flake, one task for each of the 14 cog
                            disguise parts.
                        </p>
                        <p>
                            Tasks given by Professor Flake to obtain Lawbot cog
                            parts require toons to recover an External
                            Temperature Sensor from the cogs on each street in
                            Toontown.
                        </p>
                        <ol>
                            <li>
                                Recovery Task - Silly Street, Toontown Central
                                (Reward: Upper Left Leg)
                            </li>
                            <li>
                                Recovery Task - Loopy Lane, Toontown Central
                                (Reward: Lower Left Leg)
                            </li>
                            <li>
                                Recovery Task - Punchline Place, Toontown
                                Central (Reward: Left Foot)
                            </li>
                            <li>
                                Recovery Task - Barnacle Boulevard, Donald's
                                Dock (Reward: Upper Right Leg)
                            </li>
                            <li>
                                Recovery Task - Seaweed Street, Donald's Dock
                                (Reward: Lower Right Leg)
                            </li>
                            <li>
                                Recovery Task - Lighthouse Lane, Donald's Dock
                                (Reward: Right Foot)
                            </li>
                            <li>
                                Recovery Task - Elm Street, Daisy Gardens
                                (Reward: Upper Torso)
                            </li>
                            <li>
                                Recovery Task - Maple Street, Daisy Gardens
                                (Reward: Pelvis)
                            </li>
                            <li>
                                Recovery Task - Oak Street, Daisy Gardens
                                (Reward: Upper Left Arm)
                            </li>
                            <li>
                                Recovery Task - Alto Avenue, Minnie's Melodyland
                                (Reward: Lower Left Arm)
                            </li>
                            <li>
                                Recovery Task - Baritone Boulevard, Minnie's
                                Melodyland (Reward: Left Hand)
                            </li>
                            <li>
                                Recovery Task - Tenor Terrace, Minnie's
                                Melodyland (Reward: Upper Right Arm)
                            </li>
                            <li>
                                Recovery Task - Lullaby Lane, Donald's Dreamland
                                (Reward: Lower Right Arm)
                            </li>
                            <li>
                                Recovery Task - Pajama Place, Donald's Dreamland
                                (Reward: Right Hand)
                            </li>
                        </ol>
                        <p>
                            Ranking up a cog suit works similarly to how cog
                            levels work. A toon starts out as a level 1 Bottom
                            Feeder. As a toon continues to defeat the Chief
                            Justice, their cog suit will continue to level up.
                            For example, to a level 2 Bottom Feeder after
                            defeating one Chief Justice. Would if a toon is
                            currently a level 5 Bottom Feeder, there is no level
                            6 Bottom Feeder to promote to! Good point! A toon's
                            cog suit will then upgrade to a level 2 Bloodsucker.
                        </p>
                        <p>
                            After defeating the Chief Justice and leveling up a
                            suit, a promotion will need to be earned each time.
                            To earn a promotion, a toon needs to collect a
                            certain amount of jury notices. The higher level
                            suit, the more jury notices needed. Jury notices can
                            be collected by defeating Lawbots. Jury notices will
                            be rewarded at the end of a battle in the same way
                            gag experience is earned. The most efficient way to
                            earn jury notices is by completing{" "}
                            <a href="#da">Lawbot District Attorney Offices</a>.
                        </p>
                        <p>
                            What happens once a toon reaches a level 12 Big Wig
                            suit? A toon can continue to rank up their suit
                            until they reach level 50, the maxed level. Upon
                            reaching level 50, a toon will no longer need to
                            collect jury notices to fight the Chief Justice. As
                            a toon reaches level 15, 20, 30, 40, and 50, they
                            receive a laff point as a reward!
                        </p>
                        <p>
                            To view cog suit information, go to the Cog Disguise
                            page by clicking the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/cog_disguise_tab.PNG"
                                    alt="Cog disguise book tab"
                                />
                            </span>{" "}
                            tab in the Shticker Book.
                        </p>
                        <h2 id="summon">Cog Summons</h2>
                        <p>
                            A cog summon is a one time use reward received after
                            defeating the Cheif Justice. There are three
                            different types of cogs summons a toon might get:
                            summon a cog, summon a cog building, or summon a cog
                            invasion. All toons in the battle will usually get
                            the same type of summon, depending on the summons a
                            toon already has. A summon can be used by going to
                            the Shticker book in the cog gallery page{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/cog_gallery_tab.PNG"
                                    alt="Cog gallery book tab"
                                />
                            </span>{" "}
                            and then clicking on the summon icon{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/summon_icon.PNG"
                                    alt="Summon button"
                                />
                            </span>{" "}
                            next to a cog. The window shown below will appear.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 200 + "px" }}
                            src="/images/cog_summon_window.png"
                            alt="Cog summon chooser"
                        />
                        <h4>Cog Summon</h4>
                        <p>
                            A cog summon is the most common type of summon a
                            toon can get. When used, it summons the chosen cog
                            to a nearby area on the current street a toon is
                            located. If a cog level does not match the street
                            level, it will match the level the closest it can to
                            the street level. For example, a Mr. Hollywood would
                            be level 8 in Toontown Central.
                        </p>
                        <h4>Building Summon</h4>
                        <p>
                            A building summon is obtained if a toon has a cog
                            summon of that same cog already. When used, it
                            summons a cog building of the that cogs' type.
                            Usually that cog is on the first level of that
                            building but the rest of the building is full of the
                            cog type. For example, a Tightwad cog building
                            summon will create a Cashbot building full of
                            Cashbots. The tier level of the cog will affect how
                            many stories a summoned building will be.
                        </p>
                        <h4>Invasion Summon</h4>
                        <p>
                            An invasion summon is rewarded when a toon has both
                            a cog summon and building summon of that cog
                            already. When used, it will start an invasion in the
                            current district a toon is located. All toons in
                            that same district will experience the summoned cog
                            invasion. If the district is a 'safe from invasions'
                            district, the summon will not work.
                        </p>
                        <br />
                        <br />
                        <div className="panel-nav">
                            <a href="#list">List of Lawbots</a>
                            <a href="#where">Where to Find Lawbots</a>
                            <a href="#hq">Lawbot HQ</a>
                            <a href="#suit">Building a Lawbot Disguise</a>
                            <a href="#summon">Cog Summons</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Lawbot;
