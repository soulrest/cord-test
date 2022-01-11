import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

const SideNavBar = () => {
  const [open, isOpen] = useState(false);
  /* Write the necessary functions to show and hide the side bar on small devices */

  const toggleSideBar = () => isOpen(!open);

  return (
    <>
      {/* Implement a hamburger icon slide in effect for small devices */}
      <BurgerMenuIcon show={!open}>
        <button onClick={toggleSideBar}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </BurgerMenuIcon>
      <SideNavBarCont className={open ? "visible" : ""} onClick={toggleSideBar}>
        <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
          Wesley
          <NavIcon arrow></NavIcon>
        </SideNavMainLink>
        <SideNavMainLink className="menu_nav_link" to="/discover">
          Discover
          <NavIcon search></NavIcon>
        </SideNavMainLink>
        <SideNavHeader>
          <HeaderText>Watched</HeaderText>
        </SideNavHeader>
        <NavLink className="menu_nav_link" to="/watched/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/watched/tv-shows">
          TV Shows
        </NavLink>
        <SideNavHeader>
          <HeaderText>Saved</HeaderText>
        </SideNavHeader>
        <NavLink className="menu_nav_link" to="/saved/movies">
          Movies
        </NavLink>
        <NavLink className="menu_nav_link" to="/saved/tv-shows">
          TV Shows
        </NavLink>
      </SideNavBarCont>
    </>
  );
};

const BurgerMenuIcon = styled.div`
  position: fixed;
  top: 10px;
  left: 20px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  button {
    border: none;
    border-radius: 5px;
    background-color: ${(props) =>
      props.color || props.theme.colors.lightBackground};
  }
  button > div {
    width: 35px;
    height: 3px;
    border-radius: 10px;
    background-color: black;
    margin: 8px;
  }
  @media ${(props) => props.theme.media.laptop} {
    display: none;
  }
`;

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 1;
  width: 260px;
  height: 100vh;
  background-color: ${(props) => props.color || props.theme.colors.sideNavBar};
  transform: translate(-100%) scale(1);
  transition: all 0.5s ease-in;
  @media ${(props) => props.theme.media.laptop} {
    z-index: 9;
    transform: scale(1) translate(0);
  }
  &.visible {
    z-index: 9;
    transform: scale(1) translate(0);
    transition: all 0.1s ease-in-out;
  }
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 35px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  :hover {
    background-color: ${(props) =>
      props.color || props.theme.colors.primaryColor};
  }
`;

const NavIcon = styled.div`
  background-image: url(${({ arrow }) => (arrow ? Arrow : SearchWhite)});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  float: right;
  margin: 5px 0;
`;

const SideNavHeader = styled.div`
  position: relative;
  :after {
    content: "";
    position: absolute;
    border-bottom: 1px solid
      ${(props) => props.color || props.theme.colors.fontColor};
    height: 1px;
    width: 225px;
    bottom: 10%;
    right: 0;
  }
`;

const HeaderText = styled.div`
  padding: 35px 35px;
  font-size: 1.6em;
  font-weight: 400;
  color: white;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 5px 35px;
  font-size: 1.2em;
  font-weight: 100;
  color: ${(props) => props.color || props.theme.colors.lightLinkColor};
`;

export default SideNavBar;
