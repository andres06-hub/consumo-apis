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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_login_1 = require("../models/schema/users.login");
const bcrypt_service_1 = __importDefault(require("../services/bcrypt.service"));
const token_service_1 = require("../services/token.service");
//////////////////////////////////////////
exports.default = {
    // obtenemos datos 
    login: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("DATOS ENTREGADOS CLI || :: ", email, password);
        console.log("Auth de login");
        // Obtenemos el usuario 
        const userFound = yield (0, users_login_1.getUser)(email);
        console.log("->LOGIN : USER FOUND :: ", userFound);
        // Si hay un usuario
        if (!userFound) {
            return false;
        }
        // ? = Este es para comprobar si existe
        console.log("DATOS DE DB :: ", userFound.email, userFound.password);
        //Obtenemos la contraseña del usuario obtenido
        const passHash = userFound === null || userFound === void 0 ? void 0 : userFound.password;
        // validamos si la contraseña es valida
        if (bcrypt_service_1.default.verify(passHash, password)) {
            // si la contraseña coincide 
            // Creamos el token 
            const token = yield (0, token_service_1.createToken)(email);
            //mostramos el token 
            console.log("## " + token);
            // retornamos el token 
            return token;
            // si no concide
        }
        else {
            return false;
        }
    }),
};
