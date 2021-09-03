const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(30, 30, 100, 50); // x, y, L, l
// ctx.strokeRect(30, 30, 100, 50); // x, y, L, l
// ctx.clearRect(0, 0, 302, 152); // delete figure

ctx.beginPath();
ctx.lineWidth = "8";
ctx.strokeStyle = "green";
ctx.rect(50, 50, 100, 50);
ctx.fill();
ctx.stroke();
