import React from "react";
import NotLoggedIn from "../NotLoggedIn";
import _ from "lodash";
import Moment from "react-moment";
import noServerIcon from "../../../styles/images/no-server-icon.png";
import brazil from "../../../styles/images/region-flags/brazil.png";
import europe from "../../../styles/images/region-flags/europe.png";
import hongKong from "../../../styles/images/region-flags/hong-kong.png";
import india from "../../../styles/images/region-flags/india.png";
import japan from "../../../styles/images/region-flags/japan.png";
import russia from "../../../styles/images/region-flags/russia.png";
import singapore from "../../../styles/images/region-flags/singapore.png";
import southAfrica from "../../../styles/images/region-flags/south-africa.png";
import sydney from "../../../styles/images/region-flags/sydney.png";
import us from "../../../styles/images/region-flags/us.png";

const Guilds = params => {
  console.log(params);

  const renderChanList = server => {
    if (_.size(server.channels) > 3) {
      let newChanObj = _.take(server.channels, 3);
      return (
        <ul>
          {newChanObj.map((c, i) => (
            <li key={i}>
              <p>{c.name}</p>
            </li>
          ))}
          <li>
            <p>{_.size(server.channels) - 3} more text channels...</p>
          </li>
        </ul>
      );
    } else if (_.size(server.channels) > 0) {
      return (
        <ul>
          {server.channels.map((c, i) => (
            <li key={i}>
              <p>{c.name}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>no text channels in this server</p>;
    }
  };

  const renderFlag = server => {
    if (server.region === "brazil")
      return <img src={brazil} alt="Brazil Flag" className="server-flag" />;
    else if (server.region === "europe")
      return <img src={europe} alt="Europe Flag" className="server-flag" />;
    else if (server.region === "hongkong")
      return (
        <img src={hongKong} alt="Hong Kong Flag" className="server-flag" />
      );
    else if (server.region === "india")
      return <img src={india} alt="India Flag" className="server-flag" />;
    else if (server.region === "japan")
      return <img src={japan} alt="Japan Flag" className="server-flag" />;
    else if (server.region === "russia")
      return <img src={russia} alt="Russia Flag" className="server-flag" />;
    else if (server.region === "singapore")
      return (
        <img src={singapore} alt="Singapore Flag" className="server-flag" />
      );
    else if (server.region === "southafrica")
      return (
        <img
          src={southAfrica}
          alt="South Africa Flag"
          className="server-flag"
        />
      );
    else if (server.region === "sydney")
      return <img src={sydney} alt="Sydney Flag" className="server-flag" />;
    else return <img src={us} alt="US Flag" className="server-flag" />;
  };

  return (
    <div className="user-servers">
      {("guilds" in params.client && (
        <div className="servers">
          {params.client.guilds.map((g, i) => (
            <div key={i} className="server-card">
              <div className="server-header">
                {g.splash && (
                  <img
                    src={`https://cdn.discordapp.com/splashes/${g.id}/${g.splash}.png`}
                    alt={`${g.name} Server Splash`}
                    className="server-splash"
                  />
                )}
                <div className="server-icon-region">
                  {(g.icon && (
                    <img
                      src={`https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png`}
                      alt={`${g.name} Server Icon`}
                      className="server-icon"
                    />
                  )) || (
                    <img
                      src={noServerIcon}
                      alt={`${g.name} Server Icon`}
                      className="server-icon"
                    />
                  )}
                  {renderFlag(g)}
                </div>
                <div className="server-header-info">
                  <p>{g.memberCount} members</p>
                </div>
              </div>
              <div className="server-info">
                <span>
                  <h3>{g.name}</h3>
                  <p>
                    Joined on&nbsp;
                    <Moment unix format="D MMMM, YYYY">
                      {new Date(g.joinedTimestamp / 1000)}
                    </Moment>
                  </p>
                </span>
                {renderChanList(g)}
                <button>Leave Server</button>
              </div>
            </div>
          ))}
        </div>
      )) || <NotLoggedIn />}
    </div>
  );
};

export default Guilds;
