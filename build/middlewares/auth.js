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
exports.isAuth = void 0;
const token_service_1 = require("../services/token.service");
const isAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //Se obtiene el token 
    const { authorization } = req.headers;
    // comprobacion de Undefined 
    if (!authorization)
        return res.status(401).json({ msg: 'Unauthorized' });
    // Si llega
    // obtenemos el token
    const token = authorization.split(' ')[1];
    console.log(`Token :: ${token}`);
    // Se valida el token
    const payload = yield (0, token_service_1.verifyToken)(token);
    // Si el True
    if (payload) {
        res.locals.payload = payload;
        // continuamos
        next();
    }
    else {
        return res.status(401).json({ msg: 'Invalid signature' });
    }
});
exports.isAuth = isAuth;
