const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //trang news
    app.get('/news', newsRouter);
    //trang chu
    app.get('/', siteRouter);
}

module.exports = route;
