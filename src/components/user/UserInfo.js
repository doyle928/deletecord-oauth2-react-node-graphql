import React, { useCallback, useState, useEffect } from "react";
import "../../styles/components/user_info/user_info.css";
import axios from "axios";
import TimelineRoundedIcon from "@material-ui/icons/TimelineRounded";
import StoreRoundedIcon from "@material-ui/icons/StoreRounded";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import SetToken from "./components/SetToken";
import { Redirect } from "react-router-dom";
import history from "../../history";
import Account from "./components/Account";
import Channels from "./components/Channels";
import Dashboard from "./components/Dashboard";
import DMs from "./components/DMs";
import Guilds from "./components/Guilds";

const UserInfo = () => {
  const [getData, setData] = useState({});
  const [active, setActive] = useState(0);
  const [client, setClient] = useState({});

  const items = [
    {
      id: 0,
      target: "Dashboard",
      icon: <TimelineRoundedIcon />,
      component: <Dashboard client={client} />
    },
    {
      id: 1,
      target: "Servers",
      icon: <StoreRoundedIcon />,
      component: <Guilds client={client} />
    },
    {
      id: 2,
      target: "Channels",
      icon: <CommentRoundedIcon />,
      component: <Channels client={client} />
    },
    {
      id: 3,
      target: "DM Channels",
      icon: <QuestionAnswerRoundedIcon />,
      component: <DMs client={client} />
    },
    {
      id: 4,
      target: "Account",
      icon: <AccountCircleRoundedIcon />,
      component: <Account client={client} />
    },
    {
      id: 5,
      target: "Settings",
      icon: <SettingsRoundedIcon />,
      component: <SetToken client={client} setClient={setClient} />
    }
  ];

  const NavLink = ({ id, target, icon, link, isActive, onClick }) => (
    <li
      onClick={useCallback(() => onClick(id), [id])}
      className={`navLink ${isActive ? "active" : ""}`}
    >
      {icon}
      <p>{target}</p>
    </li>
  );

  useEffect(async () => {
    await axios
      .get("http://localhost:8080/info")
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
        history.push("/");
      });
  }, []);

  const renderSwitch = () => {
    return items[active].component;
  };

  return (
    <div className="user-info">
      <div className="user-info-user">
        {typeof getData === "object" && "id" in getData ? (
          <div className="user-info-user-account-info">
            <img
              src={`https://cdn.discordapp.com/avatars/${getData.id}/${getData.avatar}.png`}
            />
            <h4>
              <span>{getData.username}</span>#{getData.discriminator}
            </h4>
            <p>{getData.id}</p>
          </div>
        ) : (
          <div className="user-info-user-account-info-error"></div>
        )}
        <ul>
          {items.map(item => (
            <NavLink
              {...item}
              onClick={() => {
                setActive(item.id);
              }}
              isActive={active === item.id}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="data">{renderSwitch()}</div>
    </div>
  );
};

export default UserInfo;
