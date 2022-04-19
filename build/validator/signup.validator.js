"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
// exportamos las funciones - por defecto
exports.default = {
    //Obtenemos los datos
    params: [
        (0, express_validator_1.body)('firstName')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({ min: 1, max: 200 }).withMessage('Debe de contener mas de 0 y menor a 200 '),
        (0, express_validator_1.body)('lastName')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({ min: 1, max: 200 }).withMessage('Debe de contener mas de 0 y menor a 200 '),
        // TODO -> VERIFICAR QUE LOS AÑOS SE CUMPLA LA LONGITUD etc...
        // body('age')
        //     .not().isEmpty().withMessage('Empty file !!')
        //     .isNumeric().withMessage("Not validad Data !")
        //     .isLength({min:18 , max:120}).withMessage('Debe de contener más de 18 y menor a 200 '),
        (0, express_validator_1.body)('city')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({ min: 1, max: 100 }).withMessage('Debe de contener mas de 0 y menor a 100 '),
        (0, express_validator_1.body)('email')
            .not().isEmpty().withMessage('Empty file !!')
            .isEmail().withMessage("Debe ser un Email"),
        (0, express_validator_1.body)('password')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({ min: 8, max: 12 }).withMessage('Debe de contener "8" o más caracteres ')
    ],
    // Validamos los errores
    validate: function (req, res, next) {
        // Validamos los errores
        const erros = (0, express_validator_1.validationResult)(req);
        // SI es diferente 
        if (!erros.isEmpty()) {
            return res.status(422).json({
                erros: erros.array()
            });
        }
        next();
    },
};
