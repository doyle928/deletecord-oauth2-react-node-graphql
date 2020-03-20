import React from "react";
import NotLoggedIn from "../NotLoggedIn";
import _ from "lodash";

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
            <p>+{_.size(server.channels) - 3} more text channels...</p>
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

  return (
    <div className="user-servers">
      {("guilds" in params.client && (
        <div className="servers">
          {params.client.guilds.map((g, i) => (
            <div key={i}>
              <div className="server-header">
                <img
                  src={`https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png`}
                />
                <div className="server-info">
                  <h3>{g.name}</h3>
                  <p>{g.joinedTimestamp}</p>
                  <p>{g.id}</p>
                </div>
              </div>
              <div className="server-channels">{renderChanList(g)}</div>
            </div>
          ))}
        </div>
      )) || <NotLoggedIn />}
    </div>
  );
};

export default Guilds;
