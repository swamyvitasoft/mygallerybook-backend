const express = require('express');
const dotenv = require("dotenv");

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello, World! Welcome MyGallery Book')
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/`)
});
