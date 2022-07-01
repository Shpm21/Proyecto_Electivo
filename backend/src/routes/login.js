const { Router } = require('express');
const router = Router();
const LoginController = require('../controllers/login');

router.post('/login/', LoginController.login);

module.exports = router;