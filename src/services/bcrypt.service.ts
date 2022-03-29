
const bcrypt = require('bcrypt');
const saltRound : number  = 10;

////////////////////////////////////

export default {
    // Encriptamos contraseña
    bcryptHash : async function(value:string){
        return bcrypt.hashSync(value, saltRound);
    },

    verify : function(passHash:string, password:string) : boolean {
        // Comparamos el password haseado(DB) y el password llegado desde el cliente
        return bcrypt.compareSync(password, passHash);
    }
}