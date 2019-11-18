import React from "react";
import { Link } from "react-router-dom";

class Faq extends React.Component {
  componentDidMount(){
    document.title = "FAQ | Spike's Rewritten Guide";
  }

  render() {
    return (
      <>
        <div className="panel">
          <div className="panel-content">
            <h1>Frequently Asked Questions</h1>
            <p>
              Got some questions? Make sense. You are on the Frequently Asked
              Questions page, after all! Take a peek at some of the questions
              below to see if that helps solve the riddle in your head. Always
              check back as there are constant updates and more common questions
              might appear to help you out!
            </p>
            <p>
              If you cannot find what you need here, feel free to head over to
              the <Link to="/contact">contact</Link> page to send Spike an
              inquiry!
            </p>
            <p>
              As always, if you have an account specific, troubleshooting, or
              other administrative questions for a Toontown Rewritten cast
              member, check out the official Toontown Rewritten{" "}
              <a
                href="https://www.toontownrewritten.com/help"
                target="_Blank"
                rel="noopener noreferrer"
              >
                help
              </a>{" "}
              page.
            </p>
          </div>
        </div>
        <div className="panel" style={{ marginTop: 0 }}>
          <div className="panel-content">
            <details>
              <summary>About Toontown Rewritten</summary>
              <h2>What is Toontown Rewritten?</h2>
              <p>
                Toontown Rewritten is a fan made revival of{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Toontown_Online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disney's Toontown Online
                </a>
                . Toontown is a massively multiplayer online game that is for
                all ages! Players can create their own toon and fight with other
                toons against the cogs who are trying to turn Toontown into a
                dreadful corporate world. Shortly after the shutdown of Disney's
                Toontown in 2013, Toontown Rewritten came about to promise a
                revival of the beloved game. Not only has Toontown Rewritten
                picked up where Disney left off, the game has been improved
                further and well-maintained. To learn more about Toontown
                Rewritten, its foundation, and its revival, click{" "}
                <a
                  href="https://www.toontownrewritten.com/help/faq/about-toontown"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                !
              </p>
              <h2>Is a paid membership required to play Toontown Rewritten?</h2>
              <p>
                Nope! Toontown Rewritten is completely free to play. There is no
                catch, no advertisements, nothing! That means they do not accept
                donations either. Signing up to play is easy to do and free. So
                if you have not joined Toontown Rewritten yet, what are you
                waiting for!? Are YOU toon enough?
              </p>
            </details>
          </div>
        </div>
        <div className="panel" style={{ marginTop: 0 }}>
          <div className="panel-content">
            <details>
              <summary>Gameplay</summary>
              <h2>
                What is the main difference between throw and squirt? What are
                the benefits of each?
              </h2>
              <p>
                As both throw and squirt are both single hit gag tracks, with
                the exception of a level 7 gag, it seems like there is no
                obvious difference between the two tracks. You may wonder why
                you even need squirt if you have throw. The main difference
                between throw and squirt is accuracy. If you take a look at the
                gag details by hovering over any squirt gag in Gag Table, you
                will notice it says "Accuracy: High". If you follow the same
                procedure for any throw gag, you will notice it says "Accuracy:
                Medium". Because of this, if you are trying to guarantee a hit,
                save yourself, or stun for a fellow toon, squirt would be your
                best choice as it has a much better chance of actually hitting
                the cog you are up against. On the other hand, if you are trying
                to acheive more damage, quickly defeat a cog, or have your turn
                taken sooner (as gag turns are taken in top to bottom order),
                then throw would be your better option as it has higher
                precidence and evokes higher damage.
              </p>
              <h2>Why is being a soundless toon such a bad thing?</h2>
              <p>
                Personally, I do not think there is any problem with being a
                soundless toon. Almost everyone in Toontown has sound, so one
                toon not having it does not seem like much of an issue for me.
                However, a lot of other toons feel differently than I do! A lot
                of toons feel that being soundless makes gameplay longer and it
                puts a hiccup in the typical gameplay strategy for multiple
                types of cog related activities. Sound is a quick way to defeat
                a round of cogs if used correctly and if one toon does not have
                sound, there are less opportunities to quickly run through a
                battle. With all of that being said, if you want to be a
                soundless toon, I strongly encourage it! There are more gameplay
                strategies out there than just sound and it is a blast to
                explore more ways to play Toontown! And do not worry, there are
                plenty of toons out there who would be more than happy to
                include a soundless toon on their team!
              </p>
              <h2>Why do toons pick the drop gag track?</h2>
              <p>
                Drop is a gag track that is very effective if used
                strategically. The accuracy of drop increases after a cog is
                stunned with sound, throw, or squirt. If a cog is not defeated
                after a toons turn, another toon who chose drop can finish off
                the cog. While drop may have low accuracy, its pro is that it
                deals a high amount of damage when striking a cog. Additionally,
                if toons are against a Version 2.0 cog and it explodes, drop can
                still hit the remaining skelecog to deal more damage. Of course
                each gag track has its pro and cons, it is up to the toons
                gameplay strategy and how they use their gag tracks.
              </p>
            </details>
          </div>
        </div>
        <div className="panel" style={{ marginTop: 0 }}>
          <div className="panel-content">
            <details>
              <summary>Activities</summary>
              <h2>
                What is the benefit of maxing out the gardening shovels if you
                collect all 40 flower species prior to maxing?
              </h2>
              <p>
                Honestly, the only benefit of maxing out the shovels is gaining
                access to the various Toon Statues you can plant outside your
                toon estate. Other than that, you just have bragging rights. To
                see more information about gardening statues, check out the{" "}
                <Link to="/gardening">gardening</Link> activity page!
              </p>
              <h2>Where can I get the best doodle?</h2>
              <p>
                There are many different types of doodles, ranging from
                appearances or personality traits. The more you spend on a
                doodle, the better off their personalities will be, which will
                be very helpful in terms of training and care. The best quality
                doodles come from Donalds Dreamland, but expect to pay between
                3500-5000 jellybeans. If you are willing to sacrifice good
                personality traits to spend less jellybeans, Toontown Central is
                the place to adopt. To find middle tier doodles, shop at the pet
                shops located in Daisy Gardens or Minnies Melodyland. As a side
                note, the more expensive doodles also come with more complex
                appearances, with more patterns and unique colorings. To learn
                more about doodles and their potential, check out the{" "}
                <Link to="/doodle">doodle</Link> activity page!
              </p>
            </details>
          </div>
        </div>
      </>
    );
  }
}

export default Faq;
