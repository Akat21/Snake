import Snake from "./Snake.js";
import Fruits from "./Fruits.js";
import Map from "./Map.js";


const start_btn = document.getElementById("start--btn");
const restart_btn = document.getElementById("restart--btn");
const name = document.getElementById("name--input");
const change_name = document.getElementById("change--name");
const settings_name = document.getElementById("settings--name--txt");
const settings_btn = document.getElementById("settings--btn");
const settings_content = document.getElementById("mySettings");
const confirm_btn = document.getElementById("confirm--btn");
const settings_name_edit_btn = document.getElementById("settings--name--edit--btn");
const difficulty_btn = document.getElementById("difficulty--btn");
const leaderboard_btn = document.getElementById("leaderboard--btn");
const close_difficulty_btn = document.getElementById("close--difficulty--btn");
const close_leaderboard_btn = document.getElementById("close--leaderboard--btn");
const easy_btn = document.getElementById('easy--diff--btn');
const medium_btn = document.getElementById('medium--diff--btn');
const hard_btn = document.getElementById('hard--diff--btn');
const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
export const CANVAS_WIDTH = canvas.width = 500;
export const CANVAS_HEIGHT = canvas.height = 500;

let params = (new URL(document.location)).searchParams;
let nickname = params.get("user");

const snake = new Snake(50, 50);
const fruit = new Fruits(10, 10);
const map = new Map();

const points_disp = document.getElementById("points");
const highscore_disp = document.getElementById("highscore--disp");
let points = 0;
let highscore = 0;

let leaderboard_data;

//load file content from backend
fetch('/leaderboard_content')
    .then(response => response.text())
    .then(data => {
        data = data.split(';');
        let final_data = [];
        for (let i = 0; i < data.length; i++){
            let el = data[i].split(',');
            final_data.push(el);
        }
        console.log(final_data);
        let sorted_data = final_data.sort((a, b) => b[1] - a[1]);

        console.log(sorted_data);

        for (let i = 0; i < sorted_data.length - 1; i++){
            let leaders = document.getElementById("leaders");
            let element = document.createElement("li");
            element.innerText = sorted_data[i].slice(0,2);
            leaders.append(element)
        }
});


name.value = `Guest${RandomNumberGenerator(999999)}`;
change_name.value = nickname;
settings_name.innerText = nickname;

name.addEventListener("focusout", (e)=>{
    if (name.value.length === 0){
        name.value = `Guest${RandomNumberGenerator(999999)}`
    }
});

change_name.addEventListener("focusout", (e)=>{
    if (change_name.value.length === 0){
        change_name.value = nickname;
    }
});

leaderboard_btn.addEventListener("click", (e)=>{
    let leaderboard_popup = document.getElementById("leaderboard--popup");
    let popup_background = document.getElementById("popup--background");
    leaderboard_popup.style.display = "block";
    popup_background.style.display = "block";
});

close_leaderboard_btn.addEventListener("click", (e)=>{
    let leaderboard_popup = document.getElementById("leaderboard--popup");
    let popup_background = document.getElementById("popup--background");
    leaderboard_popup.style.display = "none";
    popup_background.style.display = "none";
});

start_btn.addEventListener("click", (e)=>{
    settings_name.innerText = change_name.value;
});

restart_btn.addEventListener("click", (e)=>{
    let popup_background = document.getElementById("popup--background");
    let game_over_screen = document.getElementById("game--over");
    let highscore_save = document.getElementById("highscore--save");
    highscore_save.value = highscore;
    popup_background.style.display = "none";
    game_over_screen.style.display = "none";
});

settings_btn.addEventListener("click",(e)=>{
    document.getElementById("mySettings").classList.toggle("show");
    change_name.style.display = "none";
    confirm_btn.style.display = "none"
});

settings_name_edit_btn.addEventListener("click", (e)=>{
    change_name.style.display = "inline-block";
    confirm_btn.style.display = "inline-block";
    settings_content.style.height = "260px";
});

confirm_btn.addEventListener("click", (e)=>{
    if(change_name.value.length != 0){
        settings_name.textContent = change_name.value;
        name.value = change_name.value;
    }
    change_name.style.display = "none";
    confirm_btn.style.display = "none"
    settings_content.style.height = "190px";
});

difficulty_btn.addEventListener("click",(e) =>{
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display = "block";
    difficulty_choose_div.style.display = "block";
});

close_difficulty_btn.addEventListener("click", (e)=>{
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

easy_btn.addEventListener("click",(e)=>{
    console.log(medium_btn.style.background);
    difficulty_btn.style.background = "url('../assets/easy.jpg')";
    difficulty_btn.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

medium_btn.addEventListener("click",(e)=>{
    console.log(medium_btn.style.background);
    difficulty_btn.style.background = "url('../assets/medium.jpg')";
    difficulty_btn.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

hard_btn.addEventListener("click",(e)=>{
    console.log(medium_btn.style.background);
    difficulty_btn.style.background = "url('../assets/hard.jpg')";
    difficulty_btn.style.backgroundSize = "100% 100%";
    let difficulty_choose_div = document.getElementById("difficulty--choose");
    let popup_background = document.getElementById("popup--background");
    popup_background.style.display="none";
    difficulty_choose_div.style.display="none";
});

function draw(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    map.DrawBackground(ctx);
    [highscore, points] = snake.Update(ctx, highscore, points);
    points = fruit.Update(ctx, snake, points);
    UpdatePoints();
    UpdateHighscore();
    requestAnimationFrame(draw);
};

function UpdatePoints(){
    points_disp.innerText = `${points}`;
}

function UpdateHighscore(){
    highscore_disp.innerText = `${highscore}`;
}

export function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};

draw();
