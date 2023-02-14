import Snake from "./Snake.js";
import Fruits from "./Fruits.js";
import Map from "./Map.js";
import * as cvs from "../constants/values.js";
import { ButtonsInit } from "../utils/Buttons.js";
import { InputsInit } from "../utils/Inputs.js";
import { LeaderboardDataPass } from "../utils/DatabaseManagement.js";

const snake = new Snake(50, 50);
const fruit = new Fruits(10, 10);
const map = new Map();

let points = 0;
let difficulty = 1;

LeaderboardDataPass();
InputsInit();
ButtonsInit();


function draw(){
    const fps = 4 * difficulty;

    cvs.ctx.clearRect(0, 0, cvs.CANVAS_WIDTH, cvs.CANVAS_HEIGHT);
    snake.Update();
    map.DrawBackground(cvs.ctx);
    map.UpdateSnakePos(cvs.ctx, snake);
    map.UpdateFruitPos(cvs.ctx, fruit);
    fruit.Update(cvs.ctx, snake);
    setTimeout(()=> {
        window.requestAnimationFrame(draw);
    }, 1000/fps);
};

export function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};


draw();
