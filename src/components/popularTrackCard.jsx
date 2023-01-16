import React from "react";

function PopularTrackCard(fetchData) {
  return (
    <div className="popular_track_card">
      <a href={fetchData.data.url} className="link">
        <div className="card_content">
          <img
            src={fetchData.data.image[3]["#text"]}
            alt={fetchData.data.name}
            width="75"
            height="75"
          />
          <div className="card_text">
            <span className="track_name">{fetchData.data.name}</span>
            <span className="track_group"> {fetchData.data.artist.name} </span>
            <span className="track_ganre">
              listeners: {fetchData.data.listeners}{" "}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PopularTrackCard;
