import Snake from "./Snake.js";
import Fruits from "./Fruits.js";

const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
export const CANVAS_WIDTH = canvas.width = 600;
export const CANVAS_HEIGHT = canvas.height = 600;

let color = 'blue';
const snake = new Snake(50, 50);
const fruit = new Fruits(10, 10);

const points_disp = document.getElementById("points");
let points = 0;

function draw(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = color;
    ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
    ctx.fillStyle = "green";
    ctx.fillRect(fruit.x, fruit.y, fruit.width, fruit.height);
    points = snake.Update(points);
    points = fruit.Update(snake, points);
    UpdatePoints();
    requestAnimationFrame(draw);
};

function UpdatePoints(){
    points_disp.innerText = `Points: ${points}`;
}

draw();
