const express = require("express");
const server = express();
const port = 5000;

server.get("/", (req, res) => {
    res.send("Hello World.")
    res.end;
})

server.listen(port, () => {console.log(`Server is active on port ${port}`)});