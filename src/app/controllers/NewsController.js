class NewsController{
    
    //URL: ../news
    index(req, res){
        res.render('news');
    }

    //URL: ../news/:slug
    news_detail(req, res){
        res.send('NEWS_DETAILS');
    }
}

//Khi goi file nay se export ra Contructor newsController
module.exports = new NewsController();

