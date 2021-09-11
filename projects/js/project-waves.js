const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("change", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const color = {
  h: 200,
  s: 50,
  l: 50,
};

const wave = {
  y: canvas.height / 2,
  nbCurves: 0.01,
  amplitude: 300,
  frequency: 0.01,
};

let increment = wave.frequency;

const animate = () => {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0,0,0,0.01)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      wave.y +
        Math.sin(i * wave.nbCurves + increment) *
          wave.amplitude *
          Math.sin(increment)
    );
  }
  ctx.strokeStyle = `hsl(${Math.abs(color.h * Math.sin(increment))},${
    color.s
  }%, ${color.l}%)`;
  ctx.stroke();
  increment += wave.frequency;
};
animate();
