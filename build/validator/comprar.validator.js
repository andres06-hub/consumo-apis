"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
//////////////////////////////////////////
// Validador de los idProductos
exports.default = {
    params: [
        (0, express_validator_1.body)('idProduct')
            .not().isEmpty().withMessage('Empty file! ')
            // .isNumeric().withMessage("Data not valid!")
            // TODO -> Verificar que la longitud se cumpla
            .isLength({ min: 0, max: 10 }).withMessage('ID invalid!'),
    ],
    validate: function (req, res, next) {
        const errors = (0, express_validator_1.validationResult)(req);
        // Si es diferente 
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
        ;
        // Si no hay errores, por lo contrario continua
        next();
    },
};
