const { QueryTypes } = require('sequelize');
const { sequelize } = require('../connect');

exports.getCoursesAvailable = async (req, res) => {
    try {
        //if (!isValidRut(rut))
        //    return res.status(404).json('the rut not exists in the database');
        
        const rut = req.params.rut;
        const response = await sequelize.query('SELECT * FROM get_available_courses(:rut)', {
                replacements: {
                        rut
                },
                type: QueryTypes.SELECT
        });
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
};