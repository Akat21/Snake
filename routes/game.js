const express = require('express');
const router = express.Router();
const fs = require('fs');

let curr_user_id = 0;
let curr_user_name = "";

router.use((req, res, next)=>{
    next();
});

router.get('/', (req, res)=>{
    curr_user_name = req.query.user;
    curr_user_id = req.query.id;
    res.render("game",{});
});

router.post('/', (req, res)=>{
    if(req.body.nickname){
        if(fs.existsSync('./database/leaderboard.txt')){
            let data = fs.readFileSync('./database/leaderboard.txt', 'utf-8').split(';');
            idx = 0;
            nickname = req.body.nickname;
            data.forEach(element => {
                if((element.includes(String(curr_user_id))) === true){
                    element = element.split(',')
                    element[0] = req.body.nickname;
                    element = element.join(",");
                    data[idx] = element;
                }
                idx++;
            });
            data = data.join(";");
            fs.writeFileSync('./database/leaderboard.txt', data, 'utf-8');
        }    
    }
    else if(req.body.highscore){
        if(fs.existsSync('./database/leaderboard.txt')){
            let data = fs.readFileSync('./database/leaderboard.txt', 'utf-8').split(';');
            idx = 0;
            data.forEach(element => {
                if((element.includes(String(curr_user_id))) === true){
                    element = element.split(',')
                    nickname = element[0];
                    if (element[1] < req.body.highscore){
                        element[1] = req.body.highscore;
                    }
                    element = element.join(",");
                    data[idx] = element;
                }
                idx++;
            });
            data = data.join(";");
            fs.writeFileSync('./database/leaderboard.txt', data, 'utf-8');
        }    
    }
    res.redirect('game/?user=' + nickname + '&id=' + curr_user_id);
});
module.exports = router;
