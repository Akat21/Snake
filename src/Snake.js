import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./script.js";

export default class Snake{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.gameOver = false;
        this.dir = "";
        this.position_x = (CANVAS_WIDTH / 50) / 2;
        this.position_y = (CANVAS_HEIGHT / 50) / 5;
    };

    Update(ctx, highscore, points){
        // this.Draw(ctx);
        this.CheckKeyPressed();
        this.DirMap();
        this.SetBoundries();
        [highscore, points] = this.isOver(highscore, points);
        return [highscore, points];
    };

    Draw(ctx, x, y, width, height){
        ctx.fillStyle = "blue";
        ctx.fillRect(x, y, width, height);
    };

    Reset(){
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
        if (((this.position_x) > (CANVAS_WIDTH / 50) - 1) || (this.position_x < 0)){
            this.gameOver = true;
        }
        else if (((this.position_y) > (CANVAS_HEIGHT / 50) - 1) || (this.position_y < 0)){
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
            this.position_x--;
        }
        else if (this.dir === "right"){
            this.position_x++;
        }
        else if (this.dir === "down"){
            this.position_y++;
        }
        else if (this.dir === "up"){
            this.position_y--;
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
