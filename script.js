const express = require("express")
const path = require('path');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

const app = express()

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, host, () => {
    console.log('listening on :3000');
});

