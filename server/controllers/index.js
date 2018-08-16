var express = require("express");
var router = express.Router();

router.use("/user", require(`${__dirname}/userController/`));

router.get("/", (request, response) => {
    response.write("Welcome to Wikibo Admin. This is the home page.");
    response.end();
});

module.exports = router;