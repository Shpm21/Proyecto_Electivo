const { getPoolConecction } = require('../pool')
const { isValidRut } = require('../validate/validate');
const pool = getPoolConecction();

exports.getPersons = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM person');
        console.log(response.rows[0]);
        res.status(200).json(response.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getPersonByRut = async (req, res) => {
    try {
        const rut = req.params.rut;
        if (!isValidRut(rut))
            res.status(404).json('the rut not exists in the database');
        const response = await pool.query('SELECT * FROM person WHERE rut = $1', [rut]);
        if (response.rows.length > 0)
            res.status(200).json(response.rows)
        else
            res.status(404).json('the code is incorrect');
            
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}