// Se encarga de hasear y verificar el hash

///////////////////////////////
import bcrypt = require('bcrypt');
const saltRound : number = 10;

////////////////////////////////////////////////////////////////////////////

export default {
    //Encriptamos contraseña 
    bcryptHash : async function(value : string) {
        return bcrypt.hashSync(value, saltRound); 
    },

    //Verificar datos, que coincidan o no
    verify : function(passHash : string, password : string) : boolean {
        //se compara los datos , el hash , el otro
        return bcrypt.compareSync(password, passHash);
    }
}