const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// To change canvas size (don't use css)

// canvas.setAttribute("width", "500");
// canvas.setAttribute("height", "200");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Simple figure: square

// ctx.fillStyle = "green";
// ctx.fillRect(30, 30, 100, 50); // x, y, L, l
// ctx.strokeRect(30, 30, 100, 50); // x, y, L, l
// ctx.clearRect(0, 0, 302, 152); // delete figure

// Create paths

// ctx.beginPath();
// ctx.lineWidth = "8";
// ctx.strokeStyle = "green";
// ctx.rect(50, 50, 100, 50);
// ctx.fill();
// ctx.stroke();

// Gradiant

// for (let i = 0; i < 6; i++) {
//   for (j = 0; j < 6; j++) {
//     ctx.fillStyle = `rgb(${255 - 42.5 * i}, ${255 - 42.5 * j}, ${42.5 * i})`; // max 255
//     ctx.fillRect(j * 25, i * 25, 25, 25);
//   }
// }

// Triangle

// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// // ctx.lineTo(75, 50);
// ctx.closePath();
// ctx.stroke();
// ctx.fill();

// Circle

// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, 2 * Math.PI); // 360°
// // void ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
// ctx.stroke();

// Text

function init() {
  ctx.font = "40px serif";
  // ctx.strokeText("Hello World", 40, 50);
  ctx.fillStyle = "red";
  ctx.fillText("Hello World", 40, 80);
}
init();
