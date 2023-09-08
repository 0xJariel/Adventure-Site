import React, { Children } from "react";

function QuerySelector({ children }) {
  // for styling purposes mainly and fun!
  return <div className="flex gap-3">{children}</div>;
}

export default QuerySelector;
