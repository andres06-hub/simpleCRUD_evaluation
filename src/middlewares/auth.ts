// Script para validar el token
////////////////////////////////////////////////////////
import { Request, Response, NextFunction } from "express";
import { verifyToken } from '../service/token.service';

//Damos autorizacion
export const isAuth = async (req: Request, res: Response, next:NextFunction) => {
    //Se obtiene el token 
    const { authorization } = req.headers;
    // comprobacion de Undefined 
    if(!authorization) return res.status(401).json({ msg: 'Unauthorized' });
    // Si llega
    // obtenemos el token
    const token = authorization.split(' ')[1];
    console.log(`Token :: ${token}`);

    // Se valida el token
    const payload = await verifyToken(token);
    // Si el True
    if(payload){
        res.locals.payload = payload
        // continuamos
        next();
    }else{
        return res.status(401).json({ msg : 'Invalid signature' });
    }
    
}