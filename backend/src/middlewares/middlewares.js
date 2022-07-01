const jwt  = require('jsonwebtoken');
require("dotenv").config();
//ACA QUEDE
exports.validateTokenAuthentication = (req, res, next) => {
    try {
        const authorization = req.get('authorization');
        if (!authorization)
            return res.status(401).json({message: 'Necesitas autorización'});
        const token = authorization.split(' ').length == 2 ? authorization.split(' ')[1] : null;

        if (!token)
            return res.status(401).json({message: 'Necesitas autorización'});
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (decodedToken)
            console.log('token valido');
            console.log(`rut = ${decodedToken.rut}`);
        next();
    } catch (err) {
        return res.status(401).json({message: 'Necesitas autorización'});
    }
}