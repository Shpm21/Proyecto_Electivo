const { Router } = require('express');
const router = Router();
const CareerController = require('../controllers/career');

router.get('/careers/:cod', CareerController.getCareerByCod);

module.exports = router;