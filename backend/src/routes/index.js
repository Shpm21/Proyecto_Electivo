const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    next();
},
(req, res) => {
    res.send('Este es los vilos')
});
// STUDY PLAIN
const { getStudyPlains, getStudyPlainByCod } = require('../controllers/study_plain/studyplain.controller')

router.get('/studyplains', getStudyPlains);
router.get('/studyplains/:cod', getStudyPlainByCod);

// CAREER
const { getCareers, getCareerByCod } = require('../controllers/career/career.controller');

router.get('/careers', getCareers);
router.get('/careers/:cod', getCareerByCod)

// STUDENT
const { getStudents, getStudentByRut, login } = require('../controllers/student/student.controller');

router.get('/students', getStudents);
router.get('/students/:rut', (req, res, next) => {
    console.log(`the body is ${req.params.rut}`)
    next();
}
,getStudentByRut);
router.get('/login/:rut', login);

// PERSON
const { getPersons, getPersonByRut } = require('../controllers/person/person.controller');

router.get('/persons', getPersons);
router.get('/persons/:rut', getPersonByRut);

// COURSES
const { getCourses, getCourseByCod } = require('../controllers/course/course.controller');
router.get('/courses', getCourses);
router.get('/courses/:cod', getCourseByCod)

module.exports = router;