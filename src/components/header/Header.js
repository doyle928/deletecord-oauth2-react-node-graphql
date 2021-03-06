import React, { useState, useEffect } from "react";
import "../../styles/components/header/header.css";
import axios from "axios";
import icon from "../../styles/components/header/images/icon.svg";
import logo from "../../styles/images/deletecord.png";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import UserAccountMenu from "./UserAccountMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState("closed-menu");
  const [user, setUser] = useState({});
  const [userAccountMenu, setUserAccountMenu] = useState(false);

  const handleOpenMenu = () => {
    setMobileMenu("open-menu");
    let els = document.querySelectorAll(".prevent-jump");
    let body = document.querySelector("body");
    els.forEach(el => {
      if (el.attributes.class.value.indexOf("close") > -1) {
        el.style.transform = `scale(.95,1.05) translateX(-${getScrollbarWidth()}px)`;
      } else {
        el.style.width = `calc(100% - ${getScrollbarWidth()}px)`;
      }
    });
    body.style.overflowY = "hidden";
  };

  const handleCloseMenu = () => {
    setMobileMenu("closed-menu");
    let els = document.querySelectorAll(".prevent-jump");
    let body = document.querySelector("body");
    body.style.overflowY = "visible";
    els.forEach(el => {
      if (el.attributes.class.value.indexOf("close") > -1) {
        el.style.transform = `scale(.95,1.05) translateX(0px)`;
      } else {
        el.style.width = `100%`;
      }
    });
  };

  const handleScroll = () => {
    setTimeout(() => {
      if (
        window.location.pathname === "/" ||
        window.location.pathname === "/about/"
      ) {
        window.scrollTo(0, window.innerHeight);
      } else {
        window.location.href = `${window.location.origin}/about`;
      }
    }, 200);
  };

  const handleUserMenu = selector => {
    let menu = document.querySelectorAll(".user-menu");
    setUserAccountMenu(!userAccountMenu);
    if (selector === "mobile") {
      if (userAccountMenu) {
        menu.forEach(el => {
          el.style.transform = `scaleY(0)`;
          el.style.height = `0`;
          el.style.opacity = `0`;
        });
      } else {
        menu.forEach(el => {
          el.style.transform = `scaleY(1)`;
          el.style.height = `auto`;
          el.style.opacity = `1`;
        });
      }
    } else if (selector === "desktop") {
      if (userAccountMenu) {
        menu.forEach(el => {
          el.style.transform = `scaleY(0)`;
          el.style.opacity = `0`;
        });
      } else {
        menu.forEach(el => {
          el.style.transform = `scaleY(1)`;
          el.style.opacity = `1`;
        });
      }
    }
  };

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  useEffect(async () => {
    await axios
      .get("http://localhost:8080/info")
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="header">
      <a href="/" className="left">
        <img className="icon" src={icon} />
        <img className="logo" src={logo} />
      </a>
      <div className="right">
        <div className="mobile">
          <MenuRoundedIcon
            onClick={() => handleOpenMenu()}
            className={`open ${mobileMenu}`}
          />
          <CloseRoundedIcon
            onClick={() => handleCloseMenu()}
            className={`close prevent-jump ${mobileMenu}`}
          />
          <div className={`menu ${mobileMenu}`}>
            <ul>
              <li></li>
              <li onClick={() => (handleCloseMenu(), handleScroll())}>
                <p>About Us</p>
              </li>
              <li>
                <p>Discord Token</p>
              </li>
              <li>
                {"id" in user ? (
                  user.avatar ? (
                    <div
                      className="mobile-signed-in-avatar"
                      onClick={() => handleUserMenu("mobile")}
                    >
                      <div className="user-base">
                        <img
                          src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                        />
                        <p>{user.username}</p>
                        {userAccountMenu ? (
                          <ExpandLessRoundedIcon />
                        ) : (
                          <ExpandMoreRoundedIcon />
                        )}
                      </div>
                      <UserAccountMenu />
                    </div>
                  ) : (
                    <div
                      className="mobile-signed-in"
                      onClick={() => handleUserMenu("mobile")}
                    >
                      <div className="user-base">
                        <p>{user.username}</p>
                        {userAccountMenu ? (
                          <ExpandLessRoundedIcon />
                        ) : (
                          <ExpandMoreRoundedIcon />
                        )}
                      </div>
                      <UserAccountMenu />
                    </div>
                  )
                ) : (
                  <a href="/auth/discord">Sign In with Discord</a>
                )}
              </li>
            </ul>
          </div>
          <span
            className={`mobile-menu-opacity ${mobileMenu}`}
            onClick={() => handleCloseMenu()}
          ></span>
        </div>
        <div className="desktop">
          <div className="right-menu-left">
            <ul>
              <li onClick={() => handleScroll()}>
                <p>About Us</p>
              </li>
              <li>
                <p>Discord Token</p>
              </li>
            </ul>
          </div>
          <div className="right-menu-right">
            {"id" in user ? (
              user.avatar ? (
                <div
                  className="desktop-signed-in-avatar"
                  onClick={() => handleUserMenu("desktop")}
                >
                  <div className="user-base">
                    <img
                      src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                    />
                    <p>{user.username}</p>
                    {userAccountMenu ? (
                      <ExpandLessRoundedIcon />
                    ) : (
                      <ExpandMoreRoundedIcon />
                    )}
                  </div>
                  <UserAccountMenu />
                </div>
              ) : (
                <div
                  className="desktop-signed-in"
                  onClick={() => handleUserMenu("desktop")}
                >
                  <div className="user-base">
                    <p>{user.username}</p>
                    {userAccountMenu ? (
                      <ExpandLessRoundedIcon />
                    ) : (
                      <ExpandMoreRoundedIcon />
                    )}
                  </div>
                  <UserAccountMenu />
                </div>
              )
            ) : (
              <a href="/auth/discord">Sign In</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
