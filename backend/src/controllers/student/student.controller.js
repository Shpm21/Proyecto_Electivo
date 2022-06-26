const { getPoolConecction } = require('../pool')
const pool = getPoolConecction();
const jwt  = require('jsonwebtoken');
require("dotenv").config();

exports.getStudents = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM student');
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

exports.getStudentByRut = async (req, res) => {
    try {
        const rut = req.params.rut;
        const response = await pool.query('SELECT * FROM student WHERE rut_person = $1', [rut]);
        if (response.rows.length > 0)
            res.status(200).json(response.rows)
        else
            res.status(404).json('the code is incorrect');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
const studentExist = async (rut) => {
        const response = await pool.query('SELECT * FROM student WHERE rut_person = $1', [rut]);
        if (response.rows.length > 0)
            return true
        else
            return false;
}
exports.login = async(req, res) => {
    try {
        const user = await studentExist(req.params.rut);
        if (!user)
            res.status(400).json({msg: 'Rut no existe'});
        else {
            const token = jwt.sign({rut: req.params.rut}, process.env.JWT_SECRET, {expiresIn: '15m'});
            const refreshToken = jwt.sign({rut: req.params.rut}, process.env.JWT_SECRET, {expiresIn: '15m'});
            res.status(200).json({authToken: token, refreshToken});
        }
    } catch (err) {
        res.status(500).json({err: 'error'});
    }
}