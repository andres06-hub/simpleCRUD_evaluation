// Ruta de crear producto
import express from 'express';
import { Response, Request } from "express";
//Importamos validadores
import createProductValidator from '../validator/createProduct.validator'
import jwtValidator from '../validator/jwt.validator'
//Importamos el validador token
import { isAuth } from '../middlewares/auth';
///
import { validateProduct } from '../service/products.service'
////////////////////////////////////////////////////////////////
const router = express.Router();

//Deconstruimos 
// !Validadores DATOS
const { params, validate } = createProductValidator;
// !Validadores JWT
const { paramsJWT, validateJWT } = jwtValidator;
//RUTA de crear producto
router.route('/createProduct')
//primero pasa verificando el token
// pasan los validadores de datos Y de JWT
    // *** ->Se valida el token - isAuth
    .post( paramsJWT, validateJWT, params, validate, isAuth, async (req:Request, res : Response) => {
        //Obtenemos los datos
        const { name, price } = req.body;
        //Tratar
        try {
            // Validamos si el producto existe 
            const resultProduct = await validateProduct(name, price)
            // validamos el resultado 
            console.log("--> ",resultProduct);
            
            if(resultProduct != undefined) {
                //Por el contrario
                return res.status(200).json({
                    msg:"Product created Successfully!"
                });
            }
            //Es porque el producto ya existe
            return res.status(404).json({
                msg:'Product exists!'
            });
        } catch (err) {
            // mostramos el error por consola 
            console.log(err);
            // Respondemos al server
            return res.status(401).json({
                msg : "ERROR"
            });
        }
    })
//////////////////////////////////////////////////////////////
export default router;



