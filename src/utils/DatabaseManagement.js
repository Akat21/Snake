import * as label from "../constants/labels.js";
import { user_id } from "./Query.js";

export function LeaderboardDataPass(){
    fetch('/leaderboard_content')
        .then(response => response.text())
        .then(data => {
            data = data.split(';');
            let final_data = [];
            for (let i = 0; i < data.length; i++){
                let el = data[i].split(',');
                if(el[2] == user_id){
                    label.highscore_disp.innerText = el[1];
                }
                final_data.push(el);
            }
            let sorted_data = final_data.sort((a, b) => b[1] - a[1]);

            for (let i = 0; i < sorted_data.length - 1; i++){
                let leaders = document.getElementById("leaders");
                let element = document.createElement("li");
                element.innerText = sorted_data[i].slice(0,2);
                leaders.append(element)
            }
    });
}