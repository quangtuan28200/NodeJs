
const Course = require('../models/Cource');
const {multipleMongooseToObject} = require('../../util/mongoose');

class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => { 
                res.render('me/storedCourses', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);  
    }
}

//Khi goi file nay se export ra Contructor newsController
module.exports = new MeController();
