const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const fs = require("fs");

const home = require('./routes/home');
const game = require('./routes/game');

//load file content and send to frontend//
app.get('/leaderboard_content', (req, res) =>{
    fs.readFile('./database/leaderboard.txt', 'utf-8', (err, data)=>{
        if(err) throw err;
        res.send(data);
    })
});

//paths
app.use('/', express.static(path.join(__dirname, 'src')));

//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//ejs
app.set('view engine', 'ejs');

//router
app.use('/', home);
app.use('/game', game);

app.listen(3000);
