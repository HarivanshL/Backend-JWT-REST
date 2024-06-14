/**
 * Author: Harivansh Luchmun
 * Purpose: Implement a backend that simulates authentication of a user and provides 
 * a JWT for each unique user. This project will not be using database queries just a 
 * simulated database data.
 */


/* Initial setup of the application*/
import authenticate  from './middleware/auth';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

/* Users data */
const users = [
    { user: "Josh", password}
]

authenticate(users[0].user, users[0].password);
/*
app.post('/', (req, res) => {

})
*/
