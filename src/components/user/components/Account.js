import React from "react";
import NotLoggedIn from "../NotLoggedIn";

const Account = params => {
  return (
    <div className="user-account">
      {("id" in params.client && <div>{params.client.id}</div>) || (
        <NotLoggedIn />
      )}
    </div>
  );
};

export default Account;
