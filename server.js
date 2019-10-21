const express = require('express')
const app = express();

app.use(express.static(__dirname + '/client'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server is running on port" + port);
});
