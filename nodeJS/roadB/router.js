const indexController = require('./src');

// Router System
let router = (req, res) => {
    switch(req.url) {
        case '/': 
            indexController.homePage(req, res);
            break;
        case '/en-cartelera':
            indexController.enCartelera(req, res);
            break;
        case '/mas-votadas':
            indexController.masVotadas(req, res);
            break;
        case '/sucursales':
            indexController.sucursales(req, res);
            break;
        case '/contacto':
            indexController.contacto(req, res);
            break;
        case '/preguntas-frecuentes':
            indexController.preguntasFrecuentes(req, res);
            break;
        default:
            res.end('404 not found');
    }
};

module.exports = router;