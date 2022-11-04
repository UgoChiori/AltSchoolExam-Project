import React from "react";
import { Link, Outlet } from "react-router-dom";

function MyRepositories() {
  return (
    <>
      <div className="repo-list">
        <div className="repo">
          <nav className="nav-links">
            <Link to="repo1">ReactRouterAssignment</Link>
            <Link to="repo2">Calculator</Link>

            <Link to="repo3">MyPortfolio</Link>
            <Link to="repo4">HackathonPhonie</Link>

            <Link to="repo5">FlightBooking.</Link>
            <Link to="repo6">MyChromeExtension</Link>
          </nav>

          <Outlet className="outlet" />
        </div>
      </div>
    </>
  );
}

export default MyRepositories;
