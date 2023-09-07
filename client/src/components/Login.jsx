import React, { useState } from "react";
import {
  HiMiniChevronDown,
  HiOutlineBell,
  HiMiniMagnifyingGlass,
} from "react-icons/hi2";

function Login({ username }) {
  const [userName, setUserName] = useState(null);
  return (
    <div className="loggedInDropdown flex h-auto gap-2">
      <div className="left flex gap-1 align-middle">
        <div className="name">{userName || `Jariel`} </div>
        <div className="carrot flex ">
          <HiMiniChevronDown className="self-center" />
        </div>
        <div className="h-6 w-6 rounded-full bg-slate-500">
          <img src="" alt="" />
        </div>
      </div>
      <div className="right flex">
        <div className="flex text-xl gap-1">
          <HiOutlineBell className="self-center" />
          <HiMiniMagnifyingGlass className="self-center" />
        </div>
      </div>
    </div>
  );
}

export default Login;
