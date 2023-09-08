import React, { Children, useContext } from "react";
import axios from "axios";
// takes in a category name > returns database results and changes the state
function QueryButton({ name, stateChangeFunction }) {
  const filteredName = name.toLowerCase();
  // ! speed considerations when querying the database
  // >>caching mechanisms or optimizing database queries
  async function queryFunction() {
    try {
      // change to filtered name when database responds to all lowercase inputs
      const response = await axios.get(`/api/category/${name}`);
      console.log(response.data);
      stateChangeFunction(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className=" px-4 rounded-full" onClick={queryFunction}>
      {name}
    </div>
  );
}

export default QueryButton;
