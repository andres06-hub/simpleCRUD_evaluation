//Hacemos importaciones
import express from 'express';
import { Request, Response } from 'express';
//Importamos la ruta de los validadores
import loginValidator from '../validator/login.validator';

import auth from '../service/auth.service'
//////////////////////////////////////////////////////////

// Usamos la router
const router = express.Router();

//Deconstruimos los validadores
const { params, validate } = loginValidator;

router.route('/login')
    .get((req: Request, res: Response) => {
        //Respondemos al cliente 
        res.send("Hello from /login -> GET")
    })
    
    //Ruta POST
        // -> Pasamos los validadores
    .post(params,validate, async ( req : Request, res : Response ) => {
        //obtenemos los datos enviado por body 
        const { email, password } = req.body;
        //Tratamos de hacer
        try {
            //Pasamos los datos para validarlos y obtener el token
            const token = await auth.login(email, password)
            //Si devuelve un false es por un dato incorrecto
            if(token == false) {
                //Respondemos
                return res.status(401).json({msg:' invalid Credencials!'})
            }
            //Por lo contrario
            console.log("200", token);
            // Coinciden los datos
            return res.status(200).json({
                token,
                msg:'login OK'
            });
            
        //Si ocurre un error
        } catch (err) {
            console.log(err);
            //Respondemos
            return res.status(401).json({
                msg:'Invalid Credencials!'
            }); 
        };
    });
    


///////////////////////////////////////////////////////
// Exportamos las rutas

export default router;