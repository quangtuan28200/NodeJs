const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    //trang news
    app.use('/news', newsRouter);
    //courses
    app.use('/courses', coursesRouter);
    //trang chu
    app.use('/', siteRouter);
}

module.exports = route;
