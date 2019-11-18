import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/theme.scss";
import "./scss/chipndaletheme.scss";
import "./scss/animation.scss";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Faq from "./views/Faq";
import Sitemap from "./views/Sitemap";
import Toontips from "./views/Toontips";
import Bossbot from "./views/cogs/Bossbot";
import Cashbot from "./views/cogs/Cashbot";
import Sellbot from "./views/cogs/Sellbot";
import Lawbot from "./views/cogs/Lawbot";
import Gardening from "./views/activities/Gardening";
import Fishing from "./views/activities/Fishing";
import Golfing from "./views/activities/Golfing";
import Racing from "./views/activities/Racing";
import Doodles from "./views/activities/Doodles";

function App() {

  return (
    <>
      <div id="return-top"></div>
      <Router>
        <ScrollToTop />
        <Navigation />
        <div className="backtotop-link" id="backtotop-link">
          <a href="#return-top">Back to Top</a>
        </div>
        <div className="container body-content">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/faq" component={Faq}></Route>
          <Route exact path="/sitemap" component={Sitemap}></Route>
          <Route exact path="/toontips" component={Toontips}></Route>
          <Route exact path="/bossbots" component={Bossbot}></Route>
          <Route exact path="/cashbots" component={Cashbot}></Route>
          <Route exact path="/sellbots" component={Sellbot}></Route>
          <Route exact path="/lawbots" component={Lawbot}></Route>
          <Route exact path="/gardening" component={Gardening}></Route>
          <Route exact path="/fishing" component={Fishing}></Route>
          <Route exact path="/golfing" component={Golfing}></Route>
          <Route exact path="/racing" component={Racing}></Route>
          <Route exact path="/doodles" component={Doodles}></Route>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
