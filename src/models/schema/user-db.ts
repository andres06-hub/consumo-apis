
import { getRepository } from 'typeorm';
// Interface
import { UserSignup } from '../../interface/User-signup';
//Entidad
import { User } from '../entity/User';

/////////////////////////////////////////////////
// Creamos un usuario
export const createUser = async (values : UserSignup , password : string) =>{

    // Creamos la conexión
    const repository = getRepository(User);

    // Validamos si el usuario a registrar ya esta "registrado"
    const userFound : boolean = await validateUser(values.email);
    //Validamos si el usuairo fue encontrado
    if (userFound) return undefined;

    // ? SI EL USUARIO NO ESTA REGISTRADO
    // ? Se crea y regitras
    
    // Creamos un nuevo usuario
    const newUser = new User();
    // Asignamos datos
    newUser.firstName = values.firstName ;
    newUser.lastName = values.lastName ;
    newUser.age = values.age;
    newUser.city = values.city;
    newUser.email = values.email;
    // pasamos la pass encriptada
    newUser.password = password;

    //Esperamos a guardar 
    const result = await repository.save(newUser);
    console.log("\nResultas newUser :: ", result);
    // Retornamos los resultados
    return result;
}

// Validamos si el usuario ya esta registrado
// buscamos el usuario
const validateUser = async (email : string) => {

    // buscamos al usuario por el email
    const userFound = await getRepository(User).findOne({ email });
    console.log("Usuario REGISTRADO = ", userFound);
    
    // retornamos y nos devuelve un booleano
    return userFound !== undefined;
}

