const { isValidRut } = require('../validate');
const Person = require('../models/person');

exports.getPersonByRut = async (req, res) => {
    try {
        const rut = req.params.rut;
        if (!isValidRut(rut))
            return res.status(404).json('the rut not exists in the database');
        const response = await Person.findByPk(rut);
        if (response)
            return res.status(200).json(response.toJSON());
        return res.status(404).json('the code is incorrect');
            
    } catch (err) {
        return res.status(500).json(err);
    }
}
