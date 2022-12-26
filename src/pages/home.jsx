import React, { useState, useEffect } from "react";
import { API_KEY } from "../Api";
import PopularTrackCard from "../components/popularTrackCard";
import TopHitCard from "../components/topHitCard";
function HomePage() {
  const [hits, setHits] = useState([]);
  const [popularTracks, setPopularTracks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) return;
    fetchHits();
    fetchPopularTracks();
    setLoaded(true);
  }, [loaded]);

  /** GET запрос к lastFm Api на получение топа артистов */
  function fetchHits() {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&limit=12&format=json`
    )
      .then((res) => res.json())
      .then((data) => data.artists)
      .then((artist) =>
        setHits(
          artist.artist.sort((a, b) => {
            return b.listeners - a.listeners;
          })
        )
      )
      .catch((err) => alert("Не получилось загрузить хиты:\n" + err));
  }

  /** GET запрос к lastFm Api на получение топа треков */
  function fetchPopularTracks() {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&limit=18&format=json`
    )
      .then((res) => res.json())
      .then((data) => data.tracks)
      .then((track) =>
        setPopularTracks(
          track.track.sort((a, b) => {
            return b.listeners - a.listeners;
          })
        )
      )
      .catch((err) =>
        alert("Не получилось загрузить популярные треки:\n" + err)
      );
  }

  return (
    <main className="content">
      <h1 className="main_title">Music</h1>
      <h2 className="title">Hot right now</h2>
      <div className="hits">
        {hits.map((el) => {
          return <TopHitCard key={el.name} data={el} />;
        })}
      </div>
      <h2 className="title">Popular tracks</h2>
      <div className="popular_tracks">
        {popularTracks.map((el) => {
          return <PopularTrackCard key={el.name} data={el} />;
        })}
      </div>
    </main>
  );
}

export default HomePage;
