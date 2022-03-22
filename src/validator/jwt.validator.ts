

import { Request, Response, NextFunction } from 'express';
import { header, validationResult } from 'express-validator';

export default {

    params : [
        header('Authorization')
            .not().isEmpty().withMessage('Access token no provided')
            .matches(/^Bearear /).withMessage('Not a valid token')
    ],

    validate : function(req:Request, res:Response, next:NextFunction){
        //Mostramos lo que nos llega 
        console.log("Heraders: ", req.headers);
        
        const errorRes = validationResult(req)
        if(!errorRes.isEmpty()){
            return res.status(422).json({
                error: errorRes.array()
            });
        }
        // Si no hay errores, continuamos
        next();        
    }
}
