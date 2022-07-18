const { Router } = require('express');
const router = Router();
const RequestController = require('../controllers/request');
const { validateTokenAuthentication } = require('../middlewares/middlewares');

router.get('/request/:rut', validateTokenAuthentication, RequestController.getCoursesAvailable);

module.exports = router;