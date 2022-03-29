import { getUser } from '../models/schema/users.login';
import bcrypt from '../services/bcrypt.service';
import { createToken } from '../services/token.service';

//////////////////////////////////////////

export default {
    // obtenemos datos 
    login : async (email: string, password: string) =>{

        console.log("DATOS ENTREGADOS CLI || :: ", email, password);
        console.log("Auth de login");
        
        // Obtenemos el usuario 
        const userFound = await getUser(email);
        console.log("->LOGIN : USER FOUND :: ", userFound);
        // Si hay un usuario
        if (!userFound){return false;}
        // ? = Este es para comprobar si existe

        console.log("DATOS DE DB :: ", userFound.email,userFound.password);
        
        //Obtenemos la contraseña del usuario obtenido
        const passHash = userFound?.password;
        // validamos si la contraseña es valida
        if (bcrypt.verify(passHash, password)){
            // si la contraseña coincide 
            // Creamos el token 
            const token = await createToken(email);
            //mostramos el token 
            console.log("## "+token);
            // retornamos el token 
            return token;   
        // si no concide
        }else {return false}
    },
}