// VAlidar datos para AUTORIZAR

////////////////////////////////////////////////////////////////
// import { getUser } from '../models/schema/user.login'
import bcrypt from '../service/bcrypt.service';
import { createToken } from '../service/token.service';

export default {

    //Obtenemos datos
    login : async (email : string, password : string) => {
        console.log("DATOS ENTREGADOS del cliente : ", email, password);
        
        //Obtenemos el usuario que coincida  con el email 
        // const userFound = await getUser(email);
        const userFound = true
        console.log("->LOGIN USER FOUND :: ", userFound);
        
        // Si hay un usuario 
        if (!userFound) {return false}

        //Obtenemos la contraseña del usuario obtenido
        //La contraseña esta hasheada
        // const passHash  = userFound?.password;
        const passHashmientras = "df,l,dlf,"
        //VAlidamos si la contraseña ontenida conincide con la de la DB

        if(bcrypt.verify(passHashmientras, password)){
            // Si se cumple
            //se crea el TOKEN
            const token = await createToken(email);
            console.log('TOKEN CREATED :: ', token);
            //Devolvemos el token
            return token;

        }
        // De lo contrario
        return false;
    }
}