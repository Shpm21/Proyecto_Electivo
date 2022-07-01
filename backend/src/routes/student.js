const { Router } = require('express');
const router = Router();
const StudentController = require('../controllers/student');
const { validateTokenAuthentication } = require('../middlewares/middlewares');

router.get('/students/', validateTokenAuthentication , StudentController.getStudents);
router.get('/students/:rut', validateTokenAuthentication,  StudentController.getStudentByRut);

module.exports = router;