const { createServer } = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");
const compression = require("compression");
const path = require("path");
const dev = app.get("env") !== "production";

if(!dev){
    app.use(express.static(path.join(__dirname, 'build')));
    app.get("*", (req, res)=> {
        res.sendFile(path.join(__dirname,"build","/index.html"));
    })
}
if(dev){
    app.use(morgan("dev"));
}

const server = createServer(app);

server.listen(process.env.PORT || 3000)