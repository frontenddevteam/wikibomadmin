var express = require("express"); // npm install express
var config = require("config"); // npm install config
var app = express();

// body parser
var bodyParser = require("body-parser"); // npm install body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/static/", express.static('./client/dist/client'));

// controllers
var controllers = require(`${__dirname}/server/controllers/`);
app.use(controllers);

// server and host
var host = config.get("server.host");
var port = config.get("server.port");
app.listen(port, host, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`Pid: ${process.pid}`);
});