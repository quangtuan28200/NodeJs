const express = require('express');
const app = express();
const port = 3000;

//dinh nghia duong dan
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//lang nghe port 3000 tu localhost cua may tinh
//localhost - 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});