import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import LoginDropdown from "../components/Login";
import WelcomeMsg from "../components/WelcomeMsg";
import AdventureList from "../components/AdventureList";
import Highlight from "../components/Highlight";
import QuerySelector from "../components/QuerySelector";

function Home() {
  const [adventures, setAdventures] = useOutletContext();

  return (
    <>
      <WelcomeMsg />
      <Highlight />
      <QuerySelector adventures={adventures} setAdventures={setAdventures} />
      <AdventureList adventures={adventures} />
    </>
  );
}

export default Home;
