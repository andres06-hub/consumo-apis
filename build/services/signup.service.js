"use strict";
// servicio de registros para usuarios
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
exports.signup = void 0;
const bcrypt_service_1 = __importDefault(require("../services/bcrypt.service"));
const user_db_1 = require("../models/schema/user-db");
// Se deconstruye
const { bcryptHash } = bcrypt_service_1.default;
//////////////////////////////////////////
const signup = (values) => __awaiter(void 0, void 0, void 0, function* () {
    // Definimos los datos 
    values = values;
    // Encriptamos la contraseña 
    const passHash = yield bcryptHash(values.password);
    // Pasamos los datos para guardar los datos 
    const userResults = yield (0, user_db_1.createUser)(values, passHash);
    // retornamos los resultados 
    return userResults;
});
exports.signup = signup;
