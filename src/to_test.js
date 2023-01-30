
exports.Diff_Btn_Choose = (diff)=>{
    if(diff === '1'){
        // difficulty_btn.style.background = "url('../assets/easy.jpg')";
        // difficulty_btn.style.backgroundSize = "100% 100%";
        return 1;
    }
    else if(diff === '2'){
        // difficulty_btn.style.background = "url('../assets/medium.jpg')";
        // difficulty_btn.style.backgroundSize = "100% 100%";
        return 2;
    }
    else if(diff === '3'){
        // difficulty_btn.style.background = "url('../assets/hard.jpg')";
        // difficulty_btn.style.backgroundSize = "100% 100%";
        return 3;
    }
}

exports.AddTailPosition = (dir, position_x, position_y)=>{
    if(dir === "down"){
        return [position_x, position_y - 1];
    }
    else if(dir === "up"){
        return [position_x, position_y + 1];
    }
    else if(dir === "left"){
        return[position_x + 1, position_y];
    }
    else if(dir === "right"){
        return[position_x - 1, position_y];
    }
}

exports.RandomNumberGenerator = (max)=>{
    return Math.floor(Math.random() * max);
};