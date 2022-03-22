import express from 'express';
import { Request, Response } from 'express';

import path from './paths/comprar.paths';
import tokenValidator from '../validator/jwt.validator';
import comprarValidator from '../validator/comprar.validator';
import { isAuth } from '../middlewares/auth';
////////////////////////////////////////////////////////

const router = express.Router();
// Deconstruimos
const { paramsJWT, validateJWT} = tokenValidator;
const { params, validate } = comprarValidator;

router.route(path.comprar)
    .get(isAuth, async (req:Request, res:Response) => {
        res.send('Welcome, Hello from /comprar')
    })

    // validamos los datos por el params - validate
    // Se valida el token - isAuth
    .post( paramsJWT,validateJWT, params, validate, isAuth, async (req:Request, res:Response) => {

        // obtengo el dato
        const { idProduct } = req.body;

        try {
            
            return res.status(200).json({
                idProduct,
                msg:"Compra OK",
            });

        } catch (err) {
            // mostramos el error por consola 
            console.log(err);
            // Respondemos al server
            return res.status(401).json({
                msg : "ERROR"
            })
        }

    })

////////////////////////////////////////////////////////////////
export default router;