
import express from 'express';
import { Response, Request } from 'express';
import { UserSignup } from '../interface/User-signup';
import signupValidator from '../validator/signup.validator'
import { signup } from '../services/signup.service';
import path from './paths/signup.paths';

//////////////////////////////////////7/////
const router = express.Router();

// Deconstruimos
const { params, validate } = signupValidator;

// RUTA SIGN UP
router.route(path.signup)
    .get((req:Request, res:Response)=>{
        res.send("Hello from /signUp")
    })
    // Pasa primero por los validadores (params, validate)
    .post(params, validate, async (req:Request, res:Response) => {
        // obtenemos los valores 
        const { firstName, lastName, age, city, email, password } = req.body as UserSignup;
        try{
            // Pasamos los datos obtenidos
            const register = await signup( { firstName, lastName, age, city, email, password} );
            // Validamos si la resouesta es diferente de indefinido es porque fue requistrado
            if(register != undefined){
                res.status(200).json({
                    register,
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