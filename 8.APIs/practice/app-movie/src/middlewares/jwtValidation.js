const jwt = require('jsonwebtoken');

const validation = (req, res, next) => {
    const token = req.header('token');
    
    if( !token ) {
        console.log('no hay token');
        next();
    } else {
        const decoded = jwt.verify(token, 'secret');
        console.log(decoded);
        next();
    }
};

module.exports = validation;