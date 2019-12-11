import React from "react";
import { Link } from "react-router-dom";

class Bossbot extends React.Component {
  componentDidMount(){
    document.title = "Bossbots | Spike's Rewritten Guide";
  }

  render() {
    return (
      <>
        <div className="panel">
          <div className="panel-content">
            <h1>Bossbots</h1>
            <p>
              Bossbots are one of the four tiers of cogs found in Toontown. This
              group represents the management of the cogs, being the top of the
              corporate ladder. They are the top ranked cogs. The Bossbot
              Headquarters is the home of the Bossbots. The boss of all Bossbots
              is the Chief Executive Officer, which toons can battle in Bossbot
              HQ.
            </p>
            <img
              src="/images/cogs/BossbotHD.png"
              className="badge"
              alt="Bossbot badge"
            />
            <p>
              Bossbots can be identified by their cog symbol, which is
              light-brown in color and has a striped tie symbol on it (displayed
              to the right).
            </p>
            <div className="panel-nav">
              <a href="#list">List of Bossbots</a>
              <a href="#where">Where to Find Bossbots</a>
              <a href="#hq">Bossbot HQ</a>
              <a href="#suit">Building a Bossbot Disguise</a>
              <a href="#pinkslip">Pink Slips</a>
            </div>
            <h2 id="list">List of Bossbots</h2>
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
                  <td>Flunky</td>
                  <td>1 - 5</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Flunky2.png"
                      alt="Flunky"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Pencil Pusher</td>
                  <td>2 - 6</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Pencilpusher2.png"
                      alt="Pencil Pusher"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Yesman</td>
                  <td>3 - 7</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Yesman2.png"
                      alt="Yesman"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Micromanager</td>
                  <td>4 - 8</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Micromanager2.png"
                      alt="Micromanager"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Downsizer</td>
                  <td>5 - 9</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Downsizer2.png"
                      alt="Downsizer"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Head Hunter</td>
                  <td>6 - 10</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Headhunter2.png"
                      alt="Headhunter"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Corporate Raider</td>
                  <td>7 - 11</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Corporate_Raider2.png"
                      alt="Corporate Raider"
                    />
                  </td>
                </tr>
                <tr>
                  <td>The Big Cheese</td>
                  <td>8 - 12</td>
                  <td>
                    <img
                      src="/images/cogs/bossbots/Thebigcheese2.png"
                      alt="The Big Cheese"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 id="where">Where to Find Bossbots</h2>
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
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Barnacle Boulevard</td>
                  <td>Donald's Dock</td>
                  <td>90%</td>
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
                  <td>Maple Street</td>
                  <td>Daisy Gardens</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Tenor Terrace</td>
                  <td>Minnie's Melodyland</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>Sleet Street</td>
                  <td>The Brrrgh</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Walrus Way</td>
                  <td>The Brrrgh</td>
                  <td>90%</td>
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
                  <td>Bossbot Headquarters</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
            <h2 id="hq">Bossbot HQ</h2>
            <p>
              Bossbot Headquarters, or often referred to as Bossbot HQ, is the
              base of all Bossbot operations. The entrance is located in{" "}
              <Link to="/golfing">Chip N' Dales MiniGolf Playground</Link>. You
              surely cannot miss the dark and gloomy tunnel in the minigolf
              playground! When visiting this headquarters, toons can access the
              Clubhouse and Cog Golf Courses. There is the Executive Office
              Tower, however, this is not accessible yet!
            </p>
            <img
              className="content-img"
              style={{ height: 310 + "px" }}
              src="/images/cogs/bossbots/bbhq.PNG"
              alt="Bossbot HQ Courtyard"
            />
            <h3 id="coggolf">Cog Golf Courses</h3>
            <p>
              A Cog Golf Course is a facility located in Bossbot Headquarters.
              Toons can enter these golf course by sitting on the golf karts
              found spread across the Courtyard of the headquarters.
            </p>
            <img
              className="content-img"
              style={{ height: 260 + "px" }}
              src="/images/cogs/bossbots/coggolfcourse_six.PNG"
              alt="Middle six golf course entrance"
            />
            <p>
              There are three different tiers of golf courses a toon can enter:
              The Front Three, The Middle Six (entrance shown above), and The
              Back Nine (the longest facility in Toontown). The shortest golf
              course is The Front Three while the longest golf course is The
              Back Nine. Toons can form boarding groups with others toon to take
              on an golf course of their choosing, or they can hop into a golf
              kart with other toons!
            </p>
            <h4>Bossbot Golf Course Statistics</h4>
            <table>
              <thead>
                <tr>
                  <th>Golf Course</th>
                  <th>Minimum Laff Requirement</th>
                  <th># of Holes</th>
                  <th># of Cogs</th>
                  <th>Stock Options Earned</th>
                  <th>Gag XP Multiplier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The Front Three</td>
                  <td>0</td>
                  <td>3</td>
                  <td>24</td>
                  <td>764</td>
                  <td>4x</td>
                </tr>
                <tr>
                  <td>The Middle Six</td>
                  <td>95</td>
                  <td>6</td>
                  <td>48</td>
                  <td>1874</td>
                  <td>5x</td>
                </tr>
                <tr>
                  <td>The Back Nine</td>
                  <td>100</td>
                  <td>9</td>
                  <td>72</td>
                  <td>3350</td>
                  <td>6x</td>
                </tr>
              </tbody>
            </table>
            <p>
              The cogs in each office range from level 10 to level 11 Version
              2.0, with the Club President being a level 11 Version 2.0. The
              cogs in a golf course are Head Hunters, Corporate Raiders, and The
              Big Cheeses. This is the only Toontown facility where Version 2.0
              cogs can be found. The main purpose of completing Cog Golf Courses
              is to collect stock options to earn a promotion on a Bossbot suit.
              The Front Three is typically used by lower level Bossbot suits,
              The Middle Six is typically used by mid-level Bossbot suits such
              as the Micromanager, and The Back Nine is typically used by higher
              level Bossbot suits. Click <a href="#suit">here</a> to learn how
              to build a Bossbot suit.
            </p>
            <h4>Bossbot Golf Course Obstacles</h4>
            <p>
              Unlike the Cashbot Mints or Lawbot District Attorney Offices, the
              Cog Golf Courses have unique room plans. Throughout the course,
              toons will encounter a select few obstacles. These obstacles must
              be overcome to unlock a door or reach the next cog battle.
            </p>
            <table>
              <thead>
                <tr>
                  <th style={{ width: 25 + "%" }}>Obstacle</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mole Stomp</td>
                  <td>
                    Toons will encounter a field with a grid of mole holes on
                    the ground. The objective is the stomp all the red moles
                    before time runs out. Tan moles will launch a toon in the
                    air if touched. Upon failure, toons will lose 20 laff points
                    and time will restart.
                  </td>
                </tr>
                <tr>
                  <td>Hedge Mazes</td>
                  <td>
                    There are a few different maze patterns that will be
                    randomly given. Toons must race through the maze for a laff
                    bonus. If a toon fails to make their way through before the
                    time runs out, they will lose 20 laff points and be
                    teleported to the finish.
                  </td>
                </tr>
                <tr>
                  <td>Cog Golf</td>
                  <td>
                    When reaching the golf hole, each toon will have their own
                    board with a few rows of different colored golf balls. A
                    random colored golf ball will be given at each shot and
                    toons must destroy the colored golf balls by matching three
                    or more of the corresponding color (aim and click to shoot).
                    Upon successful completion, the toons laff meters and gags
                    are partially refilled. Upon failure, toons will lose 20
                    laff points but can continue anyways.
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>The Chief Executive Officer</h3>
            <p>
              The Chief Executive Officer, otherwise known as the C.E.O., is the
              boss of the Bossbots. He lives in the Bossbot Clubhouse in Bossbot
              HQ.
            </p>
            <img
              className="content-img"
              style={{ height: 235 + "px", borderRadius: 0 }}
              src="/images/cogs/bossbots/Chief_Executive_Officer.png"
              alt="Chief Executive Officer"
            />
            <p>
              Once a toon has a Bossbot suit disguise and has earned a
              promotion, they can fight the C.E.O. To access the C.E.O. battle,
              a toon must enter the Bossbot Clubhouse that is located in the
              back of the headquarters. The entrances is eery and spooky in
              appearance (shown below).
            </p>
            <img
              className="content-img"
              style={{ height: 250 + "px" }}
              src="/images/cogs/bossbots/clubhouse.PNG"
              alt="Bossbot HQ Clubhouse entrance"
            />
            <p>
              A toon can enter this battle with a maximum of 7 other toons. Once
              all participating toons have gone up the elevator, toons will find
              themselves in a kitchen used to prepare food for the C.E.O. Toons
              will be greeted by Good ol' Gil Giggles with two Version 2.0 Cog
              battles on either side of the kitchen. Version 2.0 cogs consist of
              a cog suit and a skelecog, upon intial destruction, a skelecog
              will takes the cogs place and continue to battle. Toons must
              battle these cogs, which represent Bossbot cog waiters in their
              white suits, until they are all defeated. Proceeding these
              battles, toons will enter the dining room wearing new waiter cog
              disguises. Toons must feed as many cogs as possible with three oil
              cans in 5 minutes. Once the 5 minutes is up, the C.E.O. will
              finally realize the cog waiters are actually toons! Toons
              disguises will be removed and the remaining cogs from the previous
              round (if any are left) will engage in battle. Finally, once those
              remaining cogs are defeated, toons will fight the C.E.O. himself
              by harming him with seltzer water and slowing him down with golf
              balls. Once the C.E.O. is defeated and shamefully turned into a
              Flunky, toons will be rewarded one or more{" "}
              <a href="#pinkslip">pink slips</a>.
            </p>
            <p>~C.E.O. walkthrough video soon to come!~</p>
            <h2 id="suit">Building a Bossbot Disguise</h2>
            <p>
              To fight the Chief Executive Officer, a toon must build a Bossbot
              suit disguise and be ready for a promotion. There are 17 total cog
              suit parts to collect. To get all of these parts, a toon must
              first complete building a <Link to="/lawbots">Lawbot</Link>{" "}
              disguise. Then, toons must complete toontasks given by Shep Ahoy,
              one task for 16 cog disguise parts. The 17th part will be rewarded
              by Flippy in Toontown Central.
            </p>
            <p>
              Tasks given by Shep Ahoy will require toons to defeat particular
              cogs. The places to find these cogs are not specific.
            </p>
            <ol>
              <li>Defeat a Flunky (Reward: Upper Left Leg)</li>
              <li>Defeat a Pencil Pusher (Reward: Lower Left Leg)</li>
              <li>Defeat a Yesman (Reward: Left Foot)</li>
              <li>Defeat a Micromanager (Reward: Upper Right Leg)</li>
              <li>Defeat a Downsizer (Reward: Lower Right Leg)</li>
              <li>Defeat a Head Hunter (Reward: Right Foot)</li>
              <li>Defeat a Corporate Raider (Reward: Left Shoulder)</li>
              <li>Defeat a The Big Cheese (Reward: Right Shoulder)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Chest)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Health Meter)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Pelvis)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Upper Left Arm)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Lower Left Arm)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Left Hand)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Upper Right Arm)</li>
              <li>Defeat a Version 2.0 Cog (Reward: Lower Right Arm)</li>
              <li>
                Visit Flippy at Toon Hall in Toontown Central (Reward: Right
                Hand)
              </li>
            </ol>
            <p>
              Ranking up a cog suit works similarly to how cog levels work. A
              toon starts out as a level 1 Flunky. As a toon continues to defeat
              the Chief Executive Officer, their cog suit will continue to level
              up. For example, to a level 2 Flunky after defeating one Chief
              Executive Officer. Would if a toon is currently a level 5 Flunky,
              there is no level 6 Flunky to promote to! Good point! A toon's cog
              suit will then upgrade to a level 2 Pencil Pusher.
            </p>
            <p>
              After defeating the Chief Executive Officer and leveling up a
              suit, a promotion will need to be earned each time. To earn a
              promotion, a toon needs to collect a certain amount of stock
              options. The higher level suit, the more stock options needed.
              Stock options can be collected by defeating Bossbots. Stock
              options will be rewarded at the end of a battle in the same way
              gag experience is earned. The most efficient way to earn stock
              options is by completing{" "}
              <a href="#coggolf">Bossbot Golf Courses</a>.
            </p>
            <p>
              What happens once a toon reaches a level 12 The Big Cheese suit? A
              toon can continue to rank up their suit until they reach level 50,
              the maxed level. Upon reaching level 50, a toon will no longer
              need to collect stock options to fight the Chief Executive
              Officer. As a toon reaches level 15, 20, 30, 40, and 50, they
              receive a laff point as a reward!
            </p>
            <p>
              To view cog suit information, go to the Cog Disguise page by
              clicking the{" "}
              <span>
                <img
                  className="book-tab"
                  src="/images/cog_disguise_tab.PNG"
                  alt="Cog disguise book tab"
                />
              </span>{" "}
              tab in the Shticker Book.
            </p>
            <h2 id="pinkslip">Pink Slips</h2>
            <p>
              A pink slip, also known as a "fire", is a one time use reward
              received after successfully defeating the Chief Executive Officer.
              Toons can use pink slips to fire a chosen cog out of a cannon,
              shooting them out of the current battle. The damage towards the
              cog when using a pink slip is the same as their total health, so
              once they are fired, they never come back. How handy! If used
              against a Version 2.0 cog, it will destroy both the outer suit and
              its inner Skelecog.
            </p>
            <p>
              The amount of pink slips rewarded is randomized between one to
              five, depending on the toon tier system in the battle. In other
              words, the amount of pinks slips is determined by the average
              level of cog disguises, where a cog level is the number of
              promotions a toon has earned (i.e. A level 3 Yesman has a value of
              11).
            </p>
            <p>
              Toons can see how many pink slips they have in the Gag section{" "}
              <span>
                <img
                  className="book-tab"
                  src="/images/gags_tab.PNG"
                  alt="Gags book tab"
                />
              </span>{" "}
              of the Shticker Book, right under how many gags they have in
              inventory. A toon can hold up to 255 pink slips at once.
            </p>
            <img
              className="content-img"
              style={{ height: 150 + "px" }}
              src="/images/pink_slip_amt.PNG"
              alt="Pink slip inventory example"
            />
            <p>
              To use a pink slip during any cog battle, click the{" "}
              <span>
                <img
                  className="book-tab"
                  src="/images/fire_button.PNG"
                  alt="Fire button"
                />
              </span>{" "}
              button to the left of the gag choice menu. Then, choose which cog
              to fire by selecting the arrow pointing to that cog. The pink slip
              takes the highest priority in a cog battle, meaning it executes
              before all gag tracks and SOS calls.
            </p>
            <img
              className="content-img"
              style={{ height: 160 + "px" }}
              src="/images/pinkslip_use.PNG"
              alt="Pink slip cog chooser"
            />
            <br />
            <br />
            <div className="panel-nav">
              <a href="#list">List of Bossbots</a>
              <a href="#where">Where to Find Bossbots</a>
              <a href="#hq">Bossbot HQ</a>
              <a href="#suit">Building a Bossbot Disguise</a>
              <a href="#pinkslip">Pink Slips</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bossbot;
