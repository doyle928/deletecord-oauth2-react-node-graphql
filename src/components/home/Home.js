import React from "react";
import "../../styles/components/home/home.css";
import stars from "../../styles/components/home/images/stars.svg";
import treesLeft from "../../styles/components/home/images/trees_left.svg";
import treesRights from "../../styles/components/home/images/trees_right.svg";
import smallTreesLeft from "../../styles/components/home/images/small_trees_left.svg";
import smallTreesRight from "../../styles/components/home/images/small_trees_right.svg";
import footer1 from "../../styles/components/home/images/footer1.svg";
import footer2 from "../../styles/components/home/images/footer2.svg";
import Fire from "./Fire";
import DiscordAuth from "./DiscordAuth";
import FireParticles from "./FireParticles";
// import LeavesFalling from "./LeavesFalling";

const Home = () => {
  return (
    <div className="home">
      <div className="home-background">
        <img src={stars} className="home-background-stars" />
        <img src={treesRights} className="home-background-trees-far-left" />
        <img src={treesLeft} className="home-background-trees-left" />
        <img src={treesRights} className="home-background-trees-right" />
        <img src={treesRights} className="home-background-trees-far-right" />

        <img
          src={smallTreesRight}
          className="home-background-small-trees-far-left"
        />
        <img
          src={smallTreesLeft}
          className="home-background-small-trees-left"
        />
        <img
          src={smallTreesRight}
          className="home-background-small-trees-right"
        />
        <img
          src={smallTreesLeft}
          className="home-background-small-trees-far-right"
        />
        <Fire />
        <div className="home-background-fire-particles">
          <FireParticles />
        </div>
        {/* <LeavesFalling /> */}
      </div>
      <DiscordAuth />
      <div className="home-info">
        <div>
          <h3 className="main">Deletecord Message Deleter</h3>
          <p>
            At Discord, we take privacy and security very seriously. As such, we
            encourage everyone to participate in our open bug bounty program,
            which incentivizes researchers and hackers alike to responsibly
            find, disclose, and help us resolve security vulnerabilities. As
            with many bug bounties out there, Discord has a fairly
            straightforward and simple set of rules that help protect both us
            and those looking to disclose. Thanks for participating and happy
            bug hunting!
          </p>
          <h3 className="how">How it Works</h3>
          <p>
            At Discord, we take privacy and security very seriously. As such, we
            encourage everyone to participate in our open bug bounty program,
            which incentivizes researchers and hackers alike to responsibly
            find, disclose, and help us resolve security vulnerabilities. As
            with many bug bounties out there, Discord has a fairly
            straightforward and simple set of rules that help protect both us
            and those looking to disclose. Thanks for participating and happy
            bug hunting!
          </p>
          <h3 className="rules">Rules</h3>
          <p>
            At Discord, we take privacy and security very seriously. As such, we
            encourage everyone to participate in our open bug bounty program,
            which incentivizes researchers and hackers alike to responsibly
            find, disclose, and help us resolve security vulnerabilities. As
            with many bug bounties out there, Discord has a fairly
            straightforward and simple set of rules that help protect both us
            and those looking to disclose. Thanks for participating and happy
            bug hunting!
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="background">
          <img className="transition" src={footer1} />
          <img className="transition" src={footer2} />
          <img className="stars" src={stars} />
        </div>
        <div className="content">
          <h3>Ready to start ?</h3>
          <a href="/auth/discord">Continue with Discord</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
