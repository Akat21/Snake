import Snake from "./Snake.js";
import Fruits from "./Fruits.js";
import Map from "./Map.js";
import * as label from "./constants/labels.js";
import * as cvs from "./constants/values.js";
import { ButtonsInit } from "./utils/Buttons.js";
import { InputsInit } from "./utils/Inputs.js";
import { user_id } from "./utils/Query.js";

const snake = new Snake(50, 50);
const fruit = new Fruits(10, 10);
const map = new Map();

let points = 0;
export let highscore = 0;
export let difficulty = 1;


//load file content from backend
fetch('/leaderboard_content')
    .then(response => response.text())
    .then(data => {
        data = data.split(';');
        let final_data = [];
        for (let i = 0; i < data.length; i++){
            let el = data[i].split(',');
            if(el[2] == user_id){
                label.highscore_disp.innerText = el[1];
            }
            final_data.push(el);
        }
        let sorted_data = final_data.sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < sorted_data.length - 1; i++){
            let leaders = document.getElementById("leaders");
            let element = document.createElement("li");
            element.innerText = sorted_data[i].slice(0,2);
            leaders.append(element)
        }
});

InputsInit();
ButtonsInit();


function draw(){
    const fps = 4 * difficulty;

    cvs.ctx.clearRect(0, 0, cvs.CANVAS_WIDTH, cvs.CANVAS_HEIGHT);
    [highscore, points] = snake.Update(cvs.ctx, highscore, points);
    map.DrawBackground(cvs.ctx);
    map.UpdateSnakePos(cvs.ctx, snake);
    map.UpdateFruitPos(cvs.ctx, fruit);
    UpdatePoints();
    points = fruit.Update(cvs.ctx, snake, points);
    setTimeout(()=> {
        window.requestAnimationFrame(draw);
    }, 1000/fps);
};



function UpdatePoints(){
    label.points_disp.innerText = `${points}`;
}

function UpdateHighscore(){
    label.highscore_disp.innerText = `${highscore}`;
}

export function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};


draw();
