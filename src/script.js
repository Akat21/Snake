import Snake from "./Snake.js";
import Fruits from "./Fruits.js";
import Map from "./Map.js";
import * as btn from "./constants/buttons.js";
import * as input from "./constants/inputs.js";
import * as label from "./constants/labels.js";
import * as cvs from "./constants/values.js";

const settings_content = document.getElementById("mySettings");

let params = (new URL(document.location)).searchParams;
let nickname = params.get("user");
let user_id = params.get("id");
let diff = params.get("df");

const snake = new Snake(50, 50);
const fruit = new Fruits(10, 10);
const map = new Map();

let points = 0;
let highscore = 0;
let difficulty = 1;

let leaderboard_data;

Diff_Btn_Choose(diff);


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


input.name_login_input.value = `Guest${RandomNumberGenerator(999999)}`;
input.change_name.value = nickname;
label.settings_name.innerText = nickname;

input.name_login_input.addEventListener("focusout", (e)=>{
    if (name_login_input.value.length === 0){
        name_login_input.value = `Guest${RandomNumberGenerator(999999)}`
    }
});

input.change_name.addEventListener("focusout", (e)=>{
    if (input.change_name.value.length === 0){
        input.change_name.value = nickname;
    }
});

btn.leaderboard.addEventListener("click", (e)=>{
    let leaderboard_popup = document.getElementById("leaderboard--popup");
    let popup_background = document.getElementById("popup--background");
    leaderboard_popup.style.display = "block";
    popup_background.style.display = "block";
});

btn.close_leaderboard.addEventListener("click", (e)=>{
    let leaderboard_popup = document.getElementById("leaderboard--popup");
    let popup_background = document.getElementById("popup--background");
    leaderboard_popup.style.display = "none";
    popup_background.style.display = "none";
});

btn.start.addEventListener("click", (e)=>{
    label.settings_name.innerText = input.change_name.value;
});

btn.restart.addEventListener("click", (e)=>{
    let popup_background = document.getElementById("popup--background");
    let game_over_screen = document.getElementById("game--over");
    let highscore_save = document.getElementById("highscore--save");
    highscore_save.value = highscore;
    popup_background.style.display = "none";
    game_over_screen.style.display = "none";
});

btn.settings.addEventListener("click",(e)=>{
    document.getElementById("mySettings").classList.toggle("show");
    input.change_name.style.display = "none";
    btn.confirm_new_name.style.display = "none"
});

btn.settings_name_edit.addEventListener("click", (e)=>{
    input.change_name.style.display = "inline-block";
    btn.confirm_new_name.style.display = "inline-block";
    settings_content.style.height = "260px";
});

btn.confirm_new_name.addEventListener("click", (e)=>{
    if(input.change_name.value.length != 0){
        label.settings_name.textContent = input.change_name.value;
        input.name_login_input.value = input.change_name.value;
    }
    input.change_name.style.display = "none";
    btn.confirm_new_name.style.display = "none"
    settings_content.style.height = "190px";
});

btn.difficulty_change.addEventListener("click",(e) =>{
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display = "block";
    difficulty_choose_div.style.display = "block";
});

btn.close_difficulty_change_popup.addEventListener("click", (e)=>{
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

btn.easy.addEventListener("click",(e)=>{
    btn.difficulty_change.style.background = "url('../assets/easy.jpg')";
    btn.difficulty_change.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    let diff_save = document.getElementById("diff--save");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
    difficulty = 1;
    diff_save.value = difficulty;
});

btn.medium.addEventListener("click",(e)=>{
    btn.difficulty_change.style.background = "url('../assets/medium.jpg')";
    btn.difficulty_change.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    let diff_save = document.getElementById("diff--save");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
    difficulty = 2;
    diff_save.value = difficulty;
});

btn.hard.addEventListener("click",(e)=>{
    btn.difficulty_change.style.background = "url('../assets/hard.jpg')";
    btn.difficulty_change.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    let diff_save = document.getElementById("diff--save");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
    difficulty = 3;
    diff_save.value = difficulty;
});


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


function Diff_Btn_Choose(diff){
    if(diff === '1'){
        btn.difficulty_change.style.background = "url('../assets/easy.jpg')";
        btn.difficulty_change.style.backgroundSize = "100% 100%";
        return 1;
    }
    else if(diff === '2'){
        btn.difficulty_change.style.background = "url('../assets/medium.jpg')";
        btn.difficulty_change.style.backgroundSize = "100% 100%";
        return 2;
    }
    else if(diff === '3'){
        btn.difficulty_change.style.background = "url('../assets/hard.jpg')";
        btn.difficulty_change.style.backgroundSize = "100% 100%";
        return 3;
    }
}

export function make_fruit(x, y, width, height){
    const fruit_image = new Image();
    fruit_image.src = '/assets/apple1.png';

    fruit_image.onload = function(){
        cvs.ctx.drawImage(fruit_image, x, y, width, height * fruit_image.height / fruit_image.width);
    }
    if (fruit_image.complete){
        cvs.ctx.drawImage(fruit_image, x, y, width, height * fruit_image.height / fruit_image.width);
    }

}

export function snake_head_up(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_up.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_head_down(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_down.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_head_left(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_left.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_head_right(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/head_right.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_body_horizontal(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_horizontal.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function snake_body_vertical(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_vertical.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_bottomleft(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_bottomleft.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_bottomright(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_bottomright.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_topleft(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_topleft.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function body_topright(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/body_topright.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_up(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_up.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_down(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_down.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_left(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_left.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

export function tail_right(x, y, width, height){
    const snake_image = new Image();
    snake_image.onload = function(){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
    snake_image.src = '/assets/tail_right.png';
    if (snake_image.complete){
        cvs.ctx.drawImage(snake_image, x, y, width, height * snake_image.height / snake_image.width);
    }
}

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
