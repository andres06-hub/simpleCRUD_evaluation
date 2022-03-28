// Ruta de crear producto
import express from 'express';
import { Response, Request } from "express";
//Importamos validadores
import createProductValidator from '../validator/createProduct.validator'
import jwtValidator from '../validator/jwt.validator'
//Importamos el validador token
import { isAuth } from '../middlewares/auth';
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
    })



