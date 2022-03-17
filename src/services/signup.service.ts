// servicio de registros para usuarios

import { User } from '../interface/user';
import bcrypt from '../services/bcrypt.service';

// Se deconstruye
const { bcryptHash } = bcrypt;
//////////////////////////////////////////
export const signup = async ( values:User ) : Promise<boolean | undefined> => {

    // Definimos los datos 
    values = values as User;
    // Encriptamos la contraseña 
    const passHash = await bcryptHash(values.password);
    
    // Pasamos los datos para guardar los datos 

    return true;
}