const express = require("express"); // for the app itself - add ""homepage": "./"" in replacement for ""proxy": "http://localhost:5000/"," to build it 
const server = express();
const fileUpload = require('express-fileupload'); // for uploading files
const fs = require("fs"); // Dealing with files
const path = require("path");
const alert = require('alert'); // alerts
const port = 5000;
const dirPath = "storage/"; // Will not work unless run in docker now

// To render the React app in /build
//  server.use(express.static(path.join(__dirname, 'build')))

// Default options
server.use(fileUpload());
// serves the contents of 'dirPath' as static files - consider using 'nginx' for production
server.use("/storage", express.static(dirPath));


// Post request for uploading a file - index.html
server.post('/', function (req, res) {
    let inputedFile;
    let uploadPath;

    // Make sure files exist
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "inputedFile") is used to retrieve the uploaded file
    inputedFile = req.files.inputedFile;
    uploadPath = dirPath + inputedFile.name;

    // Use the mv() method to place the file somewhere on your server
    inputedFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);

        res.redirect('/');
        alert("File Uploaded!");
    });
});

server.get("/api/files", (req, res) => {
    // Every time the site is reloded it will list new files
    let files = fs.readdirSync(dirPath);
    res.send(files);
});

server.listen(port, () => { console.log(`Server is active on port ${port}`) }); // Start server