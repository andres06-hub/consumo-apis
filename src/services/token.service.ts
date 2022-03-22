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
export const verifyToken = async ( token : string ) => { 
    // leemos la llave
    const cert = readFileSync( join(process.cwd(),'.secret', 'segn.key') );
    // tratamos
    try {
        const decoded = jwt.verify(token, cert, { algorithms : ['RS256'] });
        return decoded;
    } catch (err) {
        // error message
        console.log(`Token ERROR : ${err}`);
        return undefined;
    }
}