const candle = document.getElementById("candle");
const music = document.getElementById("music");
const cake = document.getElementById("cake");
const instruction = document.getElementById("instruction");
const noteCard = document.getElementById("noteCard");
const happy21 = document.getElementById("happy21");

let clicked = false;

function revealBirthday() {
  if (clicked) return;
  clicked = true;

  noteCard.classList.remove("hidden");
  noteCard.classList.add("show-note");

  happy21.classList.remove("hidden");
  happy21.classList.add("show-happy");

  cake.classList.add("glow");

  instruction.innerHTML = `wish granted ✨<br><span>happy birthday</span>`;
  instruction.classList.add("clicked-text");

  music.volume = 0.22;
  music.play().catch(() => {
    instruction.innerHTML = `wish granted ✨<br><span>tap again for music</span>`;
  });
}

candle.addEventListener("click", revealBirthday);
