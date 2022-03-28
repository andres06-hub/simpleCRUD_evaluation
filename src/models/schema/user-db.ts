import { UserSignup } from '../../interface/User-signup'
// Interface
import { getRepository } from 'typeorm';
// Entidad
import { User } from '../entity/User'

////////////////////////////////////////////////////////////////
// Creamos el usuario 
export const createUser = async (values: UserSignup, password : string) => {
    console.log("## Entro al createUser ##");
    // Creamos la conexión en la ENTIDAD
    const repository = getRepository(User);

    console.log("DATA ::: ", values);
    

    // Validamos si el usuario a registrar ya esta "registrado"
    const userFound : boolean = await validateUser(values.email);
    //Validamos si el usuairo fue encontrado
    if (userFound) return undefined;

    // ? SI EL USUARIO NO ESTA REGISTRADO
    // ? Se crea y regitras
    // Creamos un nuevo usuario
    const newUser = new User();
    // Asignamos datos
    newUser.firstName = values.firstName ;
    newUser.lastName = values.lastName ;
    newUser.email = values.email;
    // pasamos la pass encriptada
    newUser.password = password;

    //Esperamos a guardar 
    const result = await repository.save(newUser);
    console.log("\nResultas newUser :: ", result);
    // Retornamos los resultados
    return result;
}

// Validamos si el usuario ya esta registrado
// buscamos el usuario
const validateUser = async (email : string) => {

    // buscamos al usuario por el email
    const userFound = await getRepository(User).findOne({ email });
    console.log("Usuario REGISTRADO = ", userFound);
    
    // retornamos y nos devuelve un booleano
    return userFound !== undefined;
}
