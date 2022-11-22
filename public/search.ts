const API_KEY: string = "4d8ee139f9b64f2e68e42e8254d559f1";
const artistList: HTMLDivElement | null =
  document.body.querySelector(".artists");
const albumsList: HTMLDivElement | null =
  document.body.querySelector(".albums");
const tracksList: HTMLDivElement | null =
  document.body.querySelector(".tracks");
const search: HTMLInputElement | null = document.querySelector(".search");
const searchTitle: HTMLHeadingElement | null =
  document.body.querySelector(".search_title");
const titles: any = document.body.querySelectorAll(".search_title");
const moreLinks: any = document.body.querySelectorAll(".more_link");

async function fetchArtists(value: string): Promise<any> {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=8&format=json`
  )
    .then((res) => res.json())
    .then((data) => data.results.artistmatches)
    .then((artist) => artist.artist.forEach((data) => pushToArtists(data)));
}

async function fetchAlbums(value: string): Promise<any> {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=8&format=json`
  )
    .then((res) => res.json())
    .then((data) => data.results.albummatches)
    .then((album) => album.album.forEach((data) => pushToAlbums(data)));
}

async function fetchTracks(value: string): Promise<any> {
  const response = await fetch(
    `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=10&format=json`
  )
    .then((res) => res.json())
    .then((data) => data.results.trackmatches)
    .then((track) => track.track.forEach((data) => pushToTracks(data)));
}

function pushToArtists(data): void {
  const template: string = `
<div class="artist_card">
<img
  src=${data.image[4]["#text"]}
  alt="artist"
  width="250"
  height="250"
/>
<div class="artist_text">
  <span class="name">${data.name}</span>
  <span class="listeners">${data.listeners} listeners</span>
</div>
</div>`;
  artistList?.insertAdjacentHTML("afterbegin", template);
}

function pushToAlbums(data): void {
  const template: string = `<div class="artist_card">
  <img
    src=${data.image[3]["#text"]}
    alt="album"
    width="250"
    height="250"
  />
  <div class="artist_text">
    <span class="name">${data.name}</span>
    <span class="listeners">${data.artist}</span>
  </div>
</div>`;
  albumsList?.insertAdjacentHTML("afterbegin", template);
}

function pushToTracks(data): void {
  const template: string = ` <div class="track">
    <button class="clear_btn"><img src="icons/play.svg" alt="play" width="50" height="50"/></button>
    <img
      src=${data.image[3]["#text"]}
      width="50"
      height="50"
      alt="track"
    />
    <a href="" class="h_link">
      <img src="icons/heart.svg"  alt="" width="25" height="25">
    </a>
    <span class="song">${data.name}</span>
    <span class="singer">${data.artist}</span>
    <span class="duration">listeners: ${data.listeners}</span>
  </div>`;
  tracksList?.insertAdjacentHTML("afterbegin", template);
}

search?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const target = e.target as HTMLInputElement;
    if (target.value.toString() === "") {
      hideAll();
    } else {
      deleteOldCards();
      fetchAlbums(target.value.toString());
      fetchArtists(target.value.toString());
      fetchTracks(target.value.toString());
      showAll();
    }

    if (searchTitle)
      searchTitle.innerHTML = `Search results for: "${target.value.toString()}"`;
  }
});

function hideAll(): void {
  titles.forEach((title) => {
    title.classList.add("hide");
  });
  moreLinks.forEach((link) => {
    link.classList.add("hide");
  });
  albumsList?.classList.add("hide");
  artistList?.classList.add("hide");
  tracksList?.classList.add("hide");
}

function showAll(): void {
  titles.forEach((title) => {
    title.classList.remove("hide");
  });
  moreLinks.forEach((link) => {
    link.classList.remove("hide");
  });
  albumsList?.classList.remove("hide");
  artistList?.classList.remove("hide");
  tracksList?.classList.remove("hide");
}

function deleteOldCards(): void {

  const artstCards = document.body.querySelectorAll(".artist_card");
  artstCards.forEach((card)=>{
    card.parentNode?.removeChild(card)
  })

  const trackCards = document.body.querySelectorAll(".track")
  trackCards.forEach((card)=>{
    card.parentNode?.removeChild(card)
  })
}
