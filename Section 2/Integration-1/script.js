const togglePlayBtn = document.getElementById("togglePlayBtn");
const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const vinyl = document.getElementById("vinyl");
const lyrics = document.getElementById("lyrics");

let toggleOn = false;

document.body.addEventListener("DOMContentLoaded", getLyrics());

togglePlayBtn.addEventListener("click", () => {
  toggleOn = !toggleOn;

  if (toggleOn) {
    playbtn.classList.add("hidden");
    pausebtn.classList.remove("hidden");
    vinyl.classList.add("animate-spin");
  } else {
    playbtn.classList.remove("hidden");
    pausebtn.classList.add("hidden");
    vinyl.classList.remove("animate-spin");
  }
});


async function getLyrics() {
  const url = 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=6688199';

    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2c3d4de894mshcf549bfe3fe83fcp1c1532jsnf35283e95419',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    lyrics.innerHTML = result.lyrics.lyrics.body.html;
  } catch (error) {
    console.error(error);
  }
}

