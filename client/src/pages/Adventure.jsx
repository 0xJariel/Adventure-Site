import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Adventure() {
  const { id } = useParams();
  const [adventure, setAdventure] = useState("Loading");

  useEffect(() => {
    const getAdventure = async () => {
      try {
        console.log(id);
        const response = await axios.get(`/api/adventures/${id}`);
        console.log(response);
        setAdventure(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAdventure();
  }, []);

  return (
    <div>
      Adventure : {id}
      {adventure.title}
    </div>
  );
}

export default Adventure;
