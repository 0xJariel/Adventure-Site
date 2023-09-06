import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function Home() {
  const [adventures, setAdventures] = useOutletContext();

  return (
    <div>
      {adventures &&
        adventures.map((item) => {
          <ul>
            <li>{item.title}</li>
            <li>{item.description}</li>
          </ul>;
        })}
    </div>
  );
}

export default Home;
