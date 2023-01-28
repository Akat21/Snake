const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

const home = require('./routes/home');
const game = require('./routes/game');

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
