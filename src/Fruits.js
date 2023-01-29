import { CANVAS_WIDTH, CANVAS_HEIGHT, RandomNumberGenerator } from "./script.js";

export default class Fruits{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.x = this.GenerateRandomLoc(CANVAS_WIDTH, this.width);
        this.y = this.GenerateRandomLoc(CANVAS_HEIGHT, this.height);
        this.position_x = RandomNumberGenerator(CANVAS_WIDTH / 50);
        this.position_y = RandomNumberGenerator(CANVAS_HEIGHT / 50);
    };

    Update(ctx, snake, points){
        this.Draw(ctx);
        if (this.FindFruitCollision(snake) === true){
            points++;
        }
        return points;
    };
    
    Draw(ctx, x, y, width, height){
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, width, height);
    };

    FindFruitCollision(snake){
        if((this.position_x === snake.position_x) && (this.position_y === snake.position_y)){
            this.position_x = RandomNumberGenerator(CANVAS_WIDTH / 50);
            this.position_y = RandomNumberGenerator(CANVAS_HEIGHT / 50);
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