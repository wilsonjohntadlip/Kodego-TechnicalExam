const togglePlayBtn = document.getElementById("togglePlayBtn");
const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const vinyl = document.getElementById("vinyl");
const currentDurationText = document.getElementById("currentDuration");
const musicSlider = document.getElementById("musicSlider");

let toggleOn = false;

let minutes;
let seconds;
let Duration = musicSlider.value;

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

// togglePlayBtn.addEventListener("click", () => {
//   toggleOn = !toggleOn;

//   if (toggleOn) {
//     playbtn.classList.add("hidden");
//     pausebtn.classList.remove("hidden");
//     vinyl.classList.add("animate-spin");
//   } else {
//     playbtn.classList.remove("hidden");
//     pausebtn.classList.add("hidden");
//     vinyl.classList.remove("animate-spin");
//   }
// });
