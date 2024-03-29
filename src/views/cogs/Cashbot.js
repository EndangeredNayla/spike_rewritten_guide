import React from "react";

class Cashbot extends React.Component {
    componentDidMount() {
        document.title = "Cashbots | Spike's Rewritten Guide";
    }

    render() {
        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Cashbots</h1>
                        <p>
                            Cashbots are one of the four tiers of cogs found in
                            Toontown. As an overview, they represent finance and
                            money management. The Cashbot Headquarters is the
                            home of the Cashbots and is most likely the
                            headquarters a toon will visit when they are working
                            on Donald's Dreamland toontasks. The head of all
                            Cashbots is the Chief Financial Officer, which toons
                            can battle in Cashbot HQ.
                        </p>
                        <img
                            src="/images/cogs/CashbotHD.png"
                            className="badge"
                            alt="Cashbot badge"
                        />
                        <p>
                            Cashbots can be identified by their cog symbol,
                            which is light-green in color and has an United
                            States dollar symbol on it (displayed to the right).
                        </p>
                        <div className="panel-nav">
                            <a href="#list">List of Cashbots</a>
                            <a href="#where">Where to Find Cashbots</a>
                            <a href="#hq">Cashbot HQ</a>
                            <a href="#suit">Building a Cashbot Disguise</a>
                            <a href="#unite">Unites</a>
                        </div>
                        <h2 id="list">List of Cashbots</h2>
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
                                    <td>Short Change</td>
                                    <td>1 - 5</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Short_change.png"
                                            alt="Short Change"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Penny Pincher</td>
                                    <td>2 - 6</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Penny_pincher.png"
                                            alt="Penny Pincher"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tightwad</td>
                                    <td>3 - 7</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Tightwad.png"
                                            alt="Tightwad"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bean Counter</td>
                                    <td>4 - 8</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Bean_counter.png"
                                            alt="Bean Counter"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Number Cruncher</td>
                                    <td>5 - 9</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Number_cruncher.png"
                                            alt="Number Cruncher"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Money Bags</td>
                                    <td>6 - 10</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Money_bags.png"
                                            alt="Money Bags"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Loan Shark</td>
                                    <td>7 - 11</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Loan_shark.png"
                                            alt="Loan Shark"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Robber Baron</td>
                                    <td>8 - 12</td>
                                    <td>
                                        <img
                                            src="/images/cogs/cashbots/Robber_baron.png"
                                            alt="Robber Baron"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="where">Where to Find Cashbots</h2>
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
                                    <td>90%</td>
                                </tr>
                                <tr>
                                    <td>Lighthouse Lane</td>
                                    <td>Donald's Dock</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Oak Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Elm Street</td>
                                    <td>Daisy Gardens</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Alto Avenue</td>
                                    <td>Minnie's Melodyland</td>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <td>Baritone Boulevard</td>
                                    <td>Minnie's Melodyland</td>
                                    <td>90%</td>
                                </tr>
                                <tr>
                                    <td>Sleet Street</td>
                                    <td>The Brrrgh</td>
                                    <td>30%</td>
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
                                    <td>85%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Cashbot Headquarters</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="hq">Cashbot HQ</h2>
                        <p>
                            Cashbot Headquarters, or often referred to as
                            Cashbot HQ, is the base of all Cashbot operations.
                            It is located at the end of Pajama Place in Donald's
                            Dreamland. Within the headquarters, spread across
                            the Trainyard, there are three elevators that lead
                            to three different types of cog mints. Additionally,
                            on the opposite side of the headquarters is the
                            Cashbot Vault.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 320 + "px" }}
                            src="/images/cogs/cashbots/cbhq.PNG"
                            alt="Cashbot HQ Courtyard"
                        />
                        <p>
                            Caution! When navigating the Trainyard, the main
                            area in the headquarters, watch out for trains when
                            crossing the tracks, they will run you over! This
                            will deduct 10 laff points. Pesky cogs!
                        </p>
                        <h3 id="mint">Cashbot Mints</h3>
                        <p>
                            Cashbot Mints are facilities of the headquarters.
                            There are three types of mints: Coin Mint, Dollar
                            Mint, and Bullion Mint. The shortest mint is the
                            Coin Mint while the longest mint is the Bullion
                            Mint. Elevators to enter the mints are spread across
                            the train yard, the Coin Mint being the closest
                            elevator to the entrance of the headquarters.
                            However, toons can form boarding groups with others
                            toon to take on a mint of their chosing.
                        </p>
                        <h4>Mint Statistics</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mint</th>
                                    <th>Minimum Laff Requirement</th>
                                    <th>Number of Cogs</th>
                                    <th>Cogbucks Earned</th>
                                    <th>Gag XP Multiplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Coin Mint</td>
                                    <td>0</td>
                                    <td>16 - 24</td>
                                    <td>356 - 544</td>
                                    <td>4x</td>
                                </tr>
                                <tr>
                                    <td>Dollar Mint</td>
                                    <td>66</td>
                                    <td>24 - 36</td>
                                    <td>679 - 1004</td>
                                    <td>5x</td>
                                </tr>
                                <tr>
                                    <td>Bullion Mint</td>
                                    <td>71</td>
                                    <td>36 - 44</td>
                                    <td>1202 - 1496</td>
                                    <td>6x</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            The cogs in each mint range from level 10 to level
                            11, with the supervisor being level 12. The lowest
                            cog type found in a cog mint is a Money Bags. The
                            purpose of completing cog mints is to collect
                            cogbucks to earn a promotion on a Cashbot suit. Coin
                            Mints are typically used by lower level Cashbot
                            suits, Dollar Mints are typically used by mid-level
                            Cashbot suits such as the Bean Counter and Number
                            Cruncher, and Bullion Mints are typically used by
                            higher level Cashbot suits. Click{" "}
                            <a href="#suit">here</a> to learn how to build a
                            Cashbot suit.
                        </p>
                        <h4>Mint Floor Plans</h4>
                        <p>
                            Everytime a toon goes into a mint, most likely the
                            floor plan will be different. It is not always the
                            same layout like a Sellbot Factory. There are 20
                            different types of floor plans per mint, each
                            consisting of a different number and a unique
                            combination of cogs and obstacles. In order to get
                            to the next room, toons must overcome these
                            obstacles or defeat the cogs that are in the way.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: 25 + "%" }}>
                                        Room / Obstacle
                                    </th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Paint Mixer Room</td>
                                    <td>
                                        Toons must jump onto three separate
                                        moving platforms to cross, without
                                        falling into the paint. Falling into the
                                        paint will deduct 8 laff points.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lava Room</td>
                                    <td>
                                        Toons must jump across three platforms
                                        floating on the lava surface. These
                                        platforms sink once a toon jumps on
                                        them. Falling into the lava will deduct
                                        8 laff points.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Spinning Gears</td>
                                    <td>
                                        Toons must hop on a tower of rotating
                                        gears to climb over the wall blocking
                                        the hallway to the next room.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stompers</td>
                                    <td>
                                        There are stomper rooms scattered around
                                        the mint. Toons must run under them
                                        before getting crushed. Getting stomped
                                        will deduct 8 laff points.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Giant Stomper</td>
                                    <td>
                                        The giant stomper covers the entire
                                        room. Toons must avoid this stomper by
                                        jumping into the holes in the ground.
                                        Tip: there are restock barrels in this
                                        room!
                                    </td>
                                </tr>
                                <tr>
                                    <td>Diamond Room</td>
                                    <td>
                                        Sometimes called the Doom Room, this
                                        room is in the shape of a diamond. There
                                        are 4 groups of cogs to battle, in each
                                        corner of the diamond. One battle can be
                                        skipped, but typically toons want to
                                        complete all four battles.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ledge Room</td>
                                    <td>
                                        This room consists of 4 cog battles. The
                                        second battle can be skipped by running
                                        to the left into the shortcut instead of
                                        entering that battle. The final battle
                                        is up a small set of stairs that leads
                                        to the top of a ledge. Tip: there is a
                                        restock barrel and a healing barrel
                                        straight ahead after the first battle in
                                        this room.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Goon Rooms</td>
                                    <td>
                                        Goons are a commonplace in cog mints.
                                        Empty rooms will be filled with goons
                                        and toons must run through avoiding
                                        them. Toons can stomp on a goons head to
                                        shut them down for a short period of
                                        time. Getting caught in a goons' light
                                        will deduct 10 laff points.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Skelecog Rooms</td>
                                    <td>
                                        There are two square shaped rooms that
                                        only consist of four level 11 skelecogs.
                                        Toons must battle these cogs in order to
                                        proceed through the mint.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Time Obstacle Course</td>
                                    <td>
                                        Toons have 120 seconds to complete an
                                        obstacle course involving jumping on a
                                        giant spinning gear, jumping across
                                        small ledges, and avoiding a stomper. If
                                        a toon does not successfully complete
                                        this obstacle, they will be deducted 20
                                        laff and given an easy way to reach the
                                        end.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Wondering what types of floor plans you might
                            encounter? Refer to the following links:{" "}
                            <a
                                href="https://toontown.fandom.com/wiki/Coin_Mint"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Coin Mint
                            </a>
                            ,{" "}
                            <a
                                href="https://toontown.fandom.com/wiki/Dollar_Mint"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Dollar Mint
                            </a>
                            , and{" "}
                            <a
                                href="https://toontown.fandom.com/wiki/Bullion_Mint"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Bullion Mint
                            </a>
                            .
                        </p>
                        <h3>Chief Financial Officer</h3>
                        <p>
                            The Chief Financial Officer, with the nickname
                            C.F.O., is the overseer of the Cashbots. He resides
                            within the Cashbot Vault in Cashbot HQ.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 225 + "px", borderRadius: 0 }}
                            src="/images/cogs/cashbots/Chief_Financial_Officer.png"
                            alt="Chief Financial Officer"
                        />
                        <p>
                            After successfully building a Cashbot suit disguise
                            and earning a promotion, a toon can fight the C.F.O.
                            To enter the C.F.O. battle, a toon must enter the
                            Cashbot Vault through the giant double doors across
                            the headquarters (shown below).
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 220 + "px" }}
                            src="/images/cogs/cashbots/cbhq_vault.PNG"
                            alt="Cashbot HQ Vault"
                        />
                        <p>
                            A toon can enter this battle with a maximum of 7
                            other toons. Once everyone has gone up the elevator,
                            an orange monkey named Mata Hairy will be there.
                            Mata Hairy tries to sneak into the vault but is
                            caught instantly by the C.F.O. himself! From there,
                            the toons will have to fight a wave of Cashbots
                            before fighting the C.F.O. The final battle against
                            the C.F.O. consists of stomping goons and using
                            giant magnet cranes to throw those goons and
                            provided safes at the C.F.O.'s head. Be careful, the
                            goons light deals more damage as the C.F.O. takes
                            more damage. Upon defeat, toons will celebrate and
                            be rewared with a{" "}
                            <a href="#unite">SpeedChat unite</a>!
                        </p>
                        <iframe
                            className="video-frame"
                            width="560"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/J5-O2kgjQw4"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="C.F.O. Play-through"
                        ></iframe>
                        <h2 id="suit">Building a Cashbot Disguise</h2>
                        <p>
                            To fight the C.F.O., a toon must build a Cashbot
                            suit disguise and be ready for a promotion. There
                            are 12 total cog suit parts to collect. To get all
                            of these parts, a toon must complete toontasks in
                            Donald's Dreamland. There are a total of 12 required
                            toontasks, some involving specific toon NPCs and
                            some involving randomized tasks.
                        </p>
                        <ol>
                            <li>Nat's Tasks (Reward: Upper Left Leg)</li>
                            <li>
                                Teddy Blair's Tasks (Reward: Lower Left Leg)
                            </li>
                            <li>William Teller's Tasks (Reward: Left Foot)</li>
                            <li>
                                Nina Nitelight's Tasks (Reward: Upper Right Leg)
                            </li>
                            <li>
                                Honey Moon's Tasks (Reward: Lower Right Leg)
                            </li>
                            <li>Dreamy Daphne's Tasks (Reward: Right Foot)</li>
                            <li>Smugy Mascara's Tasks (Reward: Pelvis)</li>
                            <li>Sandy Sandman's Tasks (Reward: Upper Torso)</li>
                            <li>Random Task (Reward: Upper Left Arm)</li>
                            <li>Random Task (Reward: Lower Left Arm)</li>
                            <li>Random Task (Reward: Upper Right Arm)</li>
                            <li>Random Task (Reward: Lower Right Arm)</li>
                        </ol>
                        <p>
                            Ranking up a cog suit works similarly to how cog
                            levels work. A toon starts out as a level 1 Short
                            Change. As a toon continues to defeat the C.F.O.,
                            their cog suit will continue to level up. For
                            example, to a level 2 Short Change after defeating
                            one C.F.O. Would if a toon is currently a level 5
                            Short Change, there is no level 6 Short Change to
                            promote to! Good point! A toon's cog suit will then
                            upgrade to a level 2 Penny Pincher.
                        </p>
                        <p>
                            After defeating the C.F.O. and leveling up a suit, a
                            promotion will need to be earned each time. To earn
                            a promotion, a toon needs to collect a certain
                            amount of cogbucks. The higher level suit, the more
                            cogbucks needed. Cogbucks can be collected by
                            defeating Cashbots. Cogbucks will be rewarded at the
                            end of a battle in the same way gag experience is
                            earned. The most efficient way to earn cogbucks is
                            by completing <a href="#mint">Cashbot Mints</a>.
                        </p>
                        <p>
                            What happens once a toon reaches a level 12 Robber
                            Baron suit? A toon can continue to rank up their
                            suit until they reach level 50, the maxed level.
                            Upon reaching level 50, a toon will no longer need
                            to collect cogbucks to fight the C.F.O. As a toon
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
                                    alt="Cog disguise book tab"
                                />
                            </span>{" "}
                            tab in the Shticker Book.
                        </p>
                        <h2 id="unite">Unites</h2>
                        <p>
                            A Unite is a one time use reward given by defeating
                            the C.F.O. Mata Hairy will give out a random unite
                            after each victory. Unites are able either to
                            restock gags, heal laff points, or give out
                            jellybeans. They can only reach toons within a short
                            radius of the toon using the unite phrase. Unites
                            are used the same way SpeedChat phrases are used. A
                            toon can go into their SpeedChat menu and hover over
                            the 'Unite!' tab to use what they have at any time.
                            To use a unite, click on a unite in the SpeedChat
                            menu as if to use a SpeedChat phrase.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 225 + "px" }}
                            src="/images/unite_menu.PNG"
                            alt="SpeedChat unite menu"
                        />
                        <br />
                        <br />
                        <div className="panel-nav">
                            <a href="#list">List of Cashbots</a>
                            <a href="#where">Where to Find Cashbots</a>
                            <a href="#hq">Cashbot HQ</a>
                            <a href="#suit">Building a Cashbot Disguise</a>
                            <a href="#unite">Unites</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Cashbot;
