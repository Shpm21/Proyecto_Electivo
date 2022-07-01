const { Router } = require('express');
const router = Router();
const StudyPlainController = require('../controllers/studyplain');

router.get('/studyplains/:cod', StudyPlainController.getStudyPlainByCod);

module.exports = router;