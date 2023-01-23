import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./script.js";

export default class Fruits{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.x = this.GenerateRandomLoc(CANVAS_WIDTH, this.width);
        this.y = this.GenerateRandomLoc(CANVAS_HEIGHT, this.height);
    };

    Update(ctx, snake, points){
        this.Draw(ctx);
        if (this.FindFruitCollision(snake) === true){
            points++;
        }
        return points;
    };
    
    Draw(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    FindFruitCollision(snake){
        if ((((this.x + this.width) >= snake.x) && (this.x <= (snake.x + snake.width))) && ((snake.y <= (this.y + this.height)) && (snake.y >= (this.y - snake.height)))){
           [this.x, this.y] = this.ChangeFruitPosition(); 
            return true;
        }
        else{
            return false;
        }
    };

    ChangeFruitPosition(){
        this.x = this.GenerateRandomLoc(CANVAS_WIDTH, this.width);
        this.y = this.GenerateRandomLoc(CANVAS_HEIGHT, this.height);
        return [this.x, this.y];
    };

    GenerateRandomLoc(max, minus){
        return RandomNumberGenerator(max - minus);
    };
};

function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};