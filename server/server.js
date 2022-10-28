const express = require("express"); // for the app itself
const server = express();
const multer = require('multer'); // middleware used for handling multipart/form-data requests
const path = require('path');
const port = 5000;

app.use(express.static(__dirname + '/root'));

server.get("/", (req, res) => {
    res.send("Hello World.")
    res.end;
})

server.listen(port, () => { console.log(`Server is active on port ${port}`) });