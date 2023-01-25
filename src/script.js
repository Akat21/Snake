import Snake from "./Snake.js";
import Fruits from "./Fruits.js";
import Map from "./Map.js";

const difficulty_btn = document.getElementById("difficulty--btn")
const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
export const CANVAS_WIDTH = canvas.width = 500;
export const CANVAS_HEIGHT = canvas.height = 500;

let color = 'blue';
const snake = new Snake(50, 50);
const fruit = new Fruits(10, 10);
const map = new Map();

const points_disp = document.getElementById("points");
let points = 0;

difficulty_btn.addEventListener("click",(e) =>{
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    difficulty_choose_div.style.display="block";
});

function draw(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    map.DrawBackground(ctx);
    points = snake.Update(ctx, points);
    points = fruit.Update(ctx, snake, points);
    UpdatePoints();
    requestAnimationFrame(draw);
};

function UpdatePoints(){
    points_disp.innerText = `${points}`;
}

draw();
