//////////////////////////////////////////
// Importamos

import express from 'express';
import { Request, Response } from 'express';
import { getProducts } from '../models/schema/products-db';
///////////////////////////////////////////
const router = express.Router();

router.route('/products')
    .get( async (req:Request, res:Response) => {

        // Mostrar todos los productos 
        try {
            // Obtenemos los resultados
            const resultsProducts = await getProducts();
            // respondemos al server 
            if (resultsProducts === undefined){
                return res.status(500).json({
                    msg:"Error in server"
                })
            }else if (resultsProducts.length == 0){
                // mostramos por consola
                console.log('There is not data!');
                return res.status(404).json({
                    msg : 'There is not data!'
                })
            }
            return res.status(200).json({
                resultsProducts
            })
        } catch (err) {
            // Respondemos si hay un error 
            return res.status(401).json({
                msg:'....Error'
            });
        }
    })
//////////////////////////////////////////////
export default router;