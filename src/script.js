import Snake from "./Snake.js";
import Fruits from "./Fruits.js";
import Map from "./Map.js";

const difficulty_btn = document.getElementById("difficulty--btn");
const close_difficulty_btn = document.getElementById("close--difficulty--btn");
const easy_btn = document.getElementById('easy--diff--btn');
const medium_btn = document.getElementById('medium--diff--btn');
const hard_btn = document.getElementById('hard--diff--btn');
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
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="block";
    difficulty_choose_div.style.display="block";
});

close_difficulty_btn.addEventListener("click", (e)=>{
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

easy_btn.addEventListener("click",(e)=>{
    console.log(medium_btn.style.background);
    difficulty_btn.style.background = "url('./assets/easy.jpg')";
    difficulty_btn.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

medium_btn.addEventListener("click",(e)=>{
    console.log(medium_btn.style.background);
    difficulty_btn.style.background = "url('./assets/medium.jpg')";
    difficulty_btn.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

hard_btn.addEventListener("click",(e)=>{
    console.log(medium_btn.style.background);
    difficulty_btn.style.background = "url('./assets/hard.jpg')";
    difficulty_btn.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
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
