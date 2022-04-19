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
const comprar_paths_1 = __importDefault(require("./paths/comprar.paths"));
const jwt_validator_1 = __importDefault(require("../validator/jwt.validator"));
const comprar_validator_1 = __importDefault(require("../validator/comprar.validator"));
const auth_1 = require("../middlewares/auth");
const products_service_1 = require("../services/products.service");
////////////////////////////////////////////////////////
const router = express_1.default.Router();
// Deconstruimos
const { paramsJWT, validateJWT } = jwt_validator_1.default;
const { params, validate } = comprar_validator_1.default;
router.route(comprar_paths_1.default.comprar)
    .get(auth_1.isAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Welcome, Hello from /comprar');
}))
    // validamos los datos por el params - validate
    // Se valida el token - isAuth
    .post(paramsJWT, validateJWT, params, validate, auth_1.isAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // obtengo el dato
    const { idProduct } = req.body;
    try {
        // TODO -> VALIDAR SI EL PRODUCTO EXISTE EN LA DB
        //Validar si el producto exite
        const product = yield (0, products_service_1.validateProduct)(idProduct);
        if (product == undefined) {
            return res.status(404).json({ msg: "Product not exist!" });
        }
        return res.status(200).json({
            product,
            msg: "Compra OK",
        });
    }
    catch (err) {
        // mostramos el error por consola 
        console.log(err);
        // Respondemos al server
        return res.status(401).json({
            msg: "ERROR"
        });
    }
}));
////////////////////////////////////////////////////////////////
exports.default = router;
