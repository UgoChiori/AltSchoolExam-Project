import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ setExplode }) {
  return (
    <div>
     <NavLink to="/portfolio"></NavLink>
     <button onClick={() => setExplode((e) => !e)}>ErrorBoundary</button> 
    </div>
  );
}

export default NavBar;
