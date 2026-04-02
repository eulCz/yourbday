const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const cake = document.getElementById("cake");
const noteCard = document.getElementById("noteCard");
const happy21 = document.getElementById("happy21");
const wishText = document.getElementById("wishText");
const music = document.getElementById("music");

let clicked = false;

// try autoplay immediately
window.addEventListener("load", () => {
  music.volume = 0.22;
  music.play().catch(() => {});
});

function revealBirthday() {
  if (clicked) return;
  clicked = true;

  flame.style.display = "none";
  noteCard.classList.remove("hidden");
  noteCard.classList.add("show-note");

  wishText.classList.add("show-wish");

  happy21.classList.remove("hidden");
  happy21.classList.add("show-happy");

  cake.classList.add("glow");

  music.volume = 0.22;
  music.play().catch(() => {});
}

candle.addEventListener("click", revealBirthday);
