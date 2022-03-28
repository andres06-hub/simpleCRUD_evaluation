// VALIDADOR de la ruta '/login.routes'
import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Se exporta por defecto
export default {
    // Validamos los parametros (DATOS)
    params : [
        body('email')
            .not().isEmpty().withMessage("Empty File!")
            .isEmail().withMessage('Not validate email!'),
        body('password')
            .not().isEmpty().withMessage('Empty file!')
            .isLength({ min:8, max:12 })
    ],
    //Validador de los resultados del params
    validate : function (req:Request, res:Response, next:NextFunction) {
        //VAlidamos los errores
        const errors = validationResult(req);
        //COndicionamos
        //SI es diferente
        if(!errors.isEmpty()){
            return res.status(422).json({
                //Mostramos los errores 
                errors: errors.array()
            });
        }
        //Si no hay ningun errors
        //SI errors esta VACIO
        next();
        
    },
};