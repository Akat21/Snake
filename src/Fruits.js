import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./script.js";

export default class Fruits{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.x = this.GenerateRandomLoc(CANVAS_WIDTH);
        this.y = this.GenerateRandomLoc(CANVAS_HEIGHT);
    };

    Update(snake, points){
        if (this.FindFruitCollision(snake) === true){
            points++;
        }
        return points;
    };
    
    GenerateRandomLoc(max){
        return RandomNumberGenerator(max);
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
        this.x = this.GenerateRandomLoc(CANVAS_WIDTH);
        this.y = this.GenerateRandomLoc(CANVAS_HEIGHT);
        return [this.x, this.y];
    }
};

function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
};