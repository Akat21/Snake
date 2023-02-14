import { ButtonsInit } from "../utils/Buttons.js";
import { InputsInit } from "../utils/Inputs.js";
import { LeaderboardDataPass } from "../utils/DatabaseManagement.js";
import { snake, fruit, map, ctx, CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/values.js";

let points = 0;
let difficulty = 1;

LeaderboardDataPass();
InputsInit();
ButtonsInit();


function draw(){
    const fps = 4 * difficulty;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    snake.Update();
    map.DrawBackground(ctx);
    map.UpdateSnakePos(ctx, snake);
    map.UpdateFruitPos(ctx, fruit);
    fruit.Update(ctx, snake);
    setTimeout(()=> {
        window.requestAnimationFrame(draw);
    }, 1000/fps);
};

export function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};


draw();
