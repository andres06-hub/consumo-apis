"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
exports.default = {
    // validamos los parametros 
    params: [
        (0, express_validator_1.query)('email')
            .not().isEmpty().withMessage("Empty file!!")
            .isEmail().withMessage('Not validate email!!'),
        (0, express_validator_1.query)('password')
            .not().isEmpty().withMessage('Empty file!!')
            .isLength({ min: 8, max: 12 }).withMessage('Debe de contener min: 8 caracteres y max: 12'),
    ],
    validate: function (req, res, next) {
        // VAlidamos los errores
        const erros = (0, express_validator_1.validationResult)(req);
        // SI es diferentes 
        if (!erros.isEmpty()) {
            return res.status(422).json({
                //Mostramos los errores
                erros: erros.array()
            });
        }
        next();
    },
};
