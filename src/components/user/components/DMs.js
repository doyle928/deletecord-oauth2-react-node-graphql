import React from "react";
import NotLoggedIn from "../NotLoggedIn";
import _ from "lodash";

const DMs = params => {
  return (
    <div className="user-dms">
      {("dms" in params.client && (
        <div>
          <div className="dms-count">{_.size(params.client.dms)}</div>
        </div>
      )) || <NotLoggedIn />}
    </div>
  );
};

export default DMs;
