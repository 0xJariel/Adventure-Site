import React from "react";

function AdventureList({ adventures }) {
  return (
    <div>
      {adventures &&
        adventures.map((item) => {
          return (
            <div key={item._id}>
              <li>{item.title}</li>
              <li>{item.description}</li>
            </div>
          );
        })}
    </div>
  );
}

export default AdventureList;
