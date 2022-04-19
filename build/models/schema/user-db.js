"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const typeorm_1 = require("typeorm");
//Entidad
const User_1 = require("../entity/User");
/////////////////////////////////////////////////
// Creamos un usuario
const createUser = (values, password) => __awaiter(void 0, void 0, void 0, function* () {
    // Creamos la conexión
    const repository = (0, typeorm_1.getRepository)(User_1.User);
    // Validamos si el usuario a registrar ya esta "registrado"
    const userFound = yield validateUser(values.email);
    //Validamos si el usuairo fue encontrado
    if (userFound)
        return undefined;
    // ? SI EL USUARIO NO ESTA REGISTRADO
    // ? Se crea y regitras
    // Creamos un nuevo usuario
    const newUser = new User_1.User();
    // Asignamos datos
    newUser.firstName = values.firstName;
    newUser.lastName = values.lastName;
    newUser.age = values.age;
    newUser.city = values.city;
    newUser.email = values.email;
    // pasamos la pass encriptada
    newUser.password = password;
    //Esperamos a guardar 
    const result = yield repository.save(newUser);
    console.log("\nResultas newUser :: ", result);
    // Retornamos los resultados
    return result;
});
exports.createUser = createUser;
// Validamos si el usuario ya esta registrado
// buscamos el usuario
const validateUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // buscamos al usuario por el email
    const userFound = yield (0, typeorm_1.getRepository)(User_1.User).findOne({ email });
    console.log("Usuario REGISTRADO = ", userFound);
    // retornamos y nos devuelve un booleano
    return userFound !== undefined;
});
