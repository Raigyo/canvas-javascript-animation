const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let img = new Image();
img.src = "https://source.unsplash.com/random";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("change", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
  ctx.drawImage(img, 50, 50); // to apply resize after first load
});

// window.onload = function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   init();
//   ctx.drawImage(img, 50, 50); // to apply resize after first load
// };

function init() {
  img.addEventListener("load", function () {
    ctx.drawImage(img, 50, 50);
  });
}
init();
