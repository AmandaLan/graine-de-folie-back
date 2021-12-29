const bodyParser = require("body-parser");
const express = require ("express");
const routes = require("./routes/index");
require("dotenv").config({path:"./config/.env"});
require("./config/db");
const cors = require("cors")
const server = express();

server.use(cors());
server.use(bodyParser.json());
routes(server);

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
