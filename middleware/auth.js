/**
 * 
 * Purpose: This file holds the authentication method
 */


require('dotenv').config();
const jwt = require('jsonwebtoken');


function authenticate(email, password) {
    //Retrieve if user exists in database
    //Assume that it is succesful and user exists
    const header = {
        "typ": "JWT",
        "alg": "HS256"
    }
    const payload = {
        userID: "from db",
        role: "from db",
        name: "John Smith"
    }

    const secret = process.env.SECRET_KEY;

    token = jwt.sign(payload, secret, {
        algorithm: header.alg

    });
    return token;
}

module.exports= {
    authenticate
}