
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
////////////////////////////////////////////////////////////////
// ! CONTROLADOR SOLO PARA BUSCAR UN USUARIO

// export const getUser = async (email: string)=> {
//     //Buscamos el usuario 
//     // y se retorna lo obtenido
//     return getRepository(User).findOne({ email });
// }