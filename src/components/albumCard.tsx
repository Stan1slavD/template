import React, { FunctionComponent } from "react";
import { getImg } from "../checkImg";

export interface Welcome {
    data: Data;
}

export interface Data {
    name:       string;
    playcount:  string;
    listeners:  string;
    url:string;
    artist:string
    image: Image[];
}

export interface Image {
    "#text": string;
    size:    string;
}

const AlbumCard:React.FunctionComponent<Welcome>=(fetchData)=> {
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
