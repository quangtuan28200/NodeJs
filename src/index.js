const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes/index');

//Config static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware luu lai nhung parameter khi dung method POST
app.use(
    express.urlencoded({
        extended: true,
    })
);
//middleware luu lai nhung parameter khi dung JS
app.use(express.json());

//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs', // dat lai duoi file cho ngan gon
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); //tro? duong dan den thu muc views

//HTTP logger
// app.use(morgan('combined'));

//route init
route(app);

//start webserver
//lang nghe port 3000 tu localhost cua may tinh
//localhost - 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

var a = ['a', 'b'];
