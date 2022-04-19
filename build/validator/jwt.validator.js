"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
exports.default = {
    paramsJWT: [
        (0, express_validator_1.header)('Authorization')
            .not().isEmpty().withMessage('Access token no provided')
            .matches(/^Bearer /).withMessage('Not a valid token')
    ],
    validateJWT: function (req, res, next) {
        //Mostramos lo que nos llega 
        console.log("Heraders: ", req.headers);
        const errorRes = (0, express_validator_1.validationResult)(req);
        if (!errorRes.isEmpty()) {
            return res.status(422).json({
                error: errorRes.array()
            });
        }
        // Si no hay errores, continuamos
        next();
    }
};
