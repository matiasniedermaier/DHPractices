const index = require ('./src/index');
let result = '';

// Sistema de ruteo
const router = (route) => {
    switch (route) {

        // Home Page
        case '/':
            result = index.home;
            break;
        // En cartelera
        case '/en-cartelera':
            result = index.cinema;
            break;
        //  Mas votadas
        case '/mas-votadas':
            result = index.mostAverage;
            break;
        // Sucursales
        case '/sucursales':
            result = index.theaters;
            break;
        // Preguntas Frecuentes
        case '/preguntas-frecuentes':
            result = index.faqs;
            break;
        // Contacto
        case '/contacto':
            result = index.contact;
            break;
    }
    
    return result;
}

module.exports = router;