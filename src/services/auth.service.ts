import { getUser } from '../models/schema/users.login';
import bcrypt from '../services/bcrypt.service';

//////////////////////////////////////////

export default {
    // obtenemos datos 
    login : async (email: string, password: string) =>{


        // Obtenemos el usuario 
        const userFound = await getUser(email);
        console.log("->LOGIN : USER FOUND :: ", userFound);
        
        // Si hay un usuario
        if (!userFound){return false;}
        //Obtenemos la contraseña del usuario obtenido
        const passHash = userFound.password;
        // validamos si la contraseña es valida
        if (bcrypt.verify(passHash, password)){
            // si la contraseña coincide 
            // Creamos el token 
            const token = "SHSHDHHSK?'=)JSAKKA";
            //mostramos el token 
            console.log(token);
        // si no concide
        }else {return false}
    }
}