import React from "react";
import "../../scss/list.scss";

class Rod extends React.Component {
  render() {
    let tableHeader = (
      <>
        <tr>
          <th>Fish Type</th>
          <th>Fish Species</th>
        </tr>
      </>
    );

    return (
      <>
        <div id="animate" className="list">
          <div className="list-navigation">
            <a href="#twig">Twig Rod</a> | <a href="#bamboo">Bamboo Rod</a> |{" "}
            <a href="#hardwood">Hardwood Rod</a> |{" "}
            <a href="#steel">Steel Rod</a> | <a href="#gold">Gold Rod</a>
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
            <button name="rod" className="active">
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
            <span id="twig">Twig Rod</span>
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
                    Weather Balloon Fish
                    <br />
                    <br />
                    Red Balloon Fish
                    <br />
                    <br />
                    Hot Air Balloon Fish
                    <br />
                    <br />
                    Water Balloon Fish
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/jellyfish.png" alt="Jellyfish" />
                    <span>Jellyfish</span>
                  </td>
                  <td>
                    Crunchy PB&J Fish
                    <br />
                    <br />
                    Concord Grape PB&J Fish
                    <br />
                    <br />
                    Strawberry PB&J Fish
                    <br />
                    <br />
                    Grape PB&J Fish
                    <br />
                    <br />
                    Peanut Butter & Jellyfish
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Catfish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>
                    Cat Fish
                    <br />
                    <br />
                    Tabby Cat Fish
                    <br />
                    <br />
                    Siamese Cat Fish
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/clownfish.png" alt="Clown fish" />
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
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/starfish.png" alt="Star fish" />
                    <span>Star Fish</span>
                  </td>
                  <td>
                    Star Fish
                    <br />
                    <br />
                    Five Star Fish
                    <br />
                    <br />
                    All Star Fish
                    <br />
                    <br />
                    Shining Star Fish
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/dog.png" alt="Dog fish" />
                    <span>Dog Fish</span>
                  </td>
                  <td>
                    Puppy Dog Fish
                    <br />
                    <br />
                    Dalmatian Dog Fish
                    <br />
                    <br />
                    Hot Dog Fish
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/devilray.png" alt="Devil Ray" />
                    <span>Devil Ray</span>
                  </td>
                  <td>Devil Ray</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/amoreeel.png" alt="Amore eel" />
                    <span>Amore Eel</span>
                  </td>
                  <td>
                    Amore Eel
                    <br />
                    <br />
                    Electric Amore Eel
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/nurseshark.png" alt="Nurse shark" />
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
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/kingcrab.png" alt="King crab" />
                    <span>King Crab</span>
                  </td>
                  <td>
                    King Crab
                    <br />
                    <br />
                    Old King Crab
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/moonfish.png" alt="Moon fish" />
                    <span>Moon Fish</span>
                  </td>
                  <td>
                    Moon Fish
                    <br />
                    <br />
                    Crescent Moon Fish
                    <br />
                    <br />
                    New Moon Fish
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/fish/cuttthroat.png"
                      alt="Cuttthroat trout"
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
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="bamboo">Bamboo Rod</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/catfish.png" alt="Catfish" />
                    <span>Cat Fish</span>
                  </td>
                  <td>
                    Alley Cat Fish
                    <br />
                    <br />
                    Tom Cat Fish
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/frozenfish.png" alt="Frozen fish" />
                    <span>Frozen Fish</span>
                  </td>
                  <td>Frozen Fish</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/starfish.png" alt="Star fish" />
                    <span>Star Fish</span>
                  </td>
                  <td>Rock Star Fish</td>
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
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/dog.png" alt="Dog fish" />
                    <span>Dog Fish</span>
                  </td>
                  <td>Dog Fish</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/kingcrab.png" alt="King crab" />
                    <span>King Crab</span>
                  </td>
                  <td>Alaskan King Crab</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/moonfish.png" alt="Moon fish" />
                    <span>Moon Fish</span>
                  </td>
                  <td>Half Moon Fish</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/poolshark.png" alt="Pool shark" />
                    <span>Pool Shark</span>
                  </td>
                  <td>
                    Kiddie Pool Shark
                    <br />
                    <br />
                    Olympic Pool Shark
                    <br />
                    <br />
                    Swimming Pool Shark
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="hardwood">Hardwood Rod</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/moonfish.png" alt="Moon shark" />
                    <span>Moon Fish</span>
                  </td>
                  <td>Harvest Moon Fish</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/seahorse.png" alt="Sea horse" />
                    <span>Sea Horse</span>
                  </td>
                  <td>Sea Horse</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/poolshark.png" alt="Pool shark" />
                    <span>Pool Shark</span>
                  </td>
                  <td>Pool Shark</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/bearacuda.png" alt="Bear acuda" />
                    <span>Bear Acuda</span>
                  </td>
                  <td>
                    Black Bear Acuda
                    <br />
                    <br />
                    Brown Bear Acuda
                    <br />
                    <br />
                    Honey Bear Acuda
                    <br />
                    <br />
                    Koala Bear Acuda
                    <br />
                    <br />
                    Polar Bear Acuda
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/pianofish.png" alt="Piano fish" />
                    <span>Piano Tuna</span>
                  </td>
                  <td>
                    Baby Grand Piano Tuna
                    <br />
                    <br />
                    Player Piano Tuna
                    <br />
                    <br />
                    Upright Piano Tuna
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="steel">Steel Rod</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/moonfish.png" alt="Moon fish" />
                    <span>Moon Fish</span>
                  </td>
                  <td>Full Moon Fish</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/seahorse.png" alt="Sea horse" />
                    <span>Sea Horse</span>
                  </td>
                  <td>
                    Arabian Sea Horse
                    <br />
                    <br />
                    Clydesdale Sea Horse
                    <br />
                    <br />
                    Rocking Sea Horse
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/bearacuda.png" alt="Bear acuda" />
                    <span>Bear Acuda</span>
                  </td>
                  <td>
                    Grizzly Bear Acuda
                    <br />
                    <br />
                    Kodiac Bear Acuda
                    <br />
                    <br />
                    Panda Bear Acuda
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/fish/pianofish.png" alt="Piano fish" />
                    <span>Piano Tuna</span>
                  </td>
                  <td>
                    Piano Tuna
                    <br />
                    <br />
                    Grand Piano Tuna
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h2>
            <span id="gold">Gold Rod</span>
          </h2>
          <ul>
            <table>
              <thead>{tableHeader}</thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/fish/dog.png" alt="Dog fish" />
                    <span>Dog Fish</span>
                  </td>
                  <td>Bull Dog Fish</td>
                </tr>
              </tbody>
            </table>
          </ul>
        </div>
      </>
    );
  }
}

export default Rod;
