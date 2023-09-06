import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function Home() {
  const [adventures, setAdventures] = useOutletContext();

  return (
    <div>
      {adventures &&
        adventures.map((item) => {
          <div key={item._id}>
            <li>{item.title}</li>
            <li>{item.description}</li>
          </div>;
        })}
    </div>
  );
}

export default Home;
