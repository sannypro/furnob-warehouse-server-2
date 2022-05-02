const express = require('express');

const cors = require('cors');
const middlewareWrapper = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Running Furnob Warehouse server ")
})

app.listen(port, () => {
    console.log("listening to port", port);
})