import { ButtonsInit, Diff_Btn_Choose } from "../utils/Buttons.js";
import { InputsInit } from "../utils/Inputs.js";
import { LeaderboardDataPass } from "../utils/DatabaseManagement.js";
import { map, ctx, CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants/values.js";


LeaderboardDataPass();
InputsInit();
ButtonsInit();


function draw(){
    let difficulty = Diff_Btn_Choose();
    const fps = 4 * difficulty;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    map.DrawBackground(ctx);
    map.UpdateSnakePos(ctx);
    map.UpdateFruitPos(ctx);
    setTimeout(()=> {
        window.requestAnimationFrame(draw);
    }, 1000/fps);
};


draw();
