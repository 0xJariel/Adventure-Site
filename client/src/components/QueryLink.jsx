import React, { Children } from "react";

function QueryLink({ queryFunction, name }) {
  return <div onClick={queryFunction}>{name}</div>;
}

export default QueryLink;
