const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");
const music = document.getElementById("music");
const cake = document.getElementById("cake");
const instruction = document.getElementById("instruction");

let blown = false;

function blowCandle() {
  if (blown) return;
  blown = true;

  flame.style.display = "none";
  smoke.classList.remove("hidden");
  cake.classList.add("blown");
  instruction.textContent = "wish granted ✨";
  instruction.classList.add("fade-out");

  music.volume = 0.22;
  music.play().catch(() => {
    instruction.textContent = "tap again for music ✨";
  });
}

candle.addEventListener("click", blowCandle);