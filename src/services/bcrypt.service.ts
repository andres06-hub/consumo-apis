
const bcrypt = require('bcrypt');
const saltRound : number  = 10

////////////////////////////////////

export default {
    // Encriptamos contraseña
    bcryptHash : async function(pass:string){
        return bcrypt.hashSync(pass, saltRound);
    },
}