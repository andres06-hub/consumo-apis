// IMPORTACIONES
import { Request, Response, NextFunction } from 'express';
import { body, validationResult, query } from 'express-validator';

export default {
    // validamos los parametros 
    params : [
        query('email')
            .not().isEmpty().withMessage("Empty file!!")
            .isEmail().withMessage('Not validate email!!'),
        query('password')
            .not().isEmpty().withMessage('Empty file!!')
            .isLength({ min:8, max:12 }).withMessage('Debe de contener minimo 8 caracteres'),
    ],

    validate : function (req:Request, res:Response, next:NextFunction){
        // VAlidamos los errores
        const erros = validationResult(req);
        // SI es diferentes 
        if(!erros.isEmpty()){
            return res.status(422).json({
                //Mostramos los errores
                erros : erros.array()
            });
        }
        next();
    },
};