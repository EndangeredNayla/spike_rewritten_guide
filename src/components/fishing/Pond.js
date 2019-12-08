import React from "react";
import "../../scss/list.scss";

class Pond extends React.Component {
  render() {
    let tableHeader = (
      <>
        <tr>
          <th>Fish Type</th>
          <th>Fish Species</th>
          <th>Rarity</th>
        </tr>
      </>
    );

    return (
      <>
        <div id="animate" className="list">
          <div className="list-navigation">
            <a href="#allponds">All Ponds</a> | <a href="#estate">Estate</a> |{" "}
            <a href="#ttc">Toontown Central</a> |{" "}
            <a href="#dock">Donald's Dock</a> | <a href="#dg">Daisy Gardens</a>{" "}
            | <a href="#minnies">Minnie's Melodyland</a> |{" "}
            <a href="#brrrgh">The Brrrgh</a> |{" "}
            <a href="#dreamland">Donald's Dreamland</a>
          </div>
          <div className="filtering">
            <button
              name="species"
              type="button"
              onClick={() => {
                this.props.action(true, false);
              }}
            >
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
            <button name="pond" className="active">
              By Pond
            </button>
          </div>
          <h2>
            <span id="allponds">All Ponds</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/balloonfish.png"
                      alt="Balloon fish"
                    />
                    <span>Balloon Fish</span>
                  </td>
                  <td>
                    Balloon Fish
                    <br />
                    <br />
                    Hot Air Balloon Fish
                  </td>
                  <td>
                    1<br />
                    <br />4
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/jellyfish.png" alt="Jellyfish" />
                    <span>Jellyfish</span>
                  </td>
                  <td>
                    Peanut Butter & Jellyfish
                    <br />
                    <br />
                    Grape PB&J Fish
                  </td>
                  <td>
                    4<br />
                    <br />5
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Cat fish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>Cat Fish</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/clownfish.png" alt="Clown Fish" />
                    <span>Clown Fish</span>
                  </td>
                  <td>
                    Clown Fish
                    <br />
                    <br />
                    Sad Clown Fish
                    <br />
                    <br />
                    Party Clown Fish
                  </td>
                  <td>
                    2<br />
                    <br />5<br />
                    <br />3
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/starfish.png" alt="Star Fish" />
                    <span>Star Fish</span>
                  </td>
                  <td>
                    Star Fish
                    <br />
                    <br />
                    Five Star Fish
                    <br />
                    <br />
                    Rock Star Fish
                    <br />
                    <br />
                    Shining Star Fish
                    <br />
                    <br />
                    All Star Fish
                  </td>
                  <td>
                    1<br />
                    <br />3<br />
                    <br />6<br />
                    <br />8<br />
                    <br />
                    10
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/fish/holeymackerel.png"
                      alt="Holey Mackerel"
                    />
                    <span>Holey Mackerel</span>
                  </td>
                  <td>Holey Mackerel</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/dog.png" alt="Dog Fish" />
                    <span>Dog Fish</span>
                  </td>
                  <td>
                    Dog Fish
                    <br />
                    <br />
                    Puppy Dog Fish
                  </td>
                  <td>
                    2<br />
                    <br />3
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/devilray.png" alt="Devil Ray" />
                    <span>Devil Ray</span>
                  </td>
                  <td>Devil Ray</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/amoreeel.png" alt="Amore Eel" />
                    <span>Amore Eel</span>
                  </td>
                  <td>Amore Eel</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/nurseshark.png" alt="Nurse Shark" />
                    <span>Nurse Shark</span>
                  </td>
                  <td>Nurse Shark</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/kingcrab.png" alt="King Crab" />
                    <span>King Crab</span>
                  </td>
                  <td>King Crab</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/seahorse.png" alt="Sea Horse" />
                    <span>Sea Horse</span>
                  </td>
                  <td>
                    Sea Horse
                    <br />
                    <br />
                    Rocking Sea Horse
                  </td>
                  <td>
                    4<br />
                    <br />5
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/poolshark.png" alt="Pool Shark" />
                    <span>Pool Shark</span>
                  </td>
                  <td>Pool Shark</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/fish/cuttthroat.png"
                      alt="Cuttthroat Trout"
                    />
                    <span>Cutthroat Trout</span>
                  </td>
                  <td>Cutthroat Trout</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/pianofish.png" alt="Piano Fish" />
                    <span>Piano Tuna</span>
                  </td>
                  <td>Piano Tuna</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="estate">Estate</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/jellyfish.png" alt="Jellyfish" />
                    <span>Jellyfish</span>
                  </td>
                  <td>
                    Peanut Butter & Jellyfish
                    <br />
                    <br />
                    Grape PB&J Fish
                    <br />
                    <br />
                    Crunchy PB&J Fish
                    <br />
                    <br />
                    Strawberry PB&J Fish
                  </td>
                  <td>
                    3<br />
                    <br />4<br />
                    <br />5<br />
                    <br />6
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Cat fish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>
                    Tabby Cat Fish
                    <br />
                    <br />
                    Tom Cat Fish
                  </td>
                  <td>
                    4<br />
                    <br />3
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/starfish.png" alt="Star Fish" />
                    <span>Star Fish</span>
                  </td>
                  <td>Shining Star Fish</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/fish/holeymackerel.png"
                      alt="Holey Mackerel"
                    />
                    <span>Holey Mackerel</span>
                  </td>
                  <td>Holey Mackerel</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/dog.png" alt="Dog Fish" />
                    <span>Dog Fish</span>
                  </td>
                  <td>
                    Bull Dog Fish
                    <br />
                    <br />
                    Hot Dog Fish
                    <br />
                    <br />
                    Dalmatian Dog Fish
                  </td>
                  <td>
                    7<br />
                    <br />6<br />
                    <br />5
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/amoreeel.png" alt="Amore Eel" />
                    <span>Amore Eel</span>
                  </td>
                  <td>
                    Amore Eel
                    <br />
                    <br />
                    Electric Amore Eel
                  </td>
                  <td>
                    2<br />
                    <br />4
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/seahorse.png" alt="Sea Horse" />
                    <span>Sea Horse</span>
                  </td>
                  <td>
                    Sea Horse
                    <br />
                    <br />
                    Rocking Sea Horse
                    <br />
                    <br />
                    Clydesdale Sea Horse
                    <br />
                    <br />
                    Arabian Sea Horse
                  </td>
                  <td>
                    2<br />
                    <br />3<br />
                    <br />5<br />
                    <br />7
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="ttc">Toontown Central</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/balloonfish.png"
                      alt="Balloon fish"
                    />
                    <span>Balloon Fish</span>
                  </td>
                  <td>
                    Hot Air Balloon Fish
                    <br />
                    <br />
                    Red Balloon Fish
                  </td>
                  <td>
                    4<br />
                    <br />3
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/jellyfish.png" alt="Jellyfish" />
                    <span>Jellyfish</span>
                  </td>
                  <td>Peanut Butter & Jellyfish</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/clownfish.png" alt="Clown Fish" />
                    <span>Clown Fish</span>
                  </td>
                  <td>
                    Clown Fish
                    <br />
                    <br />
                    Sad Clown Fish
                    <br />
                    <br />
                    Party Clown Fish
                    <br />
                    <br />
                    Circus Clown Fish
                  </td>
                  <td>
                    1<br />
                    <br />4<br />
                    <br />2<br />
                    <br />6
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="loopylane">Loopy Lane (TTC)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/balloonfish.png"
                      alt="Balloon fish"
                    />
                    <span>Balloon Fish</span>
                  </td>
                  <td>Red Balloon Fish</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="punchlineplace">Punchline Place (TTC)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/balloonfish.png"
                      alt="Balloon fish"
                    />
                    <span>Balloon Fish</span>
                  </td>
                  <td>Weather Balloon Fish</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="sillystreet">Silly Street (TTC)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/balloonfish.png"
                      alt="Balloon fish"
                    />
                    <span>Balloon Fish</span>
                  </td>
                  <td>Water Balloon Fish</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="dock">Donald's Dock</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/dog.png" alt="Dog Fish" />
                    <span>Dog Fish</span>
                  </td>
                  <td>
                    Dog Fish
                    <br />
                    <br />
                    Bull Dog Fish
                    <br />
                    <br />
                    Hot Dog Fish
                    <br />
                    <br />
                    Dalmatian Dog Fish
                    <br />
                    <br />
                    Puppy Dog Fish
                  </td>
                  <td>
                    1<br />
                    <br />6<br />
                    <br />5<br />
                    <br />4<br />
                    <br />2
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/kingcrab.png" alt="King Crab" />
                    <span>King Crab</span>
                  </td>
                  <td>King Crab</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/poolshark.png" alt="Pool Shark" />
                    <span>Pool Shark</span>
                  </td>
                  <td>
                    Kiddie Pool Shark
                    <br />
                    <br />
                    Swimming Pool Shark
                    <br />
                    <br />
                    Olympic Pool Shark
                  </td>
                  <td>
                    6<br />
                    <br />7<br />
                    <br />8
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/fish/cuttthroat.png"
                      alt="Cuttthroat Trout"
                    />
                    <span>Cutthroat Trout</span>
                  </td>
                  <td>
                    Cutthroat Trout
                    <br />
                    <br />
                    Captain Cutthroat Trout
                    <br />
                    <br />
                    Scurvy Cutthroat Trout
                  </td>
                  <td>
                    2<br />
                    <br />7<br />
                    <br />8
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="barnacle">Barnacle Boulevard (Dock)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/cuttthroat.png"
                      alt="Cuttthroat Trout"
                    />
                    <span>Cutthroat Trout</span>
                  </td>
                  <td>Captain Cutthroat Trout</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="seaweed">Seaweed Street (Dock)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/cuttthroat.png"
                      alt="Cuttthroat Trout"
                    />
                    <span>Cutthroat Trout</span>
                  </td>
                  <td>Scurvy Cutthroat Trout</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="lighthouse">Lighthouse Lane (Dock)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/kingcrab.png" alt="King Crab" />
                    <span>King Crab</span>
                  </td>
                  <td>Old King Crab</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="dg">Daisy Gardens</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/balloonfish.png"
                      alt="Balloon fish"
                    />
                    <span>Balloon Fish</span>
                  </td>
                  <td>Water Balloon Fish</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/jellyfish.png" alt="Jellyfish" />
                    <span>Jellyfish</span>
                  </td>
                  <td>Crunchy PB&J Fish</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Cat fish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>
                    Cat Fish
                    <br />
                    <br />
                    Siamese Cat Fish
                    <br />
                    <br />
                    Tabby Cat Fish
                  </td>
                  <td>
                    1<br />
                    <br />
                    10
                    <br />
                    <br />3
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/amoreeel.png" alt="Amore Eel" />
                    <span>Amore Eel</span>
                  </td>
                  <td>
                    Amore Eel
                    <br />
                    <br />
                    Electric Amore Eel
                  </td>
                  <td>
                    1<br />
                    <br />3
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/moonfish.png" alt="Moon Fish" />
                    <span>Moon Fish</span>
                  </td>
                  <td>Harvest Moon Fish</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/seahorse.png" alt="Sea Horse" />
                    <span>Sea Horse</span>
                  </td>
                  <td>
                    Sea Horse
                    <br />
                    <br />
                    Rocking Sea Horse
                    <br />
                    <br />
                    Clydesdale Sea Horse
                    <br />
                    <br />
                    Arabian Sea Horse
                  </td>
                  <td>
                    3<br />
                    <br />4<br />
                    <br />6<br />
                    <br />8
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/poolshark.png" alt="Pool Shark" />
                    <span>Pool Shark</span>
                  </td>
                  <td>
                    Kiddie Pool Shark
                    <br />
                    <br />
                    Swimming Pool Shark
                    <br />
                    <br />
                    Olympic Pool Shark
                  </td>
                  <td>
                    5<br />
                    <br />6<br />
                    <br />7
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="elm">Elm Street (DG)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Cat fish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>
                    Siamese Cat Fish
                    <br />
                  </td>
                  <td>9</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="maple">Maple Street (DG)</span>
          </h2>
          <ul>
            <span>N/A</span>
          </ul>
          <h2>
            <span id="oak">Oak Street (DG)</span>
          </h2>
          <ul>
            <span>N/A</span>
          </ul>
          <h2>
            <span id="minnies">Minnie's Melodyland</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/clownfish.png" alt="Clown Fish" />
                    <span>Clown Fish</span>
                  </td>
                  <td>Circus Clown Fish</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/starfish.png" alt="Star Fish" />
                    <span>Star Fish</span>
                  </td>
                  <td>
                    Five Star Fish
                    <br />
                    <br />
                    Rock Star Fish
                  </td>
                  <td>
                    2<br />
                    <br />5
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/nurseshark.png" alt="Nurse Shark" />
                    <span>Nurse Shark</span>
                  </td>
                  <td>
                    Nurse Shark
                    <br />
                    <br />
                    Clara Nurse Shark
                    <br />
                    <br />
                    Florence Nurse Shark
                  </td>
                  <td>
                    5<br />
                    <br />8<br />
                    <br />9
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/pianofish.png" alt="Piano Fish" />
                    <span>Piano Tuna</span>
                  </td>
                  <td>
                    Piano Tuna
                    <br />
                    <br />
                    Grand Piano Tuna
                    <br />
                    <br />
                    Baby Grand Piano Tuna
                    <br />
                    <br />
                    Upright Piano Tuna
                    <br />
                    <br />
                    Player Piano Tuna
                  </td>
                  <td>
                    5<br />
                    <br />
                    10
                    <br />
                    <br />
                    10
                    <br />
                    <br />6<br />
                    <br />7
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="alto">Alto Avenue (Melodyland)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/pianofish.png" alt="Piano Fish" />
                    <span>Piano Tuna</span>
                  </td>
                  <td>Grand Piano Tuna</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="baritone">Baritone Boulevard (Melodyland)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/nurseshark.png" alt="Nurse Shark" />
                    <span>Nurse Shark</span>
                  </td>
                  <td>Clara Nurse Shark</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="tenor">Tenor Terrace (Melodyland)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/nurseshark.png" alt="Nurse Shark" />
                    <span>Nurse Shark</span>
                  </td>
                  <td>Flourence Nurse Shark</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/pianofish.png" alt="Piano Fish" />
                    <span>Piano Tuna</span>
                  </td>
                  <td>Baby Grand Piano Tuna</td>
                  <td>9</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="brrrgh">The Brrrgh</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/fish/balloonfish.png"
                      alt="Balloon fish"
                    />
                    <span>Balloon Fish</span>
                  </td>
                  <td>Weather Balloon Fish</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/jellyfish.png" alt="Jellyfish" />
                    <span>Jellyfish</span>
                  </td>
                  <td>
                    Grape PB&J Fish
                    <br />
                    <br />
                    Concord Grape PB&J Fish
                  </td>
                  <td>
                    3<br />
                    <br />
                    10
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/frozenfish.png" alt="Frozen Fish" />
                    <span>Frozen Fish</span>
                  </td>
                  <td>Frozen Fish</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/kingcrab.png" alt="King Crab" />
                    <span>King Crab</span>
                  </td>
                  <td>Alaskan King Crab</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/bearacuda.png" alt="Bear Acuda" />
                    <span>Bear Acuda</span>
                  </td>
                  <td>
                    Brown Bear Acuda
                    <br />
                    <br />
                    Black Bear Acuda
                    <br />
                    <br />
                    Koala Bear Acuda
                    <br />
                    <br />
                    Honey Bear Acuda
                    <br />
                    <br />
                    Polar Bear Acuda
                    <br />
                    <br />
                    Panda Bear Acuda
                    <br />
                    <br />
                    Kodiac Bear Acuda
                    <br />
                    <br />
                    Grizzly Bear Acuda
                  </td>
                  <td>
                    2<br />
                    <br />3<br />
                    <br />4<br />
                    <br />5<br />
                    <br />6<br />
                    <br />7<br />
                    <br />9<br />
                    <br />
                    10
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="sleet">Sleet Street (Brrrgh)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/bearacuda.png" alt="Bear Acuda" />
                    <span>Bear Acuda</span>
                  </td>
                  <td>Kodiac Bear Acuda</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="walrus">Walrus Way (Brrrgh)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/bearacuda.png" alt="Bear Acuda" />
                    <span>Bear Acuda</span>
                  </td>
                  <td>Grizzly Bear Acuda</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="polar">Polar Place (Brrrgh)</span>
          </h2>
          <ul>
            <span>N/A</span>
          </ul>
          <h2>
            <span id="dreamland">Donald's Dreamland</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/jellyfish.png" alt="Jellyfish" />
                    <span>Jellyfish</span>
                  </td>
                  <td>
                    Strawberry PB&J Fish
                    <br />
                    <br />
                    Concord Grape PB&J Fish
                  </td>
                  <td>
                    5<br />
                    <br />
                    10
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Cat fish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>Tom Cat Fish</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/moonfish.png" alt="Moon Fish" />
                    <span>Moon Fish</span>
                  </td>
                  <td>
                    Moon Fish
                    <br />
                    <br />
                    Full Moon Fish
                    <br />
                    <br />
                    New Moon Fish
                    <br />
                    <br />
                    Harvest Moon Fish
                  </td>
                  <td>
                    1<br />
                    <br />
                    10
                    <br />
                    <br />3<br />
                    <br />4
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="lullaby">Lullaby Lane (Dreamland)</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Cat fish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>Alley Cat Fish</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/moonfish.png" alt="Moon Fish" />
                    <span>Moon Fish</span>
                  </td>
                  <td>
                    Crescent Moon Fish
                    <br />
                    <br />
                    Half Moon Fish
                  </td>
                  <td>
                    6<br />
                    <br />8
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="pajama">Pajama Place (Dreamland)</span>
          </h2>
          <ul>
            <span>N/A</span>
          </ul>
        </div>
      </>
    );
  }
}

export default Pond;
