import React from "react";

const UserAccountMenu = () => {
  return (
    <div className="user-menu">
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/logout">Sign Out</a>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountMenu;
