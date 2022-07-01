const { Router } = require('express');
const router = Router();
const CourseController = require('../controllers/course');

router.get('/courses/:cod', CourseController.getCourseByCod);

module.exports = router;