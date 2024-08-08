const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app'); 
const morgan = require('morgan');  
const app = express();
const port = 3005;


app.use(morgan('combined'))

app.get("/", (req,res) => {
    res.send("hi weed222");
});

app.listen(port, () => {
    debug(chalk.green("มาจ้า : " + port));
});