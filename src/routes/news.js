const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController.js');

router.get('/:slug', newsController.news_detail);
router.get("/", newsController.index);

module.exports = router;
