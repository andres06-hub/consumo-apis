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
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = require("fs");
const path_1 = require("path");
// Generamos y validamos los tokens
const createToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    // Leemos la firma
    const key = (0, fs_1.readFileSync)((0, path_1.join)(process.cwd(), '.secret', 'sign.key'));
    // Retornamos el dato
    return jsonwebtoken_1.default.sign({ email }, key, { algorithm: 'RS256', expiresIn: 60 * 60 });
});
exports.createToken = createToken;
//Verificar el token obtenido 
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    // leemos la llave
    const cert = (0, fs_1.readFileSync)((0, path_1.join)(process.cwd(), '.secret', 'sign.key'));
    // tratamos
    try {
        const decoded = jsonwebtoken_1.default.verify(token, cert, { algorithms: ['RS256'] });
        return decoded;
    }
    catch (err) {
        // error message
        console.log(`Token ERROR : ${err}`);
        return undefined;
    }
});
exports.verifyToken = verifyToken;
