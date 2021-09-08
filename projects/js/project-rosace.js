const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 0;
let y = 0;
let turn = 0;
ctx.translate(innerWidth / 2, innerHeight / 2); // canvas center

const draw = () => {
  requestAnimationFrame(draw);

  ctx.beginPath();
  ctx.strokeStyle = "#EDF5E1";
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.rotate((30 * Math.PI) / 180);
  turn = turn + 30;
  if (turn > 7200) {
    return;
  }
  if (turn % 360 === 0) {
    x += 10;
    y += 10;
  }
};
draw();
