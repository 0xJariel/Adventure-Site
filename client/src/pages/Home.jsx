import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import LoginDropdown from "../components/Login";
import WelcomeMsg from "../components/WelcomeMsg";
import AdventureList from "../components/AdventureList";
import Highlight from "../components/Highlight";
import QueryBar from "../components/QueryBar";
import QueryButton from "../components/QueryButton";

function Home() {
  const { adventures, setAdventures } = useOutletContext();

  return (
    <>
      <WelcomeMsg />
      <Highlight />
      <QueryBar setAdventures={setAdventures}>
        <QueryButton name={"Backpacking"} stateChangeFunction={setAdventures} />
        <QueryButton name={"Hiking"} stateChangeFunction={setAdventures} />
        <QueryButton name={"Rafting"} stateChangeFunction={setAdventures} />
        <QueryButton name={"Ski Touring"} stateChangeFunction={setAdventures} />
      </QueryBar>

      <AdventureList adventures={adventures} />
    </>
  );
}

export default Home;
