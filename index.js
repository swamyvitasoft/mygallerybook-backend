const express = require('express');

const app = express();

const PORT = 3100;

app.get('/', (req, res) => {
    res.send('Hello, World! Welcome MyGallery Book');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
