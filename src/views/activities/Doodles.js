import React from "react";

class Doodles extends React.Component {
    componentDidMount() {
        document.title = "Doodles | Spike's Rewritten Guide";
    }

    render() {
        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Doodles</h1>
                        <p>
                            Have you ever found yourself wanting to have a
                            fluffy companion to greet you at the estate, and
                            assist you and your friends in cog battles? Well I
                            have the best news! Doodles are the pets of Toontown
                            and a toons best friend. Any toon can adopt a doodle
                            of their choice, as long as they have enough
                            jellybeans!
                        </p>
                        <div className="panel-nav">
                            <a href="#adopt">Adopting a Doodle</a>
                            <a href="#train">Trick Training</a>
                            <a href="#more">More Information</a>
                        </div>
                        <h2 id="adopt">Adopting a Doodle</h2>
                        <p>
                            To adopt a doodle, a toon must go to any of the
                            Petshops located in each playground (excluding Chip
                            N' Dales Acorn Acres). A pet shop resembles a giant
                            fire hydrant with a massive fish tank on top,
                            displayed below.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 225 + "px" }}
                            src="/images/petshop.PNG"
                            alt="Pet shop in Toontown Central"
                        />
                        <p>
                            Depending on which Pet Shop a toon adopts their
                            doodle from, they will get many randomized doodle
                            variations from colors and spots to tails, ears,
                            noses, and hair. There is no pattern to what doodles
                            will be available, it is just the luck of the draw!
                            These doodle options change everyday, so if you are
                            not satisified with your choices, come back another
                            day! However, if you see a doodle you love, do not
                            hesitate because it will be hard to find that same
                            doodle again. If a toon is not satisfied with the
                            purchased doodle, they can return their current
                            doodle without a refund.
                        </p>
                        <p>
                            Additionally, the playground in which a toon chooses
                            to purchase their doodle from determines the overall
                            quality of the doodle. In other words, a doodle
                            adopted in Toontown Central will not have as good of
                            traits as a doodle adopted in Donald's Dreamland.
                            Higher quality doodles are easier to train and
                            maintain, and they are more likely to listen. With
                            that being said, the higher quality doodles cost
                            significantly more jellybeans.
                        </p>
                        <img
                            className="badge"
                            style={{
                                marginTop: -15 + "px",
                                marginLeft: 5 + "px",
                                height: 175 + "px"
                            }}
                            src="/images/doodle_info.PNG"
                            alt="Doodle info card"
                        />
                        <p>
                            After adopting a doodle, the doodle will live at the
                            toons estate. And if other toons on the account also
                            have doodles, they will all live in the estate
                            neighborhood and they will all be available for
                            interaction for any toon that is logged in. When a
                            toon arrives at their estate, the doodles tags will
                            appear on the screen, just like other online toons
                            name tags appear. Upon clicking the doodle's name
                            tag, a small box will show up, similar to when
                            another toons name is clicked. This box shows a
                            doodles information such as its tricks tab, and the
                            ability to call, feed, and pet the doodle. On top of
                            that, a doodle's current mood is displayed. A toons
                            doodle also appears on the friends list so they can
                            check on their doodle at any given time.
                        </p>
                        <h2 id="train">Trick Training</h2>
                        <p>
                            Doodles can be trained to do tricks for toons, which
                            can heal a set amount of laff depending on the
                            trick. These tricks can be done simply at a toons
                            estate. They can also be called into a cog battle as
                            an SOS to perform a trick to heal all the toons
                            partaking in the battle. Training a trick boosts how
                            much laff a trick can restore, and reduces the
                            chance of the doodle getting confused. Trick
                            training can be tracked on the doodles info card, by
                            clicking on the Pet Details arrow{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/pet_details_tab.PNG"
                                    alt="Pet details button"
                                />
                            </span>
                            .
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 255 + "px" }}
                            src="/images/trick_training.PNG"
                            alt="Trick training doodle card"
                        />
                        <p>
                            Every toon starts out with the trick phrase "Jump!".
                            The rest of the trick phrases can be purchased in
                            Clarabelle's Cattlelog. To use a trick phrase, open
                            up SpeedChat and go to PETS then TRICKS. There you
                            can find a list of the trick phrases a toon has
                            available. Shout the trick around your doodle and
                            see if they perform! The more they perform, the
                            better they will be and the trick experience goes
                            up. Doodles can become tired after doing tricks,
                            signaled by the 'ZZZ' cloud icon, and will need to
                            take a break. To speed up the resting process and to
                            make the doodle feel happy, a toon can feed him/her
                            with jellybeans and praise him/her by saying "Good
                            boy!" or "Good girl!".
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 255 + "px" }}
                            src="/images/doodle_trick_calls.PNG"
                            alt="SpeedChat doodle tricks"
                        />
                        <p>
                            Please note that doodle trick training is a lengthy
                            task and requires a lot of patience. Each trick bar
                            has to be filled up as many times as the original
                            laff restore to be completely maxed. For example,
                            the Jump trick bar has to be filled 5 times and the
                            Speak trick bar has to be filled 11 times.
                        </p>
                        <p>
                            The following table lists all the trick phrases and
                            their laff restore ranges:
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Doodle Trick</th>
                                    <th>Laff Points Restored</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jump</td>
                                    <td>5 - 10</td>
                                </tr>
                                <tr>
                                    <td>Beg</td>
                                    <td>6 - 12</td>
                                </tr>
                                <tr>
                                    <td>Play Dead</td>
                                    <td>7 - 14</td>
                                </tr>
                                <tr>
                                    <td>Rollover</td>
                                    <td>8 - 16</td>
                                </tr>
                                <tr>
                                    <td>Backflip</td>
                                    <td>9 - 18</td>
                                </tr>
                                <tr>
                                    <td>Dance</td>
                                    <td>10 - 20</td>
                                </tr>
                                <tr>
                                    <td>Speak</td>
                                    <td>11 - 22</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 id="more">More Information</h2>
                        <h3>Moods & Traits</h3>
                        <p>
                            All doodles can experience different types of moods,
                            which affects behavior. Different traits a doodle
                            may come with can affect how often certain moods
                            occur. For example, if a doodle is often tried, then
                            that doodle will experience tiredness frequently.
                            Each mood has its own unique symbol that appears
                            above a doodles head.
                        </p>
                        <ul>
                            <li>
                                <b>Affectionate</b> - The doodle is feeling
                                loving towards their owner and may want more
                                attention. When the doodle is affectionate, a
                                pink heart will be above their head.
                            </li>
                            <li>
                                <b>Confused</b> - The doodle is confused. This
                                might be the result of a doodle not
                                understanding a trick command. When any doodle
                                is confused, a question mark will be above their
                                head.
                            </li>
                            <li>
                                <b>Hungry</b> - The doodle is hungry and wants
                                jellybeans! When the doodle is hungry, a chicken
                                leg will be above their head. The symbol will
                                disappear when a toon feeds the doodle.
                            </li>
                            <li>
                                <b>Bored</b> - The doodle is bored and wants
                                more interaction. When the doodle is bored, an
                                ellipsis (...) will appear. The symbol will
                                disappear when scratching the doodle and
                                practicing tricks.
                            </li>
                            <li>
                                <b>Excited</b> - The doodle is thrilled to see
                                their owner. When the doodle is excited, an
                                exclamation mark will appear.
                            </li>
                            <li>
                                <b>Sad</b> - The doodle feels neglected and sad.
                                This can happen if a toon is saying mean things
                                to them. When the doodle is sad, a deep-colored
                                blue crying face will be above their head. The
                                symbol will disappear with positive interaction.
                            </li>
                            <li>
                                <b>Sleepy</b> - The doodle is tired. This also
                                means the doodle does not want to perform tricks
                                right now. When the doodle is tired, a purple
                                thought bubble with 'ZZZ' will be above their
                                head. The symbol will disappear with
                                interaction.
                            </li>
                            <li>
                                <b>Lonely</b> - The doodle is lonely and needs
                                their owner's attention. When the doodle is
                                lonely, an symbol of doodles huddled together
                                will be above their head. The symbol will
                                disappear with interaction.
                            </li>
                            <li>
                                <b>Angry</b> - The doodle is angry with their
                                owner. This can result from neglection and
                                negative interaction. When the doodle is angry,
                                a grey cloud with lightning bolts will be above
                                their head. The symbol will disappear with
                                positive interaction.
                            </li>
                        </ul>
                        <h3>SOS Call</h3>
                        <p>
                            Just like SOS toons, doodles can also be summoned in
                            a battle to help heal participating toons. A toon
                            can call their doodle by selecting the{" "}
                            <span>
                                <img
                                    className="book-tab"
                                    src="/images/sos_button.PNG"
                                    alt="SOS button"
                                />
                            </span>{" "}
                            button and picking their doodles name in the 'Online
                            Toon Friends' area. When a toon calls their doodle,
                            they select a trick and the doodle tries to perform
                            that trick. If it fails, the doodle is sad. If it
                            succeeds, all toons will be rewarded laff points,
                            similar to how Toon-up works. The amount of laff
                            given is determined by the trick performed. After
                            the doodles attempt, they will return back to their
                            owner's estate.
                        </p>
                        <img
                            className="content-img"
                            style={{ height: 225 + "px" }}
                            src="/images/doodle_battle.PNG"
                            alt="SOS doodle in cog battle"
                        />
                        <br />
                        <br />
                        <div className="panel-nav">
                            <a href="#adopt">Adopting a Doodle</a>
                            <a href="#train">Trick Training</a>
                            <a href="#more">More Information</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Doodles;
