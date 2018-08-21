const express = require("express"); // npm install express
const config = require("config"); // npm install config
const app = express();

// body parser
const bodyParser = require("body-parser"); // npm install body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/home_dir", express.static('./'));

// controllers
const controllers = require(`./controllers/`);
app.use(controllers);

// server and host
let host = config.get("server.host");
let port = config.get("server.port");
const startServer = () => {
    app.listen(port = 8081, host = "localhost", () => {
        console.log(`Server is running on port: ${port}`);
        console.log(`Pid: ${process.pid}`);
    });
}

module.exports = {
    startServer
};