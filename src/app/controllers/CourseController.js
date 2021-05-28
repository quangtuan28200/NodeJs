
const Course = require('../models/Cource');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController {
    // [GET]/courses/:slug
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course =>{
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    // [GET]/courses/create
    create(req, res){
        res.render('courses/create');
    }

    // [POST]/courses/store
    store(req, res){
        // const formData = req.body;
        // formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        // const course = new Course(formData);
        // course.save();

        res.send('COURSE SAVE');
    }
}

//Khi goi file nay se export ra Contructor newsController
module.exports = new CourseController();
