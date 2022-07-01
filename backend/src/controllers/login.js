const Student = require('../models/student');
const jwt  = require('jsonwebtoken');
require("dotenv").config();

exports.login = async(req, res) => {
    try {
        const user = await Student.findByPk(req.body.rut_person);
        if (!user) 
            return res.status(400).json({msg: 'Rut no existe'});
        const token = jwt.sign({rut: user.rut_person}, process.env.JWT_SECRET, {expiresIn: '1h'});
        const refreshToken = jwt.sign({rut: user.rut_person}, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.send({rut: user.rut_person, authToken: token, refreshToken});
    } catch (err) {
        return res.status(500).json({err: 'error'});
    }
}