// servicio de registros para usuarios

// import { User } from '../interface/user';
import { UserSignup } from '../interface/user-signup';
import bcrypt from '../services/bcrypt.service';
import { createUser } from '../models/schema/user-db';

// Se deconstruye
const { bcryptHash } = bcrypt;
//////////////////////////////////////////
export const signup = async ( values:UserSignup ) : Promise<object | undefined> => {

    // Definimos los datos 
    values = values as UserSignup;
    // Encriptamos la contraseña 
    const passHash = await bcryptHash(values.password);
    
    // Pasamos los datos para guardar los datos 
    const userResults = await createUser(values, passHash);
    // retornamos los resultados 
    return userResults;

}