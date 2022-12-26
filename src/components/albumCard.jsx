import React from "react";
import { getImg } from "../checkImg";

function AlbumCard(fetchData) {
  return (
    <div className="artist_card">
      <img
        src={getImg(fetchData.data.image[3]["#text"])}
        alt="album"
        width="250"
        height="250"
      />
      <div className="artist_text">
        <span className="name">{fetchData.data.name}</span>
        <span className="listeners">{fetchData.data.artist}</span>
      </div>
    </div>
  );
}
export default AlbumCard;
