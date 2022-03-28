import express from 'express';
import { Response, Request } from 'express';
import signupValidator from '../validator/signup.validator';
import { UserSignup } from '../interface/User-signup';
import { signup } from '../service/signup.service'


////////////////////////////////////////////////////////////////////////
const router = express.Router();

// Deconstruimos
const { params, validate } = signupValidator;

router.route('/signup')
    .get((req: Request, res : Response) => {
        res.send("Hellos /signup from -> GET")

    })
    //RUTA POST
    //PRIMERO pasa por los validadores
    .post(params, validate, async (req: Request, res : Response) => {
        //Se obtiene los datos pasados por el usuario
        // as = es asignarlo a la ingterface
        const { firstName, lastName, email, password } = req.body as UserSignup;
        try {
            // Pasamos los datos obtenidos
            const register = await signup( { firstName, lastName, email, password} );
            // Validamos si la resouesta es diferente de indefinido es porque fue requistrado
            if(register != undefined){
                res.status(200).json({
                    register,
                    msg:"User signed up successfully"
                })
            // Si es indefinido es porque le usuario ya existe
            }else{
                res.status(303).json({
                    msg : "User exists !!"
                });
            }
        } catch (error) {
            
        }
    })

///////////////////////////////////////////////////////
export default router;