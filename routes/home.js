const express = require('express');
const router = express.Router();

const fs = require("fs");

router.use((req, res, next)=>{
    next();
});

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

router.post('/', (req, res)=>{
    id = RandomNumberGenerator(9999999)
    if(fs.existsSync("./database/leaderboard.txt")){
        fs.appendFileSync('./database/leaderboard.txt', req.body.nickname + ",0," + id + ';', 'utf-8');
    }
    else{
        fs.writeFileSync('./database/leaderboard.txt', req.body.nickname + ",0," + id + ';', 'utf-8');
    }
    res.redirect('game/?user=' + req.body.nickname + '&id=' + id + '&df=' + 1);
})

function RandomNumberGenerator(max){
    return Math.floor(Math.random() * max);
}

module.exports = router;