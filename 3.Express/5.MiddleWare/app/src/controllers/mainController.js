const controller = {
    home: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.send('Hola Admin: ' + req.query.admin);
    },
    services: (req, res) => {
        res.render('services');
    }
};

module.exports = controller;