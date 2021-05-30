
const Course = require('../models/Cource');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController {
    // [GET]/courses/:slug
    show(req, res, next){
        Course.findOne({slug: req.params.slug})
            .then(course =>{
                res.render('courses/show', { 
                    course: mongooseToObject(course) 
                });
            })
            .catch(next);
    }
    // [GET]/courses/create
    create(req, res){
        res.render('courses/create');
    }

    // [POST]/courses/store
    store(req, res){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => {
                //chuyen huong trang web ben server
                res.redirect('/');
            })
            .catch(err => {
                //handel
            });
    }

    // [GET]/courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', {
                    course: mongooseToObject(course) 
                });
            })
            .catch(next); 
    }

    // [PUT]/courses/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next); 
    }

    // [DELETE]/courses/:id
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => {
                res.redirect('back');
            })
            .catch(next); 
    }
}

//Khi goi file nay se export ra Contructor newsController
module.exports = new CourseController();
