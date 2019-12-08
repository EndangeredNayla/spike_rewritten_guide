import React from "react";
import "../../scss/list.scss";

class Species extends React.Component {
  render() {
    return (
      <>
        <div id="animate" className="list">
          <div className="list-navigation">
            <a href="#daffodilNav">Daffodil Combos</a> |{" "}
            <a href="#pansyNav">Pansy Combos</a> |{" "}
            <a href="#daisyNav">Daisy Combos</a> |{" "}
            <a href="#lilyNav">Lily Combos</a> |{" "}
            <a href="#carnationNav">Carnation Combos</a> |{" "}
            <a href="#tulipNav">Tulip Combos</a> |{" "}
            <a href="#roseNav">Rose Combos</a> |{" "}
            <a href="#petuniaNav">Petunia Combos</a>
          </div>
          <div className="filtering">
            <button
              name="num"
              type="button"
              onClick={() => {
                this.props.action(true);
              }}
            >
              Bean Cost
            </button>
            <button name="type" className="active">
              Species/Color
            </button>
          </div>
          <h2>
            <span id="daffodilNav">Daffodil/Green Flower Combinations</span>
          </h2>
          <ul>
            {/*Green */}
            <li
              data-flower-type="daffodil"
              data-bean-type="green"
              data-num-beans="one"
            >
              Laff-o-dill
            </li>
            <img src="/images/flowers/laff-o-dil.gif" alt="Laff-o-dil" />
            <div className="bean-colors" style={{ color: "green" }}>
              green
            </div>
            <hr />
            <li
              data-flower-type="daffodil"
              data-bean-type="green"
              data-num-beans="two"
            >
              Daffy Dill
            </li>
            <img src="/images/flowers/daffy-dill.gif" alt="Daffy dill" />
            <div className="bean-colors">
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span>
            </div>
            <hr />
            <li
              data-flower-type="daffodil"
              data-bean-type="green"
              data-num-beans="four"
            >
              Giraff-o-dil
            </li>
            <img src="/images/flowers/giraff-o-dil.gif" alt="Giraff o dill" />
            <div className="bean-colors">
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>+{" "}
              <span style={{ color: "gold" }}>yellow</span>
            </div>
            <hr />
            <li
              data-flower-type="daffodil"
              data-bean-type="green"
              data-num-beans="five"
            >
              Time and half-o-dil
            </li>
            <img
              src="/images/flowers/time-and-half-o-dil.gif"
              alt="Time and a Half o Dill"
            />
            <div className="bean-colors">
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>+{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "pink" }}>pink</span>
            </div>
          </ul>
          <h2>
            <span id="pansyNav">Pansy/Orange Flower Combinations</span>
          </h2>
          <ul>
            {/*Orange */}
            <li
              data-flower-type="pansy"
              data-bean-type="orange"
              data-num-beans="one"
            >
              Dandy Pansy
            </li>
            <img src="/images/flowers/dandy-pansy.gif" alt="Dandy Pansy" />
            <div className="bean-colors" style={{ color: "orange" }}>
              orange
            </div>
            <hr />
            <li
              data-flower-type="pansy"
              data-bean-type="orange"
              data-num-beans="two"
            >
              Chim Pansy
            </li>
            <img src="/images/flowers/chim-pansy.gif" alt="Chim Pansy" />
            <div className="bean-colors">
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span>
            </div>
            <hr />
            <li
              data-flower-type="pansy"
              data-bean-type="orange"
              data-num-beans="three"
            >
              Potsen Pansy
            </li>
            <img src="/images/flowers/potsen-pansy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "red" }}>red</span>
            </div>
            <hr />
            <li
              data-flower-type="pansy"
              data-bean-type="orange"
              data-num-beans="four"
            >
              Marzi Pansy
            </li>
            <img src="/images/flowers/marzi-pansy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>+{" "}
              <span style={{ color: "red" }}>red</span>
            </div>
            <hr />
            <li
              data-flower-type="pansy"
              data-bean-type="orange"
              data-num-beans="six"
            >
              Smarty Pansy
            </li>
            <img src="/images/flowers/smarty-pansy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "pink" }}>pink</span>+{" "}
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "pink" }}>pink</span>
            </div>
          </ul>
          <h2>
            <span id="daisyNav">Daisy/Yellow Flower Combinations</span>
          </h2>
          <ul>
            {/*Yellow */}
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="one"
            >
              School Daisy
            </li>
            <img src="/images/flowers/school-daisy.gif" alt="" />
            <div className="bean-colors" style={{ color: "gold" }}>
              yellow
            </div>
            <hr />
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="two"
            >
              Lazy Daisy
            </li>
            <img src="/images/flowers/lazy-daisy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "red" }}>red</span>
            </div>
            <hr />
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="three"
            >
              Midsummer Daisy
            </li>
            <img src="/images/flowers/midsummer-daisy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "green" }}>green</span>
            </div>
            <hr />
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="four"
            >
              Freshasa Daisy
            </li>
            <img src="/images/flowers/freshasa-daisy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span>+{" "}
              <span style={{ color: "orange" }}>orange</span>
            </div>
            <hr />
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="five"
            >
              Whoopsie Daisy
            </li>
            <img src="/images/flowers/whoopsie-daisy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>+{" "}
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>
            </div>
            <hr />
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="six"
            >
              Upsy Daisy
            </li>
            <img src="/images/flowers/upsy-daisy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span>+{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>
            </div>
            <hr />
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="seven"
            >
              Crazy Daisy
            </li>
            <img src="/images/flowers/crazy-daisy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "red" }}>red</span>+{" "}
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "green" }}>green</span>+{" "}
              <span style={{ color: "green" }}>green</span>
            </div>
            <hr />
            <li
              data-flower-type="daisy"
              data-bean-type="yellow"
              data-num-beans="eight"
            >
              Hazy Daisy
            </li>
            <img src="/images/flowers/hazy-daisy.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span>+{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "red" }}>red</span>+{" "}
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span>
            </div>
          </ul>
          <h2>
            <span id="lilyNav">Lily/Cyan Flower Combinations</span>
          </h2>
          <ul>
            {/*Cyan */}
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="one"
            >
              Lily-of-the-Alley
            </li>
            <img src="/images/flowers/lily-of-the-alley.gif" alt="" />
            <div className="bean-colors" style={{ color: "darkturquoise" }}>
              cyan
            </div>
            <hr />
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="two"
            >
              Lily Pad
            </li>
            <img src="/images/flowers/lily-pad.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "green" }}>green</span>
            </div>
            <hr />
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="three"
            >
              Tiger Lily
            </li>
            <img src="/images/flowers/tiger-lily.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>
            </div>
            <hr />
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="four"
            >
              Livered Lily
            </li>
            <img src="/images/flowers/livered-lily.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "orange" }}>orange</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>+{" "}
              <span style={{ color: "pink" }}>pink</span>
            </div>
            <hr />
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="five"
            >
              Chili Lily
            </li>
            <img src="/images/flowers/chili-lily.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "red" }}>red</span>+{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "red" }}>red</span>
            </div>
            <hr />
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="six"
            >
              Silly Lily
            </li>
            <img src="/images/flowers/silly-lily.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span>+{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span>
            </div>
            <hr />
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="seven"
            >
              Indubitab Lily
            </li>
            <img src="/images/flowers/indubitab-lily.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span>+{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>+{" "}
              <span style={{ color: "blue" }}>blue</span>
            </div>
            <hr />
            <li
              data-flower-type="lily"
              data-bean-type="cyan"
              data-num-beans="eight"
            >
              Dilly Lily
            </li>
            <img src="/images/flowers/dilly-lily.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>+{" "}
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>+{" "}
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>
            </div>
          </ul>
          <h2>
            <span id="carnationNav">Carnation/Pink Flower Combinations</span>
          </h2>
          <ul>
            {/*Pink */}
            <li
              data-flower-type="carnation"
              data-bean-type="pink"
              data-num-beans="one"
            >
              What-in Carnation
            </li>
            <img src="/images/flowers/what-in-carnation.gif" alt="" />
            <div className="bean-colors" style={{ color: "pink" }}>
              pink
            </div>
            <hr />
            <li
              data-flower-type="carnation"
              data-bean-type="pink"
              data-num-beans="two"
            >
              Instant Carnation
            </li>
            <img src="/images/flowers/instant-carnation.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>
            </div>
            <hr />
            <li
              data-flower-type="carnation"
              data-bean-type="pink"
              data-num-beans="three"
            >
              Hybrid Carnation
            </li>
            <img src="/images/flowers/hybrid-carnation.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "red" }}>red</span>
            </div>
            <hr />
            <li
              data-flower-type="carnation"
              data-bean-type="pink"
              data-num-beans="five"
            >
              Side Carnation
            </li>
            <img src="/images/flowers/side-carnation.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "green" }}>green</span>+{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "red" }}>red</span>
            </div>
            <hr />
            <li
              data-flower-type="carnation"
              data-bean-type="pink"
              data-num-beans="seven"
            >
              Model Carnation
            </li>
            <img src="/images/flowers/model-carnation.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "green" }}>green</span>+{" "}
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "green" }}>green</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>+{" "}
              <span style={{ color: "green" }}>green</span>
            </div>
          </ul>
          <h2>
            <span id="tulipNav">Tulip/Violet Flower Combinations</span>
          </h2>
          <ul>
            {/*Purple */}
            <li
              data-flower-type="tulip"
              data-bean-type="violet"
              data-num-beans="five"
            >
              Onelip
            </li>
            <img src="/images/flowers/onelip.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>+{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span>
            </div>
            <hr />
            <li
              data-flower-type="tulip"
              data-bean-type="violet"
              data-num-beans="six"
            >
              Twolip
            </li>
            <img src="/images/flowers/twolip.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "red" }}>red</span>+{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span>
            </div>
            <hr />
            <li
              data-flower-type="tulip"
              data-bean-type="violet"
              data-num-beans="eight"
            >
              Threelip
            </li>
            <img src="/images/flowers/threelip.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>+{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>+{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>
            </div>
          </ul>
          <h2>
            <span id="roseNav">Rose/Red Flower Combinations</span>
          </h2>
          <ul>
            {/*Red */}
            <li
              data-flower-type="rose"
              data-bean-type="red"
              data-num-beans="three"
            >
              Summer's Last Rose
            </li>
            <img src="/images/flowers/summers-last-rose.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "red" }}>red</span>
            </div>
            <hr />
            <li
              data-flower-type="rose"
              data-bean-type="red"
              data-num-beans="four"
            >
              Corn Rose
            </li>
            <img src="/images/flowers/corn-rose.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>+{" "}
              <span style={{ color: "gold" }}>yellow</span>
            </div>
            <hr />
            <li
              data-flower-type="rose"
              data-bean-type="red"
              data-num-beans="six"
            >
              Tinted Rose
            </li>
            <img src="/images/flowers/tinted-rose.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>+{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>
            </div>
            <hr />
            <li
              data-flower-type="rose"
              data-bean-type="red"
              data-num-beans="seven"
            >
              Stinking Rose
            </li>
            <img src="/images/flowers/stinking-rose.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>+{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span>+{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span>
            </div>
            <hr />
            <li
              data-flower-type="rose"
              data-bean-type="red"
              data-num-beans="eight"
            >
              Istilla Rose
            </li>
            <img src="/images/flowers/istilla-rose.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span>+{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>+{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>
            </div>
          </ul>
          <h2>
            <span id="petuniaNav">Petunia/Blue Flower Combinations</span>
          </h2>
          <ul>
            {/*Blue */}
            <li
              data-flower-type="petunia"
              data-bean-type="blue"
              data-num-beans="seven"
            >
              Car Petunia
            </li>
            <img src="/images/flowers/car-petunia.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>+{" "}
              <span style={{ color: "blueviolet" }}>violet</span> +{" "}
              <span style={{ color: "darkturquoise" }}>cyan</span> +{" "}
              <span style={{ color: "blue" }}>blue</span>+{" "}
              <span style={{ color: "blue" }}>blue</span>
            </div>
            <hr />
            <li
              data-flower-type="petunia"
              data-bean-type="blue"
              data-num-beans="eight"
            >
              Platoonia
            </li>
            <img src="/images/flowers/platoonia.gif" alt="" />
            <div className="bean-colors">
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "pink" }}>pink</span> +{" "}
              <span style={{ color: "pink" }}>pink</span>+{" "}
              <span style={{ color: "blue" }}>blue</span> +{" "}
              <span style={{ color: "red" }}>red</span> +{" "}
              <span style={{ color: "orange" }}>orange</span>+{" "}
              <span style={{ color: "gold" }}>yellow</span> +{" "}
              <span style={{ color: "gold" }}>yellow</span>
            </div>
          </ul>
        </div>
      </>
    );
  }
}

export default Species;
