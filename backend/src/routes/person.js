const { Router } = require('express');
const router = Router();
const PersonController = require('../controllers/person');
const { validateTokenAuthentication } = require('../middlewares/middlewares');

router.get('/persons/:rut', validateTokenAuthentication, PersonController.getPersonByRut);

module.exports = router;