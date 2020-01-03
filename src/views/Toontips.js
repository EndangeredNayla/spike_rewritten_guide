import React from "react";
import { Link } from "react-router-dom";

class Toontips extends React.Component {
    componentDidMount() {
        document.title = "Toontips | Spike's Rewritten Guide";
    }

    render() {
        return (
            <>
                <div className="panel">
                    <div className="panel-content">
                        <h1>Toon Tips</h1>
                        <p>
                            There are a lot of ins and outs to playing Toontown,
                            and every player has their own way of doing things.
                            Over the years, I have discovered some simple,
                            useful tips that enhance the gameplay experience.
                            Some tips include universal toon strategy and some
                            tips include personal preferences. If there is a tip
                            that you do not see here and you think that tip
                            would helpful, please feel free to share it with me{" "}
                            <Link to="/contact">here</Link>!
                        </p>
                        <h2>Contents</h2>
                        <ol>
                            <li>
                                <a href="#1">What to do in a Cog Battle</a>
                            </li>
                            <li>
                                <a href="#2">Where to Find Toons</a>
                            </li>
                            <li>
                                <a href="#3">Playground &amp; Street Secrets</a>
                            </li>
                            <li>
                                <a href="#4">Gag Experience Multipliers</a>
                            </li>
                            <li>
                                <a href="#5">Picking the Right Toontasks</a>
                            </li>
                            <li>
                                <a href="#6">Pointers for Sellbot HQ</a>
                            </li>
                            <li>
                                <a href="#7">Cashbot HQ Strategy</a>
                            </li>
                            <li>
                                <a href="#8">Helpful Tips for Lawbot HQ</a>
                            </li>
                            <li>
                                <a href="#9">Bossbot HQ Survival Tips</a>
                            </li>
                            <li>
                                <a href="#10">Notes on Organic Gag Tracks</a>
                            </li>
                            <li>
                                <a href="#11">
                                    Things to Think About When Fishing
                                </a>
                            </li>
                            <li>
                                <a href="#12">Tips for Kart Racing</a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="1">What to do in a Cog Battle</summary>
                            <h2>Gag Crossing</h2>
                            <p>
                                Try not to cross over toons when choosing cogs
                                to hit. Meaning, if you are positioned on the
                                left side of the battle, hit the cogs on the
                                left side. Why? Crossing can often cause
                                confusion between toons which can then lead to
                                one cog being over hit or not being hit at all.
                                This is especially helpful with game lag and
                                countdown clock pressure. Of course, sometimes
                                this method is not always possible, but do your
                                best to choose cogs wisely!
                            </p>
                            <img
                                className="content-img"
                                style={{ height: 300 + "px" }}
                                src="/images/gag_cross_example.png"
                                alt="Gag crossing example"
                            />
                            <h2>Sound vs. Lure</h2>
                            <p>
                                I am sure every toon has seen the SpeedChat
                                phrase "Don't use sound on lured cogs!". This is
                                a very important tip, because if violated, it
                                could jeoprodize the whole cog battle. If, for
                                example, sound is used on a round of four lured
                                cogs, then all of those cogs get pushed back and
                                will attack the toons. Sound also does not have
                                jump back bonus damage and it will remove any
                                possible jump back damage given by gags that
                                come after sound. No good!
                            </p>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="2">Where to Find Toons</summary>
                            <h2>Toon HQs Group Tracker</h2>
                            <p>
                                Sometimes it can be hard to find other toons to
                                help defeat a cog building, to join a boss
                                battle, or to go racing with; especially if no
                                toon friends are online. Instead of waiting for
                                hours on end for maybe one toon to help, check
                                out{" "}
                                <a
                                    href="https://toonhq.org/groups/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Toon HQs Group Tracker
                                </a>
                                . This tracker allows toons to easily find other
                                toons to group up with in real time! A toon can
                                either join an existing group or create their
                                own. No more begging for help on the streets!
                            </p>
                            <img
                                className="content-img"
                                style={{ height: 225 + "px" }}
                                src="/images/toonhq_group.PNG"
                                alt="Toon HQ Group tracker screenshot"
                            />
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="3">
                                Playground &amp; Street Secrets
                            </summary>
                            <h2>Street Shortcuts</h2>
                            <p>
                                Running to Minnie's Melodyland, Cashbot HQ, or
                                Lawbot HQ by foot is easy with shortcuts on the
                                streets that lead to those playgrounds. Quickly
                                get to Minnie's Melodyland from Toontown Central
                                through the shortcut located at the halfway
                                point of Silly Street (left). Speedily get to
                                Cashbot HQ by using the shortcut located at the
                                beginning of Pajama Place (middle). Get to
                                Lawbot HQ so fast it seems as if you teleported
                                through the shortcut located at the beginning of
                                Polar Place (right).
                            </p>
                            <div className="row row-images">
                                <div className="column">
                                    <img
                                        className="content-img"
                                        style={{ height: 250 + "px" }}
                                        src="/images/Street_Map_Silly_Street.png"
                                        alt="Silly Street map"
                                    />
                                </div>
                                <div className="column">
                                    <img
                                        className="content-img"
                                        style={{ height: 250 + "px" }}
                                        src="/images/Street_Map_Pajama_Place.png"
                                        alt="Pajama Place map"
                                    />
                                </div>
                                <div className="column">
                                    <img
                                        className="content-img"
                                        style={{ height: 250 + "px" }}
                                        src="/images/Street_Map_Polar_Place.png"
                                        alt="Polar Place map"
                                    />
                                </div>
                            </div>
                            <h2>Polar Toon</h2>
                            <p>
                                Have you ever wanted your toon to be giant &amp;
                                colorless (white). The Polar Toon affect
                                temporarily makes your toon giant and white. To
                                experience this, a toon can visit Paula Behr at
                                Hibernation Vacations on Polar Place in The
                                Brrrgh. There, a toon must say "Howdy!" to Paula
                                using SpeedChat. This affect only works in the
                                Brrrgh and is NOT permanent.
                            </p>
                            <img
                                className="content-img"
                                style={{ height: 225 + "px" }}
                                src="/images/hibernation_vacations.PNG"
                                alt="Hibernation Vacations"
                            />
                            <h2>Resistance Salute</h2>
                            <p>
                                Ever see other toons around Toontown yelling
                                "Toons of the world unite!" and jumping up with
                                a fist in the air? That animation is called the
                                Resistance Salute. This is not an animation a
                                toon can purchase like Bow or Dance. Toon musts
                                visit Whispering Willow at Talking in Your Sleep
                                Voice Training on Pajama Place in Donald's
                                Dreamland. There, a toon must ask Willow "Would
                                you like some help?" using SpeedChat. Once
                                completed, the Resistance Salute animation can
                                be found under the Emotions tab in the Speedchat
                                menu.
                            </p>
                            <img
                                className="content-img"
                                style={{ height: 225 + "px" }}
                                src="/images/resistance_salute.png"
                                alt="Resistance Salute animation"
                            />
                            <h2>Goofy Speedway Teleport Trick</h2>
                            <p>
                                New toon? Go to Goofy's Speedway (accessible in
                                Toontown Central near the Clothing Shop) to gain
                                teleport access. A toon can then get back to
                                Toontown Central quickly from anywhere in
                                Toontown by teleporting to Goofy Speedway and
                                using the tunnel to the playground.
                            </p>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="4">Gag Experience Multipliers</summary>
                            <h2>Cog HQ Bonus</h2>
                            <p>
                                For those who are used to Toontown Online or are
                                just unaware, Cog HQs give double XP! That means
                                twice the gag XP and twice the promotion XP in
                                half the time! Cog HQ bonuses are not affected
                                by district cog invasions.
                            </p>
                            <h2>Building Multipliers</h2>
                            <p>
                                To effectively and efficiently train gags,
                                defeating cog buildings during invasions is the
                                way to go. Not only do toons get +.5 added to
                                the experience multipler each floor they go up
                                (i.e. 1x, 1.5x, 2x...), during invasions, the
                                multipler is also doubled (i.e. 2x, 3x, 4x...)!
                                It is really easy to earn max gag experience
                                points for a gag track (300pts)!
                            </p>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="5">
                                Picking the Right Toontasks
                            </summary>
                            <h2>Vague Toontasks</h2>
                            <p>
                                When progressing throughout the main storyline,
                                try to pick toontasks that are as vague as
                                possible. For example, "Defeat 50 cogs" or
                                "Defeat 25 Bossbots". With vague tasks like
                                these, a toon can go to invasion districts and
                                fight cogs while also satisfying toontask
                                requirements. This way a toon can gain gag
                                experience quicker while also working on
                                toontasks.
                            </p>
                            <img
                                className="content-img"
                                style={{ height: 200 + "px" }}
                                src="/images/vague_tt.PNG"
                                alt="Vague Toontasks example"
                            />
                            <h2>Similar Toontasks</h2>
                            <p>
                                If you're a player that likes to multitask, try
                                to pick toontasks that relate to one another. If
                                a toon has a task they cannot avoid such as
                                "Recover 10 Postcards from Double Talkers", then
                                try to pick other tasks that would also be
                                satisfied by defeating Double Talkers. For
                                example, "Defeat 50 Lawbots".
                            </p>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="6">Pointers for Sellbot HQ</summary>
                            <h2>Two Short Factories</h2>
                            <p>
                                Completing two short factories is quicker than
                                going through one long factory, assuming
                                everything goes accoridng to plan. Additionally,
                                two shorts will reward a toon with 960 merits,
                                which is 184 more merits compared to the long
                                route reward. This is very helpful for mid- to
                                high-level suits.
                            </p>
                            <h2>Factory Restock Barrels</h2>
                            <h4>The Lava Room</h4>
                            <p>
                                Most toons stop here when following the long
                                route in a factory, usually to replenish sound
                                gags.
                            </p>
                            <ul>
                                <li>Squirt restock barrel (fire hose)</li>
                                <li>Sound restock barrel (elephant trunk)</li>
                                <li>10 laff restock barrel</li>
                                <li>Two 25 jellybean restock barrels</li>
                            </ul>
                            <h4>The Paint Mixer Room</h4>
                            <ul>
                                <li>25 jellybeans restock barrel</li>
                                <li>Two Toon-up restock barrels</li>
                                <li>Throw restock barrel</li>
                                <li>Squirt restock barrel</li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="7">Cashbot HQ Strategy</summary>
                            <h2>Throwing Safes at the C.F.O.</h2>
                            <p>
                                During the final round of the C.F.O., when using
                                the crane, do not throw a safe at the C.F.O.
                                unless he is stunned. If a safe is thrown
                                without him being stunned, the C.F.O. will
                                obtain a helmet that will need to be knocked off
                                in order to deal more damage. To know if the
                                C.F.O. is stunned, the sound of an aoogah will
                                go off and C.F.O. will appear dizzy. In the
                                screenshot below, the C.F.O. is wearing a safe
                                helmet.
                            </p>
                            <img
                                className="content-img"
                                style={{ height: 250 + "px" }}
                                src="/images/cfo_safehelmet.PNG"
                                alt="CFO with Safe Helmet on"
                            />
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="8">Helpful Tips for Lawbot HQ</summary>
                            <h2>DA Office Strategy</h2>
                            <p>
                                Under the assumption that all four toons in a DA
                                Office have sound, there is a certain
                                expectation for each of the battles on a floor.
                                During the first round on a floor, two toons
                                will use the fog horn and the other two will
                                either use an elephant trunk or an aoogah.
                                Typically, the toons who did not use a fog on
                                the previous floor will use it on the next
                                floor. During the second round, the cogs will be
                                lured and defeated individually. The second
                                round is a great battle to use an organic cake
                                on the level 11 cogs.
                            </p>
                            <p>
                                Usually, with a soundless toon present, the
                                first round will be lured. During the second
                                round, all toons with sound will use fog while
                                the soundless toons takes out the level 12
                                Skelecog. This occurs until toons run out of fog
                                horns.
                            </p>
                            <h2>Filling the Jury Seats with Toons</h2>
                            <p>
                                During the Chief Justice battle, round two
                                involves shooting familar toons out of a cannon
                                to fill as many jury seats as possible. It might
                                be tempting to start shooting as soon as the
                                round starts, but this is not advantageous. It
                                is best to wait till 22 seconds left on the
                                clock to start shooting. Why? At this point, all
                                the cogs have sat down and toons can take over
                                while also not leaving a lot of time for cogs to
                                take back over the jury.
                            </p>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="9">Bossbot HQ Survival Tips</summary>
                            <h2>Golf Course Maze</h2>
                            <p>
                                The Golf Course mazes seem impossible,
                                especially with little experience. But, toons
                                can see what direction to go based on the
                                textures of the hedges. If there are vines,
                                toons need to go left. If there are no vines,
                                toons should go right. There are also colored
                                flags that hint how far a toon is from the end
                                of the maze.
                            </p>
                            <h2>The Mole Stomp</h2>
                            <p>
                                In a Cog Golf Course, one of the first obstacles
                                or puzzles encountered is the mole stomp. There
                                is a 6x6 grid of holes in the ground where moles
                                will pop up. An effective way to conquer this is
                                to divide the grid by four, so each toon in the
                                Golf Course gets their own 3x3 corner of the
                                grid. A toon is responsible for their own corner
                                and does not have to worry about the rest of the
                                grid. This makes for a quicker run and provides
                                a higher success rate.
                            </p>
                            <h2>The One Fog Rule (C.E.O.)</h2>
                            <p>
                                During the first round, toons typcally follow a
                                strategy often referred to as the "One Fog
                                Rule". When toons want to use sound, there is
                                only one fog used per round (if needed).
                                Starting from the left, toons will take turns
                                using a fog. For example, the first toon to use
                                a fog will be the leftmost toon, then in the
                                next round, the second leftmost toon will use a
                                fog horn. This rule prevents confusion and helps
                                toons extend the life of their 3 fogs.
                            </p>
                            <h2>When the C.E.O. says "Fore!"</h2>
                            <p>
                                When the C.E.O. yells "Fore!" jump off the table
                                after he swings and back up. He already targeted
                                each toons location, so if a toon moves, the
                                golf balls will miss them.
                            </p>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="10">
                                Notes on Organic Gag Tracks
                            </summary>
                            <h2>Organic Throw</h2>
                            <p>
                                Organic throw is pretty helpful in a lot of
                                situations. An organic cake deals 110 damage,
                                which can defeat a level 11 cog by itself if
                                that cog is lured. On top of that, a level 5 cog
                                can be defeated with an organic whole cream pie,
                                or an organic whole fruit pie if the cog is
                                lured. Highly recommended!
                            </p>
                            <h2>Organic Lure</h2>
                            <p>
                                Organic lure is a great way to help train the
                                lure track until it is maxed. Organic lure
                                changes the lure hit accuracy from low to
                                medium, making a pretty impressive small magnet.
                                This provides a less tedious way to train the
                                lure gag track without missing every single
                                time.
                            </p>
                            <h2>Other Organic Gag Benefits</h2>
                            <ul>
                                <li>
                                    A level 7 Cog can be defeated with an
                                    organic Trapdoor.
                                </li>
                                <li>
                                    A level 12 Cog can be defeated with an
                                    organic Railroad.
                                </li>
                                <li>
                                    A level 2 Cog can be defeated with an
                                    organic Bugle.
                                </li>
                                <li>
                                    A level 9 Cog can be defeated with an
                                    organic Birthday Cake and an organic Geyser.
                                </li>
                                <li>
                                    A level 10 Cog can be defeated with an
                                    organic Wedding Cake.
                                </li>
                                <li>
                                    A level 10 Cog that is lured can be defeated
                                    with an organic Storm Cloud.
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="11">
                                Things to Think About When Fishing
                            </summary>
                            <h2>Catching New Species</h2>
                            <img
                                src="/images/sillymeter_fishteam.png"
                                className="badge"
                                alt="Silly meter fish team badge"
                            />
                            <p>
                                Fishing is a very time consuming task and it
                                requires a lot of patience. Using the fishing
                                guide will help increase the chances of catching
                                fish species. Additionally, try to go fishing
                                when the Decrease Fish Rarity Silly Meter (badge
                                to the right) award is active! Most importantly,
                                do not give up.
                            </p>
                            <h2>Earning Jellybeans Quickly</h2>
                            <p>
                                Have you ever found yourself in need of
                                jellybeans but you do not want to play trolley
                                games? Well do I have a solution for you! Go
                                fishing with whatever jellybeans are left in
                                your toons jar and keep selling fish until you
                                are content. Added bonus, this also helps
                                fishing progress.
                            </p>
                        </details>
                    </div>
                </div>
                <div className="panel" style={{ marginTop: 0 }}>
                    <div className="panel-content">
                        <details>
                            <summary id="12">Tips for Kart Racing</summary>
                            <h2>Quickly Earning Sweeping Race Trophies</h2>
                            <p>
                                Sometimes earning those pesky sweeping trophies
                                is a pain. A clever way to earn sweeping
                                trophies is to swap sweeping wins with another
                                toon. This way there is no stress or pressure to
                                win 3 races in a row during a Grand Prix, and
                                you and your toon friend benefit from the deal!
                                This strategy is also useful for single track
                                races, to increase your races won count.
                            </p>
                        </details>
                    </div>
                </div>
            </>
        );
    }
}

export default Toontips;
