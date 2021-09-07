const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("change", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function init() {
  /* save and restore */
  // ctx.fillRect(0, 0, 150, 150);
  // ctx.save();
  // ctx.fillStyle = "red";
  // ctx.fillRect(15, 15, 120, 120);
  // ctx.save();
  // ctx.fillStyle = "blue";
  // ctx.fillRect(30, 30, 90, 90);
  // ctx.restore();
  // ctx.fillRect(45, 45, 60, 60);
  /* translate */
  // ctx.translate(50, 50);
  // ctx.fillRect(0, 0, 100, 150);
  // ctx.fillRect(100, 100, 100, 150);
  // // reinit
  // ctx.setTransform(1, 0, 0, 1, 0, 0);
  // ctx.fillRect(0, 0, 100, 150);
  /* rotate */
  ctx.beginPath();
  ctx.arc(150, 150, 1, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.translate(150, 150);
  ctx.rotate((30 * Math.PI) / 180);
  ctx.fillRect(50, 50, 100, 50);
}
init();
