import React from "react";
import styled from "styled-components";
import Burger from "./Burger";


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #e1e4e8;
  padding: 0 20px;
  display: flex;
  justify-content: space between;

  // #logo {
  //   // padding: 15px 0;
  // }
`;

const NavBar = () => {
  return (
    <Nav>
      <div id="logo"></div>
      <Burger />
    </Nav>
  );
};

export default NavBar;
