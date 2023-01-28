import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./script.js";

export default class Snake{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.gameOver = false;
        this.dir = "";
        [this.x, this.y] = this.Center();
    };

    Update(ctx, highscore, points){
        this.Draw(ctx);
        this.CheckKeyPressed();
        this.DirMap();
        this.SetBoundries();
        [highscore, points] = this.isOver(highscore, points);
        return [highscore, points];
    };

    Draw(ctx){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    Center() {
        let x = (CANVAS_WIDTH - this.width) / 2;
        let y = (CANVAS_HEIGHT - this.height) / 2;
        return [x, y]
    };

    Reset(){
        [this.x, this.y] = this.Center();
        this.gameOver = false;
        this.dir = "";
        return 0;
    };

    isOver(highscore, points){
        if (this.gameOver === true){
            let game_over_screen = document.getElementById("game--over");
            game_over_screen.style.display = "block";
            let popup_background = document.getElementById("popup--background");
            popup_background.style.display = "block";
            if (highscore < points){
                highscore = points;
            }
            points = this.Reset();
        }
        return [highscore, points];
    };

    SetBoundries(){
        if (((this.x + this.width) > CANVAS_WIDTH) || (this.x < 0)){
            this.gameOver = true;
        }
        else if (((this.y + this.height) > CANVAS_HEIGHT) || (this.y < 0)){
            this.gameOver = true;
        }
    };

    CheckKeyPressed(){
        document.addEventListener('keydown',(e) =>{
            this.KeyMap(e);
        });
    };

    DirMap(){
        if (this.dir === "left"){
            this.x--;
        }
        else if (this.dir === "right"){
            this.x++;
        }
        else if (this.dir === "down"){
            this.y++;
        }
        else if (this.dir === "up"){
            this.y--;
        }
    };

    KeyMap(e){
        if (e.key === "ArrowLeft"){
            this.dir = "left";
        }
        else if (e.key === "ArrowRight"){
            this.dir = "right";
        }
        else if (e.key === "ArrowDown"){
            this.dir = "down";
        }
        else if (e.key === "ArrowUp"){
            this.dir = "up";
        }
    };

};
