import React from "react";
import "../../scss/list.scss";

class Species extends React.Component {
  render() {
    let tableHeader = (
      <>
        <tr>
          <th>Species</th>
          <th>Pond</th>
          <th>Rod</th>
          <th>Rarity</th>
          <th>
            <img src="/images/jellybean_jar.png" alt="Jellybeans" />
          </th>
        </tr>
      </>
    );

    return (
      <>
        <div id="animate" className="list">
          <div className="list-navigation">
            <a href="#balloon">Balloon Fish</a> |{" "}
            <a href="#jellyfish">Jellyfish</a> | <a href="#catfish">Cat Fish</a>{" "}
            | <a href="#clownfish">Clown Fish</a> |{" "}
            <a href="#frozen">Frozen Fish</a> | <a href="#starfish">Star Fish</a>{" "}
            | <a href="#holey">Holey Mackerel</a> |{" "}
            <a href="#dogfish">Dog Fish</a>| <a href="#devil">Devil Ray</a>
            <br />
            <a href="#eel">Amore Eel</a> | <a href="#shark">Nurse Shark</a> |{" "}
            <a href="#crab">King Crab</a> | <a href="#moonfish">Moon Fish</a> |{" "}
            <a href="#seahorse">Sea Horse</a> |{" "}
            <a href="#poolshark">Pool Shark</a> |{" "}
            <a href="#acuda">Bear Acuda</a> |{" "}
            <a href="#trout">Cutthroat Trout</a> |{" "}
            <a href="#piano">Piano Tuna</a>
          </div>
          <div className="filtering">
            <button name="species" className="active">
              By Fish
            </button>
            <button
              name="rod"
              type="button"
              onClick={() => {
                this.props.action(false, false);
              }}
            >
              By Rod
            </button>
            <button
              name="pond"
              type="button"
              onClick={() => {
                this.props.action(false, true);
              }}
            >
              By Pond
            </button>
          </div>
          <h2>
            <span id="balloon">Balloon Fish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/balloonfish.png"
              alt="Balloon fish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Balloon Fish</td>
                  <td>All Ponds</td>
                  <td>Twig</td>
                  <td>1</td>
                  <td>2 - 7</td>
                </tr>
                <tr>
                  <td>Hot Air Balloon Fish</td>
                  <td>
                    Toontown Central
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    4<br />
                    <br />5
                  </td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Weather Balloon Fish</td>
                  <td>
                    Punchline Place
                    <br />
                    <br />
                    The Brrrgh
                  </td>
                  <td>Twig</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>17- 19</td>
                </tr>
                <tr>
                  <td>Water Balloon Fish</td>
                  <td>
                    Silly Street
                    <br />
                    <br />
                    Daisy Gardens
                  </td>
                  <td>Twig</td>
                  <td>
                    3<br />
                    <br />4
                  </td>
                  <td>9 - 11</td>
                </tr>
                <tr>
                  <td>Red Balloon Fish</td>
                  <td>
                    Loopy Lane
                    <br />
                    <br />
                    Toontown Central
                  </td>
                  <td>Twig</td>
                  <td>
                    2<br />
                    <br />3
                  </td>
                  <td>5 - 7</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="jellyfish">Jellyfish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/jellyfish.png"
              alt="Jellyfish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Peanut Butter & Jellyfish</td>
                  <td>
                    Toontown Central
                    <br />
                    <br />
                    Estate
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    2<br />
                    <br />3<br />
                    <br />4
                  </td>
                  <td>5 - 8</td>
                </tr>
                <tr>
                  <td>Grape PB&J Fish</td>
                  <td>
                    The Brrrgh
                    <br />
                    <br />
                    Estate
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    3<br />
                    <br />4<br />
                    <br />5
                  </td>
                  <td>8 - 11</td>
                </tr>
                <tr>
                  <td>Crunchy PB&J Fish</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Twig</td>
                  <td>
                    4<br />
                    <br />5
                  </td>
                  <td>12 - 14</td>
                </tr>
                <tr>
                  <td>Strawberry PB&J Fish</td>
                  <td>
                    Donald's Dreamland
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Twig</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>16 - 19</td>
                </tr>
                <tr>
                  <td>Concord Grape PB&J Fish</td>
                  <td>
                    The Brrrgh
                    <br />
                    <br />
                    Donald's Dreamland
                  </td>
                  <td>Twig</td>
                  <td>10</td>
                  <td>44 - 46</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="catfish">Cat Fish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/catfish.png"
              alt="Catfish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Cat Fish</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    1<br />
                    <br />2
                  </td>
                  <td>3 - 7</td>
                </tr>
                <tr>
                  <td>Siamese Cat Fish</td>
                  <td>
                    Elm Street
                    <br />
                    <br />
                    Daisy Gardens
                  </td>
                  <td>Twig</td>
                  <td>
                    9<br />
                    <br />
                    10
                  </td>
                  <td>39 - 40</td>
                </tr>
                <tr>
                  <td>Alley Cat Fish</td>
                  <td>Lullaby Lane</td>
                  <td>Bamboo</td>
                  <td>4</td>
                  <td>15 - 19</td>
                </tr>
                <tr>
                  <td>Tabby Cat Fish</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Twig</td>
                  <td>
                    3<br />
                    <br />4
                  </td>
                  <td>6 - 11</td>
                </tr>
                <tr>
                  <td>Tom Cat Fish</td>
                  <td>
                    Donald's Dreamland
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Bamboo</td>
                  <td>
                    2<br />
                    <br />3
                  </td>
                  <td>8 - 12</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="clownfish">Clown Fish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/clownfish.png"
              alt="Clown fish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Clown Fish</td>
                  <td>
                    Toontown Central
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    1<br />
                    <br />2
                  </td>
                  <td>3 - 7</td>
                </tr>
                <tr>
                  <td>Sad Clown Fish</td>
                  <td>
                    Toontown Central
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    4<br />
                    <br />5
                  </td>
                  <td>13 - 17</td>
                </tr>
                <tr>
                  <td>Party Clown Fish</td>
                  <td>
                    Toontown Central
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    2<br />
                    <br />3
                  </td>
                  <td>6 - 10</td>
                </tr>
                <tr>
                  <td>Circus Clown Fish</td>
                  <td>
                    Toontown Central
                    <br />
                    <br />
                    Minnie's Melodyland
                  </td>
                  <td>Twig</td>
                  <td>
                    6<br />
                    <br />7
                  </td>
                  <td>21 - 27</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="frozen">Frozen Fish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/frozenfish.png"
              alt="Frozen fish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Frozen Fish</td>
                  <td>The Brrrgh</td>
                  <td>Bamboo</td>
                  <td>1</td>
                  <td>7 - 10</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="starfish">Star Fish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/starfish.png"
              alt="Star fish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Star Fish</td>
                  <td>All Ponds</td>
                  <td>Twig</td>
                  <td>1</td>
                  <td>2 - 8</td>
                </tr>
                <tr>
                  <td>Five Star Fish</td>
                  <td>
                    Minnie's Melodyland
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    2<br />
                    <br />3
                  </td>
                  <td>5 - 8</td>
                </tr>
                <tr>
                  <td>Rock Star Fish</td>
                  <td>
                    Minnie's Melodyland
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Bamboo</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>19 - 22</td>
                </tr>
                <tr>
                  <td>Shining Star Fish</td>
                  <td>
                    Estate
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    7<br />
                    <br />8
                  </td>
                  <td>26 - 32</td>
                </tr>
                <tr>
                  <td>All Star Fish</td>
                  <td>All Ponds</td>
                  <td>Twig</td>
                  <td>10</td>
                  <td>43 - 46</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="holey">Holey Mackerel</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/holeymackerel.png"
              alt="Holey Mackerel"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Holey Mackerel</td>
                  <td>
                    Estate
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Bamboo</td>
                  <td>
                    9<br />
                    <br />
                    10
                  </td>
                  <td>41 - 43</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="dogfish">Dog Fish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/dog.png"
              alt="Dog fish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Dog Fish</td>
                  <td>
                    Donald's Dock
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Bamboo</td>
                  <td>
                    1<br />
                    <br />2
                  </td>
                  <td>7 - 13</td>
                </tr>
                <tr>
                  <td>Bull Dog Fish</td>
                  <td>
                    Donald's Dock
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Gold</td>
                  <td>
                    6<br />
                    <br />7
                  </td>
                  <td>34 - 35</td>
                </tr>
                <tr>
                  <td>Hot Dog Fish</td>
                  <td>
                    Donald's Dock
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Twig</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>16 - 19</td>
                </tr>
                <tr>
                  <td>Dalmatian Dog Fish</td>
                  <td>
                    Donald's Dock
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Twig</td>
                  <td>
                    4<br />
                    <br />5
                  </td>
                  <td>13 - 16</td>
                </tr>
                <tr>
                  <td>Puppy Dog Fish</td>
                  <td>
                    Donald's Dock
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    2<br />
                    <br />3
                  </td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="devil">Devil Ray</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/devilray.png"
              alt="Devil Ray"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Devil Ray</td>
                  <td>All Ponds</td>
                  <td>Twig</td>
                  <td>10</td>
                  <td>44 - 58</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="eel">Amore Eel</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/amoreeel.png"
              alt="Amore eel"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Amore Eel</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    Estate
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    1<br />
                    <br />2<br />
                    <br />3
                  </td>
                  <td>3 - 6</td>
                </tr>
                <tr>
                  <td>Electric Amore Eel</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    Estate
                  </td>
                  <td>Twig</td>
                  <td>
                    3<br />
                    <br />4
                  </td>
                  <td>9 - 11</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="shark">Nurse Shark</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/nurseshark.png"
              alt="Nurse Shark"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Nurse Shark</td>
                  <td>
                    Minnie's Melodyland
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>18 - 24</td>
                </tr>
                <tr>
                  <td>Clara Nurse Shark</td>
                  <td>
                    Baritone Boulevard
                    <br />
                    <br />
                    Minnie's Melodyland
                  </td>
                  <td>Twig</td>
                  <td>
                    7<br />
                    <br />8
                  </td>
                  <td>28 - 37</td>
                </tr>
                <tr>
                  <td>Florence Nurse Shark</td>
                  <td>
                    Tenor Terrace
                    <br />
                    <br />
                    Minnie's Melodyland
                  </td>
                  <td>Twig</td>
                  <td>
                    8<br />
                    <br />9
                  </td>
                  <td>33 - 39</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="crab">King Crab</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/kingcrab.png"
              alt="King crab"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>King Crab</td>
                  <td>
                    Donald's Dock
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    3<br />
                    <br />4
                  </td>
                  <td>5 - 10</td>
                </tr>
                <tr>
                  <td>Alaskan King Crab</td>
                  <td>The Brrrgh</td>
                  <td>Bamboo</td>
                  <td>7</td>
                  <td>29 - 31</td>
                </tr>
                <tr>
                  <td>Old King Crab</td>
                  <td>Lighthouse Lane</td>
                  <td>Twig</td>
                  <td>8</td>
                  <td>33 - 36</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="moonfish">Moon Fish</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/moonfish.png"
              alt="Moon fish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Moon Fish</td>
                  <td>Donald's Dreamland</td>
                  <td>Twig</td>
                  <td>1</td>
                  <td>4 - 6</td>
                </tr>
                <tr>
                  <td>Full Moon Fish</td>
                  <td>Donald's Dreamland</td>
                  <td>Steel</td>
                  <td>10</td>
                  <td>53 - 56</td>
                </tr>
                <tr>
                  <td>Crescent Moon Fish</td>
                  <td>Lullaby Lane</td>
                  <td>Twig</td>
                  <td>6</td>
                  <td>21 - 24</td>
                </tr>
                <tr>
                  <td>New Moon Fish</td>
                  <td>Donald's Dreamland</td>
                  <td>Twig</td>
                  <td>3</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Half Moon Fish</td>
                  <td>Lullaby Lane</td>
                  <td>Bamboo</td>
                  <td>8</td>
                  <td>36 - 37</td>
                </tr>
                <tr>
                  <td>Harvest Moon Fish</td>
                  <td>
                    Donald's Dreamland
                    <br />
                    <br />
                    Daisy Gardens
                  </td>
                  <td>Hardwood</td>
                  <td>
                    4<br />
                    <br />5
                  </td>
                  <td>18 - 21</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="seahorse">Sea Horse</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/seahorse.png"
              alt="Sea horse"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Sea Horse</td>
                  <td>
                    Estate
                    <br />
                    <br />
                    Daisy Gardens
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Hardwood</td>
                  <td>
                    2<br />
                    <br />3<br />
                    <br />4
                  </td>
                  <td>13 - 19</td>
                </tr>
                <tr>
                  <td>Rocking Sea Horse</td>
                  <td>
                    Estate
                    <br />
                    <br />
                    Daisy Gardens
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Steel</td>
                  <td>
                    3<br />
                    <br />4<br />
                    <br />5
                  </td>
                  <td>18 - 21</td>
                </tr>
                <tr>
                  <td>Clydesdale Sea Horse</td>
                  <td>
                    Estate
                    <br />
                    <br />
                    Daisy Gardens
                  </td>
                  <td>Steel</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>26 - 30</td>
                </tr>
                <tr>
                  <td>Arabian Sea Horse</td>
                  <td>
                    Estate
                    <br />
                    <br />
                    Daisy Gardens
                  </td>
                  <td>Steel</td>
                  <td>
                    7<br />
                    <br />8
                  </td>
                  <td>36 - 40</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="poolshark">Pool Shark</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/poolshark.png"
              alt="Pool shark"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Pool Shark</td>
                  <td>All Ponds</td>
                  <td>Hardwood</td>
                  <td>3</td>
                  <td>14 - 15</td>
                </tr>
                <tr>
                  <td>Kiddie Pool Shark</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    Donald's Dock
                  </td>
                  <td>Bamboo</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>21 - 24</td>
                </tr>
                <tr>
                  <td>Swimming Pool Shark</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    Donald's Dock
                  </td>
                  <td>Bamboo</td>
                  <td>
                    6<br />
                    <br />7
                  </td>
                  <td>26 - 29</td>
                </tr>
                <tr>
                  <td>Olympic Pool Shark</td>
                  <td>
                    Daisy Gardens
                    <br />
                    <br />
                    Donald's Dock
                  </td>
                  <td>Bamboo</td>
                  <td>
                    7<br />
                    <br />8
                  </td>
                  <td>31 - 37</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="acuda">Bear Acuda</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/bearacuda.png"
              alt="Bear acuda"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Brown Bear Acuda</td>
                  <td>The Brrrgh</td>
                  <td>Hardwood</td>
                  <td>2</td>
                  <td>11 - 18</td>
                </tr>
                <tr>
                  <td>Black Bear Acuda</td>
                  <td>The Brrrgh</td>
                  <td>Hardwood</td>
                  <td>3</td>
                  <td>15 - 21</td>
                </tr>
                <tr>
                  <td>Koala Bear Acuda</td>
                  <td>The Brrrgh</td>
                  <td>Hardwood</td>
                  <td>4</td>
                  <td>18 - 26</td>
                </tr>
                <tr>
                  <td>Honey Bear Acuda</td>
                  <td>The Brrrgh</td>
                  <td>Hardwood</td>
                  <td>5</td>
                  <td>23 - 29</td>
                </tr>
                <tr>
                  <td>Polar Bear Acuda</td>
                  <td>The Brrrgh</td>
                  <td>Hardwood</td>
                  <td>6</td>
                  <td>29 - 35</td>
                </tr>
                <tr>
                  <td>Panda Bear Acuda</td>
                  <td>The Brrrgh</td>
                  <td>Steel</td>
                  <td>7</td>
                  <td>36 - 40</td>
                </tr>
                <tr>
                  <td>Kodiac Bear Acuda</td>
                  <td>
                    Sleet Street
                    <br />
                    <br />
                    The Brrrgh
                  </td>
                  <td>Steel</td>
                  <td>
                    8<br />
                    <br />9
                  </td>
                  <td>41 - 45</td>
                </tr>
                <tr>
                  <td>Grizzly Bear Acuda</td>
                  <td>
                    The Brrrgh
                    <br />
                    <br />
                    Walrus Way
                  </td>
                  <td>Steel</td>
                  <td>10</td>
                  <td>55 - 58</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="trout">Cutthroat Trout</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/cuttthroat.png"
              alt="Cutthtoat trout"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Cutthroat Trout</td>
                  <td>
                    Donald's Dock
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Twig</td>
                  <td>
                    2<br />
                    <br />3
                  </td>
                  <td>5 - 11</td>
                </tr>
                <tr>
                  <td>Captain Cutthroat Trout</td>
                  <td>
                    Barnacle Boulevard
                    <br />
                    <br />
                    Donald's Dock
                  </td>
                  <td>Twig</td>
                  <td>
                    6<br />
                    <br />7
                  </td>
                  <td>23 - 27</td>
                </tr>
                <tr>
                  <td>Scurvy Cutthroat Trout</td>
                  <td>
                    Seaweed Street
                    <br />
                    <br />
                    Donald's Dock
                  </td>
                  <td>Twig</td>
                  <td>
                    7<br />
                    <br />8
                  </td>
                  <td>28 - 32</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="piano">Piano Tuna</span>
          </h2>
          <ul>
            <img
              className="list-fish"
              src="/images/fish/pianofish.png"
              alt="Piano fish"
            />
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>Piano Tuna</td>
                  <td>
                    Minnie's Melodyland
                    <br />
                    <br />
                    All Ponds
                  </td>
                  <td>Steel</td>
                  <td>
                    5<br />
                    <br />6
                  </td>
                  <td>25 - 28</td>
                </tr>
                <tr>
                  <td>Grand Piano Tuna</td>
                  <td>
                    Minnie's Melodyland
                    <br />
                    <br />
                    Alto Avenue
                  </td>
                  <td>Steel</td>
                  <td>10</td>
                  <td>55 - 59</td>
                </tr>
                <tr>
                  <td>Baby Grand Piano Tuna</td>
                  <td>
                    Tenor Terrace
                    <br />
                    <br />
                    Minnie's Melodyland
                  </td>
                  <td>Hardwood</td>
                  <td>
                    9<br />
                    <br />
                    10
                  </td>
                  <td>46 - 50</td>
                </tr>
                <tr>
                  <td>Upright Piano Tuna</td>
                  <td>Minnie's Melodyland</td>
                  <td>Hardwood</td>
                  <td>6</td>
                  <td>29 - 34</td>
                </tr>
                <tr>
                  <td>Player Piano Tuna</td>
                  <td>Minnie's Melodyland</td>
                  <td>Hardwood</td>
                  <td>7</td>
                  <td>29 - 39</td>
                </tr>
              </tbody>
            </table>
          </ul>
        </div>
      </>
    );
  }
}

export default Species;
