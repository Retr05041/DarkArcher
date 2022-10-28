const express = require("express"); // for the app itself
const server = express();
const fileUpload = require('express-fileupload'); // for uploading files
const path = require('path'); // path
const port = 5000;

// To render the React app in /build
server.use(express.static(path.join(__dirname, 'build')))

// default options
server.use(fileUpload());

// Post request for uploading a file
server.post('/upload-file', function (req, res) {
    console.log(req.files.inputedFile.name); // the uploaded file object
});

// Home page
server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

server.listen(port, () => { console.log(`Server is active on port ${port}`) }); // Start server