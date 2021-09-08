const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("change", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  animate();
});

const animate = () => {};
