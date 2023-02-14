import {tail_down,tail_left,tail_right,tail_up, body_topright, body_topleft ,body_bottomright ,body_bottomleft,snake_head_up, snake_head_down, snake_head_left, snake_head_right, snake_body_horizontal, snake_body_vertical } from "../utils/SnakeAnimations.js";
import * as cvs from "../constants/values.js";
import * as label from "../constants/labels.js";

export default class Snake{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.gameOver = false;
        this.dir = "";
        this.prevDir = "";
        this.position_x = (cvs.CANVAS_WIDTH / 50) / 2;
        this.position_y = (cvs.CANVAS_HEIGHT / 50) / 5;

        this.highscore = 0;
        this.points = 0;
        this.tailLength = 0;
        this.tailDirs = [];
        this.tailPosition_x = []
        this.tailPosition_y = []
    };

    Update(){
        this.prevDir = this.dir;
        this.CheckKeyPressed();
        this.DirMap();
        this.SetBoundries();
        this.UpdatePoints(this.points);
        this.isOver();
    };

    Draw(ctx, x, y, width, height){
        if (this.dir === "up"){
            snake_head_up(x, y, width, height);
        }
        else if (this.dir ==="down"){
            snake_head_down(x,y,width,height);
        }
        else if (this.dir === "left"){
            snake_head_left(x,y,width,height);
        }
        else if (this.dir === "right"){
            snake_head_right(x,y,width,height);
        }
        else{
            snake_head_up(x, y, width, height);
        }
    };

    DrawTail(ctx, x, y, width, height){
        if (this.tailLength > 0){

            let [_x, _y] = this.AddTailPosition(this.dir, this.position_x, this.position_y);
            let temp = 0;
            this.tailPosition_x[0] = _x;
            this.tailPosition_y[0] = _y;


            if (this.tailLength > 1){
                for(let iter = this.tailLength; iter >= 2; iter--){
                    for (let i = iter; i > 1; i--){
                        let [_x, _y] = this.AddTailPosition(
                            this.tailDirs[this.tailDirs.length - i],
                            this.tailPosition_x[this.tailLength - i],
                            this.tailPosition_y[this.tailLength - i]);
                        this.tailPosition_x[this.tailLength - (i-1)] = _x;
                        this.tailPosition_y[this.tailLength - (i-1)] = _y;      
                    }
                }
            }

            this.tailDirs.splice(0, 0, this.dir);
            this.tailDirs.pop();

            for (let i = 0; i < this.tailLength; i++){
                if (i < this.tailLength - 1){
                    if(this.tailDirs[i] === "left" && this.tailDirs[i+1] === "up"){
                        body_bottomleft(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "down" && this.tailDirs[i+1] === "left"){
                        body_bottomright(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "up" && this.tailDirs[i+1] === "right"){
                        body_topleft(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "right" && this.tailDirs[i+1] === "down"){
                        body_topright(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "right" && this.tailDirs[i+1] === "up"){
                        body_bottomright(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "down" && this.tailDirs[i+1] === "right"){
                        body_bottomleft(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "left" && this.tailDirs[i+1] === "down"){
                        body_topleft(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "up" && this.tailDirs[i+1] === "left"){
                        body_topright(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else{
                        if (this.tailDirs[i] === "left" || this.tailDirs[i] === "right"){
                            snake_body_horizontal(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50)
                        }
                        else if(this.tailDirs[i] === "up" || this.tailDirs[i] === "down"){
                            snake_body_vertical(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50)
        
                        }
                    }
                }
                else if ((i === (this.tailLength - 1)) && (this.tailLength > 0)){
                    if(this.tailDirs[i] === "left"){
                        tail_right(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "right"){
                        tail_left(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "down"){
                        tail_up(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                    else if(this.tailDirs[i] === "up"){
                        tail_down(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50);
                    }
                }
                else{
                    if (this.tailDirs[i] === "left" || this.tailDirs[i] === "right"){
                        snake_body_horizontal(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50)
                    }
                    else if(this.tailDirs[i] === "up" || this.tailDirs[i] === "down"){
                        snake_body_vertical(this.tailPosition_x[i] * 50, this.tailPosition_y[i] * 50, 50, 50)
    
                    }
                }
            }

        }
    }

    AddTailPosition(dir, position_x, position_y){
        if(dir === "down"){
            return [position_x, position_y - 1];
        }
        else if(dir === "up"){
            return [position_x, position_y + 1];
        }
        else if(dir === "left"){
            return[position_x + 1, position_y];
        }
        else if(dir === "right"){
            return[position_x - 1, position_y];
        }
        else{
            return[position_x, position_y]
        }
    }

    Reset(){
        this.gameOver = false;
        this.dir = " ";
        return 0;
    };

    isOver(){
        if ((this.gameOver === true) || (this.SelfTouch() === true)){
            let game_over_screen = document.getElementById("game--over");
            game_over_screen.style.display = "block";
            let popup_background = document.getElementById("popup--background");
            popup_background.style.display = "block";
            if (this.highscore < this.points){
                this.highscore = this.points;
            }
            this.points = this.Reset();
            this.UpdateHighscore(this.highscore);
        }
    };

    UpdateHighscore(highscore){
        label.highscore_disp.innerText = `${highscore}`;
    }

    UpdatePoints(points){
        label.points_disp.innerText = `${points}`;
    }

    SelfTouch(){
        for (let i = 0; i < this.tailLength; i++){
            if ((this.tailPosition_x[i] === this.position_x) && (this.tailPosition_y[i] === this.position_y)){
                return true;
            }
        }
        return false;
    }

    SetBoundries(){
        if (((this.position_x) > (cvs.CANVAS_WIDTH / 50) - 1) || (this.position_x < 0)){
            this.gameOver = true;
        }
        else if (((this.position_y) > (cvs.CANVAS_HEIGHT / 50) - 1) || (this.position_y < 0)){
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
        if (this.prevDir === "left"){
            if (e.key === "ArrowLeft"){
                this.dir = "left";
            }
            else if (e.key === "ArrowRight"){
                this.dir = "left";
            }
            else if (e.key === "ArrowDown"){
                this.dir = "down";
            }
            else if (e.key === "ArrowUp"){
                this.dir = "up";
            }
        }
        else if (this.prevDir === "right"){
            if (e.key === "ArrowLeft"){
                this.dir = "right";
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
        }
        else if (this.prevDir === "up"){
            if (e.key === "ArrowLeft"){
                this.dir = "left";
            }
            else if (e.key === "ArrowRight"){
                this.dir = "right";
            }
            else if (e.key === "ArrowDown"){
                this.dir = "up";
            }
            else if (e.key === "ArrowUp"){
                this.dir = "up";
            }
        }
        else if (this.prevDir === "down"){
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
                this.dir = "down";
            }
        }
        else{
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
        }
    };

};
