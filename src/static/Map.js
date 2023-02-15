import { ctx, CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/values.js";
import { snake, fruit } from "../constants/values.js";

export default class Map{
    constructor(){
        this.width = 50;
        this.height = 50;
        this.x_field_num = CANVAS_WIDTH / 50;
        this.y_field_num = CANVAS_HEIGHT / 50;
    };

    DrawBackground(ctx){
        for (let y = 0; y <= this.y_field_num; y++){
            for (let x = 0; x <= this.x_field_num; x++){
                if ((x % 2) === (y % 2)){
                    ctx.fillStyle = "#90EE90";
                    ctx.fillRect(x*50, y*50, 50, 50);
                }
                else{
                    ctx.fillStyle = "#32CD32";
                    ctx.fillRect(x*50, y*50, 50, 50);
                }
            }
        }
    }

    UpdateSnakePos(ctx){
        snake.Update();
        snake.DrawTail(this.width, this.height);
    }

    UpdateFruitPos(ctx){
        fruit.Update(ctx, snake);
        fruit.Draw(ctx, fruit.position_x * this.width, fruit.position_y * this.height, this.width, this.height);
    }

}