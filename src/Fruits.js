import {RandomNumberGenerator, make_fruit} from "./script.js";
import * as cvs from "./constants/values.js";


export default class Fruits{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.position_x = RandomNumberGenerator(cvs.CANVAS_WIDTH / 50);
        this.position_y = RandomNumberGenerator(cvs.CANVAS_HEIGHT / 50);
    };

    Update(ctx, snake, points){
        this.Draw(ctx);
        if (this.FindFruitCollision(snake) === true){
            points++;
        }
        return points;
    };
    
    Draw(ctx, x, y, width, height){
        make_fruit(x, y, width, height);

    };

    FindFruitCollision(snake){
        if((this.position_x === snake.position_x) && (this.position_y === snake.position_y)){
            this.position_x = RandomNumberGenerator(cvs.CANVAS_WIDTH / 50);
            this.position_y = RandomNumberGenerator(cvs.CANVAS_HEIGHT / 50);
            
            if (snake.tailLength === 0){

                snake.tailLength++;
                snake.tailDirs.push(snake.dir);

                let [_x, _y] = snake.AddTailPosition(snake.dir, snake.position_x, snake.position_y);
                snake.tailPosition_x.push(_x);
                snake.tailPosition_y.push(_y);

            }
            else{
                snake.tailLength++;
                snake.tailDirs.push(snake.tailDirs[snake.tailDirs.length - 1]);

                let [_x, _y] = snake.AddTailPosition(
                    snake.tailDirs[snake.tailDirs.length - 1],
                    snake.tailPosition_x[snake.tailPosition_x.length - 1],
                    snake.tailPosition_y[snake.tailPosition_y.length - 1]);

                snake.tailPosition_x.push(_x);
                snake.tailPosition_y.push(_y);

                console.log(snake.position_x, snake.position_y);
                console.log(snake.tailPosition_x, snake.tailPosition_y);
            }
            return true;
        }
        else{
            return false;
        }
    };
};