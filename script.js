const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const points_disp = document.getElementById("points");

//SNAKE
const snake_width = 50;
const snake_height = 50;
let x = (CANVAS_WIDTH - snake_width)/2;
let y = (CANVAS_HEIGHT - snake_height)/2;

//FRUIT
const fruit_width = 10;
const fruit_height = 10;
let f_x = GenerateRandomLoc();
let f_y = GenerateRandomLoc();

let points = 0;
let dir = "";
let gameOver = false;
let color = 'blue';

document.addEventListener('keydown',(e) =>{
    dir = KeyMap(e);
});

function draw(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, snake_width, snake_height);
    ctx.fillStyle = "green";
    ctx.fillRect(f_x, f_y, fruit_width, fruit_height);
    DirMap();
    SetBoundries();
    isOver();
    findFruitCollision();
    requestAnimationFrame(draw);
};

function findFruitCollision(){
    if ((((f_x + 10) >= x) && (f_x <= (x + snake_width))) && ((y <= (f_y + 10)) && (y >= (f_y - 50)))){
        [f_x, f_y] = changeFruitPosition();
        points = addPoints();
        console.log(points)
    }
};

function changeFruitPosition(){
    f_x = GenerateRandomLoc();
    f_y = GenerateRandomLoc();
    return [f_x, f_y];
};

function addPoints(){
    points_disp.innerText = `Points: ${points + 1}`;
    return points + 1;
};

function resetPoints(){
    points_disp.innerText = `Points: ${0}`;
};

function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};

function GenerateRandomLoc(){
    return RandomNumberGenerator(CANVAS_HEIGHT);
};

function isOver(){
    if (gameOver == true){
        alert("game is over");
        Reset();
    };
};

function Center(){
    x = (CANVAS_WIDTH - snake_width)/2;
    y = (CANVAS_HEIGHT - snake_height)/2;
};

function Reset(){
    Center();
    gameOver = false;
    dir = "";
    resetPoints();
};

function SetBoundries(){
    if (((x + 50) > CANVAS_WIDTH) || (x < 0)){
        gameOver = true;
    }
    else if (((y + 50) > CANVAS_HEIGHT) || (y < 0)){
        gameOver = true;
    }
};

function KeyMap(e){
    if (e.key === "ArrowLeft"){
        dir = "left";
    }
    else if (e.key === "ArrowRight"){
        dir = "right";
    }
    else if (e.key === "ArrowDown"){
        dir = "down";
    }
    else if (e.key === "ArrowUp"){
        dir = "up";
    }
    return dir;
};

function DirMap(){
    if (dir === "left"){
        x--;
    }
    else if (dir === "right"){
        x++;
    }
    else if (dir === "down"){
        y++;
    }
    else if (dir === "up"){
        y--;
    }
};


draw();
