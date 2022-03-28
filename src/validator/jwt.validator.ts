// Se valida el token
// Que si sea entregado don con Bearer
//Y la cabecera sea un 'Authorization'
import { Request, Response, NextFunction } from 'express';
import { header, validationResult } from 'express-validator';

export default {

    paramsJWT : [
        header('Authorization')
            .not().isEmpty().withMessage('Access token no provided')
            .matches(/^Bearer /).withMessage('Not a valid token')
    ],

    validateJWT : function(req:Request, res:Response, next:NextFunction){
        //Mostramos lo que nos llega 
        console.log("Heraders: ", req.headers);
        
        const errorRes = validationResult(req)
        if(!errorRes.isEmpty()){
            return res.status(422).json({
                error: errorRes.array()
            });
        }
        // Si no hay errores, continuamos
        next();        
    }
}