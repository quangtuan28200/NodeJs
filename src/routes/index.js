const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    //trang news
    app.use('/news', newsRouter);
    //courses
    app.use('/courses', coursesRouter);
    //me
    app.use('/me', meRouter);
    //trang chu
    app.use('/', siteRouter);
}

module.exports = route;
