const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

function draw(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 50, 50);
    requestAnimationFrame(draw);
};

draw();