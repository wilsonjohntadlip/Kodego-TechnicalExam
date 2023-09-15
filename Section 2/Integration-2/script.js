const togglePlayBtn = document.getElementById("togglePlayBtn");
const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const vinyl = document.getElementById("vinyl");
const btnLyrics = document.getElementById("btnLyrics");
const btnAlbums = document.getElementById("btnAlbums");
const btnRelatedArtists = document.getElementById("btnRelatedArtists");
const lyrics = document.getElementById("lyrics");
const albums = document.getElementById("albums");
const relatedArtists = document.getElementById("relatedArtists");
const currentDurationText = document.getElementById("currentDuration");
const musicSlider = document.getElementById("musicSlider");

let toggleOn = false;

getAlbums();
getrelatedArtist();
// document.body.addEventListener("DOMContentLoaded", getLyrics());


let minutes ;
let seconds ;
let Duration = musicSlider.value;

let int;


function timer(){
  if(musicSlider.value == 613){
    clearInterval(int);
    playbtn.classList.remove("hidden");
    pausebtn.classList.add("hidden");
    vinyl.classList.remove("animate-spin");
  }
  else{
  musicSlider.value ++;
  console.log(musicSlider.value);

  minutes = Math.floor((musicSlider.value) / 60);
  seconds = musicSlider.value % 60;

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = 
      seconds < 10
      ? "0" + seconds
      : seconds < 60
      ? seconds
      : seconds;

      currentDurationText.innerHTML = m + ":" + s;
  }
}

musicSlider.addEventListener("change", ()=>{
  timer();
})

function timerstart(){
  int = setInterval(timer, 1000);
}

togglePlayBtn.addEventListener("click", () => {
  toggleOn = !toggleOn;

  if (toggleOn) {
    timerstart();
    playbtn.classList.add("hidden");
    pausebtn.classList.remove("hidden");
    vinyl.classList.add("animate-spin");
  } else {
    clearInterval(int);
    playbtn.classList.remove("hidden");
    pausebtn.classList.add("hidden");
    vinyl.classList.remove("animate-spin");
  }
});


// OTHER ALBUMS

async function getAlbums() {
  const url =
    "https://spotify23.p.rapidapi.com/artist_albums/?id=06HL4z0CvFAxyc27GXpf02&offset=0&limit=100";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "75d8deda75msh58d998c1f936810p107f2cjsn013b0f82474c",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    let albums = result.data.artist.discography.albums.items;

    document.getElementById("albums").innerHTML = "";

    for (let album of albums) {
      let imageAlbum = album.releases.items[0].coverArt.sources[0].url;
      let albumTitle = album.releases.items[0].name;
      let albumYear = album.releases.items[0].date.year;

      let albumCollection =
        '<div class="w-[20rem]">' +
        '<img src="' +
        imageAlbum +
        '"alt="">' +
        "<p>" +
        albumTitle +
        "</p>" +
        "<p>" +
        albumYear +
        "</p>" +
        "</div>";
      document.getElementById("albums").innerHTML += albumCollection;
    }
  } catch (error) {
    console.error(error);
  }
}

// RELATED ARTISTS

async function getrelatedArtist() {
  const url =
    "https://spotify23.p.rapidapi.com/artist_related/?id=06HL4z0CvFAxyc27GXpf02";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "75d8deda75msh58d998c1f936810p107f2cjsn013b0f82474c",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    let relatedArtists = result.artists;
    document.getElementById("relatedArtists").innerHTML = "";

    for (let artist of relatedArtists) {
      let artistImage = artist.images[0].url;
      let artistName = artist.name;

      let relatedArtistCollection =
        '<div class="w-[20rem] rounded-md">' +
        '<img src="' +
        artistImage +
        '"alt="">' +
        "<p>" +
        artistName +
        "</p></div>";
      document.getElementById("relatedArtists").innerHTML +=
        relatedArtistCollection;
    }
  } catch (error) {
    console.error(error);
  }
}


// BUTTON SWITCHING

btnAlbums.addEventListener("click", () => {
  albums.classList.remove("hidden");
  relatedArtists.classList.add("hidden");
});

btnRelatedArtists.addEventListener("click", () => {
  albums.classList.add("hidden");
  relatedArtists.classList.remove("hidden");
});
