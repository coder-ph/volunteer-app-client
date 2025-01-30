import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";

export default function NavBar() {
  return (
    <nav className="p-6 shadow-md bg-white">
      <div className="flex items-center justify-between">
        {/* Social Icons */}
        <ul className="flex gap-5">
          <li>
            <box-icon
              name="linkedin-square"
              type="logo"
              animation="tada"
              rotate="90"
              color="rgba(13,120,224,0.59)"
            ></box-icon>
          </li>
          <li>
            <box-icon
              name="youtube"
              type="logo"
              rotate="90"
              animation="tada"
              color="rgba(234,28,8,0.97)"
            ></box-icon>
          </li>
        </ul>

        {/* Centered Navigation Buttons */}
        <ul className="flex pl-55 gap-10 mx-auto">
          <button>About</button>
          <button>Donate</button>
          <button>Our Projects</button>
          <button>Team</button>
          <button>Contact</button>
        </ul>

        {/* Organization Login & Careers - Moved to Right */}
        <ul className="flex gap-10 ml-auto">
          <button className="cursor-pointer">Organization Login</button>
          <button className="cursor-pointer">Careers</button>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="mt-4 px-6">
        <ul className="flex gap-10">
          <li>
            <NavLink to="/" className="hover:text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-events" className="hover:text-blue-600">
              My Events
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
