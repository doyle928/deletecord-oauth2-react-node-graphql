import React from "react";
import NotLoggedIn from "../NotLoggedIn";
import _ from "lodash";

const Channels = params => {
  return (
    <div className="user-channels">
      {("channels" in params.client && (
        <div>{_.size(params.client.channels)}</div>
      )) || <NotLoggedIn />}
    </div>
  );
};

export default Channels;
