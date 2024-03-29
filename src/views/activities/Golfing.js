import React from "react";

class Golfing extends React.Component {
    componentDidMount() {
        document.title = "Golfing | Spike's Rewritten Guide";
    }

    render() {
        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Golfing</h1>
                        <p>
                            Golfing is a fun, sometimes tedious, game to play by
                            yourself or with toon friends, and it is yet another
                            way to earn an additional 3 laff points for your
                            toon! Any toon at any level can go to Chip N' Dales
                            Golfing and put those putt-putt skills to play.
                        </p>
                        <div className="panel-nav">
                            <a href="#about">About Chip N' Dales Golf</a>
                            <a href="#courses">Golfing Courses</a>
                            <a href="#howtogolf">How to Golf</a>
                            <a href="#trophies">Trophies</a>
                        </div>
                        <h2 id="about">About Chip N' Dales Golf</h2>
                        <p>
                            Golfing in Toontown is very similar to an online
                            mini-golf game. Toons can play mini-golf over a
                            series of holes to earn laff boosts and golfing
                            trophies. Golfing can be played individually or with
                            additional toons, up to a capacity of four. Each
                            toon takes a turn until everyone gets the ball into
                            the hole or reached a limit of three shots over par.
                        </p>
                        <p>
                            So, you might be wondering how to get to Chip N'
                            Dales Golf course. This playground can be found
                            through a golf themed tunnel in Chip N' Dales Acorn
                            Acres (displayed left). To get to Chip N' Dales
                            Acorn Acres, there is a log tunnel near the pond in
                            Donald's Dock (circled, displayed right). Once
                            visited, you will have teleport access.
                        </p>
                        <div className="row row-images">
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 240 + "px" }}
                                    src="/images/chipndales_golfentrance.PNG"
                                    alt="Chip n' Dales golf course tunnel"
                                />
                            </div>
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 240 + "px" }}
                                    src="/images/Donalds_Dock_Map.jpg"
                                    alt="Donalds Dock map"
                                />
                            </div>
                        </div>
                        <h2 id="courses">Golfing Courses</h2>
                        <p>
                            There are 3 total golfing courses to play at Chip 'N
                            Dales Golf':
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Number of Holes</th>
                                    <th>Difficulty</th>
                                    <th>Kart Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Walk in the Par</td>
                                    <td>3</td>
                                    <td>Easy</td>
                                    <td>Green</td>
                                </tr>
                                <tr>
                                    <td>Holesome Fun</td>
                                    <td>6</td>
                                    <td>Medium</td>
                                    <td>Yellow</td>
                                </tr>
                                <tr>
                                    <td>The Hole Kit and Caboodle</td>
                                    <td>9</td>
                                    <td>Hard</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Each course randomly selects holes that will be
                            played in succession. At the end of a course, the
                            player with the lowest number of points will be the
                            winner, just like real mini-golf! Each golf course
                            can be accessed via the golfs karts located all
                            around the golfing playground, as shown below.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 245 + "px" }}
                            src="/images/golfholekarts.PNG"
                            alt="The hole kit and caboodle golf kart tunnels"
                        />
                        <h2 id="howtogolf">How to Golf</h2>
                        <p>
                            When starting a game of golf, the instructions and
                            controls will be displayed at the bottom of the
                            screen. The main controls are the left arrow key
                            (&#8592;), the right arrow key (&#8594;), and the
                            CTRL key. Upon starting each hole, a toon will be
                            set-up at the beginning of the hole, as shown below.
                            The objective is to take the least amount of
                            attempts as possible. Always in the corner of the
                            screen will be a pencil{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/golf_score_btn.PNG"
                                    alt="Golf score button"
                                />
                            </span>
                            . If clicked, the current scores for all holes
                            played for all golfers will be displayed.
                        </p>
                        <div className="row row-images">
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 200 + "px" }}
                                    src="/images/golfing-1.PNG"
                                    alt="Playing golf step 1"
                                />
                            </div>
                            <div className="column">
                                <img
                                    className="content-img"
                                    style={{ height: 200 + "px" }}
                                    src="/images/golfing-2.PNG"
                                    alt="Playing golf step 2"
                                />
                            </div>
                        </div>
                        <p>
                            To view golfing stats, records, and trophies earned,
                            head to the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/golf_tab.PNG"
                                    alt="Golfing book tab"
                                />
                            </span>{" "}
                            tab in the Shticker Book.
                        </p>
                        <h2 id="trophies">Trophies</h2>
                        <p>
                            Now we have reached the exciting part of golfing...
                            There are 3 total laff points that can be earned by
                            golfing! To get those laff boosts, the golfing
                            trophies must be earned! There are 30 total earnable
                            trophies and for each 10 earned, a laff boost is
                            rewarded. You think you are up for the challenge?
                        </p>
                        <h3>All Golf Course Trophies</h3>
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
                                    <td>4 Course Completed</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>40 Course Completed</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>400 Course Completed</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>1 Course Under Par</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>10 Courses Under Par</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>100 Courses Under Par</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>1 Hole in One</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>10 Holes in One</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>100 Holes in One</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>2 Eagle Shots</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>20 Eagle Shots</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>200 Eagle Shots</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>3 Birdie Shots</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>30 Birdie Shots</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>300 Birdie Shots</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>4 Par Shots</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>40 Par Shots</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>400 Par Shots</td>
                                    <td>Gold</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>6 Multiplayer Courses Completed</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>60 Multiplayer Courses Completed</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>21</td>
                                    <td>600 Multiplayer Courses Completed</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Walk in the Par Course Trophies</h3>
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
                                    <td>22</td>
                                    <td>1 Walk in the Par Win</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>23</td>
                                    <td>10 Walk in the Par Wins</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>24</td>
                                    <td>100 Walk in the Par Wins</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Holesome Fun Course Trophies</h3>
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
                                    <td>25</td>
                                    <td>1 Holesome Fun Win</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>10 Holesome Fun Wins</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>27</td>
                                    <td>100 Holesome Fun Wins</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>The Hole Kit and Kaboodle Course Trophies</h3>
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
                                    <td>28</td>
                                    <td>1 The Hole Kit and Kaboodle Win</td>
                                    <td>Bronze</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>10 The Hole Kit and Kaboodle Wins</td>
                                    <td>Silver</td>
                                </tr>
                                <tr>
                                    <td>30</td>
                                    <td>100 The Hole Kit and Kaboodle Wins</td>
                                    <td>Gold</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <div className="panel-nav">
                            <a href="#about">About Chip N' Dales Golf</a>
                            <a href="#courses">Golfing Courses</a>
                            <a href="#howtogolf">How to Golf</a>
                            <a href="#trophies">Trophies</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Golfing;
