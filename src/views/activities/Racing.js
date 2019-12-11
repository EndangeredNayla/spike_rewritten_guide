import React from "react";

class Racing extends React.Component {
    componentDidMount() {
        document.title = "Racing | Spike's Rewritten Guide";
    }

    render() {
        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Kart Racing</h1>
                        <p>
                            Racing?! In Toontown!? G'arsh! Racing is a super fun
                            activity and an exhilarating way to earn 3
                            additional laff points. It is also a fantastic way
                            to spend time with toon friends! Are you ready to
                            cross the finish line? Any toon at any level can
                            head on over to the speedway and race all day and
                            all night!
                        </p>
                        <div className="panel-nav">
                            <a href="#gs">Goofy Speedway</a>
                            <a href="#about">All About Racing</a>
                            <a href="#tracks">Race Tracks</a>
                            <a href="#trophies">Trophies</a>
                        </div>
                        <h2 id="gs">Goofy Speedway</h2>
                        <p>
                            You might be asking, where do I go to race? Goofy
                            Speedway! Goofy Speedway can be found through a
                            tunnel, resembling a tire, located in Toontown
                            Central (circled below). This is right past Toon HQ,
                            next to the Clothing Shop. Once visited, a toon will
                            automatically recieve teleport access to the
                            playground.
                        </p>
                        <div className="row row-images">
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 240 + "px" }}
                                    src="/images/Toontown_Central_Map.jpg"
                                    alt="Toontown Central map"
                                />
                            </div>
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 240 + "px" }}
                                    src="/images/goofyspeedyway_tunnel.PNG"
                                    alt="Goofy Speedway tire tunnel"
                                />
                            </div>
                        </div>
                        <p>
                            At Goofy Speedway, a toon can purchase their very
                            own kart, earn tickets by racing on the tracks, set
                            & beat time records, and earn trophies by racing
                            other toons. Even though Goofy Speedway is another
                            playground, it is very unlike all of the other main
                            playgrounds across Toontown. There are not any
                            fishing ponds or gag shops, but there is a unique
                            kart shop. Likewise, the speedway uses its own form
                            of currency for payouts and rewards: tickets!
                        </p>
                        <h3>Tickets</h3>
                        <p>
                            Unlike the rest of Toontown, jellybeans are not a
                            valid form of payment at Goofy Speedway. Here,
                            tickets are used to purchase accessories, karts,
                            join battle races, and join grand prix races.
                            Tickets cannot be used in other places in Toontown,
                            only at Goofy Speedway. However, do not try to eat
                            tickets, they are not as tasty as jellybeans.
                        </p>
                        <p>
                            A toon should never loose any tickets, except when
                            purchasing a racing item. Any race completed will
                            provide some sort of profit as a reward.
                        </p>
                        <h3>Goofy's Kart Shop</h3>
                        <p>
                            In order to race on the tracks, a toon must purchase
                            a kart, which can be done at the Kart Shop! Goofy's
                            Kart Shop is found in Goofy's Speedway, located
                            right near the entrance from Toontown Central.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 225 + "px" }}
                            src="/images/kart_shop.PNG"
                            alt="Goofy Speedway Kart Shop"
                        />
                        <p>
                            Every toon starts out with 200 tickets, which allows
                            them to buy the cheapest kart available: the
                            almighty Cruiser. Toons can upgrade their kart to
                            the Toon Utility Vehicle (2500 tickets) or the
                            Roadster (7500 tickets) once they have enough
                            tickets. Kart accessories and paint jobs are also
                            available. These items can make a kart look super
                            fast and cool! To access purchased accessories, open
                            the Shticker Book and navigate to the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/racing_tab.PNG"
                                    alt="Kart racing book tab"
                                />
                            </span>{" "}
                            tab. Select the "Customize" tab and customize away!
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 185 + "px", width: 400 + "px" }}
                            src="/images/GoofySpeedwayKarts.gif"
                            alt="Available karts: Cruiser, Toon Utility Vehicle, and Roadster"
                        />
                        <p style={{ textAlign: "center" }}>
                            <i>
                                From left to right: Cruiser, Toon Utility
                                Vehicle, and Roadster
                            </i>
                        </p>
                        <h2 id="about">All About Racing</h2>
                        <p>
                            To join a race, walk up to one of the 12 race
                            tunnels in the Speedway. There are four orange spots
                            in front of each tunnel. Approach a spot and a
                            confirmation box will appear. Information, including
                            ticket deposit and qualify time, for a race is shown
                            on the boards displayed on each race tunnel.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 220 + "px" }}
                            src="/images/racing_tunnels.JPG"
                            alt="Speedway racing tunnels"
                        />
                        <p>
                            Toons can race on a variety of tracks to earn
                            tickets, which in turn are used to enter more races
                            or upgrade karts. Toons can also set records for the
                            current district they are in. In the middle of the
                            speedway playground is a score board that displays
                            the high scores for each track. If a new record is
                            set upon completing a race, a toon will earn an
                            additional 1000 tickets! Toon records are stored in
                            the Shticker Book under 'Records' on the Karts page{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/racing_tab.PNG"
                                    alt="Kart racing book tab"
                                />
                            </span>
                            .
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 250 + "px" }}
                            src="/images/goofyspeedyway_scoreboard.PNG"
                            alt="Goofy Speedway Scoreboard"
                        />
                        <p>
                            The default controls for racing include the arrow
                            keys (&#8592;&#8593;&#8594;&#8595;) to move and the
                            CTRL key to use an attack. These controls can be
                            modified in the Options menu.
                        </p>
                        <h3>Practice Race</h3>
                        <p>
                            Practice races require no ticket deposit to enter
                            and can be raced solo. There are no attack items to
                            collect on the track. Trophies cannot be earned and
                            records cannot be set. Practice races are a great
                            way to become familar with a track layout and get a
                            feel for controlling a kart on it. Toons can race on
                            a practice track by themselves or with a maximum of
                            three other toons. Each toon in the practice race
                            will receive 20 tickets for qualifying at the end.
                        </p>
                        <h3>Toon Battle</h3>
                        <p>
                            For battle races, toons must race in a party of 2 to
                            4 toons. While racing, on the track there will be
                            item boxes that look like presents. Upon collecting
                            one, a toon will be given a random attack to use,
                            similar to how{" "}
                            <a
                                href="https://en.wikipedia.org/wiki/Mario_Kart"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Mario Kart
                            </a>{" "}
                            works! There are four different types of attacks,
                            each with a different purpose:
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Attack</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Banana Peel</td>
                                    <td>
                                        Drops a banana peel behind the driving
                                        kart, waiting for a passerbyer to hit it
                                    </td>
                                </tr>
                                <tr>
                                    <td>Whole Cream Pie</td>
                                    <td>
                                        Throws a giant whole cream pie towards a
                                        leading toon. Splatters cream on the hit
                                        toons screen
                                    </td>
                                </tr>
                                <tr>
                                    <td>Turbo Boost</td>
                                    <td>
                                        Gives a boost of speed, allowing for
                                        larger lead or catch up
                                    </td>
                                </tr>
                                <tr>
                                    <td>Anvil</td>
                                    <td>
                                        Drops a giant anvil on the 1st place
                                        kart, causing them to come to a full
                                        stop
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Unlike practice races, battle races have payouts and
                            deposits. Finishing in a higher place will earn a
                            toon more tickets as a reward. Most trophies are
                            earned through toon battle races, and records can be
                            set during these races.
                        </p>
                        <h3>Grand Prix</h3>
                        <p>
                            Grand Prix races have the same rules as Toon Battle
                            races. But in these types of events, toons will
                            races through one of each{" "}
                            <a href="#tracks">track circuit</a> in a row
                            (Speedway, Rural, and Urban). For example, if the
                            first Grand Prix is on a Speedway track, the second
                            race will be on an Rural track and the last race
                            will be on a Urban track. These types of race events
                            is where a toon will earn sweeping trophies, meaning
                            one toon wins all three races in the series. Grand
                            Prix races are available on Mondays.
                        </p>
                        <h2 id="tracks">Race Tracks</h2>
                        <p>
                            There 6 total tracks to race on at Goofy Speedyway.
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Circuit</th>
                                    <th>Track Name</th>
                                    <th>Non-practice Deposit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Speedway</td>
                                    <td>
                                        Screwball Stadium
                                        <br />
                                        <br />
                                        Corkscrew Coliseum
                                    </td>
                                    <td>
                                        50
                                        <br />
                                        <br />
                                        75
                                    </td>
                                </tr>
                                <tr>
                                    <td>Rural</td>
                                    <td>
                                        Airborne Acres
                                        <br />
                                        <br />
                                        Rustic Raceway
                                    </td>
                                    <td>
                                        100
                                        <br />
                                        <br />
                                        150
                                    </td>
                                </tr>
                                <tr>
                                    <td>Urban</td>
                                    <td>
                                        City Circuit
                                        <br />
                                        <br />
                                        Blizzard Boulevard
                                    </td>
                                    <td>
                                        300
                                        <br />
                                        <br />
                                        400
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="trophies">Trophies</h2>
                        <p>
                            Here is the exciting part... There are 3 earnable
                            laff points through kart racing! How does one get
                            them? By earning trophies of course. There are 30
                            available racing trophies and for every 10 earned, a
                            laff point is earned. Sounds easy right? Well, I'll
                            let you make that judgement...
                        </p>
                        <h3>Speedway Race Circuit Trophies</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Trophy ID</th>
                                    <th>Trophy Name/Description</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1 Speedway Race Qualified</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10 Speedway Races Qualified</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>100 Speedway Races Qualified</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>1 Speedway Race Won</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>10 Speedway Races Won</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>100 Speedway Races Won</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Rural Race Circuit Trophies</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Trophy ID</th>
                                    <th>Trophy Name/Description</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4</td>
                                    <td>1 Rural Race Qualified</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>10 Rural Races Qualified</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>100 Rural Races Qualified</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>1 Rural Race Won</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>10 Rural Races Won</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>100 Rural Races Won</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Urban Race Circuit Trophies</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Trophy ID</th>
                                    <th>Trophy Name/Description</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7</td>
                                    <td>1 Urban Race Qualified</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>10 Urban Races Qualified</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>100 Urban Races Qualified</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>1 Urban Race Won</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>10 Urban Races Won</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>100 Urban Races Won</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Any Race Circuit Trophies</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Trophy ID</th>
                                    <th>Trophy Name/Description</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10</td>
                                    <td>100 Total Races Qualified</td>
                                    <td>Silver Cup</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>100 Total Races Won</td>
                                    <td>Silver Cup</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>1 Tournament Race Qualified</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>10 Tournament Races Qualified</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>100 Tournament Races Qualified</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>1 Tournament Race Won</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>25</td>
                                    <td>10 Tournament Races Won</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>100 Tournament Races Won</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>1 Tournament Race Swept</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>10 Tournament Races Swept</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>100 Tournament Races Swept</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>All Race Circuit Trophies</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Trophy ID</th>
                                    <th>Trophy Name</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>30</td>
                                    <td>Grand Touring</td>
                                    <td>Race all 12 courses at least once</td>
                                    <td>Silver Cup</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <div className="panel-nav">
                            <a href="#gs">Goofy Speedway</a>
                            <a href="#about">All About Racing</a>
                            <a href="#tracks">Race Tracks</a>
                            <a href="#trophies">Trophies</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Racing;
