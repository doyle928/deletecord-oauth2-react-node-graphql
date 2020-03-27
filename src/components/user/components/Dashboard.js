import React, { useEffect } from "react";
import NotLoggedIn from "../NotLoggedIn";
import _ from "lodash";
import StoreRoundedIcon from "@material-ui/icons/StoreRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";

const Dashboard = params => {
  let channelsSize = () => {
    return params.client.guilds
      .map(g => {
        return g.channels.length;
      })
      .reduce((a, b) => a + b, 0);
  };

  return (
    <div className="user-dashboard">
      {("id" in params.client && (
        <div>
          <div className="servers dashboard-card">
            <StoreRoundedIcon />
            <h3>{_.size(params.client.guilds)}</h3>
            <p>servers</p>
          </div>
          <div className="channels dashboard-card">
            <CommentRoundedIcon />
            <h3>{channelsSize()}</h3>
            <p>channels</p>
          </div>
          <div className="dms dashboard-card">
            <QuestionAnswerRoundedIcon />
            <h3>{_.size(params.client.dms)}</h3>
            <p>dms</p>
          </div>
        </div>
      )) || <NotLoggedIn />}
    </div>
  );
};

export default Dashboard;
