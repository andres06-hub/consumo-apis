import jwt from 'jsonwebtoken';

import { readFileSync } from 'fs';
import { join } from 'path';

// Generamos y validamos los tokens
export const createToken = async ( email : string ) => {
    // Leemos la firma
    const key = readFileSync(
        join(process.cwd(), '.secret', 'sign.key')
    )
    // Retornamos el dato
    return jwt.sign( {email}, key, { algorithm: 'RS256', expiresIn: 60 * 60 } );
}

//Verificar el token obtenido 
