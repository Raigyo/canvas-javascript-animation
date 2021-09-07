const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("change", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

let x = 200;
let speed = 5;
let radius = 60;
function init() {
  requestAnimationFrame(init); // recursion
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  ctx.beginPath();
  ctx.arc(x, 200, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "crimson";
  ctx.stroke();
  if (x + radius > innerWidth || x - radius < 0) {
    speed = -speed;
  }
  x += speed;
}
init();
