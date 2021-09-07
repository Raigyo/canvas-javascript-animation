const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("change", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

let sun = new Image();
let moon = new Image();
let earth = new Image();

function init() {
  sun.src = "./assets/images/Canvas_sun.png";
  moon.src = "./assets/images/Canvas_moon.png";
  earth.src = "./assets/images/Canvas_earth.png";
  requestAnimationFrame(draw);
}

function draw() {
  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300);

  // earth orbit
  ctx.beginPath();
  ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
  ctx.arc(150, 150, 105, 0, Math.PI * 2);
  ctx.stroke();

  // default translate
  ctx.save();
  ctx.translate(150, 150);
  let time = new Date();

  // earth
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );
  ctx.translate(105, 0);
  ctx.drawImage(earth, -12, -12);

  // moon
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  ctx.translate(0, 28);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  // sun
  ctx.drawImage(sun, -3.5, -3.5);

  requestAnimationFrame(draw);
}
init();
