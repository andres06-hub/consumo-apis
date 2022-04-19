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
const express_1 = __importDefault(require("express"));
const signup_validator_1 = __importDefault(require("../validator/signup.validator"));
const signup_service_1 = require("../services/signup.service");
const signup_paths_1 = __importDefault(require("./paths/signup.paths"));
//////////////////////////////////////7/////
const router = express_1.default.Router();
// Deconstruimos
const { params, validate } = signup_validator_1.default;
// RUTA SIGN UP
router.route(signup_paths_1.default.signup)
    .get((req, res) => {
    res.send("Hello from /signUp");
})
    // Pasa primero por los validadores (params, validate)
    .post(params, validate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // obtenemos los valores 
    const { firstName, lastName, age, city, email, password } = req.body;
    try {
        // Pasamos los datos obtenidos
        const register = yield (0, signup_service_1.signup)({ firstName, lastName, age, city, email, password });
        // Validamos si la resouesta es diferente de indefinido es porque fue requistrado
        if (register != undefined) {
            res.status(200).json({
                register,
                msg: "User signed up successfully"
            });
            // Si es indefinido es porque le usuario ya existe
        }
        else {
            res.status(303).json({
                msg: "User exists !!"
            });
        }
    }
    catch (err) {
        console.log(err);
        //Respondemos al cliente
        res.status(401).json({
            msg: "...Error"
        });
    }
    ;
}));
//////////////////////////////////////////////////////////////////////////////////
exports.default = router;
