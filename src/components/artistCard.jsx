import React from "react";
import { getImg } from "../checkImg";

function ArtistCard(fetchData) {
  return (
    <div className="artist_card">
      <img
        src={getImg(fetchData.data.image[3]["#text"])}
        alt="artist"
        width="250"
        height="250"
      />
      <div className="artist_text">
        <span className="name">{fetchData.data.name}</span>
        <span className="listeners">{fetchData.data.listeners} listeners</span>
      </div>
    </div>
  );
}

export default ArtistCard;
