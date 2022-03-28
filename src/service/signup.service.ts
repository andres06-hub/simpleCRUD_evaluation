// servicio de registros para usuarios

// import { User } from '../interface/user';
import { UserSignup } from '../interface/User-signup';
import bcrypt from '../service/bcrypt.service';
import { createUser } from '../models/schema/user-db';

// Se deconstruye
const { bcryptHash } = bcrypt;
//////////////////////////////////////////
export const signup = async ( values:UserSignup ) : Promise<object | undefined> => {

    // Definimos los datos 
    values = values as UserSignup;
    console.log("---> contra ::: ", values.password);
    // Encriptamos la contraseña 
    const passHash = await bcryptHash(values.password);
    console.log("Despues del hash :: ", passHash);
    // Pasamos los datos para guardar los datos 
    const userResults = await createUser(values, passHash);
    console.log("Despues del createUser :: ", userResults);
    
    // retornamos los resultados 
    return userResults;

}