
import express from 'express';
import { Response, Request } from 'express';
import { User } from '../interface/user';
import signupValidator from '../validator/signup.validator'
import { signup } from '../services/signup.service';

//////////////////////////////////////7/////
const router = express.Router();

// Deconstruimos
const { params, validate } = signupValidator;

// RUTA 
router.route('/signup')
    // Pasa primero por los validadores (params, validate)
    .post(params, validate, async (req:Request, res:Response) => {

        // obtenemos los valores 
        const { firstName, lastName, age, city, email, password } = req.body as User;
        try{
            // Pasamos los datos obtenidos
            const register = await signup( { firstName, lastName, age, city, email, password} );
            // Validamos si la resouesta es diferente de indefinido es porque fue requistrado
            if(register != undefined){
                res.status(200).json({
                    msg:"User signed up successfully"
                })
            // Si es indefinido es porque le usuario ya existe
            }else{
                res.status(303).json({
                    msg : "User exists !!"
                });
            }
            
        }catch(err){
            console.log(err);
            //Respondemos al cliente
            res.status(401).json({
                msg:"...Error"
            })
        };
    })

//////////////////////////////////////////////////////////////////////////////////
export default router;