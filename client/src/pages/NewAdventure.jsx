import React from "react";

function NewAdventure() {
  return (
    <div>
      <form action="/newAdventure" method="POST">
        <label htmlFor="title">
          <input type="text" />
        </label>
        <label htmlFor="description">
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default NewAdventure;
