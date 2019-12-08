import React from "react";
import { Link } from "react-router-dom";
import Bean from "../../components/gardening/Bean";
import Species from "../../components/gardening/Species";

class Gardening extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bean: true,
      species: false
    };

    this.getComboInfo = this.getComboInfo.bind(this);
  }

  componentDidMount(){
    document.title = "Gardening | Spike's Rewritten Guide";
  }

  getComboInfo(bean) {
    if (bean) {
      this.setState({ bean: true, species: false });
    } else {
      this.setState({ bean: false, species: true });
    }
  }

  render() {
    let display = <Bean action={this.getComboInfo} />;
    if (this.state.species) {
      display = <Species action={this.getComboInfo} />;
    } else {
      display = <Bean action={this.getComboInfo} />;
    }

    return (
      <>
        <div className="panel">
          <div className="panel-content">
            <h1>
              <span id="gardeningTop">Gardening</span>
            </h1>
            <p>
              Gardening in Toontown is a great and easy way to earn an
              additional 4 laff points! Any toon, at any level, can start their
              own garden with the gardening kit at their estate. The gardening
              kit is purchasable in Clarabelle's Cattlelog. Once received, a
              gardening guide will be shown, then tree plots and gardening trays
              will assemble itself around a toons estate.
            </p>
            <p>
              To view the flower basket, the flower album, and other gardening
              information, check out the{" "}
              <span>
                <img
                  className="book-tab"
                  src="/images/gardening_tab.PNG"
                  alt="Gardening book tab"
                />
              </span>{" "}
              tab in the Shticker Book.
            </p>
            <div className="panel-nav">
              <a href="#plant">How to Plant Flowers</a>
              <a href="#shovel">Shovels & Watering Cans</a>
              <a href="#trees">Gag Trees</a>
              <a href="#statues">Statues</a>
              <a href="#beanCombos">Flower Bean Combinations</a>
            </div>
            <h2 id="plant">How to Plant Flowers</h2>
            <p>
              To start planting flowers, simply walk up to one of the 10
              available flower planting spots surrounding the toon estate and
              click "Plant Flower". Upon clicking that, the jellybean chooser
              will pop up and a valid jellybean flower combination must be
              inputted to successfully plant a flower. Remember to water all of
              the flowers planted, or they will not be avalable to harvest the
              next day. All plants that were planted and watered before midnight
              will grow at 1:00 AM Pacific time. To sell flowers, approach the
              wheel barrow in the sand pit located in the estate neighborhood.
              Flowers sell for double the plant cost. Click{" "}
              <a href="#beanCombos">here</a> to check out all of the jellybean
              flower combinations!
            </p>
            <img
              className="content-img"
              style={{ height: 175 + "px" }}
              src="/images/flower_ex.PNG"
              alt="Planted flowers"
            />
            <p>
              Similar to <Link to="/fishing">fishing</Link>, with every 10 new
              species of flowers discovered, a laff point is earned! There are a
              total of 40 flower species and 4 earnable gardening trophies.
            </p>
            <p>
              Click{" "}
              <a
                href="/doc/gardening.pdf"
                title="Visual How To PDF guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to view a more detailed guide on how to garden, including
              instructions on how to plant <a href="#trees">gag trees</a>!
            </p>
            <h2 id="shovel">Shovels & Watering Cans</h2>
            <p>
              To discover new flower species, toons must advance their shovel.
              There are currently four different shovels that can be used to
              garden. To advance the shovel, flowers must be planted and watered
              at the highest level (jellybean cost) currently available to a
              toon and harvested each day, to earn up to a maximum of 10 points
              a day (1 shovel skill credit per plant picked). The following
              chart displays helpful shovel information:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Shovel</th>
                  <th>Points to Advance</th>
                  <th>Shovel Level</th>
                  <th>Flower Jellybean Cost</th>
                  <th>Laff Point?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tin</td>
                  <td>0 - 39</td>
                  <td>1</td>
                  <td>1 jellybean</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Tin</td>
                  <td>40 - 79</td>
                  <td>2</td>
                  <td>2 jellybeans</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Bronze</td>
                  <td>0 - 79</td>
                  <td>1</td>
                  <td>3 jellybeans</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Bronze</td>
                  <td>80 - 159</td>
                  <td>2</td>
                  <td>4 jellybeans</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Silver</td>
                  <td>0 - 159</td>
                  <td>1</td>
                  <td>5 jellybeans</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Silver</td>
                  <td>160 - 319</td>
                  <td>2</td>
                  <td>6 jellybeans</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>0 - 319</td>
                  <td>1</td>
                  <td>7 jellybeans</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>320 - 639</td>
                  <td>2</td>
                  <td>8 jellybeans</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
            <p>
              Along with shovels, there are four different watering cans a toon
              can earn and use to garden. To upgrade, a toon must earn skill
              points by watering a plants a certain amount of times. A toon will
              earn one watering skill credit each time a flower or tree is
              watered. However, once a flower or tree is over-watered, no more
              skill points can be earned on that plant for that day. The
              following chart shows helpful watering can characteristics:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Watering Can</th>
                  <th>Points to Upgrade</th>
                  <th>Days Lasted per Water</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Small</td>
                  <td>0</td>
                  <td>2 - 4 days</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>100</td>
                  <td>6 - 8 days</td>
                </tr>
                <tr>
                  <td>Large</td>
                  <td>200</td>
                  <td>10 - 12 days</td>
                </tr>
                <tr>
                  <td>Huge</td>
                  <td>400</td>
                  <td>14 - 16 days</td>
                </tr>
              </tbody>
            </table>
            <p>
              To see shovel or watering can skill progress, head to the{" "}
              <span>
                <img
                  className="book-tab"
                  src="/images/gardening_tab.PNG"
                  alt="Gardening book tab"
                />
              </span>{" "}
              tab in the Shticker Book.
            </p>
            <h2 id="trees">Gag Trees</h2>
            <p>
              In addition to planting flowers, toons can also plant gag trees
              with, well, gags! Once fully grown, that gag will gain what is
              called an "organic bonus", which increases gag damage by 10%
              (rounded up), or increases accuracy for lure gags. There are a
              total of eight available spots per toon to plant a gag tree.
              However, to have an organic bonus on any level 2+ gag, the
              preceding gag in that track must also be planted and that lower
              gag tree must not be removed.
            </p>
            <img
              className="content-img"
              style={{ height: 225 + "px" }}
              src="/images/gag_trees.PNG"
              alt="Gag trees"
            />
            <p>
              Note, the higher the gag level planted, the longer it will take to
              grow the gag tree. A good rule of thumb to use is multiply the gag
              level by 3 and that is the number of days it will take the gag
              tree to fully grow. For example, a whole cream pie is a level 5
              gag, so it will take 15 days to completely grow.
            </p>
            <h2 id="statues">Statues</h2>
            <p>
              Statues are a great way of making a garden look complete and
              fancy. What more could you want! There are two types of statues:
              Disney character and special stautes. To plant a statue, a toon
              must buy it in Clarabelle's Cattlelog and then approach the gray
              plot (shown below) outside the estate to set it up.
            </p>
            <img
              className="content-img"
              style={{ height: 125 + "px" }}
              src="/images/Planting_Statues.png"
              alt="Statue planter"
            />
            <p>
              At any level, a special statue can be planted. However, the Disney
              themed statues have to be earned. Here is a quick table guide to
              the statues:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Statue</th>
                  <th>Shovel Requirement</th>
                  <th>Bean Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Donald.png"
                      alt="Donald statue"
                    />
                  </td>
                  <td>Donald Statue</td>
                  <td>2 bean shovel</td>
                  <td>125</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Mickey.png"
                      alt="Mickey statue"
                    />
                  </td>
                  <td>Mickey Statue</td>
                  <td>4 bean shovel</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Minnie.png"
                      alt="Minnie statue"
                    />
                  </td>
                  <td>Minnie Statue</td>
                  <td>6 bean shovel</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Mickey_Fountain.png"
                      alt="Mickey fountain"
                    />
                  </td>
                  <td>Mickey_Fountain</td>
                  <td>8 bean shovel</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Toon_Victory_Statue.png"
                      alt="Toon victory statue"
                    />
                  </td>
                  <td>Toon Victory Statue</td>
                  <td>Maxed shovel</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Toon_Embrace_Statue.png"
                      alt="Toon embrace statue"
                    />
                  </td>
                  <td>Toon Embrace Statue</td>
                  <td>Maxed shovel</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Toon_Wave_Statue.png"
                      alt="Toon wave statue"
                    />
                  </td>
                  <td>Toon Wave Statue</td>
                  <td>Maxed shovel</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Toon_Authority_Statue.png"
                      alt="Toon authority statue"
                    />
                  </td>
                  <td>Toon Authority Statue</td>
                  <td>Maxed shovel</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Flappy_Cog.png"
                      alt="Flappy cog balloon"
                    />
                  </td>
                  <td>Flappy Cog</td>
                  <td>None</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Melting_Snowman.png"
                      alt="Melting snowman"
                    />
                  </td>
                  <td>Melting Snowman</td>
                  <td>None</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="/images/flowers/Melting_Snowdoodle.png"
                      alt="Melting snowdoodle"
                    />
                  </td>
                  <td>Melting Snowdoodle</td>
                  <td>None</td>
                  <td>50</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <div className="panel-nav">
              <a href="#plant">How to Plant Flowers</a>
              <a href="#shovel">Shovels & Watering Cans</a>
              <a href="#trees">Gag Trees</a>
              <a href="#statues">Statues</a>
            </div>
          </div>
        </div>
        <div className="panel" style={{ marginTop: 0 }}>
          <div className="panel-content">
            <h2>
              <span id="beanCombos">Flower Bean Combinations</span>
            </h2>
            <p>
              Looking for flower bean combinations? Well you came to the right
              place! Below, feel free to look through all the possible flower
              bean combinations that exist in Toontown Rewritten. You can sort
              the list by bean cost or by flower species color! Click the links
              below to quickly jump to a specific combo set.
            </p>
          </div>
        </div>
        {display}
      </>
    );
  }
}

export default Gardening;
