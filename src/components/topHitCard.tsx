import React from "react";
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

const TopHitCard: React.FC<Welcome> = (fetchData) => {
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
};

export default TopHitCard;
