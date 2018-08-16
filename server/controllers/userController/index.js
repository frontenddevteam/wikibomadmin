var express = require("express");
var router = express.Router();

router.use(require(`${__dirname}/modification.js`));

router.get("/", (request, response) => {
    response.write("This is the user page.");
    response.end();
});

module.exports = router;