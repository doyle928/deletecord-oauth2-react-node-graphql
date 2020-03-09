import React, { useState, useEffect } from "react";
import logo from "../../styles/components/home/images/discord-logo.png";
import logo2 from "../../styles/components/home/images/discord-logo-2.png";
import deletecord from "../../styles/images/deletecord.png";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const DiscordAuth = () => {
  // const [getValues, setValues] = useState(null);

  // const handleSubmit = async e => {
  //     e.preventDefault();

  //     console.log(getValues);
  //     await axios
  //         .post(
  //             "http://localhost:8080/api",
  //             {
  //                 query: `mutation {
  //   setToken(token: "${getValues}") {
  //     token
  //   }
  // }`
  //             },
  //             {
  //                 headers: {
  //                     "Content-Type": "application/json"
  //                 }
  //             }
  //         )
  //         .then(async () => {
  //             const response = await fetch("/guilds");
  //             const body = await response.json();
  //             if (response.status !== 200) throw Error(body.message);
  //             console.log(body);
  //             return body;
  //         });
  // };

  // const handleLogin = async () => {
  //     await axios
  //         .post("http://localhost:8080/login-discord")
  //         .then(res => res.json())
  //         .then(info =>
  //             fetch("https://discordapp.com/api/users/@me", {
  //                 headers: {
  //                     authorization: `${info.token_type} ${info.access_token}`
  //                 }
  //             })
  //         )
  //         .then(console.log);
  // };

  /* <input onChange={e => setValues(e.target.value)} />
      <button onClick={e => handleSubmit(e)}>Submit</button> */

  const handleScroll = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <div className="discord-auth prevent-jump">
      <img src={deletecord} />
      <div>
        {/* <h2>Welcome</h2> */}
        <p>Let's reclaim your privacy</p>
      </div>
      <div className="discord-auth-discord-link-container">
        <a href="/auth/discord">Continue with Discord</a>
        <div onClick={() => handleScroll()}>
          <p>LEARN MORE </p>
          <ExpandMoreRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default DiscordAuth;
