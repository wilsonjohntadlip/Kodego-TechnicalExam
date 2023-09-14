const togglePlayBtn = document.getElementById("togglePlayBtn");
const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const vinyl = document.getElementById("vinyl");

let toggleOn = false;

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
