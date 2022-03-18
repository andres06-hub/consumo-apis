
const bcrypt = require('bcrypt');
const saltRound : number  = 10

////////////////////////////////////

export default {
    // Encriptamos contraseña
    bcryptHash : async function(pass:string){
        return bcrypt.hashSync(pass, saltRound);
    },

    verify : function(passHash:string, password:string) : boolean {
        // Comparamos el password haseado(DB) y el password llegado desde el cliente
        return bcrypt.compareSync(password, passHash);
    }
}