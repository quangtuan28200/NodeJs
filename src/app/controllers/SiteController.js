class SiteController {
    //URL: ../news
    index(req, res) {
        res.render('home');
    }

    //URL: ../news/:slug
    search(req, res) {
        res.render('search');
    }
}

//Khi goi file nay se export ra Contructor newsController
module.exports = new SiteController();
