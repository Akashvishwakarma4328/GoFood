const express = require('express');
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");


mongoDB();
app.use(cors());
app.use((req, res, next) => {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");



    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-type,Accept');

    // Pass to next layer of middleware
    next();
});
app.get('/', (req, res) => {
    res.send("helloworld----")
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));

app.listen(port, () => {
    console.log(`example is listining on ${port}`);
})