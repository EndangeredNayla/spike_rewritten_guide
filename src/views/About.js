import React from "react";
import { Link } from "react-router-dom";
import "../scss/about.scss";

class About extends React.Component {
  componentDidMount(){
    document.title = "About | Spike's Rewritten Guide";
  }

  render() {
    return (
      <>
        <div className="panel">
          <div className="panel-content">
            <div>
              <h1>What's Up!</h1>
              <p>
                I am Spike! Your great and humble host. Welcome to or welcome
                back to <i>Spike's Rewritten Guide</i>! If you are new to this
                site, I am excited to have you! If you are returning, I
                appreciate your loyalty. Since you are on this page, I am glad
                to assume you have decided to show some interest in why this
                site exists and to find out a little bit more about me!
              </p>
              <p>
                If you have a question or want to send me a greeting, you can
                reach out to me{" "}
                <Link to="/contact">here</Link>.
              </p>
            </div>
            <hr />
            <div>
              <div className="left-align">
                <img src="/images/oreo_confused.png" alt="oreo_confused" />
              </div>
              <h2>Who is Spike?</h2>
              <p>As an easy answer, Spike is me!</p>
              <p>
                To be more complex... Spike is a red cat from the original
                Disney's Toontown Online game. As Spike, I reached 129 laff and
                roamed the streets of Toontown as a lureless toon. I always had
                a dream of making it to at least 130 laff points, but alack,
                Disney's Toontown decided to close back in 2013. Spike was a
                major part of my childhood, which is why I kept my online
                persona as Spike and named this website after him.
              </p>
              <p>
                Of course, that does not explain why there is a weird looking
                light-blue cat with glasses running around this website...
              </p>
              <p className="img-hover">
                Move your mouse over here (click if on mobile) to see Spike on
                the last day of Toontown.
                <img
                  src="/images/Last_Spike.png"
                  alt="Spike on September 18, 2013"
                />
              </p>
            </div>
            <hr />
            <div>
              <div className="right-align">
                <img src="/images/oreo_smiles.png" alt="oreo_smiles" />
              </div>
              <h2>Who is that light-blue cat?</h2>
              <p>
                That light-blue cat you're are seeing everywhere goes by the
                name Oreo and is, well, also me! Oreo is a 123 laff dropless
                toon from Toontown Rewritten. He received a beta key at the
                early stages of Toontown Rewritten and has been running about
                the streets ever since. Oreo is who you will notice
                demonstrating almost all of the content on this site.
              </p>
              <p>
                So if you refer to me as either Spike or Oreo, I will react just
                the same!
              </p>
            </div>
            <hr />
            <div>
              <h2>So, What is the point of Spike's Rewritten Guide?</h2>
              <p>I cannot believe you asked this question...!</p>
              <p>
                All jokes aside, this Rewritten guide is here to help you
                navigate your way through toontasks and other extra activities.
                If you ever had a question about how you do anything online
                Toontown, here is the source to find your solution!
              </p>
              <p>
                This site will be constantly updated to enhance quality and add
                new content. If you believe something is unclear or should be
                added, please feel free to let me know{" "}
                <Link to="/contact">here</Link>! I appreciate any user feedback.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="disclaimer">
          Images used and graphics made on this site may use content from
          Toontown Rewritten. I do not claim ownership of this content.
        </div>
      </>
    );
  }
}

export default About;
