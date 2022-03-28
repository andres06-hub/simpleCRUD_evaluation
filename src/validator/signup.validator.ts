
import { Request, Response, NextFunction } from 'express';

import { body, validationResult } from 'express-validator';

// exportamos las funciones - por defecto
export default{ 
    //Obtenemos los datos
    params : [
        body('firstName')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({min:1 , max:200}).withMessage('Debe de contener mas de 0 y menor a 200 '),
        body('lastName')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({min:1 , max:200}).withMessage('Debe de contener mas de 0 y menor a 200 '),
        body('email')
            .not().isEmpty().withMessage('Empty file !!')
            .isEmail().withMessage("Debe ser un Email"),
        body('password')
            .not().isEmpty().withMessage('Empty file !!')
            .isLength({min:8 , max:12}).withMessage('Debe de contener "8" o más caracteres ')
    ],

    // Validamos los errores
    validate : function (req:Request, res:Response, next:NextFunction) {
        // Validamos los errores
        const erros = validationResult(req);
        // SI es diferente 
        if (!erros.isEmpty()){
            return res.status(422).json({
                erros:erros.array()
            });
        }
        next();
    },
};