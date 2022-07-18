const { Router } = require('express');
const router = Router();
const RequestController = require('../controllers/request');

router.get('/request/:rut', RequestController.getCoursesAvailable);

module.exports = router;