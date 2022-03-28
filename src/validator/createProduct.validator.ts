// Validamos los productos
// VALIDADOR de la ruta '/login.routes'
import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Se exporta por defecto
export default {
    // Validamos los parametros (DATOS)
    params : [
        body('name')
            .not().isEmpty().withMessage("Empty Field!")
            .isLength({ min: 1, max: 200}),
        body('price')
            .not().isEmpty().withMessage('Empty field!')
            .isNumeric().withMessage('Invalid field')
            .isLength({ min:8, max:12 }).withMessage('Invalid Price')
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