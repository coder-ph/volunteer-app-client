import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home/Index";

export default function NavBar() {
  return (
    <nav>
      <div className="flex">
        <div className="flex flex-row">
          <ul className="flex gap-10 pl-30">
            <li>Ln image</li>
            <li>yt image</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-10 ">
            <li>Organization Login</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex flex-row gap-10">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/my-events"}>My Events</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
