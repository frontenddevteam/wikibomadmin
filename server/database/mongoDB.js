const mongoClient = require("mongodb").MongoClient;
const config = require("config");
const assert = require("assert");
const accountModule = require("./../models/account.js");

// Connection URL
const url = config.get("mongoDB.url");
// Database Name
const dbName = config.get("mongoDB.dbName");

const findAccount = (userName) => {
    // Use connect method to connect to the server
    mongoClient.connect(url, (err, client) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        accountModule.findAccount(db, userName);
        client.close();
    });
}

const addAccount = (account) => {
    // Use connect method to connect to the server
    mongoClient.connect(url, (err, client) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        accountModule.insertAccount(db, account);
        client.close();
    });
}


module.exports = {
    findAccount,
    addAccount
}