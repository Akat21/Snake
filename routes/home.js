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
    console.log(req.body);
    if(fs.existsSync("./database/leadearboard.txt")){
    }
    else{
        fs.writeFileSync('./database/leaderboard.txt', req.body.nickname, 'utf-8');
    }
    res.redirect('game/?user=' + req.body.nickname);
})

module.exports = router;