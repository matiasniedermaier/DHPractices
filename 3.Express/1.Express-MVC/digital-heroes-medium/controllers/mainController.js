module.exports = {
    // Home
    index: (req, res) => {
        return res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
    },
    // Credit
    credit: (req, res) => {
        return res.send('Esto fue obra de un próximo heroe de esta página, Matias Niedermaier :)'); 
    },
    // 404 not found
    default: (req, res) => {
        return res.send('Error 404 not found');
    }
};