import React, { Children, useContext } from "react";

function QueryButton({ name }) {
  const filteredName = name.toLowerCase();
  // const { setAdventures } = useContext();

  // ! speed considerations when querying the database
  // >>caching mechanisms or optimizing database queries
  async function queryFunction() {
    try {
      const response = await axios.get(`/api/category/${filteredName}`);
      console.log(response.data);
      setAdventures(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="" onClick={queryFunction}>
      {name}
    </div>
  );
}

export default QueryButton;
