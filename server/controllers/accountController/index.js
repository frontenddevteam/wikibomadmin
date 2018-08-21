let express = require("express");
let router = express.Router();
let mongoDB = require(`${__dirname}/../../database/mongoDB.js`);

router.get("/", (request, response) => {

    const userName = "wikiboaccount1";
    const account = mongoDB.findAccount(userName);
    
    response.write(`Get account is successful: ${account}.`);
    response.end();
});

router.get("/add", (request, response) => {
    // mockup for add account
    const account = {
        "user": "wikiboaccount",
        "password": "admin@123",
        "firstName": "kibo",
        "lastName": "admin"
    };
    mongoDB.addAccount(account);
    response.write("Insert account is successful.");
    response.end();
});

router.post("/update", (request, response) => {
    
});

router.post("/delete", (request, response) => {
    
});

module.exports = router;