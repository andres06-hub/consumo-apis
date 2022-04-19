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
// IMPORTACIONES
const express_1 = __importDefault(require("express"));
const login_paths_1 = __importDefault(require("./paths/login.paths"));
const login_validator_1 = __importDefault(require("../validator/login.validator"));
const auth_service_1 = __importDefault(require("../services/auth.service"));
///////////////////////////////////////////////
const router = express_1.default.Router();
//Deconstruimos 
const { params, validate } = login_validator_1.default;
// RUTA LOGIN
router.route(login_paths_1.default.login)
    .get((req, res) => {
    res.status(200).json({
        msg: "LOGIN GET"
    });
})
    //Metodo POST
    //Pasamos los validadores antes de que lleguen a la ruta
    .post(params, validate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // obtenemos los valores
    // const { email, password } = req.query as User;
    var _a, _b;
    const email = (_a = req.query.email) === null || _a === void 0 ? void 0 : _a.toString();
    const password = (_b = req.query.password) === null || _b === void 0 ? void 0 : _b.toString();
    //Validamos que los datos si esten
    if (!email || !password) {
        return res.status(400).json({ msg: "Invalid data!" });
    }
    // console.log("DATA QUERY",typeof(email), password);
    // tratamos de hacer
    try {
        // Tratamos de obtener el TOKEN si el usuario esta registrad
        const token = yield auth_service_1.default.login(email, password);
        // Si devuelve un false es por un error
        if (token === false) {
            // respondekos al cliente 
            return res.status(401).json({ msg: "Credentials invalid !!" });
            // por el contrario
        }
        else {
            console.log("200", token);
            //Respondemos 
            return res.status(200).json({
                token,
                msg: "login ok"
            });
        }
        // Por si ocurre un error
    }
    catch (err) {
        console.log(err);
        //Respondemos
        return res.status(401).json({
            msg: 'Invalidad Creadentials'
        });
    }
}));
/////////////////////////////////////////////////////////
exports.default = router;
