const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');

const app = express();
const port = 3000;

//Config static file
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine('hbs', exphbs({
    extname: '.hbs' // dat lai duoi file cho ngan gon
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); //tro? duong dan den thu muc views

//HTTP logger
app.use(morgan('combined'));

//dinh nghia domain
app.get('/', (req, res) => {
    // vao views/layouts chay main.hbs tao ra khung cho web
    // render va append home.hbs vao khung main.hbs 
    // cung voi do la cac partials cung duoc render va append vao khung khi main.hbs chay
    res.render('home');
});

//lang nghe port 3000 tu localhost cua may tinh
//localhost - 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});