import * as input from "../constants/inputs.js";
import * as label from "../constants/labels.js";
import { RandomNumberGenerator } from "../static/script.js";
import { nickname } from "./Query.js";

export function InputsInit(){
    input.name_login_input.value = `Guest${RandomNumberGenerator(999999)}`;
    input.change_name.value = nickname;
    label.settings_name.innerText = nickname;

    input.name_login_input.addEventListener("focusout", (e)=>{
        if (input.name_login_input.value.length === 0){
            input.name_login_input.value = `Guest${RandomNumberGenerator(999999)}`
        }
    });

    input.change_name.addEventListener("focusout", (e)=>{
        if (input.change_name.value.length === 0){
            input.change_name.value = nickname;
        }
    });
}