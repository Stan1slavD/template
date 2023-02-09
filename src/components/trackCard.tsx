import React from "react";
import { getImg } from "../checkImg";
export interface Welcome {
  data: Data;
}

export interface Data {
  name: string;
  playcount: string;
  listeners: string;
  url: string;
  artist: string;
  image: Image[];
}

export interface Image {
  "#text": string;
  size: string;
}

const TrackCard: React.FC<Welcome> = (fetchData) => {
  return (
    <div className="track">
      <button className="clear_btn">
        <img src="icons/play.svg" alt="play" width="50" height="50" />
      </button>
      <img
        src={getImg(fetchData.data.image[3]["#text"])}
        width="50"
        height="50"
        alt="track"
      />
      <a href="" className="h_link">
        <img src="icons/heart.svg" alt="" width="25" height="25" />
      </a>
      <span className="song">{fetchData.data.name}</span>
      <span className="singer">{fetchData.data.artist}</span>
      <span className="duration">listeners: {fetchData.data.listeners}</span>
    </div>
  );
};

export default TrackCard;
