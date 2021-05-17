// users hardcoded for simplicity, store in a db for production applications
const users = [{ id: 1, username: "test", password: "test", firstName: "Test", lastName: 'User' }];
const MongoClient = require('mongodb').MongoClient
const jwt = require("jsonwebtoken");

async function authenticate(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log("usr", username)
        // throw new Error("asd")
        return jwt.sign({ user: user }, "crowds");
    }
    else {
        console.log("input:", username)
    }
}

function blacklist(req, res) {

}

module.exports = {
    authenticate,
    blacklist
};