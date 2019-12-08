import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount(){
    document.title = "Home | Spike's Rewritten Guide";
  }

  render() {
    return (
      <>
        <div className="logo">
          <img
            src="/images/rewritten_guide_banner.png"
            alt="Spike's Rewritten Guide"
          />
        </div>
        <div className="panel">
          <div className="panel-content">
            <h1>Welcome Toons!</h1>
            <p>
              Spike's Rewritten Guide is a one stop site with all the in's and
              out's of Toontown Rewritten, written by your very own, Spike. This
              guide can be used by new users who need some tips for gameplay or
              old users who may need a slight reminder of some things. Updates
              and additions will be added as time goes on, so be sure to stop by
              every once in a while!
            </p>
            <p>
              To learn about who Spike is, check out the{" "}
              <Link to="/about">about page</Link>.
            </p>
            <hr />
            <h2>Activities</h2>
            <p>
              Head over to the <b>Activities</b> dropdown to gain some insight
              on the various fun and extra activities, that is not just cog
              fighting, you can do in Toontown to gain some more laff points for
              your toon. Here, you can also to learn about doodles and how they
              can be a valuable aid for you and your toon peers.
            </p>
            <h2>Cogs</h2>
            <p>
              Check out the <b>Cogs</b> dropdown to learn a lot about each cog
              tier, their respective cog headquarters, and where you can find
              certain cogs across Toontown. Additionally, you can discover what
              you can do in each cog headquarters and how you can be successful
              in those types of cog related activities.
            </p>
            <h2>Toon Tips</h2>
            <p>
              Navigate on over to the <b>Toon Tips</b> page to access a quick
              reference on important tips to enahnce your gameplay experience.
              These tips can include advice about invasions, gag training,
              fighting strategies, communication, etc.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
