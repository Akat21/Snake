import * as btn from "../constants/buttons.js";
import * as input from "../constants/inputs.js";
import * as label from "../constants/labels.js";
import { diff } from "./Query.js";

let difficulty = 1;

export function ButtonsInit(){
    Diff_Btn_Choose(diff);

    btn.leaderboard.addEventListener("click", (e)=>{
        let leaderboard_popup = document.getElementById("leaderboard--popup");
        let popup_background = document.getElementById("popup--background");
        leaderboard_popup.style.display = "block";
        popup_background.style.display = "block";
    });

    btn.close_leaderboard.addEventListener("click", (e)=>{
        let leaderboard_popup = document.getElementById("leaderboard--popup");
        let popup_background = document.getElementById("popup--background");
        leaderboard_popup.style.display = "none";
        popup_background.style.display = "none";
    });

    btn.start.addEventListener("click", (e)=>{
        label.settings_name.innerText = input.change_name.value;
    });

    btn.restart.addEventListener("click", (e)=>{
        let popup_background = document.getElementById("popup--background");
        let game_over_screen = document.getElementById("game--over");
        let highscore_save = document.getElementById("highscore--save");
        highscore_save.value = label.highscore_disp.innerText;
        popup_background.style.display = "none";
        game_over_screen.style.display = "none";
    });

    btn.settings.addEventListener("click",(e)=>{
        document.getElementById("mySettings").classList.toggle("show");
        input.change_name.style.display = "none";
        btn.confirm_new_name.style.display = "none"
    });

    btn.settings_name_edit.addEventListener("click", (e)=>{
        let settings_content = document.getElementById("mySettings");
        input.change_name.style.display = "inline-block";
        btn.confirm_new_name.style.display = "inline-block";
        settings_content.style.height = "260px";
    });

    btn.confirm_new_name.addEventListener("click", (e)=>{
        let settings_content = document.getElementById("mySettings");
        if(input.change_name.value.length != 0){
            label.settings_name.textContent = input.change_name.value;
            input.name_login_input.value = input.change_name.value;
        }
        input.change_name.style.display = "none";
        btn.confirm_new_name.style.display = "none"
        settings_content.style.height = "190px";
    });

    btn.difficulty_change.addEventListener("click",(e) =>{
        let difficulty_choose_div = document.getElementById("difficulty--choose");
        let popup_background = document.getElementById("popup--background");
        popup_background.style.display = "block";
        difficulty_choose_div.style.display = "block";
    });

    btn.close_difficulty_change_popup.addEventListener("click", (e)=>{
        let difficulty_choose_div = document.getElementById("difficulty--choose");
        let popup_background = document.getElementById("popup--background");
        popup_background.style.display="none";
        difficulty_choose_div.style.display="none";
    });

    btn.easy.addEventListener("click",(e)=>{
        btn.difficulty_change.style.background = "url('../assets/easy.jpg')";
        btn.difficulty_change.style.backgroundSize = "100% 100%";
        let difficulty_choose_div = document.getElementById("difficulty--choose");
        let popup_background = document.getElementById("popup--background");
        let diff_save = document.getElementById("diff--save");
        popup_background.style.display="none";
        difficulty_choose_div.style.display="none";
        difficulty = 1;
        diff_save.value = difficulty;
    });

    btn.medium.addEventListener("click",(e)=>{
        btn.difficulty_change.style.background = "url('../assets/medium.jpg')";
        btn.difficulty_change.style.backgroundSize = "100% 100%";
        let difficulty_choose_div = document.getElementById("difficulty--choose");
        let popup_background = document.getElementById("popup--background");
        let diff_save = document.getElementById("diff--save");
        popup_background.style.display="none";
        difficulty_choose_div.style.display="none";
        difficulty = 2;
        diff_save.value = difficulty;
    });

    btn.hard.addEventListener("click",(e)=>{
        btn.difficulty_change.style.background = "url('../assets/hard.jpg')";
        btn.difficulty_change.style.backgroundSize = "100% 100%";
        let difficulty_choose_div = document.getElementById("difficulty--choose");
        let popup_background = document.getElementById("popup--background");
        let diff_save = document.getElementById("diff--save");
        popup_background.style.display="none";
        difficulty_choose_div.style.display="none";
        difficulty = 3;
        diff_save.value = difficulty;
    });

    function Diff_Btn_Choose(diff){
        if(diff === '1'){
            btn.difficulty_change.style.background = "url('../assets/easy.jpg')";
            btn.difficulty_change.style.backgroundSize = "100% 100%";
            return 1;
        }
        else if(diff === '2'){
            btn.difficulty_change.style.background = "url('../assets/medium.jpg')";
            btn.difficulty_change.style.backgroundSize = "100% 100%";
            return 2;
        }
        else if(diff === '3'){
            btn.difficulty_change.style.background = "url('../assets/hard.jpg')";
            btn.difficulty_change.style.backgroundSize = "100% 100%";
            return 3;
        }
    }
}