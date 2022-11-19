const express = require('express');
const app = express();
const port = process.argv[2] || 80

// do the port thing 
const www = express.static(`${__dirname}/www`);
app.use(www);


app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
});