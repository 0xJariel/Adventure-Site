import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Login from "./Login";

function Navbar() {
  return (
    <nav className="flex justify-between py-4">
      <div className="logo">QuestR</div>
      <Login />
    </nav>
  );
}

export default Navbar;
