function adminMiddleware(req, res, next) {
    let users = ['Ada', 'Greta', 'Vim', 'Tim'];
    let admin = false;
    users.forEach(x => {
        if( x == req.query.admin ) admin = true;
    })
    if( admin ) {
        next();
    } else {
        res.send('No tienes privilegios para ingresar');
    }
};

module.exports = adminMiddleware;