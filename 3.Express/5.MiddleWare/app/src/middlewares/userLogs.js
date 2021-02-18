const fs = require('fs');

function userLogs(req, res, next) {
    fs.appendFileSync('./src/logs/userLogs.txt', 'El usuario ingresó a la ruta: ' + req.url + '\r\n');
    next();
}

module.exports = userLogs;