var express = require('express');

// create our app
var app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, function () {
    console.log(`Started server on port: ${port}`);
});
