var express = require("express");
var router = express.Router();

router.use("/account", require(`${__dirname}/accountController/`));

router.get("/", (request, response) => {
    response.write("Welcome to Wikibo Admin. This is the home page.");
    response.end();
});

module.exports = router;