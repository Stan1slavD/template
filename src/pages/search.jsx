import React, { useEffect, useState } from "react";
import { API_KEY } from "../Api";
import AlbumCard from "../components/albumCard";
import ArtistCard from "../components/artistCard";
import TrackCard from "../components/trackCard";

function SearchPage() {
  const [header, setHeader] = useState("");
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [titles, setTitles] = useState({ artist: "", album: "", track: "" });
  function getData(value) {
    fetchArtists(value);
    fetchAlbums(value);
    fetchTracks(value);
  }

  /** GET запрос к lastFm Api на поиск и получение артистов
   *  @param {string} value - значение поисковой строки
   */
  function fetchArtists(value) {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&api_key=${API_KEY}&limit=8&format=json`
    )
      .then((res) => res.json())
      .then((data) =>
        setArtists(
          data.results.artistmatches.artist.sort((a, b) => {
            return a.listeners - b.listeners;
          })
        )
      )
      .catch((err) => alert("Не получилось загрузить исполнителей:\n" + err));
  }

  /** GET запрос к lastFm Api на поиск и получение альбомов
   *  @param {string} value - значение поисковой строки
   */
  function fetchAlbums(value) {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=${API_KEY}&limit=8&format=json`
    )
      .then((res) => res.json())
      .then((data) => data.results.albummatches)
      .then((album) => setAlbums(album.album))
      .catch((err) => alert("Не получилось загрузить альбомы:\n" + err));
  }

  /** GET запрос к lastFm Api на поиск и получение треков
   *  @param {string} value - значение поисковой строки
   */
  function fetchTracks(value) {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=10&format=json`
    )
      .then((res) => res.json())
      .then((data) => data.results.trackmatches)
      .then((track) =>
        setTracks(
          track.track.sort((a, b) => {
            return a.listeners - b.listeners;
          })
        )
      )
      .catch((err) => alert("Не получилось загрузить треки:\n" + err));
  }

  return (
    <main className="content">
      <h1 className="search_title">{header}</h1>
      <div className="search_filter">
        <span className="filter filter_selected">Top results</span>
        <span className="filter">Artists</span>
        <span className="filter">Albums</span>
        <span className="filter">Tracks</span>
      </div>
      <div className="search_field">
        <input
          type="text"
          placeholder="search..."
          className="search"
          onKeyDown={(e) => {
            if ((e.key == "Enter") & (e.target.value !== "")) {
              setAlbums([]);
              setArtists([]);
              setTracks([]);
              getData(e.target.value);
              setHeader("Search results for: " +e.target.value);
              setTitles({
                artist: "Artists",
                album: "Albums",
                track: "Tracks",
              });
            }
          }}
        />
        <button className="clear_btn">
          <img
            src="icons/x.svg"
            alt="x"
            width="20"
            height="20"
            className="x_img"
          />
        </button>
        <hr className="v_hr" />
        <button className="clear_btn">
          <img
            src="icons/search_black.svg"
            alt="x"
            width="20"
            height="20"
            className="s_img"
          />
        </button>
      </div>
      <h2 className="search_title">{titles.artist}</h2>
      <div className="artists">
        {artists.map((el) => {
          return <ArtistCard key={el.name} data={el} />;
        })}
        <div className="link_container">
          <a href="/" className="link">
            More artists >
          </a>
        </div>
      </div>
      <h2 className="search_title">{titles.album}</h2>
      <div className="albums">
        {albums.map((el) => {
          return <AlbumCard key={el.name} data={el} />;
        })}
        <div className="link_container">
          <a href="/" className="link">
            More albums >
          </a>
        </div>
      </div>
      <h2 className="search_title">{titles.track}</h2>
      <div className="tracks">
        <div className="link_container">
          {tracks.map((el) => {
            return <TrackCard key={el.name} data={el} />;
          })}

          <a href="/" className="link">
            More tracks >
          </a>
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
