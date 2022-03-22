// IMPORTACIONES
import express from "express";
import { Request, Response } from "express";
import path from "./paths/login.paths";
import { User } from '../interface/User';
import loginValidator from "../validator/login.validator";
import auth from '../services/auth.service';

///////////////////////////////////////////////
const router = express.Router();

//Deconstruimos 
const { params, validate } = loginValidator;
// TODO -> TERMINAR LA RUTA LOGIN CON QUERY
// TODO -> TERMINAR EL TOKEN
// RUTA LOGIN
router.route(path.login)
    .get((req:Request, res:Response)=>{
        res.send("LOGIN GET");
    })
    //Metodo POST
    //Pasamos los validadores antes de que lleguen a la ruta
    .post( params, validate, async (req:Request, res:Response)=>{
            
        // obtenemos los valores
        // const { email, password } = req.query as User;

        const email = req.query.email?.toString();
        const password = req.query.password?.toString();
        //Validamos que los datos si esten
        if (!email || !password){return res.status(400).json({msg:"Invalid data!"})  }

        console.log("DATA QUERY",typeof(email), password);
        // tratamos de hacer
        try {
            // Tratamos de obtener el TOKEN si el usuario esta registrad
            const token = await auth.login( email, password );
            // Si devuelve un false es por un error
            if (token === false) {
                // respondekos al cliente 
                return res.status(401).json({ msg:"Credentials invalid !!" })
            // por el contrario
            }else {
                console.log("200", token);
                
                //Respondemos 
                return res.status(200).json({ 
                    token,
                    msg:"login ok"
                });
            }
            // Por si ocurre un error
        } catch (err) {
            console.log(err);
            //Respondemos
            return res.status(401).json({
                msg: 'Invalidad Creadentials'
            })
            
        }
    });

/////////////////////////////////////////////////////////
export default router;
