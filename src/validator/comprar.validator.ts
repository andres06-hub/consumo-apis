
import { Request, Response, NextFunction} from 'express';
import { body, validationResult } from 'express-validator';

//////////////////////////////////////////
// Validador de los idProductos
export default {

    params : [
        body('idProduct')
            .not().isEmpty().withMessage('Empty file! ')
            // .isNumeric().withMessage("Data not valid!")
            // TODO -> Verificar que la longitud se cumpla
            .isLength({min:0, max:10}).withMessage('ID invalid!'),
    ],

    validate : function(req:Request, res:Response, next:NextFunction){
        const errors = validationResult(req);
        // Si es diferente 
        if(!errors.isEmpty()){
            return res.status(422).json({
                errors: errors.array()
            });
        };
        // Si no hay errores, por lo contrario continua
        next();
    },
} 