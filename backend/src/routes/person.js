const { Router } = require('express');
const router = Router();
const PersonController = require('../controllers/person');

router.get('/persons/:rut' ,PersonController.getPersonByRut);

module.exports = router;