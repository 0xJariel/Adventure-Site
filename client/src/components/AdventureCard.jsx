import React from "react";

function AdventureCard({ src, title, duration, locstion, likes, comments }) {
  return (
    <div>
      <img src="" alt="" />
      <div className="details">
        <div className="title"></div>
        <div className="duration"></div>
      </div>
      <div className="social">
        <div className="location"></div>
        <div className="likes"></div>
        <div className="comments"></div>
      </div>
    </div>
  );
}

export default AdventureCard;
