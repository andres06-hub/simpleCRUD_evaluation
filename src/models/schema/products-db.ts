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

//Obtener un producto en especifico
//@parametro type->String
export const getProduct = async (name:string) => {
    //Obtenemos un resultado y lo retornamos
    // Esperamos a que obtenga
    const productFound = await getRepository(Product).findOne( { name });
    console.log("PRODUCT FOUND :: ",productFound);
    //Retornamos el resultado
    return productFound !== undefined;
}

//Crear un producto
export const createProduct = async (name : string, price : number) => {

    //Se crea la conexion al repositorio asignado
    const repository = getRepository(Product)
    // creamos el producto
    const newProduct = new Product();
    newProduct.name = name;
    newProduct.price = price;
    
    // Se guarda el producto
    const result = await repository.save(newProduct);
    console.log("Results new product :-: ", result);
    // retornamos el resultado
    return result;
}