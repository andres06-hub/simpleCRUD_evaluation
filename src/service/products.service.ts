
import { getProduct } from '../models/schema/products-db';
import { createProduct } from '../models/schema/products-db';

export const validateProduct = async (name:string, price:number) =>{
    //Validamos si el producto ya existe
    const productFound = await getProduct(name)
    //condicinamos el producto
    console.log("Producto obtenido #$%::: ",productFound);
    if(productFound){return undefined}//producto ya existe
    // Se crea un producto
    const resultsProduct = await createProduct(name, price);
    //retornamos los resultados
    return resultsProduct;
}