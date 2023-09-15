const togglePlayBtn = document.getElementById("togglePlayBtn");
const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const vinyl = document.getElementById("vinyl");
const lyrics = document.getElementById("lyrics");
const currentDurationText = document.getElementById("currentDuration");
const musicSlider = document.getElementById("musicSlider");

document.body.addEventListener("DOMContentLoaded", getLyrics());

let minutes;
let seconds;
let Duration = musicSlider.value;

let toggleOn = false;

let int;

function timer() {
  if (musicSlider.value == 613) {
    clearInterval(int);
    playbtn.classList.remove("hidden");
    pausebtn.classList.add("hidden");
    vinyl.classList.remove("animate-spin");
  } else {
    musicSlider.value++;
    console.log(musicSlider.value);

    minutes = Math.floor(musicSlider.value / 60);
    seconds = musicSlider.value % 60;

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds < 60 ? seconds : seconds;

    currentDurationText.innerHTML = m + ":" + s;
  }
}

musicSlider.addEventListener("change", () => {
  timer();
});

function timerstart() {
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

async function getLyrics() {
  const url =
    "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=6688199";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2c3d4de894mshcf549bfe3fe83fcp1c1532jsnf35283e95419",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
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
