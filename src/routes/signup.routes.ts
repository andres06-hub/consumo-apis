
import express from 'express';
import { Response, Request } from 'express';

//////////////////////////////////////7/////
const router = express.Router();


router.route('./signup')
    .post((req:Request, res:Response) => {

        // obtenemos los valores 
        const { firstName, lastName, ege, city, email, password } = req.params;

        try{

            // Pasamos los datos obtenidos

        }catch(err){

            console.log(err);
            //Respondemos al cliente
            res.status(401).json({
                msg:"...Error"
            })
        };
    })