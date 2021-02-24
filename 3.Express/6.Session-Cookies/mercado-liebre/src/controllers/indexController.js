const products = require('../data/productsDataBase.json');

const controller = {
    index: (req, res) => {
        let colors = ['Gris', '#ebebeb', 'Blanco', 'white', 'Azul', '#6763f0'];
        let color = req.query.backgroundColor;
        let remember = req.query.remember;
        let notRemember = req.query.notRemember;
        res.locals.on = false;
        if (color) {
            res.locals.on = true;
            res.locals.color = color;
            for(let i = 0; i < colors.length; i += 2) {
                if( color == colors[i] ) {
                    res.locals.backgroundColor = colors[i+1];
                }
            }
        } else if( req.cookies.remember ) {
            res.locals.on = true;
            res.locals.backgroundColor = req.cookies.color;
        }
        if( remember ) {
            res.cookie('remember', true, { maxAge: 60000 });
            res.cookie('color', res.locals.backgroundColor, { maxAge: 60000 });
        } else if( notRemember ) {
            res.clearCookie('remember');
            res.clearCookie('color');
        }
        res.render('index', {products: products});
    }
}

module.exports = controller;