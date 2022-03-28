// Se importa las dependecias para crear el atributo
import jwt from 'jsonwebtoken';

import { readFileSync } from "fs";
import { join } from "path";

// CReamos, generamos el token
export const createToken = async (email : string) => {

    // Se crea el token
    const key = readFileSync(
        join(process.cwd(), '.secret', 'sign.key')
    )
    // retornamos el dato -> TOKEN
    return jwt.sign( { email }, key, { algorithm : 'RS256', expiresIn : 60 * 60 } )
}

//Verificar el token obtenido 
export const verifyToken = async ( token : string ) => { 
    // leemos la llave
    const cert = readFileSync( join(process.cwd(),'.secret', 'sign.key') );
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