const { check, body } = require('express-validator');

const validations = {
    movie: (req, res, next) => {
        let validation = [
            check('title').isLength({min:1}).withMessage('Debes escribir un título'),
            check('length').isInt({min:0}).withMessage('Debes ingresar la duración de la película'),
            body('rating').custom( function( value ){ 
                if( value <= 10 && value >= 0 ) {
                    return true
                } else {
                    return false
                }
            }).withMessage('Debes ingresar un número entre el 0 y 10'),
            check('genre_id').isInt().withMessage('Debes ingresar un género'),
            check('release_date').isDate().withMessage('Debes ingresar una fecha'),
            check('awards').isInt({min:0}).withMessage('Debes ingresar cuantos premios')
        ];
        return validation;
    },
    actor: (req, res, next) => {
        let validation = [
            check('actor').isInt().withMessage('Debes ingresar un actor'),
            check('movie').isInt().withMessage('Debes ingresar una película')
        ];
        return validation;
    }
};

module.exports= validations;