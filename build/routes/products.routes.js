"use strict";
//////////////////////////////////////////
// Importamos
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
const products_db_1 = require("../models/schema/products-db");
const auth_1 = require("../middlewares/auth");
///////////////////////////////////////////
const router = express_1.default.Router();
router.route('/products')
    .get(auth_1.isAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Mostrar todos los productos 
    try {
        // Obtenemos los resultados
        const resultsProducts = yield (0, products_db_1.getProducts)();
        // respondemos al server 
        if (resultsProducts === undefined) {
            return res.status(500).json({
                msg: "Error in server"
            });
        }
        else if (resultsProducts.length == 0) {
            // mostramos por consola
            console.log('There is not data!');
            return res.status(404).json({
                msg: 'There is not data!'
            });
        }
        return res.status(200).json({
            resultsProducts
        });
    }
    catch (err) {
        // Respondemos si hay un error 
        return res.status(401).json({
            msg: '....Error'
        });
    }
}));
//////////////////////////////////////////////
exports.default = router;
