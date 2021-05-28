
const Course = require('../models/Cource');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    //URL: ../news
    index(req, res, next) {

        //GET model
        //goi bang callback
        // Course.find({}, function (err, courses) {  
        //     if(!err){
        //         res.json(courses);
        //     }else{
        //         next(err);
        //     }
        // });

        //goi bang promise
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    //URL: ../news/:slug
    search(req, res) {
        res.render('search');
    }
}

//Khi goi file nay se export ra Contructor newsController
module.exports = new SiteController();
