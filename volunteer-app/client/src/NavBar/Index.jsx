import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";

export default function NavBar() {
  return (
    <nav className="p-6 shadow-md bg-[#b1bfdb] text-[#333D79] font-bold font-serif border-b-emerald-50 fixed w-full z-50">
      <div className="flex items-center justify-between">
        
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

        
        <ul className="flex pl-75 gap-10 mx-auto">
          <button className="text-[#333D79]">About</button>
          <button className="text-[#333D79]">Donate</button>
          <button className="text-[#333D79]">Our Projects</button>
          <button className="text-[#333D79]">Team</button>
          <button className="text-[#333D79]">Contact</button>
        </ul>

        
        <ul className="flex gap-10 ml-auto">
          <button className="cursor-pointer text-[#333D79]">
            Organization Login
          </button>
          <button className="cursor-pointer text-[#333D79]">Careers</button>
        </ul>
      </div>

      
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
