import { RandomNumberGenerator } from "../constants/values.js";
import { FruitAnim } from "../utils/SnakeAnimations.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/values.js";


export default class Fruits{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.position_x = RandomNumberGenerator(CANVAS_WIDTH / 50);
        this.position_y = RandomNumberGenerator(CANVAS_HEIGHT / 50);
    };

    Update(ctx, snake){
        this.Draw(ctx);
        if (this.FindFruitCollision(snake) === true){
            snake.points++;
        }
    };
    
    Draw(ctx, x, y, width, height){
        FruitAnim(x, y, width, height);

    };

    FindFruitCollision(snake){
        if((this.position_x === snake.position_x) && (this.position_y === snake.position_y)){
            this.position_x = RandomNumberGenerator(CANVAS_WIDTH / 50);
            this.position_y = RandomNumberGenerator(CANVAS_HEIGHT / 50);
            
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

            }
            return true;
        }
        else{
            return false;
        }
    };
};