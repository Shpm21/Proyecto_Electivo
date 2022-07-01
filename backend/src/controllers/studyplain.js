const StudyPlain = require('../models/studyplain');

exports.getStudyPlainByCod = async (req, res) => {
    try {
        const response = await StudyPlain.findByPk(req.params.cod);
        if (response)
            return res.status(200).json(response.toJSON());
        return res.status(404).json('the code is incorrect');
    } catch (err) {
        return res.status(500).json(err);
    }
}