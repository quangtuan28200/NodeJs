const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db');

//Connect to db
db.connect();


//Config static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware luu lai nhung parameter khi dung method POST
app.use(
    express.urlencoded({
        extended: true,
    })
);

//method_overwrite
app.use(methodOverride('_method'));

//middleware luu lai nhung parameter khi dung JS
app.use(express.json());

//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs', // dat lai duoi file cho ngan gon
        //tao ra cac ham xu ly theo y muon
        helpers: {
            sum: (a ,b) => a + b,
        }
    })
);
app.set('view engine', 'hbs');

//tro? duong dan den thu muc views
//'resources/views' khong viet nhu vay
//'resources', 'views' se tu them / hoac \ tuy theo He dieu hanh dang dung
app.set('views', path.join(__dirname, 'resources', 'views')); 

//HTTP logger
// app.use(morgan('combined'));

//route init
route(app);

//start webserver
//lang nghe port 3000 tu localhost cua may tinh
//localhost - 127.0.0.1
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
