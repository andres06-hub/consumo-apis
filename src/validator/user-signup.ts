
import { Request, Response, NextFunction } from 'express';

import { body, validationResult } from 'express-validator';

// exportamos las funciones - por defecto
export default{ 
    //Obtenemos los datos
    params : [
        body('firstName')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({min:1 , max:200}).withMessage('Debe de contener mas de 0 y menor a 200 '),
        body('lastName')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({min:1 , max:200}).withMessage('Debe de contener mas de 0 y menor a 200 '),
        body('age')
            .not().isEmpty().withMessage('Empty file !!')
            .isNumeric().withMessage("Not validad Data !")
            .isLength({min:18 , max:120}).withMessage('Debe de contener mas de 0 y menor a 200 '),
        body('city')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({min:1 , max:100}).withMessage('Debe de contener mas de 0 y menor a 100 '),
        body('email')
            .not().isEmpty().withMessage('Empty file !!')
            .isEmail().withMessage("Debe ser un Email"),
        body('password')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({min:8 , max:12}).withMessage('Debe de contener mas de 0 y menor a 200 ')
    ]
}