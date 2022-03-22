import express from 'express';
import { Request, Response } from 'express';

// import path from './paths';
import tokenValidator from '../validator/jwt.validator';
////////////////////////////////////////////////////////

const router = express.Router();
// Deconstruimos
const { params, validate} = tokenValidator;

router.route('/comprar')

    // validamos los datos por el params - validate
    .post(params, validate, async(req:Request, res:Response) => {

        // obtengo el dato
        const { idProduct } = req.body;

        try {
            


        } catch (err) {
            // mostramos el error por consola 
            console.log(err);
            // Respondemos al server
            return res.status(401).json({
                msg : "ERROR"
            })
        }

    })