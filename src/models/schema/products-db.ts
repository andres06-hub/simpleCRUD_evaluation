import { getRepository } from 'typeorm';
//Entidad
import { Product } from '../entity/Product'

// obtener productos -> TODOS
export const getProducts = async () => {
    //Obtenemso el datos
    const resultsProducts = await getRepository(Product).find();
    // validamos el resultado, lo obtenido 
    if(!resultsProducts){return undefined}
    //Retornamos los datos obtenidos
    return resultsProducts;
}