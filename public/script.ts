const topArtistList: HTMLDivElement | null =
  document.body.querySelector(".hits");
const topTracksList: HTMLDivElement | null =
  document.body.querySelector(".popular_tracks");

async function fetchTopArtists(): Promise<any> {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=12&format=json`
  )
    .then((res) => res.json())
    .then((data) => data.artists)
    .then((artist) => artist.artist.forEach((data) => pushToHits(data)));
}

async function fetchTopTracks(): Promise<any> {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=18&format=json`
  )
    .then((res) => res.json())
    .then((data) => data.tracks)
    .then((track) => track.track.forEach((data) => pushToPopularTracks(data)))
    .catch((err) => console.log(err));
}

function pushToHits(data): void {
  const template: string = `<div class="hit_card">
        <a href="${data.url}" class="link">
          <img
            src="${data.image[4]["#text"]}"
            height="150"
            alt="${data.name}"
            class="hit_img"
          />
          <div class="hit_text">
            <span class="autor">${data.name}</span>
            <span class="ganre">listeners: ${data.listeners}</span>
          </div>
        </a>
      </div>`;
  topArtistList?.insertAdjacentHTML("beforeend", template);
}

function pushToPopularTracks(data): void {
  const template: string = `<div class="popular_track_card">
    <a href="${data.url}" class="link">
      <div class="card_content">
        <img
          src="${data.image[3]["#text"]}"
          alt="${data.name}"
          width="75"
          height="75"
        />
        <div class="card_text">
          <span class="track_name">${data.name}</span>
          <span class="track_group"> ${data.artist.name} </span>
          <span class="track_ganre">listeners: ${data.listeners} </span>
        </div>
      </div>
    </a>
  </div>`;
  topTracksList?.insertAdjacentHTML("beforeend", template);
}

fetchTopArtists();
fetchTopTracks();

