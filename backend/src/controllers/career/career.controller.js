const { getPoolConecction } = require('../pool')
const pool = getPoolConecction();

exports.getCareers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM career');
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getCareerByCod = async (req, res) => {
    try {
        const cod = req.params.cod;
        const response = await pool.query('SELECT * FROM career WHERE cod = $1', [cod]);
        if (response.rows.length > 0)
            res.status(200).json(response.rows)
        else
            res.status(404).json('the code is incorrect');
            
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}