import React from "react";

function TopHitCard(fetchData) {
  console.log(fetchData);
  return (
    <div className="hit_card">
      <a href="${data.url}" className="link">
        <img
          src={fetchData.data.image[3]["#text"]}
          height="150"
          alt="${data.name}"
          className="hit_img"
        />
        <div className="hit_text">
          <span className="autor">{fetchData.data.name}</span>
          <span className="ganre">listeners: {fetchData.data.listeners}</span>
        </div>
      </a>
    </div>
  );
}

export default TopHitCard;
